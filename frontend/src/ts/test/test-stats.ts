import Hangul from "hangul-js";
import Config from "../config";
import * as Misc from "../utils/misc";
import * as TestInput from "./test-input";
import * as TestWords from "./test-words";
import * as FunboxList from "./funbox/funbox-list";
import * as TestState from "./test-state";

type CharCount = {
  spaces: number;
  correctWordChars: number;
  allCorrectChars: number;
  incorrectChars: number;
  extraChars: number;
  missedChars: number;
  correctSpaces: number;
};

type Stats = {
  wpm: number;
  wpmRaw: number;
  acc: number;
  correctChars: number;
  incorrectChars: number;
  missedChars: number;
  extraChars: number;
  allChars: number;
  time: number;
  spaces: number;
  correctSpaces: number;
};

export class TestStatsImpl {
  invalid = false;
  start = 0;
  end = 0;
  start2 = 0;
  end2 = 0;
  lastSecondNotRound = false;
  lastResult?: SharedTypes.Result<SharedTypes.Config.Mode>;
  restartCount = 0;
  incompleteSeconds = 0;
  incompleteTests: SharedTypes.IncompleteTest[] = [];

  constructor(
    private testInput: TestInput.TestInputType,
    private config: SharedTypes.Config
  ) {}

  setLastResult(result: SharedTypes.Result<SharedTypes.Config.Mode>): void {
    this.lastResult = result;
  }
  getStats(): unknown {
    const ret = {
      lastResult: this.lastResult,
      start: this.start,
      end: this.end,
      afkHistory: this.testInput.afkHistory,
      errorHistory: this.testInput.errorHistory,
      wpmHistory: this.testInput.wpmHistory,
      rawHistory: this.testInput.rawHistory,
      burstHistory: this.testInput.burstHistory,
      keypressCountHistory: this.testInput.keypressCountHistory,
      currentBurstStart: this.testInput.currentBurstStart,
      lastSecondNotRound: this.lastSecondNotRound,
      missedWords: this.testInput.missedWords,
      accuracy: this.testInput.accuracy,
      keypressTimings: this.testInput.keypressTimings,
      keyOverlap: this.testInput.keyOverlap,
      wordsHistory: TestWords.words.list.slice(
        0,
        this.testInput.input.history.length
      ),
      inputHistory: this.testInput.input.history,
    };

    try {
      // @ts-expect-error
      ret.keypressTimings.spacing.average =
        (this.testInput.keypressTimings.spacing.array as number[]).reduce(
          (previous, current) => (current += previous)
        ) / this.testInput.keypressTimings.spacing.array.length;

      // @ts-expect-error
      ret.keypressTimings.spacing.sd = Misc.stdDev(
        this.testInput.keypressTimings.spacing.array as number[]
      );
    } catch (e) {
      //
    }
    try {
      // @ts-expect-error
      ret.keypressTimings.duration.average =
        (this.testInput.keypressTimings.duration.array as number[]).reduce(
          (previous, current) => (current += previous)
        ) / this.testInput.keypressTimings.duration.array.length;

      // @ts-expect-error
      ret.keypressTimings.duration.sd = Misc.stdDev(
        this.testInput.keypressTimings.duration.array as number[]
      );
    } catch (e) {
      //
    }

    return ret;
  }

  restart(): void {
    this.start = 0;
    this.end = 0;
    this.invalid = false;
    this.lastSecondNotRound = false;
  }

  incrementRestartCount(): void {
    this.restartCount++;
  }

  incrementIncompleteSeconds(val: number): void {
    this.incompleteSeconds += val;
  }

  pushIncompleteTest(acc: number, seconds: number): void {
    this.incompleteTests.push({ acc, seconds });
  }

  resetIncomplete(): void {
    this.restartCount = 0;
    this.incompleteSeconds = 0;
    this.incompleteTests = [];
  }

  setInvalid(): void {
    this.invalid = true;
  }

  calculateTestSeconds(now?: number): number {
    if (now === undefined) {
      return (this.end - this.start) / 1000;
    } else {
      return (now - this.start) / 1000;
    }
  }

  calculateWpmAndRaw(withDecimalPoints?: true): MonkeyTypes.WpmAndRaw {
    const testSeconds = this.calculateTestSeconds(
      TestState.isActive ? performance.now() : this.end
    );
    const chars = this.countChars();
    const wpm = Misc.roundTo2(
      ((chars.correctWordChars + chars.correctSpaces) * (60 / testSeconds)) / 5
    );
    const raw = Misc.roundTo2(
      ((chars.allCorrectChars +
        chars.spaces +
        chars.incorrectChars +
        chars.extraChars) *
        (60 / testSeconds)) /
        5
    );
    return {
      wpm: withDecimalPoints ? wpm : Math.round(wpm),
      raw: withDecimalPoints ? raw : Math.round(raw),
    };
  }

  setEnd(e: number): void {
    this.end = e;
    this.end2 = Date.now();
  }

  setStart(s: number): void {
    this.start = s;
    this.start2 = Date.now();
  }

  calculateAfkSeconds(testSeconds: number): number {
    let extraAfk = 0;
    if (testSeconds !== undefined) {
      if (this.config.mode === "time") {
        extraAfk =
          Math.round(testSeconds) - this.testInput.keypressCountHistory.length;
      } else {
        extraAfk =
          Math.ceil(testSeconds) - this.testInput.keypressCountHistory.length;
      }
      if (extraAfk < 0) extraAfk = 0;
      // console.log("-- extra afk debug");
      // console.log("should be " + Math.ceil(testSeconds));
      // console.log(keypressPerSecond.length);
      // console.log(
      //   `gonna add extra ${extraAfk} seconds of afk because of no keypress data`
      // );
    }
    const ret = this.testInput.afkHistory.filter((afk) => afk).length;
    return ret + extraAfk;
  }

  setLastSecondNotRound(): void {
    this.lastSecondNotRound = true;
  }

  calculateBurst(): number {
    const containsKorean = this.testInput.input.getKoreanStatus();
    const timeToWrite =
      (performance.now() - this.testInput.currentBurstStart) / 1000;
    let wordLength: number;
    wordLength = !containsKorean
      ? this.testInput.input.current.length
      : Hangul.disassemble(this.testInput.input.current).length;
    if (wordLength === 0) {
      wordLength = !containsKorean
        ? this.testInput.input.getHistoryLast()?.length ?? 0
        : Hangul.disassemble(this.testInput.input.getHistoryLast() as string)
            ?.length ?? 0;
    }
    if (wordLength === 0) return 0;
    const speed = Misc.roundTo2((wordLength * (60 / timeToWrite)) / 5);
    return Math.round(speed);
  }

  calculateAccuracy(): number {
    const acc =
      (this.testInput.accuracy.correct /
        (this.testInput.accuracy.correct + this.testInput.accuracy.incorrect)) *
      100;
    return isNaN(acc) ? 100 : acc;
  }

  removeAfkData(): void {
    const testSeconds = this.calculateTestSeconds();
    this.testInput.keypressCountHistory.splice(testSeconds);
    this.testInput.wpmHistory.splice(testSeconds);
    this.testInput.burstHistory.splice(testSeconds);
    this.testInput.rawHistory.splice(testSeconds);
  }

  getInputWords(): string[] {
    const containsKorean = this.testInput.input.getKoreanStatus();

    let inputWords = [...this.testInput.input.history];

    if (TestState.isActive) {
      inputWords.push(this.testInput.input.current);
    }

    if (containsKorean) {
      inputWords = inputWords.map((w) => Hangul.disassemble(w).join(""));
    }

    return inputWords;
  }

  getTargetWords(): string[] {
    const containsKorean = this.testInput.input.getKoreanStatus();

    let targetWords = [
      ...(this.config.mode === "zen"
        ? this.testInput.input.history
        : TestWords.words.list),
    ];

    if (TestState.isActive) {
      targetWords.push(
        this.config.mode === "zen"
          ? this.testInput.input.current
          : TestWords.words.getCurrent()
      );
    }

    if (containsKorean) {
      targetWords = targetWords.map((w) => Hangul.disassemble(w).join(""));
    }

    return targetWords;
  }

  countChars(): CharCount {
    let correctWordChars = 0;
    let correctChars = 0;
    let incorrectChars = 0;
    let extraChars = 0;
    let missedChars = 0;
    let spaces = 0;
    let correctspaces = 0;

    const inputWords = this.getInputWords();
    const targetWords = this.getTargetWords();

    for (let i = 0; i < inputWords.length; i++) {
      const inputWord = inputWords[i] as string;
      const targetWord = targetWords[i] as string;

      if (inputWord === targetWord) {
        //the word is correct
        correctWordChars += targetWord.length;
        correctChars += targetWord.length;
        if (
          i < inputWords.length - 1 &&
          Misc.getLastChar(inputWord as string) !== "\n"
        ) {
          correctspaces++;
        }
      } else if (inputWord.length >= targetWord.length) {
        //too many chars
        for (let c = 0; c < inputWord.length; c++) {
          if (c < targetWord.length) {
            //on char that still has a word list pair
            if (inputWord[c] === targetWord[c]) {
              correctChars++;
            } else {
              incorrectChars++;
            }
          } else {
            //on char that is extra
            extraChars++;
          }
        }
      } else {
        //not enough chars
        const toAdd = {
          correct: 0,
          incorrect: 0,
          missed: 0,
        };
        for (let c = 0; c < targetWord.length; c++) {
          if (c < inputWord.length) {
            //on char that still has a word list pair
            if (inputWord[c] === targetWord[c]) {
              toAdd.correct++;
            } else {
              toAdd.incorrect++;
            }
          } else {
            //on char that is extra
            toAdd.missed++;
          }
        }
        correctChars += toAdd.correct;
        incorrectChars += toAdd.incorrect;
        if (i === inputWords.length - 1 && this.config.mode === "time") {
          //last word - check if it was all correct - add to correct word chars
          if (toAdd.incorrect === 0) correctWordChars += toAdd.correct;
        } else {
          missedChars += toAdd.missed;
        }
      }
      if (i < inputWords.length - 1) {
        spaces++;
      }
    }
    if (
      FunboxList.get(this.config.funbox).find((f) =>
        f.properties?.includes("nospace")
      )
    ) {
      spaces = 0;
      correctspaces = 0;
    }
    return {
      spaces: spaces,
      correctWordChars: correctWordChars,
      allCorrectChars: correctChars,
      incorrectChars:
        this.config.mode === "zen"
          ? this.testInput.accuracy.incorrect
          : incorrectChars,
      extraChars: extraChars,
      missedChars: missedChars,
      correctSpaces: correctspaces,
    };
  }

  calculateStats(): Stats {
    console.debug("Calculating result stats");
    let testSeconds = this.calculateTestSeconds();
    console.debug(
      "Test seconds",
      testSeconds,
      " (date based) ",
      (this.end2 - this.start2) / 1000,
      " (performance.now based)"
    );
    if (Config.mode !== "custom") {
      testSeconds = Misc.roundTo2(testSeconds);
      console.debug(
        "Mode is not custom - rounding to 2. New time: ",
        testSeconds
      );
    }
    const chars = this.countChars();
    const { wpm, raw } = this.calculateWpmAndRaw(true);
    const acc = Misc.roundTo2(this.calculateAccuracy());
    const ret = {
      wpm: isNaN(wpm) ? 0 : wpm,
      wpmRaw: isNaN(raw) ? 0 : raw,
      acc: acc,
      correctChars: chars.correctWordChars,
      incorrectChars: chars.incorrectChars,
      missedChars: chars.missedChars,
      extraChars: chars.extraChars,
      allChars:
        chars.allCorrectChars +
        chars.spaces +
        chars.incorrectChars +
        chars.extraChars,
      time: Misc.roundTo2(testSeconds),
      spaces: chars.spaces,
      correctSpaces: chars.correctSpaces,
    };
    console.debug("Result stats", ret);
    return ret;
  }
}

export default new TestStatsImpl(TestInput, Config);

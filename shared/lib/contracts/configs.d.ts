import { z } from "zod";
export declare const GetConfigResponseSchema: z.ZodObject<
  z.objectUtil.extendShape<
    {
      message: z.ZodString;
    },
    {
      data: z.ZodNullable<
        z.ZodObject<
          {
            theme: z.ZodOptional<z.ZodString>;
            themeLight: z.ZodOptional<z.ZodString>;
            themeDark: z.ZodOptional<z.ZodString>;
            autoSwitchTheme: z.ZodOptional<z.ZodBoolean>;
            customTheme: z.ZodOptional<z.ZodBoolean>;
            customThemeColors: z.ZodOptional<
              z.ZodTuple<
                [
                  z.ZodString,
                  z.ZodString,
                  z.ZodString,
                  z.ZodString,
                  z.ZodString,
                  z.ZodString,
                  z.ZodString,
                  z.ZodString,
                  z.ZodString,
                  z.ZodString
                ],
                null
              >
            >;
            favThemes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            showKeyTips: z.ZodOptional<z.ZodBoolean>;
            smoothCaret: z.ZodOptional<
              z.ZodEnum<["off", "slow", "medium", "fast"]>
            >;
            quickRestart: z.ZodOptional<
              z.ZodEnum<["off", "esc", "tab", "enter"]>
            >;
            punctuation: z.ZodOptional<z.ZodBoolean>;
            numbers: z.ZodOptional<z.ZodBoolean>;
            words: z.ZodOptional<z.ZodNumber>;
            time: z.ZodOptional<z.ZodNumber>;
            mode: z.ZodOptional<
              z.ZodUnion<
                [
                  z.ZodEnum<["time", "words", "quote"]>,
                  z.ZodEnum<["custom"]>,
                  z.ZodEnum<["zen"]>
                ]
              >
            >;
            quoteLength: z.ZodOptional<
              z.ZodArray<
                z.ZodUnion<
                  [
                    z.ZodLiteral<-3>,
                    z.ZodLiteral<-2>,
                    z.ZodLiteral<-1>,
                    z.ZodLiteral<0>,
                    z.ZodLiteral<1>,
                    z.ZodLiteral<2>,
                    z.ZodLiteral<3>
                  ]
                >,
                "many"
              >
            >;
            language: z.ZodOptional<z.ZodString>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            freedomMode: z.ZodOptional<z.ZodBoolean>;
            difficulty: z.ZodOptional<
              z.ZodEnum<["normal", "expert", "master"]>
            >;
            blindMode: z.ZodOptional<z.ZodBoolean>;
            quickEnd: z.ZodOptional<z.ZodBoolean>;
            caretStyle: z.ZodOptional<
              z.ZodEnum<
                [
                  "off",
                  "default",
                  "block",
                  "outline",
                  "underline",
                  "carrot",
                  "banana"
                ]
              >
            >;
            paceCaretStyle: z.ZodOptional<
              z.ZodEnum<
                [
                  "off",
                  "default",
                  "block",
                  "outline",
                  "underline",
                  "carrot",
                  "banana"
                ]
              >
            >;
            flipTestColors: z.ZodOptional<z.ZodBoolean>;
            layout: z.ZodOptional<z.ZodString>;
            funbox: z.ZodOptional<z.ZodString>;
            confidenceMode: z.ZodOptional<z.ZodEnum<["off", "on", "max"]>>;
            indicateTypos: z.ZodOptional<
              z.ZodEnum<["off", "below", "replace"]>
            >;
            timerStyle: z.ZodOptional<
              z.ZodEnum<["off", "bar", "text", "mini"]>
            >;
            liveSpeedStyle: z.ZodOptional<z.ZodEnum<["off", "text", "mini"]>>;
            liveAccStyle: z.ZodOptional<z.ZodEnum<["off", "text", "mini"]>>;
            liveBurstStyle: z.ZodOptional<z.ZodEnum<["off", "text", "mini"]>>;
            colorfulMode: z.ZodOptional<z.ZodBoolean>;
            randomTheme: z.ZodOptional<
              z.ZodEnum<["off", "on", "fav", "light", "dark", "custom"]>
            >;
            timerColor: z.ZodOptional<
              z.ZodEnum<["black", "sub", "text", "main"]>
            >;
            timerOpacity: z.ZodOptional<
              z.ZodEnum<["0.25", "0.5", "0.75", "1"]>
            >;
            stopOnError: z.ZodOptional<z.ZodEnum<["off", "word", "letter"]>>;
            showAllLines: z.ZodOptional<z.ZodBoolean>;
            keymapMode: z.ZodOptional<
              z.ZodEnum<["off", "static", "react", "next"]>
            >;
            keymapStyle: z.ZodOptional<
              z.ZodEnum<
                [
                  "staggered",
                  "alice",
                  "matrix",
                  "split",
                  "split_matrix",
                  "steno",
                  "steno_matrix"
                ]
              >
            >;
            keymapLegendStyle: z.ZodOptional<
              z.ZodEnum<["lowercase", "uppercase", "blank", "dynamic"]>
            >;
            keymapLayout: z.ZodOptional<z.ZodString>;
            keymapShowTopRow: z.ZodOptional<
              z.ZodEnum<["always", "layout", "never"]>
            >;
            fontFamily: z.ZodOptional<z.ZodString>;
            smoothLineScroll: z.ZodOptional<z.ZodBoolean>;
            alwaysShowDecimalPlaces: z.ZodOptional<z.ZodBoolean>;
            alwaysShowWordsHistory: z.ZodOptional<z.ZodBoolean>;
            singleListCommandLine: z.ZodOptional<z.ZodEnum<["manual", "on"]>>;
            capsLockWarning: z.ZodOptional<z.ZodBoolean>;
            playSoundOnError: z.ZodOptional<
              z.ZodEnum<["off", "1", "2", "3", "4"]>
            >;
            playSoundOnClick: z.ZodOptional<
              z.ZodEnum<
                [
                  "off",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15"
                ]
              >
            >;
            soundVolume: z.ZodOptional<z.ZodEnum<["0.1", "0.5", "1.0"]>>;
            startGraphsAtZero: z.ZodOptional<z.ZodBoolean>;
            showOutOfFocusWarning: z.ZodOptional<z.ZodBoolean>;
            paceCaret: z.ZodOptional<
              z.ZodEnum<["off", "average", "pb", "last", "custom", "daily"]>
            >;
            paceCaretCustomSpeed: z.ZodOptional<z.ZodNumber>;
            repeatedPace: z.ZodOptional<z.ZodBoolean>;
            accountChart: z.ZodOptional<
              z.ZodTuple<
                [
                  z.ZodEnum<["on", "off"]>,
                  z.ZodEnum<["on", "off"]>,
                  z.ZodEnum<["on", "off"]>,
                  z.ZodEnum<["on", "off"]>
                ],
                null
              >
            >;
            minWpm: z.ZodOptional<z.ZodEnum<["off", "custom"]>>;
            minWpmCustomSpeed: z.ZodOptional<z.ZodNumber>;
            highlightMode: z.ZodOptional<
              z.ZodEnum<
                [
                  "off",
                  "letter",
                  "word",
                  "next_word",
                  "next_two_words",
                  "next_three_words"
                ]
              >
            >;
            tapeMode: z.ZodOptional<z.ZodEnum<["off", "letter", "word"]>>;
            typingSpeedUnit: z.ZodOptional<
              z.ZodEnum<["wpm", "cpm", "wps", "cps", "wph"]>
            >;
            ads: z.ZodOptional<z.ZodEnum<["off", "result", "on", "sellout"]>>;
            hideExtraLetters: z.ZodOptional<z.ZodBoolean>;
            strictSpace: z.ZodOptional<z.ZodBoolean>;
            minAcc: z.ZodOptional<z.ZodEnum<["off", "custom"]>>;
            minAccCustom: z.ZodOptional<z.ZodNumber>;
            monkey: z.ZodOptional<z.ZodBoolean>;
            repeatQuotes: z.ZodOptional<z.ZodEnum<["off", "typing"]>>;
            oppositeShiftMode: z.ZodOptional<
              z.ZodEnum<["off", "on", "keymap"]>
            >;
            customBackground: z.ZodOptional<
              z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>
            >;
            customBackgroundSize: z.ZodOptional<
              z.ZodEnum<["cover", "contain", "max"]>
            >;
            customBackgroundFilter: z.ZodOptional<
              z.ZodTuple<
                [z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber],
                null
              >
            >;
            customLayoutfluid: z.ZodOptional<z.ZodString>;
            monkeyPowerLevel: z.ZodOptional<
              z.ZodEnum<["off", "1", "2", "3", "4"]>
            >;
            minBurst: z.ZodOptional<z.ZodEnum<["off", "fixed", "flex"]>>;
            minBurstCustomSpeed: z.ZodOptional<z.ZodNumber>;
            burstHeatmap: z.ZodOptional<z.ZodBoolean>;
            britishEnglish: z.ZodOptional<z.ZodBoolean>;
            lazyMode: z.ZodOptional<z.ZodBoolean>;
            showAverage: z.ZodOptional<
              z.ZodEnum<["off", "speed", "acc", "both"]>
            >;
            maxLineWidth: z.ZodOptional<
              z.ZodUnion<[z.ZodNumber, z.ZodLiteral<0>]>
            >;
          },
          "strict",
          z.ZodTypeAny,
          {
            layout?: string;
            time?: number;
            words?: number;
            theme?: string;
            themeLight?: string;
            themeDark?: string;
            autoSwitchTheme?: boolean;
            customTheme?: boolean;
            customThemeColors?: [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              ...unknown[]
            ];
            favThemes?: string[];
            showKeyTips?: boolean;
            smoothCaret?: "off" | "slow" | "medium" | "fast";
            quickRestart?: "off" | "esc" | "tab" | "enter";
            punctuation?: boolean;
            numbers?: boolean;
            mode?: "custom" | "time" | "words" | "quote" | "zen";
            quoteLength?: (0 | 2 | 1 | 3 | -3 | -2 | -1)[];
            language?: string;
            fontSize?: number;
            freedomMode?: boolean;
            difficulty?: "normal" | "expert" | "master";
            blindMode?: boolean;
            quickEnd?: boolean;
            caretStyle?:
              | "off"
              | "default"
              | "block"
              | "outline"
              | "underline"
              | "carrot"
              | "banana";
            paceCaretStyle?:
              | "off"
              | "default"
              | "block"
              | "outline"
              | "underline"
              | "carrot"
              | "banana";
            flipTestColors?: boolean;
            funbox?: string;
            confidenceMode?: "off" | "on" | "max";
            indicateTypos?: "replace" | "off" | "below";
            timerStyle?: "off" | "bar" | "text" | "mini";
            liveSpeedStyle?: "off" | "text" | "mini";
            liveAccStyle?: "off" | "text" | "mini";
            liveBurstStyle?: "off" | "text" | "mini";
            colorfulMode?: boolean;
            randomTheme?: "off" | "custom" | "on" | "fav" | "light" | "dark";
            timerColor?: "sub" | "text" | "black" | "main";
            timerOpacity?: "1" | "0.25" | "0.5" | "0.75";
            stopOnError?: "off" | "word" | "letter";
            showAllLines?: boolean;
            keymapMode?: "off" | "static" | "react" | "next";
            keymapStyle?:
              | "split"
              | "staggered"
              | "alice"
              | "matrix"
              | "split_matrix"
              | "steno"
              | "steno_matrix";
            keymapLegendStyle?: "lowercase" | "uppercase" | "blank" | "dynamic";
            keymapLayout?: string;
            keymapShowTopRow?: "never" | "always" | "layout";
            fontFamily?: string;
            smoothLineScroll?: boolean;
            alwaysShowDecimalPlaces?: boolean;
            alwaysShowWordsHistory?: boolean;
            singleListCommandLine?: "on" | "manual";
            capsLockWarning?: boolean;
            playSoundOnError?: "1" | "off" | "2" | "3" | "4";
            playSoundOnClick?:
              | "1"
              | "off"
              | "2"
              | "3"
              | "4"
              | "5"
              | "6"
              | "7"
              | "8"
              | "9"
              | "10"
              | "11"
              | "12"
              | "13"
              | "14"
              | "15";
            soundVolume?: "0.5" | "0.1" | "1.0";
            startGraphsAtZero?: boolean;
            showOutOfFocusWarning?: boolean;
            paceCaret?: "off" | "custom" | "average" | "pb" | "last" | "daily";
            paceCaretCustomSpeed?: number;
            repeatedPace?: boolean;
            accountChart?: [
              "off" | "on",
              "off" | "on",
              "off" | "on",
              "off" | "on",
              ...unknown[]
            ];
            minWpm?: "off" | "custom";
            minWpmCustomSpeed?: number;
            highlightMode?:
              | "off"
              | "word"
              | "letter"
              | "next_word"
              | "next_two_words"
              | "next_three_words";
            tapeMode?: "off" | "word" | "letter";
            typingSpeedUnit?: "wpm" | "cpm" | "wps" | "cps" | "wph";
            ads?: "off" | "on" | "result" | "sellout";
            hideExtraLetters?: boolean;
            strictSpace?: boolean;
            minAcc?: "off" | "custom";
            minAccCustom?: number;
            monkey?: boolean;
            repeatQuotes?: "off" | "typing";
            oppositeShiftMode?: "off" | "on" | "keymap";
            customBackground?: string;
            customBackgroundSize?: "max" | "cover" | "contain";
            customBackgroundFilter?: [
              number,
              number,
              number,
              number,
              ...unknown[]
            ];
            customLayoutfluid?: string;
            monkeyPowerLevel?: "1" | "off" | "2" | "3" | "4";
            minBurst?: "fixed" | "off" | "flex";
            minBurstCustomSpeed?: number;
            burstHeatmap?: boolean;
            britishEnglish?: boolean;
            lazyMode?: boolean;
            showAverage?: "off" | "speed" | "acc" | "both";
            maxLineWidth?: number;
          },
          {
            layout?: string;
            time?: number;
            words?: number;
            theme?: string;
            themeLight?: string;
            themeDark?: string;
            autoSwitchTheme?: boolean;
            customTheme?: boolean;
            customThemeColors?: [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              ...unknown[]
            ];
            favThemes?: string[];
            showKeyTips?: boolean;
            smoothCaret?: "off" | "slow" | "medium" | "fast";
            quickRestart?: "off" | "esc" | "tab" | "enter";
            punctuation?: boolean;
            numbers?: boolean;
            mode?: "custom" | "time" | "words" | "quote" | "zen";
            quoteLength?: (0 | 2 | 1 | 3 | -3 | -2 | -1)[];
            language?: string;
            fontSize?: number;
            freedomMode?: boolean;
            difficulty?: "normal" | "expert" | "master";
            blindMode?: boolean;
            quickEnd?: boolean;
            caretStyle?:
              | "off"
              | "default"
              | "block"
              | "outline"
              | "underline"
              | "carrot"
              | "banana";
            paceCaretStyle?:
              | "off"
              | "default"
              | "block"
              | "outline"
              | "underline"
              | "carrot"
              | "banana";
            flipTestColors?: boolean;
            funbox?: string;
            confidenceMode?: "off" | "on" | "max";
            indicateTypos?: "replace" | "off" | "below";
            timerStyle?: "off" | "bar" | "text" | "mini";
            liveSpeedStyle?: "off" | "text" | "mini";
            liveAccStyle?: "off" | "text" | "mini";
            liveBurstStyle?: "off" | "text" | "mini";
            colorfulMode?: boolean;
            randomTheme?: "off" | "custom" | "on" | "fav" | "light" | "dark";
            timerColor?: "sub" | "text" | "black" | "main";
            timerOpacity?: "1" | "0.25" | "0.5" | "0.75";
            stopOnError?: "off" | "word" | "letter";
            showAllLines?: boolean;
            keymapMode?: "off" | "static" | "react" | "next";
            keymapStyle?:
              | "split"
              | "staggered"
              | "alice"
              | "matrix"
              | "split_matrix"
              | "steno"
              | "steno_matrix";
            keymapLegendStyle?: "lowercase" | "uppercase" | "blank" | "dynamic";
            keymapLayout?: string;
            keymapShowTopRow?: "never" | "always" | "layout";
            fontFamily?: string;
            smoothLineScroll?: boolean;
            alwaysShowDecimalPlaces?: boolean;
            alwaysShowWordsHistory?: boolean;
            singleListCommandLine?: "on" | "manual";
            capsLockWarning?: boolean;
            playSoundOnError?: "1" | "off" | "2" | "3" | "4";
            playSoundOnClick?:
              | "1"
              | "off"
              | "2"
              | "3"
              | "4"
              | "5"
              | "6"
              | "7"
              | "8"
              | "9"
              | "10"
              | "11"
              | "12"
              | "13"
              | "14"
              | "15";
            soundVolume?: "0.5" | "0.1" | "1.0";
            startGraphsAtZero?: boolean;
            showOutOfFocusWarning?: boolean;
            paceCaret?: "off" | "custom" | "average" | "pb" | "last" | "daily";
            paceCaretCustomSpeed?: number;
            repeatedPace?: boolean;
            accountChart?: [
              "off" | "on",
              "off" | "on",
              "off" | "on",
              "off" | "on",
              ...unknown[]
            ];
            minWpm?: "off" | "custom";
            minWpmCustomSpeed?: number;
            highlightMode?:
              | "off"
              | "word"
              | "letter"
              | "next_word"
              | "next_two_words"
              | "next_three_words";
            tapeMode?: "off" | "word" | "letter";
            typingSpeedUnit?: "wpm" | "cpm" | "wps" | "cps" | "wph";
            ads?: "off" | "on" | "result" | "sellout";
            hideExtraLetters?: boolean;
            strictSpace?: boolean;
            minAcc?: "off" | "custom";
            minAccCustom?: number;
            monkey?: boolean;
            repeatQuotes?: "off" | "typing";
            oppositeShiftMode?: "off" | "on" | "keymap";
            customBackground?: string;
            customBackgroundSize?: "max" | "cover" | "contain";
            customBackgroundFilter?: [
              number,
              number,
              number,
              number,
              ...unknown[]
            ];
            customLayoutfluid?: string;
            monkeyPowerLevel?: "1" | "off" | "2" | "3" | "4";
            minBurst?: "fixed" | "off" | "flex";
            minBurstCustomSpeed?: number;
            burstHeatmap?: boolean;
            britishEnglish?: boolean;
            lazyMode?: boolean;
            showAverage?: "off" | "speed" | "acc" | "both";
            maxLineWidth?: number;
          }
        >
      >;
    }
  >,
  z.UnknownKeysParam,
  z.ZodTypeAny,
  {
    message?: string;
    data?: {
      layout?: string;
      time?: number;
      words?: number;
      theme?: string;
      themeLight?: string;
      themeDark?: string;
      autoSwitchTheme?: boolean;
      customTheme?: boolean;
      customThemeColors?: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        ...unknown[]
      ];
      favThemes?: string[];
      showKeyTips?: boolean;
      smoothCaret?: "off" | "slow" | "medium" | "fast";
      quickRestart?: "off" | "esc" | "tab" | "enter";
      punctuation?: boolean;
      numbers?: boolean;
      mode?: "custom" | "time" | "words" | "quote" | "zen";
      quoteLength?: (0 | 2 | 1 | 3 | -3 | -2 | -1)[];
      language?: string;
      fontSize?: number;
      freedomMode?: boolean;
      difficulty?: "normal" | "expert" | "master";
      blindMode?: boolean;
      quickEnd?: boolean;
      caretStyle?:
        | "off"
        | "default"
        | "block"
        | "outline"
        | "underline"
        | "carrot"
        | "banana";
      paceCaretStyle?:
        | "off"
        | "default"
        | "block"
        | "outline"
        | "underline"
        | "carrot"
        | "banana";
      flipTestColors?: boolean;
      funbox?: string;
      confidenceMode?: "off" | "on" | "max";
      indicateTypos?: "replace" | "off" | "below";
      timerStyle?: "off" | "bar" | "text" | "mini";
      liveSpeedStyle?: "off" | "text" | "mini";
      liveAccStyle?: "off" | "text" | "mini";
      liveBurstStyle?: "off" | "text" | "mini";
      colorfulMode?: boolean;
      randomTheme?: "off" | "custom" | "on" | "fav" | "light" | "dark";
      timerColor?: "sub" | "text" | "black" | "main";
      timerOpacity?: "1" | "0.25" | "0.5" | "0.75";
      stopOnError?: "off" | "word" | "letter";
      showAllLines?: boolean;
      keymapMode?: "off" | "static" | "react" | "next";
      keymapStyle?:
        | "split"
        | "staggered"
        | "alice"
        | "matrix"
        | "split_matrix"
        | "steno"
        | "steno_matrix";
      keymapLegendStyle?: "lowercase" | "uppercase" | "blank" | "dynamic";
      keymapLayout?: string;
      keymapShowTopRow?: "never" | "always" | "layout";
      fontFamily?: string;
      smoothLineScroll?: boolean;
      alwaysShowDecimalPlaces?: boolean;
      alwaysShowWordsHistory?: boolean;
      singleListCommandLine?: "on" | "manual";
      capsLockWarning?: boolean;
      playSoundOnError?: "1" | "off" | "2" | "3" | "4";
      playSoundOnClick?:
        | "1"
        | "off"
        | "2"
        | "3"
        | "4"
        | "5"
        | "6"
        | "7"
        | "8"
        | "9"
        | "10"
        | "11"
        | "12"
        | "13"
        | "14"
        | "15";
      soundVolume?: "0.5" | "0.1" | "1.0";
      startGraphsAtZero?: boolean;
      showOutOfFocusWarning?: boolean;
      paceCaret?: "off" | "custom" | "average" | "pb" | "last" | "daily";
      paceCaretCustomSpeed?: number;
      repeatedPace?: boolean;
      accountChart?: [
        "off" | "on",
        "off" | "on",
        "off" | "on",
        "off" | "on",
        ...unknown[]
      ];
      minWpm?: "off" | "custom";
      minWpmCustomSpeed?: number;
      highlightMode?:
        | "off"
        | "word"
        | "letter"
        | "next_word"
        | "next_two_words"
        | "next_three_words";
      tapeMode?: "off" | "word" | "letter";
      typingSpeedUnit?: "wpm" | "cpm" | "wps" | "cps" | "wph";
      ads?: "off" | "on" | "result" | "sellout";
      hideExtraLetters?: boolean;
      strictSpace?: boolean;
      minAcc?: "off" | "custom";
      minAccCustom?: number;
      monkey?: boolean;
      repeatQuotes?: "off" | "typing";
      oppositeShiftMode?: "off" | "on" | "keymap";
      customBackground?: string;
      customBackgroundSize?: "max" | "cover" | "contain";
      customBackgroundFilter?: [number, number, number, number, ...unknown[]];
      customLayoutfluid?: string;
      monkeyPowerLevel?: "1" | "off" | "2" | "3" | "4";
      minBurst?: "fixed" | "off" | "flex";
      minBurstCustomSpeed?: number;
      burstHeatmap?: boolean;
      britishEnglish?: boolean;
      lazyMode?: boolean;
      showAverage?: "off" | "speed" | "acc" | "both";
      maxLineWidth?: number;
    };
  },
  {
    message?: string;
    data?: {
      layout?: string;
      time?: number;
      words?: number;
      theme?: string;
      themeLight?: string;
      themeDark?: string;
      autoSwitchTheme?: boolean;
      customTheme?: boolean;
      customThemeColors?: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        ...unknown[]
      ];
      favThemes?: string[];
      showKeyTips?: boolean;
      smoothCaret?: "off" | "slow" | "medium" | "fast";
      quickRestart?: "off" | "esc" | "tab" | "enter";
      punctuation?: boolean;
      numbers?: boolean;
      mode?: "custom" | "time" | "words" | "quote" | "zen";
      quoteLength?: (0 | 2 | 1 | 3 | -3 | -2 | -1)[];
      language?: string;
      fontSize?: number;
      freedomMode?: boolean;
      difficulty?: "normal" | "expert" | "master";
      blindMode?: boolean;
      quickEnd?: boolean;
      caretStyle?:
        | "off"
        | "default"
        | "block"
        | "outline"
        | "underline"
        | "carrot"
        | "banana";
      paceCaretStyle?:
        | "off"
        | "default"
        | "block"
        | "outline"
        | "underline"
        | "carrot"
        | "banana";
      flipTestColors?: boolean;
      funbox?: string;
      confidenceMode?: "off" | "on" | "max";
      indicateTypos?: "replace" | "off" | "below";
      timerStyle?: "off" | "bar" | "text" | "mini";
      liveSpeedStyle?: "off" | "text" | "mini";
      liveAccStyle?: "off" | "text" | "mini";
      liveBurstStyle?: "off" | "text" | "mini";
      colorfulMode?: boolean;
      randomTheme?: "off" | "custom" | "on" | "fav" | "light" | "dark";
      timerColor?: "sub" | "text" | "black" | "main";
      timerOpacity?: "1" | "0.25" | "0.5" | "0.75";
      stopOnError?: "off" | "word" | "letter";
      showAllLines?: boolean;
      keymapMode?: "off" | "static" | "react" | "next";
      keymapStyle?:
        | "split"
        | "staggered"
        | "alice"
        | "matrix"
        | "split_matrix"
        | "steno"
        | "steno_matrix";
      keymapLegendStyle?: "lowercase" | "uppercase" | "blank" | "dynamic";
      keymapLayout?: string;
      keymapShowTopRow?: "never" | "always" | "layout";
      fontFamily?: string;
      smoothLineScroll?: boolean;
      alwaysShowDecimalPlaces?: boolean;
      alwaysShowWordsHistory?: boolean;
      singleListCommandLine?: "on" | "manual";
      capsLockWarning?: boolean;
      playSoundOnError?: "1" | "off" | "2" | "3" | "4";
      playSoundOnClick?:
        | "1"
        | "off"
        | "2"
        | "3"
        | "4"
        | "5"
        | "6"
        | "7"
        | "8"
        | "9"
        | "10"
        | "11"
        | "12"
        | "13"
        | "14"
        | "15";
      soundVolume?: "0.5" | "0.1" | "1.0";
      startGraphsAtZero?: boolean;
      showOutOfFocusWarning?: boolean;
      paceCaret?: "off" | "custom" | "average" | "pb" | "last" | "daily";
      paceCaretCustomSpeed?: number;
      repeatedPace?: boolean;
      accountChart?: [
        "off" | "on",
        "off" | "on",
        "off" | "on",
        "off" | "on",
        ...unknown[]
      ];
      minWpm?: "off" | "custom";
      minWpmCustomSpeed?: number;
      highlightMode?:
        | "off"
        | "word"
        | "letter"
        | "next_word"
        | "next_two_words"
        | "next_three_words";
      tapeMode?: "off" | "word" | "letter";
      typingSpeedUnit?: "wpm" | "cpm" | "wps" | "cps" | "wph";
      ads?: "off" | "on" | "result" | "sellout";
      hideExtraLetters?: boolean;
      strictSpace?: boolean;
      minAcc?: "off" | "custom";
      minAccCustom?: number;
      monkey?: boolean;
      repeatQuotes?: "off" | "typing";
      oppositeShiftMode?: "off" | "on" | "keymap";
      customBackground?: string;
      customBackgroundSize?: "max" | "cover" | "contain";
      customBackgroundFilter?: [number, number, number, number, ...unknown[]];
      customLayoutfluid?: string;
      monkeyPowerLevel?: "1" | "off" | "2" | "3" | "4";
      minBurst?: "fixed" | "off" | "flex";
      minBurstCustomSpeed?: number;
      burstHeatmap?: boolean;
      britishEnglish?: boolean;
      lazyMode?: boolean;
      showAverage?: "off" | "speed" | "acc" | "both";
      maxLineWidth?: number;
    };
  }
>;
export type GetConfigResponse = z.infer<typeof GetConfigResponseSchema>;
export declare const configsContract: {
  get: {
    description: "Get config of the current user.";
    summary: "get config";
    method: "GET";
    path: "/configs/";
    responses: {
      400: z.ZodObject<
        {
          message: z.ZodString;
        },
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
        },
        {
          message?: string;
        }
      >;
      422: z.ZodObject<
        z.objectUtil.extendShape<
          {
            message: z.ZodString;
          },
          {
            validationErrors: z.ZodArray<z.ZodString, "atleastone">;
          }
        >,
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
          validationErrors?: [string, ...string[]];
        },
        {
          message?: string;
          validationErrors?: [string, ...string[]];
        }
      >;
      500: z.ZodObject<
        z.objectUtil.extendShape<
          {
            message: z.ZodString;
          },
          {
            errorId: z.ZodString;
            uid: z.ZodOptional<z.ZodString>;
          }
        >,
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
          errorId?: string;
          uid?: string;
        },
        {
          message?: string;
          errorId?: string;
          uid?: string;
        }
      >;
      200: z.ZodObject<
        z.objectUtil.extendShape<
          {
            message: z.ZodString;
          },
          {
            data: z.ZodNullable<
              z.ZodObject<
                {
                  theme: z.ZodOptional<z.ZodString>;
                  themeLight: z.ZodOptional<z.ZodString>;
                  themeDark: z.ZodOptional<z.ZodString>;
                  autoSwitchTheme: z.ZodOptional<z.ZodBoolean>;
                  customTheme: z.ZodOptional<z.ZodBoolean>;
                  customThemeColors: z.ZodOptional<
                    z.ZodTuple<
                      [
                        z.ZodString,
                        z.ZodString,
                        z.ZodString,
                        z.ZodString,
                        z.ZodString,
                        z.ZodString,
                        z.ZodString,
                        z.ZodString,
                        z.ZodString,
                        z.ZodString
                      ],
                      null
                    >
                  >;
                  favThemes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                  showKeyTips: z.ZodOptional<z.ZodBoolean>;
                  smoothCaret: z.ZodOptional<
                    z.ZodEnum<["off", "slow", "medium", "fast"]>
                  >;
                  quickRestart: z.ZodOptional<
                    z.ZodEnum<["off", "esc", "tab", "enter"]>
                  >;
                  punctuation: z.ZodOptional<z.ZodBoolean>;
                  numbers: z.ZodOptional<z.ZodBoolean>;
                  words: z.ZodOptional<z.ZodNumber>;
                  time: z.ZodOptional<z.ZodNumber>;
                  mode: z.ZodOptional<
                    z.ZodUnion<
                      [
                        z.ZodEnum<["time", "words", "quote"]>,
                        z.ZodEnum<["custom"]>,
                        z.ZodEnum<["zen"]>
                      ]
                    >
                  >;
                  quoteLength: z.ZodOptional<
                    z.ZodArray<
                      z.ZodUnion<
                        [
                          z.ZodLiteral<-3>,
                          z.ZodLiteral<-2>,
                          z.ZodLiteral<-1>,
                          z.ZodLiteral<0>,
                          z.ZodLiteral<1>,
                          z.ZodLiteral<2>,
                          z.ZodLiteral<3>
                        ]
                      >,
                      "many"
                    >
                  >;
                  language: z.ZodOptional<z.ZodString>;
                  fontSize: z.ZodOptional<z.ZodNumber>;
                  freedomMode: z.ZodOptional<z.ZodBoolean>;
                  difficulty: z.ZodOptional<
                    z.ZodEnum<["normal", "expert", "master"]>
                  >;
                  blindMode: z.ZodOptional<z.ZodBoolean>;
                  quickEnd: z.ZodOptional<z.ZodBoolean>;
                  caretStyle: z.ZodOptional<
                    z.ZodEnum<
                      [
                        "off",
                        "default",
                        "block",
                        "outline",
                        "underline",
                        "carrot",
                        "banana"
                      ]
                    >
                  >;
                  paceCaretStyle: z.ZodOptional<
                    z.ZodEnum<
                      [
                        "off",
                        "default",
                        "block",
                        "outline",
                        "underline",
                        "carrot",
                        "banana"
                      ]
                    >
                  >;
                  flipTestColors: z.ZodOptional<z.ZodBoolean>;
                  layout: z.ZodOptional<z.ZodString>;
                  funbox: z.ZodOptional<z.ZodString>;
                  confidenceMode: z.ZodOptional<
                    z.ZodEnum<["off", "on", "max"]>
                  >;
                  indicateTypos: z.ZodOptional<
                    z.ZodEnum<["off", "below", "replace"]>
                  >;
                  timerStyle: z.ZodOptional<
                    z.ZodEnum<["off", "bar", "text", "mini"]>
                  >;
                  liveSpeedStyle: z.ZodOptional<
                    z.ZodEnum<["off", "text", "mini"]>
                  >;
                  liveAccStyle: z.ZodOptional<
                    z.ZodEnum<["off", "text", "mini"]>
                  >;
                  liveBurstStyle: z.ZodOptional<
                    z.ZodEnum<["off", "text", "mini"]>
                  >;
                  colorfulMode: z.ZodOptional<z.ZodBoolean>;
                  randomTheme: z.ZodOptional<
                    z.ZodEnum<["off", "on", "fav", "light", "dark", "custom"]>
                  >;
                  timerColor: z.ZodOptional<
                    z.ZodEnum<["black", "sub", "text", "main"]>
                  >;
                  timerOpacity: z.ZodOptional<
                    z.ZodEnum<["0.25", "0.5", "0.75", "1"]>
                  >;
                  stopOnError: z.ZodOptional<
                    z.ZodEnum<["off", "word", "letter"]>
                  >;
                  showAllLines: z.ZodOptional<z.ZodBoolean>;
                  keymapMode: z.ZodOptional<
                    z.ZodEnum<["off", "static", "react", "next"]>
                  >;
                  keymapStyle: z.ZodOptional<
                    z.ZodEnum<
                      [
                        "staggered",
                        "alice",
                        "matrix",
                        "split",
                        "split_matrix",
                        "steno",
                        "steno_matrix"
                      ]
                    >
                  >;
                  keymapLegendStyle: z.ZodOptional<
                    z.ZodEnum<["lowercase", "uppercase", "blank", "dynamic"]>
                  >;
                  keymapLayout: z.ZodOptional<z.ZodString>;
                  keymapShowTopRow: z.ZodOptional<
                    z.ZodEnum<["always", "layout", "never"]>
                  >;
                  fontFamily: z.ZodOptional<z.ZodString>;
                  smoothLineScroll: z.ZodOptional<z.ZodBoolean>;
                  alwaysShowDecimalPlaces: z.ZodOptional<z.ZodBoolean>;
                  alwaysShowWordsHistory: z.ZodOptional<z.ZodBoolean>;
                  singleListCommandLine: z.ZodOptional<
                    z.ZodEnum<["manual", "on"]>
                  >;
                  capsLockWarning: z.ZodOptional<z.ZodBoolean>;
                  playSoundOnError: z.ZodOptional<
                    z.ZodEnum<["off", "1", "2", "3", "4"]>
                  >;
                  playSoundOnClick: z.ZodOptional<
                    z.ZodEnum<
                      [
                        "off",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12",
                        "13",
                        "14",
                        "15"
                      ]
                    >
                  >;
                  soundVolume: z.ZodOptional<z.ZodEnum<["0.1", "0.5", "1.0"]>>;
                  startGraphsAtZero: z.ZodOptional<z.ZodBoolean>;
                  showOutOfFocusWarning: z.ZodOptional<z.ZodBoolean>;
                  paceCaret: z.ZodOptional<
                    z.ZodEnum<
                      ["off", "average", "pb", "last", "custom", "daily"]
                    >
                  >;
                  paceCaretCustomSpeed: z.ZodOptional<z.ZodNumber>;
                  repeatedPace: z.ZodOptional<z.ZodBoolean>;
                  accountChart: z.ZodOptional<
                    z.ZodTuple<
                      [
                        z.ZodEnum<["on", "off"]>,
                        z.ZodEnum<["on", "off"]>,
                        z.ZodEnum<["on", "off"]>,
                        z.ZodEnum<["on", "off"]>
                      ],
                      null
                    >
                  >;
                  minWpm: z.ZodOptional<z.ZodEnum<["off", "custom"]>>;
                  minWpmCustomSpeed: z.ZodOptional<z.ZodNumber>;
                  highlightMode: z.ZodOptional<
                    z.ZodEnum<
                      [
                        "off",
                        "letter",
                        "word",
                        "next_word",
                        "next_two_words",
                        "next_three_words"
                      ]
                    >
                  >;
                  tapeMode: z.ZodOptional<z.ZodEnum<["off", "letter", "word"]>>;
                  typingSpeedUnit: z.ZodOptional<
                    z.ZodEnum<["wpm", "cpm", "wps", "cps", "wph"]>
                  >;
                  ads: z.ZodOptional<
                    z.ZodEnum<["off", "result", "on", "sellout"]>
                  >;
                  hideExtraLetters: z.ZodOptional<z.ZodBoolean>;
                  strictSpace: z.ZodOptional<z.ZodBoolean>;
                  minAcc: z.ZodOptional<z.ZodEnum<["off", "custom"]>>;
                  minAccCustom: z.ZodOptional<z.ZodNumber>;
                  monkey: z.ZodOptional<z.ZodBoolean>;
                  repeatQuotes: z.ZodOptional<z.ZodEnum<["off", "typing"]>>;
                  oppositeShiftMode: z.ZodOptional<
                    z.ZodEnum<["off", "on", "keymap"]>
                  >;
                  customBackground: z.ZodOptional<
                    z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>
                  >;
                  customBackgroundSize: z.ZodOptional<
                    z.ZodEnum<["cover", "contain", "max"]>
                  >;
                  customBackgroundFilter: z.ZodOptional<
                    z.ZodTuple<
                      [z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber],
                      null
                    >
                  >;
                  customLayoutfluid: z.ZodOptional<z.ZodString>;
                  monkeyPowerLevel: z.ZodOptional<
                    z.ZodEnum<["off", "1", "2", "3", "4"]>
                  >;
                  minBurst: z.ZodOptional<z.ZodEnum<["off", "fixed", "flex"]>>;
                  minBurstCustomSpeed: z.ZodOptional<z.ZodNumber>;
                  burstHeatmap: z.ZodOptional<z.ZodBoolean>;
                  britishEnglish: z.ZodOptional<z.ZodBoolean>;
                  lazyMode: z.ZodOptional<z.ZodBoolean>;
                  showAverage: z.ZodOptional<
                    z.ZodEnum<["off", "speed", "acc", "both"]>
                  >;
                  maxLineWidth: z.ZodOptional<
                    z.ZodUnion<[z.ZodNumber, z.ZodLiteral<0>]>
                  >;
                },
                "strict",
                z.ZodTypeAny,
                {
                  layout?: string;
                  time?: number;
                  words?: number;
                  theme?: string;
                  themeLight?: string;
                  themeDark?: string;
                  autoSwitchTheme?: boolean;
                  customTheme?: boolean;
                  customThemeColors?: [
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    ...unknown[]
                  ];
                  favThemes?: string[];
                  showKeyTips?: boolean;
                  smoothCaret?: "off" | "slow" | "medium" | "fast";
                  quickRestart?: "off" | "esc" | "tab" | "enter";
                  punctuation?: boolean;
                  numbers?: boolean;
                  mode?: "custom" | "time" | "words" | "quote" | "zen";
                  quoteLength?: (0 | 2 | 1 | 3 | -3 | -2 | -1)[];
                  language?: string;
                  fontSize?: number;
                  freedomMode?: boolean;
                  difficulty?: "normal" | "expert" | "master";
                  blindMode?: boolean;
                  quickEnd?: boolean;
                  caretStyle?:
                    | "off"
                    | "default"
                    | "block"
                    | "outline"
                    | "underline"
                    | "carrot"
                    | "banana";
                  paceCaretStyle?:
                    | "off"
                    | "default"
                    | "block"
                    | "outline"
                    | "underline"
                    | "carrot"
                    | "banana";
                  flipTestColors?: boolean;
                  funbox?: string;
                  confidenceMode?: "off" | "on" | "max";
                  indicateTypos?: "replace" | "off" | "below";
                  timerStyle?: "off" | "bar" | "text" | "mini";
                  liveSpeedStyle?: "off" | "text" | "mini";
                  liveAccStyle?: "off" | "text" | "mini";
                  liveBurstStyle?: "off" | "text" | "mini";
                  colorfulMode?: boolean;
                  randomTheme?:
                    | "off"
                    | "custom"
                    | "on"
                    | "fav"
                    | "light"
                    | "dark";
                  timerColor?: "sub" | "text" | "black" | "main";
                  timerOpacity?: "1" | "0.25" | "0.5" | "0.75";
                  stopOnError?: "off" | "word" | "letter";
                  showAllLines?: boolean;
                  keymapMode?: "off" | "static" | "react" | "next";
                  keymapStyle?:
                    | "split"
                    | "staggered"
                    | "alice"
                    | "matrix"
                    | "split_matrix"
                    | "steno"
                    | "steno_matrix";
                  keymapLegendStyle?:
                    | "lowercase"
                    | "uppercase"
                    | "blank"
                    | "dynamic";
                  keymapLayout?: string;
                  keymapShowTopRow?: "never" | "always" | "layout";
                  fontFamily?: string;
                  smoothLineScroll?: boolean;
                  alwaysShowDecimalPlaces?: boolean;
                  alwaysShowWordsHistory?: boolean;
                  singleListCommandLine?: "on" | "manual";
                  capsLockWarning?: boolean;
                  playSoundOnError?: "1" | "off" | "2" | "3" | "4";
                  playSoundOnClick?:
                    | "1"
                    | "off"
                    | "2"
                    | "3"
                    | "4"
                    | "5"
                    | "6"
                    | "7"
                    | "8"
                    | "9"
                    | "10"
                    | "11"
                    | "12"
                    | "13"
                    | "14"
                    | "15";
                  soundVolume?: "0.5" | "0.1" | "1.0";
                  startGraphsAtZero?: boolean;
                  showOutOfFocusWarning?: boolean;
                  paceCaret?:
                    | "off"
                    | "custom"
                    | "average"
                    | "pb"
                    | "last"
                    | "daily";
                  paceCaretCustomSpeed?: number;
                  repeatedPace?: boolean;
                  accountChart?: [
                    "off" | "on",
                    "off" | "on",
                    "off" | "on",
                    "off" | "on",
                    ...unknown[]
                  ];
                  minWpm?: "off" | "custom";
                  minWpmCustomSpeed?: number;
                  highlightMode?:
                    | "off"
                    | "word"
                    | "letter"
                    | "next_word"
                    | "next_two_words"
                    | "next_three_words";
                  tapeMode?: "off" | "word" | "letter";
                  typingSpeedUnit?: "wpm" | "cpm" | "wps" | "cps" | "wph";
                  ads?: "off" | "on" | "result" | "sellout";
                  hideExtraLetters?: boolean;
                  strictSpace?: boolean;
                  minAcc?: "off" | "custom";
                  minAccCustom?: number;
                  monkey?: boolean;
                  repeatQuotes?: "off" | "typing";
                  oppositeShiftMode?: "off" | "on" | "keymap";
                  customBackground?: string;
                  customBackgroundSize?: "max" | "cover" | "contain";
                  customBackgroundFilter?: [
                    number,
                    number,
                    number,
                    number,
                    ...unknown[]
                  ];
                  customLayoutfluid?: string;
                  monkeyPowerLevel?: "1" | "off" | "2" | "3" | "4";
                  minBurst?: "fixed" | "off" | "flex";
                  minBurstCustomSpeed?: number;
                  burstHeatmap?: boolean;
                  britishEnglish?: boolean;
                  lazyMode?: boolean;
                  showAverage?: "off" | "speed" | "acc" | "both";
                  maxLineWidth?: number;
                },
                {
                  layout?: string;
                  time?: number;
                  words?: number;
                  theme?: string;
                  themeLight?: string;
                  themeDark?: string;
                  autoSwitchTheme?: boolean;
                  customTheme?: boolean;
                  customThemeColors?: [
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    ...unknown[]
                  ];
                  favThemes?: string[];
                  showKeyTips?: boolean;
                  smoothCaret?: "off" | "slow" | "medium" | "fast";
                  quickRestart?: "off" | "esc" | "tab" | "enter";
                  punctuation?: boolean;
                  numbers?: boolean;
                  mode?: "custom" | "time" | "words" | "quote" | "zen";
                  quoteLength?: (0 | 2 | 1 | 3 | -3 | -2 | -1)[];
                  language?: string;
                  fontSize?: number;
                  freedomMode?: boolean;
                  difficulty?: "normal" | "expert" | "master";
                  blindMode?: boolean;
                  quickEnd?: boolean;
                  caretStyle?:
                    | "off"
                    | "default"
                    | "block"
                    | "outline"
                    | "underline"
                    | "carrot"
                    | "banana";
                  paceCaretStyle?:
                    | "off"
                    | "default"
                    | "block"
                    | "outline"
                    | "underline"
                    | "carrot"
                    | "banana";
                  flipTestColors?: boolean;
                  funbox?: string;
                  confidenceMode?: "off" | "on" | "max";
                  indicateTypos?: "replace" | "off" | "below";
                  timerStyle?: "off" | "bar" | "text" | "mini";
                  liveSpeedStyle?: "off" | "text" | "mini";
                  liveAccStyle?: "off" | "text" | "mini";
                  liveBurstStyle?: "off" | "text" | "mini";
                  colorfulMode?: boolean;
                  randomTheme?:
                    | "off"
                    | "custom"
                    | "on"
                    | "fav"
                    | "light"
                    | "dark";
                  timerColor?: "sub" | "text" | "black" | "main";
                  timerOpacity?: "1" | "0.25" | "0.5" | "0.75";
                  stopOnError?: "off" | "word" | "letter";
                  showAllLines?: boolean;
                  keymapMode?: "off" | "static" | "react" | "next";
                  keymapStyle?:
                    | "split"
                    | "staggered"
                    | "alice"
                    | "matrix"
                    | "split_matrix"
                    | "steno"
                    | "steno_matrix";
                  keymapLegendStyle?:
                    | "lowercase"
                    | "uppercase"
                    | "blank"
                    | "dynamic";
                  keymapLayout?: string;
                  keymapShowTopRow?: "never" | "always" | "layout";
                  fontFamily?: string;
                  smoothLineScroll?: boolean;
                  alwaysShowDecimalPlaces?: boolean;
                  alwaysShowWordsHistory?: boolean;
                  singleListCommandLine?: "on" | "manual";
                  capsLockWarning?: boolean;
                  playSoundOnError?: "1" | "off" | "2" | "3" | "4";
                  playSoundOnClick?:
                    | "1"
                    | "off"
                    | "2"
                    | "3"
                    | "4"
                    | "5"
                    | "6"
                    | "7"
                    | "8"
                    | "9"
                    | "10"
                    | "11"
                    | "12"
                    | "13"
                    | "14"
                    | "15";
                  soundVolume?: "0.5" | "0.1" | "1.0";
                  startGraphsAtZero?: boolean;
                  showOutOfFocusWarning?: boolean;
                  paceCaret?:
                    | "off"
                    | "custom"
                    | "average"
                    | "pb"
                    | "last"
                    | "daily";
                  paceCaretCustomSpeed?: number;
                  repeatedPace?: boolean;
                  accountChart?: [
                    "off" | "on",
                    "off" | "on",
                    "off" | "on",
                    "off" | "on",
                    ...unknown[]
                  ];
                  minWpm?: "off" | "custom";
                  minWpmCustomSpeed?: number;
                  highlightMode?:
                    | "off"
                    | "word"
                    | "letter"
                    | "next_word"
                    | "next_two_words"
                    | "next_three_words";
                  tapeMode?: "off" | "word" | "letter";
                  typingSpeedUnit?: "wpm" | "cpm" | "wps" | "cps" | "wph";
                  ads?: "off" | "on" | "result" | "sellout";
                  hideExtraLetters?: boolean;
                  strictSpace?: boolean;
                  minAcc?: "off" | "custom";
                  minAccCustom?: number;
                  monkey?: boolean;
                  repeatQuotes?: "off" | "typing";
                  oppositeShiftMode?: "off" | "on" | "keymap";
                  customBackground?: string;
                  customBackgroundSize?: "max" | "cover" | "contain";
                  customBackgroundFilter?: [
                    number,
                    number,
                    number,
                    number,
                    ...unknown[]
                  ];
                  customLayoutfluid?: string;
                  monkeyPowerLevel?: "1" | "off" | "2" | "3" | "4";
                  minBurst?: "fixed" | "off" | "flex";
                  minBurstCustomSpeed?: number;
                  burstHeatmap?: boolean;
                  britishEnglish?: boolean;
                  lazyMode?: boolean;
                  showAverage?: "off" | "speed" | "acc" | "both";
                  maxLineWidth?: number;
                }
              >
            >;
          }
        >,
        z.UnknownKeysParam,
        z.ZodTypeAny,
        {
          message?: string;
          data?: {
            layout?: string;
            time?: number;
            words?: number;
            theme?: string;
            themeLight?: string;
            themeDark?: string;
            autoSwitchTheme?: boolean;
            customTheme?: boolean;
            customThemeColors?: [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              ...unknown[]
            ];
            favThemes?: string[];
            showKeyTips?: boolean;
            smoothCaret?: "off" | "slow" | "medium" | "fast";
            quickRestart?: "off" | "esc" | "tab" | "enter";
            punctuation?: boolean;
            numbers?: boolean;
            mode?: "custom" | "time" | "words" | "quote" | "zen";
            quoteLength?: (0 | 2 | 1 | 3 | -3 | -2 | -1)[];
            language?: string;
            fontSize?: number;
            freedomMode?: boolean;
            difficulty?: "normal" | "expert" | "master";
            blindMode?: boolean;
            quickEnd?: boolean;
            caretStyle?:
              | "off"
              | "default"
              | "block"
              | "outline"
              | "underline"
              | "carrot"
              | "banana";
            paceCaretStyle?:
              | "off"
              | "default"
              | "block"
              | "outline"
              | "underline"
              | "carrot"
              | "banana";
            flipTestColors?: boolean;
            funbox?: string;
            confidenceMode?: "off" | "on" | "max";
            indicateTypos?: "replace" | "off" | "below";
            timerStyle?: "off" | "bar" | "text" | "mini";
            liveSpeedStyle?: "off" | "text" | "mini";
            liveAccStyle?: "off" | "text" | "mini";
            liveBurstStyle?: "off" | "text" | "mini";
            colorfulMode?: boolean;
            randomTheme?: "off" | "custom" | "on" | "fav" | "light" | "dark";
            timerColor?: "sub" | "text" | "black" | "main";
            timerOpacity?: "1" | "0.25" | "0.5" | "0.75";
            stopOnError?: "off" | "word" | "letter";
            showAllLines?: boolean;
            keymapMode?: "off" | "static" | "react" | "next";
            keymapStyle?:
              | "split"
              | "staggered"
              | "alice"
              | "matrix"
              | "split_matrix"
              | "steno"
              | "steno_matrix";
            keymapLegendStyle?: "lowercase" | "uppercase" | "blank" | "dynamic";
            keymapLayout?: string;
            keymapShowTopRow?: "never" | "always" | "layout";
            fontFamily?: string;
            smoothLineScroll?: boolean;
            alwaysShowDecimalPlaces?: boolean;
            alwaysShowWordsHistory?: boolean;
            singleListCommandLine?: "on" | "manual";
            capsLockWarning?: boolean;
            playSoundOnError?: "1" | "off" | "2" | "3" | "4";
            playSoundOnClick?:
              | "1"
              | "off"
              | "2"
              | "3"
              | "4"
              | "5"
              | "6"
              | "7"
              | "8"
              | "9"
              | "10"
              | "11"
              | "12"
              | "13"
              | "14"
              | "15";
            soundVolume?: "0.5" | "0.1" | "1.0";
            startGraphsAtZero?: boolean;
            showOutOfFocusWarning?: boolean;
            paceCaret?: "off" | "custom" | "average" | "pb" | "last" | "daily";
            paceCaretCustomSpeed?: number;
            repeatedPace?: boolean;
            accountChart?: [
              "off" | "on",
              "off" | "on",
              "off" | "on",
              "off" | "on",
              ...unknown[]
            ];
            minWpm?: "off" | "custom";
            minWpmCustomSpeed?: number;
            highlightMode?:
              | "off"
              | "word"
              | "letter"
              | "next_word"
              | "next_two_words"
              | "next_three_words";
            tapeMode?: "off" | "word" | "letter";
            typingSpeedUnit?: "wpm" | "cpm" | "wps" | "cps" | "wph";
            ads?: "off" | "on" | "result" | "sellout";
            hideExtraLetters?: boolean;
            strictSpace?: boolean;
            minAcc?: "off" | "custom";
            minAccCustom?: number;
            monkey?: boolean;
            repeatQuotes?: "off" | "typing";
            oppositeShiftMode?: "off" | "on" | "keymap";
            customBackground?: string;
            customBackgroundSize?: "max" | "cover" | "contain";
            customBackgroundFilter?: [
              number,
              number,
              number,
              number,
              ...unknown[]
            ];
            customLayoutfluid?: string;
            monkeyPowerLevel?: "1" | "off" | "2" | "3" | "4";
            minBurst?: "fixed" | "off" | "flex";
            minBurstCustomSpeed?: number;
            burstHeatmap?: boolean;
            britishEnglish?: boolean;
            lazyMode?: boolean;
            showAverage?: "off" | "speed" | "acc" | "both";
            maxLineWidth?: number;
          };
        },
        {
          message?: string;
          data?: {
            layout?: string;
            time?: number;
            words?: number;
            theme?: string;
            themeLight?: string;
            themeDark?: string;
            autoSwitchTheme?: boolean;
            customTheme?: boolean;
            customThemeColors?: [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              ...unknown[]
            ];
            favThemes?: string[];
            showKeyTips?: boolean;
            smoothCaret?: "off" | "slow" | "medium" | "fast";
            quickRestart?: "off" | "esc" | "tab" | "enter";
            punctuation?: boolean;
            numbers?: boolean;
            mode?: "custom" | "time" | "words" | "quote" | "zen";
            quoteLength?: (0 | 2 | 1 | 3 | -3 | -2 | -1)[];
            language?: string;
            fontSize?: number;
            freedomMode?: boolean;
            difficulty?: "normal" | "expert" | "master";
            blindMode?: boolean;
            quickEnd?: boolean;
            caretStyle?:
              | "off"
              | "default"
              | "block"
              | "outline"
              | "underline"
              | "carrot"
              | "banana";
            paceCaretStyle?:
              | "off"
              | "default"
              | "block"
              | "outline"
              | "underline"
              | "carrot"
              | "banana";
            flipTestColors?: boolean;
            funbox?: string;
            confidenceMode?: "off" | "on" | "max";
            indicateTypos?: "replace" | "off" | "below";
            timerStyle?: "off" | "bar" | "text" | "mini";
            liveSpeedStyle?: "off" | "text" | "mini";
            liveAccStyle?: "off" | "text" | "mini";
            liveBurstStyle?: "off" | "text" | "mini";
            colorfulMode?: boolean;
            randomTheme?: "off" | "custom" | "on" | "fav" | "light" | "dark";
            timerColor?: "sub" | "text" | "black" | "main";
            timerOpacity?: "1" | "0.25" | "0.5" | "0.75";
            stopOnError?: "off" | "word" | "letter";
            showAllLines?: boolean;
            keymapMode?: "off" | "static" | "react" | "next";
            keymapStyle?:
              | "split"
              | "staggered"
              | "alice"
              | "matrix"
              | "split_matrix"
              | "steno"
              | "steno_matrix";
            keymapLegendStyle?: "lowercase" | "uppercase" | "blank" | "dynamic";
            keymapLayout?: string;
            keymapShowTopRow?: "never" | "always" | "layout";
            fontFamily?: string;
            smoothLineScroll?: boolean;
            alwaysShowDecimalPlaces?: boolean;
            alwaysShowWordsHistory?: boolean;
            singleListCommandLine?: "on" | "manual";
            capsLockWarning?: boolean;
            playSoundOnError?: "1" | "off" | "2" | "3" | "4";
            playSoundOnClick?:
              | "1"
              | "off"
              | "2"
              | "3"
              | "4"
              | "5"
              | "6"
              | "7"
              | "8"
              | "9"
              | "10"
              | "11"
              | "12"
              | "13"
              | "14"
              | "15";
            soundVolume?: "0.5" | "0.1" | "1.0";
            startGraphsAtZero?: boolean;
            showOutOfFocusWarning?: boolean;
            paceCaret?: "off" | "custom" | "average" | "pb" | "last" | "daily";
            paceCaretCustomSpeed?: number;
            repeatedPace?: boolean;
            accountChart?: [
              "off" | "on",
              "off" | "on",
              "off" | "on",
              "off" | "on",
              ...unknown[]
            ];
            minWpm?: "off" | "custom";
            minWpmCustomSpeed?: number;
            highlightMode?:
              | "off"
              | "word"
              | "letter"
              | "next_word"
              | "next_two_words"
              | "next_three_words";
            tapeMode?: "off" | "word" | "letter";
            typingSpeedUnit?: "wpm" | "cpm" | "wps" | "cps" | "wph";
            ads?: "off" | "on" | "result" | "sellout";
            hideExtraLetters?: boolean;
            strictSpace?: boolean;
            minAcc?: "off" | "custom";
            minAccCustom?: number;
            monkey?: boolean;
            repeatQuotes?: "off" | "typing";
            oppositeShiftMode?: "off" | "on" | "keymap";
            customBackground?: string;
            customBackgroundSize?: "max" | "cover" | "contain";
            customBackgroundFilter?: [
              number,
              number,
              number,
              number,
              ...unknown[]
            ];
            customLayoutfluid?: string;
            monkeyPowerLevel?: "1" | "off" | "2" | "3" | "4";
            minBurst?: "fixed" | "off" | "flex";
            minBurstCustomSpeed?: number;
            burstHeatmap?: boolean;
            britishEnglish?: boolean;
            lazyMode?: boolean;
            showAverage?: "off" | "speed" | "acc" | "both";
            maxLineWidth?: number;
          };
        }
      >;
    };
    strictStatusCodes: true;
  };
  save: {
    description: "Update the config of the current user. Only provided values will be updated while the missing values will be unchanged.";
    summary: "update config";
    method: "PATCH";
    body: z.ZodObject<
      {
        theme: z.ZodOptional<z.ZodString>;
        themeLight: z.ZodOptional<z.ZodString>;
        themeDark: z.ZodOptional<z.ZodString>;
        autoSwitchTheme: z.ZodOptional<z.ZodBoolean>;
        customTheme: z.ZodOptional<z.ZodBoolean>;
        customThemeColors: z.ZodOptional<
          z.ZodTuple<
            [
              z.ZodString,
              z.ZodString,
              z.ZodString,
              z.ZodString,
              z.ZodString,
              z.ZodString,
              z.ZodString,
              z.ZodString,
              z.ZodString,
              z.ZodString
            ],
            null
          >
        >;
        favThemes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        showKeyTips: z.ZodOptional<z.ZodBoolean>;
        smoothCaret: z.ZodOptional<
          z.ZodEnum<["off", "slow", "medium", "fast"]>
        >;
        quickRestart: z.ZodOptional<z.ZodEnum<["off", "esc", "tab", "enter"]>>;
        punctuation: z.ZodOptional<z.ZodBoolean>;
        numbers: z.ZodOptional<z.ZodBoolean>;
        words: z.ZodOptional<z.ZodNumber>;
        time: z.ZodOptional<z.ZodNumber>;
        mode: z.ZodOptional<
          z.ZodUnion<
            [
              z.ZodEnum<["time", "words", "quote"]>,
              z.ZodEnum<["custom"]>,
              z.ZodEnum<["zen"]>
            ]
          >
        >;
        quoteLength: z.ZodOptional<
          z.ZodArray<
            z.ZodUnion<
              [
                z.ZodLiteral<-3>,
                z.ZodLiteral<-2>,
                z.ZodLiteral<-1>,
                z.ZodLiteral<0>,
                z.ZodLiteral<1>,
                z.ZodLiteral<2>,
                z.ZodLiteral<3>
              ]
            >,
            "many"
          >
        >;
        language: z.ZodOptional<z.ZodString>;
        fontSize: z.ZodOptional<z.ZodNumber>;
        freedomMode: z.ZodOptional<z.ZodBoolean>;
        difficulty: z.ZodOptional<z.ZodEnum<["normal", "expert", "master"]>>;
        blindMode: z.ZodOptional<z.ZodBoolean>;
        quickEnd: z.ZodOptional<z.ZodBoolean>;
        caretStyle: z.ZodOptional<
          z.ZodEnum<
            [
              "off",
              "default",
              "block",
              "outline",
              "underline",
              "carrot",
              "banana"
            ]
          >
        >;
        paceCaretStyle: z.ZodOptional<
          z.ZodEnum<
            [
              "off",
              "default",
              "block",
              "outline",
              "underline",
              "carrot",
              "banana"
            ]
          >
        >;
        flipTestColors: z.ZodOptional<z.ZodBoolean>;
        layout: z.ZodOptional<z.ZodString>;
        funbox: z.ZodOptional<z.ZodString>;
        confidenceMode: z.ZodOptional<z.ZodEnum<["off", "on", "max"]>>;
        indicateTypos: z.ZodOptional<z.ZodEnum<["off", "below", "replace"]>>;
        timerStyle: z.ZodOptional<z.ZodEnum<["off", "bar", "text", "mini"]>>;
        liveSpeedStyle: z.ZodOptional<z.ZodEnum<["off", "text", "mini"]>>;
        liveAccStyle: z.ZodOptional<z.ZodEnum<["off", "text", "mini"]>>;
        liveBurstStyle: z.ZodOptional<z.ZodEnum<["off", "text", "mini"]>>;
        colorfulMode: z.ZodOptional<z.ZodBoolean>;
        randomTheme: z.ZodOptional<
          z.ZodEnum<["off", "on", "fav", "light", "dark", "custom"]>
        >;
        timerColor: z.ZodOptional<z.ZodEnum<["black", "sub", "text", "main"]>>;
        timerOpacity: z.ZodOptional<z.ZodEnum<["0.25", "0.5", "0.75", "1"]>>;
        stopOnError: z.ZodOptional<z.ZodEnum<["off", "word", "letter"]>>;
        showAllLines: z.ZodOptional<z.ZodBoolean>;
        keymapMode: z.ZodOptional<
          z.ZodEnum<["off", "static", "react", "next"]>
        >;
        keymapStyle: z.ZodOptional<
          z.ZodEnum<
            [
              "staggered",
              "alice",
              "matrix",
              "split",
              "split_matrix",
              "steno",
              "steno_matrix"
            ]
          >
        >;
        keymapLegendStyle: z.ZodOptional<
          z.ZodEnum<["lowercase", "uppercase", "blank", "dynamic"]>
        >;
        keymapLayout: z.ZodOptional<z.ZodString>;
        keymapShowTopRow: z.ZodOptional<
          z.ZodEnum<["always", "layout", "never"]>
        >;
        fontFamily: z.ZodOptional<z.ZodString>;
        smoothLineScroll: z.ZodOptional<z.ZodBoolean>;
        alwaysShowDecimalPlaces: z.ZodOptional<z.ZodBoolean>;
        alwaysShowWordsHistory: z.ZodOptional<z.ZodBoolean>;
        singleListCommandLine: z.ZodOptional<z.ZodEnum<["manual", "on"]>>;
        capsLockWarning: z.ZodOptional<z.ZodBoolean>;
        playSoundOnError: z.ZodOptional<z.ZodEnum<["off", "1", "2", "3", "4"]>>;
        playSoundOnClick: z.ZodOptional<
          z.ZodEnum<
            [
              "off",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15"
            ]
          >
        >;
        soundVolume: z.ZodOptional<z.ZodEnum<["0.1", "0.5", "1.0"]>>;
        startGraphsAtZero: z.ZodOptional<z.ZodBoolean>;
        showOutOfFocusWarning: z.ZodOptional<z.ZodBoolean>;
        paceCaret: z.ZodOptional<
          z.ZodEnum<["off", "average", "pb", "last", "custom", "daily"]>
        >;
        paceCaretCustomSpeed: z.ZodOptional<z.ZodNumber>;
        repeatedPace: z.ZodOptional<z.ZodBoolean>;
        accountChart: z.ZodOptional<
          z.ZodTuple<
            [
              z.ZodEnum<["on", "off"]>,
              z.ZodEnum<["on", "off"]>,
              z.ZodEnum<["on", "off"]>,
              z.ZodEnum<["on", "off"]>
            ],
            null
          >
        >;
        minWpm: z.ZodOptional<z.ZodEnum<["off", "custom"]>>;
        minWpmCustomSpeed: z.ZodOptional<z.ZodNumber>;
        highlightMode: z.ZodOptional<
          z.ZodEnum<
            [
              "off",
              "letter",
              "word",
              "next_word",
              "next_two_words",
              "next_three_words"
            ]
          >
        >;
        tapeMode: z.ZodOptional<z.ZodEnum<["off", "letter", "word"]>>;
        typingSpeedUnit: z.ZodOptional<
          z.ZodEnum<["wpm", "cpm", "wps", "cps", "wph"]>
        >;
        ads: z.ZodOptional<z.ZodEnum<["off", "result", "on", "sellout"]>>;
        hideExtraLetters: z.ZodOptional<z.ZodBoolean>;
        strictSpace: z.ZodOptional<z.ZodBoolean>;
        minAcc: z.ZodOptional<z.ZodEnum<["off", "custom"]>>;
        minAccCustom: z.ZodOptional<z.ZodNumber>;
        monkey: z.ZodOptional<z.ZodBoolean>;
        repeatQuotes: z.ZodOptional<z.ZodEnum<["off", "typing"]>>;
        oppositeShiftMode: z.ZodOptional<z.ZodEnum<["off", "on", "keymap"]>>;
        customBackground: z.ZodOptional<
          z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>
        >;
        customBackgroundSize: z.ZodOptional<
          z.ZodEnum<["cover", "contain", "max"]>
        >;
        customBackgroundFilter: z.ZodOptional<
          z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>
        >;
        customLayoutfluid: z.ZodOptional<z.ZodString>;
        monkeyPowerLevel: z.ZodOptional<z.ZodEnum<["off", "1", "2", "3", "4"]>>;
        minBurst: z.ZodOptional<z.ZodEnum<["off", "fixed", "flex"]>>;
        minBurstCustomSpeed: z.ZodOptional<z.ZodNumber>;
        burstHeatmap: z.ZodOptional<z.ZodBoolean>;
        britishEnglish: z.ZodOptional<z.ZodBoolean>;
        lazyMode: z.ZodOptional<z.ZodBoolean>;
        showAverage: z.ZodOptional<z.ZodEnum<["off", "speed", "acc", "both"]>>;
        maxLineWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodLiteral<0>]>>;
      },
      "strict",
      z.ZodTypeAny,
      {
        layout?: string;
        time?: number;
        words?: number;
        theme?: string;
        themeLight?: string;
        themeDark?: string;
        autoSwitchTheme?: boolean;
        customTheme?: boolean;
        customThemeColors?: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          ...unknown[]
        ];
        favThemes?: string[];
        showKeyTips?: boolean;
        smoothCaret?: "off" | "slow" | "medium" | "fast";
        quickRestart?: "off" | "esc" | "tab" | "enter";
        punctuation?: boolean;
        numbers?: boolean;
        mode?: "custom" | "time" | "words" | "quote" | "zen";
        quoteLength?: (0 | 2 | 1 | 3 | -3 | -2 | -1)[];
        language?: string;
        fontSize?: number;
        freedomMode?: boolean;
        difficulty?: "normal" | "expert" | "master";
        blindMode?: boolean;
        quickEnd?: boolean;
        caretStyle?:
          | "off"
          | "default"
          | "block"
          | "outline"
          | "underline"
          | "carrot"
          | "banana";
        paceCaretStyle?:
          | "off"
          | "default"
          | "block"
          | "outline"
          | "underline"
          | "carrot"
          | "banana";
        flipTestColors?: boolean;
        funbox?: string;
        confidenceMode?: "off" | "on" | "max";
        indicateTypos?: "replace" | "off" | "below";
        timerStyle?: "off" | "bar" | "text" | "mini";
        liveSpeedStyle?: "off" | "text" | "mini";
        liveAccStyle?: "off" | "text" | "mini";
        liveBurstStyle?: "off" | "text" | "mini";
        colorfulMode?: boolean;
        randomTheme?: "off" | "custom" | "on" | "fav" | "light" | "dark";
        timerColor?: "sub" | "text" | "black" | "main";
        timerOpacity?: "1" | "0.25" | "0.5" | "0.75";
        stopOnError?: "off" | "word" | "letter";
        showAllLines?: boolean;
        keymapMode?: "off" | "static" | "react" | "next";
        keymapStyle?:
          | "split"
          | "staggered"
          | "alice"
          | "matrix"
          | "split_matrix"
          | "steno"
          | "steno_matrix";
        keymapLegendStyle?: "lowercase" | "uppercase" | "blank" | "dynamic";
        keymapLayout?: string;
        keymapShowTopRow?: "never" | "always" | "layout";
        fontFamily?: string;
        smoothLineScroll?: boolean;
        alwaysShowDecimalPlaces?: boolean;
        alwaysShowWordsHistory?: boolean;
        singleListCommandLine?: "on" | "manual";
        capsLockWarning?: boolean;
        playSoundOnError?: "1" | "off" | "2" | "3" | "4";
        playSoundOnClick?:
          | "1"
          | "off"
          | "2"
          | "3"
          | "4"
          | "5"
          | "6"
          | "7"
          | "8"
          | "9"
          | "10"
          | "11"
          | "12"
          | "13"
          | "14"
          | "15";
        soundVolume?: "0.5" | "0.1" | "1.0";
        startGraphsAtZero?: boolean;
        showOutOfFocusWarning?: boolean;
        paceCaret?: "off" | "custom" | "average" | "pb" | "last" | "daily";
        paceCaretCustomSpeed?: number;
        repeatedPace?: boolean;
        accountChart?: [
          "off" | "on",
          "off" | "on",
          "off" | "on",
          "off" | "on",
          ...unknown[]
        ];
        minWpm?: "off" | "custom";
        minWpmCustomSpeed?: number;
        highlightMode?:
          | "off"
          | "word"
          | "letter"
          | "next_word"
          | "next_two_words"
          | "next_three_words";
        tapeMode?: "off" | "word" | "letter";
        typingSpeedUnit?: "wpm" | "cpm" | "wps" | "cps" | "wph";
        ads?: "off" | "on" | "result" | "sellout";
        hideExtraLetters?: boolean;
        strictSpace?: boolean;
        minAcc?: "off" | "custom";
        minAccCustom?: number;
        monkey?: boolean;
        repeatQuotes?: "off" | "typing";
        oppositeShiftMode?: "off" | "on" | "keymap";
        customBackground?: string;
        customBackgroundSize?: "max" | "cover" | "contain";
        customBackgroundFilter?: [number, number, number, number, ...unknown[]];
        customLayoutfluid?: string;
        monkeyPowerLevel?: "1" | "off" | "2" | "3" | "4";
        minBurst?: "fixed" | "off" | "flex";
        minBurstCustomSpeed?: number;
        burstHeatmap?: boolean;
        britishEnglish?: boolean;
        lazyMode?: boolean;
        showAverage?: "off" | "speed" | "acc" | "both";
        maxLineWidth?: number;
      },
      {
        layout?: string;
        time?: number;
        words?: number;
        theme?: string;
        themeLight?: string;
        themeDark?: string;
        autoSwitchTheme?: boolean;
        customTheme?: boolean;
        customThemeColors?: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          ...unknown[]
        ];
        favThemes?: string[];
        showKeyTips?: boolean;
        smoothCaret?: "off" | "slow" | "medium" | "fast";
        quickRestart?: "off" | "esc" | "tab" | "enter";
        punctuation?: boolean;
        numbers?: boolean;
        mode?: "custom" | "time" | "words" | "quote" | "zen";
        quoteLength?: (0 | 2 | 1 | 3 | -3 | -2 | -1)[];
        language?: string;
        fontSize?: number;
        freedomMode?: boolean;
        difficulty?: "normal" | "expert" | "master";
        blindMode?: boolean;
        quickEnd?: boolean;
        caretStyle?:
          | "off"
          | "default"
          | "block"
          | "outline"
          | "underline"
          | "carrot"
          | "banana";
        paceCaretStyle?:
          | "off"
          | "default"
          | "block"
          | "outline"
          | "underline"
          | "carrot"
          | "banana";
        flipTestColors?: boolean;
        funbox?: string;
        confidenceMode?: "off" | "on" | "max";
        indicateTypos?: "replace" | "off" | "below";
        timerStyle?: "off" | "bar" | "text" | "mini";
        liveSpeedStyle?: "off" | "text" | "mini";
        liveAccStyle?: "off" | "text" | "mini";
        liveBurstStyle?: "off" | "text" | "mini";
        colorfulMode?: boolean;
        randomTheme?: "off" | "custom" | "on" | "fav" | "light" | "dark";
        timerColor?: "sub" | "text" | "black" | "main";
        timerOpacity?: "1" | "0.25" | "0.5" | "0.75";
        stopOnError?: "off" | "word" | "letter";
        showAllLines?: boolean;
        keymapMode?: "off" | "static" | "react" | "next";
        keymapStyle?:
          | "split"
          | "staggered"
          | "alice"
          | "matrix"
          | "split_matrix"
          | "steno"
          | "steno_matrix";
        keymapLegendStyle?: "lowercase" | "uppercase" | "blank" | "dynamic";
        keymapLayout?: string;
        keymapShowTopRow?: "never" | "always" | "layout";
        fontFamily?: string;
        smoothLineScroll?: boolean;
        alwaysShowDecimalPlaces?: boolean;
        alwaysShowWordsHistory?: boolean;
        singleListCommandLine?: "on" | "manual";
        capsLockWarning?: boolean;
        playSoundOnError?: "1" | "off" | "2" | "3" | "4";
        playSoundOnClick?:
          | "1"
          | "off"
          | "2"
          | "3"
          | "4"
          | "5"
          | "6"
          | "7"
          | "8"
          | "9"
          | "10"
          | "11"
          | "12"
          | "13"
          | "14"
          | "15";
        soundVolume?: "0.5" | "0.1" | "1.0";
        startGraphsAtZero?: boolean;
        showOutOfFocusWarning?: boolean;
        paceCaret?: "off" | "custom" | "average" | "pb" | "last" | "daily";
        paceCaretCustomSpeed?: number;
        repeatedPace?: boolean;
        accountChart?: [
          "off" | "on",
          "off" | "on",
          "off" | "on",
          "off" | "on",
          ...unknown[]
        ];
        minWpm?: "off" | "custom";
        minWpmCustomSpeed?: number;
        highlightMode?:
          | "off"
          | "word"
          | "letter"
          | "next_word"
          | "next_two_words"
          | "next_three_words";
        tapeMode?: "off" | "word" | "letter";
        typingSpeedUnit?: "wpm" | "cpm" | "wps" | "cps" | "wph";
        ads?: "off" | "on" | "result" | "sellout";
        hideExtraLetters?: boolean;
        strictSpace?: boolean;
        minAcc?: "off" | "custom";
        minAccCustom?: number;
        monkey?: boolean;
        repeatQuotes?: "off" | "typing";
        oppositeShiftMode?: "off" | "on" | "keymap";
        customBackground?: string;
        customBackgroundSize?: "max" | "cover" | "contain";
        customBackgroundFilter?: [number, number, number, number, ...unknown[]];
        customLayoutfluid?: string;
        monkeyPowerLevel?: "1" | "off" | "2" | "3" | "4";
        minBurst?: "fixed" | "off" | "flex";
        minBurstCustomSpeed?: number;
        burstHeatmap?: boolean;
        britishEnglish?: boolean;
        lazyMode?: boolean;
        showAverage?: "off" | "speed" | "acc" | "both";
        maxLineWidth?: number;
      }
    >;
    path: "/configs/";
    responses: {
      400: z.ZodObject<
        {
          message: z.ZodString;
        },
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
        },
        {
          message?: string;
        }
      >;
      422: z.ZodObject<
        z.objectUtil.extendShape<
          {
            message: z.ZodString;
          },
          {
            validationErrors: z.ZodArray<z.ZodString, "atleastone">;
          }
        >,
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
          validationErrors?: [string, ...string[]];
        },
        {
          message?: string;
          validationErrors?: [string, ...string[]];
        }
      >;
      500: z.ZodObject<
        z.objectUtil.extendShape<
          {
            message: z.ZodString;
          },
          {
            errorId: z.ZodString;
            uid: z.ZodOptional<z.ZodString>;
          }
        >,
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
          errorId?: string;
          uid?: string;
        },
        {
          message?: string;
          errorId?: string;
          uid?: string;
        }
      >;
      200: z.ZodObject<
        {
          message: z.ZodString;
        },
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
        },
        {
          message?: string;
        }
      >;
    };
    strictStatusCodes: true;
  };
  delete: {
    description: "Delete/reset the config for the current user.";
    summary: "delete config";
    method: "DELETE";
    body: typeof import("@ts-rest/core").ContractNoBody;
    path: "/configs/";
    responses: {
      400: z.ZodObject<
        {
          message: z.ZodString;
        },
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
        },
        {
          message?: string;
        }
      >;
      422: z.ZodObject<
        z.objectUtil.extendShape<
          {
            message: z.ZodString;
          },
          {
            validationErrors: z.ZodArray<z.ZodString, "atleastone">;
          }
        >,
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
          validationErrors?: [string, ...string[]];
        },
        {
          message?: string;
          validationErrors?: [string, ...string[]];
        }
      >;
      500: z.ZodObject<
        z.objectUtil.extendShape<
          {
            message: z.ZodString;
          },
          {
            errorId: z.ZodString;
            uid: z.ZodOptional<z.ZodString>;
          }
        >,
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
          errorId?: string;
          uid?: string;
        },
        {
          message?: string;
          errorId?: string;
          uid?: string;
        }
      >;
      200: z.ZodObject<
        {
          message: z.ZodString;
        },
        "strip",
        z.ZodTypeAny,
        {
          message?: string;
        },
        {
          message?: string;
        }
      >;
    };
    strictStatusCodes: true;
  };
};
//# sourceMappingURL=configs.d.ts.map

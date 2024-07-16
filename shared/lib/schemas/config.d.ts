import { z } from "zod";
export declare const SmoothCaretSchema: z.ZodEnum<
  ["off", "slow", "medium", "fast"]
>;
export type SmoothCaret = z.infer<typeof SmoothCaretSchema>;
export declare const QuickRestartSchema: z.ZodEnum<
  ["off", "esc", "tab", "enter"]
>;
export type QuickRestart = z.infer<typeof QuickRestartSchema>;
export declare const QuoteLengthSchema: z.ZodUnion<
  [
    z.ZodLiteral<-3>,
    z.ZodLiteral<-2>,
    z.ZodLiteral<-1>,
    z.ZodLiteral<0>,
    z.ZodLiteral<1>,
    z.ZodLiteral<2>,
    z.ZodLiteral<3>
  ]
>;
export type QuoteLength = z.infer<typeof QuoteLengthSchema>;
export declare const QuoteLengthConfigSchema: z.ZodArray<
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
>;
export type QuoteLengthConfig = z.infer<typeof QuoteLengthConfigSchema>;
export declare const CaretStyleSchema: z.ZodEnum<
  ["off", "default", "block", "outline", "underline", "carrot", "banana"]
>;
export type CaretStyle = z.infer<typeof CaretStyleSchema>;
export declare const ConfidenceModeSchema: z.ZodEnum<["off", "on", "max"]>;
export type ConfidenceMode = z.infer<typeof ConfidenceModeSchema>;
export declare const IndicateTyposSchema: z.ZodEnum<
  ["off", "below", "replace"]
>;
export type IndicateTypos = z.infer<typeof IndicateTyposSchema>;
export declare const TimerStyleSchema: z.ZodEnum<
  ["off", "bar", "text", "mini"]
>;
export type TimerStyle = z.infer<typeof TimerStyleSchema>;
export declare const LiveSpeedAccBurstStyleSchema: z.ZodEnum<
  ["off", "text", "mini"]
>;
export type LiveSpeedAccBurstStyle = z.infer<
  typeof LiveSpeedAccBurstStyleSchema
>;
export declare const RandomThemeSchema: z.ZodEnum<
  ["off", "on", "fav", "light", "dark", "custom"]
>;
export type RandomTheme = z.infer<typeof RandomThemeSchema>;
export declare const TimerColorSchema: z.ZodEnum<
  ["black", "sub", "text", "main"]
>;
export type TimerColor = z.infer<typeof TimerColorSchema>;
export declare const TimerOpacitySchema: z.ZodEnum<
  ["0.25", "0.5", "0.75", "1"]
>;
export type TimerOpacity = z.infer<typeof TimerOpacitySchema>;
export declare const StopOnErrorSchema: z.ZodEnum<["off", "word", "letter"]>;
export type StopOnError = z.infer<typeof StopOnErrorSchema>;
export declare const KeymapModeSchema: z.ZodEnum<
  ["off", "static", "react", "next"]
>;
export type KeymapMode = z.infer<typeof KeymapModeSchema>;
export declare const KeymapStyleSchema: z.ZodEnum<
  [
    "staggered",
    "alice",
    "matrix",
    "split",
    "split_matrix",
    "steno",
    "steno_matrix"
  ]
>;
export type KeymapStyle = z.infer<typeof KeymapStyleSchema>;
export declare const KeymapLegendStyleSchema: z.ZodEnum<
  ["lowercase", "uppercase", "blank", "dynamic"]
>;
export type KeymapLegendStyle = z.infer<typeof KeymapLegendStyleSchema>;
export declare const KeymapShowTopRowSchema: z.ZodEnum<
  ["always", "layout", "never"]
>;
export type KeymapShowTopRow = z.infer<typeof KeymapShowTopRowSchema>;
export declare const SingleListCommandLineSchema: z.ZodEnum<["manual", "on"]>;
export type SingleListCommandLine = z.infer<typeof SingleListCommandLineSchema>;
export declare const PlaySoundOnErrorSchema: z.ZodEnum<
  ["off", "1", "2", "3", "4"]
>;
export type PlaySoundOnError = z.infer<typeof PlaySoundOnErrorSchema>;
export declare const PlaySoundOnClickSchema: z.ZodEnum<
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
>;
export type PlaySoundOnClick = z.infer<typeof PlaySoundOnClickSchema>;
export declare const SoundVolumeSchema: z.ZodEnum<["0.1", "0.5", "1.0"]>;
export type SoundVolume = z.infer<typeof SoundVolumeSchema>;
export declare const PaceCaretSchema: z.ZodEnum<
  ["off", "average", "pb", "last", "custom", "daily"]
>;
export type PaceCaret = z.infer<typeof PaceCaretSchema>;
export declare const AccountChartSchema: z.ZodTuple<
  [
    z.ZodEnum<["on", "off"]>,
    z.ZodEnum<["on", "off"]>,
    z.ZodEnum<["on", "off"]>,
    z.ZodEnum<["on", "off"]>
  ],
  null
>;
export type AccountChart = z.infer<typeof AccountChartSchema>;
export declare const MinimumWordsPerMinuteSchema: z.ZodEnum<["off", "custom"]>;
export type MinimumWordsPerMinute = z.infer<typeof MinimumWordsPerMinuteSchema>;
export declare const HighlightModeSchema: z.ZodEnum<
  ["off", "letter", "word", "next_word", "next_two_words", "next_three_words"]
>;
export type HighlightMode = z.infer<typeof HighlightModeSchema>;
export declare const TapeModeSchema: z.ZodEnum<["off", "letter", "word"]>;
export type TapeMode = z.infer<typeof TapeModeSchema>;
export declare const TypingSpeedUnitSchema: z.ZodEnum<
  ["wpm", "cpm", "wps", "cps", "wph"]
>;
export type TypingSpeedUnit = z.infer<typeof TypingSpeedUnitSchema>;
export declare const AdsSchema: z.ZodEnum<["off", "result", "on", "sellout"]>;
export type Ads = z.infer<typeof AdsSchema>;
export declare const MinimumAccuracySchema: z.ZodEnum<["off", "custom"]>;
export type MinimumAccuracy = z.infer<typeof MinimumAccuracySchema>;
export declare const RepeatQuotesSchema: z.ZodEnum<["off", "typing"]>;
export type RepeatQuotes = z.infer<typeof RepeatQuotesSchema>;
export declare const OppositeShiftModeSchema: z.ZodEnum<
  ["off", "on", "keymap"]
>;
export type OppositeShiftMode = z.infer<typeof OppositeShiftModeSchema>;
export declare const CustomBackgroundSizeSchema: z.ZodEnum<
  ["cover", "contain", "max"]
>;
export type CustomBackgroundSize = z.infer<typeof CustomBackgroundSizeSchema>;
export declare const CustomBackgroundFilterSchema: z.ZodTuple<
  [z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber],
  null
>;
export type CustomBackgroundFilter = z.infer<
  typeof CustomBackgroundFilterSchema
>;
export declare const CustomLayoutFluidSchema: z.ZodString;
export type CustomLayoutFluid = z.infer<typeof CustomLayoutFluidSchema>;
export declare const MonkeyPowerLevelSchema: z.ZodEnum<
  ["off", "1", "2", "3", "4"]
>;
export type MonkeyPowerLevel = z.infer<typeof MonkeyPowerLevelSchema>;
export declare const MinimumBurstSchema: z.ZodEnum<["off", "fixed", "flex"]>;
export type MinimumBurst = z.infer<typeof MinimumBurstSchema>;
export declare const ShowAverageSchema: z.ZodEnum<
  ["off", "speed", "acc", "both"]
>;
export type ShowAverage = z.infer<typeof ShowAverageSchema>;
export declare const ColorHexValueSchema: z.ZodString;
export type ColorHexValue = z.infer<typeof ColorHexValueSchema>;
export declare const DifficultySchema: z.ZodEnum<
  ["normal", "expert", "master"]
>;
export type Difficulty = z.infer<typeof DifficultySchema>;
export declare const NumberModeSchema: z.ZodEnum<["time", "words", "quote"]>;
export declare const CustomModeSchema: z.ZodEnum<["custom"]>;
export declare const ZenModeSchema: z.ZodEnum<["zen"]>;
export declare const ModeSchema: z.ZodUnion<
  [
    z.ZodEnum<["time", "words", "quote"]>,
    z.ZodEnum<["custom"]>,
    z.ZodEnum<["zen"]>
  ]
>;
export type Mode = z.infer<typeof ModeSchema>;
export declare const CustomThemeColorsSchema: z.ZodTuple<
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
>;
export type CustomThemeColors = z.infer<typeof CustomThemeColorsSchema>;
export declare const FavThemesSchema: z.ZodArray<z.ZodString, "many">;
export type FavThemes = z.infer<typeof FavThemesSchema>;
export declare const FunboxSchema: z.ZodString;
export type Funbox = z.infer<typeof FunboxSchema>;
export declare const PaceCaretCustomSpeedSchema: z.ZodNumber;
export type PaceCaretCustomSpeed = z.infer<typeof PaceCaretCustomSpeedSchema>;
export declare const MinWpmCustomSpeedSchema: z.ZodNumber;
export type MinWpmCustomSpeed = z.infer<typeof MinWpmCustomSpeedSchema>;
export declare const MinimumAccuracyCustomSchema: z.ZodNumber;
export type MinimumAccuracyCustom = z.infer<typeof MinimumAccuracyCustomSchema>;
export declare const MinimumBurstCustomSpeedSchema: z.ZodNumber;
export type MinimumBurstCustomSpeed = z.infer<
  typeof MinimumBurstCustomSpeedSchema
>;
export declare const TimeConfigSchema: z.ZodNumber;
export type TimeConfig = z.infer<typeof TimeConfigSchema>;
export declare const WordCountSchema: z.ZodNumber;
export type WordCount = z.infer<typeof WordCountSchema>;
export declare const FontFamilySchema: z.ZodString;
export type FontFamily = z.infer<typeof FontFamilySchema>;
export declare const ThemeNameSchema: z.ZodString;
export type ThemeName = z.infer<typeof ThemeNameSchema>;
export declare const LanguageSchema: z.ZodString;
export type Language = z.infer<typeof LanguageSchema>;
export declare const KeymapLayoutSchema: z.ZodString;
export type KeymapLayout = z.infer<typeof KeymapLayoutSchema>;
export declare const LayoutSchema: z.ZodString;
export type Layout = z.infer<typeof LayoutSchema>;
export declare const FontSizeSchema: z.ZodNumber;
export type FontSize = z.infer<typeof FontSizeSchema>;
export declare const MaxLineWidthSchema: z.ZodUnion<
  [z.ZodNumber, z.ZodLiteral<0>]
>;
export type MaxLineWidth = z.infer<typeof MaxLineWidthSchema>;
export declare const CustomBackgroundSchema: z.ZodUnion<
  [z.ZodString, z.ZodLiteral<"">]
>;
export type CustomBackground = z.infer<typeof CustomBackgroundSchema>;
export declare const ConfigSchema: z.ZodObject<
  {
    theme: z.ZodString;
    themeLight: z.ZodString;
    themeDark: z.ZodString;
    autoSwitchTheme: z.ZodBoolean;
    customTheme: z.ZodBoolean;
    customThemeColors: z.ZodTuple<
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
    >;
    favThemes: z.ZodArray<z.ZodString, "many">;
    showKeyTips: z.ZodBoolean;
    smoothCaret: z.ZodEnum<["off", "slow", "medium", "fast"]>;
    quickRestart: z.ZodEnum<["off", "esc", "tab", "enter"]>;
    punctuation: z.ZodBoolean;
    numbers: z.ZodBoolean;
    words: z.ZodNumber;
    time: z.ZodNumber;
    mode: z.ZodUnion<
      [
        z.ZodEnum<["time", "words", "quote"]>,
        z.ZodEnum<["custom"]>,
        z.ZodEnum<["zen"]>
      ]
    >;
    quoteLength: z.ZodArray<
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
    >;
    language: z.ZodString;
    fontSize: z.ZodNumber;
    freedomMode: z.ZodBoolean;
    difficulty: z.ZodEnum<["normal", "expert", "master"]>;
    blindMode: z.ZodBoolean;
    quickEnd: z.ZodBoolean;
    caretStyle: z.ZodEnum<
      ["off", "default", "block", "outline", "underline", "carrot", "banana"]
    >;
    paceCaretStyle: z.ZodEnum<
      ["off", "default", "block", "outline", "underline", "carrot", "banana"]
    >;
    flipTestColors: z.ZodBoolean;
    layout: z.ZodString;
    funbox: z.ZodString;
    confidenceMode: z.ZodEnum<["off", "on", "max"]>;
    indicateTypos: z.ZodEnum<["off", "below", "replace"]>;
    timerStyle: z.ZodEnum<["off", "bar", "text", "mini"]>;
    liveSpeedStyle: z.ZodEnum<["off", "text", "mini"]>;
    liveAccStyle: z.ZodEnum<["off", "text", "mini"]>;
    liveBurstStyle: z.ZodEnum<["off", "text", "mini"]>;
    colorfulMode: z.ZodBoolean;
    randomTheme: z.ZodEnum<["off", "on", "fav", "light", "dark", "custom"]>;
    timerColor: z.ZodEnum<["black", "sub", "text", "main"]>;
    timerOpacity: z.ZodEnum<["0.25", "0.5", "0.75", "1"]>;
    stopOnError: z.ZodEnum<["off", "word", "letter"]>;
    showAllLines: z.ZodBoolean;
    keymapMode: z.ZodEnum<["off", "static", "react", "next"]>;
    keymapStyle: z.ZodEnum<
      [
        "staggered",
        "alice",
        "matrix",
        "split",
        "split_matrix",
        "steno",
        "steno_matrix"
      ]
    >;
    keymapLegendStyle: z.ZodEnum<
      ["lowercase", "uppercase", "blank", "dynamic"]
    >;
    keymapLayout: z.ZodString;
    keymapShowTopRow: z.ZodEnum<["always", "layout", "never"]>;
    fontFamily: z.ZodString;
    smoothLineScroll: z.ZodBoolean;
    alwaysShowDecimalPlaces: z.ZodBoolean;
    alwaysShowWordsHistory: z.ZodBoolean;
    singleListCommandLine: z.ZodEnum<["manual", "on"]>;
    capsLockWarning: z.ZodBoolean;
    playSoundOnError: z.ZodEnum<["off", "1", "2", "3", "4"]>;
    playSoundOnClick: z.ZodEnum<
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
    >;
    soundVolume: z.ZodEnum<["0.1", "0.5", "1.0"]>;
    startGraphsAtZero: z.ZodBoolean;
    showOutOfFocusWarning: z.ZodBoolean;
    paceCaret: z.ZodEnum<["off", "average", "pb", "last", "custom", "daily"]>;
    paceCaretCustomSpeed: z.ZodNumber;
    repeatedPace: z.ZodBoolean;
    accountChart: z.ZodTuple<
      [
        z.ZodEnum<["on", "off"]>,
        z.ZodEnum<["on", "off"]>,
        z.ZodEnum<["on", "off"]>,
        z.ZodEnum<["on", "off"]>
      ],
      null
    >;
    minWpm: z.ZodEnum<["off", "custom"]>;
    minWpmCustomSpeed: z.ZodNumber;
    highlightMode: z.ZodEnum<
      [
        "off",
        "letter",
        "word",
        "next_word",
        "next_two_words",
        "next_three_words"
      ]
    >;
    tapeMode: z.ZodEnum<["off", "letter", "word"]>;
    typingSpeedUnit: z.ZodEnum<["wpm", "cpm", "wps", "cps", "wph"]>;
    ads: z.ZodEnum<["off", "result", "on", "sellout"]>;
    hideExtraLetters: z.ZodBoolean;
    strictSpace: z.ZodBoolean;
    minAcc: z.ZodEnum<["off", "custom"]>;
    minAccCustom: z.ZodNumber;
    monkey: z.ZodBoolean;
    repeatQuotes: z.ZodEnum<["off", "typing"]>;
    oppositeShiftMode: z.ZodEnum<["off", "on", "keymap"]>;
    customBackground: z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>;
    customBackgroundSize: z.ZodEnum<["cover", "contain", "max"]>;
    customBackgroundFilter: z.ZodTuple<
      [z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber],
      null
    >;
    customLayoutfluid: z.ZodString;
    monkeyPowerLevel: z.ZodEnum<["off", "1", "2", "3", "4"]>;
    minBurst: z.ZodEnum<["off", "fixed", "flex"]>;
    minBurstCustomSpeed: z.ZodNumber;
    burstHeatmap: z.ZodBoolean;
    britishEnglish: z.ZodBoolean;
    lazyMode: z.ZodBoolean;
    showAverage: z.ZodEnum<["off", "speed", "acc", "both"]>;
    maxLineWidth: z.ZodUnion<[z.ZodNumber, z.ZodLiteral<0>]>;
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
export type Config = z.infer<typeof ConfigSchema>;
export declare const PartialConfigSchema: z.ZodObject<
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
    smoothCaret: z.ZodOptional<z.ZodEnum<["off", "slow", "medium", "fast"]>>;
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
        ["off", "default", "block", "outline", "underline", "carrot", "banana"]
      >
    >;
    paceCaretStyle: z.ZodOptional<
      z.ZodEnum<
        ["off", "default", "block", "outline", "underline", "carrot", "banana"]
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
    keymapMode: z.ZodOptional<z.ZodEnum<["off", "static", "react", "next"]>>;
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
    keymapShowTopRow: z.ZodOptional<z.ZodEnum<["always", "layout", "never"]>>;
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
    customBackgroundSize: z.ZodOptional<z.ZodEnum<["cover", "contain", "max"]>>;
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
export type PartialConfig = z.infer<typeof PartialConfigSchema>;
//# sourceMappingURL=config.d.ts.map

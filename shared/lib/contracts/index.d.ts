export declare const contract: {
  configs: {
    get: {
      description: "Get config of the current user.";
      strictStatusCodes: true;
      summary: "get config";
      method: "GET";
      path: "/configs/";
      responses: {
        400: import("zod").ZodObject<
          {
            message: import("zod").ZodString;
          },
          "strip",
          import("zod").ZodTypeAny,
          {
            message?: string;
          },
          {
            message?: string;
          }
        >;
        422: import("zod").ZodObject<
          import("zod").objectUtil.extendShape<
            {
              message: import("zod").ZodString;
            },
            {
              validationErrors: import("zod").ZodArray<
                import("zod").ZodString,
                "atleastone"
              >;
            }
          >,
          "strip",
          import("zod").ZodTypeAny,
          {
            message?: string;
            validationErrors?: [string, ...string[]];
          },
          {
            message?: string;
            validationErrors?: [string, ...string[]];
          }
        >;
        500: import("zod").ZodObject<
          import("zod").objectUtil.extendShape<
            {
              message: import("zod").ZodString;
            },
            {
              errorId: import("zod").ZodString;
              uid: import("zod").ZodOptional<import("zod").ZodString>;
            }
          >,
          "strip",
          import("zod").ZodTypeAny,
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
        200: import("zod").ZodObject<
          import("zod").objectUtil.extendShape<
            {
              message: import("zod").ZodString;
            },
            {
              data: import("zod").ZodNullable<
                import("zod").ZodObject<
                  {
                    theme: import("zod").ZodOptional<import("zod").ZodString>;
                    themeLight: import("zod").ZodOptional<
                      import("zod").ZodString
                    >;
                    themeDark: import("zod").ZodOptional<
                      import("zod").ZodString
                    >;
                    autoSwitchTheme: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    customTheme: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    customThemeColors: import("zod").ZodOptional<
                      import("zod").ZodTuple<
                        [
                          import("zod").ZodString,
                          import("zod").ZodString,
                          import("zod").ZodString,
                          import("zod").ZodString,
                          import("zod").ZodString,
                          import("zod").ZodString,
                          import("zod").ZodString,
                          import("zod").ZodString,
                          import("zod").ZodString,
                          import("zod").ZodString
                        ],
                        null
                      >
                    >;
                    favThemes: import("zod").ZodOptional<
                      import("zod").ZodArray<import("zod").ZodString, "many">
                    >;
                    showKeyTips: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    smoothCaret: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "slow", "medium", "fast"]>
                    >;
                    quickRestart: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "esc", "tab", "enter"]>
                    >;
                    punctuation: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    numbers: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    words: import("zod").ZodOptional<import("zod").ZodNumber>;
                    time: import("zod").ZodOptional<import("zod").ZodNumber>;
                    mode: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodEnum<["time", "words", "quote"]>,
                          import("zod").ZodEnum<["custom"]>,
                          import("zod").ZodEnum<["zen"]>
                        ]
                      >
                    >;
                    quoteLength: import("zod").ZodOptional<
                      import("zod").ZodArray<
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodLiteral<-3>,
                            import("zod").ZodLiteral<-2>,
                            import("zod").ZodLiteral<-1>,
                            import("zod").ZodLiteral<0>,
                            import("zod").ZodLiteral<1>,
                            import("zod").ZodLiteral<2>,
                            import("zod").ZodLiteral<3>
                          ]
                        >,
                        "many"
                      >
                    >;
                    language: import("zod").ZodOptional<
                      import("zod").ZodString
                    >;
                    fontSize: import("zod").ZodOptional<
                      import("zod").ZodNumber
                    >;
                    freedomMode: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    difficulty: import("zod").ZodOptional<
                      import("zod").ZodEnum<["normal", "expert", "master"]>
                    >;
                    blindMode: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    quickEnd: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    caretStyle: import("zod").ZodOptional<
                      import("zod").ZodEnum<
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
                    paceCaretStyle: import("zod").ZodOptional<
                      import("zod").ZodEnum<
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
                    flipTestColors: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    layout: import("zod").ZodOptional<import("zod").ZodString>;
                    funbox: import("zod").ZodOptional<import("zod").ZodString>;
                    confidenceMode: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "on", "max"]>
                    >;
                    indicateTypos: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "below", "replace"]>
                    >;
                    timerStyle: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "bar", "text", "mini"]>
                    >;
                    liveSpeedStyle: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "text", "mini"]>
                    >;
                    liveAccStyle: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "text", "mini"]>
                    >;
                    liveBurstStyle: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "text", "mini"]>
                    >;
                    colorfulMode: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    randomTheme: import("zod").ZodOptional<
                      import("zod").ZodEnum<
                        ["off", "on", "fav", "light", "dark", "custom"]
                      >
                    >;
                    timerColor: import("zod").ZodOptional<
                      import("zod").ZodEnum<["black", "sub", "text", "main"]>
                    >;
                    timerOpacity: import("zod").ZodOptional<
                      import("zod").ZodEnum<["0.25", "0.5", "0.75", "1"]>
                    >;
                    stopOnError: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "word", "letter"]>
                    >;
                    showAllLines: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    keymapMode: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "static", "react", "next"]>
                    >;
                    keymapStyle: import("zod").ZodOptional<
                      import("zod").ZodEnum<
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
                    keymapLegendStyle: import("zod").ZodOptional<
                      import("zod").ZodEnum<
                        ["lowercase", "uppercase", "blank", "dynamic"]
                      >
                    >;
                    keymapLayout: import("zod").ZodOptional<
                      import("zod").ZodString
                    >;
                    keymapShowTopRow: import("zod").ZodOptional<
                      import("zod").ZodEnum<["always", "layout", "never"]>
                    >;
                    fontFamily: import("zod").ZodOptional<
                      import("zod").ZodString
                    >;
                    smoothLineScroll: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    alwaysShowDecimalPlaces: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    alwaysShowWordsHistory: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    singleListCommandLine: import("zod").ZodOptional<
                      import("zod").ZodEnum<["manual", "on"]>
                    >;
                    capsLockWarning: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    playSoundOnError: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "1", "2", "3", "4"]>
                    >;
                    playSoundOnClick: import("zod").ZodOptional<
                      import("zod").ZodEnum<
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
                    soundVolume: import("zod").ZodOptional<
                      import("zod").ZodEnum<["0.1", "0.5", "1.0"]>
                    >;
                    startGraphsAtZero: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    showOutOfFocusWarning: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    paceCaret: import("zod").ZodOptional<
                      import("zod").ZodEnum<
                        ["off", "average", "pb", "last", "custom", "daily"]
                      >
                    >;
                    paceCaretCustomSpeed: import("zod").ZodOptional<
                      import("zod").ZodNumber
                    >;
                    repeatedPace: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    accountChart: import("zod").ZodOptional<
                      import("zod").ZodTuple<
                        [
                          import("zod").ZodEnum<["on", "off"]>,
                          import("zod").ZodEnum<["on", "off"]>,
                          import("zod").ZodEnum<["on", "off"]>,
                          import("zod").ZodEnum<["on", "off"]>
                        ],
                        null
                      >
                    >;
                    minWpm: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "custom"]>
                    >;
                    minWpmCustomSpeed: import("zod").ZodOptional<
                      import("zod").ZodNumber
                    >;
                    highlightMode: import("zod").ZodOptional<
                      import("zod").ZodEnum<
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
                    tapeMode: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "letter", "word"]>
                    >;
                    typingSpeedUnit: import("zod").ZodOptional<
                      import("zod").ZodEnum<["wpm", "cpm", "wps", "cps", "wph"]>
                    >;
                    ads: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "result", "on", "sellout"]>
                    >;
                    hideExtraLetters: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    strictSpace: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    minAcc: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "custom"]>
                    >;
                    minAccCustom: import("zod").ZodOptional<
                      import("zod").ZodNumber
                    >;
                    monkey: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    repeatQuotes: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "typing"]>
                    >;
                    oppositeShiftMode: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "on", "keymap"]>
                    >;
                    customBackground: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [import("zod").ZodString, import("zod").ZodLiteral<"">]
                      >
                    >;
                    customBackgroundSize: import("zod").ZodOptional<
                      import("zod").ZodEnum<["cover", "contain", "max"]>
                    >;
                    customBackgroundFilter: import("zod").ZodOptional<
                      import("zod").ZodTuple<
                        [
                          import("zod").ZodNumber,
                          import("zod").ZodNumber,
                          import("zod").ZodNumber,
                          import("zod").ZodNumber
                        ],
                        null
                      >
                    >;
                    customLayoutfluid: import("zod").ZodOptional<
                      import("zod").ZodString
                    >;
                    monkeyPowerLevel: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "1", "2", "3", "4"]>
                    >;
                    minBurst: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "fixed", "flex"]>
                    >;
                    minBurstCustomSpeed: import("zod").ZodOptional<
                      import("zod").ZodNumber
                    >;
                    burstHeatmap: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    britishEnglish: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    lazyMode: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    showAverage: import("zod").ZodOptional<
                      import("zod").ZodEnum<["off", "speed", "acc", "both"]>
                    >;
                    maxLineWidth: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [import("zod").ZodNumber, import("zod").ZodLiteral<0>]
                      >
                    >;
                  },
                  "strict",
                  import("zod").ZodTypeAny,
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
          import("zod").UnknownKeysParam,
          import("zod").ZodTypeAny,
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
            };
          }
        >;
      };
    };
    save: {
      description: "Update the config of the current user. Only provided values will be updated while the missing values will be unchanged.";
      strictStatusCodes: true;
      summary: "update config";
      method: "PATCH";
      body: import("zod").ZodObject<
        {
          theme: import("zod").ZodOptional<import("zod").ZodString>;
          themeLight: import("zod").ZodOptional<import("zod").ZodString>;
          themeDark: import("zod").ZodOptional<import("zod").ZodString>;
          autoSwitchTheme: import("zod").ZodOptional<import("zod").ZodBoolean>;
          customTheme: import("zod").ZodOptional<import("zod").ZodBoolean>;
          customThemeColors: import("zod").ZodOptional<
            import("zod").ZodTuple<
              [
                import("zod").ZodString,
                import("zod").ZodString,
                import("zod").ZodString,
                import("zod").ZodString,
                import("zod").ZodString,
                import("zod").ZodString,
                import("zod").ZodString,
                import("zod").ZodString,
                import("zod").ZodString,
                import("zod").ZodString
              ],
              null
            >
          >;
          favThemes: import("zod").ZodOptional<
            import("zod").ZodArray<import("zod").ZodString, "many">
          >;
          showKeyTips: import("zod").ZodOptional<import("zod").ZodBoolean>;
          smoothCaret: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "slow", "medium", "fast"]>
          >;
          quickRestart: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "esc", "tab", "enter"]>
          >;
          punctuation: import("zod").ZodOptional<import("zod").ZodBoolean>;
          numbers: import("zod").ZodOptional<import("zod").ZodBoolean>;
          words: import("zod").ZodOptional<import("zod").ZodNumber>;
          time: import("zod").ZodOptional<import("zod").ZodNumber>;
          mode: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodEnum<["time", "words", "quote"]>,
                import("zod").ZodEnum<["custom"]>,
                import("zod").ZodEnum<["zen"]>
              ]
            >
          >;
          quoteLength: import("zod").ZodOptional<
            import("zod").ZodArray<
              import("zod").ZodUnion<
                [
                  import("zod").ZodLiteral<-3>,
                  import("zod").ZodLiteral<-2>,
                  import("zod").ZodLiteral<-1>,
                  import("zod").ZodLiteral<0>,
                  import("zod").ZodLiteral<1>,
                  import("zod").ZodLiteral<2>,
                  import("zod").ZodLiteral<3>
                ]
              >,
              "many"
            >
          >;
          language: import("zod").ZodOptional<import("zod").ZodString>;
          fontSize: import("zod").ZodOptional<import("zod").ZodNumber>;
          freedomMode: import("zod").ZodOptional<import("zod").ZodBoolean>;
          difficulty: import("zod").ZodOptional<
            import("zod").ZodEnum<["normal", "expert", "master"]>
          >;
          blindMode: import("zod").ZodOptional<import("zod").ZodBoolean>;
          quickEnd: import("zod").ZodOptional<import("zod").ZodBoolean>;
          caretStyle: import("zod").ZodOptional<
            import("zod").ZodEnum<
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
          paceCaretStyle: import("zod").ZodOptional<
            import("zod").ZodEnum<
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
          flipTestColors: import("zod").ZodOptional<import("zod").ZodBoolean>;
          layout: import("zod").ZodOptional<import("zod").ZodString>;
          funbox: import("zod").ZodOptional<import("zod").ZodString>;
          confidenceMode: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "on", "max"]>
          >;
          indicateTypos: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "below", "replace"]>
          >;
          timerStyle: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "bar", "text", "mini"]>
          >;
          liveSpeedStyle: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "text", "mini"]>
          >;
          liveAccStyle: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "text", "mini"]>
          >;
          liveBurstStyle: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "text", "mini"]>
          >;
          colorfulMode: import("zod").ZodOptional<import("zod").ZodBoolean>;
          randomTheme: import("zod").ZodOptional<
            import("zod").ZodEnum<
              ["off", "on", "fav", "light", "dark", "custom"]
            >
          >;
          timerColor: import("zod").ZodOptional<
            import("zod").ZodEnum<["black", "sub", "text", "main"]>
          >;
          timerOpacity: import("zod").ZodOptional<
            import("zod").ZodEnum<["0.25", "0.5", "0.75", "1"]>
          >;
          stopOnError: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "word", "letter"]>
          >;
          showAllLines: import("zod").ZodOptional<import("zod").ZodBoolean>;
          keymapMode: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "static", "react", "next"]>
          >;
          keymapStyle: import("zod").ZodOptional<
            import("zod").ZodEnum<
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
          keymapLegendStyle: import("zod").ZodOptional<
            import("zod").ZodEnum<
              ["lowercase", "uppercase", "blank", "dynamic"]
            >
          >;
          keymapLayout: import("zod").ZodOptional<import("zod").ZodString>;
          keymapShowTopRow: import("zod").ZodOptional<
            import("zod").ZodEnum<["always", "layout", "never"]>
          >;
          fontFamily: import("zod").ZodOptional<import("zod").ZodString>;
          smoothLineScroll: import("zod").ZodOptional<import("zod").ZodBoolean>;
          alwaysShowDecimalPlaces: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          alwaysShowWordsHistory: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          singleListCommandLine: import("zod").ZodOptional<
            import("zod").ZodEnum<["manual", "on"]>
          >;
          capsLockWarning: import("zod").ZodOptional<import("zod").ZodBoolean>;
          playSoundOnError: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "1", "2", "3", "4"]>
          >;
          playSoundOnClick: import("zod").ZodOptional<
            import("zod").ZodEnum<
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
          soundVolume: import("zod").ZodOptional<
            import("zod").ZodEnum<["0.1", "0.5", "1.0"]>
          >;
          startGraphsAtZero: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          showOutOfFocusWarning: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          paceCaret: import("zod").ZodOptional<
            import("zod").ZodEnum<
              ["off", "average", "pb", "last", "custom", "daily"]
            >
          >;
          paceCaretCustomSpeed: import("zod").ZodOptional<
            import("zod").ZodNumber
          >;
          repeatedPace: import("zod").ZodOptional<import("zod").ZodBoolean>;
          accountChart: import("zod").ZodOptional<
            import("zod").ZodTuple<
              [
                import("zod").ZodEnum<["on", "off"]>,
                import("zod").ZodEnum<["on", "off"]>,
                import("zod").ZodEnum<["on", "off"]>,
                import("zod").ZodEnum<["on", "off"]>
              ],
              null
            >
          >;
          minWpm: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "custom"]>
          >;
          minWpmCustomSpeed: import("zod").ZodOptional<import("zod").ZodNumber>;
          highlightMode: import("zod").ZodOptional<
            import("zod").ZodEnum<
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
          tapeMode: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "letter", "word"]>
          >;
          typingSpeedUnit: import("zod").ZodOptional<
            import("zod").ZodEnum<["wpm", "cpm", "wps", "cps", "wph"]>
          >;
          ads: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "result", "on", "sellout"]>
          >;
          hideExtraLetters: import("zod").ZodOptional<import("zod").ZodBoolean>;
          strictSpace: import("zod").ZodOptional<import("zod").ZodBoolean>;
          minAcc: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "custom"]>
          >;
          minAccCustom: import("zod").ZodOptional<import("zod").ZodNumber>;
          monkey: import("zod").ZodOptional<import("zod").ZodBoolean>;
          repeatQuotes: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "typing"]>
          >;
          oppositeShiftMode: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "on", "keymap"]>
          >;
          customBackground: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [import("zod").ZodString, import("zod").ZodLiteral<"">]
            >
          >;
          customBackgroundSize: import("zod").ZodOptional<
            import("zod").ZodEnum<["cover", "contain", "max"]>
          >;
          customBackgroundFilter: import("zod").ZodOptional<
            import("zod").ZodTuple<
              [
                import("zod").ZodNumber,
                import("zod").ZodNumber,
                import("zod").ZodNumber,
                import("zod").ZodNumber
              ],
              null
            >
          >;
          customLayoutfluid: import("zod").ZodOptional<import("zod").ZodString>;
          monkeyPowerLevel: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "1", "2", "3", "4"]>
          >;
          minBurst: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "fixed", "flex"]>
          >;
          minBurstCustomSpeed: import("zod").ZodOptional<
            import("zod").ZodNumber
          >;
          burstHeatmap: import("zod").ZodOptional<import("zod").ZodBoolean>;
          britishEnglish: import("zod").ZodOptional<import("zod").ZodBoolean>;
          lazyMode: import("zod").ZodOptional<import("zod").ZodBoolean>;
          showAverage: import("zod").ZodOptional<
            import("zod").ZodEnum<["off", "speed", "acc", "both"]>
          >;
          maxLineWidth: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [import("zod").ZodNumber, import("zod").ZodLiteral<0>]
            >
          >;
        },
        "strict",
        import("zod").ZodTypeAny,
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
      >;
      path: "/configs/";
      responses: {
        400: import("zod").ZodObject<
          {
            message: import("zod").ZodString;
          },
          "strip",
          import("zod").ZodTypeAny,
          {
            message?: string;
          },
          {
            message?: string;
          }
        >;
        422: import("zod").ZodObject<
          import("zod").objectUtil.extendShape<
            {
              message: import("zod").ZodString;
            },
            {
              validationErrors: import("zod").ZodArray<
                import("zod").ZodString,
                "atleastone"
              >;
            }
          >,
          "strip",
          import("zod").ZodTypeAny,
          {
            message?: string;
            validationErrors?: [string, ...string[]];
          },
          {
            message?: string;
            validationErrors?: [string, ...string[]];
          }
        >;
        500: import("zod").ZodObject<
          import("zod").objectUtil.extendShape<
            {
              message: import("zod").ZodString;
            },
            {
              errorId: import("zod").ZodString;
              uid: import("zod").ZodOptional<import("zod").ZodString>;
            }
          >,
          "strip",
          import("zod").ZodTypeAny,
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
        200: import("zod").ZodObject<
          {
            message: import("zod").ZodString;
          },
          "strip",
          import("zod").ZodTypeAny,
          {
            message?: string;
          },
          {
            message?: string;
          }
        >;
      };
    };
    delete: {
      description: "Delete/reset the config for the current user.";
      strictStatusCodes: true;
      summary: "delete config";
      method: "DELETE";
      body: typeof import("@ts-rest/core").ContractNoBody;
      path: "/configs/";
      responses: {
        400: import("zod").ZodObject<
          {
            message: import("zod").ZodString;
          },
          "strip",
          import("zod").ZodTypeAny,
          {
            message?: string;
          },
          {
            message?: string;
          }
        >;
        422: import("zod").ZodObject<
          import("zod").objectUtil.extendShape<
            {
              message: import("zod").ZodString;
            },
            {
              validationErrors: import("zod").ZodArray<
                import("zod").ZodString,
                "atleastone"
              >;
            }
          >,
          "strip",
          import("zod").ZodTypeAny,
          {
            message?: string;
            validationErrors?: [string, ...string[]];
          },
          {
            message?: string;
            validationErrors?: [string, ...string[]];
          }
        >;
        500: import("zod").ZodObject<
          import("zod").objectUtil.extendShape<
            {
              message: import("zod").ZodString;
            },
            {
              errorId: import("zod").ZodString;
              uid: import("zod").ZodOptional<import("zod").ZodString>;
            }
          >,
          "strip",
          import("zod").ZodTypeAny,
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
        200: import("zod").ZodObject<
          {
            message: import("zod").ZodString;
          },
          "strip",
          import("zod").ZodTypeAny,
          {
            message?: string;
          },
          {
            message?: string;
          }
        >;
      };
    };
  };
};
//# sourceMappingURL=index.d.ts.map

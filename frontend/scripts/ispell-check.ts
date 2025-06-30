import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { is } from "date-fns/locale";

type Error = { index: number; suggestions: string[] | undefined };
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = __dirname + "/../static/languages";

const ignore = new Set([
  "Logitech",
  "Pokemon",
  "changelog",
  "frontpage",
  "barcode",
  "wifi",
  "signup",
]);

function spellcheck(): void {
  const verbose = true;

  const srcFiles = fs
    .readdirSync(srcDir)
    .map((it) => it.substring(0, it.length - ".json".length));

  for (const language of srcFiles) {
    const languageFile = `/tmp/spellcheck/${language}`;

    const check = (): Error[] => {
      return hunspell("de_DE", languageFile);
    };

    const check2 = (): Error[] => {
      return ispell(languageFile);
    };
    if (!language.includes("german")) continue;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const original: { words: string[] } = JSON.parse(
      fs.readFileSync(`${srcDir}/${language}.json`).toString()
    );
    const words = original.words;

    fs.writeFileSync(languageFile, words.join("\n"));

    const errors = check().filter(
      (it) => !ignore.has(words[it.index] as string)
    );

    if (errors.length === 0) continue;

    console.log(`### File  ${language} has ${errors.length} errors.`);

    if (verbose) {
      console.log(`|line|word|suggestion|\n|----|----|----|`);
      for (const { index, suggestions } of errors) {
        console.log(`|${index + 1}| ${words[index]} | ${suggestions} |`);
      }
    }

    fs.writeFileSync(
      `/tmp/spellcheck-errors/${language}_errors.csv`,
      errors
        .map((it) => `${it.index + 1};${words[it.index]}:${it.suggestions}`)
        .join("\n")
    );

    console.log("\n\n");
  }

  function ispell(file: string): Error[] {
    try {
      execSync(
        `ispell < ${file} |grep word | grep -n "how about:" > /tmp/spellcheck-results`
      );
    } catch (err) {
      // @ts-expect-error process call error
      if (err.status !== 1) throw err;
    }

    const errors = fs
      .readFileSync("/tmp/spellcheck-results")
      .toString()
      .split("\n")
      .filter((it) => it.length > 0)
      .map((it) => it.split(":"))
      .map((it) => ({
        index: parseInt(it[0] as string) - 1,
        suggestions: it[3]?.split(","),
      }));

    return errors;
  }

  function hunspell(lang: string, file: string): Error[] {
    try {
      execSync(
        `hunspell -d ${lang} < ${file} | grep -v -e '^$' | grep -n "&" > /tmp/spellcheck-results`
      );
    } catch (err) {
      // @ts-expect-error process call error
      if (err.status !== 1) throw err;
    }

    const errors = fs
      .readFileSync("/tmp/spellcheck-results")
      .toString()
      .split("\n")
      .filter((it) => it.length > 0)
      .map((it) => it.split(":"))
      .map((it) => ({
        index: parseInt(it[0] as string) - 2,
        suggestions: it[2]?.split(","),
      }));

    return errors;
  }
}

//detect if we run this as a main
if (import.meta.url.endsWith(process.argv[1] as string)) {
  spellcheck();
}

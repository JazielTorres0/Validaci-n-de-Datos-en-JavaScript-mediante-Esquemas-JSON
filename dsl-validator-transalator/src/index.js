import fs from "fs";
import { tokenize } from "./lexer/tokenizer.js";
import { parse } from "./parser/parser.js";
import { generateAjv } from "./generators/ajvGenerator.js";
import { generateZod } from "./generators/zodGenerator.js";
import { generateJoi } from "./generators/joiGenerator.js";

const filePath = process.argv[2];
const target = process.argv[3]?.split("=")[1] || "ajv";

const input = fs.readFileSync(filePath, "utf-8");

const tokens = tokenize(input);
const ast = parse(tokens);

let output;

if (target === "ajv") output = generateAjv(ast);
if (target === "zod") output = generateZod(ast);
if (target === "joi") output = generateJoi(ast);

fs.writeFileSync(`output/${target}.js`, output);

console.log(`✔ Código generado en output/${target}.js`);

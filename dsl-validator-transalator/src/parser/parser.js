import { SchemaNode, FieldNode } from "../ast/ast.js";

export function parse(tokens) {
    let i = 0;
    let schema;

    while (i < tokens.length) {
        if (tokens[i] === "schema") {
            const name = tokens[i + 1];
            schema = new SchemaNode(name);
            i += 3; // saltar "schema Nombre {"
        } else if (tokens[i] === "}") {
            break;
        } else {
            const [fieldName, type] = tokens[i].split(":");
            const field = new FieldNode(fieldName, type);

            i++;

            while (i < tokens.length && !tokens[i].includes(":") && tokens[i] !== "}") {
                const token = tokens[i];

                if (token === "required") {
                    schema.required.push(fieldName);
                }

                if (token.startsWith("min(")) {
                    field.rules.minimum = parseInt(token.match(/\d+/)[0]);
                }

                if (token.startsWith("max(")) {
                    field.rules.maximum = parseInt(token.match(/\d+/)[0]);
                }

                if (token === "email") {
                    field.rules.format = "email";
                }

                i++;
            }

            schema.properties[fieldName] = field;
        }
    }

    return schema;
}

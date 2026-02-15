export function generateAjv(schema) {
    const jsonSchema = {
        type: "object",
        properties: {},
        required: schema.required
    };

    for (let key in schema.properties) {
        const field = schema.properties[key];
        jsonSchema.properties[key] = {
            type: field.type,
            ...field.rules
        };
    }

    return `
import Ajv from "ajv";

const ajv = new Ajv();
const schema = ${JSON.stringify(jsonSchema, null, 2)};

const validate = ajv.compile(schema);

export function validateData(data) {
    const valid = validate(data);
    if (!valid) console.error(validate.errors);
    return valid;
}
`;
}

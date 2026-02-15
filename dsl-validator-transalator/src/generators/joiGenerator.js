export function generateJoi(schema) {
    const props = Object.entries(schema.properties)
        .map(([key, field]) => {
            let line = `${key}: Joi.${field.type}()`;

            if (field.rules.minimum)
                line += `.min(${field.rules.minimum})`;

            if (field.rules.maximum)
                line += `.max(${field.rules.maximum})`;

            if (field.rules.format === "email")
                line += `.email()`;

            if (schema.required.includes(key))
                line += `.required()`;

            return line;
        })
        .join(",\n");

    return `
import Joi from "joi";

export const schema = Joi.object({
${props}
});
`;
}

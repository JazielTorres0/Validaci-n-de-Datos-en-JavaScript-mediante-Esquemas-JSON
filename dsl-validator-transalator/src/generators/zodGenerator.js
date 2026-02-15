export function generateZod(schema) {
    const props = Object.entries(schema.properties)
        .map(([key, field]) => {
            let line = `${key}: z.${field.type}()`;

            if (field.rules.minimum)
                line += `.min(${field.rules.minimum})`;

            if (field.rules.maximum)
                line += `.max(${field.rules.maximum})`;

            if (field.rules.format === "email")
                line += `.email()`;

            return line;
        })
        .join(",\n");

    return `
import { z } from "zod";

export const schema = z.object({
${props}
});
`;
}

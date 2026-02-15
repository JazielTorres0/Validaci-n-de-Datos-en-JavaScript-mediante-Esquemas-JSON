export function tokenize(input) {
    return input
        .replace(/\n/g, " ")
        .split(/\s+/)
        .filter(token => token.length > 0);
}

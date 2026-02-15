export class SchemaNode {
    constructor(name) {
        this.name = name;
        this.type = "object";
        this.properties = {};
        this.required = [];
    }
}

export class FieldNode {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.rules = {};
    }
}

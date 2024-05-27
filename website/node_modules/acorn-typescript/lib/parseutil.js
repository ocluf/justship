export class DestructuringErrors {
    constructor() {
        this.shorthandAssign =
            this.trailingComma =
                this.parenthesizedAssign =
                    this.parenthesizedBind =
                        this.doubleProto = -1;
    }
}
export function isPrivateNameConflicted(privateNameMap, element) {
    const name = element.key.name;
    const curr = privateNameMap[name];
    let next = "true";
    if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
        next = (element.static ? "s" : "i") + element.kind;
    }
    // `class { get #a(){}; static set #a(_){} }` is also conflict.
    if (curr === "iget" && next === "iset" ||
        curr === "iset" && next === "iget" ||
        curr === "sget" && next === "sset" ||
        curr === "sset" && next === "sget") {
        privateNameMap[name] = "true";
        return false;
    }
    else if (!curr) {
        privateNameMap[name] = next;
        return false;
    }
    else {
        return true;
    }
}
export function checkKeyName(node, name) {
    const { computed, key } = node;
    return !computed && (key.type === "Identifier" && key.name === name ||
        key.type === "Literal" && key.value === name);
}
//# sourceMappingURL=parseutil.js.map
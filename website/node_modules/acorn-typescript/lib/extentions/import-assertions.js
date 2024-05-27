export default function generateParseImportAssertions(Parse, acornTypeScript, acorn) {
    const { tokTypes } = acornTypeScript;
    const { tokTypes: tt } = acorn;
    return class ImportAttributes extends Parse {
        parseMaybeImportAttributes(node) {
            // import assertions
            if (this.type === tt._with || this.type === tokTypes.assert) {
                this.next();
                const attributes = this.parseImportAttributes();
                if (attributes) {
                    node.attributes = attributes;
                }
            }
        }
        parseImportAttributes() {
            this.expect(tt.braceL);
            const attrs = this.parseWithEntries();
            this.expect(tt.braceR);
            return attrs;
        }
        parseWithEntries() {
            const attrs = [];
            const attrNames = new Set();
            do {
                if (this.type === tt.braceR) {
                    break;
                }
                const node = this.startNode();
                // parse withionKey : IdentifierName, StringLiteral
                let withionKeyNode;
                if (this.type === tt.string) {
                    withionKeyNode = this.parseLiteral(this.value);
                }
                else {
                    withionKeyNode = this.parseIdent(true);
                }
                this.next();
                node.key = withionKeyNode;
                // check if we already have an entry for an attribute
                // if a duplicate entry is found, throw an error
                // for now this logic will come into play only when someone declares `type` twice
                if (attrNames.has(node.key.name)) {
                    this.raise(this.pos, 'Duplicated key in attributes');
                }
                attrNames.add(node.key.name);
                if (this.type !== tt.string) {
                    this.raise(this.pos, 'Only string is supported as an attribute value');
                }
                node.value = this.parseLiteral(this.value);
                attrs.push(this.finishNode(node, 'ImportAttribute'));
            } while (this.eat(tt.comma));
            return attrs;
        }
    };
}
//# sourceMappingURL=import-assertions.js.map
import { DecoratorsError } from '../error';
export default function generateParseDecorators(Parse, acornTypeScript, acorn) {
    const { tokTypes: tt } = acorn;
    const { tokTypes } = acornTypeScript;
    return class ParseDecorators extends Parse {
        takeDecorators(node) {
            const decorators = this.decoratorStack[this.decoratorStack.length - 1];
            if (decorators.length) {
                node.decorators = decorators;
                this.resetStartLocationFromNode(node, decorators[0]);
                this.decoratorStack[this.decoratorStack.length - 1] = [];
            }
        }
        parseDecorators(allowExport) {
            const currentContextDecorators = this.decoratorStack[this.decoratorStack.length - 1];
            while (this.match(tokTypes.at)) {
                const decorator = this.parseDecorator();
                currentContextDecorators.push(decorator);
            }
            if (this.match(tt._export)) {
                if (!allowExport) {
                    this.unexpected();
                }
            }
            else if (!this.canHaveLeadingDecorator()) {
                this.raise(this.start, DecoratorsError.UnexpectedLeadingDecorator);
            }
        }
        parseDecorator() {
            const node = this.startNode();
            this.next();
            // Every time a decorator class expression is evaluated, a new empty array is pushed onto the stack
            // So that the decorators of any nested class expressions will be dealt with separately
            this.decoratorStack.push([]);
            const startPos = this.start;
            const startLoc = this.startLoc;
            let expr;
            if (this.match(tt.parenL)) {
                const startPos = this.start;
                const startLoc = this.startLoc;
                this.next(); // eat '('
                expr = this.parseExpression();
                this.expect(tt.parenR);
                if (this.options.preserveParens) {
                    let par = this.startNodeAt(startPos, startLoc);
                    par.expression = expr;
                    expr = this.finishNode(par, 'ParenthesizedExpression');
                }
            }
            else {
                expr = this.parseIdent(false);
                while (this.eat(tt.dot)) {
                    const node = this.startNodeAt(startPos, startLoc);
                    node.object = expr;
                    node.property = this.parseIdent(true);
                    node.computed = false;
                    expr = this.finishNode(node, 'MemberExpression');
                }
            }
            node.expression = this.parseMaybeDecoratorArguments(expr);
            this.decoratorStack.pop();
            return this.finishNode(node, 'Decorator');
        }
        parseMaybeDecoratorArguments(expr) {
            if (this.eat(tt.parenL)) {
                const node = this.startNodeAtNode(expr);
                node.callee = expr;
                node.arguments = this.parseExprList(tt.parenR, false);
                return this.finishNode(node, 'CallExpression');
            }
            return expr;
        }
    };
}
//# sourceMappingURL=decorators.js.map
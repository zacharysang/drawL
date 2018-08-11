//
// a declaration defines global variables
//

function enter(declaration) {
    this.variables[declaration.VAR().getText()] = [];
    let start = declaration.NUMBER()[0];
    let end = declaration.NUMBER()[1];
    if (start < end) {
        for (let i = start; i < end; i++) {
            this.variables[declaration.VAR().getText()].push(i);
        }
    } else {
        for (let i = start; i > end; i--) {
            this.variables[declaration.VAR().getText()].push(i);
        }
    }
};

exports.enter = enter;
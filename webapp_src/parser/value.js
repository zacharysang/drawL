//
// represents a NUMBER or VAR (reference to a global variable)
function getStr(value) {
    return value.VAR() ? this.variables[value.VAR().getText()].shift() : value.NUMBER();
};

exports.getStr = getStr;
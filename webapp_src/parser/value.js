//
// represents a NUMBER or VAR (reference to a global variable)
//

const PLUS = '+';
const MINUS = '-';
const MULT = '*';
const DIV = '/';
const EXP = '^';

function getVal(value) {

    if (value.VAR()) {
        return parseInt(this.streakVars[value.VAR().getText()].shift());
    } else if (value.NUMBER()) {
        return parseInt(value.NUMBER().getText());
    } else if (value.expression()) {
        let expression = value.expression();
        
        let operandA = parseInt(getVal.bind(this)(expression.value()[0]));
        let operandB = parseInt(getVal.bind(this)(expression.value()[1]));
        
        switch (expression.OPERATOR().getText()) {
            case PLUS:
                return operandA + operandB;
            case MINUS:
                return operandA - operandB;
            case MULT:
                return operandA * operandB;
            case DIV:
                return operandA / operandB;
            case EXP:
                return Math.pow(operandA, operandB);
        }
    }
}

exports.getVal = getVal;
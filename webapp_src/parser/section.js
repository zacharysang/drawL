//
// a streak contains one or more sections, which are lines defined by a single expression of angles and magnitudes
//

const VALUE = require('./value');

function enter(section) {
    let vars = getVars(section);
    
    let it = 1;
    
    if (section.NUMBER()) {
        it = section.NUMBER();
    } else if (vars.length > 0) {
        let varLengths = vars.map( (v) => {return this.variables[v].length;} );

        let minVarLength = varLengths.reduce( (acc, val) => {return Math.min(acc, val);});
    
        it = minVarLength;
    }
    
    // loop through all iterations of this section
    for (let i = 0; i < it; i++) {
                    
        // convert the angle given in degrees into radians
        let angleDeg = VALUE.getVal.bind(this)(section.value()[0]);
        let angle = (Math.PI * angleDeg) / 180;
            
        let magnitude = VALUE.getVal.bind(this)(section.value()[1]);
        
        let startX = this.x;
        let startY = this.y;
        
        this.x += Math.cos(angle) * magnitude;
        this.y += Math.sin(angle) * magnitude;
        
        // create a new path from start to curr
        let path = new Path2D();
        path.moveTo(startX, startY);
        path.lineTo(this.x, this.y);
        
        if (this.delay) {
            animate.bind(this)(path);
        } else {
            this.canvas.stroke(path);
        }
        
    }
}

function getVars(section) {
    
    // initialize a stack with the section values
    let valueStack = [].concat(section.value());
    
    let vars = [];
    
    // add the section values
    while (valueStack.length > 0) {
        // pop and process the top of the stack
        let val = valueStack.pop();
        
        if (val.VAR()) {
            // if value is a variable, add it to the vars list
            vars.push(val.VAR().getText());
        } else if (val.expression()) {
            // if value is an expression, then add its values to the stack
            valueStack.push(val.expression().value()[0]);
            valueStack.push(val.expression().value()[1]);
        }
    }
    
    return vars;
}

function animate(path) {
 this.promise = this.promise.then(() => {
   return new Promise(resolve => {
      setTimeout(() => {
        
        // apply the path to the canvas
        this.canvas.stroke(path);
        resolve();
        
      }, this.delay);
   });
 });
}

exports.enter = enter;
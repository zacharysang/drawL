const antlr = require('antlr4/index');

const DrawLLexer = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLLexer.js');
const DrawLParser = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLParser.js');

let DrawLListener = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLListener.js').DrawLListener;

// make a constructor that inherits from the generated listener
function theDrawLListener(canvas) {
    this.canvas = canvas;
    
    // inherit from the generated listener
    DrawLListener.call(this);
    
    return this;
}

// assign inherited behavior
theDrawLListener.prototype = Object.create(DrawLListener.prototype);
theDrawLListener.prototype.constructor = theDrawLListener;

// override the listener functions (there is a listener for each parser rule)

// each streak should handle initializing a new drawing line
theDrawLListener.prototype.enterStreak = function(streak) {
    this.variables = {};
        
    // get the location
    let coords = streak.location().NUMBER();
    this.x = parseInt(coords[0].getText());
    this.y = parseInt(coords[1].getText());
    
    this.canvas.beginPath();
    this.canvas.moveTo(this.x, this.y);
};
theDrawLListener.prototype.exitStreak = function(streak) {
    this.canvas.closePath();    
};

theDrawLListener.prototype.exitTvec = function(tvec) {
    let it = tvec.NUMBER() || 1;
        
    let angle = 0;
    let magnitude = 1;
    
    // loop through all iterations of this tvec
    for (let i = 0; i < it; i++) {
            
        // convert the angle given in degrees into radians
        let angleVal = tvec.value()[0];
        let angleDeg = angleVal.VAR() ? this.variables[angleVal.VAR().getText()].shift() : angleVal.NUMBER();
        angle += (Math.PI * angleDeg) / 180;
            
        let magnitudeVal = tvec.value()[1];
        magnitude = magnitudeVal.VAR() ? this.variables[angleVal.VAR().getText()].shift() : magnitudeVal.NUMBER();
            
        this.x += Math.cos(angle) * magnitude;
        this.y += Math.sin(angle) * magnitude;
        
        this.canvas.lineTo(this.x, this.y);    
        this.canvas.moveTo(this.x, this.y);
            
        this.canvas.stroke();
    }
};

theDrawLListener.prototype.enterStyle = function(style) {
    this.canvas.lineWidth = style.NUMBER() || 1;
    this.canvas.strokeStyle = style.COLOR() || '#000000';
};

theDrawLListener.prototype.enterDeclaration = function(declaration) {
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

exports.theDrawLListener = theDrawLListener;
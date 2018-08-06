const antlr = require('antlr4/index');

const DrawLLexer = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLLexer.js');
const DrawLParser = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLParser.js');

let DrawLListener = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLListener.js').DrawLListener;

// make a constructor that inherits from the generated listener
function theDrawLListener(canvas) {
    
    this.canvas = canvas;
    this.streaks = [];
    
    // inherit from the generated listener
    DrawLListener.call(this);
    
    return this;
}

// assign inherited behavior
theDrawLListener.prototype = Object.create(DrawLListener.prototype);
theDrawLListener.prototype.constructor = theDrawLListener;

// override the listener functions (there is a listener for each parser rule)

// each streak should handle initializing a new drawing line
theDrawLListener.prototype.exitStreak = function (ctx) {
    
    console.log('printing streak info:');
    console.log(ctx.location().getText());    
    
    // get the location
    
    this.canvas.beginPath();
    //this.canvas.moveTo()
};

theDrawLListener.prototype.enterLocation = function(ctx) {
}



exports.theDrawLListener = theDrawLListener
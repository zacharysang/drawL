const antlr = require('antlr4/index');

const DrawLLexer = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLLexer.js');
const DrawLParser = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLParser.js');

let DrawLListener = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLListener.js').DrawLListener;

// make a constructor that inherits from the generated listener
theDrawLListener = function(scratch) {
    
    // feel free to add to theDrawLListener here
    this.scratch = scratch;
    
    // inherit from the generated listener
    DrawLListener.call(this);
    
    return this;
}

// assign inherited behavior
theDrawLListener.prototype = Object.create(DrawLListener.prototype);
theDrawLListener.prototype.constructor = theDrawLListeneer;

// override the listener functions
theDrawLListener.prototype.enterStreak = function (ctx) {
    console.log(JSON.stringify(stx));
};
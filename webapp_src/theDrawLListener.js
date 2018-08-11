const antlr = require('antlr4/index');

const DrawLLexer = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLLexer.js');
const DrawLParser = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLParser.js');

let DrawLListener = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLListener.js').DrawLListener;

// import parser functions
const drawing = require('./parser/drawing');
const streak = require('./parser/streak');
const section = require('./parser/section');
const style = require('./parser/style');
const declaration = require('./parser/declaration');

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

//
// override the listener functions (there is a listener for each parser rule)
//
theDrawLListener.prototype.enterDrawing = drawing.enter;

theDrawLListener.prototype.enterStreak = streak.enter;
theDrawLListener.prototype.exitStreak = streak.exit;

theDrawLListener.prototype.enterSection = section.enter;

theDrawLListener.prototype.enterStyle = style.enter;

theDrawLListener.prototype.enterDeclaration = declaration.enter;

exports.theDrawLListener = theDrawLListener;
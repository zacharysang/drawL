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
        
    // get the location
    let coords = ctx.location().NUMBER();
    let x = parseInt(coords[0].getText());
    let y = parseInt(coords[1].getText());
    
    this.canvas.beginPath();
    this.canvas.moveTo(x,y);
    
    
    let newX = x;
    let newY = y;
    
    // draw based on tvecs
    let tvecs = ctx.tvec();
    for (idx in tvecs) {
        let tvec = tvecs[idx];
        
        let magnitude = tvec.NUMBER()[0];
        let angle = (Math.PI * tvec.NUMBER()[1]) / 180;
        let it = tvec.NUMBER()[2];
        
        for (let i = 0; i < it; i++) {
            
            newX += (Math.cos(angle) * magnitude);
            newY += (Math.sin(angle) * magnitude);
            
            this.canvas.lineTo(newX, newY);    
            this.canvas.moveTo(newX, newY);
            
            this.canvas.lineWidth = 2;
            this.canvas.stroke();
        }
    }
    
    this.canvas.closePath();    
};


theDrawLListener.prototype.enterLocation = function(ctx) {
}



exports.theDrawLListener = theDrawLListener
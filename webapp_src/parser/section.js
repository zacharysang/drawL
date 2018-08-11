//
// a streak contains one or more sections, which are lines defined by a single expression of angles and magnitudes
//

const getStr = require('./value').getStr;

function enter(section) {
    let it = section.NUMBER() || 1;
        
    let angle = 0;
    let magnitude = 1;
    
    // loop through all iterations of this section
    for (let i = 0; i < it; i++) {
            
        // convert the angle given in degrees into radians
        let angleDeg = getStr.bind(this)(section.value()[0]);
        angle += (Math.PI * angleDeg) / 180;
            
        magnitude = getStr.bind(this)(section.value()[1]);
            
        this.x += Math.cos(angle) * magnitude;
        this.y += Math.sin(angle) * magnitude;
        
        this.canvas.lineTo(this.x, this.y)
        this.canvas.moveTo(this.x, this.y);
            
        this.canvas.stroke();
    }
};

exports.enter = enter;
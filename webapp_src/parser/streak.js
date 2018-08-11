//
// represents a line starting at a 
//

function enter(streak) {        
    // get the location
    let coords = streak.location().NUMBER();
    this.x = parseInt(coords[0].getText());
    this.y = parseInt(coords[1].getText());
    
    this.canvas.beginPath();
    this.canvas.moveTo(this.x, this.y);
};

function exit(streak) {
    this.canvas.closePath();    
};

exports.enter = enter;
exports.exit = exit;
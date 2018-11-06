//
// represents a line starting at a 
//

function enter(streak) {
  // make local copy of variables for this streak
  this.streakVars = {};
  for (let v in this.variables) {
    this.streakVars[v] = [...this.variables[v]];
  }
  
  // get the location
  let coords = streak.location().NUMBER();
  this.x = parseInt(coords[0].getText());
  this.y = parseInt(coords[1].getText());
  
  this.canvas.beginPath();
  this.canvas.moveTo(this.x, this.y);
  
  // initialize streak's id and promise
  this.numStreaks++;
  this.animations[this.numStreaks] = {promise: Promise.resolve(), cancel: null};
}

function exit(streak) {
  this.canvas.closePath();  
}

exports.enter = enter;
exports.exit = exit;
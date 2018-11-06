//
// a drawing is a top-level parser rule that contains multiple streaks
//

function enter(drawing) {
  // stores the list values for all declared variables
  this.variables = {};
  
  // initialie counter for streak ids
  this.numStreaks = 0;
}

function exit(drawing) {
  let promises = Object.values(this.animations).map( (animation) => animation.promise);
  Promise.all(promises).then(() => console.log('drawing complete'));
}

exports.enter = enter;
exports.exit = exit;
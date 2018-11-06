//
// a drawing is a top-level parser rule that contains multiple streaks
//

function enter(drawing) {
    // stores the list values for all declared variables
    this.variables = {};
}

function exit(drawing) {
    window.promise.then(() => console.log('drawing complete'));
}

exports.enter = enter;
exports.exit = exit;
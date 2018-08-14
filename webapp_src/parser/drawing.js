//
// a drawing is a top-level parser rule that contains multiple streaks
//

function enter(drawing) {
    // stores the list values for all declared variables
    this.variables = {};
}

exports.enter = enter;
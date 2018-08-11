//
// a drawing is a top-level parser rule that contains multiple streaks
//

function enter(drawing) {
    console.log('entered a drawing')
    this.variables = {};
}

exports.enter = enter;
//
// represents the style to apply to a streak
//

function enter(style) {
    this.canvas.lineWidth = style.NUMBER() || 1;
    this.canvas.strokeStyle = style.COLOR() || '#000000';
};

exports.enter = enter;
//
// represents the style to apply to a streak
//

function enter(style) {
    
    let width = this['canvas']['canvas'].width;
    let height = this['canvas']['canvas'].height;
    
    this.canvas.lineWidth = style.NUMBER() || 1;
    
    if (style.COLOR().length > 1) {
        this['canvas']['canvas'].setAttribute('style', `background-color: ${style.COLOR()[0]}`);
        this.canvas.strokeStyle = style.COLOR()[1] || '#000000';
    } else {
        this.canvas.strokeStyle = style.COLOR() || '#000000';   
    }
};

exports.enter = enter;
//
// represents the style to apply to a streak
//

function enter(style) {
    
    let width = this['canvas']['canvas'].width;
    let height = this['canvas']['canvas'].height;
    
    this.canvas.lineWidth = style.NUMBER() || 1;
    
    // set the colors given in the style value
    if (style.COLOR().length > 1) {
        this['canvas']['canvas'].setAttribute('style', `background-color: ${style.COLOR()[0]}`);
        this.canvas.strokeStyle = style.COLOR()[1] || '#000000';
    } else {
        this['canvas']['canvas'].setAttribute('style', `background-color: ${style.COLOR()}`);
    }
    
    // set the time diff as given in the style
    if (style.TIME()) {
        let timeStr = style.TIME().getText();
        this.delay = parseInt(timeStr.slice(0,timeStr.length - 1));
    }
    
};

exports.enter = enter;
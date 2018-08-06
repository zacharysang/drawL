const antlr = require('antlr4/index');
const DrawLLexer = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLLexer.js');
const DrawLParser = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLParser.js');
const theDrawLListener = require('./theDrawLListener.js').theDrawLListener;

const CANVAS_ID = 'test_canvas';

// get the input
let input = 'streak [1,0]';

// initialize the canvas handles
let canvas = document.getElementById(CANVAS_ID);
let canvasCtx;
if (canvas.getContext) {
    canvasCtx = canvas.getContext('2d');
}

let chars = new antlr.InputStream(input);
let lexer = new DrawLLexer.DrawLLexer(chars);
let tokens = new antlr.CommonTokenStream(lexer);
let parser = new DrawLParser.DrawLParser(tokens);

parser.buildParseTrees = true;

let tree = parser.streak();
let listener = new theDrawLListener(canvasCtx);
antlr.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);


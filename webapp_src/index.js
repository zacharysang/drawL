const antlr = require('antlr4/index');
const DrawLLexer = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLLexer.js');
const DrawLParser = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLParser.js');
const theDrawLListener = require('./theDrawLListener.js').theDrawLListener;

const CANVAS_ID = 'test_canvas';
const INPUT_ID = 'drawL_input';
const COMPILE_ID = 'drawL_compile';
const CLEAR_ID = 'drawL_clear';

// initialize the canvas handles
let canvas = document.getElementById(CANVAS_ID);
let canvasCtx;
if (canvas.getContext) {
    canvasCtx = canvas.getContext('2d');
}

// get the input
let inputEl = document.getElementById(INPUT_ID);

// set the change handler
let compileButton = document.getElementById(COMPILE_ID);
compileButton.onclick = () => {compile(inputEl.value)}

// set the clear button
let clearButton = document.getElementById(CLEAR_ID);
clearButton.onclick = () => {canvasCtx.clearRect(0,0,canvas.width, canvas.height)}



function compile(input) {
    let chars = new antlr.InputStream(input);
    let lexer = new DrawLLexer.DrawLLexer(chars);
    let tokens = new antlr.CommonTokenStream(lexer);
    let parser = new DrawLParser.DrawLParser(tokens);

    parser.buildParseTrees = true;

    let tree = parser.streak();
    let listener = new theDrawLListener(canvasCtx);
    antlr.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
}


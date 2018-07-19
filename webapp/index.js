const antlr = require('antlr4/index');

const DrawLLexer = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLLexer.js');
const DrawLParser = require('../target/generated-sources/antlr4/com/zacharysang/DrawL/DrawLParser.js');

const theDrawLListener = require('./theDrawLListener.js');

let input = 'start [0,0]';

let chars = new antlr.InputStream(input);
let lexer = new DrawLLexer.DrawLLexer(chars);

let tokens = new antlr.CommonTokenStream(lexer);
let parser = new DrawLParser.DrawLParser(tokens);

parser.buildParseTrees = true;
let tree = parser.streak();
let listener = new theDrawLListener();
antlr.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);


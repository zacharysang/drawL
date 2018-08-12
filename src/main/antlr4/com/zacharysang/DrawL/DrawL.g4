grammar DrawL;

/* Overview
A program in this language will consist of one or more streaks
A streak will be defined by a starting point and then a pattern of succession
(eg: move the pointer up by X and then right by Y at speed V and leave a trail with thickenss T and color C)
*/

/* Parser rules */
drawing : (declaration)* (streak DELIM)+;
streak : STREAK_KW location section*;
location : OPEN_PAREN NUMBER COMMA NUMBER CLOSE_PAREN;
section : COLON value UNDERSCORE value (UNDERSCORE NUMBER)? (style)?; // <angle>-<magnitude>(-<iterations>)?
declaration : OPEN_CURL VAR PIPE NUMBER ELLIPSIS NUMBER CLOSE_CURL;
style : OPEN_ANGLE COLOR (COMMA NUMBER)? CLOSE_ANGLE;

value : (VAR|NUMBER|expression);
expression : OPEN_PAREN OPERATOR COMMA value COMMA value CLOSE_PAREN;

/* Lexer rules */
fragment HEX : [a-fA-F0-9];
fragment PLUS : '+';
fragment MINUS : '-';
fragment MULT : '*';
fragment DIV : '/';
fragment EXP : '^';

// keywords
STREAK_KW : '~';

// primitive values
NUMBER : [1-9][0-9]*; // one day we hope to support decimals...(but since the unit is pixels, this should be precise enough for now)
COLOR : '#' HEX HEX HEX HEX HEX HEX;
VAR : [a-zA-Z]+[a-zA-Z0-9]*;

// operators
OPERATOR : (PLUS|MINUS|MULT|DIV|EXP);

// brackets
OPEN_SQUARE : '[';
CLOSE_SQUARE : ']';
OPEN_ANGLE : '<';
CLOSE_ANGLE : '>';
OPEN_PAREN : '(';
CLOSE_PAREN : ')';
OPEN_CURL : '{';
CLOSE_CURL : '}';

// delimiters
DELIM : ';';
COMMA : ',';
DASH : '-';
COLON : ':';
ELLIPSIS : '..';
PIPE : '|';
UNDERSCORE : '_';

WS : [ \n\r] -> skip;

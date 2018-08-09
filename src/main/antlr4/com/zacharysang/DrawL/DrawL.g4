grammar DrawL;

/* Overview
A program in this language will consist of one or more streaks
A streak will be defined by a starting point and then a pattern of succession
(eg: move the pointer up by X and then right by Y at speed V and leave a trail with thickenss T and color C)
*/

/* Parser rules */
drawing : (streak DELIM)+;
streak : STREAK_KW location tvec*;
location : OPEN_BRACKET NUMBER COMMA NUMBER CLOSE_BRACKET;
tvec : COLON NUMBER DASH NUMBER (DASH NUMBER)? (style)?; // <angle>-<magnitude>-<iterations=1>
style : OPEN_ANGLE COLOR (COMMA NUMBER)? CLOSE_ANGLE;

/* Lexer rules */
fragment HEX : '0'..'9' | 'a'..'f' | 'A'..'F';

// primitive values
NUMBER : [1-9][0-9]*; // one day we hope to support decimals...(but since the unit is pixels, this should be precise enough for now)
COLOR : '#' HEX HEX HEX HEX HEX HEX;

STREAK_KW : 'streak';

OPEN_BRACKET : '[';
CLOSE_BRACKET : ']';
OPEN_ANGLE : '<';
CLOSE_ANGLE : '>';

DELIM : ';';
COMMA : ',';
DASH : '-';
COLON : ':';

WS : [ \n\r] -> skip;

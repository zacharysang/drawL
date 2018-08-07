grammar DrawL;

/* Overview
A program in this language will consist of one or more streaks
A streak will be defined by a starting point and then a pattern of succession
(eg: move the pointer up by X and then right by Y at speed V and leave a trail with thickenss T and color C)
*/

/* Parser rules */
streak : STREAK_KW location tvec*;
location : OPEN_BRACKET NUMBER COMMA NUMBER CLOSE_BRACKET;
tvec : DELIM NUMBER DASH NUMBER DASH NUMBER; // <magnitude>-<angle>-<iterations>

/* Lexer rules */
// primitive values
TRUE : 'true';
FALSE : 'false';
NUMBER : [1-9][0-9]*; // one day we hope to support decimals...(but since the unit is pixels, this should be precise enough for now)

STREAK_KW : 'streak';

DELIM : ';';
COMMA : ',';
OPEN_BRACKET : '[';
CLOSE_BRACKET : ']';
DASH : '-';

WS : [ \n\r] -> skip;

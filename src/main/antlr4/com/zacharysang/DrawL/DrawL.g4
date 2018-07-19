grammar DrawL;

/* Overview
A program in this language will consist of one or more streaks
A streak will be defined by a starting point and then a pattern of succession
(eg: move the pointer up by X and then right by Y at speed V and leave a trail with thickenss T and color C)
*/

/* Parser rules */
streak : START_KW location tvec*;
location : '[' NUMBER ',' NUMBER ']';
tvec : ',' NUMBER '-' NUMBER '-' NUMBER; // <magnitude>-<angle>-<iterations>
//style : STYLE_KC (THICKNESS_KW ':' NUMBER|COLOR_KW ':' COLOR|TRAIL_KW ':' (TRUE|FALSE)) STYLE_KC

/* Lexer rules */
fragment WS : [\n\r]+;

// primitive values
TRUE : 'true';
FALSE : 'false';
COLOR : '#[0-9abcdef]{6}';
NUMBER : [0-9]+; // one day we hope to support decimals...(but since the unit is pixels, this should be precise enough for now)

START_KW : 'start';
STYLE_KC : '**';
COLOR_KW : 'color';
THICKNESS_KW : 'thickness';
TRAIL_KW : 'trail';


DELIM : ';';

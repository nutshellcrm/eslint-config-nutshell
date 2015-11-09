'use strict';

module.exports = {
    'rules': {
        // Enforce spaces inside of single line blocks
        'block-spacing'              : [2, 'always'],
        // Enforce one true brace style
        'brace-style'                : [2, '1tbs', {'allowSingleLine': true }],
        // Enforce spacing after comma
        'comma-spacing'              : [2, {'before': false, 'after': true}],
        // Enforce consistent naming when capturing the current execution context
        'consistent-this'            : [2, 'self'],
        // Enforce newline at the end of file, with no multiple empty lines
        'eol-last'                   : [2],
        // Enforce four space indent width for your code
        'indent'                     : [2, 4],
        // Enforce spacing between keys and values in object literal properties
        'key-spacing'                : [2, {'beforeColon': false, 'afterColon': true}],
        // Disallow mixed 'LF' and 'CRLF' as linebreaks
        'linebreak-style'            : [2, 'unix'],
        // Disallow use of the continue statement
        'no-continue'                : [2],
        // Disallow if as the only statement in an else block
        'no-lonely-if'               : [2],
        // disallow multiple empty lines
        'no-multiple-empty-lines'    : [2],
        // Disallow nested ternary expressions
        'no-nested-ternary'          : [2],
        // Disallow space between function identifier and application
        'no-spaced-func'             : [2],
        // Disallow the use of Boolean literals in conditional expressions
        'no-unneeded-ternary'        : [2],
        // Enforce padding within blocks
        'padded-blocks'              : [2, 'never'],
        // Require quotes around object literal property names
        'quote-props'                : [2, 'as-needed', {'keywords': true}],
        // Specify use of single quotes
        'quotes'                     : [2, 'single'],
        // Enforce spacing after semicolons
        'semi-spacing'               : [2, {'before': false, 'after': true}],
        // Require use of semicolons instead of ASI
        'semi'                       : [2, 'always'],
        // Require a space after certain keywords
        'space-after-keywords'       : [2],
        // Require space before blocks
        'space-before-blocks'        : [2],
        // Disallow space before function opening parenthesis
        'space-before-function-paren': [2, 'never'],
        // Require spaces around infix operators
        'space-infix-ops'            : [2],
        // Require a space after return, throw, and case
        'space-return-throw-case'    : [2],
        // Disallow spaces before/after unary operators
        'space-unary-ops'            : [2],
    },
};

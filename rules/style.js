'use strict';

module.exports = {
    'rules': {
        // Enforce consistent spacing inside array brackets
        'array-bracket-spacing'        : [2, 'never'],
        // Enforce spaces inside of single line blocks
        'block-spacing'                : [2, 'always'],
        // Enforce one true brace style
        'brace-style'                  : [2, '1tbs', {'allowSingleLine': true}],
        // Enforce trailing commas in multiline object literals
        'comma-dangle'                 : [2, 'always-multiline'],
        // Enforce spacing after comma
        'comma-spacing'                : [2, {'before': false, 'after': true}],
        // Disallow spaces inside of computed properties
        'computed-property-spacing'    : [2, 'never'],
        // Enforce consistent naming when capturing the current execution context
        'consistent-this'              : [2, 'self'],
        // Enforce newline at the end of file, with no multiple empty lines
        'eol-last'                     : [2],
        // Disallow spacing between function identifiers and their invocations
        'func-call-spacing'            : [2],
        // Enforce four space indent width for your code
        'indent'                       : [2, 4, {'SwitchCase': 1}],
        // Enforce spacing between keys and values in object literal properties
        'key-spacing'                  : [2, {'beforeColon': false, 'afterColon': true}],
        // Enforce spacing around keywords
        'keyword-spacing'              : [2],
        // Disallow mixed 'LF' and 'CRLF' as linebreaks
        'linebreak-style'              : [2, 'unix'],
        // Enforce a line between class memebers
        'lines-between-class-members'  : [2, 'always', {'exceptAfterSingleLine': true}],
        // Enforce a maximum number of statements allowed per line
        'max-statements-per-line'      : [2, {'max': 1}],
        // Require an empty line before return statements
        'newline-before-return'        : [2],
        // Require a newline after each call in a method chain
        'newline-per-chained-call'     : [2, {'ignoreChainWithDepth': 3}],
        // Disallow Array constructors
        'no-array-constructor'         : [2],
        // Disallow use of the continue statement
        'no-continue'                  : [2],
        // Disallow if as the only statement in an else block
        'no-lonely-if'                 : [2],
        // Disallow multiple empty lines
        'no-multiple-empty-lines'      : [2],
        // Disallow nested ternary expressions
        'no-nested-ternary'            : [2],
        // Disallow Object constructors
        'no-new-object'                : [2],
        // Disallow space between function identifier and application
        'no-spaced-func'               : [2],
        // Disallow spaces at the ends of lines
        'no-trailing-spaces'           : [2],
        // Disallow the use of Boolean literals in conditional expressions
        'no-unneeded-ternary'          : [2],
        // Disallow whitespace before properties
        'no-whitespace-before-property': [2],
        // Enforce consistent spacing inside braces
        'object-curly-spacing'         : [2],
        // Require newlines around variable declarations
        'one-var-declaration-per-line' : [2],
        // Enforce consistent linebreak style for operators
        'operator-linebreak'           : [2, 'before'],
        // Enforce padding within blocks
        'padded-blocks'                : [2, 'never'],
        // Require quotes around object literal property names
        'quote-props'                  : [2, 'as-needed', {'keywords': true}],
        // Specify use of single quotes
        'quotes'                       : [2, 'single'],
        // Enforce spacing after semicolons
        'semi-spacing'                 : [2, {'before': false, 'after': true}],
        // Require use of semicolons instead of ASI
        'semi'                         : [2, 'always'],
        // Require space before blocks
        'space-before-blocks'          : [2],
        // Disallow space before function opening parenthesis
        'space-before-function-paren'  : [2, 'never'],
        // Require spaces around infix operators
        'space-infix-ops'              : [2],
        // Disallow spaces before/after unary operators
        'space-unary-ops'              : [2],
        // Enforce consistent spacing after the // or /* in a comment
        'spaced-comment'               : [2, 'always', {'block': {'exceptions': ['-'], 'balanced': true}}],
        // --- Disabled Rules ---
        'capitalized-comments'         : [0],
    },
};

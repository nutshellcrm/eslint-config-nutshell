'use strict';

module.exports = {
    'rules': {
        // Enforce return statements in callbacks of array methods
        'array-callback-return'       : [2],
        // Specify curly brace conventions for all control statements
        'curly'                       : [2, 'multi-line'],
        // Require dot Nntation
        'dot-notation'                : [2],
        // Require === and !==, with some exceptions
        'eqeqeq'                      : [2, 'smart'],
        // Require Guarding for-in
        'guard-for-in'                : [2],
        // Disallow the use of `alert`, `confirm`, and `prompt`
        'no-alert'                    : [2],
        // Disallow Use of caller/callee
        'no-caller'                   : [2],
        // Disallow null comparisons
        'no-eq-null'                  : [2],
        // Disallow eval()
        'no-eval'                     : [2],
        // Disallow unnecessary function binding
        'no-extra-bind'               : [2],
        // Disallow Floating Decimals
        'no-floating-decimal'         : [2],
        // Disallow the type conversions with shorter notations
        'no-implicit-coercion'        : [2],
        // Disallow Implied eval()
        'no-implied-eval'             : [2],
        // Disallow Functions in Loops
        'no-loop-func'                : [2],
        // Disallow use of multiple spaces
        'no-multi-spaces'             : [2, {'ignoreEOLComments': true}],
        // Disallow new operators with the Function object
        'no-new-func'                 : [2],
        // Disallow new operators with the String, Number, and Boolean objects
        'no-new-wrappers'             : [2],
        // Disallow reassignment of function parameters
        'no-param-reassign'           : [2],
        // Disallow assignment operators in return statements
        'no-return-assign'            : [2],
        // Disallow comparisons where both sides are exactly the same
        'no-self-compare'             : [2],
        // Disallow Use of the Comma Operator
        'no-sequences'                : [2],
        // Disallow usage of expressions in statement position
        'no-throw-literal'            : [2],
        // Disallow unmodified conditions of loops
        'no-unmodified-loop-condition': [2],
        // Disallow unnecessary concatenation of strings
        'no-useless-concat'           : [2],
        // Disallow unnecessary escape characters
        'no-useless-escape'           : [2],
        // Disallow redundant return statements
        'no-useless-return'           : [2],
        // --- Disabled Rules ---
        'class-methods-use-this'      : [0],
    },
};

'use strict';

module.exports = {
    'rules': {
        // Specify curly brace conventions for all control statements
        'curly'            : [2, 'multi-line'],
        // Disallow use of multiple spaces
        'no-multi-spaces'  : [2],
        // Disallow reassignment of function parameters
        'no-param-reassign': [2],
        // Disallow comparisons where both sides are exactly the same
        'no-self-compare'  : [2],
        // Disallow usage of expressions in statement position
        'no-throw-literal' : [2],
    },
};
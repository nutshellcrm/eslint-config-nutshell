'use strict';

module.exports = {
    'rules': {
        // Enforce trailing commas in multiline object literals
        'comma-dangle'               : [2, 'always-multiline'],
        // Disallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string': [2],
        // Disallow negating the left operand of relational operators
        'no-unsafe-negation'         : [2],
        // Enforce valid JSDoc comments
        'valid-jsdoc'                : [2],
    },
};

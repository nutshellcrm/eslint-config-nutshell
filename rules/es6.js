'use strict';

module.exports = {
    'rules': {
        // Require space before/after arrow function’s arrow
        'arrow-spacing'          : [2],
        // Disallow use of this/super before calling super() in constructors
        'no-this-before-super'   : [2],
        // Disallow unnecessary computed property keys on objects
        'no-useless-computed-key': [2],
        // Disallow unnecessary constructors
        'no-useless-constructor' : [2],
        // Require let or const instead of var
        'no-var'                 : [2],
        // Require const declarations for variables that are never reassigned after declared
        'prefer-const'           : [2],
        // Require spread operators instead of .apply()
        'prefer-spread'          : [2],
        // Require template literals instead of string concatenation
        'prefer-template'        : [2],
        // Require rest parameters instead of arguments
        'prefer-rest-params'     : [2],
        // Disallow spacing between rest and spread operators and their expressions
        'rest-spread-spacing'    : [2, 'never'],
        // Disallow spacing around embedded expressions of template strings
        'template-curly-spacing' : [2, 'never'],
        // --- Disabled Rules ---
        'arrow-parens'           : [0],
        'prefer-arrow-callback'  : [0],
    },
};

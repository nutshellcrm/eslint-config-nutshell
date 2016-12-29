'use strict';

module.exports = {
    'rules': {
        // Disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names': [2],
        // Disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow'                 : [2],
        // Disallow initializing variables to undefined
        'no-undef-init'             : [2],
    },
};

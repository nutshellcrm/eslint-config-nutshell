'use strict';

module.exports = {
    'ecmaFeatures': {
        'jsx': true,
    },
    'plugins': [
        'react',
    ],
    'rules': {
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': [2],
    },
};

'use strict';

module.exports = {
    'ecmaFeatures': {
        'jsx': true,
    },
    'plugins': [
        'react',
    ],
    'settings': {
        'react': {
            'version': '0.14',
        },
    },
    'rules': {
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars'               : [2],
        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value'           : [2, 'always'],
        // Enforce the closing bracket location for JSX multiline elements
        'react/jsx-closing-bracket-location': [2, {'selfClosing': 'after-props', 'nonEmpty': false}],
        // Disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing'           : [2, 'never'],
        // Validate props indentation in JSX
        'react/jsx-indent-props'            : [2, 4],
        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line'      : [2, {'maximum': 3}],
        // Prevent duplicate props in JSX
        'react/jsx-no-duplicate-props'      : [2],
        // Disallow undeclared variables in JSX
        'react/jsx-no-undef'                : [2],
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react'              : [2],
        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state'      : [2],
        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state'     : [2],
        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state'    : [2],
        // Prevent usage of unknown DOM property
        'react/no-unknown-property'         : [2],
        // Prefer es6 class instead of createClass for React Components
        'react/prefer-es6-class'            : [2],
        // Prevent missing props validation in a React component definition
        'react/prop-types'                  : [2],
        // Prevent extra closing tags for components without children
        'react/self-closing-comp'           : [2, {html: false}],
        // Prevent missing parentheses around multilines JSX
        'react/jsx-wrap-multilines'         : [2],
        // Enforce handler naming convention
        'react/jsx-handler-names'           : [2],
        // Prevent use of deprecated methods
        'react/no-deprecated'               : [2],
    },
};

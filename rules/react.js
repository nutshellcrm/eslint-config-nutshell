'use strict';

module.exports = {
    'plugins': [
        'react',
    ],
    'settings': {
        'react': {
            'version': '15.0',
        },
    },
    'rules': {
        // Forbid vague propTypes
        // 'react/forbid-prop-types'           : [2, {'forbid': ['any']}],
        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value'           : [2, 'always'],
        // Enforce the closing bracket location for JSX multiline elements
        'react/jsx-closing-bracket-location': [2, {'selfClosing': 'after-props', 'nonEmpty': false}],
        // Disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing'           : [2, 'never'],
        // Disallow spaces around equal signs in JSX attributes
        'react/jsx-equals-spacing'          : [2],
        // Ensure correct position of the first property
        'react/jsx-first-prop-new-line'     : [2, 'multiline'],
        // Validate props indentation in JSX
        'react/jsx-indent-props'            : [2, 4],
        // Detect missing key prop
        'react/jsx-key'                     : [2],
        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line'      : [2, {'maximum': 3}],
        // Prevent comments from being inserted as text nodes
        'react/jsx-no-comment-textnodes'    : [2],
        // Prevent duplicate props in JSX
        'react/jsx-no-duplicate-props'      : [2],
        // Prevent usage of unsafe target='_blank'
        'react/jsx-no-target-blank'         : [2],
        // Disallow undeclared variables in JSX
        'react/jsx-no-undef'                : [2],
        // Enforce PascalCase for user-defined JSX components
        'react/jsx-pascal-case'             : [2],
        // Validate whitespace in and around the JSX opening and closing brackets
        'react/jsx-tag-spacing'             : [2],
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react'              : [2],
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars'               : [2],
        // Prevent missing parentheses around multilines JSX
        'react/jsx-wrap-multilines'         : [2],
        // Avoid possible state update batching problems
        'react/no-access-state-in-setstate' : [2],
        // Prevent usage of Array index in keys
        'react/no-array-index-key'          : [2],
        // Prevent passing of children as props
        'react/no-children-prop'            : [2],
        // Prevent problem with children and props.dangerouslySetInnerHTML
        'react/no-danger-with-children'     : [2],
        // Prevent usage of dangerous JSX properties
        'react/no-danger'                   : [2],
        // Prevent use of deprecated methods
        'react/no-deprecated'               : [2],
        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state'      : [2],
        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state'     : [2],
        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state'    : [2],
        // Prevent usage of findDOMNode
        'react/no-find-dom-node'            : [2],
        // Prevent usage of isMounted
        'react/no-is-mounted'               : [2],
        // Prevent usage of the return value of React.render
        'react/no-render-return-value'      : [2],
        // Prevent using string references
        'react/no-string-refs'              : [2],
        // Prevent casing typos in react class and lifecycle methods
        'react/no-typos'                    : [2],
        // Prevent invalid characters from appearing in markup
        'react/no-unescaped-entities'       : [2],
        // Prevent usage of unknown DOM property
        'react/no-unknown-property'         : [2],
        // Prevent unused props
        'react/no-unused-prop-types'        : [2],
        // Prevent unused state
        'react/no-unused-state'             : [2],
        // Prefer es6 class instead of createClass for React Components
        'react/prefer-es6-class'            : [2],
        // Prevent missing props validation in a React component definition
        'react/prop-types'                  : [2],
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope'          : [2],
        // Enforce ES5 or ES6 class for returning value in render function
        'react/require-render-return'       : [2],
        // Prevent extra closing tags for components without children
        'react/self-closing-comp'           : [2, {'html': false}],
        // Enforce style prop value being an object
        'react/style-prop-object'           : [2],
        // --- Disabled Rules ---
        'react/display-name'                : [0],
        'react/forbid-component-props'      : [0],
        'react/jsx-filename-extension'      : [0],
        'react/jsx-handler-names'           : [0],
        'react/jsx-indent'                  : [0], // ESLint itself does a good job now
        'react/jsx-no-bind'                 : [0],
        'react/jsx-no-literals'             : [0],
        'react/jsx-no-multi-comp'           : [0],
        'react/jsx-no-set-state'            : [0],
        'react/jsx-sort-props'              : [0],
        'react/prefer-stateless-function'   : [0],
        'react/require-default-props'       : [0],
        'react/require-optimization'        : [0],
        'react/sort-comp'                   : [0], // Would like to enable, but is a big job
        'react/sort-prop-types'             : [0],
    },
};

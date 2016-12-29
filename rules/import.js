'use strict';

module.exports = {
    'plugins': [
        'import',
    ],
    'rules': {
        // Ensure a default export is present, given a default import
        'import/default'                   : [2],
        // Report funny business with exports, like repeated exports of names or defaults
        'import/export'                    : [2],
        // Ensure consistent use of file extension within the import path
        'import/extensions'                : [2, 'never'],
        // Report any imports that come after non-import statements
        'import/imports-first'             : [2],
        // Ensure named imports correspond to a named export in the remote file
        'import/named'                     : [2],
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced
        'import/namespace'                 : [2],
        // Enforce having an empty line after the last top-level import statement or require call
        'import/newline-after-import'      : [2],
        // Forbid import of modules using absolute paths
        'import/no-absolute-path'          : [2],
        // Report if a resolved path is imported more than once
        'import/no-duplicates'             : [2],
        // Forbid require() calls with expressions
        'import/no-dynamic-require'        : [2],
        // Forbid the import of external modules that are not declared in the package.json
        'import/no-extraneous-dependencies': [2],
        // Forbid the use of mutable exports with var or let.
        'import/no-mutable-exports'        : [2],
        // Report use of an exported name as a property on the default export
        'import/no-named-as-default-member': [2],
        // Report use of exported name as identifier of default export
        'import/no-named-as-default'       : [2],
        // Report use of a default export as a locally named import
        'import/no-named-default'          : [2],
        // Forbid the use of Node.js builtin modules
        'import/no-nodejs-modules'         : [2],
        // Ensure imports point to a file/module that can be resolved
        'import/no-unresolved'             : [2],
        // Forbid Webpack loader syntax in imports
        'import/no-webpack-loader-syntax'  : [2],
        // Enforce a convention in the order of require() / import statements
        'import/order'                     : [2, {'groups': ['builtin', ['external', 'internal'], 'parent', 'sibling', 'index']}],
        // Warn if a module could be mistakenly parsed as a script
        'import/unambiguous'               : [2],
        // --- Disabled Rules ---
        'import/max-dependencies'          : [0],
        'import/no-amd'                    : [0],
        'import/no-commonjs'               : [0],
        'import/no-deprecated'             : [0],
        'import/no-internal-modules'       : [0],
        'import/no-namespace'              : [0],
        'import/no-restricted-paths'       : [0],
        'import/no-unassigned-import'      : [0],
        'import/prefer-default-export'     : [0],
    },
    'settings': {
        'import/resolve': {
            'extensions': ['.js', '.jsx'],
        },
    },
};

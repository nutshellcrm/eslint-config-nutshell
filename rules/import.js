'use strict';

module.exports = {
    'plugins': [
        'import',
    ],
    'rules': {
        // Ensure imports point to a file/module that can be resolved
        'import/no-unresolved'             : [2],
        // Ensure named imports correspond to a named export in the remote file
        'import/named'                     : [2],
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced
        'import/namespace'                 : [2],
        // Ensure a default export is present, given a default import
        'import/default'                   : [2],
        // Report use of exported name as identifier of default export
        'import/no-named-as-default'       : [2],
        // Report funny business with exports, like repeated exports of names or defaults
        'import/export'                    : [2],
        // Report use of an exported name as a property on the default export
        'import/no-named-as-default-member': [2],
        // Forbid the import of external modules that are not declared in the package.json
        'import/no-extraneous-dependencies': [2],
        // Forbid the use of Node.js builtin modules
        'import/no-nodejs-modules'         : [2],
        // Report if a resolved path is imported more than once
        'import/no-duplicates'             : [2],
        // Report any imports that come after non-import statements
        'import/imports-first'             : [2],
        // Enforce a convention in the order of require() / import statements
        'import/order'                     : [2, {'groups': ['builtin', ['external', 'internal'], 'parent', 'sibling', 'index']}],
        // Ensure consistent use of file extension within the import path
        'import/extensions'                : [2, 'never'],
    },
    'settings': {
        'import/resolve': {
            'extensions': ['.js', '.jsx'],
        },
    },
};

'use strict';

module.exports = {
    'plugins': [
        'import',
    ],
    'rules': {
        // Ensure imports point to a file/module that can be resolved
        'import/no-unresolved'      : [2],
        // Ensure named imports correspond to a named export in the remote file
        'import/named'              : [2],
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced
        'import/namespace'          : [2],
        // Ensure a default export is present, given a default import
        'import/default'            : [2],
        // Report use of exported name as identifier of default export
        'import/no-named-as-default': [2],
    },
    'settings': {
        'import/resolve': {
            'extensions': ['.js', '.jsx'],
        },
    },
};

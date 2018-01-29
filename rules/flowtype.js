'use strict';

module.exports = {
    'plugins': [
        'flowtype',
    ],
    'extends': [
        'plugin:flowtype/recommended',
    ],
    'settings': {
        'flowtype': {
            'onlyFilesWithFlowAnnotation': true,
        },
    },
    'rules': {
        // Force comma dangle for multiline types
        'flowtype/delimiter-dangle'              : [2, 'always-multiline'],
        // Force comma delimeters in objects, not semicolons
        'flowtype/object-type-delimiter'         : [2, 'comma'],
        // Require all files to have a block-style flow annotation
        'flowtype/require-valid-file-annotation' : [2, 'always', {'annotationStyle': 'block'}],
        // Enforce semicolons after type definitions
        'flowtype/semi'                          : [2, 'always'],
        // Prevent duplicate keys in type aliases (mirrors ESLint `no-dupe-keys`)
        'flowtype/no-dupe-keys'                  : [2],
        // Prevent accidental use of primitive types like "Boolean"
        'flowtype/no-primitive-constructor-types': [2],
    },
};

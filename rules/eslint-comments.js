'use strict';

module.exports = {
    'plugins': [
        'eslint-comments',
    ],
    'rules': {
        // Disallow eslint-disable comments without rule names
        'eslint-comments/no-unlimited-disable': [2],
        // Disallow unused eslint-disable comments
        'eslint-comments/no-unused-disable'   : [2],
    },
};

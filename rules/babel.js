'use strict';

module.exports = {
    'parser' : 'babel-eslint',
    'plugins': ['babel'],
    'rules'  : {
        // Use babel/new-cap instead of new-cap for decorator support
        'babel/new-cap': [2],
    },
};

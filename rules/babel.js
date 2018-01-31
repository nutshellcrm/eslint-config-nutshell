'use strict';

module.exports = {
    'plugins': ['babel'],
    'rules'  : {
        // Use babel/new-cap instead of new-cap for decorator support
        'babel/new-cap': [2],
        // Enforce semicolons at the end of class properties
        'babel/semi'   : [2],
    },
};

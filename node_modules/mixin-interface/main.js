//==============================================================
// main.js
// Purpose: Purposefully empty script for 'main' entry in package.json entry
//          This is a Bug Fix: when 'main' was set to 'test.js' there
//          was an unwanted side-effect with a client code like this: 
//            const mixin_interface = require('mixin-interface');
//          would have the unwanted side effect of importing and running 'test.js'
// Project: 'mixin-interface' npm package
//          https://www.npmjs.com/package/mixin-interface
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
exports.on_purpose_useless_main = function{};
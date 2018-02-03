//==============================================================
// count_prefix_logger.js
// Purpose: 'CountPrefixLogger' implementation class
//          implements 'MxI.$ILogger' interface
// Note:    This is part of a sample to illustrate the 'Abstract Factory' Design Pattern
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface-api/src/mixin_interface_api.js').MxI;

//============ 'CountPrefixLogger' implementation class ============
class CountPrefixLogger extends MxI.$Implementation(MxI.$ConsoleLogSink).$with(MxI.$ILogSink) {
  constructor(...args) {
	  super();
	  if (CountPrefixLogger._$count === undefined) {
		  CountPrefixLogger._$count = 0;
	  }
      this._$prefix = "[" + CountPrefixLogger._$count++ + "] ";
  } // 'CountPrefixLogger' constructor
} // 'CountPrefixLogger' class
MxI.$setClass(CountPrefixLogger).$asImplementationOf(MxI.$ILogSink);
exports.CountPrefixLogger = CountPrefixLogger;
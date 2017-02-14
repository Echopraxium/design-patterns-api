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
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//============ 'CountPrefixLogger' implementation class ============
class CountPrefixLogger extends MxI.$Implementation(MxI.$Object).$with(MxI.$ILogger) {
  static getSingleton() {
	  if (CountPrefixLogger._$singleton === undefined) {
		  //console.log(" >>> First time (and Only normally) in getSingleton");
		  CountPrefixLogger._$singleton = new CountPrefixLogger();
	  }
	  return CountPrefixLogger._$singleton;
  } // CountPrefixLogger.getSingleton
  
  log(arg_msg) {
	  var msg = arg_msg;
	  if (msg === undefined || msg === null)
		msg = "";
	  var prefix = "[" + CountPrefixLogger._$count++ + "] ";
	  console.log(prefix + msg);
  } // CountPrefixLogger.log
} // 'CountPrefixLogger' class
CountPrefixLogger._$singleton;
CountPrefixLogger._$count = 0;
MxI.$setClass(CountPrefixLogger).$asImplementationOf(MxI.$ILogger);
exports.CountPrefixLogger = CountPrefixLogger;
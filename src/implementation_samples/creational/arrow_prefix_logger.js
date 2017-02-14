//==============================================================
// arrow_prefix_logger.js
// Purpose: 'ArrowPrefixLogger' implementation class
//          implements 'MxI.$ILogger' interface
// Note:    This is part of a sample to illustrate the 'Abstract Factory' Design Pattern
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//============ 'ArrowPrefixLogger' implementation class ============
class ArrowPrefixLogger extends MxI.$Implementation(MxI.$Object).$with(MxI.$ILogger) {
  static getSingleton() {
	  if (ArrowPrefixLogger._$singleton === undefined) {
		  //console.log(" >>> First time (and Only normally) in getSingleton");
		  ArrowPrefixLogger._$singleton = new ArrowPrefixLogger();
	  }
	  return ArrowPrefixLogger._$singleton;
  } // ArrowPrefixLogger.getSingleton
  
  log(arg_msg) {
	  var msg = arg_msg;
	  if (msg === undefined || msg === null)
		msg = "";
	  var prefix = "==> ";
	  console.log(prefix + msg);
  } // ArrowPrefixLogger.log
} // 'ArrowPrefixLogger' class
ArrowPrefixLogger._$singleton;
MxI.$setClass(ArrowPrefixLogger).$asImplementationOf(MxI.$ILogger);
exports.ArrowPrefixLogger = ArrowPrefixLogger;
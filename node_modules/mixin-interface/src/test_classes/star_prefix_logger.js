//==============================================================
// star_prefix_logger.js
// Purpose: '$StarPrefixLogger' implementation class
//          implements 'MxI.$ILogger' interface
// Project: 'mixin-interface' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('../mixin_interface.js').MxI;

//============ '$StarPrefixLogger' implementation class ============
class $StarPrefixLogger extends MxI.$Implementation(MxI.$Object).$with(MxI.$ILogger) {
  static getSingleton() {
	  if ($StarPrefixLogger._$singleton === undefined) {
		  //console.log(" >>> First time (and Only normally) in getSingleton");
		  $StarPrefixLogger._$singleton = new $StarPrefixLogger();
	  }
	  return $StarPrefixLogger._$singleton;
  } // $StarPrefixLogger.getSingleton
  
  log(arg_msg) {
	  var msg = arg_msg;
	  if (msg === undefined || msg === null)
		msg = "";
	  var prefix = "* ";
	  console.log(prefix + msg);
  } // $StarPrefixLogger.log
} // '$StarPrefixLogger' class
$StarPrefixLogger._$singleton;
MxI.$setClass($StarPrefixLogger).$asImplementationOf(MxI.$ILogger);
exports.$StarPrefixLogger = $StarPrefixLogger;
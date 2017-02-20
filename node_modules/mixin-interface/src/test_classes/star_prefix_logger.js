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
class $StarPrefixLogger extends MxI.$Implementation(MxI.$DefaultLogger).$with(MxI.$ILogger) {
  // Better code reuse 4.4.7 (add new code)
  /* { */
  constructor(...args) {
	  super();
      this._$prefix = "* ";
  } // ' $StarPrefixLogger' constructor
  /* } */
  // Better code reuse 4.4.7 (add new code)
  
  // Better code reuse 4.4.7 (comment useless code)
  /*
  static getSingleton() {
	    console.log("$StarPrefixLogger.getSingleton " + $StarPrefixLogger._$singleton);
		var Klass = this;
		console.log("Class: " + this.name);
	    if (Klass._$singleton === undefined) {
		    console.log(" >>> First time (and Only normally) in getSingleton");
		    Klass._$singleton = new Klass();
	    }
	    return $StarPrefixLogger._$singleton;
  } // $StarPrefixLogger.getSingleton
  
  log(arg_msg, ...arg_values) {
	    var   msg    = "";
		const prefix = "* ";
	    if (arg_msg === undefined || arg_msg === null) 
		  msg = "";		  
	    else
		  msg = arg_msg;
	
	    if (arg_values !== undefined && arg_values !== null) {
	      if (arg_values.length > 0) {
			console.log(prefix + msg, ...arg_values);
		    return;
	      }
        }
	    console.log(prefix + msg);
  } // $StarPrefixLogger.log
  */
  // Better code reuse 4.4.7 (comment useless code)
} // '$StarPrefixLogger' class
$StarPrefixLogger._$singleton = undefined; // BugFix 4.4.7
MxI.$setClass($StarPrefixLogger).$asImplementationOf(MxI.$ILogger);
exports.$StarPrefixLogger = $StarPrefixLogger;
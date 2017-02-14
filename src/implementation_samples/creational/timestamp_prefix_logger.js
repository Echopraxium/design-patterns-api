//==============================================================
// timestamp_prefix_logger.js
// Purpose: 'TimestampPrefixLogger' implementation class
//          implements 'MxI.$ILogger' interface
// Note:    This is part of a sample to illustrate the 'Abstract Factory' Design Pattern
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//============ 'TimestampPrefixLogger' implementation class ============
class TimestampPrefixLogger extends MxI.$Implementation(MxI.$Object).$with(MxI.$ILogger) {
  static getSingleton() {
	  if (TimestampPrefixLogger._$singleton === undefined) {
		  //console.log(" >>> First time (and Only normally) in getSingleton");
		  TimestampPrefixLogger._$singleton = new TimestampPrefixLogger();
	  }
	  return TimestampPrefixLogger._$singleton;
  } // TimestampPrefixLogger.getSingleton
  
  static getTimeStamp() {
    var timestamp_str = "";
    var time_now      = new Date();
	var hours         = time_now.getHours();
	var minutes       = time_now.getMinutes();
	var seconds       = time_now.getSeconds();
	
	if (hours < 10)   hours   = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    timestamp_str += hours + ":" + minutes + ":" + seconds + " ";
    if (hours > 11) timestamp_str += "PM";
    else            timestamp_str += "AM";
    
    return timestamp_str;
  } // getTimeStamp
  
  log(arg_msg) {
	  var msg = arg_msg;
	  if (msg === undefined || msg === null)
		msg = "";
	  var prefix = "[" + TimestampPrefixLogger.getTimeStamp() + "] ";
	  console.log(prefix + msg);
  } // TimestampPrefixLogger.log
} // 'TimestampPrefixLogger' class
TimestampPrefixLogger._$singleton;
MxI.$setClass(TimestampPrefixLogger).$asImplementationOf(MxI.$ILogger);
exports.TimestampPrefixLogger = TimestampPrefixLogger;
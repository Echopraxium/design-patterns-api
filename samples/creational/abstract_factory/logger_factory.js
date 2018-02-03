//==============================================================
// logger_factory.js
// Purpose: 'LoggerFactory' implementation class
//          implements 'IAbstractFactory' interface
// Note:    This is part of a sample to illustrate the 'Abstract Factory' Design Pattern
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI                   = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const IAbstractFactory      = require('design-patterns-core-api/src/creational/i_abstract_factory.js').IAbstractFactory;
const ArrowPrefixLogger     = require('./arrow_prefix_logger.js').ArrowPrefixLogger;
const TimestampPrefixLogger = require('./timestamp_prefix_logger.js').TimestampPrefixLogger;
const CountPrefixLogger     = require('./count_prefix_logger.js').CountPrefixLogger;

const LgF = {
  "arrow_prefix_logger":     0,
  "timestamp_prefix_logger": 1,
  "count_prefix_logger":     2
};
exports.LgF = LgF;

//==================== 'LoggerFactory' implementation class ====================
class LoggerFactory extends MxI.$Implementation(MxI.$Singleton).$with(IAbstractFactory, MxI.$ISingleton) {
  constructor() {
    super();
  } // 'LoggerFactory' constructor

  createElement(...args) {
    //console.log("--> LoggerFactory.createElement " + element_id
	var arg_list  = Array.from(args);
	var logger_id;
	if (arg_list.length > 0)
		logger_id = arg_list[0];
	else
		return undefined;
	
	var logger = null; 
    if      (logger_id === LgF.arrow_prefix_logger)
		logger = new ArrowPrefixLogger();
	else if (logger_id === LgF.timestamp_prefix_logger)
		logger = new TimestampPrefixLogger();
	else if (logger_id === LgF.count_prefix_logger)
		logger = new CountPrefixLogger();
	else
	    logger = new MxI.$ConsoleLogSink();
	return logger;	
  } // LoggerFactory.createElement()
} // 'LoggerFactory' class
MxI.$setClass(LoggerFactory).$asImplementationOf(IAbstractFactory, MxI.$ISingleton);
MxI.$setAsSingleton(LoggerFactory);
exports.LoggerFactory = LoggerFactory;
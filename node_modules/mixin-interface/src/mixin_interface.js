//==============================================================
// mixin_interface.js
// Purpose:  implementation of interface classes in es6
//           https://www.npmjs.com/package/mixin-interface
// Project: 'mixin-interface' npm package
//==============================================================
//'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const MXI_NULL = "MxI.$Null";


//========================================================================
//==================== '$INullObject' interface class ====================
//========================================================================
class $INullObject extends MxI.$Interface(MxI.$Object, MxI.$IBaseInterface) {  
} // '$INullObject' interface class
MxI.$setAsInterface($INullObject).$asChildOf(MxI.$IBaseInterface);


//========================================================================
//============================ '$NullObject' =============================
//========================================================================
class $NullObject extends MxI.$Implementation(MxI.$Object).$with($INullObject) {
  constructor(...args) {
	  super();
      this._$name = MXI_NULL;
  } // '$NullObject' constructor
  
  toString(){
    return this._$name;
  } // toString() override
  
  static getSingleton() {
	  if ($NullObject._$singleton === undefined) {
		  //console.log(" >>> First time (and Only normally) in $DefaultLogger.getSingleton");
		  $NullObject._$singleton = new $NullObject();
	  }
	  return $NullObject._$singleton;
  } // $NullObject.getSingleton()
} // '$NullObject' class
$NullObject._$singleton;
MxI.$setClass($NullObject).$asImplementationOf($INullObject);


const $Null = $NullObject.getSingleton();


//------------------- $isNull -------------------
const $isNull = function(instance) {
		if (instance === $Null)
			return true;
		else
			return false;
}; // $isNull()
	

//============================================================================
//======================== '$ILogger' interface class ========================
//============================================================================
class $ILogger extends MxI.$Interface(MxI.$IBaseInterface) {  
  // Fallback implementation of 'log' service
  log(arg_msg, ...arg_values) {
	MxI.$raiseNotImplementedError($ILogger, this);
  } // $ILogger.log()
  
  // Fallback implementation of 'enable' service
  enable() {
	MxI.$raiseNotImplementedError($ILogger, this);
  } // $ILogger.enable(-)
  
  // Fallback implementation of 'disable' service
  disable() {
	MxI.$raiseNotImplementedError($ILogger, this);
  } // $ILogger.disable()
  
  // Fallback implementation of 'setPrefix' service
  setPrefix() {
	MxI.$raiseNotImplementedError($ILogger, this);
  } // $ILogger.setPrefix()
  
  // Fallback implementation of 'getPrefix' service
  getPrefix() {
	MxI.$raiseNotImplementedError($ILogger, this);
  } // $ILogger.getPrefix()
} // '$ILogger' interface class
MxI.$setAsInterface($ILogger).$asChildOf(MxI.$IBaseInterface);


//============================================================================
//============================= '$DefaultLogger' =============================
//============================================================================
class $DefaultLogger extends MxI.$Implementation(MxI.$Object).$with($ILogger) {
  constructor(...args) {
	  super();
	  //console.log(" >>> $DefaultLogger First time (and Only normally) in getSingleton");
      this._$prefix = "";
  } // '$DefaultLogger' constructor
  
  static getSingleton() {
	    var Klass = this;
	    //console.log(Klass.name + ".getSingleton " + Klass._$singleton);
		//console.log("Class: " + this.name);
	    if (Klass._$singleton === undefined) {
		    Klass._$singleton = new Klass();
	    }
	    return Klass._$singleton;
  } // $DefaultLogger.getSingleton()
  
  /*
  static getSingleton() {
	  if ($DefaultLogger._$singleton === undefined) {
		  console.log(" >>> First time (and Only normally) in $DefaultLogger.getSingleton");
		  $DefaultLogger._$singleton = new $DefaultLogger();
	  }
	  return $DefaultLogger._$singleton;
  } // $DefaultLogger.getSingleton()
  */
  
  log(arg_msg, ...arg_values) {
	    var Klass     = this;
	    //var singleton = $DefaultLogger.getSingleton();
		//console.log(">> " + singleton.name);
		
	    if ($DefaultLogger._$enabled === false) 
			return;
		
	    var msg = "";
	    if (arg_msg === undefined || arg_msg === null) 
		  msg = "";		  
	    else
		  msg = arg_msg;
	
	    if (arg_values !== undefined && arg_values !== null) {
	      if (arg_values.length > 0) {
			console.log(this._$prefix + msg, ...arg_values);
		    return;
	      }
        }
	    console.log(this._$prefix + msg);
  } // $ILogger.log()
  
  enable() {
	$DefaultLogger._$enabled = true;
  } // $ILogger.enable()
  
  setPrefix(arg_prefix) {
	$DefaultLogger._$prefix = arg_prefix;
  } // $ILogger.setPrefix()
  
  getPrefix() {
	return $DefaultLogger._$prefix;
  } // $ILogger.getPrefix()
  
  enable() {
	$DefaultLogger._$enabled = true;
  } // $ILogger.enable()
  
  disable() {
	$DefaultLogger._$enabled = false;
  } // $ILogger.disable()
} // '$DefaultLogger' class
$DefaultLogger._$prefix    = "";
$DefaultLogger._$enabled   = true;
$DefaultLogger._$singleton = undefined;
MxI.$setClass($DefaultLogger).$asImplementationOf($ILogger);


//============================================================================
//================================ '$System' =================================
//============================================================================
class $System {
    static setLogger(arg_logger) {
	    if (arg_logger === undefined) {
		    return;
	    }
		else if (! MxI.$isInstanceOf(MxI.$Object, arg_logger)) {
			$System.getLogger().log("*** Error *** in '$System'.setLogger(): '%s' is an invalid Logger object", arg_logger.name);
		    return;
	    }
		
	    $System._$logger = arg_logger;  
    } // $System.setLogger
  
    static getLogger() {
      if ($System._$logger === undefined) {
		  $System._$logger = $DefaultLogger.getSingleton();
	  }
	  return $System._$logger;  
    } // $System.getLogger()
  
    static resetLogger() {
      $System.setLogger($DefaultLogger.getSingleton()); 
    } // $System.resetLogger()
  
    static log(arg_msg, ...arg_values) {
	  $System.getLogger().log(arg_msg, ...arg_values);
    } // $System.log()
  
    static banner(arg_msg, arg_single_line_banner, arg_separator_char, arg_separator_length) {
      var single_line_banner = false;
	  if (arg_single_line_banner !== undefined)
	    single_line_banner = arg_single_line_banner;
	
	  var separator_length = 60;
	  if (arg_separator_length !== undefined)
	    separator_length = arg_separator_length;
	
	  var separator_char = '=';
	  if (arg_separator_char !== undefined)
	    separator_char = arg_separator_char;
	
      var separator_line           = separator_char.repeat(separator_length);
      var start_msg_separator_size = Math.round((separator_length / 2) - (arg_msg.length / 2) -1);
      var end_msg_separator_size   = Math.round((separator_length / 2) - (arg_msg.length / 2) -1);
  
      var msg_separator_size = start_msg_separator_size + arg_msg.length + 2 + end_msg_separator_size;
      if (msg_separator_size > separator_length)
	    end_msg_separator_size = end_msg_separator_size - 1;
      else if (msg_separator_size < separator_length)
        end_msg_separator_size = end_msg_separator_size + 1;

      msg_separator_size = start_msg_separator_size + arg_msg.length + 2 + end_msg_separator_size;
  
      var start_msg_separator      = separator_char.repeat(start_msg_separator_size);
      var end_msg_separator        = separator_char.repeat(end_msg_separator_size);
  
      if (! arg_single_line_banner)
        $System.getLogger().log(separator_line);		
	
      $System.getLogger().log(start_msg_separator + ' ' + arg_msg + ' ' + end_msg_separator);
	  
      if (! arg_single_line_banner)
        $System.getLogger().log(separator_line);		
  } // $System.banner()
} // '$System' class
$System._$logger;


//================================================================================
//========================= Extension of 'MxI' Namespace =========================
//================================================================================
MxI.$Null          = $Null;
MxI.$System        = $System;
MxI.$isNull        = $isNull;
MxI.$ILogger       = $ILogger;
MxI.$DefaultLogger = $DefaultLogger;

exports.MxI = MxI;

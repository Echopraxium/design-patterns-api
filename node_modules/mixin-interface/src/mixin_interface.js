//==============================================================
// mixin_interface.js
// Purpose:  implementation of interface classes in es6
//           https://www.npmjs.com/package/mixin-interface
// Project: 'mixin-interface' npm package
//==============================================================
//'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const mixin       = require('mixin');
const caller_id   = require('caller-id');
const change_case = require('change-case');

const SERVICE_NOT_IMPLEMENTED_ERROR_ID     = 100;
const SUPER_INTERFACE_NOT_DEFINED_ERROR_ID = 101;
const MANDATORY_ARG_MISSING_ID             = 102;


// http://www.2ality.com/2016/05/six-nifty-es6-tricks.html
function $mandatory_arg(obj, arg_name) {
	var caller_data = caller_id.getData();
	var error_msg   = "** mixin-interface Error " + MANDATORY_ARG_MISSING_ID + " **\n" +
                      "       in '" + obj.name + "." + caller_data.functionName + "()' : '" + arg_name + "' is mandatory\n";
    throw new Error(error_msg);
} // $mandatory_arg

//==================== '$IBaseInterface' interface class ====================
class $IBaseInterface {
} // '$IBaseInterface' interface class
$IBaseInterface._$is_interface = true;
exports.$IBaseInterface = $IBaseInterface;


//================ '$Object' Base Implementation class ================
class $Object {
  constructor(...args) {
      this._$name        = this.generateInstanceName();
      this._$args        = args;
	  this._$initialized = false;
	  this._$args_init   = [];
  } // '$Object' constructor
  
  init(...args_init) {
	  if (this._$initialized===true) 
		return;
	  
	  this._$initialized = true;
      if (args_init !== undefined && args_init !== null)
		  this._$args_init = Array.from(args_init);
  } // init
  
  isInitialized() {
	  return this._$initialized;
  } // isInitialized

  generateInstanceName() {
    var class_name = this.constructor.name;
    //console.log("class_name: " + class_name);
    var count = 0;

    if ($Object._InstanceCount === undefined)
      $Object._InstanceCount = {};

    if ($Object._InstanceCount[class_name] === undefined)
      $Object._InstanceCount[class_name] = 0;
    else
      count = $Object._InstanceCount[class_name];

    $Object._InstanceCount[class_name] = count;

    var preformatted_class_name = class_name.replace('.', '_').replace('$', 'mxi');
    var snake_case_class_name   = change_case.snakeCase(preformatted_class_name);
    var name = snake_case_class_name + '_' + count;

    $Object._InstanceCount[class_name]++;
    return name;
  } // generateInstanceName

  get name() {
    if (this._$name === undefined)
      this._$name = this.generateInstanceName();
    return this._$name;
  } // 'name' getter
} // $Object
$Object._$is_interface = false;
exports.$Object = $Object;
//================ '$Object' Base Implementation class

var _$default_logger; // value defined at the end of this script

//==================== '$ILogger' interface class ====================
class $ILogger extends mixin($Object, $IBaseInterface) {  
  log(msg) {
    console.log(msg);
  } // $ILogger.log
} // '$ILogger' interface class
$ILogger._$is_interface    = true;
$ILogger._$super_interface = $IBaseInterface;


//================ '$DefaultLogger' ================
class $DefaultLogger extends mixin($Object, $ILogger) {
  static getSingleton() {
	  if ($DefaultLogger._$singleton === undefined) {
		  //console.log(" >>> First time (and Only normally) in $DefaultLogger.getSingleton");
		  $DefaultLogger._$singleton = new $DefaultLogger();
	  }
	  return $DefaultLogger._$singleton;
  } // $DefaultLogger.getSingleton
  
  log(arg_msg) {
	  var msg = arg_msg;
	  if (msg === undefined || msg === null)
		msg = "";
	  console.log(msg);
  } // $DefaultLogger.log
} // '$DefaultLogger' class
$DefaultLogger._$singleton;
$DefaultLogger._$implemented_interfaces = [$ILogger];
$DefaultLogger._$is_interface           = false;


//================ '$System' ================
class $System {
  static setLogger(arg_logger) {
    if (arg_logger === undefined) 
		return;
	$System._$logger = arg_logger;  
  } // $System.setLogger
  
  static getLogger() {
    if ($System._$logger === undefined) {
		$System._$logger = $DefaultLogger.getSingleton();
	}
	return $System._$logger;  
  } // $System.getLogger
  
  static resetLogger() {
    $System.setLogger($DefaultLogger.getSingleton()); 
  } // $System.resetLogger
  
  static log(msg) {
	$System.getLogger().log(msg);
  } // $DefaultLogger.getSingleton
} // $System class
$System._$logger;


//================================ 'MxI' Namespace ================================
const MxI = {
	//--------------------- $System ---------------------
    '$System': $System,

    //--------------------- $Object ---------------------
    '$Object': $Object,

    //----------------- $IBaseInterface -----------------
    '$IBaseInterface': $IBaseInterface,
	
	//--------------------- $ILogger --------------------
    '$ILogger': $ILogger,
	
	//------------------ $DefaultLogger --------------------
	'$DefaultLogger': $DefaultLogger,
	
	//----------------- $mandatory_arg -----------------
	// http://www.2ality.com/2016/05/six-nifty-es6-tricks.html
	'$mandatory_arg' : $mandatory_arg,

    //-------------------- $setClass --------------------
    '$setClass': function(arg_type) {
        if (arg_type === undefined)
              return;
        return new $MixinImplementation(arg_type);
    }, // $setClass

    //------------------ $setAsInterface ------------------
    '$setAsInterface': function(arg_type) {
      if (arg_type === undefined)
          return;
      arg_type._$is_interface    = true;
      arg_type._$super_interface = $IBaseInterface;
      return new $MixinSetInterface(arg_type);
    }, // $setAsInterface

    //------------------ $Interface ------------------
    '$Interface': function(arg_super_type) {
       var mixed = mixin($Object, arg_super_type);
       return mixed;
    }, // $Interface

    //---------------- $Implementation ----------------
    '$Implementation': function(arg_super_implementation) {
       return new $MixinInterface(arg_super_implementation);
    }, // $Implementation

    //------------------- $isInstanceOf -------------------
    '$isInstanceOf': function(type, instance) {
      //console.log("---- isInstanceOf " + type.name + " ? instance: " + instance);
      var instance_type = getClass(instance);

      if ( instance instanceof type)
          // Check if instance 'isinstanceof' an implementation class
          return true;
      else {
          // Check if instance 'isinstanceof' an interface class
          var implemented_interface;
          if (instance_type._$implemented_interfaces !== undefined) {
              // Check if interface class is in _$implemented_interfaces
              for (var i=0; i<instance_type._$implemented_interfaces.length; i++) {
                  implemented_interface = instance_type._$implemented_interfaces[i];
                  if (implemented_interface === type)
                      return true;
                  else {
                      var parent_interface = implemented_interface._$super_interface;
                      while (parent_interface !== undefined) {
                          if (parent_interface === type)
                              return true;
                          parent_interface = parent_interface._$super_interface;
                          //console.log(">> parent_interface  " + parent_interface.name);
                      } // while (parent_interface != undefined)
                  } // if (implemented_interface === type)
              } // for (var i=0; i<instance_type._$implemented_interfaces.length; i++)
          } // if (instance_type._$implemented_interfaces !== undefined)
      } // if (instance instanceof type)

      return false;
    }, // $isInstanceOf()

    //---------- $isInterface ----------
    '$isInterface': function(arg_type) {
        if ( arg_type                === undefined ||
             arg_type._$is_interface === undefined) {
           return false;
        }

        if (arg_type._$is_interface === true)
            return true;

        return false;
    }, // $isInterface

    //---------- $raiseNotImplementedError ---------
    '$raiseNotImplementedError': function(arg_interface, instance) {
        if (arg_interface === undefined ||  instance === undefined) {
              return;
        }

        var caller_data = caller_id.getData();
        var error_msg   = "** mixin-interface Error " + SERVICE_NOT_IMPLEMENTED_ERROR_ID + " ** " +
                          arg_interface.name + "." + caller_data.functionName +
                          " not found on " + instance.name + "\n";

        throw new Error(error_msg);
    } // $raiseNotImplementedError
}; // MxI namespace
exports.MxI = MxI;

//---------- getClass ----------
function getClass(instance) {
    if (instance === null || instance === undefined)
      return undefined;

    var type = Object.getPrototypeOf(instance);
    return type.constructor;
} // getClass


//==================== '$MixinInterface' class ====================
class $MixinInterface {
  constructor(arg_type) {
      this._$super_implementation = arg_type;
  } // $MixinInterface constructor

  $with(...arg_interfaces) {
      var implemented_interfaces = Array.from(arg_interfaces);
      if (implemented_interfaces.length === 0)
        return this._$super_implementation;

      var mixed = this._$super_implementation;

      if (this._$super_implementation._$implemented_interfaces === undefined)
          this._$super_implementation._$implemented_interfaces = {};

      for (var i=0; i<implemented_interfaces.length; i++) {
         var implemented_interface = implemented_interfaces[i];
         //console.log("-- " + itf.name + " implemented on " + super_type.name);
        mixed = mixin(mixed, implemented_interface);
        this._$super_implementation._$implemented_interfaces[implemented_interface] = true;
      } // for (var i=0; i<implemented_interfaces.length; i++)

      return mixed;
  } // $MixinInterface.$with
} // '$MixinInterface' class


//==================== '$MixinSetInterface' class ====================
class $MixinSetInterface {
  constructor(arg_type) {
      this._$arg_type = arg_type;
    } // $MixinSetInterface constructor

  $asChildOf(arg_super_type) {
      var arg_type = this._$arg_type;
      if (arg_type === undefined || arg_super_type === undefined) {
          return;
      }
      arg_type._$is_interface    = true;
      arg_type._$super_interface = arg_super_type;
  } // $MixinSetInterface.$asChildOf
} // '$MixinSetInterface' class


//==================== '$MixinImplementation' class ====================
class $MixinImplementation {
  constructor(arg_type) {
      this._$arg_type = arg_type;
  } // $MixinInterface constructor

  $asImplementationOf(...arg_interfaces) {
      var arg_type = this._$arg_type;
      if (arg_type === undefined)
          return;

      var interfaces                    = Array.from(arg_interfaces);
      arg_type._$implemented_interfaces = interfaces;
      arg_type._$is_interface           = false;
  } // $MixinImplementation.$asImplementationOf
} // '$MixinImplementation' class

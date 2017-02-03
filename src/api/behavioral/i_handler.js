//==============================================================
// i_handler.js
// Purpose:          'IHandler' interface class
// Design Pattern:   Chain Of Responsability ('Handler' participant)
// Purpose:          Avoid coupling the sender of a request to its receiver by 
//                   giving more than one object a chance to handle the request. 
//                   Chain the receiving objects and pass the request along the 
//                   chain until an object handles it.
//                   Source:  Elements of Reusable Object-Oriented Software 
//                   Authors: Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John
// Pattern Subgroup: Behavioral
// Status:           Ready
// Reference:        http://www.oodesign.com/chain-of-responsibility-pattern.html
// Project:          'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IHandler' interface class ====================
class IHandler extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'handleRequest' service
  // arg_request: IRequest
  handleRequest(arg_request) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // IHandler.handleRequest
  
  // Fallback implementation of 'setSuccessor' service      
  // arg_handler: IHandler
  setSuccessor(arg_handler) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // IHandler.setSuccessor
} // 'IHandler' class
MxI.$setAsInterface(IHandler).$asChildOf(MxI.$IBaseInterface);
exports.IHandler = IHandler;
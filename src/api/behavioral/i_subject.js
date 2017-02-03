//==============================================================
// i_subject.js
// Purpose:          'ISubject' interface class
// Design Pattern:   Observer ('Subject' participant)
// Pattern Subgroup: Behavioral
// Status:           Ready
// Reference:        https://en.wikipedia.org/wiki/Observer_pattern
// Project:          'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'ISubject' interface class ====================
class ISubject extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'registerObserver' service
  // arg_observer: IObserver
  registerObserver(arg_observer) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // ISubject.registerObserver
  
  // Fallback implementation of 'unregisterObserver' service
  // arg_observer: IObserver
  unregisterObserver(arg_observer) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // ISubject.unregisterObserver
  
  // Fallback implementation of 'notifyObservers' service
  notifyObservers() {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // ISubject.notifyObservers
} // 'ISubject' class
MxI.$setAsInterface(ISubject).$asChildOf(MxI.$IBaseInterface);
exports.ISubject = ISubject;
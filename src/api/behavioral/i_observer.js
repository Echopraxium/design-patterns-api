//==============================================================
// i_observer.js
// Purpose:          'IObserver' interface class
// Design Pattern:   Observer (Observer Role)
// Pattern Subgroup: Behavioral
// Status:           Ready
// Reference:        https://en.wikipedia.org/wiki/Observer_pattern
// Project:          'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IObserver' interface class ====================
class IObserver extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'notify' service
  notify() {
    MxI.$raiseNotImplementedError(IObserver, this);
  } // IObserver.notify
} // 'IObserver' class
MxI.$setAsInterface(IObserver).$asChildOf(MxI.$IBaseInterface);
exports.IObserver = IObserver;
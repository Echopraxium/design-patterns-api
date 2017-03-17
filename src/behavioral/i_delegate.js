//==============================================================
// i_delegate.js
// 'IDelegate' interface class
// Purpose:           Parent class for 'IImplementor', 'IStrategy' and
//                    'IReceiver'
//                    This interface delegates the 'execute()' service to its 
//                    subclasses depending on their role (participant within 
//                    its Design Pattern)
//                    e.g. within 'Strategy' pattern, 'IStrategy' subclass has
//                         the 'Strategy' role, 'apply()' service has the semantic
//                         of 'ask the delegate to apply its strategy'.
// Pattern Subgroup:  Behavioral
// Reference:         https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IDelegate' interface class ====================
class IDelegate extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'execute()' service
  apply(...args) {
    MxI.$raiseNotImplementedError(IDelegate, this);
  } // IDelegate.apply()
} // 'IDelegate' interface class
MxI.$setAsInterface(IDelegate).$asChildOf(MxI.$IBaseInterface);
exports.IDelegate = IDelegate;
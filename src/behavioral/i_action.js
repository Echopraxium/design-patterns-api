//==============================================================
// i_action.js
// 'IAction' interface class
// Purpose:           Parent class for 'ICoreComponent', 'IDecorator',
//                    'ICommand', 'IInvoker' and 'ITemplateMethod'.
//                    This interface delegates the 'execute()' service to its 
//                    subclasses depending on their role (participant within 
//                    its Design Pattern)
//                    e.g. within 'Decorator' pattern, 'IDecorator' subclass has
//                         the 'Decorator' role, 'execute()' service has the semantic
//                         of a 'decorating behavior'.
// Pattern Subgroup:  Behavioral
// Reference:         https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IAction' interface class ====================
class IAction extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'execute()' service
  execute(...args) {
    MxI.$raiseNotImplementedError(IAction, this);
  } // IAction.execute()
} // 'IAction' interface class
MxI.$setAsInterface(IAction).$asChildOf(MxI.$IBaseInterface);
exports.IAction = IAction;
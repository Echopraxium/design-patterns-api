//==============================================================
// i_component.js
// 'IComponent' interface class
// Design Pattern:    Decorator ('Component' participant)
// Other participant: 'Decorator' (see IComponent in i_decorator.js)
// Purpose:           attaches additional responsibilities to an object dynamically.
//                    Decorators provide a flexible alternative to subclassing 
//                    for extending functionality
// Pattern Subgroup:  Structural
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/DecoratorToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('mixin-interface/src/mixin_interface.js').MxI;
const IAction = require('../behavioral/i_action.js').IAction;

//==================== 'IComponent' interface class ====================
class IComponent extends MxI.$Interface(IAction) {
  // NB: 'execute()' service (inherited from 'IAction') should 
  //     be overridden by implementation class
} // 'IComponent' interface class
MxI.$setAsInterface(IComponent).$asChildOf(IAction);
exports.IComponent = IComponent;
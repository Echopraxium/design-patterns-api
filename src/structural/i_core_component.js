//==============================================================
// i_core_component.js
// 'ICoreComponent' interface class
// Design Pattern:    Decorator ('Core Component' participant)
// Other participant: 'Decorator' (see IDecorator in i_decorator.js)
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

//==================== 'ICoreComponent' interface class ====================
class ICoreComponent extends MxI.$Interface(IAction) {
  // NB: 'execute()' service (inherited from 'IAction') should 
  //     be overridden by implementation class
} // 'ICoreComponent' interface class
MxI.$setAsInterface(ICoreComponent).$asChildOf(IAction);
exports.ICoreComponent = ICoreComponent;
//==============================================================
// i_decorator.js
// 'IDecorator' interface class
// Design Pattern:    Decorator ('Decorator' participant)
// Other participant: 'Core Component' (see IComponent in i_core_component.js)
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
const MxI            = require('mixin-interface/src/mixin_interface.js').MxI;
const ICoreComponent = require('./i_core_component.js').ICoreComponent;

//==================== 'IDecorator' interface class ====================
class IDecorator extends MxI.$Interface(ICoreComponent) {
  // NB: 'execute()' service (inherited from 'IComponent') should 
  //     be overridden by implementation class
} // 'IDecorator' interface class
MxI.$setAsInterface(IDecorator).$asChildOf(ICoreComponent);
exports.IDecorator = IDecorator;
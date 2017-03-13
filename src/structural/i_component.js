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
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IComponent' interface class ====================
class IComponent extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'doIt' service
  doIt(...args) {
    MxI.$raiseNotImplementedError(IComponent, this);
  } // IComponent.doIt()
} // 'IComponent' interface class
MxI.$setAsInterface(IComponent).$asChildOf(MxI.$IBaseInterface);
exports.IComponent = IComponent;
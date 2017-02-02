//==============================================================
// i_abstract_factory.js
// Purpose:          'IAbstractFactory' interface class
// Design Pattern:   Abstract Factory
// Pattern Subgroup: Creational
// Status:           Ready
// Project:          'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IAbstractFactory' interface class ====================
class IAbstractFactory extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'create' service
  create() {
    MxI.$raiseNotImplementedError(IAbstractFactory, this);
  } // IAbstractFactory.create
} // 'IAbstractFactory' class
MxI.$setAsInterface(IAbstractFactory).$asChildOf(MxI.$IBaseInterface);
exports.IAbstractFactory = IAbstractFactory;
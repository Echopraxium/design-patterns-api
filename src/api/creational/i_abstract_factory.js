//==============================================================
// i_abstract_factory.js
// 'IAbstractFactory' interface class
// Design Pattern:    Abstract Factory
// Purpose:           The Abstract Factory Pattern provides an interface for creating
//                    families of related or dependent objects without specifying 
//                    their concrete classes.
// Pattern Subgroup:  Creational
// Status:            Ready
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/AbstractFactoryToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IAbstractFactory' interface class ====================
class IAbstractFactory extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'create' service
  // It is advised to return an object which implements IProduct
  create(...args) {
    MxI.$raiseNotImplementedError(IAbstractFactory, this);
  } // IAbstractFactory.create
} // 'IAbstractFactory' class
MxI.$setAsInterface(IAbstractFactory).$asChildOf(MxI.$IBaseInterface);
exports.IAbstractFactory = IAbstractFactory;
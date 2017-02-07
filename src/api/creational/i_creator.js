//==============================================================
// i_creator.js
// 'ICreator' interface class
// Design Pattern:    Factory Method ('Creator' participant)
// Purpose:           Define an interface for creating an object, 
//                    but let subclasses decide which class to instantiate. 
//                    Lets a class defer instantiation to subclasses.
// Other participant: 'Product' (see IProduct in i_product.js)
// Pattern Subgroup:  Creational
// Status:            Ready
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/FactoryToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'ICreator' interface class ====================
class ICreator extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'factoryMethod' service
  // Should return an object which implements IProduct
  factoryMethod() {
    MxI.$raiseNotImplementedError(ICreator, this);
  } // ICreator.factoryMethod
} // 'ICreator' class
MxI.$setAsInterface(ICreator).$asChildOf(MxI.$IBaseInterface);
exports.ICreator = ICreator;
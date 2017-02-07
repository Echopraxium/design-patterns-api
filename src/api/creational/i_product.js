//==============================================================
// i_product.js
// 'IProduct' interface class
// Design Pattern:    Factory Method ('Product' participant)
// Purpose:           Define an interface for creating an object, 
//                    but let subclasses decide which class to instantiate. 
//                    Lets a class defer instantiation to subclasses.
// Other participant: 'Creator' (see ICreator in i_creator.js)
// Pattern Subgroup:  Creational
// Status:            Ready
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/FactoryToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IProduct' interface class ====================
class IProduct extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'getAttribute' service
  // attribute_id: String or Integer or Enumeration
  getAttribute(attribute_id) {
    MxI.$raiseNotImplementedError(IProduct, this);
  } // IProduct.getAttribute
} // 'IProduct' class
MxI.$setAsInterface(IProduct).$asChildOf(MxI.$IBaseInterface);
exports.IProduct = IProduct;
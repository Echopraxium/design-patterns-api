//==============================================================
// i_builder.js
// 'IBuilder' interface class
// Design Pattern:   Builder
// Pattern Subgroup: Creational
// Status:           Ready
// Project:          'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IBuilder' interface class ====================
class IBuilder extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'getResult' service
  // Should return an object which implements IProduct
  getResult() {
    MxI.$raiseNotImplementedError(IBuilder, this);
  } // IBuilder.getResult
  
  // Fallback implementation of 'setPart' service
  // part_id: String or Integer or Enumeration
  setPart(part_id, ...args) {
    MxI.$raiseNotImplementedError(IBuilder, this);
  } // IBuilder.setPart
} // 'IBuilder' class
MxI.$setAsInterface(IBuilder).$asChildOf(MxI.$IBaseInterface);
exports.IBuilder = IBuilder;
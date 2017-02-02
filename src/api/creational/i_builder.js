//==============================================================
// i_builder.js
// Purpose:          'IBuilder' interface class
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
  getResult() {
    MxI.$raiseNotImplementedError(IBuilder, this);
  } // IBuilder.getResult
  
  // Fallback implementation of 'setPart' service
  setPart(part_id, ...args) {
    MxI.$raiseNotImplementedError(IBuilder, this);
  } // IBuilder.setPart
} // 'IBuilder' class
MxI.$setAsInterface(IBuilder).$asChildOf(MxI.$IBaseInterface);
exports.IBuilder = IBuilder;
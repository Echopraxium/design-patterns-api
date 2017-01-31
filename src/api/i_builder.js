//==============================================================
// i_builder.js
// Purpose: 'IBuilder' interface class
// Project: 'design-patterns-api' package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IBuilder' interface class ====================
class IBuilder extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'create' service
  create() {
    MxI.$raiseNotImplementedError(IBuilder, this);
  } // IBuilder.create
} // 'IBuilder' class
MxI.$setAsInterface(IBuilder).$asChildOf(MxI.$IBaseInterface);
exports.IBuilder = IBuilder;
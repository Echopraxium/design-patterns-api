//==============================================================
// i_factory_method.js
// Purpose: 'IFactoryMethod' interface class
// Status:  To Be Done
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IFactoryMethod' interface class ====================
class IFactoryMethod extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'create' service
  create() {
    MxI.$raiseNotImplementedError(IFactoryMethod, this);
  } // IFactoryMethod.create
} // 'IFactoryMethod' class
MxI.$setAsInterface(IFactoryMethod).$asChildOf(MxI.$IBaseInterface);
exports.IFactoryMethod = IFactoryMethod;
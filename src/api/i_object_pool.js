//==============================================================
// i_object_pool.js
// Purpose: 'IObjectPool' interface class
// Project: 'design-patterns-api' package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IObjectPool' interface class ====================
class IObjectPool extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'create' service
  create() {
    MxI.$raiseNotImplementedError(IObjectPool, this);
  } // IObjectPool.create
} // 'IObjectPool' class
MxI.$setAsInterface(IObjectPool).$asChildOf(MxI.$IBaseInterface);
exports.IObjectPool = IObjectPool;
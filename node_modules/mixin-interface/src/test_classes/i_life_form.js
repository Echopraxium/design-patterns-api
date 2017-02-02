//==============================================================
// i_lifeform.js
// Purpose: 'ILifeForm' interface class
// Project: 'mixin-interface' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('../mixin_interface.js').MxI;

//==================== 'ILifeForm' interface class ====================
class ILifeForm extends MxI.$Interface(MxI.$IBaseInterface) {  
  // Fallback implementation of 'live' service
  live() {
    MxI.$raiseNotImplementedError(ILifeForm, this);
  } // ILifeForm.live
} // 'ILifeForm' class
MxI.$setAsInterface(ILifeForm).$asChildOf(MxI.$IBaseInterface);
exports.ILifeForm = ILifeForm;

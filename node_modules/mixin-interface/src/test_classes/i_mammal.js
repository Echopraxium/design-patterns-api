//==============================================================
// i_mammal.js
// Purpose: 'IMammal' interface class
//          child of 'IAnimal' interface
// Project: 'mixin-interface' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('../mixin_interface.js').MxI;
const IAnimal = require('./i_animal.js').IAnimal;

//==================== 'IMammal' interface class ====================
class IMammal extends MxI.$Interface(IAnimal) {
  // Fallback implementation of 'suckle' service
  suckle() {
    MxI.$raiseNotImplementedError(IMammal, this);
  } // IMammal.run
} // 'IMammal' class
MxI.$setAsInterface(IMammal).$asChildOf(IAnimal);
exports.IMammal = IMammal;

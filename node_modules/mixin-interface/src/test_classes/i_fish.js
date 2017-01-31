//==============================================================
// i_fish.js
// Purpose: 'IFish' interface class (uses mixins)
// Project: 'mixin-interface' module
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('../mixin_interface.js').MxI;
const IAnimal = require('./i_animal.js').IAnimal;

//==================== 'IFish' interface class ====================
class IFish extends MxI.$Interface(IAnimal) {
  // Fallback implementation of 'swim' service
  swim() {
    MxI.$raiseNotImplementedError(IFish, this);
  } // IFish.swim()
} // 'IFish' class
MxI.$setAsInterface(IFish).$asChildOf(IAnimal);
exports.IFish = IFish;

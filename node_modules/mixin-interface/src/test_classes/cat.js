//==============================================================
// cat.js
// Purpose: 'Cat' implementation class
//          implements 'IMammal' interface
// Project: 'mixin-interface' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('../mixin_interface.js').MxI;
const Animal  = require('./animal.js').Animal;
const IMammal = require('./i_mammal.js').IMammal;

//==================== 'Cat' implementation class ====================
class Cat extends MxI.$Implementation(Animal).$with(IMammal) {
  constructor() {
    super();
  } // 'Cat' constructor

  suckle() {
    MxI.$System.log('--> Cat.suckle');
  } // IMammal.suckle

  __run() {
    MxI.$System.log('--> Cat.run');
  } // IAnimal.run

  __live() {
    MxI.$System.log('--> Cat.live');
  } // ILifeForm.live
} // 'Cat' class
MxI.$setClass(Cat).$asImplementationOf(IMammal);
exports.Cat = Cat;

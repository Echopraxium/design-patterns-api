//==============================================================
// test.js
// Purpose: Unit Test for 'design-patterns-api'
//          https://www.npmjs.com/package/design-patterns-api
// Project: 'design-patterns-api' package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI              = require('mixin-interface/src/mixin_interface.js').MxI;
const IAbstractFactory = require('./src/api/i_abstract_factory.js').IAbstractFactory;
const IBuilder         = require('./src/api/i_builder.js').IBuilder;
const IFactoryMethod   = require('./src/api/i_factory_method.js').IFactoryMethod;
const IPrototype       = require('./src/api/i_prototype.js').IPrototype;
const IObjectPool      = require('./src/api/i_object_pool.js').IObjectPool;

//==================== start of test.js ====================
var unit_test_step    = 0;
var unit_test_substep = 0;

console.log();
console.log("---------- Unit Test for 'design-patterns-api' package ----------");
unit_test_step++;

console.log(unit_test_step + ". " + "Creational Patterns");

// Abstract Factory
// Creates an instance of several families of classes
console.log("----------");
unit_test_substep++;
console.log(unit_test_step + "."  + unit_test_substep + ". Abstract Factory");
console.log("'IAbstractFactory'          is an interface ? " + MxI.$isInterface(IAbstractFactory));

// Builder
// Separates object construction from its representation
console.log("----------");
unit_test_substep++;
console.log(unit_test_step + "."  + unit_test_substep + ". Builder");
console.log("'IBuilder'                  is an interface ? " + MxI.$isInterface(IBuilder));

// Factory Method
// Creates an instance of several derived classes
console.log("----------");
unit_test_substep++;
console.log(unit_test_step + "."  + unit_test_substep + ". Factory Method");
console.log("'IFactoryMethod'            is an interface ? " + MxI.$isInterface(IFactoryMethod));

// Prototype
// A fully initialized instance to be copied or cloned
console.log("----------");
unit_test_substep++;
console.log(unit_test_step + "."  + unit_test_substep + ". Prototype");
console.log("'IPrototype'                is an interface ? " + MxI.$isInterface(IPrototype));

// Object Pool
// Avoid expensive acquisition and release of resources by recycling objects that are no longer in use
console.log("----------");
unit_test_substep++;
console.log(unit_test_step + "."  + unit_test_substep + ". Object Pool");
console.log("'IObjectPool'               is an interface ? " + MxI.$isInterface(IObjectPool));

unit_test_substep = 0;

/*
Singleton
A class of which only a single instance can exist
*/

console.log("---------- End of Unit Test ----------");
console.log();
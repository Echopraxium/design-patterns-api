//==============================================================
// test.js
// Purpose: Unit Test for 'design-patterns-api'
//          https://www.npmjs.com/package/design-patterns-api
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI              = require('mixin-interface/src/mixin_interface.js').MxI;

const IAbstractFactory = require('./src/api/creational/i_abstract_factory.js').IAbstractFactory;
const IBuilder         = require('./src/api/creational/i_builder.js').IBuilder;
const IObserver        = require('./src/api/behavioral/i_observer.js').IObserver;
const ISubject         = require('./src/api/behavioral/i_subject.js').ISubject;
const IIterator        = require('./src/api/behavioral/i_iterator.js').IIterator;

//==================== start of test.js ====================
var unit_test_step    = 0;
var unit_test_substep = 0;

MxI.$System.log();
MxI.$System.log("=================================================================");
MxI.$System.log("========== Unit Test for 'design-patterns-api' package ==========");
MxI.$System.log("=================================================================");

//==================== Creational Patterns ====================
unit_test_step++;
MxI.$System.log(unit_test_step + ". " + "Creational Patterns");
// Abstract Factory: Creates an instance of several families of classes
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Abstract Factory");
MxI.$System.log("'IAbstractFactory'          is an interface ? " + MxI.$isInterface(IAbstractFactory));

// Builder: Separates object construction from its representation
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Builder");
MxI.$System.log("'IBuilder'                  is an interface ? " + MxI.$isInterface(IBuilder));
unit_test_substep = 0;

//==================== Behavioral Patterns ====================
MxI.$System.log("----------------------------------------");
unit_test_step++;
MxI.$System.log(unit_test_step + ". " + "Behavioral Patterns");

// Observer:
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Observer");
MxI.$System.log("'IObserver'                 is an interface ? " + MxI.$isInterface(IObserver));
MxI.$System.log("'ISubject'                  is an interface ? " + MxI.$isInterface(ISubject));

// Iterator: Provide a way to access the elements of an aggregate object sequentially 
//           without exposing its underlying representation
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Iterator");
MxI.$System.log("'IIterator'                 is an interface ? " + MxI.$isInterface(IIterator));
unit_test_substep = 0;

MxI.$System.log("==================== End of Unit Test ====================");
MxI.$System.log;
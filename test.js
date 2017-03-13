//==============================================================
// test.js
// Purpose: Unit Test for 'design-patterns-api'
//          https://www.npmjs.com/package/design-patterns-api
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
//const MxI                   = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const MxI                   = require('mixin-interface/src/mixin_interface.js').MxI; 
const IAbstractFactory      = require('./src/creational/i_abstract_factory.js').IAbstractFactory;
const ICreator              = require('./src/creational/i_creator.js').ICreator;
const IProduct              = require('./src/creational/i_product.js').IProduct;
const IBuilder              = require('./src/creational/i_builder.js').IBuilder;

const IObserver             = require('./src/behavioral/i_observer.js').IObserver;
const ISubject              = require('./src/behavioral/i_subject.js').ISubject;
const IIterator             = require('./src/behavioral/i_iterator.js').IIterator;
const ICollection           = require('./src/behavioral/i_collection.js').ICollection;
const IState                = require('./src/behavioral/i_state.js').IState;
const IStateContext         = require('./src/behavioral/i_state_context.js').IStateContext;
const IHandler              = require('./src/behavioral/i_handler.js').IHandler;
const IRequest              = require('./src/behavioral/i_request.js').IRequest;
const IVisitor              = require('./src/behavioral/i_visitor.js').IVisitor;
const IElement              = require('./src/behavioral/i_element.js').IElement;
const IMemento              = require('./src/behavioral/i_memento.js').IMemento;
const IOriginator           = require('./src/behavioral/i_originator.js').IOriginator;
const ICareTaker            = require('./src/behavioral/i_care_taker.js').ICareTaker;
const IStrategy             = require('./src/behavioral/i_strategy.js').IStrategy;
const IStrategyContext      = require('./src/behavioral/i_strategy_context.js').IStrategyContext;

const IImplementor          = require('./src/structural/i_implementor.js').IImplementor;
const IAdapter              = require('./src/structural/i_adapter.js').IAdapter;
const IAdaptee              = require('./src/structural/i_adaptee.js').IAdaptee;
const IFacade               = require('./src/structural/i_facade.js').IFacade;

const LoggerFactory         = require('./samples/creational/abstract_factory/logger_factory.js').LoggerFactory;
const LgF                   = require('./samples/creational/abstract_factory/logger_factory.js').LgF;

const NullNode              = require('./samples/behavioral/null_object/null_node.js').NullNode;


//==================== start of test.js ====================
var unit_test_step    = 0;
var unit_test_substep = 0;

MxI.$System.log();
MxI.$System.log("=================================================================");
MxI.$System.log("========== Unit Test for 'design-patterns-api' package ==========");
MxI.$System.log("=================================================================");

//=================================================================================
//=============================  Creational Patterns  =============================
//=================================================================================
unit_test_step++;
MxI.$System.log(unit_test_step + ". " + "Creational Patterns");

//--------------------------------------------------------------------------------------
// Abstract Factory: Creates an instance of several families of classes
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Abstract Factory");
MxI.$System.log("Demonstrate 'Abstract Factory' Design pattern by changing DefaultLogger: ");
MxI.$System.log();

const logger_factory = LoggerFactory.getSingleton();

const arrow_logger = logger_factory.createProduct(LgF.arrow_prefix_logger);
MxI.$System.setLogger(arrow_logger);
MxI.$System.log("Logger is now '" + arrow_logger.name + "'");
MxI.$System.resetLogger();

const timestamp_logger = logger_factory.createProduct(LgF.timestamp_prefix_logger);
MxI.$System.setLogger(timestamp_logger);
MxI.$System.log("Logger is now '" + timestamp_logger.name + "'");
MxI.$System.resetLogger();

const count_logger = logger_factory.createProduct(LgF.count_prefix_logger);
MxI.$System.setLogger(count_logger);
MxI.$System.log("Logger is now '" + count_logger.name + "'");
MxI.$System.resetLogger();

MxI.$System.resetLogger();

//--------------------------------------------------------------------------------------
// Factory Method: 
// Define an interface for creating an object, but let subclasses decide which class 
// to instantiate. Lets a class defer instantiation to subclasses.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Factory Method");

//--------------------------------------------------------------------------------------
// Builder
// Separates object construction from its representation
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Builder");
unit_test_substep = 0;

//--------------------------------------------------------------------------------------
// Singleton
// restricts the instantiation of a class to one object. This is useful when exactly one
// object is needed to coordinate actions across the system
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Singleton")

unit_test_substep = 0;


//=================================================================================
//=============================  Behavioral Patterns  =============================
//=================================================================================
MxI.$System.log("----------------------------------------");
unit_test_step++;
MxI.$System.log(unit_test_step + ". " + "Behavioral Patterns");

//--------------------------------------------------------------------------------------
// Observer
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Observer");

//--------------------------------------------------------------------------------------
// Iterator
// Provide a way to access the elements of an aggregate object sequentially without exposing 
// its underlying representation
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Iterator");

//--------------------------------------------------------------------------------------
// State
// Allow an object to alter its behavior when its internal state changes. 
// The object will appear to change its class. 
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". State");

//--------------------------------------------------------------------------------------
// Chain Of Responsability
// Avoid coupling the sender of a request to its receiver by giving more than one object a 
// chance to handle the request. Chain the receiving objects and pass the request along the 
// chain until an object handles it.
// @Source:  Elements of Reusable Object-Oriented Software 
// @Authors: Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Chain Of Responsability");

//--------------------------------------------------------------------------------------
// Visitor
// In Visitor pattern, we use a visitor class which changes the executing algorithm of an 
// element class. By this way, execution algorithm of element can vary as and when visitor
// varies. This pattern comes under behavior pattern category. As per the pattern, element
// object has to accept the visitor object so that visitor object handles the operation
// on the element object.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Visitor");

//--------------------------------------------------------------------------------------
// Memento
// Without violating encapsulation, capture and externalize an object's internal state so 
// that the object can be restored to this state later.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Memento");

//--------------------------------------------------------------------------------------
// Strategy
// Define a family of algorithms, encapsulate each one, and make them interchangeable. 
// Lets the algorithm vary independently from clients that use it
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Strategy");

//--------------------------------------------------------------------------------------
// Null Object
// An object with no referenced value or with defined neutral ("null") behavior
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Null Object");
MxI.$System.log("MxI.$Null:              %s", MxI.$Null);
MxI.$System.log("MxI.$isNull(MxI.$Null): %s", MxI.$isNull(MxI.$Null));

var null_node = NullNode.getSingleton();
MxI.$System.log("null_node:              %s", null_node);
MxI.$System.log("MxI.$isNull(null_node): %s", MxI.$isNull(null_node));
MxI.$System.log("Child Count:            %s", null_node.getChildCount());

unit_test_substep = 0;


//=================================================================================
//=============================  Structural Patterns  =============================
//=================================================================================
MxI.$System.log("----------------------------------------");
unit_test_step++;
MxI.$System.log(unit_test_step + ". " + "Structural Patterns");

//--------------------------------------------------------------------------------------
// Bridge
// Decouple an abstraction from its implementation so that the two can vary independently.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Bridge");

//--------------------------------------------------------------------------------------
// Adapter
// Convert the interface of a class into another interface clients expect. Lets classes work 
// together that couldn't otherwise because of incompatible interfaces.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Adapter");

//--------------------------------------------------------------------------------------
// Facade
// Provides a unified interface to a set of interfaces in a subsytem. Façade defines a 
// higher-level interface that makes the subsystem easier to use.
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Facade");

//--------------------------------------------------------------------------------------
// Decorator
// Attaches additional responsibilities to an object dynamically. Decorators provide a
// flexible alternative to subclassing for extending functionality
MxI.$System.log("----------");
unit_test_substep++;
MxI.$System.log(unit_test_step + "."  + unit_test_substep + ". Decorator");

unit_test_substep = 0;

MxI.$System.log("==================== End of Unit Test ====================");
MxI.$System.log;
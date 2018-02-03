//==============================================================
// test.js
// Purpose: Unit Test for 'design-patterns-api'
//          https://www.npmjs.com/package/design-patterns-api
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI                  = require('mixin-interface-api/src/mixin_interface_api.js').MxI; 

const IElement             = require('design-patterns-core-api/src/i_element.js').IElement;
const IAbstractFactory     = require('design-patterns-core-api/src/creational/i_abstract_factory.js').IAbstractFactory;
const ICreator             = require('design-patterns-core-api/src/creational/i_creator.js').ICreator;
const IBuilder             = require('design-patterns-core-api/src/creational/i_builder.js').IBuilder;

const IObserver            = require('design-patterns-core-api/src/behavioral/i_observer.js').IObserver;
const IObservable          = require('design-patterns-core-api/src/behavioral/i_observable.js').IObservable;
const IIterator            = require('design-patterns-core-api/src/behavioral/i_iterator.js').IIterator;
const ICollection          = require('design-patterns-core-api/src/behavioral/i_collection.js').ICollection;
const IState               = require('design-patterns-core-api/src/behavioral/i_state.js').IState;
const IStateContext        = require('design-patterns-core-api/src/behavioral/i_state_context.js').IStateContext;
const IHandler             = require('design-patterns-core-api/src/behavioral/i_handler.js').IHandler;
const IRequest             = require('design-patterns-core-api/src/behavioral/i_request.js').IRequest;
const IVisitor             = require('design-patterns-core-api/src/behavioral/i_visitor.js').IVisitor;
const IMemento             = require('design-patterns-core-api/src/behavioral/i_memento.js').IMemento;
const IOriginator          = require('design-patterns-core-api/src/behavioral/i_originator.js').IOriginator;
const ICareTaker           = require('design-patterns-core-api/src/behavioral/i_care_taker.js').ICareTaker;
const IStrategy            = require('design-patterns-core-api/src/behavioral/i_strategy.js').IStrategy;
const IStrategyContext     = require('design-patterns-core-api/src/behavioral/i_strategy_context.js').IStrategyContext;
const ICommand             = require('design-patterns-core-api/src/behavioral/i_command.js').ICommand;
const IInvoker             = require('design-patterns-core-api/src/behavioral/i_invoker.js').IInvoker;
const IReceiver            = require('design-patterns-core-api/src/behavioral/i_receiver.js').IReceiver;
const ITemplateMethod      = require('design-patterns-core-api/src/behavioral/i_template_method.js').ITemplateMethod;
const IMediator            = require('design-patterns-core-api/src/behavioral/i_mediator.js').IMediator;
const IColleague           = require('design-patterns-core-api/src/behavioral/i_colleague.js').IColleague;

const IImplementor         = require('design-patterns-core-api/src/structural/i_implementor.js').IImplementor;
const IAdapter             = require('design-patterns-core-api/src/structural/i_adapter.js').IAdapter;
const IAdaptee             = require('design-patterns-core-api/src/structural/i_adaptee.js').IAdaptee;
const IFacade              = require('design-patterns-core-api/src/structural/i_facade.js').IFacade;
const ICoreComponent       = require('design-patterns-core-api/src/structural/i_core_component.js').ICoreComponent;
const IDecorator           = require('design-patterns-core-api/src/structural/i_decorator.js').IDecorator;
const IComponent           = require('design-patterns-core-api/src/structural/i_component.js').IComponent;
const IComposite           = require('design-patterns-core-api/src/structural/i_composite.js').IComposite;
const ILeaf                = require('design-patterns-core-api/src/structural/i_leaf.js').ILeaf;
const ISubject             = require('design-patterns-core-api/src/structural/i_subject.js').ISubject;
const IProxy               = require('design-patterns-core-api/src/structural/i_proxy.js').IProxy;

const LoggerFactory        = require('./samples/creational/abstract_factory/logger_factory.js').LoggerFactory;
const LgF                  = require('./samples/creational/abstract_factory/logger_factory.js').LgF;
const NullNode             = require('./samples/behavioral/null_object/null_node.js').NullNode;


//==================== start of test.js ====================
var unit_test_step    = 0;
var unit_test_substep = 0;

var console_log_sink = MxI.$Log.addSink(new MxI.$ConsoleLogSink());
var file_log_sink    = MxI.$Log.addSink(new MxI.$FileLogSink('./log.txt'));

MxI.$Log.banner("Unit Test for 'design-patterns-api' package");

//=================================================================================
//=============================  Creational Patterns  =============================
//=================================================================================
unit_test_step++;

MxI.$Log.write(unit_test_step + ". " + "Creational Patterns");

//--------------------------------------------------------------------------------------
// Abstract Factory: Creates an instance of several families of classes
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Abstract Factory");
MxI.$isInterface(IElement);
MxI.$isInterface(IAbstractFactory);

MxI.$Log.write("Demonstrate 'Abstract Factory' Design pattern by changing DefaultLogger: ");

const logger_factory = LoggerFactory.getSingleton();

const arrow_logger = logger_factory.createElement(LgF.arrow_prefix_logger);
MxI.$Log.clearSinks();
MxI.$Log.addSink(arrow_logger);
MxI.$Log.write("Logger is now '" + arrow_logger.name + "'");

MxI.$Log.clearSinks();
const timestamp_logger = logger_factory.createElement(LgF.timestamp_prefix_logger);
MxI.$Log.addSink(timestamp_logger);
MxI.$Log.write("Logger is now '" + timestamp_logger.name + "'");

MxI.$Log.clearSinks();
const count_logger = logger_factory.createElement(LgF.count_prefix_logger);
MxI.$Log.addSink(count_logger);
MxI.$Log.write("Logger is now '" + count_logger.name + "'");

MxI.$Log.clearSinks();
MxI.$Log.addSink(console_log_sink);
MxI.$Log.addSink(file_log_sink);

//--------------------------------------------------------------------------------------
// Factory Method: 
// Define an interface for creating an object, but let subclasses decide which class 
// to instantiate. Lets a class defer instantiation to subclasses.
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Factory Method");

//--------------------------------------------------------------------------------------
// Builder
// Separates object construction from its representation
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Builder");
MxI.$isInterface(IBuilder);
unit_test_substep = 0;

//--------------------------------------------------------------------------------------
// Singleton
// restricts the instantiation of a class to one object. This is useful when exactly one
// object is needed to coordinate actions across the system
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Singleton");
MxI.$isInterface(MxI.$ISingleton);

unit_test_substep = 0;


//=================================================================================
//=============================  Behavioral Patterns  =============================
//=================================================================================
MxI.$Log.write("----------------------------------------");
unit_test_step++;
MxI.$Log.write(unit_test_step + ". " + "Behavioral Patterns");

//--------------------------------------------------------------------------------------
// Observer
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Observer");

//--------------------------------------------------------------------------------------
// Iterator
// Provide a way to access the elements of an aggregate object sequentially without exposing 
// its underlying representation
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Iterator");

//--------------------------------------------------------------------------------------
// State
// Allow an object to alter its behavior when its internal state changes. 
// The object will appear to change its class. 
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". State");

//--------------------------------------------------------------------------------------
// Chain Of Responsability
// Avoid coupling the sender of a request to its receiver by giving more than one object a 
// chance to handle the request. Chain the receiving objects and pass the request along the 
// chain until an object handles it.
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Chain Of Responsability");

//--------------------------------------------------------------------------------------
// Visitor
// In Visitor pattern, we use a visitor class which changes the executing algorithm of an 
// element class. By this way, execution algorithm of element can vary as and when visitor
// varies. This pattern comes under behavior pattern category. As per the pattern, element
// object has to accept the visitor object so that visitor object handles the operation
// on the element object.
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Visitor");

//--------------------------------------------------------------------------------------
// Memento
// Without violating encapsulation, capture and externalize an object's internal state so 
// that the object can be restored to this state later.
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Memento");

//--------------------------------------------------------------------------------------
// Strategy
// Define a family of algorithms, encapsulate each one, and make them interchangeable. 
// Lets the algorithm vary independently from clients that use it
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Strategy");

//--------------------------------------------------------------------------------------
// Command
// The Command Pattern encapsulates a request as an object, thereby letting you 
// parameterize other objects with different requests, queue or log requests, 
// and support undoable operations
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Command");
MxI.$isInterface(ICommand);
MxI.$isInterface(IInvoker);
MxI.$isInterface(IReceiver);

//--------------------------------------------------------------------------------------
// Mediator
// 
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Mediator");
MxI.$isInterface(IMediator);
MxI.$isInterface(IColleague);

//--------------------------------------------------------------------------------------
// Template Method
// Define the skeleton of an algorithm in an operation, deferring somesteps to subclasses. 
// Template Method lets subclasses redefinecertain steps of an algorithm without changing
// the algorithm'sstructure.
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Template Method");
MxI.$isInterface(ITemplateMethod);

//--------------------------------------------------------------------------------------
// Null Object
// An object with no referenced value or with defined neutral ("null") behavior
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Null Object");
MxI.$Log.write("MxI.$Null:              %s", MxI.$Null);
MxI.$Log.write("MxI.$isNull(MxI.$Null): %s", MxI.$isNull(MxI.$Null));

var null_node = NullNode.getSingleton();
MxI.$Log.write("null_node:              %s", null_node);
MxI.$Log.write("MxI.$isNull(null_node): %s", MxI.$isNull(null_node));
MxI.$Log.write("Child Count:            %s", null_node.getChildCount());

unit_test_substep = 0;


//=================================================================================
//=============================  Structural Patterns  =============================
//=================================================================================
MxI.$Log.write("----------------------------------------");
unit_test_step++;
MxI.$Log.write(unit_test_step + ". " + "Structural Patterns");

//--------------------------------------------------------------------------------------
// Bridge
// Decouple an abstraction from its implementation so that the two can vary independently.
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Bridge");
MxI.$isInterface(IImplementor);

//--------------------------------------------------------------------------------------
// Adapter
// Convert the interface of a class into another interface clients expect. Lets classes work 
// together that couldn't otherwise because of incompatible interfaces.
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Adapter");

//--------------------------------------------------------------------------------------
// Facade
// Provides a unified interface to a set of interfaces in a subsytem. Façade defines a 
// higher-level interface that makes the subsystem easier to use.
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Facade");

//--------------------------------------------------------------------------------------
// Decorator
// Attaches additional responsibilities to an object dynamically. Decorators provide a
// flexible alternative to subclassing for extending functionality
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Decorator");
MxI.$isInterface(IDecorator);
MxI.$isInterface(ICoreComponent);

//--------------------------------------------------------------------------------------
// Composite
// allows you to compose objects into tree structures to represent whole-part hierarchies. 
// Composite lets clients treat individual objects and composition of objects uniformly
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Composite")
MxI.$isInterface(IComponent);
MxI.$isInterface(IComposite);
MxI.$isInterface(ILeaf);

//--------------------------------------------------------------------------------------
// Proxy
// Provides a surrogate or placeholder for another object to control access to it
MxI.$Log.write("----------");
unit_test_substep++;
MxI.$Log.write(unit_test_step + "."  + unit_test_substep + ". Proxy")
MxI.$isInterface(ISubject);
MxI.$isInterface(IProxy);

unit_test_substep = 0;

MxI.$Log.banner("End of Unit Test", true);
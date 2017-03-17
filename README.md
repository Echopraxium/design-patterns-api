# design-patterns-api

Implementation of [_Design Patterns_](http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf) as Interface classes.
>These are early releases (until 1.0.0 version). More to come shortly as I will use this package for my own projects anyway [|8^)>  

ATM this framework provides 16 out of the 23 'Original Patterns' described by the _Gang of Four_ in their 1995's book (_Elements of Reusable Object-Oriented Software_). There are further design patterns described later (e.g. _Patterns of Enterprise Architecture Application_ wrtiien by Martin Fowler)

>There are many online documents about _Design Patterns_. An important part of this project was to mine them and propose for each pattern the 'least worst' design (from my perspective). My proposals should just be considered as an ongoing work (for which your feedback is welcome) and certainly not a reference. Thus I advise you to check and evaluate by yourself these  documents (I have gathered them in _References_ paragraph) to check it they fits your learning curve and design issues.
  
Changelog for Release 0.2.0 :
* Design Issue: across the released design patterns, many class interfaces where in need of a service like `execute()`. In previous releases, my design choice was to find 'alternative names' (like `doIt()`, `apply()`, `operation()`, etc...), it was in fact a clumsy solution (confusing semantic and loss of genericity across patterns).
* Design Fix: 2 new base interfaces released, their purpose is to factorize a service and delegates its semantic to child interfaces depending on their role (participant within their Design Pattern)
* New base interface class 1/2: [IDelegate](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_delegate.js)    which delegates the semantic of 'apply()' service to its child interfaces ('IImplementor', 'IStrategy' and 'IReceiver')
* New base interface class 2/2: [IAction](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_action.js) which delegates the semantic of 'execute()' service to its child interfaces ('IComponent', 'IDecorator', 'ICommand' and 'IInvoker')

## Available Patterns

>Naming conventions: for any given interface class, its name is written with _PascalCase_ convention (e.g. `IAbstractFactory`) and its source code uses _snake_case_ convention (e.g. `i_abstract_factory.js`)

>Why `...args` ? Thanks to the _rest parameter_ feature of javascript es6 (`...args`), most interface services accept optional and variable number of arguments.

>Why all these `xxx_id` arguments ? This is a design choice motivated by 2 design intents. The first design intent is when the service call is delegated or propagated (e.g. 'request_id' argument is propagated in _Adapter_ when IAdapter.request() calls IAdaptee.specificRequest()). The second design intent is to avoid _unnecessary class proliferation_ by using this xxx_id argument as a way to make the call more specific (e.g. 'request_id' argument when calling IHandler.handleRequest() of _Chain Of Responsability_)

### Creational
* _Abstract Factory_: [IAbstractFactory](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_abstract_factory.js), [IProduct](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_product.js)
* _Factory Method_: [I_Creator](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_creator.js), [IProduct](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_product.js)
* _Builder_: [IBuilder](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_builder.js), [IProduct](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_product.js)
* _Singleton_: [MxI.$ISingleton](https://github.com/Echopraxium/mixin-interface-api/blob/master/README.md#singleton-feature)

### Behavioral
* _Observer_: [IObserver](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_observer.js) and [ISubject](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_subject.js)
* _Iterator_: [IIterator](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_iterator.js), [ICollection](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_collection.js)
* _State_: [IState](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_state.js), [IStateContext](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_state_context.js)
* _Chain of Responsability_: [IHandler](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_handler.js), [IContext](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_context.js)
* _Visitor_: [IVisitor](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_visitor.js), [IElement](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_element.js)
* _Memento_: [IMemento](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_memento.js), [IOriginator](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_originator.js), [ICareTaker](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_care_taker.js)
* _Strategy_: [IStrategy](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_strategy.js), [IStrategyContext](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_strategy_context.js)
* _Command_ (new): [ICommand](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_command.js), [IInvoker](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_invoker.js), [IReceiver](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_receiver.js)
* _Null Object_: [MxI.$INullObject](https://github.com/Echopraxium/mixin-interface-api/blob/master/README.md#null-object-feature). See also [Why NULL is bad ?](http://www.yegor256.com/2014/05/13/why-null-is-bad.html)

### Structural
* _Bridge_: [IImplementor](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_implementor.js)
* _Adapter_: [IAdapter](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_adapter.js), [IAdaptee](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_adaptee.js)
* _Facade_: [IFacade](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_facade.js)
* _Decorator_: [IDecorator](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_decorator.js), [IComponent](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_component.js)


## How to implement a Design Pattern
A given _Design Pattern_ is composed of one or more _participants_, this is very much like _Role(s)_ in a play. Within `design-patterns-api` project, each participant is implemented as an _interface classs_. Thus, in order to _implement a Design Pattern_ you must implement the _interface class(es)_. Please refer to [How to code an Implementation class](https://github.com/Echopraxium/mixin-interface-api/blob/master/README.md#how-to-code-an-implementation-class) in the documentation of `mixin-interface-api` package.

### Code Sample: _LoggerFactory_
_LoggerFactory_ shows how to delegate the instanciation of a _Logger_ (a more flexible way to log traces than `console.log`) by implementing the _Abstract Factory_ design pattern.

 >See source code in: `./src/implementation_samples/creational`. It is demonstrated in `./test.js` Unit Test. There are 4 files in this code sample (`logger_factory.js`, `arrow_prefix_logger.js`, `timestamp_prefix_logger.js` and  `count_prefix_logger.js`), and the client code which uses them is in `./test.js` (Unit Test).


#### Installation and Usage:
```bash
npm install design-patterns-api -S
```

## How to run the Unit Test
#### Step 1: Install Prerequisite Tools
Install [_NodeJS_](https://nodejs.org/en/) and [_Git_](https://git-scm.com/)

#### Step 2: Clone the 'design-patterns-api' repository locally
Open a command shell then enter the following commands:
```bash
git clone git://github.com/Echopraxium/design-patterns-api
cd design-patterns-api
npm update
```

#### Step 3: Run the Unit Test
Now enter the following command:
```bash
node test.js
```

You should get the following output:
```bash
============================================================
======== Unit Test for 'design-patterns-api' package =======
============================================================
1. Creational Patterns
----------
1.1. Abstract Factory
Demonstrate 'Abstract Factory' Design pattern by changing DefaultLogger:

==> Logger is now 'arrow_prefix_logger_0'
[09:39:22 AM] Logger is now 'timestamp_prefix_logger_0'
[0] Logger is now 'count_prefix_logger_0'
----------
1.2. Factory Method
----------
1.3. Builder
----------
1.1. Singleton
----------------------------------------
2. Behavioral Patterns
----------
2.1. Observer
----------
2.2. Iterator
----------
2.3. State
----------
2.4. Chain Of Responsability
----------
2.5. Visitor
----------
2.6. Memento
----------
2.7. Strategy
----------
2.8. Command
----------
2.9. Null Object
MxI.$Null:              MxI.NULL
MxI.$isNull(MxI.$Null): true
null_node:              null_node_0
MxI.$isNull(null_node): true
Child Count:            0
----------------------------------------
3. Structural Patterns
----------
3.1. Bridge
----------
3.2. Adapter
----------
3.3. Facade
----------
3.4. Decorator
===================== End of Unit Test =====================
```

## References
* _Software Design Pattern_ (Wikipedia)    
  https://en.wikipedia.org/wiki/Software_design_pattern
* _Why NULL is Bad ?_    
  http://www.yegor256.com/2014/05/13/why-null-is-bad.html
* Design Patterns and Anti-Patterns, Love and Hate  
  http://www.yegor256.com/2016/02/03/design-patterns-and-anti-patterns.html
* _Behavioral Pattern_    
  https://en.wikipedia.org/wiki/Behavioral_pattern
* _Design Patterns in Java Tutorial_  
  https://www.tutorialspoint.com/design_pattern/
* _SourceMaking / Design Patterns_    
  https://sourcemaking.com/design_patterns
* _Enginyeria del Software I - Curs 2006-2007_    
  http://ima.udg.edu/~sellares/EINF-ES1/
* _OODesign (Object Oriented Design)_   
  http://www.oodesign.com/
* _MacDonald Land / Design Patterns Quick Reference_   
  http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf
* _Wikipedia / Software design pattern_    
  https://en.wikipedia.org/wiki/Software_design_pattern
* _Design Patterns_  
  O. Boissier, G. Picard SMA/G2I/ENS Mines Saint-Etienne
  http://www.emse.fr/~picard/cours/2A/DesignPatterns.pdf
* _Patterns of Enterprise Application Architecture_ (2002)  
  Martin Fowler - Addison-Wesley  
  https://www.martinfowler.com/eaaCatalog/
* _Elements of Reusable Object-Oriented Software_ (1995)  
  Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John

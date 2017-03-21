# design-patterns-api

Implementation of [_Design Patterns_](http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf) as Interface classes.
>These are early releases (until 1.0.0 version). More to come shortly as I will use this package for my own projects anyway [|8^)>  

ATM this framework provides 19 out of the 23 'Original Patterns' described by the _Gang of Four_ in their 1995's book (_Elements of Reusable Object-Oriented Software_). There are further design patterns described later (e.g. _Patterns of Enterprise Architecture Application_ wrtiien by Martin Fowler)

>There are many online documents about _Design Patterns_. An important part of this project was to mine them and propose for each pattern the 'least worst' design (from my perspective). My proposals should just be considered as an ongoing work (for which your feedback is welcome) and certainly not a reference. Thus I advise you to check and evaluate by yourself these  documents (I have gathered them in _References_ paragraph) to check it they fits your learning curve and design issues.

## Changelog for Release 0.3.0
* New pattern released: _Mediator_
* Design Issue: the 'getId()' service seems to be generic enough to be factorized in a base interface class. But then this creates a constrait for the implementations of the child interfaces: they will be committed to implement this service even if it does't make sense in the application context.
* Design Fix: factorize 'getId()' in a base interface class (_IElement_, see next changelog item) but return the 'Default Null Object' ('MxI.$Null') in the 'Fallback implementation' instead of raising an error if the 'getId()' is not overridden by the implementation class. This breaks the interface axiom ("_an interface class is a pure abstract class_") but on the other hand an interface is mostly a 'contract' by which the implementation class commits to provide the services defined by the interface. Thus by providing a functional fallback implementation, this allows implementation classes of child interfaces (e.g. 'IComponent') to be relieved from the constraint to implement 'getId()'.
* New base interface class 1/2: [IElement](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_element.js) which delegates the semantic of `getId()` service to its child interfaces ('IProduct', 'IRequest', 'IAction' and 'IAbstractFactory')
* New base interface class 2/2: [ICoreHandler](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_core_handler.js) which delegates the semantic of `handleRequest()` service to its child interfaces ('IHandler' and 'IMediator')
* Documentation enhancement: links to detailed description for each of the released patterns
* Comment updates in the source code of _Interface classes_ to improve usability

## Changelog for Release 0.2.3  
* New pattern released: _Composite_
* Refactoring of _Decorator_ pattern: _Component_ participant in _Decorator_ pattern replaced by _Core Component_ ([ICoreComponent](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_core_component.js)). This allows to 'free' the 'Component' name (IComponent) which is more legitimate as part of the _Composite_ pattern
* Change in _IAction_ base interface: its child interfaces are now ('ICoreComponent', 'IDecorator', 'ICommand', 'IInvoker' and 'ITemplateMethod')

## Changelog for Release 0.2.1  
* New patterns released: _Command_ and _Template Method_
* Design Issue: across the released design patterns, many class interfaces where in need of a service like `execute()`. In previous releases, my design choice was to find 'alternative names' (like `doIt()`, `apply()`, `operation()`, etc...), it was in fact a clumsy solution (confusing semantic and loss of genericity across patterns).
* Design Fix: two new base interfaces released, their purpose is to factorize a service and delegates its semantic to child interfaces depending on their role (participant within their Design Pattern)
* New base interface class 1/2: [IDelegate](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_delegate.js)    which delegates the semantic of `apply()` service to its child interfaces ('IImplementor', 'IStrategy' and 'IReceiver')
* New base interface class 2/2: [IAction](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_action.js) which delegates the semantic of `execute()` service to its child interfaces ('ICoreComponent', 'IDecorator', 'ICommand', 'IInvoker' and 'ITemplateMethod')
* Minor documentation change 1/2: links to reference documents for _Command_ and _Factory Method_
* Minor documentation change 2/2: rewrite of the `xxx_id` argument purpose

## Available Patterns

>Naming conventions: for any given interface class, its name is written with _PascalCase_ convention (e.g. `IAbstractFactory`) and its source code uses _snake_case_ convention (e.g. `i_abstract_factory.js`)

>Why `...args` ? Thanks to the _rest parameter_ feature of javascript es6 (`...args`), most interface services accept optional and variable number of arguments.

>What is the purpose of `xxx_id` arguments ? This is a design choice motivated by 2 design intents. The first is when the service call is  propagated (e.g. 'request_id' argument is propagated by _Adapter_ when `IAdapter.request()` calls `IAdaptee.specificRequest()`). The second is to avoid _unnecessary class proliferation_ by using `xxx_id` argument as a way to make the call more specific (e.g. 'request_id' argument when calling `IHandler.handleRequest()` within the _Chain Of Responsability_ pattern)

### Creational
* _Abstract Factory_: [_IAbstractFactory_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_abstract_factory.js), [_IProduct_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_product.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Abstract Factory](http://ima.udg.edu/~sellares/EINF-ES1/AbstractFactoryToni.pdf) for a detailed description.  
* _Factory Method_: [_I_Creator_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_creator.js), [IProduct](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_product.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Factory Method](http://ima.udg.edu/~sellares/EINF-ES1/FactoryToni.pdf) for a detailed description.  
* _Builder_: [_IBuilder_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_builder.js), [_IProduct_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_product.js). Refer to [BlackWasp - Builder design pattern](http://www.blackwasp.co.uk/Builder.aspx) for a detailed description.       
* _Singleton_: [_MxI.$ISingleton_](https://github.com/Echopraxium/mixin-interface-api/blob/master/README.md#singleton-feature). refer to [](http://ima.udg.edu/~sellares/EINF-ES1/SingletonToni.pdf) for a detailed description.  

### Behavioral
* _Observer_: [_IObserver_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_observer.js) and [_ISubject_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_subject.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Observer](http://ima.udg.edu/~sellares/EINF-ES1/ObserverToni.pdf) for a detailed description.    
* _Iterator_: [_IIterator_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_iterator.js), [_ICollection_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_collection.js). Refer to [Tutorials Point - Design Patterns: Iterator pattern](https://www.tutorialspoint.com/design_pattern/iterator_pattern.htm) for a detailed description.    
* _State_: [_IState_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_state.js), [_IStateContext_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_state_context.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - State](http://ima.udg.edu/~sellares/EINF-ES1/StateToni.pdf) for a detailed description.  
* _Chain of Responsability_: [_IHandler_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_handler.js), [_IRequest_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_request.js). Refer to [OOODesign - Chain of Responsability](http://www.oodesign.com/chain-of-responsibility-pattern.html) for a detailed description.  
* _Visitor_: [_IVisitor_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_visitor.js), [_IElement_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_element.js). Refer to [Tutorials Point - Design Patterns: Visitor pattern](https://www.tutorialspoint.com/design_pattern/visitor_pattern.htm) for a detailed description.  
* _Memento_: [_IMemento_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_memento.js), [_IOriginator_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_originator.js), [_ICareTaker_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_care_taker.js). Refer to [Tutorials Point - Design Patterns: Memento pattern](https://www.tutorialspoint.com/design_pattern/memento_pattern.htm) for a detailed description.   
* _Strategy_: [_IStrategy_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_strategy.js), [_IStrategyContext_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_strategy_context.js). Refer to [Tutorials Point - Design Patterns: Strategy pattern](https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm) for a detailed description.
* _Command_: [_ICommand_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_command.js), [_IInvoker_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_invoker.js), [_IReceiver_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_receiver.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Command](http://ima.udg.edu/~sellares/EINF-ES1/CommandToni.pdf) for a detailed description.    
* _Template Method_: [_ITemplateMethod_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_template_method.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Template Method](http://ima.udg.edu/~sellares/EINF-ES1/TemplateMethodToni.pdf) for a detailed description.    
* _Mediator_ (new): [_IMediator_](https://github.com/Echopraxium/mixin-interface-api/blob/master/src/behavioral/i_mediator.js), [_IColleague_](https://github.com/Echopraxium/mixin-interface-api/blob/master/src/behavioral/i_colleague.js), [_IRequest_](https://github.com/Echopraxium/mixin-interface-api/blob/master/src/behavioral/i_request.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Mediator](http://ima.udg.edu/~sellares/EINF-ES1/MediatorToni.pdf) for a detailed description.    
* _Null Object_: [_MxI.$INullObject_](https://github.com/Echopraxium/mixin-interface-api/blob/master/README.md#null-object-feature). Refer to [Tutorials Point - Design Patterns: Null Object pattern](https://www.tutorialspoint.com/design_pattern/null_object_pattern.htm) for a detailed description.

### Structural
* _Bridge_: [_IImplementor_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_implementor.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Bridge](http://ima.udg.edu/~sellares/EINF-ES1/BridgeToni.pdf) for a detailed description.  
* _Adapter_: [_IAdapter_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_adapter.js), [_IAdaptee_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_adaptee.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Adapter](http://ima.udg.edu/~sellares/EINF-ES1/AdapterToni.pdf) for a detailed description.      
* _Facade_: [_IFacade_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_facade.js). Refer to [Tutorials Point - Design Patterns: Memento pattern](https://www.tutorialspoint.com/design_pattern/facade_pattern.htm) for a detailed description.     
* _Decorator_ (changed): [_IDecorator_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_decorator.js), [_ICoreComponent_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_core_component.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Decorator](http://ima.udg.edu/~sellares/EINF-ES1/DecoratorToni.pdf) for a detailed description.   
* _Composite_: [_IComponent_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_component.js),  [_IComposite_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_decorator.js), [_ILeaf_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_leaf.js), Refer to [Enginyeria del Software I -
Curs 2006-2007 - Composite](http://ima.udg.edu/~sellares/EINF-ES1/CompositeToni.pdf) for a detailed description.   


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
[10:29:39 AM] Logger is now 'timestamp_prefix_logger_0'
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
2.9. Template Method
----------
2.10. Null Object
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

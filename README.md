# design-patterns-api

Implementation of [_Design Patterns_](http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf) as Interface classes.
>These are early releases (until 1.0.0 version). More to come shortly as I will use this package for my own projects anyway [|8^)>  

Only a subset of the Design Patterns are released ATM

>There are many sources regarding _Design Patterns_. The reference document is the book "_Elements of Reusable Object-Oriented Software_", but I had to search more explanations and samples for this project. Thus I advise you to check by yourself my sources (they are listed in **References** paragraph at the end of this document) and of course your feedback is welcome.
  
Changelog since 0.0.11 :
* Code Sample: implementation of _Abstract Factory_ pattern. It shows how to delegate the instanciation of a _Logger_ by implementing a _LoggerFactory_.

 >See source code here: `./src/implementation_samples/creational`. It is demonstrated in `./test.js` Unit Test.
* README.md enhancement: how to implement a participant (i.e. interface class) of a given Design Pattern
* New patterns relased: _Memento_
* _Builder_: setPart() replaced by makePart() and getResult() replaced by getProduct()
* _Abstract Factory_: signature of createProduct() changed from createProduct(...args) to createProduct(product_id, ...args)

## Available Patterns

>Naming conventions: for any given interface class, its name is written with _PascalCase_ convention (e.g. `IAbstractFactory`) and its source code uses _snake_case_ convention (e.g. `i_abstract_factory.js`)

>Why `...args` ? Thanks to the _rest parameter_ feature of javascript es6 (`...args`), most interface services accept optional and variable number of arguments.

>Why all these `xxx_id` arguments ? This is a design choice motivated by 2 design intents. The first design intent is when the service call is delegated or propagated (e.g. 'request_id' argument is propagated in _Adapter_ when IAdapter.request() calls IAdaptee.specificRequest()). The second design intent is to avoid _unnecessary class proliferation_ by using this xxx_id argument as a way to make the call more specific (e.g. 'request_id' argument when calling IHandler.handleRequest() of _Chain Of Responsability_)

### Creational
* _Abstract Factory_ (changed): IAbstractFactory, IProduct
* _Factory Method_: ICreator, IProduct
* _Builder_: IBuilder, IProduct

### Behavioral
* _Observer_: IObserver and ISubject
* _Iterator_: IIterator
* _State_: IState, IContext
* _Chain of Responsability_: IHandler, IContext
* Visitor: IVisitor, IElement
* Memento (new): IMemento, IOriginator, ICareTaker

### Structural
* _Bridge_: IImplementor
* _Adapter_: IAdapter, IAdaptee

#### Installation and Usage:
```bash
npm install design-patterns-api -S
```

## How to implement a participant in a Design Pattern
Each participant is implemented as an _interface classs_. Thus, in order to implement a Design Pattern, you must implement all these _interface class(es)_. Please refer to [How to code an Implementation class](https://github.com/Echopraxium/mixin-interface/blob/master/README.md#how-to-code-an-implementation-class) in the documentation of `mixin-interface` package.


## Quickstart
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
=================================================================
========== Unit Test for 'design-patterns-api' package ==========
=================================================================
1. Creational Patterns
----------
1.1. Abstract Factory
'IAbstractFactory'          is an interface ? true
Demonstrate 'Abstract Factory' Design pattern by changing DefaultLogger:

==> Logger is now 'arrow_prefix_logger_0'

[18:32:13 PM] Logger is now 'timestamp_prefix_logger_0'

[0] Logger is now 'count_prefix_logger_0'

----------
1.2. Factory Method
'ICreator'                  is an interface ? true
'IProduct'                  is an interface ? true
----------
1.3. Builder
'IBuilder'                  is an interface ? true
----------------------------------------
2. Behavioral Patterns
----------
2.1. Observer
'IObserver'                 is an interface ? true
'ISubject'                  is an interface ? true
----------
2.2. Iterator
'IIterator'                 is an interface ? true
----------
2.3. State
'IState'                    is an interface ? true
'IContext'                  is an interface ? true
----------
2.4. Chain Of Responsability
'IHandler'                  is an interface ? true
'IRequest'                  is an interface ? true
----------
2.5. Visitor
'IVisitor'                  is an interface ? true
'IElement'                  is an interface ? true
----------
2.6. Memento
'IMemento'                  is an interface ? true
'IOriginator'               is an interface ? true
'ICareTaker'                is an interface ? true
----------------------------------------
3. Structural Patterns
----------
3.1. Bridge
'IImplementor'              is an interface ? true
----------
3.2. Adapter
'IAdapter'                  is an interface ? true
'IAdaptee'                  is an interface ? true
==================== End of Unit Test ====================
```

## References
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
* _Design Pattern Formalization Techniques_  
* _Design Patterns_  
  O. Boissier, G. Picard SMA/G2I/ENS Mines Saint-Etienne
  http://www.emse.fr/~picard/cours/2A/DesignPatterns.pdf
* _Elements of Reusable Object-Oriented Software_    
  Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John
  http://ima.udg.edu/~sellares/EINF-ES1/ObserverToni.pdf
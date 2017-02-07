# design-patterns-api

Implementation of [_Design Patterns_](https://en.wikipedia.org/wiki/Software_design_pattern) as Interface classes.
>These are early releases (until 1.0.0 version). More to come shortly as I will use this package for my own projects anyway [|8^)>  

Only _Creational and Behavioral Patterns_ provided ATM

>There are many sources regarding _Design Patterns_. Even if the reference is _Elements of Reusable Object-Oriented Software_, I had to search more explanations and samples for this project. Thus I advise you to check by yourself my sources (they are listed in **References** paragraph at the end of this document) and of course your feedback is welcome.
  
Changelog since 0.0.9 :
* _Factory Method_ and _Visitor_ patterns added
* Update of source code comments: more consistency and explanations (pattern purpose)

## Available Patterns

### Creational
* Abstract Factory
* Factory Method (new)
* Builder
 
### Behavioral
* Observer
* Iterator
* State
* Chain of Responsability
* Visitor (new)

#### Installation and Usage:
```bash
npm install design-patterns-api -S
```

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
==================== End of Unit Test ====================
```

## References
* SourceMaking / Design Patterns
  https://sourcemaking.com/design_patterns
* Enginyeria del Software I - Curs 2006-2007
  http://ima.udg.edu/~sellares/EINF-ES1/
* OODesign (Object Oriented Design)
  http://www.oodesign.com/
* MacDonald Land / Design Patterns Quick Reference
  http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf
* Wikipedia / Software design pattern  
  https://en.wikipedia.org/wiki/Software_design_pattern
* Design Patterns
  O. Boissier, G. Picard SMA/G2I/ENS Mines Saint-Etienne
  http://www.emse.fr/~picard/cours/2A/DesignPatterns.pdf
* Elements of Reusable Object-Oriented Software  
  Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John
  http://ima.udg.edu/~sellares/EINF-ES1/ObserverToni.pdf
# design-patterns-api

Implementation of [_Design Patterns_](https://en.wikipedia.org/wiki/Software_design_pattern) as Interface classes.
>These are early releases (until 1.0.0 version). More to come shortly as I will use this package for my own projects anyway [|8^)>  

Only _Creational and Behavioral Patterns_ provided ATM

>There are many sources regarding _Design Patterns_. Even if the reference is _Elements of Reusable Object-Oriented Software_, I had to search more explanations and samples for this project. Thus I advise you to check by yourself my sources (they are listed in **References** paragraph at the end of this document) and of course your feedback is welcome.
  
Changelog since 0.0.7:
* _Chain of Responsability_ pattern added
* **References** paragraph (at the end of this document) which lists the sources that I use for this project
* Update of source code comments

## Available Patterns

### Creational
* Abstract Factory
* Builder
 
### Behavioral
* Observer
* Iterator
* State
* Chain of Responsability (New)

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
1.2. Builder
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
==================== End of Unit Test ====================
```

## References
* Elements of Reusable Object-Oriented Software  
  Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John
* Wikipedia / Software design pattern  
  https://en.wikipedia.org/wiki/Software_design_pattern
* SourceMaking / Design Patterns
  https://sourcemaking.com/design_patterns
* OODesign (Object Oriented Design)
  http://www.oodesign.com/
* MacDonald Land / Design Patterns Quick Reference
  http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf
* Design Patterns
  O. Boissier, G. Picard SMA/G2I/ENS Mines Saint-Etienne
  http://www.emse.fr/~picard/cours/2A/DesignPatterns.pdf
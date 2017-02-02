# design-patterns-api

Implementation of [_Design Patterns_](https://en.wikipedia.org/wiki/Software_design_pattern) as Interface classes.
>This is an early release. More to come shortly as I will use this package for my own projects anyway [|8^)>  

>Only _Creational and Behavioral Patterns_ provided ATM (as _interface classes_)

## Available Patterns

### Creational
* Abstract Factory
* Builder
 
### Behavioral
* Observer

#### Installation and Usage:
```bash
npm install design-patterns-api -S
```

## Quickstart
#### Step 1: Install Prerequisite Tools
Install [_NodeJS_](https://nodejs.org/en/) and [_Git_](https://git-scm.com/)

#### Step 2: Clone the mixin-interface repository locally
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
---------- Unit Test for 'design-patterns-api' package ----------
1. Creational Patterns
----------
1.1. Abstract Factory
'IAbstractFactory'          is an interface ? true
----------
1.2. Builder
'IBuilder'                  is an interface ? true
----------
1.3. Factory Method
'IFactoryMethod'            is an interface ? true
----------
1.4. Prototype
'IPrototype'                is an interface ? true
----------
1.5. Object Pool
'IObjectPool'               is an interface ? true
---------- End of Unit Test ----------
```
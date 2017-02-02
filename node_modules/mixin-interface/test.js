//==============================================================
// test.js
// Purpose: Unit Test for the 'mixin-interface' npm package
//          https://www.npmjs.com/package/mixin-interface
// Project: 'mixin-interface' package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const mixin_interface   = require('./src/mixin_interface.js');
const MxI               = mixin_interface.MxI;
const ILifeForm         = require('./src/test_classes/i_life_form.js').ILifeForm;
const IAnimal           = require('./src/test_classes/i_animal.js').IAnimal;
const IMammal           = require('./src/test_classes/i_mammal.js').IMammal;
const IFish             = require('./src/test_classes/i_fish.js').IFish;
const IBird             = require('./src/test_classes/i_bird.js').IBird;

const Animal            = require('./src/test_classes/animal.js').Animal;
const Cat               = require('./src/test_classes/cat.js').Cat;
const FlyingFish        = require('./src/test_classes/flying_fish.js').FlyingFish;

const $StarPrefixLogger = require('./src/test_classes/star_prefix_logger.js').$StarPrefixLogger;

//==================== start of test.js ====================
var unit_test_step = 0;

MxI.$System.log();
MxI.$System.log("---------- Unit Test for 'mixin-interface' package ----------");
unit_test_step++;
var an_animal_0 = new Animal();
MxI.$System.log(unit_test_step + ".Instance of 'Animal' created: " + an_animal_0.name);
MxI.$System.log(an_animal_0.name + " is a 'MxI.$Object'    ?   " + MxI.$isInstanceOf(MxI.$Object, an_animal_0));
MxI.$System.log(an_animal_0.name + " is a 'ILifeForm' ?        " + MxI.$isInstanceOf(ILifeForm,   an_animal_0));
MxI.$System.log(an_animal_0.name + " is a 'Animal' ?           " + MxI.$isInstanceOf(Animal,      an_animal_0));
MxI.$System.log(an_animal_0.name + " is a 'IAnimal' ?          " + MxI.$isInstanceOf(IAnimal,     an_animal_0));

MxI.$System.log(an_animal_0.name + " is a 'IMammal' ?          " + MxI.$isInstanceOf(IMammal,     an_animal_0));

MxI.$System.log(an_animal_0.name + " is a 'IBird' ?            " + MxI.$isInstanceOf(IBird,       an_animal_0));
MxI.$System.log(an_animal_0.name + " is a 'IFish' ?            " + MxI.$isInstanceOf(IFish,       an_animal_0));
an_animal_0.run();
an_animal_0.live();


console.log("----------");
unit_test_step++;
var a_cat = new Cat();
MxI.$System.log(unit_test_step + ". Instance of 'Cat' created: " + a_cat.name);
MxI.$System.log(a_cat.name + " is a 'MxI.$Object' ? " + MxI.$isInstanceOf(MxI.$Object, a_cat));
MxI.$System.log(a_cat.name + " is a 'Animal' ?      " + MxI.$isInstanceOf(Animal,      a_cat));
MxI.$System.log(a_cat.name + " is a 'Cat' ?         " + MxI.$isInstanceOf(Cat,         a_cat));
MxI.$System.log(a_cat.name + " is a 'ILifeForm' ?   " + MxI.$isInstanceOf(ILifeForm,   a_cat));
MxI.$System.log(a_cat.name + " is a 'IAnimal' ?     " + MxI.$isInstanceOf(IAnimal,     a_cat));
MxI.$System.log(a_cat.name + " is a 'IMammal' ?     " + MxI.$isInstanceOf(IMammal,     a_cat));
MxI.$System.log(a_cat.name + " is a 'IBird' ?       " + MxI.$isInstanceOf(IBird,       a_cat));
MxI.$System.log(a_cat.name + " is a 'IFish' ?       " + MxI.$isInstanceOf(IFish,       a_cat));
a_cat.run();
a_cat.suckle();
a_cat.live();

MxI.$System.log("----------");
unit_test_step++;
var a_flying_fish = new FlyingFish();
MxI.$System.log(unit_test_step + ". Instance of 'FlyingFish' created: " + a_flying_fish.name);
MxI.$System.log(a_flying_fish.name + " is a 'MxI.$Object' ? " + MxI.$isInstanceOf(MxI.$Object, a_flying_fish));
MxI.$System.log(a_flying_fish.name + " is a 'Animal' ?      " + MxI.$isInstanceOf(Animal,      a_flying_fish));
MxI.$System.log(a_flying_fish.name + " is a 'FlyingFish' ?  " + MxI.$isInstanceOf(FlyingFish,  a_flying_fish));
MxI.$System.log(a_flying_fish.name + " is a 'ILifeForm' ?   " + MxI.$isInstanceOf(ILifeForm,   a_flying_fish));
MxI.$System.log(a_flying_fish.name + " is a 'IAnimal' ?     " + MxI.$isInstanceOf(IAnimal,     a_flying_fish));
MxI.$System.log(a_flying_fish.name + " is a 'IBird' ?       " + MxI.$isInstanceOf(IBird,       a_flying_fish));
MxI.$System.log(a_flying_fish.name + " is a 'IFish' ?       " + MxI.$isInstanceOf(IFish,       a_flying_fish));
MxI.$System.log(a_flying_fish.name + " is a 'IMammal' ?     " + MxI.$isInstanceOf(IMammal,     a_flying_fish));
a_flying_fish.fly();
a_flying_fish.swim();
a_flying_fish.run();
a_flying_fish.live();

MxI.$System.log("----------");
unit_test_step++;
MxI.$System.log(unit_test_step + ". Check for each type if it is an Interface class or an Implementation class");
MxI.$System.log("'MxI.$Object'         is an interface ? " + MxI.$isInterface(MxI.$Object));
MxI.$System.log("'MxI.$IBaseInterface' is an interface ? " + MxI.$isInterface(MxI.$IBaseInterface));
MxI.$System.log("'ILifeForm'           is an interface ? " + MxI.$isInterface(ILifeForm));
MxI.$System.log("'IAnimal'             is an interface ? " + MxI.$isInterface(IAnimal));
MxI.$System.log("'IBird'               is an interface ? " + MxI.$isInterface(IBird));
MxI.$System.log("'IFish'               is an interface ? " + MxI.$isInterface(IFish));

MxI.$System.log("'Animal'              is an interface ? " + MxI.$isInterface(Animal));
MxI.$System.log("'Cat'                 is an interface ? " + MxI.$isInterface(Cat));
MxI.$System.log("'FlyingFish'          is an interface ? " + MxI.$isInterface(FlyingFish));

MxI.$System.log("----------");
unit_test_step++;
MxI.$System.log(unit_test_step + ". Check generated names for instances");
var an_object = new MxI.$Object();
MxI.$System.log("Instance of 'MxI.$Object' created:        " + an_object.name);

var another_animal = new Animal();
MxI.$System.log("Another instance of 'Animal' created:     " + another_animal.name);

var another_flying_fish = new FlyingFish();
MxI.$System.log("Another instance of 'FlyingFish' created: " + another_flying_fish.name);

another_animal = new Animal();
MxI.$System.log("Another instance of 'Animal' created:     " + another_animal.name);

MxI.$System.log("----------");
unit_test_step++;
MxI.$System.log(unit_test_step + ". Initialize instance");
MxI.$System.log(another_animal.name + " isInitialized():      " + another_animal.isInitialized());
another_animal.init();
MxI.$System.log(another_animal.name + " isInitialized():      " + another_animal.isInitialized());

MxI.$System.log("----------");
unit_test_step++;
MxI.$System.setLogger($StarPrefixLogger.getSingleton());
MxI.$System.log(unit_test_step + ". Change Logger");
another_animal = new Animal();
MxI.$System.log("Another instance of 'Animal' created:     " + another_animal.name);
var another_flying_fish = new FlyingFish();
MxI.$System.log("Another instance of 'FlyingFish' created: " + another_flying_fish.name);
MxI.$System.resetLogger();

MxI.$System.log("---------- End of Unit Test ----------");
MxI.$System.log();

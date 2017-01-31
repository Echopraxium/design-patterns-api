//==============================================================
// test.js
// Purpose: Unit Test for the 'mixin-interface' npm package
//          https://www.npmjs.com/package/mixin-interface
// Project: 'mixin-interface' module
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const mixin_interface = require('./src/mixin_interface.js');
const MxI             = mixin_interface.MxI;
const ILifeForm       = require('./src/test_classes/i_life_form.js').ILifeForm;
const IAnimal         = require('./src/test_classes/i_animal.js').IAnimal;
const IMammal         = require('./src/test_classes/i_mammal.js').IMammal;
const IFish           = require('./src/test_classes/i_fish.js').IFish;
const IBird           = require('./src/test_classes/i_bird.js').IBird;

const Animal          = require('./src/test_classes/animal.js').Animal;
const Cat             = require('./src/test_classes/cat.js').Cat;
const FlyingFish      = require('./src/test_classes/flying_fish.js').FlyingFish;

//==================== start of test.js ====================
var unit_test_step = 0;

console.log();
console.log("---------- Unit Test for mixin-interface module ----------");
unit_test_step++;
var an_animal_0 = new Animal();
console.log(unit_test_step + ".Instance of 'Animal' created: " + an_animal_0.name);
console.log(an_animal_0.name + " is a 'MxI.$Object'    ?   " + MxI.$isInstanceOf(MxI.$Object, an_animal_0));
console.log(an_animal_0.name + " is a 'ILifeForm' ?        " + MxI.$isInstanceOf(ILifeForm,   an_animal_0));
console.log(an_animal_0.name + " is a 'Animal' ?           " + MxI.$isInstanceOf(Animal,      an_animal_0));
console.log(an_animal_0.name + " is a 'IAnimal' ?          " + MxI.$isInstanceOf(IAnimal,     an_animal_0));

console.log(an_animal_0.name + " is a 'IMammal' ?          " + MxI.$isInstanceOf(IMammal,     an_animal_0));

console.log(an_animal_0.name + " is a 'IBird' ?            " + MxI.$isInstanceOf(IBird,       an_animal_0));
console.log(an_animal_0.name + " is a 'IFish' ?            " + MxI.$isInstanceOf(IFish,       an_animal_0));
an_animal_0.run();
an_animal_0.live();


console.log("----------");
unit_test_step++;
var a_cat = new Cat();
console.log(unit_test_step + ". Instance of 'Cat' created: " + a_cat.name);
console.log(a_cat.name + " is a 'MxI.$Object' ? " + MxI.$isInstanceOf(MxI.$Object, a_cat));
console.log(a_cat.name + " is a 'Animal' ?      " + MxI.$isInstanceOf(Animal,      a_cat));
console.log(a_cat.name + " is a 'Cat' ?         " + MxI.$isInstanceOf(Cat,         a_cat));
console.log(a_cat.name + " is a 'ILifeForm' ?   " + MxI.$isInstanceOf(ILifeForm,   a_cat));
console.log(a_cat.name + " is a 'IAnimal' ?     " + MxI.$isInstanceOf(IAnimal,     a_cat));
console.log(a_cat.name + " is a 'IMammal' ?     " + MxI.$isInstanceOf(IMammal,     a_cat));
console.log(a_cat.name + " is a 'IBird' ?       " + MxI.$isInstanceOf(IBird,       a_cat));
console.log(a_cat.name + " is a 'IFish' ?       " + MxI.$isInstanceOf(IFish,       a_cat));
a_cat.run();
a_cat.suckle();
a_cat.live();

console.log("----------");
unit_test_step++;
var a_flying_fish = new FlyingFish();
console.log(unit_test_step + ". Instance of 'FlyingFish' created: " + a_flying_fish.name);
console.log(a_flying_fish.name + " is a 'MxI.$Object' ? " + MxI.$isInstanceOf(MxI.$Object, a_flying_fish));
console.log(a_flying_fish.name + " is a 'Animal' ?      " + MxI.$isInstanceOf(Animal,      a_flying_fish));
console.log(a_flying_fish.name + " is a 'FlyingFish' ?  " + MxI.$isInstanceOf(FlyingFish,  a_flying_fish));
console.log(a_flying_fish.name + " is a 'ILifeForm' ?   " + MxI.$isInstanceOf(ILifeForm,   a_flying_fish));
console.log(a_flying_fish.name + " is a 'IAnimal' ?     " + MxI.$isInstanceOf(IAnimal,     a_flying_fish));
console.log(a_flying_fish.name + " is a 'IBird' ?       " + MxI.$isInstanceOf(IBird,       a_flying_fish));
console.log(a_flying_fish.name + " is a 'IFish' ?       " + MxI.$isInstanceOf(IFish,       a_flying_fish));
console.log(a_flying_fish.name + " is a 'IMammal' ?     " + MxI.$isInstanceOf(IMammal,     a_flying_fish));
a_flying_fish.fly();
a_flying_fish.swim();
a_flying_fish.run();
a_flying_fish.live();

console.log("----------");
unit_test_step++;
console.log(unit_test_step + ". Check for each type if it is an Interface class or an Implementation class");
console.log("'MxI.$Object'         is an interface ? " + MxI.$isInterface(MxI.$Object));
console.log("'MxI.$IBaseInterface' is an interface ? " + MxI.$isInterface(MxI.$IBaseInterface));
console.log("'ILifeForm'           is an interface ? " + MxI.$isInterface(ILifeForm));
console.log("'IAnimal'             is an interface ? " + MxI.$isInterface(IAnimal));
console.log("'IBird'               is an interface ? " + MxI.$isInterface(IBird));
console.log("'IFish'               is an interface ? " + MxI.$isInterface(IFish));

console.log("'Animal'              is an interface ? " + MxI.$isInterface(Animal));
console.log("'Cat'                 is an interface ? " + MxI.$isInterface(Cat));
console.log("'FlyingFish'          is an interface ? " + MxI.$isInterface(FlyingFish));

console.log("----------");
unit_test_step++;
console.log(unit_test_step + ". Check generated names for instances");
var an_object = new MxI.$Object();
console.log("Instance of 'MxI.$Object' created:        " + an_object.name);

var another_animal = new Animal();
console.log("Another instance of 'Animal' created:     " + another_animal.name);

var another_flying_fish = new FlyingFish();
console.log("Another instance of 'FlyingFish' created: " + another_flying_fish.name);

another_animal = new Animal();
console.log("Another instance of 'Animal' created:     " + another_animal.name);

console.log("----------");
unit_test_step++;
console.log(unit_test_step + ". Initialize instance");
console.log(another_animal.name + " isInitialized():      " + another_animal.isInitialized());
another_animal.init(true);
console.log(another_animal.name + " isInitialized():      " + another_animal.isInitialized());

console.log("---------- End of Unit Test ----------");
console.log();

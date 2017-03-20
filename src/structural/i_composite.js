//==============================================================
// i_composite.js
// 'IComposite' interface class
// Design Pattern:    Composite ('Component' participant)
// Other participant: 'Component' (see IComponent in i_component.js)
//                    'Leaf' (see ILeaf in i_leaf.js)
// Purpose:           allows you to compose objects into tree structures 
//                    to represent whole-part hierarchies. Composite lets 
//                    clients treat individual objects and composition 
//                    of objects uniformly
// Pattern Subgroup:  Structural
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/CompositeToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI        = require('mixin-interface/src/mixin_interface.js').MxI;
const IComponent = require('./i_component.js').IComponent;

//==================== 'IComposite' interface class ====================
class IComposite extends MxI.$Interface(IComponent) {
  // NB: 'execute()' service (inherited from 'IComponent') should 
  //     be overridden by implementation class
  
  // NB: 'getId()' service (inherited from 'IComponent') should 
  //     be overridden by implementation class
  
  // NB: 'addChild()' service (inherited from 'IComponent') should 
  //     be overridden by implementation class

  // NB: 'getChild()' service (inherited from 'IComponent') should 
  //     be overridden by implementation class
} // 'IComposite' interface class
MxI.$setAsInterface(IComposite).$asChildOf(IComponent);
exports.IComposite = IComposite;
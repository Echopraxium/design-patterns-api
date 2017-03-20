//==============================================================
// i_component.js
// 'IComponent' interface class
// Design Pattern:    Composite ('Component' participant)
// Other participant: 'Composite' (see IComposite in i_composite.js)
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
const MxI            = require('mixin-interface/src/mixin_interface.js').MxI;
const ICoreComponent = require('./i_core_component.js').ICoreComponent;

//==================== 'IComponent' interface class ====================
class IComponent extends MxI.$Interface(ICoreComponent) {
  // NB: 'execute()' service (inherited from 'ICoreComponent') should 
  //     be overridden by implementation class
  
  // Fallback implementation of 'getId()' service
  // returns its own 'child_id': String or Integer or Enumeration
  getId() {
    MxI.$raiseNotImplementedError(IComponent, this);
  } // IComponent.getId()

  // Fallback implementation of 'addChild()' service
  // arg_child: IComponent
  // It is advised to return a 'child_id': String or Integer or Enumeration
  addChild(arg_child) {
    MxI.$raiseNotImplementedError(IComponent, this);
  } // IComponent.addChild()
  
  // Fallback implementation of 'removeChild()' service
  // child_id:  String or Integer or Enumeration
  removeChild(child_id) {
    MxI.$raiseNotImplementedError(IComponent, this);
  } // IComponent.removeChild()
  
  // Fallback implementation of 'getChild()' service
  // child_id: String or Integer or Enumeration
  // returns an object which implements 'IComponent'
  getChild(child_id) {
    MxI.$raiseNotImplementedError(IComponent, this);
  } // IComponent.getChild()
} // 'IComponent' interface class
MxI.$setAsInterface(IComponent).$asChildOf(ICoreComponent);
exports.IComponent = IComponent;
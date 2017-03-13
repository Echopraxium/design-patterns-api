//==============================================================
// NullNode.js
// Purpose:   Unit Test for 'design-patterns-api'
//            implements 'MxI.$INullObject' interface
// Note:      This is part of a sample to illustrate the 'Null Object' Design Pattern
// Reference: this is inspired by 'binary tree' sample in https://en.wikipedia.org/wiki/Null_Object_pattern
// Project:   'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI   = require('mixin-interface/src/mixin_interface.js').MxI; 
const INode = require('./i_node.js').INode;

//==================== 'NullNode' impementation class ====================
class NullNode extends MxI.$Implementation(MxI.$Singleton).$with(MxI.$ISingleton, MxI.$INullObject, INode) {
  constructor(...args) {
	  super();
  } // 'NullNode' constructor
  
  getChildCount() {
    return 0;
  } // INode.getChildCount()
} // 'NullNode' class
MxI.$setClass(NullNode).$asImplementationOf(MxI.$ISingleton, MxI.$INullObject, INode);
MxI.$setAsSingleton(NullNode);
exports.NullNode = NullNode;
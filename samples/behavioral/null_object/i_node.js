//==============================================================
// INode.js
// Purpose:   Unit Test for 'design-patterns-api'
// Note:      This is part of a sample to illustrate the 'Null Object' Design Pattern
// Reference: this is inspired by 'binary tree' sample in https://en.wikipedia.org/wiki/Null_Object_pattern
// Project:   'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI; 

//==================== 'INode' interface class ====================
class INode extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'getChildCount' service
  getChildCount() {
    MxI.$raiseNotImplementedError(INode, this);
  } // INode.getChildCount()
} // 'INode' class
MxI.$setAsInterface(INode).$asChildOf(MxI.$IBaseInterface);
exports.INode = INode;
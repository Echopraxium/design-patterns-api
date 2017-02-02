//==============================================================
// i_iterator.js
// Purpose:          'IIterator' interface class
// Design Pattern:   Iterator
// Pattern Subgroup: Behavioral
// Status:           Ready
// Reference:        https://en.wikipedia.org/wiki/Iterator_pattern
// Project:          'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IIterator' interface class ====================
class IIterator extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'next' service
  next() {
    MxI.$raiseNotImplementedError(IIterator, this);
  } // IIterator.next
  
  // Fallback implementation of 'hasNext' service
  hasNext() {
    MxI.$raiseNotImplementedError(IIterator, this);
  } // IIterator.hasNext
} // 'IIterator' class
MxI.$setAsInterface(IIterator).$asChildOf(MxI.$IBaseInterface);
exports.IIterator = IIterator;
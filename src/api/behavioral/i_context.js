//==============================================================
// i_context.js
// Purpose:          'IContext' interface class
// Design Pattern:   State (Context Role)
// Pattern Subgroup: Behavioral
// Status:           Ready
// Reference:        http://ima.udg.edu/~sellares/EINF-ES1/StateToni.pdf
// Project:          'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IContext' interface class ====================
class IContext extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'request' service
  request(action_id) {
    MxI.$raiseNotImplementedError(IContext, this);
  } // IState.request
  
  // Fallback implementation of 'setState' service
  setState(arg_state) {
    MxI.$raiseNotImplementedError(IContext, this);
  } // IState.setState
  
  // Fallback implementation of 'getState' service
  getState() {
    MxI.$raiseNotImplementedError(IContext, this);
  } // IContext.getState
} // 'IContext' class
MxI.$setAsInterface(IContext).$asChildOf(MxI.$IBaseInterface);
exports.IContext = IContext;
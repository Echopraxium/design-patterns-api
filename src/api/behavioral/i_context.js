//==============================================================
// i_context.js
// 'IContext' interface class
// Design Pattern:    State ('Context' participant)
// Other participant: 'State' (see IState in i_state.js)
// Purpose:           The State Pattern allows an object to alter its 
//                    behavior when its internal state changes.
//                    The object will appear to change its class.
// Pattern Subgroup:  Behavioral
// Status:            Ready
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/StateToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IContext' interface class ====================
class IContext extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'request' service
  // request_id: String or Integer or Enumeration
  request(request_id, ...args) {
    MxI.$raiseNotImplementedError(IContext, this);
  } // IState.request
  
  // Fallback implementation of 'setState' service
  // arg_state: IState
  setState(arg_state) {
    MxI.$raiseNotImplementedError(IContext, this);
  } // IState.setState
  
  // Fallback implementation of 'getState' service
  // returns IState
  getState() {
    MxI.$raiseNotImplementedError(IContext, this);
  } // IContext.getState
} // 'IContext' class
MxI.$setAsInterface(IContext).$asChildOf(MxI.$IBaseInterface);
exports.IContext = IContext;
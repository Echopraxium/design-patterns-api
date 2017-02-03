//==============================================================
// i_state.js
// Purpose:          'IState' interface class
// Design Pattern:   State (State Role)
// Pattern Subgroup: Behavioral
// Status:           Ready
// Reference:        http://ima.udg.edu/~sellares/EINF-ES1/StateToni.pdf
// Project:          'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IState' interface class ====================
class IState extends MxI.$Interface(MxI.$IBaseInterface) {
  // Fallback implementation of 'doAction' service
  doAction(action_id, arg_context) {
    MxI.$raiseNotImplementedError(IState, this);
  } // IState.doAction
} // 'IState' class
MxI.$setAsInterface(IState).$asChildOf(MxI.$IBaseInterface);
exports.IState = IState;
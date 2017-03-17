//==============================================================
// i_invoker.js
// 'IInvoker' interface class
// Design Pattern:     'Command' ('Invoker' participant) 
// Other participants: 'Command' (see ICommand in i_command.js)
//                     'Receiver' (see IReceiver in i_receiver.js)
// Purpose:            The Command Pattern encapsulates a request as an object, 
//                     thereby letting you parameterize other objects with different
//                     requests, queue or log requests, and support undoable operations
// Pattern Subgroup:   Behavioral
// Reference:          http://ima.udg.edu/~sellares/EINF-ES1/CommandToni.pdf
// Project:            'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('mixin-interface/src/mixin_interface.js').MxI;
const IAction = require('./i_action.js').IAction;

//==================== 'IInvoker' interface class ====================
class IInvoker extends MxI.$Interface(IAction) {
  // NB: 'execute()' service (inherited from 'IAction') should 
  //     be overridden by implementation class
  
  // Fallback implementation of 'setCommand()' service
  // arg_cmd: ICommand
  setCommand(arg_cmd, ...args) {
    MxI.$raiseNotImplementedError(IInvoker, this);
  } // IInvoker.setCommand()
} // 'IInvoker' interface class
MxI.$setAsInterface(IInvoker).$asChildOf(IAction);
exports.IInvoker = IInvoker;
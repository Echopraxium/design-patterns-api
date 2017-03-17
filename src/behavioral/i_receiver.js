//==============================================================
// i_receiver.js
// 'IReceiver' interface class
// Design Pattern:     'Command' ('Receiver' participant) 
// Other participants: 'Command' (see ICommand in i_command.js)
//                     'Invoker' (see IInvoker in i_invoker.js)
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
const MxI       = require('mixin-interface/src/mixin_interface.js').MxI;
const IDelegate = require('./i_delegate.js').IDelegate;

//==================== 'IReceiver' interface class ====================
class IReceiver extends MxI.$Interface(IDelegate) {
  // NB: 'apply()' service (inherited from 'IDelegate') should 
  //     be overridden by implementation class
  
  // Fallback implementation of 'setCommand()' service
  // arg_cmd: ICommand
  setCommand(arg_cmd, ...args) {
    MxI.$raiseNotImplementedError(IReceiver, this);
  } // IReceiver.setCommand()
} // 'IReceiver' interface class
MxI.$setAsInterface(IReceiver).$asChildOf(IDelegate);
exports.IReceiver = IReceiver;
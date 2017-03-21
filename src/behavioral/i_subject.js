//==============================================================
// i_subject.js
// 'ISubject' interface class
// Design Pattern:    Observer ('Subject' participant)
// Other participant: 'Observer' (see 'IObserver' in i_observer.js)
// Purpose:           The Observer Pattern defines a one-to-many dependency
//                    between objects so that when one object changes state, 
//                    all of its dependents are notified and updated automatically.
// Pattern Subgroup:  Behavioral
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/ObserverToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI       = require('mixin-interface/src/mixin_interface.js').MxI;
const IElement  = require('../creational/i_element.js').IElement;
const IObserver = require('./i_observer.js').IObserver;

//==================== 'ISubject' interface class ====================
class ISubject extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'registerObserver()' service ----
  // FALLBACK IMPLEMENTATION
  // state_ids: array of keys (e.g. a String, Integer, Uuid or Enumeration).
  //            Thus the Subject only notifies the observers which
  //            have 'subscribed' to a given subset of the state
  //            changes which may occur in the Subject. 
  registerObserver(arg_observer, state_ids) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // ISubject.registerObserver()
  
  // ---- 'unregisterObserver()' service ----
  // FALLBACK IMPLEMENTATION
  // arg_observer: an object which implements 'IObserver'
  unregisterObserver(arg_observer) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // ISubject.unregisterObserver()
  
  // ---- 'notifyObservers()' service ----
  // FALLBACK IMPLEMENTATION
  notifyObservers(...args) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // ISubject.notifyObservers()
} // 'ISubject' interface class
MxI.$setAsInterface(ISubject).$asChildOf(IElement);
exports.ISubject = ISubject;
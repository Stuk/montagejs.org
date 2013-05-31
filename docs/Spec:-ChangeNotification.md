
Change Notification API	Editor François Frisch


Index
Introduction
Functional Description
API
Examples
Integration
Dependencies
Concerns

Introduction

The current API based on addEventListener and handleChange

- minus and plus are not correct
- change type is inconsistent
- no hooks before the change happens.
Want to block? no, this is the job of a delegate
- consistency because of use of third argument for capture?
	use handle... callback, ignore third argument 
- collision with change event
- no way to integrate the @... into the callback name
- events are supposed to be immutable
- performance optimization

modify in property descriptor...
	We need to add a listener on the property, but it might not be obvious that this is more expensive than get / set.
 
Functional Description

We implement change listeners as an extension on top of the apis and concepts of the “normal” events & listeners.




Listening to array reference or the content -- not necessary
exposing getProperty arguments in bindings -- open
remove dispatching setter when last listener is removed -- todo
API


PropertyListener
PropertyPath(object, “property.path”, willChange).addEventListener()

registration:

myObject.addPropertyChangeListener(“property.path”, listener | function(){}), beforeChange)
myObject.removePropertyChangeListener(“property.path”, listener | function(){}), beforeChange)
	
callback:

handle[Identifier]WillChange(change)
handle[Identifier]Change(change)

change.type : “property.path”
change.target : the object where the original change event was dispatched
change.propertyPath : “property.path”
change.currentTarget : object on which we are currently dispatching the change (myObject in this case)
change.plus : the values of the change on the target based on the splice logic, these don’t change
change.minus : the values of the change on the target based on the splice logic, these don’t change

If the value of the property named handle[Identifier]Change is an object we assume that it is a table of callback functions indexed by change event type. 


handle[Identifier]Change: {
	value: {
		“property.path”: function(change) {
			this === the listener
		},
		“another.property.path”: function(change) {
			this === the listener
		}
	}
}

var ChangeEvent  = require(“core/event”).ChangeEvent
var WillChangeEvent  = require(“core/event”).WillChangeEvent


this.dispatchEvent(WillChangeEvent.create())
this.doTheChange();
this.dispatchEvent(ChangeEvent.create())











change.propertyPath = “bars.foo”
change.target = myObject







// for arrays
call splice dispatching logic for all operations.

splice 
	changeEvent.minus = removedMembers;
		objects removed
            changeEvent.plus = addedMembers;
		objects added
            changeEvent.changeIndex = index;
		first argument of the splice
            changeEvent.propertyChange = changeType;

	for every item in the array
		propertyChange should be tailored to each case

shift
changeEvent.minus = result;
	the object that was removed
            changeEvent.plus = this[0];
		the new value that replaced the object that was removed
            changeEvent.changeIndex = 0;
            changeEvent.propertyChange = ChangeTypes.REMOVAL;

	for every item in the array
		changeEvent.type = "change@" + i;
			index
                	changeEvent.minus = i === 0 ? result : this[i - 1];
			old value at the index
                	changeEvent.plus = this[i];
new value at the index
                	changeEvent.changeIndex = i;
			index of change
                	changeEvent.propertyChange = ChangeTypes.REMOVAL; ???
			should be MODIFY

unshift
	changeEvent.minus = undefined;
            changeEvent.plus = Array.prototype.slice.call(arguments, 0);
		Array of object added
            changeEvent.changeIndex = 0;
            changeEvent.propertyChange = ChangeTypes.ADDITION;

	for every item in the array
		changeEvent.type = "change@" + i;
			index
                	changeEvent.minus = this[addedCount + i];
			old value at the index
                	changeEvent.plus = this[i];
new value at the index
                	changeEvent.changeIndex = i;
			index of change
                	changeEvent.propertyChange = ChangeTypes.ADDITION;
			Same problem as splice


reverse
push
pop
sort

// for maps
get 
set
delete


change.data.changeType = ChangeTypes
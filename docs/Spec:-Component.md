- Draft -
Component	Editor Heather Douglass


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

A component is the basic building block of a Montage application.  It is an encapsulation of a document fragment and the controller logic for that fragment.
Functional Description

Remove if unnecessary
API

Properties
read-only
application
eventManager
rootComponent
parentComponent
childComponents
ownerComponent
originalContent
read/write-once
element
read/write
delegate - this is not used anywhere that I can tell
parentProperty
template
hasTemplate
templateModuleId
templateObjects
domContent
needsDraw
composerList	- make this private?
Gates
canDrawGate
blockDrawGate - make this private?

Methods
Composer Methods
addComposer(composer)
addComposerForElement(composer, element)
scheduleComposer(composer)
removeComposer(composer)
clearAllComposers()

Draw Methods
canDraw()
prepareForDraw()
willDraw(timestamp)
draw(timestamp)
didDraw(timestamp)
childComponentWillPrepareForDraw(child)

Component tree methods
setElementWithParentComponent(element, parent)
findParentComponent()
attachToParentComponent()
detachFromParentComponent()
removeChildComponent(childComponent)
querySelectorComponent(selector)
querySelectorAllComponent(selector)

cleanupDeletedComponentTree()
loadComponentTree(callback)
traverseComponentTree(visitor, callback)
expandComponent(callback)

Serialization Methods
deserializedFromSerialization()
serializeSelf(serializer, propertyNames)

Template Methods
loadTemplate(callback)
templateDidDeserializeObject(object)
deserializedFromTemplate(object)

Unspecified
_dispatchActionEvent()
createActionEvent()
acceptsDirectFocus() - deprecated?
elementControllerFromEvent(event, targetElementController) - deprecated?
gateDidBecomeTrue(gate)
prepareForActivationEvents()
surrenderPointer(pointer, demandingComponent)

Future API
	Dynamically adding and removing components?
	Notification of component element insertion or removal from DOM
	Ability to specify the template element for a component gh-942

Events
action
firstDraw
Examples

Creating components programmatically

Component Lifecycle

- Components with/without templates
- Loading, stasis, unloading
- Components instantiated through deserialization vs. created programmatically
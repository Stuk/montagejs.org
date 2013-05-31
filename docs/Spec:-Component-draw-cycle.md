
Component Draw Cycle	Editor Heather Douglass


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

When building HTML5 applications, especially on mobile, performance is important.  One area that can be especially critical is DOM manipulation/reading.  Repeatedly manipulating/reading the DOM causing style reflows can slow down an application considerably, even on a desktop machine#.  Montage tries to alleviate this by delaying DOM manipulation in order to batch changes and limit the number of reflows.
Functional Description

Montage implements delayed DOM manipulation in order to batch changes to the DOM thereby improving performance.  This is implemented through a series of callbacks that the framework calls on a component.  To participate in this cycle a component should first implement three methods as necessary, willDraw, draw and didDraw.  Which methods need to be implemented is dependent on what the component wants to do.  The Montage framework will call these methods at the appropriate times.  These methods should never be called directly by components.  To improve performance there are restrictions about what sort of actions should be taken in each method.  First, a component should not perform any DOM manipulation outside of the draw method.  DOM manipulation includes element style changes and/or appending or removing elements from the DOM.  Second, any reading of the DOM for measurements, such as offsetWidth, should only be performed in the willDraw or didDraw methods and never in the draw method.  By implementing DOM manipulation/reading for components as described this will limit the amount of reflows by the browser which will help to improve performance.
	The second thing that a component needs to do when it wants these three methods to be called is to set a property on itself, needsDraw, to true.  Setting this property to true will alert the framework that this component wants to participate in the next draw cycle.  Draw cycles are scheduled using either a setTimeout or requestAnimationFrame if it’s available.
	During a draw cycle the component hierarchy is explored starting from the root component.  Only components that have indicated they want to draw or have a child that wants to draw are explored.  Components can block exploration of their children by returning false from their canDraw method.   As the component tree is explored a list is built of the components which have set their needsDraw property to true.  As components are added to this list, if this is the first time that the component is being drawn, then the component will have its prepareForDraw method called.  This method is only called the first time a component is participating in a draw cycle.  Once the hierarchy has been explored the framework iterates through the generated list calling willDraw on each component in it.  As a result of calling willDraw on the components in this list other components that are not currently in the list of components to draw may have had their needsDraw property set to true.  Once all the components in the initial list have had willDraw called on them the component hierarchy is explored again to add any components that need to be drawn as a result of calling willDraw on the initial list.  willDraw is then called on any newly added components and this process is repeated until no new components have been added to the list of components to draw.  After this point any component that has needsDraw set to true during the remainder of the draw cycle will be part of the next draw cycle.  It will not be added to the currently executing cycle.  Next, the generated list is sorted by where the component was in the component hierarchy.  This is to ensure that child components are always drawn before their parent component.  The sorted list is iterated over in reverse order and draw is called on each component in the list.  Last, the same generated list is iterated over again and didDraw is called on each component in the list.  During the iteration if it has been the first draw for any component in the list that component will dispatch a custom event with a type of firstDraw immediately after its didDraw method has been called.

Debug flag for erroring on DOM manipulation outside of draw
Component loading in relation to draw, canDrawGate API, blockDrawGate API?
API

On Component

needsDraw
Set this property to true when the component needs its draw callbacks called

canDraw()
This method controls whether a component participates in the currently executing draw cycle and whether or not its children are explored when the initial list for a cycle is built.  It must return false if the component and its children should not participate in the cycle and true if they should.

prepareForDraw()
This method can be used to execute code before the first draw of a component.  When this method is called the element for the associated component will already be part of the DOM.  This makes this method an appropriate place to add event listeners on DOM elements in the component or perform any other action that should only be performed once during a component’s lifecycle.

childComponentWillPrepareForDraw(child)

willDraw(timestamp)

draw(timestamp)

didDraw(timestamp)

Registered property descriptor addition

needsDraw 
property descriptor addition
Examples

Remove if unnecessary
Integration

Remove if unnecessary
Dependencies

Remove if unnecessary
Concerns


With the current design ordering of draw calls between parents and children cannot be guaranteed [04/10/2012 Resolved: the list is now sorted to guarantee that child components draw before their parent component.]
Component hierarchy is lost when the list is flattened for drawing
Up For Discussion


The current design loses the hierarchy of components once the components that want to draw are flattened into a single list, what are the ways around this?  Does there need to be a way around it?
Should drawing take place from root to leaf, or leaf to root?  In some cases parents want to draw before their children, for example a layout component that wants to set bounds for its children, and in other cases parents want to draw after their children, such as the flow component where the parent flow component has to make updates in its draw based on what its child repetition component has just drawn
The concept of having needsDraw=true in the willDraw adding the newly requested component to the currently executing draw was introduced before composers were implemented.  Now that composers exist and are able to act before the willDraw calls are made should a needsDraw set in the willDraw schedule a new draw loop instead of adding the component to the currently executing loop?  This will fix being able to guarantee the order of draw calls between parents and children during a loop.

Meeting Notes 04/04/2012
	The draw cycle was discussed in a meeting with Javier, Jean-François, François, Afonso, Stuart, Kishore and Heather.  The following decisions were made

	1. The component order for willDraw and didDraw is not important, but the order for draw is and it will be leaf to root, i.e. children draw before their parents.
	2. The ability to schedule a component to draw as part of the currently executing cycle during the willDraw phase is necessary and worth the performance implications.
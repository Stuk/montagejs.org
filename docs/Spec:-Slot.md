Slot Component

The slot component is a building block component which has no template but accepts either a component or an element to render as its content.

Use Cases
A section of page that could hold more than one component type and will be changed dynamically
Transitions between two components
Useful to build other components, like a substitution, or any component which needs to dynamically swap components

Properties

content
Component | Element - The component or element which will be rendered in the slot.  Content can be a component or element.  When setting a component the slot component is responsible for supplying an element to the component if it does not already have one.  The default element that it supplies is a div.  There is the possibility of a delegate supplying the element through a delegate method, slotElementForComponent(slotRef, componentRef, elementSuppliedBySlot).  Accessing the content property will return whatever was initially passed in.  If a component is passed in then a component will be returned.  If an element was initially set, then the element will be returned.

Delegate Methods

slotDidSwitchContent(slotRef, newContentElement | undefined, newContentComponent | null, oldContentElement | undefined, oldContentComponent | null)

slotElementForComponent(this, value, element)
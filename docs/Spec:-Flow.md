---
layout: docs
title: Getting Started
---

FLOW Spec in progress by Javier Román

Index


1. Introduction
2. Data Source
    2.1. Properties
3. Paths
    3.1. Translation
    3.2. Additional Parameters
           3.2.1. Density
           3.2.2. Rotation
           3.2.3. Arbitrary CSS
    3.3. Multiple Paths
    3.4. Properties
4. Scroll
    4.1. Properties
5. Scrolling Transitions
    5.1. Properties
    5.2. Methods
    5.3. Events
6. Camera and Frustum Culling
    6.1. Properties
7. Dependencies



1. Introduction


Flow is a UI component that allows the design of scrollable 3D-layouts (that will be called paths) for a given list of data and/or components (a repetition).

Flow is useful to create a wide range of visual interfaces, like a common vertical/horizontal scrollable list or a 3D carousel.



2. Data Source


Flow requires a list of data/components. As Flow internally requires the Repetition component, it shares Repetition’s functionality/API.

Flow wraps the iteration with a div element, allowing this way composite CSS3 transforms: the ones specified by the path and the ones CSS-defined for selected/active status of elements in the repetition.

2.1. Properties (same as Repetition)
Property

Type

Default

Description

objects

Objects Array

contentController

ArrayController

null

isSelectionEnabled

Boolean

false

selectedIndexes

Integers Array

activeIndexes

Integers Array





3. Paths


Paths define the 3D-layout of the repetition. The elements in the repetition will be positioned along the path at regular intervals. When Flow scrolls, the elements will move along the path. Multiple paths can be defined and the elements in the repetition will be assigned a path by interleaving its iteration index to the number of paths.

3.1. Translation

Translation in a path is defined as a 3D cubic Bézier spline. A Bézier spline is defined as multiple chained Bézier curve segments, where the end knot (3D point the curve crosses) of a curve is the first knot of the next curve. Each knot contains two shape control points called handlers (next handler and previous handler).

3.2. Additional Parameters

At each knot, it is possible to define additional parameters that will give fine grained control in the distribution of elements, rotation of elements, and arbitrary CSS properties applied to elements along the path.

3.2.1. Density

Density parameters controls the amount of elements that will be displayed at each spline curve.

Each knot defines a couple of properties: previousDensity and nextDensity. Density is linearly interpolated along the curve. It is interpolated in the range defined by the current knot’s nextDensity property and the next knot’s previousDensity property.

3.2.2. Rotation

RotateX, rotateY and rotateZ parameters describe the rotation of elements at each knot of the spline. Its value is linearly interpolated along the segment.

3.2.3. Arbitrary CSS

Any CSS parameter can be controlled per knot, and it will be interpolated along the segment as in the case of rotations. Examples: opacity, borderRadius, backgroundColor.

Units have to be defined for each path and each CSS parameter, like, for example, “px” in the case of borderRadius or no units in the case of opacity.

3.3. Multiple Paths

Multiple paths can be defined and Flow will interleave the repetition element at each iteration to a different path. Multiple paths share the scroll property, so they scroll in tandem.

The element at iteration index i in the repetition will be assigned to the path with index i % paths.length. The offset within a path for an element at index i will be computed as floor(i / paths.length).

Example with 2 paths:
Element’s index	0	1	2	3	4	5	6	7	8
Path’s index	0	1	0	1	0	1	0	1	0
Offset	0	0	1	1	2	2	3	3	4


3.4. Properties
Property	Type	Description
paths	Objects Array	All paths
paths[i]	Object	Path i
paths[i].knots	Array	Knots at path i
paths[i].knots[j]	Object	Knot j at path i
paths[i].units	Object	Units for arbitrary CSS properties
paths[i].units[j]	String	Example: borderRadius: “px”
paths[i].headOffset	Number	Offset within the path where the first element in the repetition will be for minimum scroll value. Defaults to 0
paths[i].tailOffset	Number	Offset where the last element in the repetition will be for the maximum scroll value. Defaults to 0
paths[i].knots[j].knotPosition	Array	[x, y, z]
paths[i].knots[j].previousHandlerPosition	Array	[x, y, z]
paths[i].knots[j].nextHandlerPosition	Array	[x, y, z]
paths[i].knots[j].previousDensity	Number	
paths[i].knots[j].nextDensity	Number	
paths[i].knots[j].rotateX	Number	In radians
paths[i].knots[j].rotateY	Number	In radians
paths[i].knots[j].rotateZ	Number	In radians
paths[i].knots[j].[arbitraryCssProperty] 	Number/Array	Array used with units like rgb




4. Scroll


Some text here

4.1. Properties
Property	Type	Default	Description
scroll	Number	0	
isInputEnabled	Boolean	true	Enables/disables scroll by drag and drop




5. Scrolling Transitions


Scrolling transitions allow Flow to scroll programatically to a given offset in a smooth animation.

5.1. Properties
Property	Type	Default	Description
scrollingTransitionDuration	String/Number	“500ms”	Same format as CSS3’s transition duration or number interpreted as miliseconds
scrollingTransitionTimingFunction	String	“ease”	Same format as CSS3’s transition timing function
hasSelectedIndexScrolling	Boolean	false	Automatically starts a scrolling transition of the latest selected index
selectedIndexScrollingOffset	Number	0	Sets the desired offset for the automatic scrolling transitions during selection


5.2. Methods
Method	Parameters	Description
startScrollingIndexToOffset	[Integer] index,
[Number] offset	Starts the scrolling animation of the element at the given index from the current offset to the given offset at the path
stopScrolling	none	Stops the scrolling transition if there is any in-course


5.3. Events
Event	Description
scrollingTransitionStart	Fires when a scrolling transition starts
scrollingTransitionEnd	Fires when a scrolling transition completely ends without haven’t been cancelled
scrollingTransitionCancel	Fires if:

stopScrolling was called during an in-course transition
startScrollingIndexToOffset was called and:
The user is touching/clicking the Flow scrollable area, so it is blocked for scrolling transitions
A previous transition is in-course. It will fire before the next scrollingTransitionStart event
The user clip/tap the scrollable area in the middle of a transition, cancelling it


6. Camera and Frustum Culling


Flow includes a virtual camera that can be moved inside the 3D scene. Flow’s container element define the viewport of the camera.

This camera can be controlled with 4 parameters: camera position, target position, camera roll and field of view angle (fov). The fov is relative to the height of the viewport.

Flow integrates a frustum culling algorithm to enhance rendering performance and memory consumption by reducing the number of elements in the DOM to the ones captured by the camera, and so, shown on the screen.

This algorithm requires to optimally work the definition of a bounding sphere radius property. This sphere is centered at the rotational axis of the repetition elements, and has to be big enough to bound the bigger of the elements in that repetition. In the current version of Flow, this property is not yet computed automatically, so it needs to be set manually.

6.1. Properties
Property	Type	Default	Description
cameraPosition	Array	[0, 0, 800]	[x, y, z]
cameraTargetPoint	Array	[0, 0, 0]	[x, y, z]
cameraRoll	Number	0	Angle in radians
cameraFov	Number	50	Angle in degrees
elementsBoundingSphereRadius	Number	150	



7. Dependencies


Repetition
TranslateComposer



API

To be defined, but, at least it should include:

- Create/remove path
- Add/remove knots
- Add/modify knot parameters
- Set/modify units per path and CSS parameter
- Camera control
...

By performance convenience, the serialization API will not be the same as the internal data structure so it could be defined in the most readable way as possible. A path could be defined as:

path: {
    knots: [
        {
            knotPosition: [x, y, z],
            previousHandlerPosition: [x, y, z],
            nextHandlerPosition: [x, y, z],
            rotateX: 1,
            density: 2,
            opacity: 3,
            borderRadius: 4
        },
        {
            knotPosition: [x, y, z],
            previousHandlerPosition: [x, y, z],
            nextHandlerPosition: [x, y, z],
            rotateX: 5,
            density: 6,
            opacity: 7,
            borderRadius: 8
        },
        ...
    ],
    units: {
        “rotateX”: “rad”,
        “borderRadius”: “px”,
        “opacity”: null
    }
}
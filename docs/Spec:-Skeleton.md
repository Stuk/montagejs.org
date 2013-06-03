---
layout: docs
title: 
---

Skeleton theme	Editor Simon Luthi


Index
Introduction
Component List
API
Naming Convention
Examples
Dependencies
Browser Support
Concerns
Classitis or Modularitis?
1. Modularitis
2. Classitis
3. Single propertitis
4. Attributitis
Introduction

The Skeleton theme is a very basic, neutral looking Montage theme. It has the following purposes:
To be used as a wire-frame, when prototyping.
Make it easy for developers to customize it or use as a starting point for other themes.
Have the widest cross-browser support as possible. So it could also serve as a fallback.
Can be used to test performance with the most minimal styling. If it doesn’t perform well, it sure isn’t gonna improve with performance-hungry box-shadows, gradients..
Component List

Each component’s UI will have a Desktop and Mobile version

Form Controls
Button
CheckBox
Radio
Select
Range
Anchor?
Text Input
Text Area
Number
----
Date Picker
Color Picker
File Upload + file drop
Token field
Image
Audio
Video
Loader
Progress
Meter
Popup panel - 0.11
Alert
Dialog
Notification
Flows
slideshows
carrousel
Layout
Flexbox Component - One component to rule them all 
Tabs -   0.11
Splitter - 0.11
List - Flow based - 0.11
Table
ToolBar 
MenuBar
Page Navigation (like phone left-right navigation ?)
General
drag and drop feed back
Basic CSS rules, dos and don’t
API

If available the API should be identical to standard elements defined by the W3C. This will allow developers to easier start using the Montage components without having to learn a new API. We might won’t implement everything in a first version, but it’s the goal.

To use the skeleton theme, the "module" path in the serialization has to be changed to "montage/ui/skeleton/xxx.reel".


Examples

Still work in progress:

Dependencies


CSS reset/normalize
Icon set: http://fortawesome.github.com/Font-Awesome/ Not sure about the licensing.
LESS/SASS?

Browser Support

The aim is to support as many browsers as possible, but will be determined during creation. Most likely it will be on a per component basis. Or we can group components depending on their browser support. If a component is not available in a certain browser, a developer could choose the following options:
Show a more simple fallback component. This is already the default behaviour of most/all of the new HTML5 inputs. Example: Show a text-input instead of a slider. Or show a download link of an MP3 file, if the <audio> element is not supported.
Hide the component (if it’s not critical for an app’s functionality or if there is an alternative).
Show a warning to update/switch the browser. I’m thinking not a global popup.. but just in place of the component. Like the missing Flash cube on iOS.

I tested which of the native components can be used for Skeleton.. Made a screenshot. The order is Firefox, Opera, Chrome on OS X.

Chrome/Safari has this CSS property appearance: none that I'm using and it lets you remove the native look and restyle however you want. But it Firefox it seems too buggy and other browsers don't support it yet. Soo.. the conclusion is:

Yep: <button>, <input type="text">, <textarea>
Maybe: checkbox, radio, select. Chrome is the desired look, but I think it's impossible to restyle the dot and checkmark in the other browsers. And the border/background in Firefox. If we have to redo them with just div's that would be a lot of work and maybe accessibly issues. And stuff like how to trigger the scroll wheel on iOS.
Nope: The rest we have to recreate from scratch. Also because they are too new and not implemented in older browsers.


Concerns


How separated or tied together are the Desktop and Mobile version. Are they different files in the same reel or different folders?

Kishore:
Should Montage detect the availability of input type="range" (using a Modernizr like approach) and automatically polyfill if it is not available?
Should Polyfills support the exact API or can it be a subset of the component it is polyfilling and evolve slowly to support the complete API ?


--------

Classitis or Modularitis?

With Montage Reels, every component is independent from each other. The only problem, the same CSS properties might get repeated many times. The opposite would be a more OOCSS approach: Trying to specify a CSS property once in a class and then give that class to whichever component needs it. It’s not really an issue for more advanced themes, but maybe for the Skeleton theme where all the components have the same basic look.

1. Modularitis

.button 	{ background: silver; border: 1px solid gold; border-radius: 4px; }
.radio 	{ background: silver; border: 1px solid gold; border-radius: 50%; }
.checkbox 	{ background: silver; border: 1px solid gold; border-radius: 4px; }

<button class=”button”></button>
<input type=”radio” class=”radio”></input>
<input type=”checkbox” class=”checkbox”></input>

Pro:
More flexible to make changes without breaking other components.
Smaller file size if only a few components of a theme is used.
In the inspector you see all the styles together and not scattered into multiple.

2. Classitis

.skeleton-bg 		{ background: silver; }
.skeleton-border 	{ border: 1px solid gold; }
.rounded-corners 	{ border-radius: 4px; }
.circle 		{ border-radius: 50%; }

<button class=”skeleton-bg skeleton-border rounded-corners”></button>
<input type=”radio” class=”skeleton-bg skeleton-border circle”></input>
<input type=”checkbox” class=”skeleton-bg skeleton-border rounded-corners”></input>

Pro:
More flexible to change the whole theme at once.
Smaller file size if lots of different components of a theme are used.
Images can be used in a sprite.

Conclusion: I would say during development, we should start with the “Classitis” way, just because it makes it easy to tweak the styles globally. Then once we agree on a certain look, we’ll break it down and add it to each component individually. And about the problem with the file-size. I think it’s worse to load the whole package if you just need part of it, than have the ones you use repeated a couple times. And maybe MOP could create a sprite generator or something similar.


More approaches:

3. Single propertitis

.radio, 
.button, 
.checkbox,
..many more	{ 
background: silver;
border: 1px solid gold; 
}

Less repeating of same properties, but a huge list of selectors might be slower (needs testing)

4. Attributitis

[class^=”montage-action”] { 
background: silver;
}
[class^=”montage-inputs”] { 
background: white;
}

<button class=”montage-action-button”></button>
<input type=”radio” class=”montage-action-inputRadio”></input>
<input type=”text” class=”montage-inputs-inputText”></input>
<textarea class=”montage-inputs-textarea”></textarea>

Best of both worlds, but is slower and makes the class names even longer.
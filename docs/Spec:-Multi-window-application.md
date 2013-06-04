---
layout: docs
title: 
---

*** DRAFT ***
Spec: Multi-window application	Editor JF Ducarroz


Index
Introduction
Functional Description
API
Examples
Integration
Dependencies
Concerns
Introduction

While traditionally web pages and web apps use a single browser window, complex applications might require multiple windows. The goal of this spec is to provide support for multiple windows by allowing a reel to be opened inside its own browser window and still be accessible like it was in the same window as the rest of the application by, for example, using bindings (one-way or two-way).
Functional Description

A single window Montage application is represented by an Application object (document.application). Internally, there is also a single root element, to which all the UI components are linked, and an events manager.

When using multiple windows, each window has its own application object, its own root object, and event manager. That is, each window is an application by itself. The original window is the main application while every other window is a child application from either the main application or another child application. 

The Application object has two new properties: mainApplication and parentApplication. In the case of the main application, parentApplication is set to null.

To open a new window, you call Application.openWindow and provide a Reel relative path and a module name to instantiate.  In return, you will get a MontageWindow object. When the DOM window has been loaded and the module instantiated, the MontageWindow will dispatch a load event.

A MontageWindow object provides a pointer to the DOM window as well the reel's module instance. The MontageWindow object provides some other window management services such as setting the window title, moving or closing the window.

The Application also keep track of the windows it opens and in the case of the mainApplication, it tracks all child  windows open by any application and sort them either by z order or open order.

When a window closes (or reload), all its child windows are also closed. To prevent a child window to be closed when is parent is dismissed, you can detach the window, in that case, the detached window won't have any relation anymore with the parent or main window.

Note: 
1) the module is loaded into the child window asynchronously using a Loader
2) Events from a child window are propagated up to the document, then to the application and then up to the parent application chain up to the main application.

API

Application:

Application.openWindow(component, name, parameters) -> {MontageWindow}
Open asynchronously a Reel in a new browser window. When the returned window is ready, it dispatches a load event.

Returns the newly created window 

Parameters:
component {Object}: the path to the reel component to open in the new window. Can be relative to the main bundle.
name {String}: the component main class name
parameters {Object}: the new window parameters. Accept same parameters than window.open with same security restrictions. Here are the possible parameters and their default value:
                    location: false,
                    height: undefined, (in pixels)
                    width: undefined, (in pixels)
                    left: undefined ,(in pixels)
                    top: undefined, (in pixels)
                    menubar: false,
                    resizable: true,
                    scrollbars: true,
                    status: false,
                    titlebar: true,
                    toolbar: false


Application.detachWindow(montageWindow) -> {MontageWindow}
Detach the window from its parent application. If no montageWindow is specified, the current application's windows will be detached

Application.attachWindow(montageWindow) -> {MontageWindow}
Attach a window to a parent application. When a window open, it's automatically attach to the Application used to create the window.

Application.mainApplication  :Application (read only)
Provides a reference to the main application

Application.parentApplication  :Application
Provides a reference to the parent application

Application.window  :MontageWindow (read only)
Provides a reference to the MontageWindow associated to the application

Application.attachedWindows  :Array[MontageWindow]
An array of the child windows attached to the application

Application.windows  :Array[MontageWindow] (read only)
Provides a reference to all the windows opened by the main application or any of its descendents, including the main window itself The list is kept sorted, the sort order is determined by the Application.windowsSortOrder property

Application.windowsSortOrder  :String (default: reverse-z-order)
Determines the sort order for the Application.windows array.
Possible values are: z-order, reverse-z-order, open-order, reverse-open-order

Application.focusWindow  :MontageWindow
Return the top most window of any of the Montage Windows


MontageWindow:

MontageWindow.close()
Close the window. Note: Any descendent window will be closed as well
Parameters: none

MontageWindow.focus()
Set the focus on the window, move it to the front
Parameters: none

MontageWindow.resizeTo(width, height)
Resize the window to the specified width and height
Parameters: 
width {Integer}: The window's width desired
height {Integer}: The window's height desired

MontageWindow.moveTo(x, y)
Move the window to the specified screen coordinate x and y
Parameters: 
x {Integer}: The window's x screen position
y {Integer}: The window's y screen position

MontageWindow.application  :Application (readonly)
Provides the Application associated with the window

MontageWindow.window  :Window (readonly)
Provides a reference to the native window

MontageWindow.document  :DOM Document (readonly)
Provides a reference to the DOM Document

MontageWindow.component  :Object(readonly)
Provides a reference to the main Montage component loaded in the window

MontageWindow.title  :String
The window title. Make sure to use MontageWindow.title to access the window's title rather than directly accessing directly the title by the document, else you will not be able to use binding with the window's title.

MontageWindow.focused  :Boolean
True if the window is currently the topmost Montage Window and has focus

MontageWindow.closed  :Boolean
True is the window has been closed. Once a window has been close, the MontageWindow object still exist but you cannot use it anymore.

Examples

create a new window and listen to the load event to finish the window initialization:

var childWindow = document.application.openWindow("image-viewer.reel",
                      "ImageViewer", {scrollbar: false, titlebar: false});

childWindow.addEventListener("load", function(event) {
  childWindow.component.foo = bar;
});


Integration

There is 5 parts:

1) Some modification are required in EventManager in order to propagate the event up the chain of Applications

2) Application has been modified and extended to support the notion of parent and main application

3) A new component MontageWindow is added

4) A window-loader, a minimalist montage stub is added. This is the page that we load in the new window and who is in charge to callback the opening application when the window is ready

5) The loader has been modified to trigger a custom "load" event once the component has been created by the loader.
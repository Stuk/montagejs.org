---
layout: docs
title: 
---

RichText Editor Component


RichText Editor is a lightweight Montage component that provides basic HTML editing capability. This component is a wrapper around the HTML5 contentEditable and mostly relies on the level of support of execCommand by the browser.

The RichText Editor let you set, on a specific selection range, various attribute:
- text style: bold, italic, underline, strikethrough,  superscript, subscript
- font style: fontname, fontsize
- color: backcolor, forecolor
- justification: left, center, right and full
- list style: ordered, unordered
- paragraph indent: indent and outdent (via methods)

The RichText Editor allows you to re-size images, and supports drag & drop between pages or from the desktop of HTML fragment, text and images. Finally, the RichText Editor is compatible with the native undo & redo as well with the Montage Undo Manager.

The RichText Editor does not provides any user interface other than the editor area itself. However it does provides the necessary scripting interface to easily implement a user interface like a toolbar using bindings.

The RichText editor provides a basic overlay interface to extend the editor. The RichText editor provides two overlays: The resize to resize images and a link popup to allow user to navigate to a link.

The component itself can be found under /lab/lib/ui/rich-text-editor.reel/. There is also an test application under /lib/sandbox/ui/rich-text-editor-test/.

How to create a RichText Editor:

The easy way to create a RichText Editor is by using serialization. The minimum you need is a div tag and assign it a RichTextEditor component:


"editor": {
"module": "montage/lib/ui/rich-text-editor.reel",
"name": "RichTextEditor",
"properties": {
"element": {"#": "editor" }
}
}
…
<body>
<div id=”editor”>
	<span>Hello World!</span>
</div>
</body>

Properties:

You can set and get the content of the RichText Editor in HTML format via the value property or in plain text format via the textValue property, both properties are depending on each other.

You can also query or change the style of the current selection by using the formatting properties such as bold, italic, underline, etc...


activeOverlay [object, readonly]:
	[object] editor.activeOverlay
returns the currently active (displayed) overlay.

baselineShift [string]:
	[string] editor.baselineShift
returns the baseline shift for the current selected text.
editor.baselineShift = "baseline" | "subscript" | "superscript"
set the baseline shift for the current selected text. Set it to subscript or 
superscript. baseline is the default value.
If the selected text contains a mix of baseline shift, the return value of editor.baselineShift is depending of the browser’s implementation.

backColor [string]:
	[string] editor.backColor
returns the background color for the current selected text as a CSS rgb color.
editor.backColor = [string] | null
set the background color for the current selected text.

editor.backColor can be set to any valid CSS color value, however, the color is always returned as an rgb color. If the current selection is across elements with different background colors, the value of editor.backColor is depending of the browser’s implementation.

To remove a background color, set it to null.

bold [boolean]:
	[boolean] editor.bold
returns true if the current selected text is bold.
editor.bold = true | false	
add or remove the bold attribute to the selected text.

If the selected text contains some text in bold and some not, the return value of editor.bold is depending of the browser’s implementation.

delegate [object]:
	[object] editor.delegate
returns the delegate object.
editor.delegate = [object] | null
set the delegate object

Refer to the delegate section here after for a list of delegate methods a consumer can implement.

fontName [string]:
	[string] editor.fontName
returns the font family name for the current selected text as a CSS font-family.
editor.fontName = [string]
set the font family name  for the current selected text.

editor.fontName can be set to any valid CSS font-family value, including multiple values. If the current selection is across multiple font-family elements, the value of editor.fontName is depending of the browser’s implementation.

fontSize [string]:
	[string] editor.fontSize
returns the font size for the current selected text .
editor.fontSize = [string]
set the font size for the current selected text.

Only HTML font size value 1 to 7 are supported. If the current selection is a mix of font size, the value of editor.fontSize is depending of the browser’s implementation.


foreColor [string]:
	[string] editor.foreColor
returns the color for the current selected text as a CSS rgb color.
editor.foreColor = [string] | null
set the color for the current selected text.

editor.foreColor can be set to any valid CSS color value, however, the color is always returned as an rgb color. If the current selection is across elements with different colors, the value of editor.foreColor is depending of the browser’s implementation.

To remove a color, set it to null.

hasFocus [boolean, readonly]:
	[boolean] editor.hasFocus
returns true when the editor has focus, else return false.

innerElement [HTMLElement, readonly]:
	[HTMLElement] editor.innerElement
returns the editor inner element, the element which is editable.


isActiveElement [boolean, readonly]:
	[boolean] editor.isActiveElement
returns true when the editor his the active element, else return false.

Normally the activeElement has also focus, However, in a multiple window environment, it’s possible to be the activeElement without having focus. Typically, a toolbar item my steal the focus but not become the activeElement.

italic [boolean]:
	[boolean] editor.italic
returns true if the current selected text is italic.
editor.italic = true | false	
add or remove the italic attribute to the selected text.

If the selected text contains some italic text and some not, the return value of editor.italic is depending of the browser’s implementation.

justify [string]:
	[string] editor.justify
returns the justification for the current selected line.
editor.justify = "left" | "center" | "right"| "full"
set the justification for the current selected line.

If the current selection is across multiple lines with different justification, the value of editor.justify is depending of the browser’s implementation.

listStyle [string]:
	[string] editor.listStyle
returns the list style for the current selected text.
editor.listStyle = "none" | "unordered" | "ordered"
set the list style for the current selected text.

editor.listStyle can be use in combination with editor.indent and  editor.outdent to create a list hierarchy.	

overlays [Array]:
	[Array] editor.overlays
returns an array of overlay components.
editor.overlays = [Array] | null	
set the content to true to make the editor readonly

Overlays are extension that can be displayed on top of the editor based on the context. 

By default the editor install 2 overlays, one for resizing images and one to display a popup on top of a link to allow the user to navigate to that link.

Here is an example how to setup an overlays:

"myOverlay": {
"module": "myOverlay.reel",
"name": "MyOverlay"
},

"editor": {
"module": "montage/lib/ui/rich-text-editor.reel",
"name": "RichTextEditor",
"properties": {
"element": {"#": "editor" },
"overlays": [
	{"@": "myOverlay" }
]
}
}


See the overlay section hereafter to details.

readOnly [boolean]:
	[boolean] editor.readOnly
returns true if the content is read only, else return false.
editor.readOnly = true | false	
set the content to true to make the editor readonly

When the editor is set to read only, the user is not able to modify the content. However it still possible to set the content programmatically with editor.value or editor.textValue.

sanitizer [object]: 
	[object] editor.sanitizer
returns the sanitizer object.
editor.sanitizer = [object] | null	
set the sanitizer object

The editor by default install it’s own sanitizer. Only set the sanitizer if you want to provide your own or disable it.

See the Sanitizer section hereafter for details.

strikeThrough [boolean]:
	[boolean] editor.strikeThrough
returns true if the current selected text is strikethrough.
editor.strikeThrough = true | false	
add or remove the underline attribute to the selected text.

If the selected text contains some strikethrough text and some not, the return value of editor.strikeThrough is depending of the browser’s implementation.

textValue [string]:
	[string] editor.textValue
returns a plain text version of the content.
editor.value = [string]	
set the content to the specified plain text string.

By default, the original content of the element to which the editor is attached to is used.

underline [boolean]:
	[boolean] editor.underline
returns true if the current selected text is underline.
editor.underline = true | false	
add or remove the underline attribute to the selected text.

If the selected text contains some underline text and some not, the return value of editor.underline is depending of the browser’s implementation.

undoManager [object]:
	[object] editor.undoManager
returns the Montage Undo Manager associated with the component or null.
editor.undoManager = [object] | null	
associate a Montage Undo Manager with the editor.

As the RichTextEditor is based on content editable, it is automatically incorporated with the native Undo Manager provided by the browser. However it’s possible to also use the Montage Undo Manager. If you decide to use the Montage Undo manager, you should intercept the browser undo and redo keyboard shortcut in order to keep both the native and the Montage Undo Manager in sync.

By Default, the Montage’s default undo manager is assigned to editor.undoManager.

value [string]:
	[string] editor.value
returns the content as HTML.
	editor.value = [string]	
set the content to the specified HTML string.

By default, the original content of the element to which the editor is attached to is used.

Methods:

focus:
	editor.focus()

	set the focus on the editor element. The editor will also become the activeElement.

indent:
	editor.indent()

Indent the selected text. If the selected text is inside a list, calling editor.indent()
will move the selection into a sub list.
	
outdent:
	editor.outdent()

	Outdent the selected text. If the selected text is inside a list, calling
editor.outdent()will move the selection either out of the list or into the
parent list.

redo:
	editor.redo()

Redo the last editing operation that was canceled by undo.

undo:
	editor.undo()

undo the last editing operation.

selectAll:
	editor.selectAll()

select the whole editor’s content.
Note: Depending on the browser implementation, some of the outer element without direct text node wont be selected, therefore is you press delete after selecting all, some markup might still be there, you will have to Select all again to get rid of it.

selectElement:
	editor.selectElement([HTMLElement]element)

Select the specified element.

execCommand:
	editor.execCommand([string]command,[boolean]showUI,
value, [string]label)

This is equivalent to document.execCommand except that it will take care of putting the focus on the editor before executing the command, mark the editor’s content as dirty and will add the command to the Montage Undo Manager stack using the label provided.

You should only use that method if you are extending the editor’s functionality or writing your own overlay. The typical usage would be to insert HTML via the insertHTML command.
For all other command which are exposed by an editor’s property like bold or italic, use the editor property instead.

markDirty:
	editor.markDirty()

Mark the editor content as dirty. That will force the editor to generate editorChange event as well update the editor.value and editor.textValue properties.

This should only be called is your are extending the editor or writing an overlay.

showOverlay:
	editor.showOverlay([object]overlay)

Set the overlay as the active overlay and display it .

This should only be called is your are extending the editor or writing an overlay.

hideOverlay:
	editor.hideOverlay()

Hide the active overlay.

This should only be called is your are extending the editor or writing an overlay.

Events:

The editor generates events when either the data or the selection change. The consumer can listen to those events to do some custom work.

editorChange:
	editorChange is dispatched when the content of the editor is modified.
Note: this event is buffered to limit performance impact. The event is fired 100ms after the last change or in case or repetitive changes, at least once per second.

editorSelect:
	editorSelect is dispatched when the current selection or caret position change.

Note: this event is buffered to limit performance impact. The event is fired 100ms after the last selection or caret position change.


Delegate:

The consumer can setup a delegate to alter data received during a paste or drop operation before the editor’s content is modified. The delegate can implement any of the methods below. If there is not delegate or if the delegate does not implement one of those methods, the editor will skip the delegate and apply it’s default behavior.

If the editor has a identifier property, the identifier will be append to the delegate method name. Let say the editor.identifier = "editor" and the delegate want to implement the drop method. The method will need to be named editorDrop.

canDrag: 
	[boolean] delegate.canDrag(editor, event)

This is called when the user start dragging an HTML element from the editor’s content. 

	editor is the editor object itself.
	event is the current event.

use event.srcElement to find out which element is getting dragged.

Return true if you want to allow the source element to be dragged, else return false.

canDrop:

	[boolean] delegate.canDrop(editor, event, source)
	
This is called when the drag occurs over an HTML element in the editor’s content.

	editor is the editor object itself.
	event is the current event.
	source is the dragged element is originated from within the editor, else null.

use event.target to find out in which element the drop may happen.

Return true if you want to allow the source element to be dropped in the target, else return false.

shouldDrop:
[string | boolean] delegate.shouldDrop(editor, event, data,
 							contentType)

	Called when the user drop some data as either plain text or html into the editor.

	editor is the editor object itself.
	event is the current event.
	data is the data to insert as string.
	contentType specify the nature of the data (text/plain, text/html).

	The delegate can return the following value:

	true 		the editor will handle the drop itself.
	false		the drop is canceled.
	null		the drop is canceled.
	[string] 	the returned data will be inserted as HTML into the editor.
	
Note: the data is sanitized by the sanitizer before being handed to the delegate. You are responsible to sanitized any returned data. If you don’t want the user to be able to drop data or file into the editor, you should set editor.allowDrop = false.

shouldDropFile:
	[string | boolean] delegate.shouldDropFile(editor, file[, data])

Called when the user drop a file or a group of files into the editor. The delegate is called 
individually for each file.

	editor is the editor object itself.
	file is a File object.
	data, the content of the file as string. Only provided if the browser supports FileReader.

	The delegate can return the following value:

	true 		the editor will handle the drop itself.
	false		the drop is canceled.
	null		the drop is canceled.
	[string] 	the returned data will be inserted as HTML into the editor.
	
Note: Currently, the editor support only image files. If you want to handle other type of file, you must return some HTML data as string. You are responsible to sanitize the returned data. If you don’t want the user to be able to drop data or file into the editor, you should set editor.allowDrop = false.


shouldPaste:
	[string | boolean] delegate.paste(editor, event, data,
 							contentType)

	Called when the paste some data as into the editor.

	editor is the editor object itself.
	event is the current event.
data is the data to insert as string.
	contentType specify the nature of the data (currently, always text/html).

	The delegate can return the following value:

	true 		the editor will handle the paste itself.
	false		the paste is canceled.
	null		the paste is canceled.
	[string] 	the returned data will be inserted as HTML into the editor.
	
Note: the data is sanitized by the sanitizer before being handed to the delegate. You are responsible to sanitized any returned data.

shouldPasteFile:
	[string | boolean] delegate.shouldDropFile(editor, file[, data])

Called when the user paste an data as blob into the editor. Currently only images are supported

	editor is the editor object itself.
file is a File object.
	data, the content of the file as string. Only provided if the browser supports FileReader.

	The delegate can return the following value:

	true 		the editor will handle the paste itself.
	false		the paste is canceled.
	null		the paste is canceled.
	[string] 	the returned data will be inserted as HTML into the editor.
	
Note: You are responsible to sanitize the returned data.


Sanitizer:

The editor provides a sanitizer object by default. The role of the sanitizer is to cleanup any data before inserting it or extracting it from the editor. The default sanitizer will remove any scripting and scope any CSS before injecting any data into the editor. However, scripts are not removed when the initial value is set via editor.value = [string].

The consumer can however provides its own sanitizer or extend the default one in order to customize the editor’s behavior. The sanitizer must implement the following methods: 

willSetValue:
	[string] sanitizer.willSetValue(value, uniqueId)

Called when setting the editor’s value, right before the value is assigned to editor.value.

Returns the altered value as string.

The default sanitizer will scope any CSS using the uniqueId. 

didGetValue:
	[string] sanitizer.didGetValue(value, uniqueId)

Called when getting the editor’s value, right before the value is returned from editor.value.

Returns the altered value as string.

The default sanitizer will unscope any CSS using the uniqueId. 

willInsertHtmlData:
	[string] sanitizer.willInsertHtmlData(data, uniqueId)

Called when inserting data via a paste or drop.

Returns the altered data as string.

The default sanitizer will remove any script and scoop any CSS using the uniqueId. 


Overlays

Overlays are custom Montage UI component that can be display in a slot on top of the editor’s content. Only one overlay can be displayed at a time. Overlays can be use to display a specific UI when the user select or click on a specific element.

When an a mouse event or touch event occurs inside the editor, the event is passed down to the overlays via methods(editorMouseDown, editor.MouseUp, editorTouchStart and editorTouchEnd), a overlay can takeover the event by stopping the event. Overlay are also called when the editor selection change (editorSelectionDidChanged). The overlay can also prevent another overlay to receive that event by return true. 

When an event occurs, the active overlay is called first, then the other overlay are called in the order in the editor.overlays array order.

To become active, an overlay needs to call editor.showOverlay(this). And when an active overlay is done, it need to call editor.showOverlay()

The Editor provides and install by default two overlays:
an image resizer (montage/lab/lib/ui/rich-text-resizer.reel)
and a link popup (montage/lab/lib/ui/rich-text-linkpopup.reel)

Overlay Interface (all methods are optional, but you need to implement at least one):

initWithEditor:
	overlay.initWithEditor(editor)

Called when the overlay is installed, the editor object is provided as parameter.

didBecomeActive:
	overlay.didBecomeActive()

	Called when the overlay became active and it’s displayed in the edtior’s slot. 

didBecomeInactive:
	overlay.didBecomeInactive()

Called when the overlay became inactive and it’s not displayed anymore.

editorMouseDown:
	overlay.editorMouseDown(event)

return true to prevent other overlay to receive that event. You may want to stop the propagation of the event.

editorMouseUp:
	overlay.editorMouseUp(event)

return true to prevent other overlay to receive that event. You may want to stop the propagation of the event.

editorTouchStart:
	overlay.editorTouchStart(event)

return true to prevent other overlay to receive that event. You may want to stop the propagation of the event.

editorTouchEnd:
	overlay.editorTouchEnd(event)

return true to prevent other overlay to receive that event. You may want to stop the propagation of the event.

editorSelectionDidChange:
	overlay.editorSelectionDidChange(range)

return true to prevent other overlay to receive that event.
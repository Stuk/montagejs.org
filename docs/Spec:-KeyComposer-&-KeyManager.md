## Introduction

A desktop application would not be complete without shortcuts, usually menu shortcuts. There is no difference with a web application, Montage needs to provides support for shortcuts.

At the time this specs is written, Montage does not offer a menu component, however shortcut could be used by an application event without menus.

There is two types of key sequences: shortcuts and hotkeys. A shortcut consists of multiple keys pressed at the same time, usually including at least one modifier key such as command, alt, control, meta or shift (i.e: CMD+Z, CTRL+X, CMD+SHIFT+TAB). A Hotkey consists of only one key (i.e: TAB, ENTER, ESC).

In the context of Montage, there is no reason to differentiate hotkeys from shortcuts, therefore when this document uses the term shortcuts, it means shortcuts and hotkeys, unless say otherwise.

Due to the complex disparity in handling key events across browsers, platform and keyboard layout (l10n), shortcuts needs to stay simple in order to be compatible as much as possible, ideally shortcut should uses only letters A to Z, numbers 0 to 9 and some punctuation. Even so, it would be hard to guarantee that a specific shortcut would work everywhere.

Another limitation is that a shortcut can only consists of none or several modifiers and one other key. Montage will not support shortcut such as CMD+P+R. Hotkeys by definition are only one key.

## Mac versus the rest of the world!

Macintosh uses the Command key (⌘) while other vendors (including iOS) uses the control key for standard shortcuts modifier. ⌘+Z on Mac is the equivalent of Control+Z on Windows and Unix. The ⌘ key correspond to the DOM META modifier key.

By using the term CMD or COMMAND in a shortcut, it will be interpreted internally as META on Mac and CTRL elsewhere. However, if you specify CTRL or META in the shortcut sequence, it will be interpreted as is on all platforms.

## Solution

The solution retained consists of KeyComposers and a KeyManager.

If you want to provide a shortcut for your component, let say command+z for undo, you first need to create a key (KeyComposer) and add an event listener on that key:

```javascript
var KeyComposer = require("montage/ui/composer/key-composer").KeyComposer;
```

// short way
```javascript
KeyComposer.createKey(this, "command+z", "undo").addEventListener("keyPress", this);
```

// long way
```javascript
var undoKeyComposer = KeyComposer.create();
undoKeyComposer.keys = "command+z";
undoKeyComposer.identifier = "undo";
this.addComposer(undoKeyComposer);
undoKeyComposer.addEventListener("keyPress", this);
```

then you need to define an listener handler (unless you provided a function  when adding the listener), here are the different handler possibilities for the undo key above:

```javascript
handleEvent: {value: function(event) {...}}
handleKeyPress {value: function(event) {...}}
handleUndoKeyPress: {value: function(event) {...}}
captureKeyPress {value: function(event) {...}}
captureUndoKeyPress: {value: function(event) {...}}
```

The target property of the event is the KeyComposer object that triggered the event. The activeElement property represents the element who received the keyboard event, could be the keyComposer's element or one of its descendant:

```javascript
handleKeyPress: {value: function(event) {
	var keyComposer = event.target,
    activeElement = event.activeElement;

	if (keyComposer.identifier === "undo") {
		...
	}
}}
```

You can also instantiate and configure a KeyComposer directly from a template:

```json
{
    "myShortcut": {
        "prototype": "montage/ui/composer/key-composer",
        "properties": {
            "keys": "command+z",
            "identifier": "undo",
            "component": {"@": "example"}
        },
        "listeners": [
            {
                "type": "keyPress",
                "listener": {"@": "delegate"}
            }
        ]
    }
}
```

While a Composer can only be associated with a Montage UI Component, the KeyComposer accept to be attached to any Montage Object. If the component does not have an element property, the scope of the ComposerKey will be the window itself.

Behind the scene, the KeyComposer will instantiate the defaultKeyManager and register the key with the manager. This is done only once the composer has been loaded and that at least one event listener has been added. To prevent loading the KeyManager code when not needed, the KeyComposer uses a KeyManagerProxy. The KeyManager itself will be loaded asynchronously after most components of the application has been already loaded.

The KeyManager will listen for native key events (keydown, keypress and keyup) on behalf of all the KeyComposer objects and detect if any composed key has been pressed or released and dispatch keyPress, longKeyPress (must be pressed for at least 1 second) and keyRelease custom events on the corresponding KeyComposer object using the composer's element as target.

If you need a shortcut which is not depending on a specific target, you can either set the element of the KeyComposer object to the window element or just use the KeyComposer.createGlobalKey method.

The developer should not have to interact directly with the KeyManager but only with the KeyComposer. The only reason to access the KeyManager would be to adjust the threshold of long key presses:

var defaultKeyManger = require("core/event/key-manager").defaultKeyManager;
defaultKeyManger.longPressThreshold = 500;
Key sequence


A key sequences (keys) consists of a list of modifier's names followed by one character or key name separated by the + character. Capitalization in the sequence as well spaces are ignored. Order of the modifiers does not matter. Here are some valid key sequences:

`enter`
`command+Z`
`shift + cmd + z`
`ctrl+alt`  (in that case, `alt` is considered as the key and `ctrl` as the modifier)

A modifier could be any of the following:
`shift`
`control` or `ctl`, `ctrl`
`alt`or `opt`, `option`
`meta` or `win`, `windows`
The following key names are accepted in key sequence (note: not all name will work on every device of browser):

``
    backspace
    tab
    enter
    capslock
    escape
    space
    pageup
    pagedown
    end
    home
    left
    up
    right
    down
    delete
    semicolumn
    column
    equal
    plus
    comma
    less
    minus
    underscore
    period
    greater
    slash
    questionmark
    backtick
    tilde
    openingsquarebracket
    openingcurlybracket
    backslash
    pipe
    closingsquarebracket
    closingcurlybracket
    singlequote
    doublequote
    clear
    numpad0 to numpad9
    multiply
    add
    subtract
    decimal
    divide
    f1 to f24
``

# KeyComposer API

`montage/ui/composer/key-composer.KeyComposer`

Create a virtual key composed of none or several key modifiers (shift, control, alt and meta) and one native key.

### Properties summary

`identifier`	The keyComposer's identifier.

`keys`	The sequence of keys to compose.


### Method summary

`addEventListener`	Add an event listener to the composerKey.

`createGlobalKey`	Create a global composerKey. A global key will dispatch events without requiring the component's element be in the native key event target path If no identifier is provided, the keys and component's identifier will be used to generate an identifier. Note: You do not have to call KeyComposer.create() before calling this method.

`createKey`	Create a ComposerKey. The key will only dispatch events when the component's element is in the native key event target path. If no identifier is provided, the keys and component's identifier will be used to generate an identifier. Note: You do not have to call KeyComposer.create() before calling this method.

**Extends**

`module:montage/ui/composer/composer.Composer`

## Members

### `identifier` :string

The keyComposer's identifier.
Default Value: null

### `keys` :string

The sequence of keys to compose.
Default Value: null

## Methods

### `addEventListener()`

Add an event listener to the composerKey.

**Parameters:**

`type`	        string               Any of the following types: keyPress, longKeyPress and keyRelease.

`listener`	Object | function    The listener object or function to call when dispatching the event.

`useCapture`	boolean	             Specify if the listener want to be called during the capture phase of the event.

### `createGlobalKey()` → {Object}

Create a global composerKey. A global key will dispatch events without requiring the component's element be in the native key event target path If no identifier is provided, the keys and component's identifier will be used to generate an identifier. Note: You do not have to call KeyComposer.create() before calling this method.

**Parameters:**

`component`	Object     The component to attach the keyComposer to.

`keys`	        Object     The key sequence.

`identifier`	Object     The identifier.

**Returns:** the newly created KeyComposer Object - TypeObject

### `createKey()` → {Object}

Create a ComposerKey. The key will only dispatch events when the component's element is in the native key event target path. If no identifier is provided, the keys and component's identifier will be used to generate an identifier. Note: You do not have to call KeyComposer.create() before calling this method.

**Parameters**:

`component`	Object	The component to attach the keyComposer to.

`keys`	Object	The key sequence.

`identifier`	Object	The identifier.

**Returns:** the newly created KeyComposer Object - TypeObject

## Events:

`keyPress`	Triggered when a composerKey is pressed

`longKeyPress`	Triggered when a composerKey is presses for long period of time (see KeyManager.longPressThreshold)

`keyRelease`	Triggered when a keyComposer is released

Each Events has a target property who represents a keyComposer and an activeElement property who represents the DOM element who received the keyboard event. activeElement could be the composerKey's element or one of its descendant.

# KeyManager API

`montage/core/event/key-manager.KeyManager`

The KeyManager dispatches KeyComposer events when it detects a keyComposer has been pressed or released. Do not create a KeyManager directly but instead require for the defaultKeyManager: require("core/event/key-manager").defaultKeyManager

### Properties summary

`longPressThreshold`	The number of milliseconds a key must be pressed in order to dispatch a longKeyPress event.


### Method summary

`registerKey`	Register a composerKey.

`unregisterKey`	Unregister a composerKey. if a key has been registered multiple time, unregister must be called the same amount of time before the key is actually unregistered.

**Extends** `module:montage/core/core.Montage`

## Members

### `longPressThreshold` :number

The number of milliseconds a key must be pressed in order to dispatch a longKeyPress event.
Default Value: 1000

## Methods

### `registerKey()`

Register a composerKey.

**Parameters:**

`keyComposer`	Object	The key to register.

### `unregisterKey()`

Unregister a composerKey. if a key has been registered multiple time, unregister must be called the same amount of time before the key is actually unregistered.
Parameters:

`keyComposer`	Object	The key to unregister.

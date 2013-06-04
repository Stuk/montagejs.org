---
layout: docs
title: Getting Started
---

Checkbox Component

Checkbox Component wraps a HTML <input type=”checkbox” ../> element and provides data binding support. Checkbox extends from CheckInput.

Properties

checked

Data Type = boolean, Default value = false
Whether the radio button is checked or not. Takes it’s value from the presence (true) or absence (false) of the checked attribute.


Standard Attributes for HTML Input element
http://www.w3.org/TR/html5/the-input-element.html#the-input-element

autofocus

Data Type = string, Default value = false
disabled

Data Type = boolean, Default value = null
form

Data Type = string, Default value = null
name

Data Type = string, Default value = null
readonly

Data Type = boolean, Default value = null
title

Data Type = string, Default value = null
value

Data Type = string, Default value = on

Events

action

Triggered when the user changes the value of this radio button, i.e. if the radio button is unchecked due to the user checking another radio button, then the action will not be triggered.
Markup & Serialization

<label>
      <input type="checkbox" id="check1" name="checkbox-group" />
      Option #1
</label>
<label>
    <input type="checkbox" id="check2" name="checkbox-group" checked/>
    Option #2
</label>


"check1": {
            "module": "montage/ui/checkbox.reel",
            "name": "Checkbox",
            "properties": {
                "element": {"#": "check1"}
            },
            "bindings": {
                "checked": {
                    "boundObject": {"@": "check3"},
                    "boundObjectPropertyPath": "checked",
                    "oneway": true
                }
            }
        },


Notes

* ArrayController - parse Array with the same # as the # in the organizedObjects with either a null/undefined value to indicate deselected state OR the actual value to indicate selection.
* Repetition - Add selectionAtCurrentIteration/isCurrentIterationSelected
* Checkbox - Add a “input” property to bind to the objectAtIterationIndex of the repetition
* Checkbox - Add a “output”  property to bind to the isCurrentIterationSelected of the repetition
	input === output if it’s checked, null if isn’t
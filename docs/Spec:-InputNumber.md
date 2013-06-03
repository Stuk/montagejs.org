---
layout: docs
title: Getting Started
---

NumberInput Component

NumberInput is a Component wrapper for the <input type=”number”> HTMLElement. The HTML markup for the NumberInput is the same as the standard HTML5 markup (<input>). Wrapping the <input> HTMLElement as a Montage NumberInput component adds Data Binding support for all writable attributes of this element.

It supports all (most?) standard attributes of the <input> HTMLElement as specified here - http://www.w3.org/TR/html5/the-input-element.html#the-input-element

Properties

value

Type: string
Default: 
Text to be displayed in this component

converter

Type: Object instance
Default: null
Optional. If provided, the converter will be used to convert the value before the value is displayed.

updateOnInput
Type: boolean
Default: true
This property allows the App developer to force the conversion and setting of the “value” property “on change” instead of “on input”.

Some converters like the  DateConverter do not support partial conversion (eg: as the user is typing in) and therefore the converter is called only when the user has finished typing and tabs out of the field. By setting this flag to false, the converter will be invoked only on “change” and not on “input” regardless of the type of converter.

errorMessage
Data Type = String, Default value = null (if there is no error)

// Standard HTML5 Attributes

autocomplete
Data Type = Boolean, Default value = false
accept string: “on”, “off”

disabled
Data Type = boolean, Default value = false

list
Data Type = String, Default value = false

maxlength
Data Type = Number, Default value = false

min
Data Type = Number, Default value =  null

max
Data Type = Number, Default value = null

multiple
Data Type = Number, Default value = null

name
Data Type = String, Default value = null

placeholder
Data Type = String, Default value = null

pattern
Data Type = String, Default value = null
    
readonly
Data Type = Boolean, Default value = null

required
Data Type = Boolean, Default value = null

step
Data Type = Number, Default value = null

size
Data Type = Number, Default value = null

title
Data Type = String, Default value = null


Markup & Serialization


Textfield with input type=”number”

	<input type="number" id="number1" step="10" max="1000" min="0"  />
	
with Serialization. The ‘value’ and ‘max’ attributes are bound.

       "number1": {
           "module": "montage/ui/textfield.reel",
           "name": "Textfield",
           "properties": {
               "element": {"#": "number1"}
           },
           "bindings": {
               "value": {
                   "boundObject": {"@": "range1"},
                   "boundObjectPropertyPath": "value",
                   "oneway": false
               },
               "max": {
                   "boundObject": {"@": "limit-max"},
                   "boundObjectPropertyPath": "value",
                   "oneway": true
               }
           }
       },


Unit Tests: test/ui/number-input-spec.js
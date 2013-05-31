RangeInput Component

RangeInput is a Component wrapper for the <input type=”range”> HTMLElement. The HTML markup for the RangeInput is the same as the standard HTML5 markup (<input>). Wrapping the <input> HTMLElement as a Montage RangeInput component adds Data Binding support for all writable attributes of this element.

It supports all (most?) standard attributes of the <input> HTMLElement as specified here - http://www.w3.org/TR/html5/the-input-element.html#the-input-element

Properties

value

Type: string
Default: 
Text to be displayed in this component

Global HTMLElement Attributes
http://www.w3.org/TR/html5/elements.html#global-attributes

title
Data Type = String, Default value = null

Standard HTMLElement Attributes of <input>

min
Data Type = Number, Default value =  null

max
Data Type = Number, Default value = null

step
Data Type = Number, Default value = null

disabled
Data Type = boolean, Default value = false

name
Data Type = String, Default value = null
     
readonly
Data Type = Boolean, Default value = null

required
Data Type = Boolean, Default value = null

title
Data Type = String, Default value = null


Markup & Serialization


RangeInput with input type=”range”


<input type="range" id="range1" min="0"  value="90" />

Serialization:

"range1": {
            "module": "montage/ui/RangeInput.reel",
            "name": "RangeInput",
            "properties": {
                "element": {"#": "range1"}
            },
            "bindings": {
                "max": {
                    "boundObject": {"@": "limit-max"},
                    "boundObjectPropertyPath": "value",
                    "oneway": true
                }
            } 
        },

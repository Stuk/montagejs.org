InputText is a Component wrapper for the `<input>` HTMLElement. The HTML markup for the InputText is the same as the standard HTML5 markup (`<input>`). Wrapping the `<input>` HTMLElement as a Montage Textfield component adds Data Binding support for all writable attributes of this element.

It supports all (most?) standard attributes of the `<input>` HTMLElement as specified here - http://www.w3.org/TR/html5/the-input-element.html#the-input-element
https://developer.mozilla.org/en/HTML/Element/Input

## Properties

`value`

Type: string
Default: 
Text to be displayed in this component

`converter`
Type: Object instance
Default: null
Optional. If provided, the converter will be used to convert the value before the value is displayed.

`updateOnInput`
Type: boolean
Default: true
This property allows the App developer to force the conversion and setting of the “value” property “on change” instead of “on input”.

Some converters like the  DateConverter do not support partial conversion (eg: as the user is typing in) and therefore the converter is called only when the user has finished typing and tabs out of the field. By setting this flag to false, the converter will be invoked only on “change” and not on “input” regardless of the type of converter.

`errorMessage`
Data Type = String, Default value = null (if there is no error)

// Standard HTML5 Attributes

`autocomplete`
Data Type = Boolean, Default value = false
accept string: “on”, “off”

`disabled`
Data Type = boolean, Default value = false
Doesn’t prevent the value to be changed programmatically via the value property

`list`
List of options
Data Type = String, Default value = null
The id of a datalist on the same document.
polyfill to a getElementById on input.
        
`maxlength`
Data Type = Number, Default value = null

`multiple`
Data Type = String, Default value = null

`name`
Data Type = String, Default value = null
     
`pattern`
Data Type = String, Default value = null
        
`placeholder`
Data Type = String, Default value = null

`readonly`
Data Type = Boolean, Default value = null

`required`
Data Type = Boolean, Default value = null

`size`
Data Type = String, Default value = null

`title`
Data Type = String, Default value = null

## Markup & Serialization

### InputText with input type=”text”
```html
<input type="text" placeholder="Enter first name" id="fname" required value="foo" maxlength="20"/>
```

Serialization spec with bindings to the value and title attributes of the Textfield
```json
{
"fname": {
            "module": "montage/ui/textfield.reel",
            "name": "Textfield",
            "properties": {
                "element": {"#": "fname"},
                "maxlength": "5"
            },
            "bindings": {
                "value": {
                    "boundObject": {"@": "sample-form"},
                    "boundObjectPropertyPath": "firstName",
                    "oneway": false
                },
                "title": {
                    "boundObject": {"@": "sample-form"},
                    "boundObjectPropertyPath": "firstName",
                    "oneway": false
                }
                
            }
        }
}
```
### Textfield with input type=”email”
```html
<input type="email" id="email1" value="foo@bar.com" />
```

Serialization
```json
{
"email1": {
            "module": "montage/ui/textfield.reel",
            "name": "Textfield",
            "properties": {
                "element": {"#": "email1"}
            },
            "bindings": {
                "value": {
                    "boundObject": {"@": "sample-form"},
                    "boundObjectPropertyPath": "email",
                    "oneway": false
                }
            }           
        }
}
```

### Textfield with input type=”date”/”datetime”/
```html
<input type="date" id="date1" value="" />
<input type="date" id="arrival-date" value="" class="span2"/>
<input type="time" id="arrival-time" value="" class="span2"/>
```

Serialization:
```json
{       
    "date1": {
         "module": "montage/ui/textfield.reel",
         "name": "Textfield",
         "properties": {
             "element": {"#": "date1"},
              "converter": {"@": "dateconverter1"}
         }            
    }
}
```

Tests - [test/ui/textfield-spec.js](https://github.com/Motorola-Mobility/montage/blob/master/test/ui/textfield-spec.js)
TextArea Component

TextArea is a Montage Component wrapper for the <textarea> HTMLElement. Montage provides data binding support for the standard <textarea> component.

It supports all (most?) standard attributes of the <textarea> HTMLElement as specified here - http://www.w3.org/TR/html5/the-button-element.html#the-textarea-element

Properties

value

Type: string
Default: 
converter

Type: Object instance
Default: null
Optional. If provided, the converter will be used to convert the value before the value is displayed.

Global HTMLElement Attributes
http://www.w3.org/TR/html5/elements.html#global-attributes

title
Data Type = String, Default value = null

Standard HTMLElement Attributes of <textarea>

cols
Data Type = String, Default value = null

disabled
Data Type = boolean, Default value = null

maxlength
Data Type = String, Default value = null
        
placeholder
Data Type = String, Default value = null

readonly
Data Type = Boolean, Default value = null

required
Data Type = Boolean, Default value = null

rows
Data Type = String, Default value = null

wrap
Data Type = String, Default value = null


Markup and Serialization


<textarea id="info1" class="xlarge">Use this area to tell us a little about yourself</textarea>

        "info1": {
            "module": "montage/ui/textarea.reel",
            "name": "TextArea",
            "properties": {
                "element": {"#": "info1"}
            }
        },

# Component Extending
_Editor António Afonso_

Index
* Introduction
* Functional Description
* API
* extends Template Property
* Examples

## Introduction

This specification describes how a developer can inherit and specialize components, either their own or from other packages.

Extending a component is somewhat similar to extending a JavaScript object — by creating a new one and making its prototype be the extended object — with the caveat of also having to extend its template counterpart when present.

## Functional Description

The process of extending a component is the same as creating an entirely new component using the original one as its prototype.

If the customization doesn’t require a change in the controller of the component (i.e.: the JavaScript object) then it is sufficient to create an instance of the extended object.

When the extended component has a template the developer needs to create its own template or point to the extended one.

## API

There are three options to extend a component’s template:

1. Set the `templateModuleId` to point to the parent if that is the exact one needed (e.g.: if the extended component doesn’t wish to introduce changes in the template).
2. Create a new template that will completely redefine the markup of the component with no relation to the original template.
3. Set the `extends` property of the template that points to the template to be imported and where. This is similar to the “Web Components Explained” [decorator](http://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html#decorator-section). This approach is useful when the component needs to add additional CSS data and/or reuse the original markup. The template object will be accessible through the template label of the serialization.

`extends` Template Property

This property needs to be an object with a `templateModuleId` of the template to extend and an `element` where the template’s elements should be inserted.
This extended template will be instantiated using the same instances that were provided to the component’s template, this means that the `owner` object of the extended template will still be the component.

An additional `instances` property can also be defined to provide a different set of instances to the extended template. This property must be in the label/object key-value format just like the `instantiateWithInstances` parameters.

All the elements inside the body of the extended template will be inserted at the `element` location.

The current template being instantiated can be accessed in the serialization through the `template` label, the template will make sure this label will be associated with its own instance.

`Template.defineExtension(<templateModuleId>, <elementId>, <instances>)` is the programmatic way of extending a template.

## Examples

### Extending the Toggle component by only changing its markup:

**my-toggle.js**
```javascript
var Montage = require("montage").Montage,
    Toggle = require("ui/toggle").Toggle;

exports.MyToggle = Montage.create(Toggle);
```

**my-toggle.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="my-toggle.css">
    <script type="text/montage-serialization">
    {
        "owner": {
            "prototype": "my-toggle.reel",
            "properties": {
                "element": {"#": "my-toggle"}
            }
        }
    }
    </script>
    
</head>
<body>
    <div id="my-toggle">
        <div id="thumb" />
    </div>
</body>
</html>
```

### Extending the Toggle component by only changing some of its logic:
**my-toggle.js**
```javascript
var Montage = require("montage").Montage,
    Toggle = require("montage/ui/toggle.reel").Toggle;

exports.MyToggle = Montage.create(Toggle, {
    draw: {
        value: function() {
            // my different draw implementation
        }
    },
    templateModuleId: {
        value: "montage/ui/toggle.reel/toggle.html"
    }
});
```

### Extending the Toggle component by adding styling elements:
**my-toggle.js**
```javascript
var Montage = require("montage").Montage,
    Toggle = require("montage/ui/toggle.reel").Toggle;

exports.MyToggle = Montage.create(Toggle, {
    draw: {
        value: function() {
            // my different draw implementation
        }
    }
});
```

**my-toggle.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="my-toggle.css">
    <script type="text/montage-serialization">
    {	
             "owner": {
		  "prototype": "my-toggle.reel",
            "properties": {
                "element": {"#": "my-toggle"}
            }
        },
 
        "template": {
           "properties": {
               "extends": {
                   "templateModuleId": "montage/ui/toggle.reel/toggle.html",
                   "element": {"#": "toggle"},
			   "instances": {
      			  "owner": {"@": " owner"}
                   }
               }
           }
       }
    }
    </script>
    
</head>
<body>
    <div id="my-toggle"> ← (merge attributes from toggle.html)
       <h1>My Toggle</h1>
       <div id="toggle"></div>
   </div>
</body>
</html>
```
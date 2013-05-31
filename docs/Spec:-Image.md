Image Component

Image wraps a <img> HTMLElement and provides Data binding support. Image extends from NativeControl.

Properties


alt
Data Type = String, Default value = “”

height
Data Type = String, Default value = null

src
Data Type = String, Default value = null

width
Data Type = String, Default value = null

title
Data Type = String, Default value = null




Markup and Serialization


<img id="img-main" class="img-main"/>

"main-image": {
        "module": "montage/ui/image.reel",
        "name": "Image",
        "properties": {
            "element": {"#": "img-main"}
        },
        "bindings": {
            "src": {
                "boundObject": {"@": "images"},
                "boundObjectPropertyPath": "selectedObjects.0.src",
                "oneway": true
            },
            "title": {
                "boundObject": {"@": "images"},
                "boundObjectPropertyPath": "selectedObjects.0.description",
                "oneway": true
            },
            "alt": {
                "boundObject": {"@": "images"},
                "boundObjectPropertyPath": "selectedObjects.0.description",
                "oneway": true
            }
        }
    },
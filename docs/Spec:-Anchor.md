---
layout: docs
title: Getting Started
---

Anchor wraps a `<a>` HTMLElement and provides Data binding support. Anchor extends from NativeControl.

Fires an _action_ event

## Properties

`textContent` (added to component) same as dynamic-text

`hash`
Data Type = String, Default value = null

`href`
Data Type = String, Default value = null

`hreflang`
Data Type = String, Default value = null

`media`
Data Type = String, Default value = null

`rel`
Data Type = String, Default value = null

`target`
Data Type = String, Default value = null

`type`
Data Type = String, Default value = null

`name`
Data Type = String, Default value = null

## Markup and Serialization

```html
<tbody id="table-row">
<tr>
   <td><a id="link" target="_blank"></a></td>
   <td><span id="desc"></span></td>
</tr>
</tbody>
```

```json
{
    "link": {
        "module": "montage/ui/anchor.reel",
        "name": "Anchor",
        "properties": {
            "element": {"#": "link"}
        },
        "bindings": {
            "href": {
                "boundObject": {"@": "list1"},
                "boundObjectPropertyPath": "objectAtCurrentIteration.href",
                "oneway": true
            },
            "textContent": {
                "boundObject": {"@": "list1"},
                "boundObjectPropertyPath": "objectAtCurrentIteration.src",
                "oneway": true
            }
        }
    }
}
```

Example: examples/sink/components/anchor-example.reel
Unit Tests: test/ui/anchor-spec.js
title: Custom Serialization
editor: António Afonso dos Santos Martins

## Introduction

The former method to achieve a custom serialization on an object is to
implement the `serializeSelf(serializer, propertyNames)` method that allows the
object to specify which values to serialize.

However, this approach only allows the object to choose which values to
serialize in the properties of a serialization, while other units — like
bindings or the type of object — are automatically decided by inspecting the
object. As a consequence, changing the object to be serialized is also not
possible.
This type of fine grained customization is needed in different parts of the
framework:
The bindings as well as the listeners just need to serialize a literal object
and not the underlying montage object they are represented with; this is also
the format inputted by the user at the moment.
The repetition when serializing an iteration doesn’t need (or want) to
reserialize its bindings and/or listeners.
This specification proposes a different API to accommodate these needs.

## Functional Description

The API should be able to define the serialization of:

-   type: “object” or ”prototype” or ”value”
-   properties
-   other units: bindings, listeners

## API

Rename current `serializeSelf` to `serializeProperties`.
Rename current `deserializeSelf` to `deserializeProperties`.

Add the following delegates:

-   `serializeSelf(serializer, propertyNames)`

    If this function returns a value other than undefined, that value
    will be serialized instead of the current object.

    -   `serializer`: serializer instance
    -   `propertyNames`: array of property names declared as serializable.

-   `deserializeSelf(deserializer)`

    -   `deserializer`: deserializer instance

Add the following API to Serializer:

-   setType(type, value)

    The set of the type is completely optional because the default for
    the current object is already applied.

    -   type: can be one of “prototype”, “object” or “value”.
    -   value: the value of the type, a module id in the case of
        “property” or “object”, a value if “value”.

-   setProperties(names)

    -   names: an array of property names to be added to the properties serialization unit.

-   setProperty(name, value)

    -   name: the name to use in the properties serialization unit to
        serialize the value given.  value: the value to serialize.

-   setUnits()

    add all serialization units to the object serialization.

-   setUnit(name)

    -   name: the name of the serialization unit to add to the object
        serialization.

-   getObjectLabel(object)

    -   object: the object to get the label from.


Add the following API to Deserializer:


-   deserializeProperties()

    Deserializes the entire properties serialization unit.

-   getProperty(name)

    Gets the value for the property name given.

    -   name: the name of the property.

-   deserializeUnits()

    Deserializes all serialization units.

-   deserializeUnit(name)

    -   name: the unit name to be deserialized.

-   getType()

    Gets the type of the serialized object/value.  It can be one of:
    “prototype”, “object” or “value”.

-   getTypeValue()

    Gets the value of the object type, a module id in the case of “property” or “object”, a value if “value”.

-   getObjectByLabel(label)

    -   label: The label of the object to return.

Changes to the Serializer API:

-   addObjectReference(object) -> <objectReference>

    Returns an object reference to the object.

## Examples

### Repetition

The Repetition can improve the serialization of its iteration by using
the following delegate:

```javascript
{
    serializeSelf: function(serializer) {
        serializer.setProperty("element", this._element);
        serializer.setProperty("_isComponentExpanded", true);
    }
}
```

Bindings and listeners will not be serialized.

### Binding Descriptor

```javascript
{
    serializeSelf: function(serializer) {
        return {
            boundObject: serializer.getObjectReference(this.boundObject),
            boundObjectPropertyPath: this.boundObjectPropertyPath,
            oneway: this.oneway,
            deferred: this.deferred,
            converter: this.converter
        }
    }
}
```

Returns an object literal to serialize instead.

## Concerns

-   No idea on how to make (de)serializeSelf backwards compatible, ideas
    are welcome.

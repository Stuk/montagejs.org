
Component Customization	Editors António Afonso
        Kris Kowal


Index
Introduction
Functional Description
API
Modification
Conditional Configuration
Application Algorithm
Criterion Algorithm
Examples

Introduction

A fundamental part of component design is the ability to customize and extend the component in a way that doesn’t compromise its original design.

The customization of a component can target different dimensions — color scheme, UX changes, region restrictions, specialization, etc. — however, they can be seen as a ui or controller extension of the component.

This specification describes how a developer can extend his own, or 3rd party components, to achieve the desired customization.
Functional Description

Any customization made on a component should be the result of extending the component and adding the necessary changes.

The process of extending a component is detailed in the spec “Component Extending”.
The new component needs to have the same name of the component being extended. We use the same name as a convention to know which components a specific package overrides without having to declare them in a configuration file.

Components customizations should be bundled in a specific package for that purpose. If this customization package is a dependency of any package in the application, it will find and apply its customizations to the package it is intended to modify.

A theme, for instance, can be implemented as a package that extends a set of components in a way that modifies the color scheme of the components.
API

A theme is a package that is configured as being a modification of another package. This configuration is achieved by using the following properties on package.json:
Modification


modifies: "<package path>" | {"location": "<package path>" | "name": "<package name>"}

Identifies this package as a file overlay on another package, using a mapping-style dependency.  It can be either a string or an object.  If it is a string, it is equivalent to {"location": string}.  If it is an object it can have either location or name properties.  If it is a location, it must be a path relative to package.json to the other package directory, with or without a final slash.  If it is a name, the location is inferred from a package with the same name.
The name is potentially ambiguous, but generally the global namespace for package is managed by NPM.

Modification creates a new package that replaces the original.  The new package.json is created by applying the modifier package.json to the original using the application algorithm.
Conditional Configuration


if: {"<criterion>": {"path": "<root path>", "manifest": ["<component path>", ...]}}

The “if” object contains an ordered mapping from criteria to a modifier to the root of package.json.  For each criterion, in order, the modifier is applied using the application algorithm described below if the criterion is satisfied using the criterion algorithm.  Criteria can be a diverse set of conditions.
Application Algorithm

[Kris Kowal will write this bit]
Criterion Algorithm

[Kris Kowal will write this bit]
Examples

{
    "modifies": {"name": "montage"},
    "manifest": [
        "ui/slider.reel",
        "ui/toggle.reel"
    ]
}

{
    "modifies": {"name": "montage"},
    "if": {
        "platform:android": {
            "path": "android/",
            "manifest": [
                "ui/slider.reel",
                "ui/toggle.reel"
            ]
        }
    }
}
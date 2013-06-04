---
layout: docs
title: Getting Started
---


ArrayController	Editor François Frisch


Index
Introduction
Functional Description
API
Examples
Integration
Dependencies
Concerns

Introduction

The Array Controller is used to manage information about an array such as selection. It makes it possible to temporarily expose a sorted or filtered view of it via the organizedObjects property.

API

Initialization

initWithContent(content)
Arguments: Array
Initalizes the ArrayController with the specified content. 
Base

content
Type: Array
Default: null
The content managed by the ArrayController.
The array passed in to this function is observed so that modifications are reflected in the organizedObjects automatically if automaticallyOrganizeObjects is true.
organizedObjects
Type: Array
Default: null
The filtered and sorted content of the ArrayController.
Selection

selectedObjects
Type:
Default: 
Gets or sets the selected objects in the collection.
selectedContentIndexes
Type:
Default: 
Gets or sets the indexes of the currently selected items in the content array.
selectedIndexes
Type:
Default: 
Gets or sets the indexes of the currently selected items in the organizedObjects array.

TO ADD? selectNext, canSelectNext, selectPrevious, canSelectPrevious
Modifying organizedObjects array

sortFunction
Type: function
Default: null
The sort function used to organize the array collection.
filterFunction
Type: function
Default: null
The filter function used to organize the array collection.
startIndex
Type: number
Default: null
The filter function used to organize the array collection.
endIndex
Type: number
Default: null
The filter function used to organize the array collection.
Changing Default Behavior

selectObjectsOnAddition
Type: boolean
Default: false
Specifies whether new objects that are added to the array collection are automatically selected.
automaticallyOrganizeObjects
Type: boolean
Default: true
Specifies whether the ArrayCollection's content is automatically organized (true, by default).
clearFilterFunctionOnAddition
Type: boolean
Default: true
A Boolean that specifies whether the filter function is set to null when new objects that are added to the content.
delegate
Type: ArrayController delegate
Default: null
The ArrayController delegate

Methods
add()
Arguments: none
Adds an item to the content array.
remove()
Arguments: none
Removes the currently selected item or items from the content array.
addObjects()
Arguments: objects to add
Adds one or more items to the array controller's content array.
removeObjects()
Arguments: objects to remove
Removes the specified object or objects from the content array.
organizeObjects()
Arguments: none
Organizes the content array using the filter and sort functions, if defined. The result can be accessed via the organizedObjects property.

Delegate Methods
prop
Type:
Default: 
desc
TO ADD? 
Use in repetition

Instead of directly using an array in a repetition, one can use an ArrayController. The repetition uses the ArrayController by binding to its organizedObject and selectedOrganizedIndexes properties.
This means that any changes in the ArrayController’s organizedObjects are reflected in the repetition and any selections made in the repetition are reflected in the selection APIs of the ArrayController and vice versa. 
Dependencies

Remove if unnecessary
Concerns


Should filter and sort functions be separated out to a subtype of the controller? - to save on payload

have an event dispatched when the selection changes?
---
layout: docs
title: Naming Conventions
---

# Naming Conventions

## Modules

1. All module names and package names are `lower-case`, that is all terms are lower-case words or numbers delimited by hyphens.

## Reels

1. If there is an official W3C HTML element we use that name, like `button` for a `<button>`
2. If there is no official equivalent we can make up a name, like `toggle-switch`
3. For input elements we use an `"element-type"` pattern, like `input-range`, `input-radio`, `input-color`.


## CSS 

Class names follow a `org-Component` and `org-Component-childElement` pattern. So for the progress bar it would be: `montage-Progress` and `montage-Progress-bar`.

Here a guide with more details:

1. All CSS classes are namespaced with **montage** + a **dash**, like `montage-`.
2. After follows the component name in **CamelCase** (same as the JS class), like `montage-Button`, `montage-InputRange`.
3. If the component has **child elements**, they get added to a component’s name with a dash, like `montage-InputRange-thumb`. Note: that child elements start with lower case to make the distinction between component and child element more clear. The name of the children should be the same as the native pseudo elements/Shadow DOM (if already known and it makes sense). For example: -webkit-progress-**bar**. Here a [list](https://gist.github.com/3759334) used in WebKit.
4. If a child element needs to have a name that contains multiple words, **camelCase** is used: `montage-InputRange-thumbWithSpikyEars`.
5. If child elements have child elements themselves. They also get appended with a dash and the same rules as in point 3 + 4 applies, like `montage-InputRange-thumb-nobs-centerNob`. There is **no limit** to how many levels of child elements can be used, but if the whole CSS class becomes too long, it might be a good idea to **break** it into sub-components.
6. If a class name represents a **state** or a **variation**, double dash is used, like `montage-InputRange--dragging`, `montage-Button--pressed` or variations `montage-Button--big`, `montage-Button--primary`.

For the reasoning of this naming convention, see this [discussion](https://github.com/montagejs/montage/issues/795). In short:
* The goal was to make it easy to see the **markup structure** by just looking at the CSS name.
* It also has good usability because you can double-click **each part** to quickly select/edit them. That's why no `_` underscores are used. Try `montage-InputRange-thumb` vs `montage_InputRange_thumb`.
* And by using a single selector, it avoids **name collisions** (less likely to leak-in/out).

__TODO__: Should we still be using global state classes like: `.montage--hidden`? Or should it be only on a component basis, like `.montage-Button--hidden`. The later might be better since it allows for different "hiding" strategies (display:none, visibility:hidden, transform, or opacity..).
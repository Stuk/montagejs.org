---
layout: blog
title: Cross-browser fixes, Windows support for Mop and much more
author: Stuart Knightley
author_url: http://github.com/Stuk/
---

It's been over two months since the last update, and a whole lot has improved. To cover it all would result in an extremely long post, so this is just a summary.

[Montage v0.14.6](https://github.com/montagejs/montage/blob/master/CHANGES.md#v0146) was released a month ago. The biggest change that may affect your applications is the [removal of the internal "url" module](https://github.com/montagejs/montage/pull/1414). Instead use a URL module on npm, such as [url](https://www.npmjs.org/package/url).

Mop now [supports Windows](https://github.com/montagejs/mop/pull/50) and the dependencies have been simplified by replacing JSDom with [minidom](https://www.npmjs.org/package/minidom).

[![The Flow with elastic scrolling](../cat-flow.gif)](http://stuk.github.io/cat-flow/)

The Flow has gained [elastic scrolling](https://github.com/montagejs/montage/pull/1428), which you can see in action in this [Nyan Cat demo](http://stuk.github.io/cat-flow/). The selection of iterations in the [Flow has been fixed](https://github.com/montagejs/montage/pull/1449). The Repetition, which powers the Flow, now supports [selection when it contains no components](https://github.com/montagejs/montage/pull/1425) along with [other improvements](https://github.com/montagejs/montage/pull/1435). The RangeController, which powers the Repetition, has gained a [`content` parameter in its constructor](https://github.com/montagejs/montage/pull/1451).

Loading resources correctly is surprisingly challenging, and we've fixed a number issues in this area. The [cross-domain checks in Image have been re-added](https://github.com/montagejs/montage/pull/1437), [stylesheet urls in the template are now rebased](https://github.com/montagejs/montage/pull/1448), but we've stopped trying [to rebase images with no `src` or empty `src`](https://github.com/montagejs/montage/pull/1433). We [don't wait for inline styles to load](https://github.com/montagejs/montage/pull/1453), because they're already there. [Cached images are now handled](https://github.com/montagejs/montage/pull/1419) and the 
[DocumentResources get prepopulated](https://github.com/montagejs/montage/pull/1397).

Some browser compatibility issues have been fixed: [DOM content replacement](https://github.com/montagejs/montage/pull/1441) and [issues with `innerHTML`](https://github.com/montagejs/montage/pull/1444) for IE, [removing the use of Components.interfaces](https://github.com/montagejs/montage/pull/1417) for Firefox and [stop using NodeParent interface on DocumentFragments](https://github.com/montagejs/montage/pull/1446) for IE and Safari. [Mouse events on Android are tricky](https://github.com/montagejs/montage/pull/1459) too, but they are now handled correctly.

The Overlay [gained `didShowOverlay` and `didHideOverlay`](https://github.com/montagejs/montage/pull/1450) delegate methods.

Collections now has a shiny new collection to play with, the [Deque](https://github.com/montagejs/collections/pull/45)! The [improvements to equals and compare have been backported](https://github.com/montagejs/collections/pull/61). Giving unsupported arguments
[now throw errors](https://github.com/montagejs/collections/pull/54). [LruSet `maxLength` has been renamed to capacity](https://github.com/montagejs/collections/pull/52) and [direct clones of an array have been fixed](https://github.com/montagejs/collections/pull/50). If you're modifying change listeners in a change listener, [you're now covered](https://github.com/montagejs/collections/pull/48). Thanks to [Chris Barrick](https://github.com/cbarrick) for fixing the length property of the [Heap](https://github.com/montagejs/collections/pull/66) and [SortedArraySet](https://github.com/montagejs/collections/issues/64).

The [Popcorn demo](http://montagestudio.com/demos/popcorn/) has been [tidied up](https://github.com/montagejs/popcorn/pull/21) to serve as a better example app.

Hopefully this gives you an idea of what we've been up to over the past couple of months. To see what's been occupying the rest of our time, [sign up for the Montage Studio beta](http://montagestudio.com/reveal/)!

## Releases
[Montage v0.14.6](https://github.com/montagejs/montage/blob/master/CHANGES.md#v0146), [Digit v0.5.1](https://github.com/montagejs/digit/blob/master/CHANGES.md#051), [Collections v1.0.3](https://github.com/montagejs/collections/blob/master/CHANGES.md#v103), [Minit v0.5.4](https://github.com/montagejs/minit/blob/master/CHANGES.md#v054), [Mr v0.15.4](https://github.com/montagejs/mr/blob/master/CHANGES.md#0154), [Mop 0.15.0](https://github.com/montagejs/mop/blob/master/CHANGES.md#0150) and introducing [Jasminum v0.0.4](https://github.com/montagejs/jasminum/blob/v1/CHANGES.md#004).

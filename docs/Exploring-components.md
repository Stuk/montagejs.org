1. [Quick Start](https://github.com/montagejs/montage/wiki/Quick-Start)
2. **Exploring Components**
3. [Hello Montage](https://github.com/montagejs/montage/wiki/Hello-Montage)

***
Components make up the view portion of a Montage application.

Out of the box, Montage includes a variety of prebuilt user interface components. However, when you build your custom Montage application, you have access to the same component mechanism to help build and organize your custom user interface.

Montage components are modular and encapsulated; the structure (HTML), appearance (CSS), and behavior (JavaScript) that power the component are all contained in the same directory. These directories end with a `.reel` extension, just like a regular file, to indicate that it is an isolated unit.

This modularity means that regardless of where a component is used, the same HTML, CSS, and JavaScript will control how the component is structured, looks, and behaves. Because components are self-contained, it's easy to work on, rename, or even remove an individual component without having to find bits and pieces of it scattered across directories.

Check it out: Inside the directory from the [Quick Start](https://github.com/montagejs/montage/wiki/Quick-Start) guide run the `minit` command to create a new component called name-tag:

```bash
$ minit create:component --name name-tag
name-tag.reel created.
$ cd ui/name-tag.reel/
$ ls 
name-tag.css   name-tag.html  name-tag.js
```

Note that the component is stored in the `ui` directory (which is where we store all our components). Storing components in the `ui` directory has the benefit that you can use any Montage package and easily locate the components it provides.

Let's take a closer look at some key features of the HTML, CSS, and JS files included in the name-tag component. First the HTML file:

```html
<link rel="stylesheet" type="text/css" href="name-tag.css">
```

The name-tag.css file is included in the header section, as expected. More interesting is the following script block.


```html
<script type="text/montage-serialization">
{
    "owner": {
        "properties": {
            "element": {"#": "name-tag"}
        }
    }
}
</script>
```

This block contains all serialized Montage objects in the document. We explore serialization in detail in [Montage Serialization Format](http://montagejs.org/docs/Montage-serialization-format). For now, note the following:

* The type is set to `text/montage-serialization`.
* The serialization format is JSON, with some enforced semantics.
* `owner` is a special label in the serialization that refers to the current component. (Think of it as the equivalent of `this` in JavaScript.)
* `{"#": "montage-id"}` refers to elements in the body. (You can also use `{"@": "label"}` to refer to another object by its label in the serialization. More on this later.)

```html
<body>
    <div data-montage-id="name-tag" class="NameTag">
    </div>
</body>
```

Each HTML file is a complete and valid document; however, only one element serves as the root element of the component being described. The serialization identifies that element with the `data-montage-id` of `name-tag` as this component's root element using the ```{"#": "name-tag"}``` reference.

This means that when we use a NameTag component in a Montage application the only portion of its template that will be rendered is the `name-tag` element. 

**NOTE:** This also explains why we do not use the document-unique HTML `id` attribute to identify the element: Our components are reusable, and when they are inserted into a document multiple times we would have multiple elements with the same id, which is invalid HTML5. Why not strip the id when inserting? Although we recommend you always use classes to style your document, we don't want to prevent you completely from using ids for styling, whether for performance or legacy reasons. For this reason, we use a [custom data-attribute](http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#custom-data-attribute), `data-montage-id`. When the [Shadow DOM](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/shadow/index.html) matures and is implemented it might be possible to revert back to using the `id` attribute, as each template will be isolated in the document.

Next the CSS file: Note that we start off with an almost blank style sheet, waiting for you to bring it to life by adding your meticulously crafted rules. The only content we pass along is the class name of the root element.

```css
.NameTag {

}
```

Note also that the class name is a CamelCase version of the .reel directory name. This is part of our [CSS naming convention](https://github.com/montagejs/montage/wiki/Naming-Conventions); it allows us to scope each component's CSS so that it doesn't "leak out" and accidentally style other components.

Finally, the JS file:

```javascript
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component;
```

Montage uses the CommonJS module system, just like Node.js, through the [Mr](https://github.com/montagejs/mr) tool.


```javascript
exports.NameTag = Montage.create(Component, {

});
```


The file exports a single object with a CamelCase version of the .reel directory name which inherits from `Component`. `Montage.create()` is a special version of ECMAScript 5's [Object.create()](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create) whose extensions we'll explore later.

When in use, the NameTag Component will be rendered in a document using its element from its included template, styled using its included CSS, and given instructions on how to act from its included JavaScript.

In summary: No component is an island; components are assembled to present the User Interface of your Montage application.

With your NameTag component in hand say [Hello to Montage](https://github.com/montagejs/montage/wiki/Hello-Montage).
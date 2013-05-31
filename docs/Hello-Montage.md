1. [Quick Start](https://github.com/montagejs/montage/wiki/Quick-Start)
2. [Exploring Components](https://github.com/montagejs/montage/wiki/Exploring-components)
3. **Hello Montage**

***

At this point, if you've followed along, you have generated the default welcome application using `minit` and created a custom `NameTag` component. It's time to learn how to assemble components into a functional user interface, surfacing and synchronizing data between objects and user interface, and observing and reacting the user interface for events.

## Reveal the Main Component 

The default welcome application has a quick introduction to Montage that will help get us started. The content you see at [localhost:8000](http://localhost:8000), or wherever you may be serving this application from, starts inside the `index.html` file being served.

The `index.html` file uses a Montage `loader` component to specify that when ready it should load the `Welcome` component immediately.

Montage applications start with a `Main` component, which `minit` happens to have generated for you.

Start by declaring the `Main` component as a child of the `Welcome` component located at `ui/welcome.reel/welcome.html`.

Replace the following serialization snippet:
```
"main": {

}
```

with this new snippet:
```
"main": {
    "prototype": "ui/main.reel",
    "properties": {
        "element": {"#": "main"}
    }
}
```

Refreshing the page should now show the main component as a child of your welcome component. That's composition! That's how we build Montage applications by assembling the patchwork of components that serve as our visual user interface.

Next, add the NameTag component you created earlier to the `Main` component's template at `ui/main.reel/main.html`.

1. Add a placeholder element for the NameTag component:
```
<div data-montage-id="main" class="Main">Hello <span data-montage-id="nameTag"></span></div>
```

2. Add serialization entry for the NameTag component that links the component to its placeholder:
```
"nameTag": {
    "prototype": "ui/name-tag.reel",
    "properties": {
        "element": {"#": "nameTag"}
    }
}
```

3. Pretty up the NameTag component in `ui/name-tag.reel/name-tag.css`:
```
.NameTag {
    color: green;
}
```

4. Make the NameTag component a span and add some visible content to `ui/name-tag.reel/name-tag.html`:
```
<span data-montage-id="name-tag" class="NameTag">Name</span>
```

5. Refresh the browser and enjoy the pretty green name tag.

You now have a pretty respectable component tree. But wait, there's more.

## Declarative Bindings
You have yet to instruct your application exactly how to create your components and how to insert them. Without being aware of it, you've relied on a powerful technique known as *declarative programming* where you specified the intent of what you wanted, trusting Montage to interpret that intent and do the right thing.

Just as you've declaratively assembled your visual component tree you can also declaratively connect parts of it to an underlying model; for the purpose of this example, though, we'll let our components serve as the model.

1. Add a `name` property to the `NameTag` component's implementation at `ui/name-tag.reel/name-tag.js`:
```
exports.NameTag = Montage.create(Component, /** @lends module:"ui/name-tag.reel".NameTag# */ {

    name: {
        value: "Alice"
    }

});
```

2. Add a Montage-provided `DynamicText` component to the `NameTag` component's template at `ui/name-tag.reel/name-tag.html`:

**HTML**
```
<span data-montage-id="name-tag" class="NameTag">
    <span data-montage-id="name"></span>
</span>
```

**Serialization**
```
"name": {
    "prototype": "montage/ui/dynamic-text.reel",
    "properties": {
        "element": {"#": "name"}
    },
    "bindings": {
        "value": {"<-": "@owner.name"}
    }
}
```

You have just specified that the `value` property of the `DynamicText` component you create will be the same as the owner's `name` property. Anytime the `owner.name` property changes, so will the value you see in the rendered view.

Refreshing the page should spell a nice, green Alice.

Bindings are among the pinnacle of declarative bliss. After declaring that binding between these two properties you don't need to do anything to make it happen or to keep it happening.

But wait, there's more.

## Driving Changes Through Bindings

Suppose you want to provide some interface for changing that name; here's where you start architecting your application. Montage provides an `InputText` component but first you need to determine where to put it. As long as your application is small that's an easy decision to make; when your application expands, however, it's important to keep components, and all other objects, loosely coupled and highly cohesive to aid in determining where responsibilities live.

For the purposes of this example, you want `NameTag` to be a read-only component, so you'll make editing the job of the `Main` component.

1. Insert an `InputText` component as a child of the `Main` component, ui/main.reel/main.html.

**HTML**
```
<div data-montage-id="main" class="Main">
    Hello <span data-montage-id="nameTag"></span>
    <input type="text" data-montage-id="nameInput">
</div>
```

**Serialization**
```
"nameInput": {
    "prototype": "montage/ui/input-text.reel",
    "properties": {
        "element": {"#": "nameInput"}
    },
    "bindings": {
        "value": {"<->": "@nameTag.name"}
    }
}
```

Now you've bound the `value` property of the input text, making it the same as the nameTag's `name` property. You've also made this a two-way binding as indicated by the double-headed arrow; changes on either side of this binding propagate to the other side.

In addition to deciding where components should live, you also have to decide which side to establish a binding on;    but that's a topic for another tutorial.

2. Refresh and give it a try. As you type, the name tag should update live.

## Listening for Events
Components can emit events in the same sense that DOM elements emit events. A Montage `Button` component, for example, dispatches an `action` event with itself as the target. This event is synthesized from a sequence of mouse or touch events that the button component itself observes on its own element.

Let's add a `Button` and handle its `action` event.

1. Add the `Button` component to the `Main` component's template at `ui/main.reel/main.html`:

**HTML**
```
<button data-montage-id="greetButton"></button>
```

**Serialization**
```
"greetButton": {
    "prototype": "montage/ui/button.reel",
    "properties": {
        "element": {"#": "greetButton"}
    },
    "bindings": {
        "label": {"<-": "@nameTag.name"}
    },
    "listeners": [
        {
            "type": "action",
            "listener": {"@": "owner"}
        }
    ]
}
```
For the sake of showing off bindings we use one here to bind the `label` of the greetButton to be the same as the `nameTag.name` property. But you already know that by now, of course.

The serialization unit of interest here is `listeners`. This block is an array of listener entries, each one specifying the event `type` being observed by name and the `listener` interested in handling the event. Of course, many different listeners can be registered here and they can also provide a `useCapture` property in their entry to specify that the event should be handled in the capture phase of distribution.

2. Refreshing at this point will render a button with the expected label. Behold the joy of code-free declarative binding by changing the name in the `nameInput` and see it reflected in both the `nameTag` and the `greetButton` component instances.

3. Now to make the button do something, add some code to the `listener` object you specified, the `Main` component, inside `ui/main.reel/main.js`:

```
exports.Main = Montage.create(Component, /** @lends module:"ui/main.reel".Main# */ {

    handleGreetButtonAction: {
        value: function (event) {
            alert("Hello " + this.templateObjects.nameTag.name);
        }
    }

});
```

While the standard JavaScript `addEventListener` either expects a function reference or an `eventHandler` object that implements a `handleEvent` method Montage helps direct an event to a more specific handler method on a listener if implemented.

In this case we've implemented `handleGreetButtonAction`, which describes the fact that this method will handle `action` events emitted from a target with an identifier of `greetButton` during the bubble phase of event distribution.

This is the most specific handler possible, less specific alternatives would have been:
* `handleAction`
* `handleEvent`

This reduces the need for inspecting each event in a generic `handleEvent` method to determine what the event was and how it should be handled.

The `templateObjects` property exposes all the objects that were defined in a component's template. It's a convenient way to access any object in the template by its serialization `label`.

Reaching into another component suggests that we should start to consider formalizing the model we're working with (a person? an identity?) and expose it somewhere so that all concerned components can access it easily. But that's a lesson for another day.

4. Refresh the browser and click the `greetButton`. If everything worked as expected it should simply alert the name that's in the `nameTag` component.

## Take Off the Training Wheels

Although it has served us well so far, it's time to ditch the default ui/main.reel module.

1. Inside `index.html` remove the explicit loading of the Welcome component.
```
"owner": {
    "prototype": "montage/ui/loader.reel"
}
```

2. Refresh the browser and note that the Welcome component is no longer present as a decorative frame around the Main component.

***

There still is more to learn of course as you've barely scratched the surface of what Montage can do. What you should take away from this quick start is how simple things are with a declarative framework that embraces components and bindings.
---
layout: docs
title: Quick Start
---

1. **Quick Start**
2. [Exploring Components](https://github.com/montagejs/montage/wiki/Exploring-components)
3. [Hello Montage](https://github.com/montagejs/montage/wiki/Hello-Montage)

***

**Note:** If you prefer to watch rather than read tutorials, you can also catch short video versions of this guide on YouTube for [Mac OS X](http://www.youtube.com/watch?v=JfT1ML200JI), [Windows](http://www.youtube.com/watch?v=HDOItFcfopY), or [Ubuntu Linux](http://www.youtube.com/watch?v=OcLN-zP3A00) users.

To begin, [download](http://nodejs.org/download/) and install Node.js if you haven't already.

Although Montage does not rely on Node.js, it does depend on the Node Package Manager (NPM) for fulfilling dependencies throughout development. Besides, our tools and utilities are written in JavaScript and executed using Node.js so it's useful to have it installed.

Next, follow these steps to set up your Montage development environment and serve up your first Montage app:

1. Install `minit`, the Montage Initializer:
 
    ```bash
    $ sudo npm install -g minit@latest
    ```

2. Create your first app:

    ```bash
    $ minit create:app --name hello
    $ cd hello
    ```

3. Serve up your new application for development (or use your own web server):

    ```bash
    $ python -m SimpleHTTPServer
    ```

    and point your browser to [http://localhost:8000/](http://localhost:8000).

    The server is required because Montage uses XHR to load files during development, which cannot be done on the `file://` protocol.

That's it. You've created your first montage app. Curious how it all works? Read on.

## Next Steps
* Learn more about Montage components in [Exploring components](https://github.com/montagejs/montage/wiki/Exploring-components).

* Experiment with Montage on your own in the browser using [MFiddle](http://montagejs.github.com/montage/samples/mfiddle/).
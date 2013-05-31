#Getting Started

_(This is still a draft)_

This tutorial will show you how to assemble a simple Montage application. The goal is to quickly familiarize you with the basic building blocks of Montage. It should take no more than fifteen minutes for you to complete. To make the most of this tutorial, you should have some experience building web applications and be familiar with HTML, CSS, and JavaScript.

##Create a Simple Montage Application

>**Note**: You can also follow this part of the tutorial on YouTube for [Mac OS X](http://www.youtube.com/watch?v=JfT1ML200JI), [Windows](http://www.youtube.com/watch?v=HDOItFcfopY), or [Ubuntu Linux](http://www.youtube.com/watch?v=OcLN-zP3A00) users.

###Step 1: Install Node and npm
To begin, you must have npm, the Node package manager, installed which is part of the Node ecosystem and distributed with Node.js. npm is required to fulfill dependencies throughout the Montage application development process. If you haven’t already, be sure to [download](http://nodejs.org/download/) and run the prebuilt installer for your platform from the Node.js website before proceeding.

###Step 2: Install the Montage Initializer
Next, you will need to install `minit`, the Montage Initializer.

`minit` is a command line utility that will help you build Montage applications by generating prebuilt Montage components and placing the associated files inside the proper directories of your project. 

>**Note**: You don't have to use `minit` to build Montage application; you can just use a GIT client and start from scratch. However, using `minit` makes the process a little easier.

Open a Terminal window and install the latest version of `minit`:

**Mac OS X / Linux**

```
$ mkdir ~/.npm
$ sudo chown yourusername ~/.npm
$ npm install -g minit@latest
```

**Windows**
???

###Step 3: Create the default Welcome application
You are now ready to create your first Montage application. 

1. Use `minit` to create a Montage application named hello.

    ```
    $ minit create:app -n hello
    ```

    `minit` generates the default Montage application template in your current directory.

2. To launch the default Welcome application, switch to the hello directory and serve your new application using a simple HTTP server.

    >**Note**: An HTTP server is required because Montage uses the XMLHttpRequest (XHR) API to load files during development, which cannot be done on the file:// protocol. Mac OS X and Linux users can use the preinstalled Python server; Windows users have the option to install mongoose available at code.google.com/p/mongoose (for details refer to our YouTube video for [Windows users](http://www.youtube.com/watch?v=HDOItFcfopY)). Of course, you can also use your preferred local server.

    **Mac OS X / Linux**

    ```
    $ cd hello
    $ python -m SimpleHTTPServer
    ```

3. Finally, point your browser to http://localhost:8000/. 

Voilà—you are looking at your first Montage application (see Figure 1). More precisely, you are looking at the contents of the Welcome component, which is explicitly loaded for no other reason than to accompany this tutorial and help kick-start your Montage application development skills. Think of this app and what follows as an expanded version of your standard “Hello World” application.

<figure>
[Insert gs_tut_fig_01]
</figure>
<figcaption>Figure 1: Say hello to the default Montage Welcome application.</figcaption> 

In the remaining part of this tutorial, you will learn how to assemble Montage components into a user interface, surface and synchronize data between Montage objects and the user interface, and listen for and react to events.
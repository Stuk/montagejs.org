
This is the repo for the [montagejs.org](http://montagejs.org) website.

## Contributing
If you find any bugs or want to contribute, feel free to create an issue or send a pull request.


## Jekyll
The site uses Jekyll for templates and includes. You can find more infos on [jekyllrb.com](http://jekyllrb.com/).

### Install
First you need Ruby and RubyGems, see [details](http://jekyllrb.com/docs/installation/). Once installed run:

    gem install jekyll

Then `cd` into your montagejs.org directory and run:

    jekyll serve

Now you should see the site at `http://localhost:4000`.


## Building and deploying

First install the dependencies, and then run the build script.

```bash
$ cd _build
$ npm install
# wait ...
$ cd ..
$ _build/build.js
# wait...
```

This will build the apps and the API docs

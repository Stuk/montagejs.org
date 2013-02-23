montageDefine("0465582","index.html",{text:'<!doctype html>\n<html>\n  <head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Montage - HTML5 framework</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="stylesheets/normalize.css">\n    <link rel=stylesheet href="stylesheets/base.css">\n    <link rel=stylesheet href="stylesheets/index.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n\n    <script src="packages/montage@1d1016a/montage.js"></script>\n    <script type="text/montage-serialization">{"features":{"prototype":"ui/features.reel","properties":{"element":{"#":"features"}}},"themes":{"prototype":"ui/themes.reel","properties":{"element":{"#":"themes"}}}}</script>\n\n  </head>\n<body>\n\n    <header class="header-index pushed">\n        <h1><img class=logo src="images/logo-montage.png" alt=Montage></h1>\n        <h2 class=tagline>An <strong class=highlight>HTML5 framework</strong> for building modern Web Apps.</h2>\n    </header>\n\n    <nav class="bar links">\n        <a class="link download" href="https://github.com/montagejs/montage/wiki/Quick-Start">Quick Start</a>\n        <a class="link fork" href="https://github.com/montagejs/montage">Fork</a>\n        <a class="link docs" href="docs/">Docs</a>\n    </nav>\n\n    <section id=intro class=intro>\n        <article>\n            <h3 class=title>Introducing Montage</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>The Montage framework lets you develop rich HTML5 applications optimized for today and tomorrow’s range of connected devices. You can build rich client-side UI’s, sharing packages and modules with your NodeJS server. Montage opens a new world of opportunity for web developers.</p>\n\n                </div>\n                <aside class="col col-1-2">\n                    <p>Some features</p>\n                    <ul>\n                        <li>Components and HTML templates</li>\n                        <li>2-way data binding</li>\n                        <li>Serialization</li>\n                        <li>Event Management</li>\n                    </ul>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <section id=features class=features style="min-height: 1050px">\n        <article>\n            <h3 class=title>Features</h3>\n\n            <h3 class=sub-title>2-way Data Binding</h3>\n\n            <div data-montage-id=features></div>\n\n            <div class=cols>\n                <div class="col col-1-2">\n                    <h3 class=sub-title>Components and templates</h3>\n                    <p>Montage comes with a number of professionally designed, fully stylable, controls and components that are commonly needed in native-quality applications. You can use components on their own, nest them within others, or use our clean API to build your own.</p>\n                </div>\n                <div class="col col-1-2">\n                    <h3 class=sub-title>Serialization</h3>\n                    <p>Montage supports serialization of the object graph using pure JSON. It describes the objects, properties, components, data bindings, and DOM relationships that make up a Montage application. Learn more about the <a href="https://github.com/montagejs/montage/wiki/Montage-serialization-format" target=_blank>Montage serialization format</a>.</p>\n                </div>\n                <div class="col col-1-2">\n                    <h3 class=sub-title>Event Management</h3>\n                    <p>The Montage event manager wraps and extends the user-agent’s native event handling. This improves performance, provides simple event handling logic, and adds the ability to observe property changes. Learn more about <a href="https://github.com/montagejs/montage/wiki/Event-handling" target=_blank>event handling</a>.</p>\n                </div>\n                <div class="col col-1-2">\n                    <h3 class=sub-title>Component draw cycle</h3>\n                    <p>To maximize application performance, Montage uses a deferred drawing model in which DOM updates and queries are batched together, limiting the number of DOM reflows. These features are implemented through a series of component method callbacks that the framework invokes. Learn more about <a href="https://github.com/montagejs/montage/wiki/Component-draw-cycle" target=_blank>component draw cycle</a>.</p>\n                </div>\n\n            </div>\n\n            <nav class=more>Learn more:\n                <a class=more-button href="https://github.com/montagejs/montage/wiki" target=_blank>Docs</a>\n                <a class=more-button href="http://montagejs.github.com/montage/samples/sink/" target=_blank>Kitchen Sink</a>\n                <a class=more-button href="http://montagejs.github.com/montage/samples/mfiddle/" target=_blank>M Fiddle</a>\n            </nav>\n\n\n        </article>\n    </section>\n\n\n    <section id=themes class=themes style="min-height: 500px">\n    	<article>\n	        <div class=cols>\n	            <div class="col col-1-3">\n	                <img class=logo src="images/logo-skeleton.png" alt="Skeleton logo">\n	            </div>\n	            <div class="col col-2-3">\n	                <h3 class=title>Themes</h3>\n	                <p>Montage comes with the <strong>Skeleton</strong> theme. It\'s a basic, neutral-looking theme for HTML5 controls and inputs. You can use it as a wireframe theme for prototypes, starting point for creating your own theme, or easily style it with CSS to create custom <strong>skins</strong>. The Skeleton theme aims to provide cross-browser support so you can use it as a fallback theme.</p>\n	                \n	            </div>\n	        </div>\n\n			<div data-montage-id=themes></div>\n\n		</article>\n    </section>\n\n	<section id=misc class=misc>\n	    <article>\n	        <div class=cols>\n	            <div class="col col-1-2">\n	                <h3 class=title>Browser Support</h3>\n	                <p>Montage works best in most modern browsers. An exact overview will follow once we finalize each theme.</p>\n	            </div>\n	            <div class="col col-1-2">\n	                <h3 class=title>License</h3>\n	                <p>Montage is <strong>open source</strong> and licensed under <strong>BSD</strong>. For more details see <a href="https://github.com/montagejs/montage/blob/master/LICENSE.md" target=_blank>LICENSE.md</a>.</p>\n	            </div>\n	        </div>\n	    </article>\n	</section>\n\n	<section id=apps class="apps pushed">\n	    <article>\n	        <h3 class=title>Made with Montage</h3>\n	        <p>A couple examples of Apps built with Montage.<br>\n                Check out more <a class=link href=apps>sample Apps and demos</a>.</p>\n	        <ul class=gallery>\n	            <li class=gallery-item>\n	                <a href="https://chrome.google.com/webstore/detail/kjebfhglflhjjjiceimfkgicifkhjlnm" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="images/apps/scratchpad.jpg" alt=Scratchpad></figure>\n	                    <figcaption class=gallery-description>Scratchpad (Chrome)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://montagejs.github.com/montage/samples/paparazzi/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="images/apps/paparazzi.jpg" alt=Paparazzi></figure>\n	                    <figcaption class=gallery-description>Paparazzi (Desktop)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://montagejs.github.com/montage/samples/calculator/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="images/apps/calculator.jpg" alt=Calculator></figure>\n	                    <figcaption class=gallery-description>Calculator (Phones + Tablets)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="apps/popcorn/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="images/apps/popcorn.jpg" alt=Popcorn></figure>\n	                    <figcaption class=gallery-description>Popcorn (Tablets)</figcaption>\n	                </a>\n	            </li>\n	        </ul>\n	    </article>\n	</section>\n\n 	<section id=tools class=tools>\n        <article>\n            <h3 class=title>Tools</h3>\n            <div class=cols>\n                <div class="col col-1-3">\n                    <p><a href="https://github.com/montagejs/minit" target=_blank>Minit</a> kickstarts your applications by generating all files and basic structure.</p>\n                </div>\n                <div class="col col-1-3">\n                    <p><a href="https://github.com/montagejs/mint" target=_blank>Mint</a> is a linter tailored to check for errors in the code for Montage.</p>\n                </div>\n                <div class="col col-1-3">\n                    <p><a href="https://github.com/montagejs/mop" target=_blank>Mop</a> optimizes Montage applications for production.</p>\n                </div>\n            </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>Next steps</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p><strong>Get started with Montage</strong>: If you\'re interested, here a more <a href="https://github.com/montagejs/montage#montage" target=_blank>technical introduction</a>. For more infos and resources, head over to the <a href="https://github.com/montagejs/montage/wiki">Montage Docs</a>.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2012 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <a href="https://github.com/montagejs/montage"><img style="position: absolute; top: 0; right: 0; border: 0" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></a>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})
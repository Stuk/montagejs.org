montageDefine("0465582","docs/git-subtree.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>git subtree - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body class=docs>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>git subtree<a class=anchor id=git-subtree href="#git-subtree"></a>\n</h1>\n\n<p>Git subtrees are like submodules, but better and easier for everyone involved. They allow you to import code from a different repository but instead of adding a <em>reference</em> to your repository, they add the <strong>actual code</strong> <em>and commit saying where the code came from</em>.</p>\n\n<p>The great thing about subtrees is if you do not care about merging or splitting them, they <strong>do not affect you</strong>. You can treat the whole repository as you would normally. If the above describes you, you can stop reading now. </p>\n\n<h2>Installing<a class=anchor id=Installing href="#Installing"></a>\n</h2>\n\n<p>If you use OSX and homebrew, then <code>brew install git</code> will install the subtree command along with git.</p>\n\n<p>Otherwise it is a single script you can download:</p>\n\n<ol>\n<li>Download <a href="https://raw.github.com/git/git/master/contrib/subtree/git-subtree.sh">https://raw.github.com/git/git/master/contrib/subtree/git-subtree.sh</a> </li>\n<li>Make executable: <code>chmod a+x git-subtree.sh</code>\n</li>\n<li>Rename to git-subtree: <code>mv git-subtree.sh git-subtree</code>\n</li>\n<li>Move to a directory on your <code>PATH</code>\n</li>\n</ol><h2>Using<a class=anchor id=Using href="#Using"></a>\n</h2>\n\n<p>Each section below has a description and example for each command, and a list of the subtrees in each of the montagejs repositories with the command that you can copy and paste. See the Adding section for an example of what a subtree looks like.</p>\n\n<h3>Merging/pulling<a class=anchor id="Merging/pulling" href="#Merging/pulling"></a>\n</h3>\n\n<p>This will merge updates from the other repository while keeping any changes made to the subtree locally (for example deleted files).</p>\n\n<p></p><div class=highlight><pre>git subtree pull --squash --prefix<span class=o>=</span><span class=nv>$dir$ </span>git@github.com:<span class=nv>$repo$.</span>git <span class=nv>$commitOrTag$ </span>-m <span class=s2>"Update $name$ to $version$"</span>\n</pre></div>\n\n<h4>Montage ↢ Mr<a class=anchor id="Montage-↢-Mr" href="#Montage-%E2%86%A2-Mr"></a>\n</h4>\n\n<p></p><div class=highlight><pre>git subtree pull --squash --prefix<span class=o>=</span>packages/mr git@github.com:montagejs/mr.git <span class=nv>$version</span> -m <span class=s2>"Update Mr to $version$"</span>\n</pre></div>\n\n<h4>Mr ↢ Q<a class=anchor id="Mr-↢-Q" href="#Mr-%E2%86%A2-Q"></a>\n</h4>\n\n<p></p><div class=highlight><pre>git subtree pull --squash --prefix<span class=o>=</span>packages/q git@github.com:kriskowal/q.git <span class=nv>$version</span> -m <span class=s2>"Update Q to $version"</span>\n</pre></div>\n\n<h3>Splitting<a class=anchor id=Splitting href="#Splitting"></a>\n</h3>\n\n<p>Splitting allows you take take changes to the subtree from your repository and commit them to the other one. </p>\n\n<p>TODO: Write after splitting for the first time</p>\n\n<h3>Adding<a class=anchor id=Adding href="#Adding"></a>\n</h3>\n\n<p>This will add all the files in <code>repo</code> at <code>commit</code> under <code>dir</code>, and will create 2 commits</p>\n\n<p></p><div class=highlight><pre>git subtree add --squash --prefix<span class=o>=</span><span class=nv>$dir$ </span>git@github.com:<span class=nv>$repo$.</span>git <span class=nv>$commitOrTag$ </span>-m <span class=s2>"Add $name$ $version$ as a subtree"</span>\n</pre></div>\n\n<p></p><div class=highlight><pre><span class=n>commit</span> <span class=mi>25303</span><span class=n>c2f71a7437f6cb4d8f2e277a2c0aca6040c</span>\n<span class=n>Author</span><span class=p>:</span> <span class=n>Stuart</span> <span class=n>Knightley</span> <span class=o>&lt;</span><span class=n>stuart</span><span class=p>@</span><span class=n>example</span><span class=p>.</span><span class=n>com</span><span class=o>&gt;</span>\n<span class=n>Date</span><span class=p>:</span>   <span class=n>Tue</span> <span class=n>Jan</span> <span class=mi>8</span> <span class=mi>16</span><span class=p>:</span><span class=mi>49</span><span class=p>:</span><span class=mi>33</span> <span class=mi>2013</span> <span class=o>+</span><span class=mi>0000</span>\n\n    <span class=n>Squashed</span> <span class=s>\'packages/mr/\'</span> <span class=n>content</span> <span class=n>from</span> <span class=n>commit</span> <span class=n>fb221b7</span>\n    \n    <span class=n>git</span><span class=o>-</span><span class=n>subtree</span><span class=o>-</span><span class=n>dir</span><span class=p>:</span> <span class=n>packages</span><span class=o>/</span><span class=n>mr</span>\n    <span class=n>git</span><span class=o>-</span><span class=n>subtree</span><span class=o>-</span><span class=n>split</span><span class=p>:</span> <span class=n>fb221b7322e581ab63aa5a8bdbf8ae5579c6b06c</span>\n\n<span class=n>commit</span> <span class=n>f3cf33549b20e42da24bd55c211af8307092341a</span>\n<span class=n>Merge</span><span class=p>:</span> <span class=mf>3e6</span><span class=n>a9e2</span> <span class=mi>25303</span><span class=n>c2</span>\n<span class=n>Author</span><span class=p>:</span> <span class=n>Stuart</span> <span class=n>Knightley</span> <span class=o>&lt;</span><span class=n>stuart</span><span class=p>@</span><span class=n>example</span><span class=p>.</span><span class=n>com</span><span class=o>&gt;</span>\n<span class=n>Date</span><span class=p>:</span>   <span class=n>Tue</span> <span class=n>Jan</span> <span class=mi>8</span> <span class=mi>16</span><span class=p>:</span><span class=mi>49</span><span class=p>:</span><span class=mi>33</span> <span class=mi>2013</span> <span class=o>+</span><span class=mi>0000</span>\n\n    <span class=n>Add</span> <span class=n>Mr</span> <span class=n>v0</span><span class=p>.</span><span class=mf>12.0</span> <span class=n>as</span> <span class=n>a</span> <span class=n>subtree</span>\n</pre></div>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2012 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})
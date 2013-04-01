montageDefine("bc3cb11","apis/Deserializer.html",{text:'<!doctype html>\n<html lang=en>\n<head>\n    <meta charset=utf-8>\n    <title>JSDoc: Deserializer</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="stylesheets/normalize.css">\n    <link rel=stylesheet href="stylesheets/base.css">\n    <link rel=stylesheet href="stylesheets/pages.css">\n    <link rel=stylesheet href="stylesheets/solarized.css">\n\n    <script src="scripts/prettify/prettify.js"></script>\n    <script src="scripts/prettify/lang-css.js"></script>\n    <script src="scripts/search.js"></script>\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <link type="text/css" rel=stylesheet href="styles/prettify-tomorrow.css">\n    <link type="text/css" rel=stylesheet href="styles/jsdoc-default.css">\n</head>\n\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="http://montagejs.org/apps">Apps</a>\n                <a class=nav-item href="http://montagejs.org/docs">Docs</a>\n                <a class="nav-item active" href="http://montagejs.org/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    \n\n    <section id=docs>\n\n\n\n\n<header>\n    <h2>\n    Deserializer\n    </h2>\n\n</header>\n\n<article>\n\n        <dl>\n            <dt>Extends</dt>\n            <dd><a href=Montage.html>Montage</a> </dd>\n        </dl>\n\n    <div class=container-overview>\n\n\n\n\n<dt>\n    <h4 class=name id=Deserializer></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 55\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n        <h3 class=subsection-title>Properties</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=init><span class=type-signature></span>init<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Initializes the deserializer with a string</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 147\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n        </dl>\n\n\n\n        <h3 class=subsection-title>Methods</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=defineDeserializationUnit><span class=type-signature></span>defineDeserializationUnit<span class=signature>(name, funktion)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Defines a deserialization unit for an object.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>name</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>string</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The unit name.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>funktion</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The delegate function that reads the serialization unit and deserializes its content into the object being deserialized. This function accepts the object being deserialized and the serialized unit as arguments.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 226\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=deserialize><span class=type-signature></span>deserialize<span class=signature>(callback)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Deserializes all objects.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>callback</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The callback to be invoked when the object has been fully deserialized. The function will be called with a dictionary ({label: object}) with all deserialized objects.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 1088\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=deserializeObject><span class=type-signature></span>deserializeObject<span class=signature>(callback)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Deserializes a serialization of a single object.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>callback</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The callback to be invoked when the object has been fully deserialized.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 1061\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=deserializeObjectWithElement><span class=type-signature></span>deserializeObjectWithElement<span class=signature>(element, callback)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Deserializes a serialization of a single object using a root element to find elements\' references.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>element</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Element</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The element to be cloned and used during deserialization of elements\' references.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>callback</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The callback to be invoked when the object has been fully deserialized.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 1075\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=deserializePropertiesForObject><span class=type-signature></span>deserializePropertiesForObject<span class=signature>(object, properties)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>This function is to be used in the context of deserializeProperties delegate used for custom object deserializations.\n     It deserializes all the named properties of a serialized object into the object given.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>object</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The target of the properties.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>properties</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type><a href=Array.html>Array</a></span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The property names to be deserialized.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 385\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=deserializeWithInstances><span class=type-signature></span>deserializeWithInstances<span class=signature>(instances, callback)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Deserializes all objects by using instances instead of creating all objects from scratch.\n     When an instance is given for a specific label the object that was serialized under that label won\'t be created and all the serialization units will be applied to the given instance instead.\n     Obs: deserializedFromSerialization will still be called even though the object wasn\'t created during deserialization.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>instances</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The dictionary ({label: instance}) with the instances to use for specific labels.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>callback</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The callback to be invoked when the object has been fully deserialized. The function will be called with a dictionary ({label: object}) with all deserialized objects.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 1102\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=deserializeWithInstancesAndDocument><span class=type-signature></span>deserializeWithInstancesAndDocument<span class=signature>(instances, sourceDocument, callback)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Same as deserializeWithInstances but giving an aditional Document to use when deserializing elements\' references.\n     All element\'s references will be applied against the given document.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>instances</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The dictionary ({label: instance}) with the instances to use for specific labels.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>sourceDocument</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Document</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The Document to be used when searching for element\'s references.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>callback</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The callback to be invoked when the object has been fully deserialized. The function will be called with a dictionary ({label: object}) with all deserialized objects.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 1151\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=deserializeWithInstancesAndElementForDocument><span class=type-signature></span>deserializeWithInstancesAndElementForDocument<span class=signature>(instances, element, targetDocument, callback)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Same as deserializeWithInstances but giving an aditional Element and Document to use when deserializing elements\' references.\n     The element given will be cloned and all references will be to this cloned tree.\n     Document will be used to create the cloned DOM tree.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>instances</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The dictionary ({label: instance}) with the instances to use for specific labels.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>element</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Element</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The element to be cloned and used during deserialization of elements\' references.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>targetDocument</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Document</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The Document to be used when cloning the DOM tree.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>callback</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The callback to be invoked when the object has been fully deserialized. The function will be called with a dictionary ({label: object}) with all deserialized objects.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 1118\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=get><span class=type-signature></span>get<span class=signature>(name)</span><span class=type-signature> → {*}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>This function is to be used in the context of deserializeProperties delegate used for custom object deserializations.\n     It reads an entry from the "properties" serialization unit of the object being deserialized.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>name</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>string</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The name of the entry to be read.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 286\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>The value of the entry</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>*</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=getObjectsFromLastDeserialization><span class=type-signature></span>getObjectsFromLastDeserialization<span class=signature>()</span><span class=type-signature> → {<a href=Array.html>Array</a>}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns an array with all the objects that were created or used during the call to deserializeWith* functions.</p>\n\n    </div>\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 238\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>The array of objects.</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type><a href=Array.html>Array</a></span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=initWithObject><span class=type-signature></span>initWithObject<span class=signature>(object)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Initializes the deserializer object with an object representing a serialization. Since the serialization is a JSON string it is also possible to represent it in a JavaScript object.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>object</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The serialization in JavaScript object form.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 183\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>itself</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=initWithString><span class=type-signature></span>initWithString<span class=signature>(string, origin)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Initializes the deserializer with a string of serialized objects.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>string</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>A string of serialized objects.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>origin</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The origin of the serialization, usually a filename.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 170\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>itself</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=initWithStringAndRequire><span class=type-signature></span>initWithStringAndRequire<span class=signature>(string, require, origin)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Initializes the deserializer object with a serialization string and the require object used to load the modules containing the object\'s prototypes.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>string</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>string</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The serialization string.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>require</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The require function to load the modules.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>origin</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>string</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The origin of the serialization, usually a filename.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 209\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>itself</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=optimizeForDocument><span class=type-signature></span>optimizeForDocument<span class=signature>(doc)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Optimizes the current serialization for a specific document.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>doc</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Document</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The document to optimize against, this document can be modified during optimization.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 643\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=parseForModuleAndName><span class=type-signature></span>parseForModuleAndName<span class=signature>(name, description)</span><span class=type-signature> → {Object}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Sets the module loader used during deserialization.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>name</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The string representing a module/name pair, such as "my-module[MyModule]".</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>description</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The description object on which the parseForModuleAndName will populate the module and name properties. [Optional]</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 609\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>The description object with module and name properties populated.</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>Object</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=setModuleLoader><span class=type-signature></span>setModuleLoader<span class=signature>(loader)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Sets the module loader used during deserialization.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>loader</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The function that will load all module\'s found in the Array. The Array is composed of module id\'s to be loaded. When all modules are loaded the callback function should be invoked with an object that maps each module id to its corresponding module object, (e.g.: {"montage/ui/component": &lt;the component module&gt;}).</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/deserializer.js, line 564\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n        </dl>\n\n\n\n\n\n</article>\n\n\n\n\n\n    </section>\n\n    <nav class=docs>\n        <h2>Search</h2><input id=index-search type=search placeholder="search for"><details open=open><summary>Types</summary><ul><li><a href=Application.html>Application</a></li><li><a href=ArrayController.html>ArrayController</a></li><li><a href=BindingDescriptor.html>BindingDescriptor</a></li><li><a href=BitField.html>BitField</a></li><li><a href=Button.html>Button</a></li><li><a href=BytesConverter.html>BytesConverter</a></li><li><a href=ChangeEventDispatchingArray.html>ChangeEventDispatchingArray</a></li><li><a href=CheckInput.html>CheckInput</a></li><li><a href=Component.html>Component</a></li><li><a href=Composer.html>Composer</a></li><li><a href=Condition.html>Condition</a></li><li><a href=Converter.html>Converter</a></li><li><a href=CurrencyConverter.html>CurrencyConverter</a></li><li><a href=DateConverter.html>DateConverter</a></li><li><a href=DateValidator.html>DateValidator</a></li><li><a href=DefaultLocalizer.html>DefaultLocalizer</a></li><li><a href=Deserializer.html>Deserializer</a></li><li><a href=DynamicElement.html>DynamicElement</a></li><li><a href=DynamicText.html>DynamicText</a></li><li><a href=EditableText.html>EditableText</a></li><li><a href=Enum.html>Enum</a></li><li><a href=EventManager.html>EventManager</a></li><li><a href=Exception.html>Exception</a></li><li><a href=Gate.html>Gate</a></li><li><a href=InputText.html>InputText</a></li><li><a href=InvertConverter.html>InvertConverter</a></li><li><a href=KeyComposer.html>KeyComposer</a></li><li><a href=KeyManager.html>KeyManager</a></li><li><a href=Localizer.html>Localizer</a></li><li><a href=Logger.html>Logger</a></li><li><a href=LowerCaseConverter.html>LowerCaseConverter</a></li><li><a href=MediaController.html>MediaController</a></li><li><a href=MessageFormat.html>MessageFormat</a></li><li><a href=MessageLocalizer.html>MessageLocalizer</a></li><li><a href=Montage.html>Montage</a></li><li><a href=MontageWindow.html>MontageWindow</a></li><li><a href=MutableEvent.html>MutableEvent</a></li><li><a href=NativeControl.html>NativeControl</a></li><li><a href=NewLineToBrConverter.html>NewLineToBrConverter</a></li><li><a href=NumberConverter.html>NumberConverter</a></li><li><a href=NumberValidator.html>NumberValidator</a></li><li><a href=ObjectController.html>ObjectController</a></li><li><a href=PressComposer.html>PressComposer</a></li><li><a href=PropertyChangeBindingListener.html>PropertyChangeBindingListener</a></li><li><a href=Repetition.html>Repetition</a></li><li><a href=RootComponent.html>RootComponent</a></li><li><a href=Serializer_.html>Serializer</a></li><li><a href=Slot.html>Slot</a></li><li><a href=State.html>State</a></li><li><a href=StateChart.html>StateChart</a></li><li><a href=Substitution.html>Substitution</a></li><li><a href=SwipeComposer.html>SwipeComposer</a></li><li><a href=Template_.html>Template</a></li><li><a href=TranslateComposer.html>TranslateComposer</a></li><li><a href=TrimConverter.html>TrimConverter</a></li><li><a href=UndoManager.html>UndoManager</a></li><li><a href=UpperCaseConverter.html>UpperCaseConverter</a></li><li><a href=Uuid_.html>Uuid</a></li><li><a href=Validator.html>Validator</a></li></ul></details><details><summary>Externals</summary><ul><li><a href=external-Array.html>Array</a></li><li><a href=external-Element.html>Element</a></li><li><a href=external-Function.html>Function</a></li><li><a href=external-Object.html>Object</a></li><li><a href=external-RegExp.html>RegExp</a></li><li><a href=external-String.html>String</a></li></ul></details><details><summary>Events</summary><ul><li><a href="PressComposer.html#event:longPress">longPress</a></li><li><a href="PressComposer.html#event:press">press</a></li><li><a href="PressComposer.html#event:pressCancel">pressCancel</a></li><li><a href="PressComposer.html#event:pressStart">pressStart</a></li></ul></details><details><summary>Tutorials</summary><ul><li><a href=tutorial-README.html>README</a></li></ul></details><details><summary>Global</summary><ul><li><a href="global.html#_bezierTubeBoundingSphere">_bezierTubeBoundingSphere</a></li><li><a href="global.html#_computeRotationValuesToXAxis">_computeRotationValuesToXAxis</a></li><li><a href="global.html#_rayRectangleIntersection">_rayRectangleIntersection</a></li><li><a href="global.html#_rayRectangleIntersectionPosition">_rayRectangleIntersectionPosition</a></li><li><a href="global.html#_sphereIntersection">_sphereIntersection</a></li><li><a href="global.html#linearScrollingVector">linearScrollingVector</a></li><li><a href="global.html#relative">relative</a></li><li><a href="global.html#resolve">resolve</a></li><li><a href="global.html#test">test</a></li></ul></details>\n    </nav>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n    <script>var codes=document.getElementsByTagName("code");codes&&Array.prototype.forEach.call(codes,function(e){e.classList.contains("lang-javascript")&&e.classList.add("prettyprint")}),prettyPrint()</script>\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})
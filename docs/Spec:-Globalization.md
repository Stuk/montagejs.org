
Globalization	Editor Stuart Knightley and António Afonso


Index
Introduction
Language
Locale
Functional Description
Manifest
montage_manifest_version
files
...and back to the Functional Description
API
String Format
strings.json
Javascript
Serialization
Considerations
Resources
Alternative serializations

Introduction

The goal of this specification is to detail a solution for JS Framework localization. The localization is needed at a Component’s level for user visible UI with localized HTML templates, and for other resources with localized strings per locale. The Locale class will encapsulate the current locale used in a page and the locale level constants such as units, currencies, date or number formats.

The goal is to provide a structure that enforces good practices and encapsulate all Components’ resources in the same place, while being efficient when deploying code in production.
Language

The term "language" indicates a collection of properties used in spoken and written communication.

A neutral language is indicated by a name such as "en" for English. A more geographically specific language can be indicated by a name that includes both locale and country/region information. For example, the locale English (United States) has the language name "en-US".
Locale

Locales encapsulate information about linguistic, cultural, and technological conventions and standards. Examples of information encapsulated by a locale include the symbol used for the decimal separator in numbers and the way dates are formatted.

Locales are typically used to provide, format, and interpret information about and according to the user’s customs and preferences. They are frequently used in conjunction with formatters (Formatter class). Although you can use many locales, you usually use the one associated with the current user.

Functional Description


A .reel folder contains all UI related data for a component. In order to support multiple languages while providing encapsulation, we need to organize resources in locale-named directories. These directories must be under a “locales” directory next to the component’s .js file.

Because we cannot see the contents of the server filesystem a manifest must be provided, either in a manifest.json file next to the component or in the package.json. The boolean property “hasManifest” on the component specifies whether manifest.json exists. Any manifest.json files in subdirectories should be loaded if needed and take precedence for that directory.
Manifest

The manifest file takes the following format (if we decide this is the way to go this should be split into a separate spec. This also applied to package.json. I’ve written a prototype manifest generator.):
montage_manifest_version

Number. The version of the manifest file. Currently 1.
files

Object. Each key is a file name that maps to the following:
Object | Null. If null then the file exists, but no other information has been provided. Alternatively the object can have the following keys:

directory: Boolean. Whether this file is a directory.
files: “files” Object. If the file is a directory this contains its children.
size: Number. The size of the file in bytes. [It would be great for the loader to have this information, so that it can have a proper progress bar]
we can expand this if we want more file metadata. 

Example:
{
	"montage_manifest_version": 1,
	"files": {
		"button.html": {"size": 423},
		"button.js": null,
		"locales": {
			"directory": true,
			"files": {
				"en-US": {
					"directory": true,
					"files": {
						"strings.json": {"size": 42}
					}
				},
				"fr": {
					"directory": true,
					"files": {
						"strings.json": {"size": 143}
					}
				}
			}
		}
	}
}

...and back to the Functional Description

Using the data loaded from the manifest the logic will look for resources matching the most specific language code to the least specific, if none is found then use the resources available at the root level.

An example: if the language code is set to "hz-hans-cn" (Simplified Han Chinese) resources will be first looked up in "hz-hans-cn" then "hz-hans" and finally "hz", if it is not found on any of these folders (either the file or the folder doesn’t exist) then it will default to the resource found at the root of the component.

Language codes are case-sensitive and are listed here: http://tools.ietf.org/html/rfc5646#section-2.1

Where the files are stored, how they will be loaded will be based on further ResourceManager discussions 

Here’s the proposed layout on disk:

my-project/
	package.json
	index.html
	locale/
		en/
			strings.json
		fr/
			strings.json
	my-component.reel/
		manifest.json
		my-component.css
		my-component.html
		my-component.js
		flag.png
		locales/
			en/
				strings.json 
			fr/
				strings.json
				flag.png



Load my-component.reel/my-component.js (same as currently)
If hasManifest is true on the component load manifest.json
otherwise use the manifest from package.json if it has one
otherwise stop these localization steps.
Assert which languages and files are available from 2.
Make a list of 
If the template is available in the current language then load my-component.reel/<lang>/my-component.html and go to step 7.
Compute the best match and if found load my-component.reel/<best lang>/my-component.html and go to step 7.
Use my-component.reel/my-component.html
Repeat steps 4-6 for any CSS files found in the HTML template
Repeat steps 4-6 for a strings.json file

It's also important to notice that a change in the preferred language will only come into effect after an application reload (restart).
API

String Format

http://site.icu-project.org/
strings.json

The strings.json contains localized values for known strings structured as an anonymous object. Each string maps to an object containing “message” and, optionally,  “description” properties.

{
"title": {
"message": "Reproductor Multimedia",
},
"play": {
"message": "Reproducir",
"description": "Label for a button to start playing the media"
},
"pause": {
"message": "Pausa"
},
"num_videos": {
	"message": "{num_videos, plural, one {1 vídeo} other {# vídeos}}"
	"description": "How many pieces of video media there are available"
}
}

The available strings files must be added to the manifest at build time.
Javascript


var _ = require("core/i18n").localizer;

var Alert = {
	_alert: {
		value: _("Alert")
	},
	_ok: {
		value: _("OK")
	},
	_xAlerts: {
		value: _("{num_alerts, plural, one (1 alert} other {# alerts}}")
	},

	draw: {
		value: function() {
			this._titleEl.textContent = this._alert;
			this._buttonEl.textContent = this._ok;
			this._statusEl.textContent = this._xAlerts({num_alerts: this._num_alerts});
		}
	}
};

Serialization

A new deserialization unit is added: “localizations”. This unit contains mappings from a property name to a object containing a translation string or key (marked with “_”, and bindings for the arguments. Example: 

"deleteButton": {
	"prototype": "montage/ui/button.reel",
	"properties": {
		"element": {"#": "deleteButton"}
	},
	"localizations": {
		"value": {"_": "OK"}
		"label": {	  
			"_": "delete_albums",
	"_default": "Delete {num_albums, plural, one {album} other {all albums}}",
			"num_albums": "@albums.objects.count()"
		},
		"title": {
			"_": "{num_albums, plural, one {1 album} other {# albums}}",
			"num_albums": "@albums.objects.count()"
		}
	}
},

To translate elements without needing to create a component for each, you can use a localizer object. This will do a one-time localization of the properties on any object.

If you give “true” as a value to any of the properties then the existing value of the property will be translated.

"translate": {
	"object": "montage/core/localizer",
	"localizations": [
		{
			"object": {"@": "action_ok"},
			"properties": {
				"label": "OK"
			}
		},
		{
			"object": {"#": "link"},
			"properties": {
				"title": true,
				"textContent": true
			}
		}
	]
}

<a data-montage-id=”link” href=”more.html” title=”More detail on our products”>More</a>
Considerations

Resources

Components such as the Image will need to be made localization-aware, so the they can load images from the correct locale directory if available.

Alternative serializations

"deleteButton": {	
"localizations": {
		"label": "Delete {num_albums, plural, one {album} other {all albums}}",
"title": "{num_albums, plural, one {1 album} other {# albums}}"
	},
"bindings": {
		"_.num_albums": {"<-": "@albums.objects.count()"}
	}
}

"deleteButton": {
	"bindings": {
		"_.num_albums": {"<-": "@albums.objects.count()"}
		"label" {"<-": "@_.Delete {num_albums, plural, one {album} other {all albums}}"},
		"title" {"<-": "@_.{num_albums, plural, one {1 album} other {# albums}}"}
	}
},
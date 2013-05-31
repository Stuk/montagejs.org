Component to an element with montage-data-id. Native component we map attributes to properties.

**CSSDeclarationComponent**: map to 1 CSS Rule:

skeletonTheme.reel/

skeleton-theme.css
font-family: and font-size:

```
"ui-backgound-color": {
	prototype: "montage/ui/css-declaration-component",
	properties: {
		element:"$.ui-backgound-color{backgound-color}"
	},
	bindings: {
		"background-color":"<-owner.contentColor";
	}
},

"ui-border-color": {
	prototype: "montage/ui/css-declaration-component",
	properties: {
		element:"$.ui-backgound-color"
	},
	bindings: {
		"background-color":"<-owner.contentColor", "converter": {"@": "darkenConverter"};
	}
},

"darkenConverter": { //Same as Less .mixin (dark, @color) { color: darken(@color, 10%);}

	prototype: "montage/core/converter/darken-converter",
	properties: {
		"percent": "10"
	}
}
```
	
`#.ui-widget` assign `CSSDeclarationComponent` to the .iu-widget selector
	
skeleton-theme.html : just link skeleton-theme.css and the serialization instantiating the CSSComponentDeclaration
		
skeleton-theme.js
		
Property: contentColor
fontFamily:
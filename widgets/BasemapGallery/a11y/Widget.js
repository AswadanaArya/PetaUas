// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/html dojo/query dojo/on dojo/keys dojo/_base/array jimu/utils".split(" "),function(g,c,d,h,k,l,e){return{a11y_initGalleryNodesAttrs:function(){var a=d(".esriBasemapGalleryNode",this.domNode);a.length&&(l.forEach(a,function(b){var f=d("a",b)[0];c.setAttr(f,"tabindex","-1");var m=d("span",b)[0];c.setAttr(b,"aria-label",m.innerHTML);c.setAttr(b,"tabindex","0");c.setAttr(b,"role","button");h(b,"keydown",g.hitch(this,function(n){n.keyCode===k.ENTER&&f.click()}))}),e.initFirstFocusNode(this.domNode,
a[0]),e.initLastFocusNode(this.domNode,a[a.length-1]),this.openAtStartAysn=!0,e.isAutoFocusFirstNodeWidget(this)&&a[0].focus())}}});
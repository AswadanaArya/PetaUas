// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/topic","esri/lang","./LayerInfos/LayerInfos"],function(p,e,k,q,n){var l=null,m=p(null,{_filters:null,layerInfos:null,constructor:function(){this._filters={};window.isBuilder?(k.subscribe("app/mapLoaded",e.hitch(this,this._onMapLoaded)),k.subscribe("app/mapChanged",e.hitch(this,this._onMapChanged))):(k.subscribe("mapLoaded",e.hitch(this,this._onMapLoaded)),k.subscribe("mapChanged",e.hitch(this,this._onMapChanged)));k.subscribe("widgetDestroyed",
e.hitch(this,this._onWidgetDestroyed))},getWidgetFilter:function(a,b){return e.getObject(a+".filterExprs."+b,!1,this._filters)},applyWidgetFilter:function(a,b,c,d,g,h){var f="object"===typeof a?a:null;f&&(a=f.layerId,b=f.widgetId,c=f.expression,d=f.enableMapFilter,g=f.useAND,h=f.zoomAfterFilter);this._setFilterExp(a,b,c,d,g);b=this.layerInfos.getLayerInfoById(a)||this.layerInfos.getTableInfoById(a);a=this.getFilterExp(a);null!==a&&b&&b.setFilter(a,{zoomAfterFilter:h})},_onMapLoaded:function(){this.layerInfos=
n.getInstanceSync();this._traversalFilter()},_onMapChanged:function(){this.layerInfos=n.getInstanceSync();this._traversalFilter()},_onWidgetDestroyed:function(a){for(var b in this._filters)if(this._filters[b]){var c=this._filters[b];if(c){var d=c.filterExprs;c=c.mapFilterControls;d&&delete d[a];c&&delete c[a]}}},_traversalFilter:function(){this.layerInfos.traversalAll(e.hitch(this,function(a){this._filters[a.id]||(this._filters[a.id]={definitionExpression:a.getFilter(),filterExprs:{},mapFilterControls:{}})}))},
_getPriorityOfMapFilter:function(a){a=e.getObject(a+".mapFilterControls",!1,this._filters);var b=0,c;for(c in a){var d=a[c];d.priority>b&&(b=d.priority)}return b},_getMapFilterControl:function(a){a=e.getObject(a+".mapFilterControls",!1,this._filters);var b=0,c=null,d;for(d in a){var g=a[d];g.priority>b&&(b=g.priority,c=g)}return c},_setFilterExp:function(a,b,c,d,g){var h=a+".filterExprs."+b,f=a+".mapFilterControls."+b;c?(e.setObject(h,c,this._filters),q.isDefined(d)&&(a=this._getPriorityOfMapFilter(a),
e.setObject(f,{enable:d,useAND:g,priority:a+1},this._filters))):(e.getObject(h,!1,this._filters)&&delete this._filters[a].filterExprs[b],e.getObject(f,!1,this._filters)&&delete this._filters[a].mapFilterControls[b])},getFilterExp:function(a,b){if(!this._filters[a])return null;var c=[],d=this._filters[a].definitionExpression,g=this._filters[a].filterExprs;a=this._getMapFilterControl(a);for(var h in g){var f=g[h];b&&0<=h.indexOf(b)||f&&c.push("("+f+")")}b=c.join(" AND ");return d&&a&&a.enable||d&&null===
a?b?a&&!1===a.useAND?"("+d+") OR "+b:"("+d+") AND "+b:d:b}});m.getInstance=function(){if(null===l)l=new m,window._filterManager=l;else return l};return m});
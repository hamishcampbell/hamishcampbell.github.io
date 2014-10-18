(require([
    "dojo/dom",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/on",
    "dojo/domReady!"
], function(
    dom,
    domGeometry,
    domClass,
    on
) {
    var crumbsEl, crumbsPos, scrollFn;

    crumbsEl = dom.byId('crumbs');
    crumbsPos = domGeometry.position(crumbsEl, true);
    console.log(crumbsPos.y);
    scrollFn = function() {
        var scrollY = window.scrollY;
        domClass.toggle(document.body, "affixTop", scrollY > crumbsPos.y);
    };

    on(window, "scroll", scrollFn);
    scrollFn();
}));
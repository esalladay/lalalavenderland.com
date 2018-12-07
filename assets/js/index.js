// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry after all images have loaded
var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  }); 
});


var a = $(".header-homepage");
  var b = $(".pic-journeylogo");
  var c = $(".text-welcomemsg");
  var d = $("li.btn-ourjourney");
  var e = $("li.btn-ourjourney span.text-menusubtitle");
  var f = $("li.btn-ourjourney span.text-menutitle");
  var g = $("li.btn-ourjourney hr");
  var h = $("li.btn-ourshop");
  var i = $("li.btn-ourshop span.text-menusubtitle");
  var j = $("li.btn-ourshop span.text-menutitle");
  var k = $("li.btn-ourshop hr");
  var l = $("li.btn-blog");
  var m = $("li.btn-blog span.text-menusubtitle");
  var n = $("li.btn-blog span.text-menutitle");
  var o = $("li.btn-blog hr");
  var p = $(".nav-mainmenu li a");
	
  setTimeout(function () { a.addClass("animate-header")}, 1e3);
  setTimeout(function () { b.addClass("animate-header-elements")}, 2e3);
  setTimeout(function () { c.addClass("animate-header-elements")}, 2.5e3);
  setTimeout(function () { d.addClass("animate-menu")}, 3e3);
  setTimeout(function () { e.addClass("animate-menusubtitle")}, 3.2e3);
  setTimeout(function () { f.addClass("animate-menutitle")}, 3.5e3);
  setTimeout(function () { g.addClass("animate-hr")}, 3.6e3);
  setTimeout(function () { h.addClass("animate-menu")}, 4e3);
  setTimeout(function () { i.addClass("animate-menusubtitle")}, 4.2e3);
  setTimeout(function () { j.addClass("animate-menutitle")}, 4.5e3);
  setTimeout(function () { k.addClass("animate-hr")}, 4.6e3);
  setTimeout(function () { l.addClass("animate-menu")}, 5e3);
  setTimeout(function () { m.addClass("animate-menusubtitle")}, 5.2e3);
  setTimeout(function () { n.addClass("animate-menutitle")}, 5.5e3);
  setTimeout(function () { o.addClass("animate-hr")}, 5.6e3);
  setTimeout(function () { p.addClass("animate-links")}, 6e3);
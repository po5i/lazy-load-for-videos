!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";window.showThumb=function(e){lazyload_video_settings.vimeo.loadthumbnail&&(jQuery("#"+e[0].id).css("background","#000 url("+e[0].thumbnail_large+") center center no-repeat"),lazyload_video_settings.vimeo.show_title&&jQuery("#"+e[0].id).children().children(".titletext.vimeo").text(e[0].title))},function(e,t){var n,o=".preview-vimeo",i="js-lazyload--not-loaded";function a(){t(o).parent().removeClass(i)}e.init=function(e){r(e),t(document).ready(l()).ajaxStop(function(){l()}),"function"==typeof g.init&&!0===n.responsive?g.init():a(),"function"==typeof n.callback&&n.callback()};var r=function(e){n=t.extend({buttonstyle:"",playercolour:"",videoseo:!1,responsive:!0,displayBranding:!1,loadthumbnail:!0,callback:null},e)};function l(){v(),d(),c()}var d=function(){if(!0===n.displayBranding&&0===t(o).siblings(".lazyload-info-icon").length){var e=t(o),i=t('<a class="lazyload-info-icon" href="//kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>');e.before(i)}},c=function(){t(o).on("click",function(){var e=b(this);s(this),u(this);var o="";n.playercolour!==o&&(n.playercolour=f(n.playercolour),o="&color="+n.playercolour),t(this).html('<iframe src="'+p(e)+"?autoplay=1"+o+'" style="height:'+parseInt(t("#"+e).css("height"))+'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>'),"function"==typeof g.resize&&!0===n.responsive&&g.resize()})},s=function(e){t(e).removeClass("preview-vimeo")},u=function(e){t(e).prev(".lazyload-info-icon").remove()},p=function(e){return"//player.vimeo.com/video/"+e},f=function(e){return e.toString().replace(/[.#]/g,"")},v=function(){t(o).each(function(){var e=b(this);t(this).empty(),m(e)})},m=function(e){var o,i=t("#"+e);lazyload_video_settings.vimeo.loadthumbnail&&((o=document.createElement("script")).type="text/javascript",o.src=y(e)+".json?callback=showThumb",i.prepend(o));var a="";!0===n.videoseo&&(a=' itemprop="name"'),i.prepend('<div style="height:'+parseInt(t("#"+e).css("height"))+"px;width:"+parseInt(t("#"+e).css("width"))+'px;" class="lazy-load-vimeo-div"><span class="titletext vimeo"'+a+"></span></div>").addClass(n.buttonstyle),h(e)},h=function(e){!0===n.videoseo&&t.getJSON(y(e)+"?callback=?",{format:"json"},function(n){t("#"+e).append('<meta itemprop="contentLocation" content="'+n[0].url+'" />'),t("#"+e).append('<meta itemprop="embedUrl" content="'+p(e)+'" />'),t("#"+e).append('<meta itemprop="thumbnail" content="'+n[0].thumbnail_large+'" />'),t("#"+e).append('<meta itemprop="datePublished" content="'+n[0].upload_date+'" />'),t("#"+e).append('<meta itemprop="duration" content="'+n[0].duration+'" />'),t("#"+e).append('<meta itemprop="aggregateRating" content="'+n.data.rating+'" />')})},y=function(e){return"//vimeo.com/api/v2/video/"+e+".json"},b=function(e){return t(e).attr("id")};t.fn.bindFirst=function(e,n){var o=t(this);o.unbind(e,n),o.bind(e,n);var i=t._data(o[0]).events,a=i[e];a.unshift(a.pop()),i[e]=a};var g={config:{container:t(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){g.config.container.length>0&&(t(window).on("resize",g.resize),t(window).bindFirst("load",function(){g.resize()}),t(window).on("load",function(){g.resize(),a()}))},resize:function(){t(g.config.selector,g.config.container).each(function(){var e=t(this),n=e.parent().width(),o=Math.round(.5625*n);e.attr("height",o),e.attr("width",n),e.css({height:o,width:n})})}};t(function(){e.init(lazyload_video_settings.vimeo)})}(window.lazyload_vimeo=window.lazyload_vimeo||{},jQuery)},function(e,t,n){"use strict";!function(e,t,n){var o,i=".preview-youtube",a="js-lazyload--not-loaded",r="";function l(){t(i).parent().removeClass(a)}e.init=function(e){d(e),t(document).ready(c()).ajaxStop(function(){c()}),"function"==typeof s.init&&!0===o.responsive?s.init():l(),"function"==typeof o.callback&&o.callback()};var d=function(e){o=t.extend({theme:"dark",colour:"red",controls:!0,loadpolicy:!0,showinfo:!0,relations:!0,buttonstyle:"",preroll:"",postroll:"",videoseo:!1,responsive:!0,thumbnailquality:"0",displaybranding:!1,loadthumbnail:!0,callback:null},e)},c=function(){t("a.lazy-load-youtube").each(function(e){var n,i=t(this),a=i.attr("href"),l="";(n=a.split("/embed/")[1])||(n=a.split("://youtu.be/")[1]),n||(n=a.split("v=")[1].replace(/&/,"?"));var d=n.split("?")[0].split("#")[0],c="//www.youtube.com/embed/"+(l=void 0!==o.preroll&&o.preroll!==l?o.preroll:n);!function(){if(!0===o.displaybranding&&0===i.siblings(".lazyload-info-icon").length){var e=i,n=t('<a class="lazyload-info-icon" href="//kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>');e.before(n)}}();var u=function(e){return"//www.youtube.com/watch?v="+e},p=function(e){return parseInt(e.css("width"))-4},f=0,v=[3600,60,1],m=n.match(/[#&?]t=(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(m)for(var h=1;h<m.length;h++)void 0!==m[h]&&(f+=parseInt(m[h])*v[h-1]);0===f&&(m=n.match(/[#&?](?:t|start)=(\d+)/))&&(f=m[1]),n=n.split("#")[0];var y="";f&&0!==f&&-1===n.indexOf("start=")&&(y=(-1===n.indexOf("?")?"?":"&")+"start="+f);var b="";!0===o.videoseo&&(b=' itemprop="name"'),-1!==n.indexOf("showinfo=0")?i.html(""):i.html('<div class="lazy-load-youtube-info"><span class="titletext youtube"'+b+">"+(void 0!==i.attr("video-title")?i.attr("video-title"):void 0!==i.attr("data-video-title")?i.attr("data-video-title"):void 0!==i.html()&&""!==i.html()?i.html():"")+"</span></div>"),i.prepend('<div style="height:'+function(e){var t=0;if(!1===o.responsive)t=parseInt(e.css("height"))-4;else{var n=p(e);t=Math.round(.5625*n)}return t}(i)+"px;width:"+p(i)+'px;" class="lazy-load-youtube-div"></div>').addClass(o.buttonstyle);!function(e){var t="//i2.ytimg.com/vi/"+e+"/"+o.thumbnailquality+".jpg";r=t}(d);var g=function(){return r};o.loadthumbnail&&function(e){var n=g(),o=t('<img style="display:none" src="'+n+'"/>');o.load(function(){120===o.width()&&(n=n.replace("maxresdefault","0")),"none"===e.css("background-image")&&e.css("background","#000 url("+n+") center center no-repeat"),o.remove()}),t("body").append(o)}(i),!0===o.videoseo&&(i.append('<meta itemprop="contentLocation" content="'+u(d)+'" />'),i.append('<meta itemprop="embedUrl" content="'+c+'" />'),i.append('<meta itemprop="thumbnail" content="'+g()+'" />'),t.getJSON("//gdata.youtube.com/feeds/api/videos/"+d+"?v=2&alt=jsonc&callback=?",function(e){i.append('<meta itemprop="datePublished" content="'+e.data.uploaded+'" />'),i.append('<meta itemprop="duration" content="'+e.data.duration+'" />'),i.append('<meta itemprop="aggregateRating" content="'+e.data.rating+'" />')})),i.attr("id",d+e),i.attr("href",u(d)+(f?"#t="+f+"s":"")),function(){var e,t,n,i,a="",r="",s="",u="";void 0!==o.theme&&o.theme!==a&&"dark"!==o.theme&&(a="&theme="+o.theme),void 0!==o.colour&&o.colour!==r&&"red"!==o.colour&&(r="&color="+o.colour),e=o.showinfo?"":"&showinfo=0",t=o.relations?"":"&rel=0",n=o.controls?"":"&controls=0",i=o.loadpolicy?"":"&iv_load_policy=3",l=l!==d?d+",":"",void 0!==o.postroll&&o.postroll!==s&&(s=o.postroll),""===l&&""===s||(u="&playlist="+l+s),c+=(-1===c.indexOf("?")?"?":"&")+"autoplay=1"+a+r+n+i+e+t+u+y}();var w='<iframe width="'+parseInt(i.css("width"))+'" height="'+parseInt(i.css("height"))+'" style="vertical-align:top;" src="'+c+'" frameborder="0" allowfullscreen></iframe>';t(this).on("click",function(){return z(this),_(this),t("#"+d+e).replaceWith(w),"function"==typeof s.resize&&!0===o.responsive&&s.resize(),!1});var z=function(e){t(e).removeClass("preview-youtube")},_=function(e){t(e).prev(".lazyload-info-icon").remove()}})};t.fn.bindFirst=function(e,n){var o=t(this);o.unbind(e,n),o.bind(e,n);var i=t._data(o[0]).events,a=i[e];a.unshift(a.pop()),i[e]=a};var s={config:{container:t(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){s.config.container.length>0&&(t(window).on("resize",s.resize),t(window).bindFirst("load",function(){s.resize()}),t(window).on("load",function(){s.resize(),l()}))},resize:function(){t(s.config.selector,s.config.container).each(function(){var e=t(this),n=e.parent().width(),o=Math.round(.5625*n);e.attr("height",o),e.attr("width",n),e.css({height:o,width:n})})}};t(function(){e.init(lazyload_video_settings.youtube)})}(window.lazyload_youtube=window.lazyload_youtube||{},jQuery)},,function(e,t,n){},function(e,t,n){"use strict";n(3),n(1),n(0)}]);
//# sourceMappingURL=lazyload-all.js.map
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!function(i){if("function"==typeof define&&define.amd)define(["jquery"],i);else if("object"==typeof module&&module.exports){var t=require("jquery");i(t),module.exports=t}else i(jQuery)}(function(i){function t(i){this.init(i)}t.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=i("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var t=this.canvas;if(t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d"),window.devicePixelRatio>1){var e=window.devicePixelRatio;t.style.width=t.style.height=this.size+"px",t.width=t.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){function t(){var t=i("<canvas>")[0];t.width=e.size,t.height=e.size,t.getContext("2d").drawImage(g,0,0,r,r),e.arcFill=e.ctx.createPattern(t,"no-repeat"),e.drawFrame(e.lastFrameValue)}var e=this,a=this.fill,n=this.ctx,r=this.size;if(!a)throw Error("The fill is not specified!");if("string"==typeof a&&(a={color:a}),a.color&&(this.arcFill=a.color),a.gradient){var s=a.gradient;if(1==s.length)this.arcFill=s[0];else if(s.length>1){for(var l=a.gradientAngle||0,o=a.gradientDirection||[r/2*(1-Math.cos(l)),r/2*(1+Math.sin(l)),r/2*(1+Math.cos(l)),r/2*(1-Math.sin(l))],h=n.createLinearGradient.apply(n,o),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1);i.isArray(d)&&(u=d[1],d=d[0]),h.addColorStop(u,d)}this.arcFill=h}}if(a.image){var g;a.image instanceof Image?g=a.image:(g=new Image,g.src=a.image),g.complete?t():g.onload=t}},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){if(0!==i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;t.save(),t.beginPath(),this.reverse?t.arc(e,e,e-a/2,n-2*Math.PI*i,n):t.arc(e,e,e-a/2,n,n+2*Math.PI*i),t.lineWidth=a,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()}},drawEmptyArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;i<1&&(t.save(),t.beginPath(),i<=0?t.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?t.arc(e,e,e-a/2,n,n-2*Math.PI*i):t.arc(e,e,e-a/2,n+2*Math.PI*i,n),t.lineWidth=a,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var e=this,a=this.el,n=i(this.canvas);n.stop(!0,!1),a.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=e.animationStartValue*(1-i)+t*i;e.drawFrame(n),a.trigger("circle-animation-progress",[i,n])}})).promise().always(function(){a.trigger("circle-animation-end")})},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i){return i<.5?(i=2*i,.5*i*i*i):(i=2-2*i,1-.5*i*i*i)},i.fn.circleProgress=function(e,a){var n="circle-progress",r=this.data(n);if("widget"==e){if(!r)throw Error('Calling "widget" method on not initialized instance is forbidden');return r.canvas}if("value"==e){if(!r)throw Error('Calling "value" method on not initialized instance is forbidden');if("undefined"==typeof a)return r.getValue();var s=arguments[1];return this.each(function(){i(this).data(n).setValue(s)})}return this.each(function(){var a=i(this),r=a.data(n),s=i.isPlainObject(e)?e:{};if(r)r.init(s);else{var l=i.extend({},a.data());"string"==typeof l.fill&&(l.fill=JSON.parse(l.fill)),"string"==typeof l.animation&&(l.animation=JSON.parse(l.animation)),s=i.extend(l,s),s.el=a,r=new t(s),a.data(n,r)}})}});
/*!
	dsCountDown v1.0
	jQuery count down plugin
	(c) 2013 I Wayan Wirka - http://iwayanwirka.duststone.com/dscountdown/
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e){e.fn.dsCountDown=function(t){var n=this;var r=1e3,i=null,s=false,o=0,u=1,a=0,f=0,l=0,c=0,h=0,p=null,d=null,v=null,m=null;var g={startDate:new Date,endDate:null,elemSelDays:"",elemSelHours:"",elemSelMinutes:"",elemSelSeconds:"",theme:"white",titleDays:"Days",titleHours:"Hours",titleMinutes:"Minutes",titleSeconds:"Seconds",onBevoreStart:null,onClocking:null,onFinish:null};var y=e.extend({},g,t);if(this.length>1){this.each(function(){e(this).dsCountDown(t)});return this}var b=function(){if(!y.elemSelSeconds){n.prepend('<div class="ds-element ds-element-seconds">							<div class="ds-element-title">'+y.titleSeconds+'</div>							<div class="ds-element-value ds-seconds">00</div>						</div>');m=n.find(".ds-seconds")}else{m=n.find(y.elemSelSeconds)}if(!y.elemSelMinutes){n.prepend('<div class="ds-element ds-element-minutes">							<div class="ds-element-title">'+y.titleMinutes+'</div>							<div class="ds-element-value ds-minutes">00</div>						</div>');v=n.find(".ds-minutes")}else{v=n.find(y.elemSelMinutes)}if(!y.elemSelHours){n.prepend('<div class="ds-element ds-element-hours">							<div class="ds-element-title">'+y.titleHours+'</div>							<div class="ds-element-value ds-hours">00</div>						</div>');d=n.find(".ds-hours")}else{d=n.find(y.elemSelHours)}if(!y.elemSelDays){n.prepend('<div class="ds-element ds-element-days">							<div class="ds-element-title">'+y.titleDays+'</div>							<div class="ds-element-value ds-days">00</div>						</div>');p=n.find(".ds-days")}else{p=n.find(y.elemSelDays)}n.addClass("dsCountDown");n.addClass("ds-"+y.theme);if(y.startDate&&y.endDate){a=y.endDate.getTime()-y.startDate.getTime();if(a>0){var e=a/1e3;var t=e%86400;var r=t%3600;o=e;h=Math.floor(e/86400);c=Math.floor(t/3600);l=Math.floor(r/60);f=Math.floor(r%60)}}E()};var w=function(e){if(s){clearInterval(i);s=false}if(e){e(n)}};var E=function(){if(!s){if(o>0){if(y.onBevoreStart){y.onBevoreStart(n)}i=setInterval(function(){if(o>0){o-=u;f-=u;if(f<=0&&(l>0||c>0||h>0)){l--;f=60}if(l<=0&&(c>0||h>0)){c--;l=60}if(c<=0&&h>0){h--;c=24}if(p)p.html(h<10?"0"+h:h);if(d)d.html(c<10?"0"+c:c);if(v)v.html(l<10?"0"+l:l);if(m)m.html(f<10?"0"+f:f);if(y.onClocking){y.onClocking(n)}}else{w(y.onFinish)}},r);s=true}else{if(y.onFinish){y.onFinish(n)}}}};b()}})(jQuery)

//LOADER
jQuery(window).on("load", function () {
   "use strict";
   $(".loader").fadeOut(800);
});


jQuery(function ($) {
   "use strict";
   var $window = $(window);
   var windowsize = $(window).width();
   var $root = $("html, body");
   var $this = $(this);

   /* ----- Back to Top ----- */
   $("body").append('<a href="#" class="back-top"><i class="fa fa-angle-double-up"></i></a>');
   var amountScrolled = 700;
   var backBtn = $("a.back-top");
   $window.on("scroll", function () {
      if ($window.scrollTop() > amountScrolled) {
         backBtn.addClass("back-top-visible");
      } else {
         backBtn.removeClass("back-top-visible");
      }
   });
   backBtn.on("click", function () {
      $root.animate({
         scrollTop: 0
      }, 700);
      return false;
   });


   /* ------- Menu sticky ------- */
   $window.scroll(function () {
      var $scroll = $window.scrollTop();
      var $navbar = $("#navigation");
      if ($scroll > 50) {
         $navbar.addClass("fixed");
      } else {
         $navbar.removeClass("fixed");
      }
   });


   /*----- push Menu On click -----*/
   if ($(".pushbtn").length) {
      $("body").addClass("pushwrap");
      $(".pushbtn").on("click", function (event) {
         event.preventDefault();
         $(".pushwrap").toggleClass("active");
         $("#toggle-slide").toggleClass("open");
         $("#navslidy").toggleClass("open");
      });
   }


   /* ------- Smooth scroll ------- */
   $(".scrollings").on("click", function (event) {
      if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $("html, body").animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {
            window.location.hash = hash;
         });
      }
   });
	
   


   /* ------- DropDown handler ------- */	
   function navbarz() {
   $(".navbar .dropdown").on('click', function() {
		 if ($(window).width() < 990) {
			 $(this).next('.dropdown-menu').show();
			 $(this).next.toggleClass('open'); 
		 }
	});
			
	$(".navbar .dropdown").hover(function () {
		 if ($(window).width() >= 990) {
			 $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
				$(this).toggleClass('open');
		 }
	}, function () {
		 if ($(window).width() >= 990) {
			  $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
				$(this).removeClass('open');
		 }
	});
	}
   navbarz();
   $window.resize(navbarz);
	
	


   /* -------Toggle POPOVER for share blog post -------*/
   $(".share").on("click", function () {
      $(".share_purpose").fadeToggle();
   });


   /* -------BG Video banner -------*/
   $(function () {
      if($("#bgndVideo").length){
         $("#bgndVideo").YTPlayer();
      }
      
   });


   /* ----- Full Screen ----- */
   function resizebanner() {
      var $fullscreen = $(".full-screen");
      $fullscreen.css("height", $window.height());
      $fullscreen.css("width", $window.width());
   }
   resizebanner();
   $window.resize(resizebanner);

   /*for Just Height Solution*/
   function resizeheight() {
      var $fullscreen = $(".full-height");
      $fullscreen.css("height", $window.height());
   }
   resizeheight();
   $window.resize(resizeheight);


   /* --------Equal Heights -------- */
   function checheight() {
      var $smae_height = $(".equalheight");
      if ($smae_height.length) {
         if (windowsize > 767) {
            $smae_height.matchHeight({
               property: "height",
            });
         }
      }
   }
   checheight();
   $window.on("resize", function () {
      checheight();
   });


   /* -------- Progress Bars -------- */
   $(".barwrapper").appear(function () {
      $("[data-toggle='tooltip']").tooltip({
         trigger: "manual"
      }).tooltip("show");
      $(".progress-bar").each(function () {
         var bar_width = $(this).attr("aria-valuenow");
         $(this).width(bar_width + "%");
      });
   });


   /* -------- Pricings -------- */
   $(".pricing_btn").on("click", function () {
      if ($(".pricing_btn").hasClass("active")) {
         var $el = $("." + this.id).fadeIn("slow");
         $(".pricings").not($el).fadeOut("slow");
      }
      $(this).parent().find(".active").removeClass("active");
      $(this).addClass("active");
      return false;
   });



   /* ------ Swiper Slider ------ */

   /*Logos Clients with arrows*/
   $("#logo-arrow.swiper-container").swiper({
      slidesPerView: 5,
      spaceBetween: 15,
      controlBy: "slide",
      grabCursor: true,
      autoplay: 2500,
      speed: 300,
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 10
         },
         480: {
            slidesPerView: 2,
            spaceBetween: 10
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 10
         },
         900: {
            slidesPerView: 4,
            spaceBetween: 10
         }
      },
      nextButton: $this.find(".swiper-button-next"),
      prevButton: $this.find(".swiper-button-prev"),
   });

   /*LOGOS transparent shade*/
   $("#logo-transparent.swiper-container").swiper({
      slidesPerView: 6,
      spaceBetween: 15,
      controlBy: "slide",
      grabCursor: true,
      autoplay: 2500,
      speed: 300,
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 10
         },
         480: {
            slidesPerView: 2,
            spaceBetween: 10
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 10
         },
         900: {
            slidesPerView: 4,
            spaceBetween: 10
         },
         1200: {
            slidesPerView: 5,
            spaceBetween: 10
         }
      },
   });

   /*Team Slider*/
   $("#team-slider.swiper-container").swiper({
      spaceBetween: 0,
      slidesPerView: 2,
      slidesPerColumn: 2,
      controlBy: "slide",
      autoplay: 3500,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 1,
         },
         900: {
            slidesPerView: 2,
         },
         1400: {
            slidesPerView: 2,
         }
      },
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
   });
   /*team slider Blocks position */
   $("#team-slider .team-slide").each(function ($num) {
      $num += 1;
      if ($num % 2 === 0) {
         $(".team-text", this).insertBefore($(".team-photo", this));
         $(".team-text", this).css("text-align", "right");
         $(".team-text", this).addClass("right");
      }
   });

   /*Team Slider two columns*/
   $("#team-cols.swiper-container").swiper({
      spaceBetween: 0,
      slidesPerView: 2,
      slidesPerColumn: 1,
      autoplay: 3500,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 1,
         },
         900: {
            slidesPerView: 1,
         },
         1400: {
            slidesPerView: 2,
         }
      },
   });

   /*Team Slider 3row with caret buttons*/
   $("#teamrow-slider").each(function () {
      var $this = $(this);
      $this.find(".swiper-container").swiper({
         spaceBetween: 70,
         slidesPerView: 2,
         slidesPerColumn: 3,
         controlBy: "slide",
         loop: true,
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 10,
            },
            480: {
               slidesPerView: 1,
               spaceBetween: 10,
            },
            768: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
            900: {
               slidesPerView: 1,
               spaceBetween: 30,
            },
            1400: {
               slidesPerView: 2,
               spaceBetween: 30,
            }
         },
         nextButton: $this.find(".swiper-button-next"),
         prevButton: $this.find(".swiper-button-prev"),
      });
   });

   /*Address slider  01 */
   $(".our-address").each(function () {
      var $this = $(this);
      $this.find(".swiper-container").swiper({
         slidesPerView: 1,
         controlBy: "slide",
         nextButton: $this.find(".swiper-button-next"),
         prevButton: $this.find(".swiper-button-prev"),
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
         },
      });
   });
   
	/*Cripto version */
   $("#bitco-slider.swiper-container").swiper({
      spaceBetween: 0,
      slidesPerView: 1,
      autoplay: 3500,
      pagination: '.swiper-pagination',
      paginationClickable: true,
    });
   

   /* ------ OWL Slider ------ */
   /*Work with us LOGOS greyscale*/
   $("#logos-centered").owlCarousel({
      center: true,
      items: 5,
      autoplay: 500,
      loop: true,
      margin: 15,
      dots: false,
      nav: false,
      responsive: {
         900: {
            items: 4
         },
         600: {
            items: 2
         },
         480: {
            items: 2,
         },
         320: {
            items: 1,
         },
      }
   });

   /*Testimonial three img dots  */
   $(".testimonial-text.owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      callbacks: true,
      autoplay: 2500,
      autoplayHoverPause: true,
      dots: true,
      dotsContainer: "#owl-thumbs",
      nav: true,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      responsive: {
         767: {
            items: 1,
            nav: false,
         },
         0: {
            items: 1,
            nav: false,
         }
      }
   });
   
   /*Special Food Offers & Construction Services*/
   $("#food-offers, #constructions").owlCarousel({
      center: true,
      items: 3,
      autoplay: false,
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      responsive: {
         900: {
            items: 3
         },
         600: {
            items: 2
         },
         480: {
            items: 2,
         },
         320: {
            items: 1,
         },
      }
   });

   /*Testimonial single & Sidebar tweets slide fading  */
   $("#testimonial-fade.owl-carousel, #tweets-slider.owl-carousel").owlCarousel({
      items: 1,
      autoplay: 2500,
      loop: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: false,
      nav: false,
      responsive: {
         0: {
            items: 1
         }
      }
   });

   /*Simple text fadng banner*/
   $("#text-fade").owlCarousel({
      items: 1,
      autoplay: false,
      loop: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: true,
      dotsContainer: "#owl-custom",
      nav: false,
      responsive: {
         0: {
            items: 1
         }
      }
   });
   
   /*Simple fadng blog imgs*/
   $("#blog-fade").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      responsive: {
         0: {
            items: 1
         }
      }
   });

   

   /*----- TESTIMONIALS Feedback ----*/
   var feedtext = $(".feedback-text");
   var feedthumb = $(".feedback-thumbs");
   var slidesPerPage = 5; //globaly define number of elements per page
   var syncedSecondary = true;
   feedtext.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
   }).on("changed.owl.carousel", syncPosition);

   feedthumb.on("initialized.owl.carousel", function () {
      feedthumb.find(".owl-item").eq(0).addClass("current");
   }).owlCarousel({
      items: slidesPerPage,
      dots: false,
      nav: false,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
   }).on("changed.owl.carousel", syncPosition2);

   function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);

      if (current < 0) {
         current = count;
      }
      if (current > count) {
         current = 0;
      }
      //end block

      feedthumb.find(".owl-item").removeClass("current").eq(current).addClass("current");
      var onscreen = feedthumb.find(".owl-item.active").length - 1;
      var start = feedthumb.find(".owl-item.active").first().index();
      var end = feedthumb.find(".owl-item.active").last().index();
      if (current > end) {
         feedthumb.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
         feedthumb.data("owl.carousel").to(current - onscreen, 100, true);
      }
   }

   function syncPosition2(el) {
      if (syncedSecondary) {
         var number = el.item.index;
         feedtext.data("owl.carousel").to(number, 100, true);
      }
   }
   feedthumb.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      feedtext.data("owl.carousel").to(number, 300, true);
   });



   /* ----------- Counters ---------- */
   $(".value_formatter").data("countToOptions", {
      formatter: function (value, options) {
         return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      }
   });
   $(".counters").appear(function () {
      $(".count_nums").each(count);
   });

   function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data("countToOptions") || {});
      $this.countTo(options);
   }


   /* ---------- Parallax Backgrounds ---------- */
   if ($window.width() > 1024) {
      $(".parallaxie").parallaxie({
         speed: 0.55,
         offset: 0,
      });
   }

   /* ---------- CownDown ---------- */
   $(".custom-count").dsCountDown({
      endDate: new Date("April 24, 2018 23:59:00")
   });


   /* ---------- Type Writer ---------- */
   $('#type_it_slider').typeIt({
         speed: 50,
         autoStart: false,
         loop: true,
      })
      .tiType('Parallax Template')
      .tiSettings({
         speed: 700
      })
      .tiPause(1000)
      .tiSettings({
         speed: 50
      })
      .tiDelete()
      .tiType('Creative Agencies')
      .tiSettings({
         speed: 700
      })
      .tiPause(1000)
      .tiSettings({
         speed: 50
      })
      .tiDelete()
      .tiType('Business Startups');


   /*Personal resume page*/
   $('#my_designation').typeIt({
         speed: 40,
         autoStart: false,
         loop: true,
      })
      .tiType('Designer')
      .tiSettings({
         speed: 700
      })
      .tiPause(1000)
      .tiSettings({
         speed: 50
      })
      .tiDelete()
      .tiType('Developer');



   /* ------ CubePortfolio ------ */
   /*3columns white space mixed layout masonry and flat*/
   $("#gallery-grid").cubeportfolio({
      layoutMode: "mosaic",
      sortByDimension: true,
      defaultFilter: "*",
      animationType: "fadeOut",
      gapHorizontal: 30,
      gapVertical: 30,
      gridAdjustment: "responsive",
      mediaQueries: [{
         width: 1500,
         cols: 3,
        }, {
         width: 1100,
         cols: 3,
        }, {
         width: 800,
         cols: 3,
        }, {
         width: 480,
         cols: 2,
        }],
      plugins: {
         loadMore: {
            element: "#space-work",
            action: "click",
         }
      },
   });

   /*3columns no spce*/
   $("#nospace-grid").cubeportfolio({
      layoutMode: "mosaic",
      sortByDimension: true,
      defaultFilter: "*",
      animationType: "fadeOut",
      gapHorizontal: 0,
      gapVertical: 0,
      gridAdjustment: "responsive",
      mediaQueries: [{
         width: 1500,
         cols: 4,
        }, {
         width: 1100,
         cols: 4,
        }, {
         width: 800,
         cols: 3,
        }, {
         width: 480,
         cols: 2,
        }],
      plugins: {
         loadMore: {
            element: "#gallery-work",
            action: "click",
            loadItems: 3,
         }
      },
   });

   /*3columns space*/
   $("#masonry-grid").cubeportfolio({
      filters: "#masonry-filters",
      layoutMode: "grid",
      sortByDimension: true,
      defaultFilter: "*",
      animationType: "skew",
      gapHorizontal: 30,
      gapVertical: 30,
      gridAdjustment: "responsive",
      mediaQueries: [{
         width: 1500,
         cols: 4,
        }, {
         width: 1100,
         cols: 4,
        }, {
         width: 800,
         cols: 3,
        }, {
         width: 480,
         cols: 1,
        }],
   });

   /*three Cols*/
   $("#masonry-light").cubeportfolio({
      filters: "#light-filters",
      layoutMode: "grid",
      sortByDimension: true,
      defaultFilter: "*",
      animationType: "quicksand",
      gapHorizontal: 30,
      gapVertical: 30,
      gridAdjustment: "responsive",
      mediaQueries: [{
         width: 1500,
         cols: 3,
        }, {
         width: 1100,
         cols: 3,
        }, {
         width: 800,
         cols: 4,
        }, {
         width: 480,
         cols: 1,
        }],
   });
   
    /*3 cols mosaic*/
   $("#grid-mosaic").cubeportfolio({
        filters: "#filters-mosaic",
        layoutMode: 'mosaic',
        sortByDimension: true,
        defaultFilter: "*",
        animationType: "quicksand",
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 3,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
        }],
    });






   /* ------ Revolution Slider ------ */
   $("#banner-main").show().revolution({
      sliderType: "standard",
      sliderLayout: "fullscreen",
      scrollbarDrag: "true",
      dottedOverlay: "none",
      delay: 3000,
      navigation: {
         bullets: {
            style: "",
            enable: true,
            rtl: false,
            hide_onmobile: false,
            hide_onleave: false,
            hide_under: 320,
            hide_over: 9999,
            tmp: '',
            direction: "horizontal",
            space: 10,
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 30
         },
         arrows: {
            enable: true,
            hide_onmobile: true,
            hide_onleave: false,
            hide_under: 767,
            left: {
               h_align: "left",
               v_align: "bottom",
               h_offset: 20,
               v_offset: 30,
            },
            right: {
               h_align: "right",
               v_align: "bottom",
               h_offset: 20,
               v_offset: 30
            },
         },
         touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false,
         }
      },
      viewPort: {
         enable: true,
         outof: "pause",
         visible_area: "90%"
      },
      responsiveLevels: [4096, 1024, 778, 480],
      gridwidth: [1170, 1024, 750, 480],
      gridheight: [600, 500, 500, 350],
      lazyType: "none",
      parallax: {
         type: "mouse",
         origo: "slidercenter",
         speed: 9000,
         levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
         simplifyAll: "off",
         nextSlideOnWindowFocus: "off",
         disableFocusListener: false,
      }
   });
   
   /*Banner Standard with full Width*/
   $("#banner-standard").show().revolution({
      sliderType: "standard",
      sliderLayout: "fullwidth",
      scrollbarDrag: "true",
      dottedOverlay: "none",
      delay: 3000,
      navigation: {
         bullets: {
            style: "",
            enable: true,
            rtl: false,
            hide_onmobile: false,
            hide_onleave: false,
            hide_under: 320,
            hide_over: 9999,
            tmp: '',
            direction: "horizontal",
            space: 10,
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 30
         },
         arrows: {
            enable: true,
            hide_onmobile: true,
            hide_onleave: false,
            hide_under: 767,
            left: {
               h_align: "left",
               v_align: "middle",
               h_offset: 20,
               v_offset: 30,
            },
            right: {
               h_align: "right",
               v_align: "middle",
               h_offset: 20,
               v_offset: 30
            },
         },
         touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false,
         }
      },
      viewPort: {
         enable: true,
         outof: "pause",
         visible_area: "90%"
      },
      responsiveLevels: [4096, 1024, 778, 480],
      gridwidth: [1170, 1024, 750, 480],
      gridheight: [600, 500, 500, 350],
      lazyType: "none",
      parallax: {
         type: "mouse",
         origo: "slidercenter",
         speed: 9000,
         levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
         simplifyAll: "off",
         nextSlideOnWindowFocus: "off",
         disableFocusListener: false,
      }
   });


   /*animated elements banner*/
   $("#rev_single").show().revolution({
      sliderType: "hero",
      jsFileLocation: "revolution/js/",
      sliderLayout: "fullscreen",
      scrollbarDrag: "true",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {},
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1170, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "none",
      parallax: {
         type: "scroll",
         origo: "slidercenter",
         speed: 400,
         levels: [10, 15, 20, 25, 30, 35, 40, -10, -15, -20, -25, -30, -35, -40, -45, 55]
      },
      shadow: 0,
      spinner: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
         simplifyAll: "off",
         disableFocusListener: false
      }
   });



   /* -------- Circle bars -------- */
   $(".circular-wrap").appear(function () {
      $(".circle").circleProgress({
         size: 210,
         lineCap: "round",
         fill: {
            gradient: ["#ef233c", "#6a54a0"]
         },
      });
   });
   
   
   $(".circular-wrap.dark").appear(function () {
      $('.myskill').circleProgress({
      lineCap: "round",
      size: 200,
   });
   });

   

   /* ----- Custom scroller ----- */
   if ($("#nav-slides").length) {
      new SimpleBar($("#nav-slides")[0]);
   }

});


/* -------- Crypto Currency Price Fetching -------- */
   if ($("body").hasClass("crypto_currency_version")){

    $.get("https://api.coinmarketcap.com/v1/ticker/", function(data, status) {
        for (var i = 0; i < data.length - 1; i++) {
            if (data[i].id == "litecoin") {
                $("#lprice").html(data[i].price_usd);
            }
            if (data[i].id == "bitcoin") {
                $("#bprice").html(data[i].price_usd);
            }
            if (data[i].id == "ethereum") {
                $("#eprice").html(data[i].price_usd);
            }
            if (data[i].id == "ethereum") {
                $("#e_price").html(data[i].price_usd);
            }
            if (data[i].id == "bitcoin") {
                $("#b_price").html(data[i].price_usd);
            }

        }
    });


}
   

/* -------- Wow Transitions -------- */

new WOW().init();
   

/*!
 * jQuery JavaScript Library v2.2.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-04-05T19:26Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];

var document = window.document;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "2.2.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {
		var key;

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Not own constructor property must be Object
		if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {

			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf( "use strict" ) === 1 ) {
				script = document.createElement( "script" );
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {

				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval

				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {

						// Inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE9-10 only
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	register: function( owner, initial ) {
		var value = initial || {};

		// If it is a node unlikely to be stringify-ed or looped over
		// use plain assignment
		if ( owner.nodeType ) {
			owner[ this.expando ] = value;

		// Otherwise secure it in a non-enumerable, non-writable property
		// configurability must be true to allow the property to be
		// deleted with the delete operator
		} else {
			Object.defineProperty( owner, this.expando, {
				value: value,
				writable: true,
				configurable: true
			} );
		}
		return owner[ this.expando ];
	},
	cache: function( owner ) {

		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return an empty object.
		if ( !acceptData( owner ) ) {
			return {};
		}

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ prop ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ key ];
	},
	access: function( owner, key, value ) {
		var stored;

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase( key ) );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key === undefined ) {
			this.register( owner );

		} else {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );

				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;

			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <= 35-45+
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://code.google.com/p/chromium/issues/detail?id=378607
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data, camelKey;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// with the key as-is
				data = dataUser.get( elem, key ) ||

					// Try to find dashed key if it exists (gh-2779)
					// This is for 2.2.x only
					dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

				if ( data !== undefined ) {
					return data;
				}

				camelKey = jQuery.camelCase( key );

				// Attempt to get data from the cache
				// with the key camelized
				data = dataUser.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			camelKey = jQuery.camelCase( key );
			this.each( function() {

				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = dataUser.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				dataUser.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
					dataUser.set( this, key, value );
				}
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
			"screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {
		div.style.cssText =

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );
	}

	jQuery.extend( support, {
		pixelPosition: function() {

			// This test is executed only once but we still do memoizing
			// since we can use the boxSizingReliable pre-computing.
			// No need to check if the test was already performed, though.
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
			// since that compresses better and they're computed together anyway.
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		},
		reliableMarginRight: function() {

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// This support function is only executed once so no memoizing is needed.
			var ret,
				marginDiv = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			marginDiv.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;margin:0;border:0;padding:0";
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			documentElement.appendChild( container );

			ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

			documentElement.removeChild( container );
			div.removeChild( marginDiv );

			return ret;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE9-11+
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE11 only
	// In IE 11 fullscreen elements inside of an iframe have
	// 100x too small dimensions (gh-1764).
	if ( document.msFullscreenElement && window.top !== window ) {

		// Support: IE11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
		}
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = dataPriv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = dataPriv.access(
					elem,
					"olddisplay",
					defaultDisplay( elem.nodeName )
				);
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				dataPriv.set(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = dataPriv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;

			dataPriv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
		opt.duration : opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// But now, this "simulate" function is used only for events
				// for which stopPropagation() is noop, so there is no need for that anymore.
				//
				// For the 1.x branch though, guard for "click" and "submit"
				// events is still used, but was moved to jQuery.event.stopPropagation function
				// because `originalEvent` should point to the original event for the constancy
				// with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE8-11+
			// IE throws exception if url is malformed, e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE8-11+
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE9
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE9
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		box = elem.getBoundingClientRect();
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	size: function() {
		return this.length;
	}
} );

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));

/*
Plugin Name: 	Count To
Written by: 	Matt Huggins - https://github.com/mhuggins/jquery-countTo
*/

(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));
 /*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
	$.fn.appear = function(fn, options) {

		var settings = $.extend({

			//arbitrary data to pass to fn
			data: undefined,

			//call fn only on the first appear?
			one: true,

			// X & Y accuracy
			accX: 0,
			accY: 0

		}, options);

		return this.each(function() {

			var t = $(this);

			//whether the element is currently visible
			t.appeared = false;

			if (!fn) {

				//trigger the custom event
				t.trigger('appear', settings.data);
				return;
			}

			var w = $(window);

			//fires the appear event when appropriate
			var check = function() {

				//is the element hidden?
				if (!t.is(':visible')) {

					//it became hidden
					t.appeared = false;
					return;
				}

				//is the element inside the visible window?
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;

				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();

				if (y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax) {

					//trigger the custom event
					if (!t.appeared) t.trigger('appear', settings.data);

				} else {

					//it scrolled out of view
					t.appeared = false;
				}
			};

			//create a modified fn with some additional logic
			var modifiedFn = function() {

				//mark the element as visible
				t.appeared = true;

				//is this supposed to happen only once?
				if (settings.one) {

					//remove the check
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}

				//trigger the original fn
				fn.apply(this, arguments);
			};

			//bind the modified fn to the element
			if (settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);

			//check whenever the window scrolls
			w.scroll(check);

			//check whenever the dom changes
			$.fn.appear.checks.push(check);

			//check now
			(check)();
		});
	};

	//keep a queue of appearance checks
	$.extend($.fn.appear, {

		checks: [],
		timeout: null,

		//process the queue
		checkAll: function() {
			var length = $.fn.appear.checks.length;
			if (length > 0) while (length--) ($.fn.appear.checks[length])();
		},

		//check the queue asynchronously
		run: function() {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});

	//run checks when these methods are called
	$.each(['append', 'prepend', 'after', 'before', 'attr',
		'removeAttr', 'addClass', 'removeClass', 'toggleClass',
		'remove', 'css', 'show', 'hide'], function(i, n) {
		var old = $.fn[n];
		if (old) {
			$.fn[n] = function() {
				var r = old.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});

})(jQuery);
/*
* Cube Portfolio - Responsive jQuery Grid Plugin
*
* version: 4.2.0 (2 June, 2017)
* require: jQuery v1.8+
*
* Copyright 2013-2017, Mihai Buricea (http://scriptpie.com/cubeportfolio/live-preview/)
* Licensed under CodeCanyon License (http://codecanyon.net/licenses)
*
*/
!function(a,b,c,d){"use strict";function e(b,c,f){var g=this;if(a.data(b,"cubeportfolio"))throw new Error("cubeportfolio is already initialized. Destroy it before initialize again!");g.obj=b,g.$obj=a(b),a.data(g.obj,"cubeportfolio",g),c.sortToPreventGaps!==d&&(c.sortByDimension=c.sortToPreventGaps,delete c.sortToPreventGaps),g.options=a.extend({},a.fn.cubeportfolio.options,c,g.$obj.data("cbp-options")),g.isAnimating=!0,g.defaultFilter=g.options.defaultFilter,g.registeredEvents=[],g.queue=[],g.addedWrapp=!1,a.isFunction(f)&&g.registerEvent("initFinish",f,!0);var h=g.$obj.children();g.$obj.addClass("cbp"),(0===h.length||h.first().hasClass("cbp-item"))&&(g.wrapInner(g.obj,"cbp-wrapper"),g.addedWrapp=!0),g.$ul=g.$obj.children().addClass("cbp-wrapper"),g.wrapInner(g.obj,"cbp-wrapper-outer"),g.wrapper=g.$obj.children(".cbp-wrapper-outer"),g.blocks=g.$ul.children(".cbp-item"),g.blocksOn=g.blocks,g.wrapInner(g.blocks,"cbp-item-wrapper"),g.plugins={},a.each(e.plugins,function(a,b){var c=b(g);c&&(g.plugins[a]=c)}),g.triggerEvent("afterPlugins"),g.removeAttrAfterStoreData=a.Deferred(),g.loadImages(g.$obj,g.display)}a.extend(e.prototype,{storeData:function(b,c){var d=this;c=c||0,b.each(function(b,e){var f=a(e),g=f.width(),h=f.height();f.data("cbp",{index:c+b,wrapper:f.children(".cbp-item-wrapper"),widthInitial:g,heightInitial:h,width:g,height:h,widthAndGap:g+d.options.gapVertical,heightAndGap:h+d.options.gapHorizontal,left:null,leftNew:null,top:null,topNew:null,pack:!1})}),this.removeAttrAfterStoreData.resolve()},wrapInner:function(a,b){var e,f,g;if(b=b||"",!(a.length&&a.length<1))for(a.length===d&&(a=[a]),f=a.length-1;f>=0;f--){for(e=a[f],g=c.createElement("div"),g.setAttribute("class",b);e.childNodes.length;)g.appendChild(e.childNodes[0]);e.appendChild(g)}},removeAttrImage:function(a){this.removeAttrAfterStoreData.then(function(){a.removeAttribute("width"),a.removeAttribute("height"),a.removeAttribute("style")})},loadImages:function(b,c){var d=this;requestAnimationFrame(function(){var e=b.find("img").map(function(b,c){if(c.hasAttribute("width")&&c.hasAttribute("height")){if(c.style.width=c.getAttribute("width")+"px",c.style.height=c.getAttribute("height")+"px",c.hasAttribute("data-cbp-src"))return null;if(null===d.checkSrc(c))d.removeAttrImage(c);else{var e=a("<img>");e.on("load.cbp error.cbp",function(){a(this).off("load.cbp error.cbp"),d.removeAttrImage(c)}),c.srcset?(e.attr("sizes",c.sizes||"100vw"),e.attr("srcset",c.srcset)):e.attr("src",c.src)}return null}return d.checkSrc(c)}),f=e.length;return 0===f?void c.call(d):void a.each(e,function(b,e){var g=a("<img>");g.on("load.cbp error.cbp",function(){a(this).off("load.cbp error.cbp"),f--,0===f&&c.call(d)}),e.srcset?(g.attr("sizes",e.sizes),g.attr("srcset",e.srcset)):g.attr("src",e.src)})})},checkSrc:function(b){var c=b.srcset,e=b.src;if(""===e)return null;var f=a("<img>");c?(f.attr("sizes",b.sizes||"100vw"),f.attr("srcset",c)):f.attr("src",e);var g=f[0];return g.complete&&g.naturalWidth!==d&&0!==g.naturalWidth?null:g},display:function(){var a=this;a.width=a.$obj.outerWidth(),a.triggerEvent("initStartRead"),a.triggerEvent("initStartWrite"),a.width>0&&(a.storeData(a.blocks),a.layoutAndAdjustment()),a.triggerEvent("initEndRead"),a.triggerEvent("initEndWrite"),a.$obj.addClass("cbp-ready"),a.runQueue("delayFrame",a.delayFrame)},delayFrame:function(){var a=this;requestAnimationFrame(function(){a.resizeEvent(),a.triggerEvent("initFinish"),a.isAnimating=!1,a.$obj.trigger("initComplete.cbp")})},resizeEvent:function(){var a=this;e.private.resize.initEvent({instance:a,fn:function(){a.triggerEvent("beforeResizeGrid");var b=a.$obj.outerWidth();a.width!==b&&(a.width=b,"alignCenter"===a.options.gridAdjustment&&(a.wrapper[0].style.maxWidth=""),a.layoutAndAdjustment(),a.triggerEvent("resizeGrid")),a.triggerEvent("resizeWindow")}})},gridAdjust:function(){var b=this;"responsive"===b.options.gridAdjustment?b.responsiveLayout():(b.blocks.removeAttr("style"),b.blocks.each(function(c,d){var e=a(d).data("cbp"),f=d.getBoundingClientRect(),g=b.columnWidthTruncate(f.right-f.left),h=Math.round(f.bottom-f.top);e.height=h,e.heightAndGap=h+b.options.gapHorizontal,e.width=g,e.widthAndGap=g+b.options.gapVertical}),b.widthAvailable=b.width+b.options.gapVertical),b.triggerEvent("gridAdjust")},layoutAndAdjustment:function(a){var b=this;a&&(b.width=b.$obj.outerWidth()),b.gridAdjust(),b.layout()},layout:function(){var a=this;a.computeBlocks(a.filterConcat(a.defaultFilter)),"slider"===a.options.layoutMode?(a.sliderLayoutReset(),a.sliderLayout()):(a.mosaicLayoutReset(),a.mosaicLayout()),a.positionateItems(),a.resizeMainContainer()},computeFilter:function(a){var b=this;b.computeBlocks(a),b.mosaicLayoutReset(),b.mosaicLayout(),b.filterLayout()},filterLayout:function(){var b=this;b.blocksOff.addClass("cbp-item-off"),b.blocksOn.removeClass("cbp-item-off").each(function(b,c){var d=a(c).data("cbp");d.left=d.leftNew,d.top=d.topNew,c.style.left=d.left+"px",c.style.top=d.top+"px"}),b.resizeMainContainer(),b.filterFinish()},filterFinish:function(){var a=this;a.blocksAreSorted&&a.sortBlocks(a.blocks,"index"),a.isAnimating=!1,a.$obj.trigger("filterComplete.cbp"),a.triggerEvent("filterFinish")},computeBlocks:function(a){var b=this;b.blocksOnInitial=b.blocksOn,b.blocksOn=b.blocks.filter(a),b.blocksOff=b.blocks.not(a),b.triggerEvent("computeBlocksFinish",a)},responsiveLayout:function(){var b=this;b.cols=b[a.isArray(b.options.mediaQueries)?"getColumnsBreakpoints":"getColumnsAuto"](),b.columnWidth=b.columnWidthTruncate((b.width+b.options.gapVertical)/b.cols),b.widthAvailable=b.columnWidth*b.cols,"mosaic"===b.options.layoutMode&&b.getMosaicWidthReference(),b.blocks.each(function(c,d){var e,f=a(d).data("cbp"),g=1;"mosaic"===b.options.layoutMode&&(g=b.getColsMosaic(f.widthInitial)),e=b.columnWidth*g-b.options.gapVertical,d.style.width=e+"px",f.width=e,f.widthAndGap=e+b.options.gapVertical,d.style.height=""});var c=[];b.blocks.each(function(b,d){a.each(a(d).find("img").filter("[width][height]"),function(b,d){var e=0;a(d).parentsUntil(".cbp-item").each(function(b,c){var d=a(c).width();if(d>0)return e=d,!1});var f=parseInt(d.getAttribute("width"),10),g=parseInt(d.getAttribute("height"),10),h=parseFloat((f/g).toFixed(10));c.push({el:d,width:e,height:Math.round(e/h)})})}),a.each(c,function(a,b){b.el.width=b.width,b.el.height=b.height,b.el.style.width=b.width+"px",b.el.style.height=b.height+"px"}),b.blocks.each(function(c,d){var e=a(d).data("cbp"),f=d.getBoundingClientRect(),g=Math.round(f.bottom-f.top);e.height=g,e.heightAndGap=g+b.options.gapHorizontal})},getMosaicWidthReference:function(){var b=this,c=[];b.blocks.each(function(b,d){var e=a(d).data("cbp");c.push(e.widthInitial)}),c.sort(function(a,b){return a-b}),c[0]?b.mosaicWidthReference=c[0]:b.mosaicWidthReference=b.columnWidth},getColsMosaic:function(a){var b=this;if(a===b.width)return b.cols;var c=a/b.mosaicWidthReference;return c=c%1>=.79?Math.ceil(c):Math.floor(c),Math.min(Math.max(c,1),b.cols)},getColumnsAuto:function(){var a=this;if(0===a.blocks.length)return 1;var b=a.blocks.first().data("cbp").widthInitial+a.options.gapVertical;return Math.max(Math.round(a.width/b),1)},getColumnsBreakpoints:function(){var b,c=this,d=c.width;return a.each(c.options.mediaQueries,function(a,c){if(d>=c.width)return b=c,!1}),b||(b=c.options.mediaQueries[c.options.mediaQueries.length-1]),c.triggerEvent("onMediaQueries",b.options),b.cols},columnWidthTruncate:function(a){return Math.floor(a)},positionateItems:function(){var b,c=this;c.blocksOn.removeClass("cbp-item-off").each(function(c,d){b=a(d).data("cbp"),b.left=b.leftNew,b.top=b.topNew,d.style.left=b.left+"px",d.style.top=b.top+"px"}),c.blocksOff.addClass("cbp-item-off"),c.blocksAreSorted&&c.sortBlocks(c.blocks,"index")},resizeMainContainer:function(){var b,c=this,f=Math.max(c.freeSpaces.slice(-1)[0].topStart-c.options.gapHorizontal,0);return"alignCenter"===c.options.gridAdjustment&&(b=0,c.blocksOn.each(function(c,d){var e=a(d).data("cbp"),f=e.left+e.width;f>b&&(b=f)}),c.wrapper[0].style.maxWidth=b+"px"),f===c.height?void c.triggerEvent("resizeMainContainer"):(c.obj.style.height=f+"px",c.height!==d&&(e.private.modernBrowser?c.$obj.one(e.private.transitionend,function(){c.$obj.trigger("pluginResize.cbp")}):c.$obj.trigger("pluginResize.cbp")),c.height=f,void c.triggerEvent("resizeMainContainer"))},filterConcat:function(a){return a.replace(/\|/gi,"")},pushQueue:function(a,b){var c=this;c.queue[a]=c.queue[a]||[],c.queue[a].push(b)},runQueue:function(b,c){var d=this,e=d.queue[b]||[];a.when.apply(a,e).then(a.proxy(c,d))},clearQueue:function(a){var b=this;b.queue[a]=[]},registerEvent:function(a,b,c){var d=this;d.registeredEvents[a]||(d.registeredEvents[a]=[]),d.registeredEvents[a].push({func:b,oneTime:c||!1})},triggerEvent:function(a,b){var c,d,e=this;if(e.registeredEvents[a])for(c=0,d=e.registeredEvents[a].length;c<d;c++)e.registeredEvents[a][c].func.call(e,b),e.registeredEvents[a][c].oneTime&&(e.registeredEvents[a].splice(c,1),c--,d--)},addItems:function(b,c,d){var f=this;f.wrapInner(b,"cbp-item-wrapper"),f.$ul[d](b.addClass("cbp-item-loading").css({top:"100%",left:0})),e.private.modernBrowser?b.last().one(e.private.animationend,function(){f.addItemsFinish(b,c)}):f.addItemsFinish(b,c),f.loadImages(b,function(){if(f.$obj.addClass("cbp-updateItems"),"append"===d)f.storeData(b,f.blocks.length),a.merge(f.blocks,b);else{f.storeData(b);var c=b.length;f.blocks.each(function(b,d){a(d).data("cbp").index=c+b}),f.blocks=a.merge(b,f.blocks)}f.triggerEvent("addItemsToDOM",b),f.layoutAndAdjustment(!0),f.elems&&e.public.showCounter.call(f.obj,f.elems)})},addItemsFinish:function(b,c){var d=this;d.isAnimating=!1,d.$obj.removeClass("cbp-updateItems"),b.removeClass("cbp-item-loading"),a.isFunction(c)&&c.call(d,b),d.$obj.trigger("onAfterLoadMore.cbp",[b])},removeItems:function(b,c){var d=this;d.$obj.addClass("cbp-updateItems"),e.private.modernBrowser?b.last().one(e.private.animationend,function(){d.removeItemsFinish(b,c)}):d.removeItemsFinish(b,c),b.each(function(b,c){d.blocks.each(function(b,f){if(c===f){var g=a(f);d.blocks.splice(b,1),e.private.modernBrowser?(g.one(e.private.animationend,function(){g.remove()}),g.addClass("cbp-removeItem")):g.remove()}})}),d.blocks.each(function(b,c){a(c).data("cbp").index=b}),d.layoutAndAdjustment(!0),d.elems&&e.public.showCounter.call(d.obj,d.elems)},removeItemsFinish:function(b,c){var d=this;d.isAnimating=!1,d.$obj.removeClass("cbp-updateItems"),a.isFunction(c)&&c.call(d,b)}}),a.fn.cubeportfolio=function(a,b,c){return this.each(function(){if("object"==typeof a||!a)return e.public.init.call(this,a,b);if(e.public[a])return e.public[a].call(this,b,c);throw new Error("Method "+a+" does not exist on jquery.cubeportfolio.js")})},e.plugins={},a.fn.cubeportfolio.constructor=e}(jQuery,window,document),function(a,b,c,d){"use strict";var e=a.fn.cubeportfolio.constructor;a.extend(e.prototype,{mosaicLayoutReset:function(){var b=this;b.blocksAreSorted=!1,b.blocksOn.each(function(c,d){a(d).data("cbp").pack=!1,b.options.sortByDimension&&(d.style.height="")}),b.freeSpaces=[{leftStart:0,leftEnd:b.widthAvailable,topStart:0,topEnd:Math.pow(2,18)}]},mosaicLayout:function(){for(var a=this,b=0,c=a.blocksOn.length;b<c;b++){var d=a.getSpaceIndexAndBlock();if(null===d)return a.mosaicLayoutReset(),a.sortBlocksToPreventGaps(),void a.mosaicLayout();a.generateF1F2(d.spaceIndex,d.dataBlock),a.generateG1G2G3G4(d.dataBlock),a.cleanFreeSpaces(),a.addHeightToBlocks()}a.blocksAreSorted&&a.sortBlocks(a.blocksOn,"topNew")},getSpaceIndexAndBlock:function(){var b=this,c=null;return a.each(b.freeSpaces,function(d,e){var f=e.leftEnd-e.leftStart,g=e.topEnd-e.topStart;return b.blocksOn.each(function(b,h){var i=a(h).data("cbp");if(i.pack!==!0)return i.widthAndGap<=f&&i.heightAndGap<=g?(i.pack=!0,c={spaceIndex:d,dataBlock:i},i.leftNew=e.leftStart,i.topNew=e.topStart,!1):void 0}),!b.blocksAreSorted&&b.options.sortByDimension&&d>0?(c=null,!1):null===c&&void 0}),c},generateF1F2:function(a,b){var c=this,d=c.freeSpaces[a],e={leftStart:d.leftStart+b.widthAndGap,leftEnd:d.leftEnd,topStart:d.topStart,topEnd:d.topEnd},f={leftStart:d.leftStart,leftEnd:d.leftEnd,topStart:d.topStart+b.heightAndGap,topEnd:d.topEnd};c.freeSpaces.splice(a,1),e.leftEnd>e.leftStart&&e.topEnd>e.topStart&&(c.freeSpaces.splice(a,0,e),a++),f.leftEnd>f.leftStart&&f.topEnd>f.topStart&&c.freeSpaces.splice(a,0,f)},generateG1G2G3G4:function(b){var c=this,d=[];a.each(c.freeSpaces,function(a,e){var f=c.intersectSpaces(e,b);return null===f?void d.push(e):(c.generateG1(e,f,d),c.generateG2(e,f,d),c.generateG3(e,f,d),void c.generateG4(e,f,d))}),c.freeSpaces=d},intersectSpaces:function(a,b){var c={leftStart:b.leftNew,leftEnd:b.leftNew+b.widthAndGap,topStart:b.topNew,topEnd:b.topNew+b.heightAndGap};if(a.leftStart===c.leftStart&&a.leftEnd===c.leftEnd&&a.topStart===c.topStart&&a.topEnd===c.topEnd)return null;var d=Math.max(a.leftStart,c.leftStart),e=Math.min(a.leftEnd,c.leftEnd),f=Math.max(a.topStart,c.topStart),g=Math.min(a.topEnd,c.topEnd);return e<=d||g<=f?null:{leftStart:d,leftEnd:e,topStart:f,topEnd:g}},generateG1:function(a,b,c){a.topStart!==b.topStart&&c.push({leftStart:a.leftStart,leftEnd:a.leftEnd,topStart:a.topStart,topEnd:b.topStart})},generateG2:function(a,b,c){a.leftEnd!==b.leftEnd&&c.push({leftStart:b.leftEnd,leftEnd:a.leftEnd,topStart:a.topStart,topEnd:a.topEnd})},generateG3:function(a,b,c){a.topEnd!==b.topEnd&&c.push({leftStart:a.leftStart,leftEnd:a.leftEnd,topStart:b.topEnd,topEnd:a.topEnd})},generateG4:function(a,b,c){a.leftStart!==b.leftStart&&c.push({leftStart:a.leftStart,leftEnd:b.leftStart,topStart:a.topStart,topEnd:a.topEnd})},cleanFreeSpaces:function(){var a=this;a.freeSpaces.sort(function(a,b){return a.topStart>b.topStart?1:a.topStart<b.topStart?-1:a.leftStart>b.leftStart?1:a.leftStart<b.leftStart?-1:0}),a.correctSubPixelValues(),a.removeNonMaximalFreeSpaces()},correctSubPixelValues:function(){var a,b,c,d,e=this;for(a=0,b=e.freeSpaces.length-1;a<b;a++)c=e.freeSpaces[a],d=e.freeSpaces[a+1],d.topStart-c.topStart<=1&&(d.topStart=c.topStart)},removeNonMaximalFreeSpaces:function(){var b=this;b.uniqueFreeSpaces(),b.freeSpaces=a.map(b.freeSpaces,function(c,d){return a.each(b.freeSpaces,function(a,b){if(d!==a)return b.leftStart<=c.leftStart&&b.leftEnd>=c.leftEnd&&b.topStart<=c.topStart&&b.topEnd>=c.topEnd?(c=null,!1):void 0}),c})},uniqueFreeSpaces:function(){var b=this,c=[];a.each(b.freeSpaces,function(b,d){a.each(c,function(a,b){if(b.leftStart===d.leftStart&&b.leftEnd===d.leftEnd&&b.topStart===d.topStart&&b.topEnd===d.topEnd)return d=null,!1}),null!==d&&c.push(d)}),b.freeSpaces=c},addHeightToBlocks:function(){var b=this;a.each(b.freeSpaces,function(c,d){b.blocksOn.each(function(c,e){var f=a(e).data("cbp");if(f.pack===!0&&b.intersectSpaces(d,f)){var g=d.topStart-f.topNew-f.heightAndGap;g===-1&&(e.style.height=f.height-1+"px")}})})},sortBlocksToPreventGaps:function(){var b=this;b.blocksAreSorted=!0,b.blocksOn.sort(function(b,c){var d=a(b).data("cbp"),e=a(c).data("cbp");return d.widthAndGap<e.widthAndGap?1:d.widthAndGap>e.widthAndGap?-1:d.heightAndGap<e.heightAndGap?1:d.heightAndGap>e.heightAndGap?-1:d.index>e.index?1:d.index<e.index?-1:void 0})},sortBlocks:function(b,c){b.sort(function(b,d){var e=a(b).data("cbp"),f=a(d).data("cbp");return e[c]>f[c]?1:e[c]<f[c]?-1:e.leftNew>f.leftNew?1:e.leftNew<f.leftNew?-1:0})}})}(jQuery,window,document),jQuery.fn.cubeportfolio.options={filters:"",search:"",layoutMode:"grid",sortByDimension:!1,drag:!0,auto:!1,autoTimeout:5e3,autoPauseOnHover:!0,showNavigation:!0,showPagination:!0,rewindNav:!0,scrollByPage:!1,defaultFilter:"*",filterDeeplinking:!1,animationType:"fadeOut",gridAdjustment:"responsive",mediaQueries:!1,gapHorizontal:10,gapVertical:10,caption:"pushTop",displayType:"fadeIn",displayTypeSpeed:400,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!0,singlePageStickyNavigation:!0,singlePageCounter:'<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',singlePageAnimation:"left",singlePageCallback:null,singlePageInlineDelegate:".cbp-singlePageInline",singlePageInlineDeeplinking:!1,singlePageInlinePosition:"top",singlePageInlineInFocus:!0,singlePageInlineCallback:null,plugins:{}},function(a,b,c,d){"use strict";var e=a.fn.cubeportfolio.constructor,f=a(b);e.private={publicEvents:function(b,c,d){var e=this;e.events=[],e.initEvent=function(a){0===e.events.length&&e.scrollEvent(),e.events.push(a)},e.destroyEvent=function(c){e.events=a.map(e.events,function(a,b){if(a.instance!==c)return a}),0===e.events.length&&f.off(b)},e.scrollEvent=function(){var g;f.on(b,function(){clearTimeout(g),g=setTimeout(function(){a.isFunction(d)&&d.call(e)||a.each(e.events,function(a,b){b.fn.call(b.instance)})},c)})}},checkInstance:function(b){var c=a.data(this,"cubeportfolio");if(!c)throw new Error("cubeportfolio is not initialized. Initialize it before calling "+b+" method!");return c.triggerEvent("publicMethod"),c},browserInfo:function(){var a,c,f,g=e.private,h=navigator.appVersion;h.indexOf("MSIE 8.")!==-1?g.browser="ie8":h.indexOf("MSIE 9.")!==-1?g.browser="ie9":h.indexOf("MSIE 10.")!==-1?g.browser="ie10":b.ActiveXObject||"ActiveXObject"in b?g.browser="ie11":/android/gi.test(h)?g.browser="android":/iphone|ipad|ipod/gi.test(h)?g.browser="ios":/chrome/gi.test(h)?g.browser="chrome":g.browser="",f=g.styleSupport("perspective"),typeof f!==d&&(a=g.styleSupport("transition"),g.transitionend={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],c=g.styleSupport("animation"),g.animationend={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"}[c],g.animationDuration={WebkitAnimation:"webkitAnimationDuration",animation:"animationDuration"}[c],g.animationDelay={WebkitAnimation:"webkitAnimationDelay",animation:"animationDelay"}[c],g.transform=g.styleSupport("transform"),a&&c&&g.transform&&(g.modernBrowser=!0))},styleSupport:function(a){var b,d="Webkit"+a.charAt(0).toUpperCase()+a.slice(1),e=c.createElement("div");return a in e.style?b=a:d in e.style&&(b=d),e=null,b}},e.private.browserInfo(),e.private.resize=new e.private.publicEvents("resize.cbp",50,function(){if(b.innerHeight==screen.height)return!0})}(jQuery,window,document),function(a,b,c,d){"use strict";var e=a.fn.cubeportfolio.constructor;e.public={init:function(a,b){new e(this,a,b)},destroy:function(b){var c=e.private.checkInstance.call(this,"destroy");c.triggerEvent("beforeDestroy"),a.removeData(this,"cubeportfolio"),c.blocks.removeData("cbp"),c.$obj.removeClass("cbp-ready").removeAttr("style"),c.$ul.removeClass("cbp-wrapper"),e.private.resize.destroyEvent(c),c.$obj.off(".cbp"),c.blocks.removeClass("cbp-item-off").removeAttr("style"),c.blocks.find(".cbp-item-wrapper").each(function(b,c){var d=a(c),e=d.children();e.length?e.unwrap():d.remove()}),c.destroySlider&&c.destroySlider(),c.$ul.unwrap(),c.addedWrapp&&c.blocks.unwrap(),0===c.blocks.length&&c.$ul.remove(),a.each(c.plugins,function(a,b){"function"==typeof b.destroy&&b.destroy()}),a.isFunction(b)&&b.call(c),c.triggerEvent("afterDestroy")},filter:function(b,c){var f,g=e.private.checkInstance.call(this,"filter");if(!g.isAnimating){if(g.isAnimating=!0,a.isFunction(c)&&g.registerEvent("filterFinish",c,!0),a.isFunction(b)){if(f=b.call(g,g.blocks),f===d)throw new Error("When you call cubeportfolio API `filter` method with a param of type function you must return the blocks that will be visible.")}else{if(g.options.filterDeeplinking){var h=location.href.replace(/#cbpf=(.*?)([#\?&]|$)/gi,"");location.href=h+"#cbpf="+encodeURIComponent(b),g.singlePage&&g.singlePage.url&&(g.singlePage.url=location.href)}g.defaultFilter=b,f=g.filterConcat(g.defaultFilter)}g.triggerEvent("filterStart",f),g.singlePageInline&&g.singlePageInline.isOpen?g.singlePageInline.close("promise",{callback:function(){g.computeFilter(f)}}):g.computeFilter(f)}},showCounter:function(b,c){var d=e.private.checkInstance.call(this,"showCounter");a.isFunction(c)&&d.registerEvent("showCounterFinish",c,!0),d.elems=b,b.each(function(){var b=a(this),c=d.blocks.filter(b.data("filter")).length;b.find(".cbp-filter-counter").text(c)}),d.triggerEvent("showCounterFinish",b)},appendItems:function(a,b){e.public.append.call(this,a,b)},append:function(b,c){var d=e.private.checkInstance.call(this,"append"),f=a(b).filter(".cbp-item");return d.isAnimating||f.length<1?void(a.isFunction(c)&&c.call(d,f)):(d.isAnimating=!0,void(d.singlePageInline&&d.singlePageInline.isOpen?d.singlePageInline.close("promise",{callback:function(){d.addItems(f,c,"append")}}):d.addItems(f,c,"append")))},prepend:function(b,c){var d=e.private.checkInstance.call(this,"prepend"),f=a(b).filter(".cbp-item");return d.isAnimating||f.length<1?void(a.isFunction(c)&&c.call(d,f)):(d.isAnimating=!0,void(d.singlePageInline&&d.singlePageInline.isOpen?d.singlePageInline.close("promise",{callback:function(){d.addItems(f,c,"prepend")}}):d.addItems(f,c,"prepend")))},remove:function(b,c){var d=e.private.checkInstance.call(this,"remove"),f=a(b).filter(".cbp-item");return d.isAnimating||f.length<1?void(a.isFunction(c)&&c.call(d,f)):(d.isAnimating=!0,void(d.singlePageInline&&d.singlePageInline.isOpen?d.singlePageInline.close("promise",{callback:function(){d.removeItems(f,c)}}):d.removeItems(f,c)))},layout:function(b){var c=e.private.checkInstance.call(this,"layout");return c.width=c.$obj.outerWidth(),c.isAnimating||c.width<=0?void(a.isFunction(b)&&b.call(c)):("alignCenter"===c.options.gridAdjustment&&(c.wrapper[0].style.maxWidth=""),c.storeData(c.blocks),c.layoutAndAdjustment(),void(a.isFunction(b)&&b.call(c)))}}}(jQuery,window,document),function(a,b,c,d){"use strict";var e=a.fn.cubeportfolio.constructor;a.extend(e.prototype,{updateSliderPagination:function(){var b,c,d=this;if(d.options.showPagination){for(b=Math.ceil(d.blocksOn.length/d.cols),d.navPagination.empty(),c=b-1;c>=0;c--)a("<div/>",{class:"cbp-nav-pagination-item","data-slider-action":"jumpTo"}).appendTo(d.navPagination);d.navPaginationItems=d.navPagination.children()}d.enableDisableNavSlider()},destroySlider:function(){var b=this;"slider"===b.options.layoutMode&&(b.$obj.removeClass("cbp-mode-slider"),b.$ul.removeAttr("style"),b.$ul.off(".cbp"),a(c).off(".cbp"),b.options.auto&&b.stopSliderAuto())},nextSlider:function(a){var b=this;if(b.isEndSlider()){if(!b.isRewindNav())return;b.sliderActive=0}else b.options.scrollByPage?b.sliderActive=Math.min(b.sliderActive+b.cols,b.blocksOn.length-b.cols):b.sliderActive+=1;b.goToSlider()},prevSlider:function(a){var b=this;if(b.isStartSlider()){if(!b.isRewindNav())return;b.sliderActive=b.blocksOn.length-b.cols}else b.options.scrollByPage?b.sliderActive=Math.max(0,b.sliderActive-b.cols):b.sliderActive-=1;b.goToSlider()},jumpToSlider:function(a){var b=this,c=Math.min(a.index()*b.cols,b.blocksOn.length-b.cols);c!==b.sliderActive&&(b.sliderActive=c,b.goToSlider())},jumpDragToSlider:function(a){var b,c,d,e=this,f=a>0;e.options.scrollByPage?(b=e.cols*e.columnWidth,c=e.cols):(b=e.columnWidth,c=1),a=Math.abs(a),d=Math.floor(a/b)*c,a%b>20&&(d+=c),f?e.sliderActive=Math.min(e.sliderActive+d,e.blocksOn.length-e.cols):e.sliderActive=Math.max(0,e.sliderActive-d),e.goToSlider()},isStartSlider:function(){return 0===this.sliderActive},isEndSlider:function(){var a=this;return a.sliderActive+a.cols>a.blocksOn.length-1},goToSlider:function(){var a=this;a.enableDisableNavSlider(),a.updateSliderPosition()},startSliderAuto:function(){var a=this;return a.isDrag?void a.stopSliderAuto():void(a.timeout=setTimeout(function(){a.nextSlider(),a.startSliderAuto()},a.options.autoTimeout))},stopSliderAuto:function(){clearTimeout(this.timeout)},enableDisableNavSlider:function(){var a,b,c=this;c.isRewindNav()||(b=c.isStartSlider()?"addClass":"removeClass",c.navPrev[b]("cbp-nav-stop"),b=c.isEndSlider()?"addClass":"removeClass",c.navNext[b]("cbp-nav-stop")),c.options.showPagination&&(a=c.options.scrollByPage?Math.ceil(c.sliderActive/c.cols):c.isEndSlider()?c.navPaginationItems.length-1:Math.floor(c.sliderActive/c.cols),c.navPaginationItems.removeClass("cbp-nav-pagination-active").eq(a).addClass("cbp-nav-pagination-active")),c.customPagination&&(a=c.options.scrollByPage?Math.ceil(c.sliderActive/c.cols):c.isEndSlider()?c.customPaginationItems.length-1:Math.floor(c.sliderActive/c.cols),c.customPaginationItems.removeClass(c.customPaginationClass).eq(a).addClass(c.customPaginationClass))},isRewindNav:function(){var a=this;return!a.options.showNavigation||!(a.blocksOn.length<=a.cols)&&!!a.options.rewindNav},sliderItemsLength:function(){return this.blocksOn.length<=this.cols},sliderLayout:function(){var b=this;b.blocksOn.each(function(c,d){var e=a(d).data("cbp");e.leftNew=b.columnWidth*c,e.topNew=0,b.sliderFreeSpaces.push({topStart:e.heightAndGap})}),b.getFreeSpacesForSlider(),b.$ul.width(b.columnWidth*b.blocksOn.length-b.options.gapVertical)},getFreeSpacesForSlider:function(){var a=this;a.freeSpaces=a.sliderFreeSpaces.slice(a.sliderActive,a.sliderActive+a.cols),a.freeSpaces.sort(function(a,b){return a.topStart>b.topStart?1:a.topStart<b.topStart?-1:void 0})},updateSliderPosition:function(){var a=this,b=-a.sliderActive*a.columnWidth;e.private.modernBrowser?a.$ul[0].style[e.private.transform]="translate3d("+b+"px, 0px, 0)":a.$ul[0].style.left=b+"px",a.getFreeSpacesForSlider(),a.resizeMainContainer()},dragSlider:function(){function f(b){if(!q.sliderItemsLength()){if(u?p=b:b.preventDefault(),q.options.auto&&q.stopSliderAuto(),s)return void a(m).one("click.cbp",function(){return!1});m=a(b.target),k=j(b).x,l=0,n=-q.sliderActive*q.columnWidth,o=q.columnWidth*(q.blocksOn.length-q.cols),r.on(t.move,h),r.on(t.end,g),q.$obj.addClass("cbp-mode-slider-dragStart")}}function g(a){q.$obj.removeClass("cbp-mode-slider-dragStart"),s=!0,0!==l?(m.one("click.cbp",function(a){return!1}),requestAnimationFrame(function(){q.jumpDragToSlider(l),q.$ul.one(e.private.transitionend,i)})):i.call(q),r.off(t.move),r.off(t.end)}function h(a){l=k-j(a).x,(l>8||l<-8)&&a.preventDefault(),q.isDrag=!0;var b=n-l;l<0&&l<n?b=(n-l)/5:l>0&&n-l<-o&&(b=-o+(o+n-l)/5),e.private.modernBrowser?q.$ul[0].style[e.private.transform]="translate3d("+b+"px, 0px, 0)":q.$ul[0].style.left=b+"px"}function i(){if(s=!1,q.isDrag=!1,q.options.auto){if(q.mouseIsEntered)return;q.startSliderAuto()}}function j(a){return a.originalEvent!==d&&a.originalEvent.touches!==d&&(a=a.originalEvent.touches[0]),{x:a.pageX,y:a.pageY}}var k,l,m,n,o,p,q=this,r=a(c),s=!1,t={},u=!1;q.isDrag=!1,"ontouchstart"in b||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?(t={start:"touchstart.cbp",move:"touchmove.cbp",end:"touchend.cbp"},u=!0):t={start:"mousedown.cbp",move:"mousemove.cbp",end:"mouseup.cbp"},q.$ul.on(t.start,f)},sliderLayoutReset:function(){var a=this;a.freeSpaces=[],a.sliderFreeSpaces=[]}})}(jQuery,window,document),"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(){for(var a=0,b=["moz","webkit"],c=0;c<b.length&&!window.requestAnimationFrame;c++)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b,c){var d=(new Date).getTime(),e=Math.max(0,16-(d-a)),f=window.setTimeout(function(){b(d+e)},e);return a=d+e,f}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}(),function(a,b,c,d){"use strict";function e(a){var b=this;b.parent=a,a.filterLayout=b.filterLayout,a.registerEvent("computeBlocksFinish",function(b){a.blocksOn2On=a.blocksOnInitial.filter(b),a.blocksOn2Off=a.blocksOnInitial.not(b)})}var f=a.fn.cubeportfolio.constructor;e.prototype.filterLayout=function(){function b(){c.blocks.removeClass("cbp-item-on2off cbp-item-off2on cbp-item-on2on").each(function(b,c){var d=a(c).data("cbp");d.left=d.leftNew,d.top=d.topNew,c.style.left=d.left+"px",c.style.top=d.top+"px",c.style[f.private.transform]=""}),c.blocksOff.addClass("cbp-item-off"),c.$obj.removeClass("cbp-animation-"+c.options.animationType),c.filterFinish()}var c=this;c.$obj.addClass("cbp-animation-"+c.options.animationType),c.blocksOn2On.addClass("cbp-item-on2on").each(function(b,c){var d=a(c).data("cbp");c.style[f.private.transform]="translate3d("+(d.leftNew-d.left)+"px, "+(d.topNew-d.top)+"px, 0)"}),c.blocksOn2Off.addClass("cbp-item-on2off"),c.blocksOff2On=c.blocksOn.filter(".cbp-item-off").removeClass("cbp-item-off").addClass("cbp-item-off2on").each(function(b,c){var d=a(c).data("cbp");c.style.left=d.leftNew+"px",c.style.top=d.topNew+"px"}),c.blocksOn2Off.length?c.blocksOn2Off.last().data("cbp").wrapper.one(f.private.animationend,b):c.blocksOff2On.length?c.blocksOff2On.last().data("cbp").wrapper.one(f.private.animationend,b):b(),c.resizeMainContainer()},e.prototype.destroy=function(){var a=this.parent;a.$obj.removeClass("cbp-animation-"+a.options.animationType)},f.plugins.animationClassic=function(b){return!f.private.modernBrowser||a.inArray(b.options.animationType,["boxShadow","fadeOut","flipBottom","flipOut","quicksand","scaleSides","skew"])<0?null:new e(b)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(a){var b=this;b.parent=a,a.filterLayout=b.filterLayout}var f=a.fn.cubeportfolio.constructor;e.prototype.filterLayout=function(){function b(){c.wrapper[0].removeChild(d),"sequentially"===c.options.animationType&&c.blocksOn.each(function(b,c){a(c).data("cbp").wrapper[0].style[f.private.animationDelay]=""}),c.$obj.removeClass("cbp-animation-"+c.options.animationType),c.filterFinish()}var c=this,d=c.$ul[0].cloneNode(!0);d.setAttribute("class","cbp-wrapper-helper"),c.wrapper[0].insertBefore(d,c.$ul[0]),requestAnimationFrame(function(){c.$obj.addClass("cbp-animation-"+c.options.animationType),c.blocksOff.addClass("cbp-item-off"),c.blocksOn.removeClass("cbp-item-off").each(function(b,d){var e=a(d).data("cbp");e.left=e.leftNew,e.top=e.topNew,d.style.left=e.left+"px",d.style.top=e.top+"px","sequentially"===c.options.animationType&&(e.wrapper[0].style[f.private.animationDelay]=60*b+"ms")}),c.blocksOn.length?c.blocksOn.last().data("cbp").wrapper.one(f.private.animationend,b):c.blocksOnInitial.length?c.blocksOnInitial.last().data("cbp").wrapper.one(f.private.animationend,b):b(),c.resizeMainContainer()})},e.prototype.destroy=function(){var a=this.parent;a.$obj.removeClass("cbp-animation-"+a.options.animationType)},f.plugins.animationClone=function(b){return!f.private.modernBrowser||a.inArray(b.options.animationType,["fadeOutTop","slideLeft","sequentially"])<0?null:new e(b)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(a){var b=this;b.parent=a,a.filterLayout=b.filterLayout}var f=a.fn.cubeportfolio.constructor;e.prototype.filterLayout=function(){function b(){c.wrapper[0].removeChild(d[0]),c.$obj.removeClass("cbp-animation-"+c.options.animationType),c.blocks.each(function(b,c){a(c).data("cbp").wrapper[0].style[f.private.animationDelay]=""}),c.filterFinish()}var c=this,d=c.$ul.clone(!0,!0);d[0].setAttribute("class","cbp-wrapper-helper"),c.wrapper[0].insertBefore(d[0],c.$ul[0]);var e=d.find(".cbp-item").not(".cbp-item-off");c.sortBlocks(e,"top"),e.children(".cbp-item-wrapper").each(function(a,b){b.style[f.private.animationDelay]=50*a+"ms"}),requestAnimationFrame(function(){c.$obj.addClass("cbp-animation-"+c.options.animationType),c.blocksOff.addClass("cbp-item-off"),c.blocksOn.removeClass("cbp-item-off").each(function(b,c){var d=a(c).data("cbp");d.left=d.leftNew,d.top=d.topNew,c.style.left=d.left+"px",c.style.top=d.top+"px",d.wrapper[0].style[f.private.animationDelay]=50*b+"ms"});var d=c.blocksOn.length,g=e.length;0===d&&0===g?b():d<g?e.last().children(".cbp-item-wrapper").one(f.private.animationend,b):c.blocksOn.last().data("cbp").wrapper.one(f.private.animationend,b),c.resizeMainContainer()})},e.prototype.destroy=function(){var a=this.parent;a.$obj.removeClass("cbp-animation-"+a.options.animationType)},f.plugins.animationCloneDelay=function(b){
return!f.private.modernBrowser||a.inArray(b.options.animationType,["3dflip","flipOutDelay","foldLeft","frontRow","rotateRoom","rotateSides","scaleDown","slideDelay","unfold"])<0?null:new e(b)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(a){var b=this;b.parent=a,a.filterLayout=b.filterLayout}var f=a.fn.cubeportfolio.constructor;e.prototype.filterLayout=function(){function b(){c.wrapper[0].removeChild(d),c.$obj.removeClass("cbp-animation-"+c.options.animationType),c.filterFinish()}var c=this,d=c.$ul[0].cloneNode(!0);d.setAttribute("class","cbp-wrapper-helper"),c.wrapper[0].insertBefore(d,c.$ul[0]),requestAnimationFrame(function(){c.$obj.addClass("cbp-animation-"+c.options.animationType),c.blocksOff.addClass("cbp-item-off"),c.blocksOn.removeClass("cbp-item-off").each(function(b,c){var d=a(c).data("cbp");d.left=d.leftNew,d.top=d.topNew,c.style.left=d.left+"px",c.style.top=d.top+"px"}),c.blocksOn.length?c.$ul.one(f.private.animationend,b):c.blocksOnInitial.length?a(d).one(f.private.animationend,b):b(),c.resizeMainContainer()})},e.prototype.destroy=function(){var a=this.parent;a.$obj.removeClass("cbp-animation-"+a.options.animationType)},f.plugins.animationWrapper=function(b){return!f.private.modernBrowser||a.inArray(b.options.animationType,["bounceBottom","bounceLeft","bounceTop","moveLeft"])<0?null:new e(b)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(a){var b=this,c=a.options;b.parent=a,b.captionOn=c.caption,a.registerEvent("onMediaQueries",function(a){a&&a.hasOwnProperty("caption")?b.captionOn!==a.caption&&(b.destroy(),b.captionOn=a.caption,b.init()):b.captionOn!==c.caption&&(b.destroy(),b.captionOn=c.caption,b.init())}),b.init()}var f=a.fn.cubeportfolio.constructor;e.prototype.init=function(){var a=this;""!=a.captionOn&&("expand"===a.captionOn||f.private.modernBrowser||(a.parent.options.caption=a.captionOn="minimal"),a.parent.$obj.addClass("cbp-caption-active cbp-caption-"+a.captionOn))},e.prototype.destroy=function(){this.parent.$obj.removeClass("cbp-caption-active cbp-caption-"+this.captionOn)},f.plugins.caption=function(a){return new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,b.registerEvent("initFinish",function(){b.$obj.on("click.cbp",".cbp-caption-defaultWrap",function(c){if(c.preventDefault(),!b.isAnimating){b.isAnimating=!0;var d=a(this),e=d.next(),f=d.parent(),g={position:"relative",height:e.outerHeight(!0)},h={position:"relative",height:0};if(b.$obj.addClass("cbp-caption-expand-active"),f.hasClass("cbp-caption-expand-open")){var i=h;h=g,g=i,f.removeClass("cbp-caption-expand-open")}e.css(g),b.$obj.one("pluginResize.cbp",function(){b.isAnimating=!1,b.$obj.removeClass("cbp-caption-expand-active"),0===g.height&&(f.removeClass("cbp-caption-expand-open"),e.attr("style",""))}),b.layoutAndAdjustment(!0),e.css(h),requestAnimationFrame(function(){f.addClass("cbp-caption-expand-open"),e.css(g),b.triggerEvent("gridAdjust"),b.triggerEvent("resizeGrid")})}})},!0)}var f=a.fn.cubeportfolio.constructor;e.prototype.destroy=function(){this.parent.$obj.find(".cbp-caption-defaultWrap").off("click.cbp").parent().removeClass("cbp-caption-expand-active")},f.plugins.captionExpand=function(a){return"expand"!==a.options.caption?null:new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){b.registerEvent("initEndWrite",function(){if(!(b.width<=0)){var c=a.Deferred();b.pushQueue("delayFrame",c),b.blocksOn.each(function(a,c){c.style[f.private.animationDelay]=a*b.options.displayTypeSpeed+"ms"}),b.$obj.addClass("cbp-displayType-bottomToTop"),b.blocksOn.last().one(f.private.animationend,function(){b.$obj.removeClass("cbp-displayType-bottomToTop"),b.blocksOn.each(function(a,b){b.style[f.private.animationDelay]=""}),c.resolve()})}},!0)}var f=a.fn.cubeportfolio.constructor;f.plugins.displayBottomToTop=function(a){return f.private.modernBrowser&&"bottomToTop"===a.options.displayType&&0!==a.blocksOn.length?new e(a):null}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){b.registerEvent("initEndWrite",function(){if(!(b.width<=0)){var c=a.Deferred();b.pushQueue("delayFrame",c),b.obj.style[f.private.animationDuration]=b.options.displayTypeSpeed+"ms",b.$obj.addClass("cbp-displayType-fadeIn"),b.$obj.one(f.private.animationend,function(){b.$obj.removeClass("cbp-displayType-fadeIn"),b.obj.style[f.private.animationDuration]="",c.resolve()})}},!0)}var f=a.fn.cubeportfolio.constructor;f.plugins.displayFadeIn=function(a){return!f.private.modernBrowser||"lazyLoading"!==a.options.displayType&&"fadeIn"!==a.options.displayType||0===a.blocksOn.length?null:new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){b.registerEvent("initEndWrite",function(){if(!(b.width<=0)){var c=a.Deferred();b.pushQueue("delayFrame",c),b.obj.style[f.private.animationDuration]=b.options.displayTypeSpeed+"ms",b.$obj.addClass("cbp-displayType-fadeInToTop"),b.$obj.one(f.private.animationend,function(){b.$obj.removeClass("cbp-displayType-fadeInToTop"),b.obj.style[f.private.animationDuration]="",c.resolve()})}},!0)}var f=a.fn.cubeportfolio.constructor;f.plugins.displayFadeInToTop=function(a){return f.private.modernBrowser&&"fadeInToTop"===a.options.displayType&&0!==a.blocksOn.length?new e(a):null}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){b.registerEvent("initEndWrite",function(){if(!(b.width<=0)){var c=a.Deferred();b.pushQueue("delayFrame",c),b.blocksOn.each(function(a,c){c.style[f.private.animationDelay]=a*b.options.displayTypeSpeed+"ms"}),b.$obj.addClass("cbp-displayType-sequentially"),b.blocksOn.last().one(f.private.animationend,function(){b.$obj.removeClass("cbp-displayType-sequentially"),b.blocksOn.each(function(a,b){b.style[f.private.animationDelay]=""}),c.resolve()})}},!0)}var f=a.fn.cubeportfolio.constructor;f.plugins.displaySequentially=function(a){return f.private.modernBrowser&&"sequentially"===a.options.displayType&&0!==a.blocksOn.length?new e(a):null}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.filters=a(b.options.filters),c.filterData=[],b.registerEvent("afterPlugins",function(a){c.filterFromUrl(),c.registerFilter()}),b.registerEvent("resetFiltersVisual",function(){var d=b.options.defaultFilter.split("|");c.filters.each(function(b,c){var e=a(c).find(".cbp-filter-item");a.each(d,function(a,b){var c=e.filter('[data-filter="'+b+'"]');if(c.length)return c.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active"),d.splice(a,1),!1})}),b.defaultFilter=b.options.defaultFilter})}var f=a.fn.cubeportfolio.constructor;e.prototype.registerFilter=function(){var b=this,c=b.parent,d=c.defaultFilter.split("|");b.wrap=b.filters.find(".cbp-l-filters-dropdownWrap").on({"mouseover.cbp":function(){a(this).addClass("cbp-l-filters-dropdownWrap-open")},"mouseleave.cbp":function(){a(this).removeClass("cbp-l-filters-dropdownWrap-open")}}),b.filters.each(function(e,f){var g=a(f),h="*",i=g.find(".cbp-filter-item"),j={};g.hasClass("cbp-l-filters-dropdown")&&(j.wrap=g.find(".cbp-l-filters-dropdownWrap"),j.header=g.find(".cbp-l-filters-dropdownHeader"),j.headerText=j.header.text()),c.$obj.cubeportfolio("showCounter",i),a.each(d,function(a,b){if(i.filter('[data-filter="'+b+'"]').length)return h=b,d.splice(a,1),!1}),a.data(f,"filterName",h),b.filterData.push(f),b.filtersCallback(j,i.filter('[data-filter="'+h+'"]')),i.on("click.cbp",function(){var d=a(this);if(!d.hasClass("cbp-filter-item-active")&&!c.isAnimating){b.filtersCallback(j,d),a.data(f,"filterName",d.data("filter"));var e=a.map(b.filterData,function(b,c){var d=a.data(b,"filterName");return""!==d&&"*"!==d?d:null});e.length<1&&(e=["*"]);var g=e.join("|");c.defaultFilter!==g&&c.$obj.cubeportfolio("filter",g)}})})},e.prototype.filtersCallback=function(b,c){a.isEmptyObject(b)||(b.wrap.trigger("mouseleave.cbp"),b.headerText?b.headerText="":b.header.html(c.html())),c.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active")},e.prototype.filterFromUrl=function(){var a=/#cbpf=(.*?)([#\?&]|$)/gi.exec(location.href);null!==a&&(this.parent.defaultFilter=decodeURIComponent(a[1]))},e.prototype.destroy=function(){var a=this;a.filters.find(".cbp-filter-item").off(".cbp"),a.wrap.off(".cbp")},f.plugins.filters=function(a){return""===a.options.filters?null:new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=b.options.gapVertical,d=b.options.gapHorizontal;b.registerEvent("onMediaQueries",function(e){b.options.gapVertical=e&&e.hasOwnProperty("gapVertical")?e.gapVertical:c,b.options.gapHorizontal=e&&e.hasOwnProperty("gapHorizontal")?e.gapHorizontal:d,b.blocks.each(function(c,d){var e=a(d).data("cbp");e.widthAndGap=e.width+b.options.gapVertical,e.heightAndGap=e.height+b.options.gapHorizontal})})}var f=a.fn.cubeportfolio.constructor;f.plugins.changeGapOnMediaQueries=function(a){return new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.options=a.extend({},g,c.parent.options.plugins.inlineSlider),c.runInit(),b.registerEvent("addItemsToDOM",function(){c.runInit()})}function f(a){var b=this;a.hasClass("cbp-slider-inline-ready")||(a.addClass("cbp-slider-inline-ready"),b.items=a.find(".cbp-slider-wrapper").children(".cbp-slider-item"),b.active=b.items.filter(".cbp-slider-item--active").index(),b.total=b.items.length-1,b.updateLeft(),a.find(".cbp-slider-next").on("click.cbp",function(a){a.preventDefault(),b.active<b.total?(b.active++,b.updateLeft()):b.active===b.total&&(b.active=0,b.updateLeft())}),a.find(".cbp-slider-prev").on("click.cbp",function(a){a.preventDefault(),b.active>0?(b.active--,b.updateLeft()):0===b.active&&(b.active=b.total,b.updateLeft())}))}var g={},h=a.fn.cubeportfolio.constructor;f.prototype.updateLeft=function(){var a=this;a.items.removeClass("cbp-slider-item--active"),a.items.eq(a.active).addClass("cbp-slider-item--active"),a.items.each(function(b,c){c.style.left=b-a.active+"00%"})},e.prototype.runInit=function(){var b=this;b.parent.$obj.find(".cbp-slider-inline").not(".cbp-slider-inline-ready").each(function(c,d){var e=a(d),g=e.find(".cbp-slider-item--active").find("img")[0];g.hasAttribute("data-cbp-src")?b.parent.$obj.on("lazyLoad.cbp",function(a,b){b.src===g.src&&new f(e)}):new f(e)})},e.prototype.destroy=function(){var b=this;b.parent.$obj.find(".cbp-slider-next").off("click.cbp"),b.parent.$obj.find(".cbp-slider-prev").off("click.cbp"),b.parent.$obj.off("lazyLoad.cbp"),b.parent.$obj.find(".cbp-slider-inline").each(function(b,c){var d=a(c);d.removeClass("cbp-slider-inline-ready");var e=d.find(".cbp-slider-item");e.removeClass("cbp-slider-item--active"),e.removeAttr("style"),e.eq(0).addClass("cbp-slider-item--active")})},h.plugins.inlineSlider=function(a){return new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.options=a.extend({},f,c.parent.options.plugins.lazyLoad),b.registerEvent("initFinish",function(){c.loadImages(),b.registerEvent("resizeMainContainer",function(){c.loadImages()}),b.registerEvent("filterFinish",function(){c.loadImages()}),g.private.lazyLoadScroll.initEvent({instance:c,fn:c.loadImages})},!0)}var f={loadingClass:"cbp-lazyload",threshold:400},g=a.fn.cubeportfolio.constructor,h=a(b);g.private.lazyLoadScroll=new g.private.publicEvents("scroll.cbplazyLoad",50),e.prototype.loadImages=function(){var b=this,c=b.parent.$obj.find("img").filter("[data-cbp-src]");0!==c.length&&(b.screenHeight=h.height(),c.each(function(c,d){var e=a(d.parentNode);if(!b.isElementInScreen(d))return void e.addClass(b.options.loadingClass);var f=d.getAttribute("data-cbp-src");null===b.parent.checkSrc(a("<img>").attr("src",f))?(b.removeLazyLoad(d,f),e.removeClass(b.options.loadingClass)):(e.addClass(b.options.loadingClass),a("<img>").on("load.cbp error.cbp",function(){b.removeLazyLoad(d,f,e)}).attr("src",f))}))},e.prototype.removeLazyLoad=function(b,c,d){var e=this;b.src=c,b.removeAttribute("data-cbp-src"),e.parent.removeAttrImage(b),e.parent.$obj.trigger("lazyLoad.cbp",b),d&&(g.private.modernBrowser?a(b).one(g.private.transitionend,function(){d.removeClass(e.options.loadingClass)}):d.removeClass(e.options.loadingClass))},e.prototype.isElementInScreen=function(a){var b=this,c=a.getBoundingClientRect(),d=c.bottom+b.options.threshold,e=b.screenHeight+d-(c.top-b.options.threshold);return d>=0&&d<=e},e.prototype.destroy=function(){g.private.lazyLoadScroll.destroyEvent(this)},g.plugins.lazyLoad=function(a){return new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.options=a.extend({},f,c.parent.options.plugins.loadMore),c.loadMore=a(c.options.element).find(".cbp-l-loadMore-link"),0!==c.loadMore.length&&(c.loadItems=c.loadMore.find(".cbp-l-loadMore-loadItems"),"0"===c.loadItems.text()&&c.loadMore.addClass("cbp-l-loadMore-stop"),b.registerEvent("filterStart",function(a){c.populateItems().then(function(){var b=c.items.filter(a).length;b>0?(c.loadMore.removeClass("cbp-l-loadMore-stop"),c.loadItems.html(b)):c.loadMore.addClass("cbp-l-loadMore-stop")})}),c[c.options.action]())}var f={element:"",action:"click",loadItems:3},g=a.fn.cubeportfolio.constructor;e.prototype.populateItems=function(){var b=this;return b.items?a.Deferred().resolve():(b.items=a(),a.ajax({url:b.loadMore.attr("href"),type:"GET",dataType:"HTML"}).done(function(c){var d=a.map(c.split(/\r?\n/),function(b,c){return a.trim(b)}).join("");0!==d.length&&a.each(a.parseHTML(d),function(c,d){a(d).hasClass("cbp-item")?b.items=b.items.add(d):a.each(d.children,function(c,d){a(d).hasClass("cbp-item")&&(b.items=b.items.add(d))})})}).fail(function(){b.items=null,b.loadMore.removeClass("cbp-l-loadMore-loading")}))},e.prototype.populateInsertItems=function(b){var c=this,d=[],e=c.parent.defaultFilter,f=0;return c.items.each(function(b,g){return f!==c.options.loadItems&&void(e&&"*"!==e?a(g).filter(e).length&&(d.push(g),c.items[b]=null,f++):(d.push(g),c.items[b]=null,f++))}),c.items=c.items.map(function(a,b){return b}),0===d.length?void c.loadMore.removeClass("cbp-l-loadMore-loading").addClass("cbp-l-loadMore-stop"):void c.parent.$obj.cubeportfolio("append",d,b)},e.prototype.click=function(){function a(){b.loadMore.removeClass("cbp-l-loadMore-loading");var a,c=b.parent.defaultFilter;a=c&&"*"!==c?b.items.filter(c).length:b.items.length,0===a?b.loadMore.addClass("cbp-l-loadMore-stop"):b.loadItems.html(a)}var b=this;b.loadMore.on("click.cbp",function(c){c.preventDefault(),b.parent.isAnimating||b.loadMore.hasClass("cbp-l-loadMore-stop")||(b.loadMore.addClass("cbp-l-loadMore-loading"),b.populateItems().then(function(){b.populateInsertItems(a)}))})},e.prototype.auto=function(){function c(){if(!h&&!e.loadMore.hasClass("cbp-l-loadMore-stop")){var a=e.loadMore.offset().top-200,b=f.scrollTop()+f.height();a>b||(h=!0,e.populateItems().then(function(){e.populateInsertItems(d)}).fail(function(){h=!1}))}}function d(){var a,b=e.parent.defaultFilter;a=b&&"*"!==b?e.items.filter(b).length:e.items.length,0===a?e.loadMore.removeClass("cbp-l-loadMore-loading").addClass("cbp-l-loadMore-stop"):(e.loadItems.html(a),f.trigger("scroll.loadMore")),h=!1,0===e.items.length&&(g.private.loadMoreScroll.destroyEvent(e),e.parent.$obj.off("filterComplete.cbp"))}var e=this,f=a(b),h=!1;g.private.loadMoreScroll=new g.private.publicEvents("scroll.loadMore",100),e.parent.$obj.one("initComplete.cbp",function(){e.loadMore.addClass("cbp-l-loadMore-loading").on("click.cbp",function(a){a.preventDefault()}),g.private.loadMoreScroll.initEvent({instance:e,fn:function(){e.parent.isAnimating||c()}}),e.parent.$obj.on("filterComplete.cbp",function(){c()}),c()})},e.prototype.destroy=function(){this.loadMore.off(".cbp"),g.private.loadMoreScroll&&g.private.loadMoreScroll.destroyEvent(this)},g.plugins.loadMore=function(a){var b=a.options.plugins;return a.options.loadMore&&(b.loadMore||(b.loadMore={}),b.loadMore.element=a.options.loadMore),a.options.loadMoreAction&&(b.loadMore||(b.loadMore={}),b.loadMore.action=a.options.loadMoreAction),b.loadMore&&b.loadMore.selector!==d&&(b.loadMore.element=b.loadMore.selector,delete b.loadMore.selector),b.loadMore&&b.loadMore.element?new e(a):null}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(a){var b=this;b.parent=a,a.options.lightboxShowCounter===!1&&(a.options.lightboxCounter=""),a.options.singlePageShowCounter===!1&&(a.options.singlePageCounter=""),a.registerEvent("initStartRead",function(){b.run()},!0)}var f=a.fn.cubeportfolio.constructor,g={delay:0},h={init:function(b,d){var e,f=this;if(f.cubeportfolio=b,f.type=d,f.isOpen=!1,f.options=f.cubeportfolio.options,"lightbox"===d&&(f.cubeportfolio.registerEvent("resizeWindow",function(){f.resizeImage()}),f.localOptions=a.extend({},g,f.cubeportfolio.options.plugins.lightbox)),"singlePageInline"===d){if(f.height=0,f.createMarkupSinglePageInline(),f.cubeportfolio.registerEvent("resizeGrid",function(){f.isOpen&&f.close()}),f.options.singlePageInlineDeeplinking){f.url=location.href,"#"===f.url.slice(-1)&&(f.url=f.url.slice(0,-1));var h=f.url.split("#cbpi="),i=h.shift();a.each(h,function(b,c){if(f.cubeportfolio.blocksOn.each(function(b,d){var g=a(d).find(f.options.singlePageInlineDelegate+'[href="'+c+'"]');if(g.length)return e=g,!1}),e)return!1}),e&&f.cubeportfolio.registerEvent("initFinish",function(){f.openSinglePageInline(f.cubeportfolio.blocksOn,e[0])},!0)}return void(f.localOptions=a.extend({},g,f.cubeportfolio.options.plugins.singlePageInline))}if(f.createMarkup(),"singlePage"===d){if(f.cubeportfolio.registerEvent("resizeWindow",function(){if(f.options.singlePageStickyNavigation){var a=f.contentWrap[0].clientWidth;a>0&&(f.navigationWrap.width(a),f.navigation.width(a))}}),f.options.singlePageDeeplinking){f.url=location.href,"#"===f.url.slice(-1)&&(f.url=f.url.slice(0,-1));var h=f.url.split("#cbp="),i=h.shift();if(a.each(h,function(b,c){if(f.cubeportfolio.blocksOn.each(function(b,d){var g=a(d).find(f.options.singlePageDelegate+'[href="'+c+'"]');if(g.length)return e=g,!1}),e)return!1}),e){f.url=i;var j=e,k=j.attr("data-cbp-singlePage"),l=[];k?l=j.closest(a(".cbp-item")).find('[data-cbp-singlePage="'+k+'"]'):f.cubeportfolio.blocksOn.each(function(b,c){var d=a(c);d.not(".cbp-item-off")&&d.find(f.options.singlePageDelegate).each(function(b,c){a(c).attr("data-cbp-singlePage")||l.push(c)})}),f.openSinglePage(l,e[0])}else if(h.length){var m=c.createElement("a");m.setAttribute("href",h[0]),f.openSinglePage([m],m)}}f.localOptions=a.extend({},g,f.cubeportfolio.options.plugins.singlePage)}},createMarkup:function(){var b=this,e="";"singlePage"===b.type&&"left"!==b.options.singlePageAnimation&&(e=" cbp-popup-singlePage-"+b.options.singlePageAnimation),b.wrap=a("<div/>",{class:"cbp-popup-wrap cbp-popup-"+b.type+e,"data-action":"lightbox"===b.type?"close":""}).on("click.cbp",function(c){if(!b.stopEvents){var d=a(c.target).attr("data-action");b[d]&&(b[d](),c.preventDefault())}}),"singlePage"===b.type?(b.contentWrap=a("<div/>",{class:"cbp-popup-content-wrap"}).appendTo(b.wrap),"ios"===f.private.browser&&b.contentWrap.css("overflow","auto"),b.content=a("<div/>",{class:"cbp-popup-content"}).appendTo(b.contentWrap)):b.content=a("<div/>",{class:"cbp-popup-content"}).appendTo(b.wrap),a("<div/>",{class:"cbp-popup-loadingBox"}).appendTo(b.wrap),"ie8"===f.private.browser&&(b.bg=a("<div/>",{class:"cbp-popup-ie8bg","data-action":"lightbox"===b.type?"close":""}).appendTo(b.wrap)),"singlePage"===b.type&&b.options.singlePageStickyNavigation===!1?b.navigationWrap=a("<div/>",{class:"cbp-popup-navigation-wrap"}).appendTo(b.contentWrap):b.navigationWrap=a("<div/>",{class:"cbp-popup-navigation-wrap"}).appendTo(b.wrap),b.navigation=a("<div/>",{class:"cbp-popup-navigation"}).appendTo(b.navigationWrap),b.closeButton=a("<div/>",{class:"cbp-popup-close",title:"Close (Esc arrow key)","data-action":"close"}).appendTo(b.navigation),b.nextButton=a("<div/>",{class:"cbp-popup-next",title:"Next (Right arrow key)","data-action":"next"}).appendTo(b.navigation),b.prevButton=a("<div/>",{class:"cbp-popup-prev",title:"Previous (Left arrow key)","data-action":"prev"}).appendTo(b.navigation),"singlePage"===b.type&&(b.options.singlePageCounter&&(b.counter=a(b.options.singlePageCounter).appendTo(b.navigation),b.counter.text("")),b.content.on("click.cbp",b.options.singlePageDelegate,function(a){a.preventDefault();var e,f,g=b.dataArray.length,h=this.getAttribute("href");for(e=0;e<g;e++)if(b.dataArray[e].url===h){f=e;break}if(f===d){var i=c.createElement("a");i.setAttribute("href",h),b.dataArray=[{url:h,element:i}],b.counterTotal=1,b.nextButton.hide(),b.prevButton.hide(),b.singlePageJumpTo(0)}else b.singlePageJumpTo(f-b.current)}),b.contentWrap.on("mousewheel.cbp DOMMouseScroll.cbp",function(a){a.stopImmediatePropagation()})),a(c).on("keydown.cbp",function(a){b.isOpen&&(b.stopEvents||(i&&a.stopImmediatePropagation(),37===a.keyCode?b.prev():39===a.keyCode?b.next():27===a.keyCode&&b.close()))})},createMarkupSinglePageInline:function(){var b=this;b.wrap=a("<div/>",{class:"cbp-popup-singlePageInline"}).on("click.cbp",function(c){if(!b.stopEvents){var d=a(c.target).attr("data-action");d&&b[d]&&(b[d](),c.preventDefault())}}),b.content=a("<div/>",{class:"cbp-popup-content"}).appendTo(b.wrap),b.navigation=a("<div/>",{class:"cbp-popup-navigation"}).appendTo(b.wrap),b.closeButton=a("<div/>",{class:"cbp-popup-close",title:"Close (Esc arrow key)","data-action":"close"}).appendTo(b.navigation)},destroy:function(){var b=this,d=a("body");a(c).off("keydown.cbp"),d.off("click.cbp",b.options.lightboxDelegate),d.off("click.cbp",b.options.singlePageDelegate),b.content.off("click.cbp",b.options.singlePageDelegate),b.cubeportfolio.$obj.off("click.cbp",b.options.singlePageInlineDelegate),b.cubeportfolio.$obj.off("click.cbp",b.options.lightboxDelegate),b.cubeportfolio.$obj.off("click.cbp",b.options.singlePageDelegate),b.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"),b.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"),b.wrap.remove()},openLightbox:function(d,e){var f,g,h=this,j=0,k=[];if(!h.isOpen){if(i=!0,h.isOpen=!0,h.stopEvents=!1,h.dataArray=[],h.current=null,f=e.getAttribute("href"),null===f)throw new Error("HEI! Your clicked element doesn't have a href attribute.");a.each(d,function(b,c){var d,e=c.getAttribute("href"),g=e,i="isImage";if(a.inArray(e,k)===-1){if(f===e)h.current=j;else if(!h.options.lightboxGallery)return;if(/youtu\.?be/i.test(e)){var l=e.lastIndexOf("v=")+2;1===l&&(l=e.lastIndexOf("/")+1),d=e.substring(l),/autoplay=/i.test(d)||(d+="&autoplay=1"),d=d.replace(/\?|&/,"?"),g="//www.youtube.com/embed/"+d,i="isYoutube"}else/vimeo\.com/i.test(e)?(d=e.substring(e.lastIndexOf("/")+1),/autoplay=/i.test(d)||(d+="&autoplay=1"),d=d.replace(/\?|&/,"?"),g="//player.vimeo.com/video/"+d,i="isVimeo"):/www\.ted\.com/i.test(e)?(g="http://embed.ted.com/talks/"+e.substring(e.lastIndexOf("/")+1)+".html",i="isTed"):/soundcloud\.com/i.test(e)?(g=e,i="isSoundCloud"):/(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(e)?(g=e.indexOf("|")!==-1?e.split("|"):e.split("%7C"),i="isSelfHostedVideo"):/\.mp3$/i.test(e)&&(g=e,i="isSelfHostedAudio");h.dataArray.push({src:g,title:c.getAttribute(h.options.lightboxTitleSrc),type:i}),j++}k.push(e)}),h.counterTotal=h.dataArray.length,1===h.counterTotal?(h.nextButton.hide(),h.prevButton.hide(),h.dataActionImg=""):(h.nextButton.show(),h.prevButton.show(),h.dataActionImg='data-action="next"'),h.wrap.appendTo(c.body),h.scrollTop=a(b).scrollTop(),h.originalStyle=a("html").attr("style"),a("html").css({overflow:"hidden",marginRight:b.innerWidth-a(c).width()}),h.wrap.addClass("cbp-popup-transitionend"),h.wrap.show(),g=h.dataArray[h.current],h[g.type](g)}},openSinglePage:function(d,e){var g,h=this,i=0,j=[];if(!h.isOpen){if(h.cubeportfolio.singlePageInline&&h.cubeportfolio.singlePageInline.isOpen&&h.cubeportfolio.singlePageInline.close(),h.isOpen=!0,h.stopEvents=!1,h.dataArray=[],h.current=null,g=e.getAttribute("href"),null===g)throw new Error("HEI! Your clicked element doesn't have a href attribute.");if(a.each(d,function(b,c){var d=c.getAttribute("href");a.inArray(d,j)===-1&&(g===d&&(h.current=i),h.dataArray.push({url:d,element:c}),i++),j.push(d)}),h.counterTotal=h.dataArray.length,1===h.counterTotal?(h.nextButton.hide(),h.prevButton.hide()):(h.nextButton.show(),h.prevButton.show()),h.wrap.appendTo(c.body),h.scrollTop=a(b).scrollTop(),h.contentWrap.scrollTop(0),h.wrap.show(),h.finishOpen=2,h.navigationMobile=a(),h.wrap.one(f.private.transitionend,function(){a("html").css({overflow:"hidden",marginRight:b.innerWidth-a(c).width()}),h.wrap.addClass("cbp-popup-transitionend"),h.options.singlePageStickyNavigation&&(h.wrap.addClass("cbp-popup-singlePage-sticky"),h.navigationWrap.width(h.contentWrap[0].clientWidth)),h.finishOpen--,h.finishOpen<=0&&h.updateSinglePageIsOpen.call(h)}),"ie8"!==f.private.browser&&"ie9"!==f.private.browser||(a("html").css({overflow:"hidden",marginRight:b.innerWidth-a(c).width()}),h.wrap.addClass("cbp-popup-transitionend"),h.options.singlePageStickyNavigation&&(h.navigationWrap.width(h.contentWrap[0].clientWidth),setTimeout(function(){h.wrap.addClass("cbp-popup-singlePage-sticky")},1e3)),h.finishOpen--),h.wrap.addClass("cbp-popup-loading"),h.wrap.offset(),h.wrap.addClass("cbp-popup-singlePage-open"),h.options.singlePageDeeplinking&&(h.url=h.url.split("#cbp=")[0],location.href=h.url+"#cbp="+h.dataArray[h.current].url),a.isFunction(h.options.singlePageCallback)&&h.options.singlePageCallback.call(h,h.dataArray[h.current].url,h.dataArray[h.current].element),"ios"===f.private.browser){var k=h.contentWrap[0];k.addEventListener("touchstart",function(){var a=k.scrollTop,b=k.scrollHeight,c=a+k.offsetHeight;0===a?k.scrollTop=1:c===b&&(k.scrollTop=a-1)})}}},openSinglePageInline:function(c,d,e){var f,g,h,i,j=this;if(e=e||!1,j.fromOpen=e,j.storeBlocks=c,j.storeCurrentBlock=d,j.isOpen)return g=j.cubeportfolio.blocksOn.index(a(d).closest(".cbp-item")),void(j.dataArray[j.current].url!==d.getAttribute("href")||j.current!==g?j.cubeportfolio.singlePageInline.close("open",{blocks:c,currentBlock:d,fromOpen:!0}):j.close());if(j.isOpen=!0,j.stopEvents=!1,j.dataArray=[],j.current=null,f=d.getAttribute("href"),null===f)throw new Error("HEI! Your clicked element doesn't have a href attribute.");if(h=a(d).closest(".cbp-item")[0],c.each(function(a,b){h===b&&(j.current=a)}),j.dataArray[j.current]={url:f,element:d},i=a(j.dataArray[j.current].element).parents(".cbp-item").addClass("cbp-singlePageInline-active"),j.counterTotal=c.length,j.wrap.insertBefore(j.cubeportfolio.wrapper),j.topDifference=0,"top"===j.options.singlePageInlinePosition)j.blocksToMove=c,j.top=0;else if("bottom"===j.options.singlePageInlinePosition)j.blocksToMove=a(),j.top=j.cubeportfolio.height;else if("above"===j.options.singlePageInlinePosition){var k=a(c[j.current]),l=k.data("cbp").top,m=l+k.height();j.top=l,j.blocksToMove=a(),c.each(function(b,c){var d=a(c),e=d.data("cbp").top,f=e+d.height();f<=l||(e>=l&&(j.blocksToMove=j.blocksToMove.add(c)),e<l&&f>l&&(j.top=f+j.options.gapHorizontal,f-l>j.topDifference&&(j.topDifference=f-l+j.options.gapHorizontal)))}),j.top=Math.max(j.top-j.options.gapHorizontal,0)}else{var k=a(c[j.current]),l=k.data("cbp").top,m=l+k.height();j.top=m,j.blocksToMove=a(),c.each(function(b,c){var d=a(c),e=d.height(),f=d.data("cbp").top,g=f+e;if(!(g<=m))return f>=m-e/2?void(j.blocksToMove=j.blocksToMove.add(c)):void(g>m&&f<m&&(g>j.top&&(j.top=g),g-m>j.topDifference&&(j.topDifference=g-m)))})}if(j.wrap[0].style.height=j.wrap.outerHeight(!0)+"px",j.deferredInline=a.Deferred(),j.options.singlePageInlineInFocus){j.scrollTop=a(b).scrollTop();var n=j.cubeportfolio.$obj.offset().top+j.top-100;j.scrollTop!==n?a("html,body").animate({scrollTop:n},350).promise().then(function(){j.resizeSinglePageInline(),j.deferredInline.resolve()}):(j.resizeSinglePageInline(),j.deferredInline.resolve())}else j.resizeSinglePageInline(),j.deferredInline.resolve();j.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-open"),j.wrap.css({top:j.top}),j.options.singlePageInlineDeeplinking&&(j.url=j.url.split("#cbpi=")[0],location.href=j.url+"#cbpi="+j.dataArray[j.current].url),a.isFunction(j.options.singlePageInlineCallback)&&j.options.singlePageInlineCallback.call(j,j.dataArray[j.current].url,j.dataArray[j.current].element)},resizeSinglePageInline:function(){var a=this;a.height=0===a.top||a.top===a.cubeportfolio.height?a.wrap.outerHeight(!0):a.wrap.outerHeight(!0)-a.options.gapHorizontal,a.height+=a.topDifference,a.storeBlocks.each(function(a,b){f.private.modernBrowser?b.style[f.private.transform]="":b.style.marginTop=""}),a.blocksToMove.each(function(b,c){f.private.modernBrowser?c.style[f.private.transform]="translate3d(0px, "+a.height+"px, 0)":c.style.marginTop=a.height+"px"}),a.cubeportfolio.obj.style.height=a.cubeportfolio.height+a.height+"px"},revertResizeSinglePageInline:function(){var b=this;b.deferredInline=a.Deferred(),b.storeBlocks.each(function(a,b){f.private.modernBrowser?b.style[f.private.transform]="":b.style.marginTop=""}),b.cubeportfolio.obj.style.height=b.cubeportfolio.height+"px"},appendScriptsToWrap:function(a){var b=this,d=0,e=function(f){var g=c.createElement("script"),h=f.src;g.type="text/javascript",g.readyState?g.onreadystatechange=function(){"loaded"!=g.readyState&&"complete"!=g.readyState||(g.onreadystatechange=null,d++,a[d]&&e(a[d]))}:g.onload=function(){d++,a[d]&&e(a[d])},h?g.src=h:g.text=f.text,b.content[0].appendChild(g)};e(a[0])},updateSinglePage:function(b,c,d){var e,f=this;f.content.addClass("cbp-popup-content").removeClass("cbp-popup-content-basic"),d===!1&&f.content.removeClass("cbp-popup-content").addClass("cbp-popup-content-basic"),f.counter&&(e=a(f.getCounterMarkup(f.options.singlePageCounter,f.current+1,f.counterTotal)),f.counter.text(e.text())),f.fromAJAX={html:b,scripts:c},f.finishOpen--,f.finishOpen<=0&&f.updateSinglePageIsOpen.call(f)},updateSinglePageIsOpen:function(){var a,b=this;b.wrap.addClass("cbp-popup-ready"),b.wrap.removeClass("cbp-popup-loading"),b.content.html(b.fromAJAX.html),b.fromAJAX.scripts&&b.appendScriptsToWrap(b.fromAJAX.scripts),b.fromAJAX={},b.cubeportfolio.$obj.trigger("updateSinglePageStart.cbp"),a=b.content.find(".cbp-slider"),a.length?(a.find(".cbp-slider-item").addClass("cbp-item"),b.slider=a.cubeportfolio({layoutMode:"slider",mediaQueries:[{width:1,cols:1}],gapHorizontal:0,gapVertical:0,caption:"",coverRatio:""})):b.slider=null,b.checkForSocialLinks(b.content),b.cubeportfolio.$obj.trigger("updateSinglePageComplete.cbp")},checkForSocialLinks:function(a){var b=this;b.createFacebookShare(a.find(".cbp-social-fb")),b.createTwitterShare(a.find(".cbp-social-twitter")),b.createGooglePlusShare(a.find(".cbp-social-googleplus")),b.createPinterestShare(a.find(".cbp-social-pinterest"))},createFacebookShare:function(a){a.length&&!a.attr("onclick")&&a.attr("onclick","window.open('http://www.facebook.com/sharer.php?u="+encodeURIComponent(b.location.href)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;")},createTwitterShare:function(a){a.length&&!a.attr("onclick")&&a.attr("onclick","window.open('https://twitter.com/intent/tweet?source="+encodeURIComponent(b.location.href)+"&text="+encodeURIComponent(c.title)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=300'); return false;")},createGooglePlusShare:function(a){a.length&&!a.attr("onclick")&&a.attr("onclick","window.open('https://plus.google.com/share?url="+encodeURIComponent(b.location.href)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=450'); return false;")},createPinterestShare:function(a){if(a.length&&!a.attr("onclick")){var c="",d=this.content.find("img")[0];d&&(c=d.src),a.attr("onclick","window.open('http://pinterest.com/pin/create/button/?url="+encodeURIComponent(b.location.href)+"&media="+c+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;")}},updateSinglePageInline:function(a,b){var c=this;c.content.html(a),b&&c.appendScriptsToWrap(b),
c.cubeportfolio.$obj.trigger("updateSinglePageInlineStart.cbp"),0!==c.localOptions.delay?setTimeout(function(){c.singlePageInlineIsOpen.call(c)},c.localOptions.delay):c.singlePageInlineIsOpen.call(c)},singlePageInlineIsOpen:function(){function a(){b.wrap.addClass("cbp-popup-singlePageInline-ready"),b.wrap[0].style.height="",b.resizeSinglePageInline(),b.cubeportfolio.$obj.trigger("updateSinglePageInlineComplete.cbp")}var b=this;b.cubeportfolio.loadImages(b.wrap,function(){var c=b.content.find(".cbp-slider");c.length?(c.find(".cbp-slider-item").addClass("cbp-item"),c.one("initComplete.cbp",function(){b.deferredInline.done(a)}),c.on("pluginResize.cbp",function(){b.deferredInline.done(a)}),b.slider=c.cubeportfolio({layoutMode:"slider",displayType:"default",mediaQueries:[{width:1,cols:1}],gapHorizontal:0,gapVertical:0,caption:"",coverRatio:""})):(b.slider=null,b.deferredInline.done(a)),b.checkForSocialLinks(b.content)})},isImage:function(b){var c=this;new Image;c.tooggleLoading(!0),c.cubeportfolio.loadImages(a('<div><img src="'+b.src+'"></div>'),function(){c.updateImagesMarkup(b.src,b.title,c.getCounterMarkup(c.options.lightboxCounter,c.current+1,c.counterTotal)),c.tooggleLoading(!1)})},isVimeo:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isYoutube:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isTed:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isSoundCloud:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isSelfHostedVideo:function(a){var b=this;b.updateSelfHostedVideo(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isSelfHostedAudio:function(a){var b=this;b.updateSelfHostedAudio(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},getCounterMarkup:function(a,b,c){if(!a.length)return"";var d={current:b,total:c};return a.replace(/\{\{current}}|\{\{total}}/gi,function(a){return d[a.slice(2,-2)]})},updateSelfHostedVideo:function(a,b,c){var d,e=this;e.wrap.addClass("cbp-popup-lightbox-isIframe");var f='<div class="cbp-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';for(d=0;d<a.length;d++)/(\.mp4)/i.test(a[d])?f+='<source src="'+a[d]+'" type="video/mp4">':/(\.ogg)|(\.ogv)/i.test(a[d])?f+='<source src="'+a[d]+'" type="video/ogg">':/(\.webm)/i.test(a[d])&&(f+='<source src="'+a[d]+'" type="video/webm">');f+='Your browser does not support the video tag.</video><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>",e.content.html(f),e.wrap.addClass("cbp-popup-ready"),e.preloadNearbyImages()},updateSelfHostedAudio:function(a,b,c){var d=this;d.wrap.addClass("cbp-popup-lightbox-isIframe");var e='<div class="cbp-popup-lightbox-iframe"><div class="cbp-misc-video"><audio controls="controls" height="auto" style="width: 75%"><source src="'+a+'" type="audio/mpeg">Your browser does not support the audio tag.</audio></div><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>";d.content.html(e),d.wrap.addClass("cbp-popup-ready"),d.preloadNearbyImages()},updateVideoMarkup:function(a,b,c){var d=this;d.wrap.addClass("cbp-popup-lightbox-isIframe");var e='<div class="cbp-popup-lightbox-iframe"><iframe src="'+a+'" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>";d.content.html(e),d.wrap.addClass("cbp-popup-ready"),d.preloadNearbyImages()},updateImagesMarkup:function(a,b,c){var d=this;d.wrap.removeClass("cbp-popup-lightbox-isIframe");var e='<div class="cbp-popup-lightbox-figure"><img src="'+a+'" class="cbp-popup-lightbox-img" '+d.dataActionImg+' /><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>";d.content.html(e),d.wrap.addClass("cbp-popup-ready"),d.resizeImage(),d.preloadNearbyImages()},next:function(){var a=this;a[a.type+"JumpTo"](1)},prev:function(){var a=this;a[a.type+"JumpTo"](-1)},lightboxJumpTo:function(a){var b,c=this;c.current=c.getIndex(c.current+a),b=c.dataArray[c.current],c[b.type](b)},singlePageJumpTo:function(b){var c=this;c.current=c.getIndex(c.current+b),a.isFunction(c.options.singlePageCallback)&&(c.resetWrap(),c.contentWrap.scrollTop(0),c.wrap.addClass("cbp-popup-loading"),c.slider&&f.private.resize.destroyEvent(a.data(c.slider[0],"cubeportfolio")),c.options.singlePageCallback.call(c,c.dataArray[c.current].url,c.dataArray[c.current].element),c.options.singlePageDeeplinking&&(location.href=c.url+"#cbp="+c.dataArray[c.current].url))},resetWrap:function(){var a=this;"singlePage"===a.type&&a.options.singlePageDeeplinking&&(location.href=a.url+"#"),"singlePageInline"===a.type&&a.options.singlePageInlineDeeplinking&&(location.href=a.url+"#")},getIndex:function(a){var b=this;return a%=b.counterTotal,a<0&&(a=b.counterTotal+a),a},close:function(c,d){function e(){h.slider&&f.private.resize.destroyEvent(a.data(h.slider[0],"cubeportfolio")),h.content.html(""),h.wrap.detach(),h.cubeportfolio.$obj.removeClass("cbp-popup-singlePageInline-open cbp-popup-singlePageInline-close"),"promise"===c&&a.isFunction(d.callback)&&d.callback.call(h.cubeportfolio)}function g(){var d=a(b).scrollTop();h.resetWrap(),a(b).scrollTop(d),h.options.singlePageInlineInFocus&&"promise"!==c?a("html,body").animate({scrollTop:h.scrollTop},350).promise().then(function(){e()}):e()}var h=this;h.isOpen=!1,"singlePageInline"===h.type?"open"===c?(h.wrap.removeClass("cbp-popup-singlePageInline-ready"),a(h.dataArray[h.current].element).closest(".cbp-item").removeClass("cbp-singlePageInline-active"),h.openSinglePageInline(d.blocks,d.currentBlock,d.fromOpen)):(h.height=0,h.revertResizeSinglePageInline(),h.wrap.removeClass("cbp-popup-singlePageInline-ready"),h.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-close"),h.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"),f.private.modernBrowser?h.wrap.one(f.private.transitionend,function(){g()}):g()):"singlePage"===h.type?(h.resetWrap(),a(b).scrollTop(h.scrollTop),h.stopScroll=!0,h.wrap.removeClass("cbp-popup-ready cbp-popup-transitionend cbp-popup-singlePage-open cbp-popup-singlePage-sticky"),a("html").css({overflow:"",marginRight:"",position:""}),"ie8"!==f.private.browser&&"ie9"!==f.private.browser||(h.slider&&f.private.resize.destroyEvent(a.data(h.slider[0],"cubeportfolio")),h.content.html(""),h.wrap.detach()),h.wrap.one(f.private.transitionend,function(){h.slider&&f.private.resize.destroyEvent(a.data(h.slider[0],"cubeportfolio")),h.content.html(""),h.wrap.detach()})):(i=!1,h.originalStyle?a("html").attr("style",h.originalStyle):a("html").css({overflow:"",marginRight:""}),a(b).scrollTop(h.scrollTop),h.slider&&f.private.resize.destroyEvent(a.data(h.slider[0],"cubeportfolio")),h.content.html(""),h.wrap.detach())},tooggleLoading:function(a){var b=this;b.stopEvents=a,b.wrap[a?"addClass":"removeClass"]("cbp-popup-loading")},resizeImage:function(){if(this.isOpen){var c=this.content.find("img"),d=c.parent(),e=a(b).height()-(d.outerHeight(!0)-d.height())-this.content.find(".cbp-popup-lightbox-bottom").outerHeight(!0);c.css("max-height",e+"px")}},preloadNearbyImages:function(){for(var a=this,b=[a.getIndex(a.current+1),a.getIndex(a.current+2),a.getIndex(a.current+3),a.getIndex(a.current-1),a.getIndex(a.current-2),a.getIndex(a.current-3)],c=b.length-1;c>=0;c--)"isImage"===a.dataArray[b[c]].type&&a.cubeportfolio.checkSrc(a.dataArray[b[c]])}},i=!1,j=!1,k=!1;e.prototype.run=function(){var b=this,d=b.parent,e=a(c.body);d.lightbox=null,d.options.lightboxDelegate&&!j&&(j=!0,d.lightbox=Object.create(h),d.lightbox.init(d,"lightbox"),e.on("click.cbp",d.options.lightboxDelegate,function(c){c.preventDefault();var e=a(this),f=e.attr("data-cbp-lightbox"),g=b.detectScope(e),h=g.data("cubeportfolio"),i=[];h?h.blocksOn.each(function(b,c){var e=a(c);e.not(".cbp-item-off")&&e.find(d.options.lightboxDelegate).each(function(b,c){f?a(c).attr("data-cbp-lightbox")===f&&i.push(c):i.push(c)})}):i=f?g.find(d.options.lightboxDelegate+"[data-cbp-lightbox="+f+"]"):g.find(d.options.lightboxDelegate),d.lightbox.openLightbox(i,e[0])})),d.singlePage=null,d.options.singlePageDelegate&&!k&&(k=!0,d.singlePage=Object.create(h),d.singlePage.init(d,"singlePage"),e.on("click.cbp",d.options.singlePageDelegate,function(c){c.preventDefault();var e=a(this),f=e.attr("data-cbp-singlePage"),g=b.detectScope(e),h=g.data("cubeportfolio"),i=[];h?h.blocksOn.each(function(b,c){var e=a(c);e.not(".cbp-item-off")&&e.find(d.options.singlePageDelegate).each(function(b,c){f?a(c).attr("data-cbp-singlePage")===f&&i.push(c):i.push(c)})}):i=f?g.find(d.options.singlePageDelegate+"[data-cbp-singlePage="+f+"]"):g.find(d.options.singlePageDelegate),d.singlePage.openSinglePage(i,e[0])})),d.singlePageInline=null,d.options.singlePageInlineDelegate&&(d.singlePageInline=Object.create(h),d.singlePageInline.init(d,"singlePageInline"),d.$obj.on("click.cbp",d.options.singlePageInlineDelegate,function(b){b.preventDefault();var c=a.data(this,"cbp-locked"),e=a.data(this,"cbp-locked",+new Date);(!c||e-c>300)&&d.singlePageInline.openSinglePageInline(d.blocksOn,this)}))},e.prototype.detectScope=function(b){var d,e,f;return d=b.closest(".cbp-popup-singlePageInline"),d.length?(f=b.closest(".cbp",d[0]),f.length?f:d):(e=b.closest(".cbp-popup-singlePage"),e.length?(f=b.closest(".cbp",e[0]),f.length?f:e):(f=b.closest(".cbp"),f.length?f:a(c.body)))},e.prototype.destroy=function(){var b=this.parent;a(c.body).off("click.cbp"),j=!1,k=!1,b.lightbox&&b.lightbox.destroy(),b.singlePage&&b.singlePage.destroy(),b.singlePageInline&&b.singlePageInline.destroy()},f.plugins.popUp=function(a){return new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.searchInput=a(b.options.search),c.searchInput.each(function(b,c){var d=c.getAttribute("data-search");d||(d="*"),a.data(c,"searchData",{value:c.value,el:d})});var d=null;c.searchInput.on("keyup.cbp paste.cbp",function(b){b.preventDefault();var e=a(this);clearTimeout(d),d=setTimeout(function(){c.runEvent.call(c,e)},350)}),c.searchNothing=c.searchInput.siblings(".cbp-search-nothing").detach(),c.searchNothingHeight=null,c.searchNothingHTML=c.searchNothing.html(),c.searchInput.siblings(".cbp-search-icon").on("click.cbp",function(b){b.preventDefault(),c.runEvent.call(c,a(this).prev().val(""))})}var f=a.fn.cubeportfolio.constructor;e.prototype.runEvent=function(b){var c=this,d=b.val(),e=b.data("searchData"),f=new RegExp(d,"i");e.value===d||c.parent.isAnimating||(e.value=d,d.length>0?b.attr("value",d):b.removeAttr("value"),c.parent.$obj.cubeportfolio("filter",function(b){var g=b.filter(function(b,c){var d=a(c).find(e.el).text();if(d.search(f)>-1)return!0});if(0===g.length&&c.searchNothing.length){var h=c.searchNothingHTML.replace("{{query}}",d);c.searchNothing.html(h),c.searchNothing.appendTo(c.parent.$obj),null===c.searchNothingHeight&&(c.searchNothingHeight=c.searchNothing.outerHeight(!0)),c.parent.registerEvent("resizeMainContainer",function(){c.parent.height=c.parent.height+c.searchNothingHeight,c.parent.obj.style.height=c.parent.height+"px"},!0)}else c.searchNothing.detach();return c.parent.triggerEvent("resetFiltersVisual"),g},function(){b.trigger("keyup.cbp")}))},e.prototype.destroy=function(){var b=this;b.searchInput.off(".cbp"),b.searchInput.next(".cbp-search-icon").off(".cbp"),b.searchInput.each(function(b,c){a.removeData(c)})},f.plugins.search=function(a){return""===a.options.search?null:new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.options=a.extend({},f,c.parent.options.plugins.slider);var d=a(c.options.pagination);d.length>0&&(c.parent.customPagination=d,c.parent.customPaginationItems=d.children(),c.parent.customPaginationClass=c.options.paginationClass,c.parent.customPaginationItems.on("click.cbp",function(b){b.preventDefault(),b.stopImmediatePropagation(),b.stopPropagation(),c.parent.sliderStopEvents||c.parent.jumpToSlider(a(this))})),c.parent.registerEvent("gridAdjust",function(){c.sliderMarkup.call(c.parent),c.parent.registerEvent("gridAdjust",function(){c.updateSlider.call(c.parent)})},!0)}var f={pagination:"",paginationClass:"cbp-pagination-active"},g=a.fn.cubeportfolio.constructor;e.prototype.sliderMarkup=function(){var b=this;b.sliderStopEvents=!1,b.sliderActive=0,b.$obj.one("initComplete.cbp",function(){b.$obj.addClass("cbp-mode-slider")}),b.nav=a("<div/>",{class:"cbp-nav"}),b.nav.on("click.cbp","[data-slider-action]",function(c){if(c.preventDefault(),c.stopImmediatePropagation(),c.stopPropagation(),!b.sliderStopEvents){var d=a(this),e=d.attr("data-slider-action");b[e+"Slider"]&&b[e+"Slider"](d)}}),b.options.showNavigation&&(b.controls=a("<div/>",{class:"cbp-nav-controls"}),b.navPrev=a("<div/>",{class:"cbp-nav-prev","data-slider-action":"prev"}).appendTo(b.controls),b.navNext=a("<div/>",{class:"cbp-nav-next","data-slider-action":"next"}).appendTo(b.controls),b.controls.appendTo(b.nav)),b.options.showPagination&&(b.navPagination=a("<div/>",{class:"cbp-nav-pagination"}).appendTo(b.nav)),(b.controls||b.navPagination)&&b.nav.appendTo(b.$obj),b.updateSliderPagination(),b.options.auto&&(b.options.autoPauseOnHover&&(b.mouseIsEntered=!1,b.$obj.on("mouseenter.cbp",function(a){b.mouseIsEntered=!0,b.stopSliderAuto()}).on("mouseleave.cbp",function(a){b.mouseIsEntered=!1,b.startSliderAuto()})),b.startSliderAuto()),b.options.drag&&g.private.modernBrowser&&b.dragSlider()},e.prototype.updateSlider=function(){var a=this;a.updateSliderPosition(),a.updateSliderPagination()},e.prototype.destroy=function(){var a=this;a.parent.customPaginationItems&&a.parent.customPaginationItems.off(".cbp"),(a.parent.controls||a.parent.navPagination)&&(a.parent.nav.off(".cbp"),a.parent.nav.remove())},g.plugins.slider=function(a){return"slider"!==a.options.layoutMode?null:new e(a)}}(jQuery,window,document);
// ==================================================
// fancyBox v3.2.2
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function a(t){var e=n(t.currentTarget),o=t.data?t.data.options:{},a=e.attr("data-fancybox")||"",i=0,s=[];t.isDefaultPrevented()||(t.preventDefault(),a?(s=o.selector?n(o.selector):t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+a+'"]'):n('[data-fancybox="'+a+'"]'),i=s.index(e),i<0&&(i=0)):s=[e],n.fancybox.open(s,o,i))}if(n){if(n.fn.fancybox)return void("console"in t&&console.log("fancyBox already initialized"));var i={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!0,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","share","close"],idleTime:3,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},defaultType:"image",animationEffect:"zoom",animationDuration:500,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M9,28 L31,28" /></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m -8, 0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23"></path></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'},parentEl:"body",autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container"},onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{margin:0,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),d=function(){var t,n=e.createElement("fakeelement"),a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in a)if(n.style[t]!==o)return a[t]}(),f=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,o,a){var s=this;s.opts=n.extend(!0,{index:a},i,o||{}),n.fancybox.isMobile&&(s.opts=n.extend(!0,{},s.opts,s.opts.mobile)),o&&n.isArray(o.buttons)&&(s.opts.buttons=o.buttons),s.id=s.opts.id||++c,s.group=[],s.currIndex=parseInt(s.opts.index,10)||0,s.prevIndex=null,s.prevPos=null,s.currPos=0,s.firstRun=null,s.createGroup(t),s.group.length&&(s.$lastFocus=n(e.activeElement).blur(),s.slides={},s.init())};n.extend(p.prototype,{init:function(){var a,i,s,c=this,l=c.group[c.currIndex],u=l.opts,d=n.fancybox.scrollbarWidth;c.scrollTop=r.scrollTop(),c.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||(n("body").addClass("fancybox-active"),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!t.MSStream?"image"!==l.type&&n("body").css("top",n("body").scrollTop()*-1).addClass("fancybox-iosfix"):!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(d===o&&(a=n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"),d=n.fancybox.scrollbarWidth=a[0].offsetWidth-a[0].clientWidth,a.remove()),n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+d+"px; }</style>"),n("body").addClass("compensate-for-scrollbar"))),s="",n.each(u.buttons,function(t,e){s+=u.btnTpl[e]||""}),i=n(c.translate(c,u.baseTpl.replace("{{buttons}}",s).replace("{{arrows}}",u.btnTpl.arrowLeft+u.btnTpl.arrowRight))).attr("id","fancybox-container-"+c.id).addClass("fancybox-is-hidden").addClass(u.baseClass).data("FancyBox",c).appendTo(u.parentEl),c.$refs={container:i},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){c.$refs[t]=i.find(".fancybox-"+t)}),c.trigger("onInit"),c.activate(),c.jumpTo(c.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var a=n[e];return a===o?t:a})},createGroup:function(t){var e=this,a=n.makeArray(t);n.each(a,function(t,a){var i,s,r,c,l={},u={};n.isPlainObject(a)?(l=a,u=a.opts||a):"object"===n.type(a)&&n(a).length?(i=n(a),u=i.data(),u=n.extend({},u,u.options||{}),u.$orig=i,l.src=u.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=a)):l={type:"html",src:a+""},l.opts=n.extend(!0,{},e.opts,u),n.isArray(u.buttons)&&(l.opts.buttons=u.buttons),s=l.type||l.opts.type,r=l.src||"",!s&&r&&(r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":r.match(/\.(pdf)((\?|#).*)?$/i)?s="pdf":"#"===r.charAt(0)&&(s="inline")),s?l.type=s:e.trigger("objectNeedsType",l),l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(e.opts.caption)&&(l.opts.caption=e.opts.caption.apply(a,[e,l])),l.opts.caption instanceof n||(l.opts.caption=l.opts.caption===o?"":l.opts.caption+""),"ajax"===s&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(s,["html","inline","ajax"])>-1?(l.opts.toolbar=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===s&&(l.type="iframe",l.opts.iframe.preload=!1),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(l)})},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}).on("click.fb","[data-fancybox-zoom]",function(t){o[o.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},600))}),r.on("focusin.fb",function(t){var a=n.fancybox?n.fancybox.getInstance():null;a.isClosing||!a.current||!a.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||a&&"fixed"!==n(t.target).css("position")&&!a.$refs.container.has(t.target).length&&(t.stopPropagation(),a.focus(),s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))}),r.on("keydown.fb",function(t){var e=o.current,a=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))return 8===a||27===a?(t.preventDefault(),void o.close(t)):37===a||38===a?(t.preventDefault(),void o.previous()):39===a||40===a?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,a)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,a){var i,s,r,c,l,u,d,p=this,h=p.group.length;if(!(p.isSliding||p.isClosing||p.isAnimating&&p.firstRun)){if(t=parseInt(t,10),s=p.current?p.current.opts.loop:p.opts.loop,!s&&(t<0||t>=h))return!1;if(i=p.firstRun=null===p.firstRun,!(h<2&&!i&&p.isSliding)){if(c=p.current,p.prevIndex=p.currIndex,p.prevPos=p.currPos,r=p.createSlide(t),h>1&&((s||r.index>0)&&p.createSlide(t-1),(s||r.index<h-1)&&p.createSlide(t+1)),p.current=r,p.currIndex=r.index,p.currPos=r.pos,p.trigger("beforeShow",i),p.updateControls(),u=n.fancybox.getTranslate(r.$slide),r.isMoved=(0!==u.left||0!==u.top)&&!r.$slide.hasClass("fancybox-animated"),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[i?"animationDuration":"transitionDuration"],e=parseInt(e,10),i)return r.opts.animationEffect&&e&&p.$refs.container.css("transition-duration",e+"ms"),p.$refs.container.removeClass("fancybox-is-hidden"),f(p.$refs.container),p.$refs.container.addClass("fancybox-is-open"),r.$slide.addClass("fancybox-slide--current"),p.loadSlide(r),void p.preload();n.each(p.slides,function(t,e){n.fancybox.stop(e.$slide)}),r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),r.isMoved?(l=Math.round(r.$slide.width()),n.each(p.slides,function(t,o){var a=o.pos-r.pos;n.fancybox.animate(o.$slide,{top:0,left:a*l+a*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===p.currPos&&(r.isMoved=!1,p.complete())})})):p.$refs.stage.children().removeAttr("style"),r.isLoaded?p.revealContent(r):p.loadSlide(r),p.preload(),c.pos!==r.pos&&(d="fancybox-slide--"+(c.pos>r.pos?"next":"previous"),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),c.isComplete=!1,e&&(r.isMoved||r.opts.transitionEffect)&&(r.isMoved?c.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+r.opts.transitionEffect,n.fancybox.animate(c.$slide,d,e,function(){c.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,a=this;return o=t%a.group.length,o=o<0?a.group.length+o:o,!a.slides[t]&&a.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage),a.slides[t]=n.extend(!0,{},a.group[o],{pos:t,$slide:e,isLoaded:!1}),a.updateSlide(a.slides[t])),a.slides[t]},scaleToActual:function(t,e,a){var i,s,r,c,l,u=this,d=u.current,f=d.$content,p=parseInt(d.$slide.width(),10),h=parseInt(d.$slide.height(),10),g=d.width,b=d.height;"image"!=d.type||d.hasError||!f||u.isAnimating||(n.fancybox.stop(f),u.isAnimating=!0,t=t===o?.5*p:t,e=e===o?.5*h:e,i=n.fancybox.getTranslate(f),c=g/i.width,l=b/i.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=i.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=i.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),u.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},a||330,function(){u.isAnimating=!1}),u.SlideShow&&u.SlideShow.isActive&&u.SlideShow.stop())},scaleToFit:function(t){var e,o=this,a=o.current,i=a.$content;"image"!=a.type||a.hasError||!i||o.isAnimating||(n.fancybox.stop(i),o.isAnimating=!0,e=o.getFitPos(a),o.updateCursor(e.width,e.height),n.fancybox.animate(i,{top:e.top,left:e.left,scaleX:e.width/i.width(),scaleY:e.height/i.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,a,i,s,r=this,c=t.$content,l=t.width,u=t.height,d=t.opts.margin;return!(!c||!c.length||!l&&!u)&&("number"===n.type(d)&&(d=[d,d]),2==d.length&&(d=[d[0],d[1],d[0],d[1]]),e=parseInt(r.$refs.stage.width(),10)-(d[1]+d[3]),o=parseInt(r.$refs.stage.height(),10)-(d[0]+d[2]),a=Math.min(1,e/l,o/u),i=Math.floor(a*l),s=Math.floor(a*u),{top:Math.floor(.5*(o-s))+d[0],left:Math.floor(.5*(e-i))+d[3],width:i,height:s})},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t){var e=this,o=t.$content;o&&(t.width||t.height)&&(n.fancybox.stop(o),n.fancybox.setTranslate(o,e.getFitPos(t)),t.pos===e.currPos&&e.updateCursor()),t.$slide.trigger("refresh"),e.trigger("onUpdate",t)},updateCursor:function(t,e){var n,a=this,i=a.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");a.current&&!a.isClosing&&(a.isZoomable()?(i.addClass("fancybox-is-zoomable"),n=t!==o&&e!==o?t<a.current.width&&e<a.current.height:a.isScaledDown(),n?i.addClass("fancybox-can-zoomIn"):a.current.opts.touch?i.addClass("fancybox-can-drag"):i.addClass("fancybox-can-zoomOut")):a.current.opts.touch&&i.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,o=e.current;if(o&&!e.isClosing)return!!("image"===o.type&&o.isLoaded&&!o.hasError&&("zoom"===o.opts.clickContent||n.isFunction(o.opts.clickContent)&&"zoom"===o.opts.clickContent(o))&&(t=e.getFitPos(o),o.width>t.width||o.height>t.height))},isScaledDown:function(){var t=this,e=t.current,o=e.$content,a=!1;return o&&(a=n.fancybox.getTranslate(o),a=a.width<e.width||a.height<e.height),a},canPan:function(){var t=this,e=t.current,n=e.$content,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},loadSlide:function(t){var e,o,a,i=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,i.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":i.setImage(t);break;case"iframe":i.setIframe(t);break;case"html":i.setContent(t,t.src||t.content);break;case"inline":n(t.src).length?i.setContent(t,n(t.src)):i.setError(t);break;case"ajax":i.showLoading(t),a=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&i.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&i.setError(t)}})),o.one("onReset",function(){a.abort()});break;default:i.setError(t)}return!0}},setImage:function(e){var o,a,i,s,r=this,c=e.opts.srcset||e.opts.image.srcset;if(c){i=t.devicePixelRatio||1,s=t.innerWidth*i,a=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),a.sort(function(t,e){return t.value-e.value});for(var l=0;l<a.length;l++){var u=a[l];if("w"===u.postfix&&u.value>=s||"x"===u.postfix&&u.value>=i){o=u;break}}!o&&a.length&&(o=a[a.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$content=n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null,r.setBigImage(e)}).one("load",function(){r.afterLoad(e),r.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(o[0].complete||"complete"==o[0].readyState)&&o[0].naturalWidth&&o[0].naturalHeight?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,a=this,i=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(s),e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(a.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),a.afterLoad(t)}),s.on("refresh.fb",function(){var n,a,s,r=t.$content,c=i.css.width,l=i.css.height;if(1===e[0].isReady){try{a=e.contents(),s=a.find("body")}catch(t){}s&&s.length&&(c===o&&(n=e[0].contentWindow.document.documentElement.scrollWidth,c=Math.ceil(s.outerWidth(!0)+(r.width()-n)),c+=r.outerWidth()-r.innerWidth()),l===o&&(l=Math.ceil(s.outerHeight(!0)),l+=r.outerHeight()-r.innerHeight()),c&&r.width(c),l&&r.height(l)),r.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn===!0&&t.$content.prepend(a.translate(t,t.opts.btnTpl.smallBtn)),s.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,a,i,s,r,c=this,l=t.$slide,u=!1;return e=t.opts[c.firstRun?"animationEffect":"transitionEffect"],i=t.opts[c.firstRun?"animationDuration":"transitionDuration"],i=parseInt(t.forcedDuration===o?i:t.forcedDuration,10),!t.isMoved&&t.pos===c.currPos&&i||(e=!1),"zoom"!==e||t.pos===c.currPos&&i&&"image"===t.type&&!t.hasError&&(u=c.getThumbPos(t))||(e="fade"),"zoom"===e?(r=c.getFitPos(t),r.scaleX=r.width/u.width,r.scaleY=r.height/u.height,delete r.width,delete r.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-u.width/u.height)>.1),s&&(u.opacity=.1,r.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),u),f(t.$content),void n.fancybox.animate(t.$content,r,i,function(){c.complete()})):(c.updateSlide(t),e?(n.fancybox.stop(l),a="fancybox-animated fancybox-slide--"+(t.pos>=c.prevPos?"next":"previous")+" fancybox-fx-"+e,l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(a),t.$content.removeClass("fancybox-is-hidden"),f(l),void n.fancybox.animate(l,"fancybox-slide--current",i,function(e){l.removeClass(a).removeAttr("style"),t.pos===c.currPos&&c.complete()},!0)):(f(l),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===c.currPos&&c.complete())))},getThumbPos:function(o){var a,i=this,s=!1,r=function(e){for(var o,a=e[0],i=a.getBoundingClientRect(),s=[];null!==a.parentElement;)"hidden"!==n(a.parentElement).css("overflow")&&"auto"!==n(a.parentElement).css("overflow")||s.push(a.parentElement.getBoundingClientRect()),a=a.parentElement;return o=s.every(function(t){var e=Math.min(i.right,t.right)-Math.max(i.left,t.left),n=Math.min(i.bottom,t.bottom)-Math.max(i.top,t.top);return e>0&&n>0}),o&&i.bottom>0&&i.right>0&&i.left<n(t).width()&&i.top<n(t).height()},c=o.opts.$thumb,l=c?c.offset():0;return l&&c[0].ownerDocument===e&&r(c)&&(a=i.$refs.stage.offset(),s={top:l.top-a.top+parseFloat(c.css("border-top-width")||0),left:l.left-a.left+parseFloat(c.css("border-left-width")||0),width:c.width(),height:c.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,a={};o.isMoved||!o.isLoaded||o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?a[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),t.slides=a,t.updateCursor(),t.trigger("afterShow"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;this.isClosing||(e&&e.isComplete&&(t=e.$slide.find("input[autofocus]:enabled:visible:first"),t.length||(t=e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))),t=t&&t.length?t:this.$refs.container,t.focus())},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,a,i,s,r,c,l=this,f=l.current,p=function(){l.cleanUp(t)};return!l.isClosing&&(l.isClosing=!0,l.trigger("beforeClose",t)===!1?(l.isClosing=!1,u(function(){l.update()}),!1):(l.removeEvents(),f.timouts&&clearTimeout(f.timouts),i=f.$content,o=f.opts.animationEffect,a=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),f.$slide.siblings().trigger("onReset").remove(),a&&l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),l.hideLoading(f),l.hideControls(),l.updateCursor(),"zoom"!==o||t!==!0&&i&&a&&"image"===f.type&&!f.hasError&&(c=l.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(i),r=n.fancybox.getTranslate(i),r.width=r.width*r.scaleX,r.height=r.height*r.scaleY,s=f.opts.zoomOpacity,"auto"==s&&(s=Math.abs(f.width/f.height-c.width/c.height)>.1),s&&(c.opacity=0),r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,r.width=c.width,r.height=c.height,n.fancybox.setTranslate(f.$content,r),n.fancybox.animate(f.$content,c,a,p),!0):(o&&a?t===!0?setTimeout(p,a):n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,a,p):p(),!0)))},cleanUp:function(t){var o,a,i=this,r=n("body");i.current.$slide.trigger("onReset"),i.$refs.container.empty().remove(),i.trigger("afterClose",t),i.$lastFocus&&i.current.opts.backFocus&&i.$lastFocus.focus(),i.current=null,o=n.fancybox.getInstance(),o?o.activate():(s.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft),r.removeClass("fancybox-active compensate-for-scrollbar"),r.hasClass("fancybox-iosfix")&&(a=parseInt(e.body.style.top,10),r.removeClass("fancybox-iosfix").css("top","").scrollTop(a*-1)),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,a=Array.prototype.slice.call(arguments,1),i=this,s=e&&e.opts?e:i.current;return s?a.unshift(s):s=i,a.unshift(i),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,a)),o===!1?o:void("afterClose"!==t&&i.$refs?i.$refs.container.trigger(t+".fb",a):r.trigger(t+".fb",a))},updateControls:function(t){var e=this,n=e.current,o=n.index,a=n.opts.caption,i=e.$refs.container,s=e.$refs.caption;n.$slide.trigger("refresh"),e.$caption=a&&a.length?s.html(a):null,e.isHiddenControls||e.isIdle||e.showControls(),i.find("[data-fancybox-count]").html(e.group.length),i.find("[data-fancybox-index]").html(o+1),i.find("[data-fancybox-prev]").prop("disabled",!n.opts.loop&&o<=0),i.find("[data-fancybox-next]").prop("disabled",!n.opts.loop&&o>=e.group.length-1),"image"===n.type?i.find("[data-fancybox-download]").attr("href",n.opts.image.src||n.src).show():i.find("[data-fancybox-download],[data-fancybox-zoom]").hide()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.2.2",defaults:i,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof p&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new p(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.off("click.fb-start")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;if(!t||!t.length)return!1;if(e=t.eq(0).css("transform"),e&&e.indexOf("matrix")!==-1?(e=e.split("(")[1],e=e.split(")")[0],e=e.split(",")):e=[],e.length)e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]],e=e.map(parseFloat);else{e=[0,0,1,1];var n=/\.*translate\((.*)px,(.*)px\)/i,o=n.exec(t.eq(0).attr("style"));o&&(e[0]=parseFloat(o[2]),e[1]=parseFloat(o[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var n="",a={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(a.transform=n),e.opacity!==o&&(a.opacity=e.opacity),e.width!==o&&(a.width=e.width),e.height!==o&&(a.height=e.height),t.css(a)},animate:function(t,e,a,i,s){n.isFunction(a)&&(i=a,a=null),n.isPlainObject(e)||t.removeAttr("style"),t.on(d||"transitionend",function(a){(!a||!a.originalEvent||t.is(a.originalEvent.target)&&"z-index"!=a.originalEvent.propertyName)&&(n.fancybox.stop(t),n.isPlainObject(e)?e.scaleX!==o&&e.scaleY!==o&&(t.css("transition-duration","0ms"),e.width=Math.round(t.width()*e.scaleX),e.height=Math.round(t.height()*e.scaleY),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(t,e)):s!==!0&&t.removeClass(e),n.isFunction(i)&&i(a))}),n.isNumeric(a)&&t.css("transition-duration",a+"ms"),n.isPlainObject(e)?n.fancybox.setTranslate(t,e):t.addClass(e),e.scaleX&&t.hasClass("fancybox-image-wrap")&&t.parent().addClass("fancybox-is-scaling"),t.data("timer",setTimeout(function(){t.trigger("transitionend")},a+16))},stop:function(t){clearTimeout(t.data("timer")),t.off(d||"transitionend"),t.hasClass("fancybox-image-wrap")&&t.parent().removeClass("fancybox-is-scaling")}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},a):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},a),this},r.on("click.fb-start","[data-fancybox]",a)}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){
return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("objectNeedsType.fb",function(o,a,i){var s,r,c,l,u,d,f,p=i.src||"",h=!1;s=t.extend(!0,{},n,i.opts.media),t.each(s,function(n,o){if(c=p.match(o.matcher)){if(h=o.type,d={},o.paramPlace&&c[o.paramPlace]){u=c[o.paramPlace],"?"==u[0]&&(u=u.substring(1)),u=u.split("&");for(var a=0;a<u.length;++a){var s=u[a].split("=",2);2==s.length&&(d[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,i.opts[n],d),p="function"===t.type(o.url)?o.url.call(this,c,l,i):e(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,i):e(o.thumb,c),"vimeo"===n&&(p=p.replace("&%23","#")),!1}}),h?(i.src=p,i.type=h,i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=r),"iframe"===h&&(t.extend(!0,i.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),i.contentProvider=f,i.opts.slideClass+=" fancybox-slide--"+("gmap_place"==f||"gmap_search"==f?"map":"video"))):p&&(i.type=i.opts.defaultType)})}(window.jQuery||jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),a=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),i=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,a=o.length;e<a;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],a=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,i=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return a||i},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},u=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};u.prototype.destroy=function(){this.$container.off(".fb.touch")},u.prototype.ontouchstart=function(o){var a=this,c=n(o.target),u=a.instance,d=u.current,f=d.$content,p="touchstart"==o.type;if(p&&a.$container.off("mousedown.fb.touch"),!d||a.instance.isAnimating||a.instance.isClosing)return o.stopPropagation(),void o.preventDefault();if((!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left)&&(a.startPoints=i(o),a.startPoints&&!(a.startPoints.length>1&&u.isSliding))){if(a.$target=c,a.$content=f,a.canTap=!0,a.opts=d.opts.touch,n(e).off(".fb.touch"),n(e).on(p?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(a,"ontouchend")),n(e).on(p?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(a,"ontouchmove")),!a.opts&&!u.canPan()||!c.is(a.$stage)&&!a.$stage.find(c).length)return void(c.is("img")&&o.preventDefault());o.stopPropagation(),n.fancybox.isMobile&&(l(a.$target)||l(a.$target.parent()))||o.preventDefault(),a.canvasWidth=Math.round(d.$slide[0].clientWidth),a.canvasHeight=Math.round(d.$slide[0].clientHeight),a.startTime=(new Date).getTime(),a.distanceX=a.distanceY=a.distance=0,a.isPanning=!1,a.isSwiping=!1,a.isZooming=!1,a.sliderStartPos=a.sliderLastPos||{top:0,left:0},a.contentStartPos=n.fancybox.getTranslate(a.$content),a.contentLastPos=null,1!==a.startPoints.length||a.isZooming||(a.canTap=!u.isSliding,"image"===d.type&&(a.contentStartPos.width>a.canvasWidth+1||a.contentStartPos.height>a.canvasHeight+1)?(n.fancybox.stop(a.$content),a.$content.css("transition-duration","0ms"),a.isPanning=!0):a.isSwiping=!0,a.$container.addClass("fancybox-controls--isGrabbing")),2!==a.startPoints.length||u.isAnimating||d.hasError||"image"!==d.type||!d.isLoaded&&!d.$ghost||(a.isZooming=!0,a.isSwiping=!1,a.isPanning=!1,n.fancybox.stop(a.$content),a.$content.css("transition-duration","0ms"),a.centerPointStartX=.5*(a.startPoints[0].x+a.startPoints[1].x)-n(t).scrollLeft(),a.centerPointStartY=.5*(a.startPoints[0].y+a.startPoints[1].y)-n(t).scrollTop(),a.percentageOfImageAtPinchPointX=(a.centerPointStartX-a.contentStartPos.left)/a.contentStartPos.width,a.percentageOfImageAtPinchPointY=(a.centerPointStartY-a.contentStartPos.top)/a.contentStartPos.height,a.startDistanceBetweenFingers=s(a.startPoints[0],a.startPoints[1]))}},u.prototype.ontouchmove=function(t){var e=this;if(e.newPoints=i(t),n.fancybox.isMobile&&(l(e.$target)||l(e.$target.parent())))return t.stopPropagation(),void(e.canTap=!1);if((e.opts||e.instance.canPan())&&e.newPoints&&e.newPoints.length&&(e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0)){if(!e.$target.is(e.$stage)&&!e.$stage.find(e.$target).length)return;t.stopPropagation(),t.preventDefault(),e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()}},u.prototype.onSwipe=function(){var e,i=this,s=i.isSwiping,r=i.sliderStartPos.left||0;s===!0?Math.abs(i.distance)>10&&(i.canTap=!1,i.instance.group.length<2&&i.opts.vertical?i.isSwiping="y":i.instance.isSliding||i.opts.vertical===!1||"auto"===i.opts.vertical&&n(t).width()>800?i.isSwiping="x":(e=Math.abs(180*Math.atan2(i.distanceY,i.distanceX)/Math.PI),i.isSwiping=e>45&&e<135?"y":"x"),i.instance.isSliding=i.isSwiping,i.startPoints=i.newPoints,n.each(i.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration","0ms"),e.inTransition=!1,e.pos===i.instance.current.pos&&(i.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left)}),i.instance.SlideShow&&i.instance.SlideShow.isActive&&i.instance.SlideShow.stop()):("x"==s&&(i.distanceX>0&&(i.instance.group.length<2||0===i.instance.current.index&&!i.instance.current.opts.loop)?r+=Math.pow(i.distanceX,.8):i.distanceX<0&&(i.instance.group.length<2||i.instance.current.index===i.instance.group.length-1&&!i.instance.current.opts.loop)?r-=Math.pow(-i.distanceX,.8):r+=i.distanceX),i.sliderLastPos={top:"x"==s?0:i.sliderStartPos.top+i.distanceY,left:r},i.requestId&&(a(i.requestId),i.requestId=null),i.requestId=o(function(){i.sliderLastPos&&(n.each(i.instance.slides,function(t,e){var o=e.pos-i.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:i.sliderLastPos.top,left:i.sliderLastPos.left+o*i.canvasWidth+o*e.opts.gutter})}),i.$container.addClass("fancybox-is-sliding"))}))},u.prototype.onPan=function(){var t,e,i,s=this;s.canTap=!1,t=s.contentStartPos.width>s.canvasWidth?s.contentStartPos.left+s.distanceX:s.contentStartPos.left,e=s.contentStartPos.top+s.distanceY,i=s.limitMovement(t,e,s.contentStartPos.width,s.contentStartPos.height),i.scaleX=s.contentStartPos.scaleX,i.scaleY=s.contentStartPos.scaleY,s.contentLastPos=i,s.requestId&&(a(s.requestId),s.requestId=null),s.requestId=o(function(){n.fancybox.setTranslate(s.$content,s.contentLastPos)})},u.prototype.limitMovement=function(t,e,n,o){var a,i,s,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,f=c.contentStartPos.top,p=c.distanceX,h=c.distanceY;return a=Math.max(0,.5*l-.5*n),i=Math.max(0,.5*u-.5*o),s=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(p>0&&t>a&&(t=a-1+Math.pow(-a+d+p,.8)||0),p<0&&t<s&&(t=s+1-Math.pow(s-d-p,.8)||0)),o>u&&(h>0&&e>i&&(e=i-1+Math.pow(-i+f+h,.8)||0),h<0&&e<r&&(e=r+1-Math.pow(r-f-h,.8)||0)),{top:e,left:t}},u.prototype.limitPosition=function(t,e,n,o){var a=this,i=a.canvasWidth,s=a.canvasHeight;return n>i?(t=t>0?0:t,t=t<i-n?i-n:t):t=Math.max(0,i/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},u.prototype.onZoom=function(){var e=this,i=e.contentStartPos.width,r=e.contentStartPos.height,c=e.contentStartPos.left,l=e.contentStartPos.top,u=s(e.newPoints[0],e.newPoints[1]),d=u/e.startDistanceBetweenFingers,f=Math.floor(i*d),p=Math.floor(r*d),h=(i-f)*e.percentageOfImageAtPinchPointX,g=(r-p)*e.percentageOfImageAtPinchPointY,b=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),m=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=b-e.centerPointStartX,v=m-e.centerPointStartY,x=c+(h+y),w=l+(g+v),$={top:w,left:x,scaleX:e.contentStartPos.scaleX*d,scaleY:e.contentStartPos.scaleY*d};e.canTap=!1,e.newWidth=f,e.newHeight=p,e.contentLastPos=$,e.requestId&&(a(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},u.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming;return o.endPoints=i(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),o.requestId&&(a(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r)))},u.prototype.endSwiping=function(t){var e=this,o=!1;e.instance.isSliding=!1,e.sliderLastPos=null,"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.instance.current.$slide,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,opacity:0},150),o=e.instance.close(!0,300)):"x"==t&&e.distanceX>50&&e.instance.group.length>1?o=e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50&&e.instance.group.length>1&&(o=e.instance.next(e.speedX)),o!==!1||"x"!=t&&"y"!=t||e.instance.jumpTo(e.instance.current.index,150),e.$container.removeClass("fancybox-is-sliding")},u.prototype.endPanning=function(){var t,e,o,a=this;a.contentLastPos&&(a.opts.momentum===!1?(t=a.contentLastPos.left,e=a.contentLastPos.top):(t=a.contentLastPos.left+a.velocityX*a.speed,e=a.contentLastPos.top+a.velocityY*a.speed),o=a.limitPosition(t,e,a.contentStartPos.width,a.contentStartPos.height),o.width=a.contentStartPos.width,o.height=a.contentStartPos.height,n.fancybox.animate(a.$content,o,330))},u.prototype.endZooming=function(){var t,e,o,a,i=this,s=i.instance.current,r=i.newWidth,c=i.newHeight;i.contentLastPos&&(t=i.contentLastPos.left,e=i.contentLastPos.top,a={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(i.$content,a),r<i.canvasWidth&&c<i.canvasHeight?i.instance.scaleToFit(150):r>s.width||c>s.height?i.instance.scaleToActual(i.centerPointStartX,i.centerPointStartY,150):(o=i.limitPosition(t,e,r,c),n.fancybox.setTranslate(i.content,n.fancybox.getTranslate(i.$content)),n.fancybox.animate(i.$content,o,150)))},u.prototype.onTap=function(t){var e,o=this,a=n(t.target),s=o.instance,r=s.current,c=t&&i(t)||o.startPoints,l=c[0]?c[0].x-o.$stage.offset().left:0,u=c[0]?c[0].y-o.$stage.offset().top:0,d=function(e){var a=r.opts[e];if(n.isFunction(a)&&(a=a.apply(s,[r,t])),a)switch(a){case"close":s.close(o.startEvent);break;case"toggleControls":s.toggleControls(!0);break;case"next":s.next();break;case"nextOrClose":s.group.length>1?s.next():s.close(o.startEvent);break;case"zoom":"image"==r.type&&(r.isLoaded||r.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(l,u):s.group.length<2&&s.close(o.startEvent))}};if(!(t.originalEvent&&2==t.originalEvent.button||s.isSliding||l>a[0].clientWidth+a.offset().left)){if(a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(a.is(".fancybox-slide"))e="Slide";else{if(!s.current.$content||!s.current.$content.has(t.target).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,Math.abs(l-o.tapX)>50||Math.abs(u-o.tapY)>50||s.isSliding)return this;d("dblclick"+e)}else o.tapX=l,o.tapY=u,r.opts["dblclick"+e]&&r.opts["dblclick"+e]!==r.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,d("click"+e)},300):d("click"+e);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new u(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery||jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this;e.instance&&e.instance.current&&(t===!0||e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.isActive&&e.instance.jumpTo((e.instance.currIndex+1)%e.instance.group.length)},e.instance.current.opts.slideShow.speed):(e.stop(),e.instance.idleSecondsCounter=0,e.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;e&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.set(!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var a=e&&e.SlideShow;o?a&&n.opts.slideShow.autoStart&&a.start():a&&a.isActive&&a.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,a,i,s){var r=o&&o.SlideShow;!r||!a.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(i.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n=function(){var e,n,o,a=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i={};for(n=0;n<a.length;n++)if(e=a[n],e&&e[1]in t){for(o=0;o<e.length;o++)i[a[0][o]]=e[o];return i}return!1}();if(!n)return void(e&&e.fancybox&&(e.fancybox.defaults.btnTpl.fullScreen=!1));var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on({"onInit.fb":function(t,e){var n;e&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(n[0])}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(n[0]),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,a){e&&e.FullScreen&&70===a&&(o.preventDefault(),e.FullScreen.toggle(e.$refs.container[0]))},"beforeClose.fb":function(t){t&&t.FullScreen&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t))})}(document,window.jQuery||jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container"}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this,e=t.instance;e.Thumbs=t;var n=e.group[0],o=e.group[1];t.opts=e.group[e.currIndex].opts.thumbs,t.$button=e.$refs.toolbar.find("[data-fancybox-thumbs]"),t.opts&&n&&o&&("image"==n.type||n.opts.thumb||n.opts.$thumb)&&("image"==o.type||o.opts.thumb||o.opts.$thumb)?(t.$button.show().on("click",function(){t.toggle()}),t.isActive=!0,t.opts.autoStart===!0&&t.show()):(t.$button.hide(),t.isActive=!1)},create:function(){var t,n,o=this,a=o.instance,i=o.opts.parentEl;o.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(a.$refs.container.find(i).addBack().filter(i)),t="<ul>",e.each(a.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",o.$list=e(t).appendTo(o.$grid).on("click","li",function(){a.jumpTo(e(this).data("index"))}),o.$list.find("img").hide().one("load",function(){var t,n,o,a,i=e(this).parent().removeClass("fancybox-thumbs-loading"),s=i.outerWidth(),r=i.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/s,a=n/r,o>=1&&a>=1&&(o>a?(t/=a,n=r):(t=s,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":n>r?Math.floor(.3*r-.3*n):Math.floor(.5*r-.5*n),"margin-left":Math.floor(.5*s-.5*t)}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(t){var e,n,o=this.$list;this.instance.current&&(e=o.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),n.top<0||n.top>o.height()-e.outerHeight()?o.stop().animate({scrollTop:o.scrollTop()+n.top},t):(n.left<0||n.left>o.width()-e.outerWidth())&&o.stop().animate({scrollLeft:o.scrollLeft()+n.left},t))},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus(0)):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.Thumbs&&new n(e)},"beforeShow.fb":function(t,e,n,o){var a=e&&e.Thumbs;a&&a.isVisible&&a.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,a){var i=e&&e.Thumbs;i&&i.isActive&&71===a&&(o.preventDefault(),i.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,window.jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'},share:{tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a href="https://www.facebook.com/sharer/sharer.php?u={{src}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#3b5998"><path d="M27.6 3h-23.2c-.8 0-1.4.6-1.4 1.4v23.1c0 .9.6 1.5 1.4 1.5h12.5v-10.1h-3.4v-3.9h3.4v-2.9c0-3.4 2.1-5.2 5-5.2 1.4 0 2.7.1 3 .2v3.5h-2.1c-1.6 0-1.9.8-1.9 1.9v2.5h3.9l-.5 3.9h-3.4v10.1h6.6c.8 0 1.4-.6 1.4-1.4v-23.2c.1-.8-.5-1.4-1.3-1.4z"></path></svg><span>Facebook</span></a><a href="https://www.pinterest.com/pin/create/button/?url={{src}}&amp;description={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#c92228"><path d="M16 3c-7.2 0-13 5.8-13 13 0 5.5 3.4 10.2 8.3 12.1-.1-1-.2-2.6 0-3.7.2-1 1.5-6.5 1.5-6.5s-.4-.8-.4-1.9c0-1.8 1-3.2 2.4-3.2 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.8-1.1 4.3-.3 1.3.6 2.3 1.9 2.3 2.3 0 4.1-2.4 4.1-6 0-3.1-2.2-5.3-5.4-5.3-3.7 0-5.9 2.8-5.9 5.6 0 1.1.4 2.3 1 3 .1.1.1.2.1.4-.1.4-.3 1.3-.4 1.5-.1.2-.2.3-.4.2-1.6-.8-2.6-3.1-2.6-5 0-4.1 3-7.9 8.6-7.9 4.5 0 8 3.2 8 7.5 0 4.5-2.8 8.1-6.7 8.1-1.3 0-2.6-.7-3-1.5 0 0-.7 2.5-.8 3.1-.3 1.1-1.1 2.5-1.6 3.4 1.2.4 2.5.6 3.8.6 7.2 0 13-5.8 13-13 0-7.1-5.8-12.9-13-12.9z"></path></svg><span>Pinterest</span></a><a href="https://twitter.com/intent/tweet?url={{src}}&amp;text={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#1da1f2"><path d="M30 7.3c-1 .5-2.1.8-3.3.9 1.2-.7 2.1-1.8 2.5-3.2-1.1.7-2.3 1.1-3.6 1.4-1-1.1-2.5-1.8-4.2-1.8-3.2 0-5.7 2.6-5.7 5.7 0 .5.1.9.1 1.3-4.8-.2-9-2.5-11.8-6-.5.9-.8 1.9-.8 3 0 2 1 3.8 2.6 4.8-.9 0-1.8-.3-2.6-.7v.1c0 2.8 2 5.1 4.6 5.6-.5.1-1 .2-1.5.2-.4 0-.7 0-1.1-.1.7 2.3 2.9 3.9 5.4 4-2 1.5-4.4 2.5-7.1 2.5-.5 0-.9 0-1.4-.1 2.5 1.6 5.6 2.6 8.8 2.6 10.6 0 16.3-8.8 16.3-16.3v-.7c1.1-1 2-2 2.8-3.2z"></path></svg><span>Twitter</span></a></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,n=e.fancybox.getInstance();n&&(t=n.current.opts.share.tpl.replace(/\{\{src\}\}/g,encodeURIComponent(n.current.opts.hash===!1?n.current.src:window.location)),n.$caption&&(t=t.replace(/\{\{descr\}\}/g,encodeURIComponent(n.$caption.text()))),e.fancybox.open({src:n.translate(n,t),type:"html",opts:{autoFocus:!1,animationEffect:"fade"}}))})}(document,window.jQuery||jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,a=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:a}}function a(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length||(e=n("#"+n.escapeSelector(t.gallery))),e.length&&(s=!1,e.trigger("click")))}function i(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.hash||(e.$orig?e.$orig.data("fancybox"):""))}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var s=!0,r=null,c=null;n(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,a;e.group[e.currIndex].opts.hash!==!1&&(n=o(),a=i(e),a&&n.gallery&&a==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,a){var l;a&&a.opts.hash!==!1&&(l=i(o),l&&""!==l&&(e.location.hash.indexOf(l)<0&&(o.opts.origHash=e.location.hash),r=l+(o.group.length>1?"-"+(a.index+1):""),"replaceState"in e.history?(c&&clearTimeout(c),c=setTimeout(function(){e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+r),c=null,s=!1},300)):e.location.hash=r))},"beforeClose.fb":function(o,a,s){var l,u;c&&clearTimeout(c),s.opts.hash!==!1&&(l=i(a),u=a&&a.opts.origHash?a.opts.origHash:"",l&&""!==l&&("replaceState"in history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+u):(e.location.hash=u,n(e).scrollTop(a.scrollTop).scrollLeft(a.scrollLeft))),r=null)}}),n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?!r||r===t.gallery+"-"+t.index||1===t.index&&r==t.gallery||(r=null,n.fancybox.close()):""!==t.gallery&&a(t)}),setTimeout(function(){a(o())},50))})}(document,window,window.jQuery||jQuery);
/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});
/*jquery.mb.YTPlayer 15-11-2017
 _ jquery.mb.components 
 _ email: matteo@open-lab.com 
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */
function onYouTubeIframeAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}function uncamel(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+jQuery/)?""+a+b:a}function setFilter(a,b,c){var d=uncamel(b),e=jQuery.browser.mozilla?"":jQuery.CSS.sfx;a[e+"filter"]=a[e+"filter"]||"",c=setUnit(c>jQuery.CSS.filters[b].max?jQuery.CSS.filters[b].max:c,jQuery.CSS.filters[b].unit),a[e+"filter"]+=d+"("+c+") ",delete a[b]}function isTouchSupported(){var a=nAgt.msMaxTouchPoints,b="ontouchstart"in document.createElement("div");return a||b?!0:!1}var ytp=ytp||{},getYTPVideoID=function(a){var b,c;return a.indexOf("youtu.be")>0?(b=a.substr(a.lastIndexOf("/")+1,a.length),c=b.indexOf("?list=")>0?b.substr(b.lastIndexOf("="),b.length):null,b=c?b.substr(0,b.lastIndexOf("?")):b):a.indexOf("http")>-1?(b=a.match(/[\\?&]v=([^&#]*)/)[1],c=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null):(b=a.length>15?null:a,c=b?null:a),{videoID:b,playlistID:c}};!function(jQuery,ytp){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"3.1.2",build:"6510",author:"Matteo Bicocchi (pupunzi)",apiKey:"",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:50,addRaster:!1,mask:!1,opacity:1,quality:"default",mute:!1,loop:!0,fadeOnStartTime:500,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnBlur:!0,realfullscreen:!0,mobileFallbackImage:null,gaTrack:!0,optimizeDisplay:!0,remember_last_time:!1,playOnlyIfVisible:!1,anchor:"center,center",onReady:function(a){},onError:function(a,b){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},controlBar:null,locationProtocol:"https:",filters:{grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},YTPlayer.state=0,YTPlayer.filters=jQuery.mbYTPlayer.filters,YTPlayer.filtersEnabled=!0,YTPlayer.id=YTPlayer.id||"YTP_"+(new Date).getTime(),$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"undefined"!=typeof property&&"undefined"!=typeof property.vol&&0===property.vol&&(property.vol=1,property.mute=!0),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property),"true"==YTPlayer.opt.loop&&(YTPlayer.opt.loop=9999),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1;var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};YTPlayer.opt.realfullscreen=isIframe()?!1:YTPlayer.opt.realfullscreen,$YTPlayer.attr("id")||$YTPlayer.attr("id","ytp_"+(new Date).getTime());var playerID="iframe_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0,YTPlayer.videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:!1,YTPlayer.playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:!1,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"1":"3";var start_from_last=0;jQuery.mbCookie.get("YTPlayer_start_from"+YTPlayer.videoID)&&(start_from_last=parseFloat(jQuery.mbCookie.get("YTPlayer_start_from"+YTPlayer.videoID))),YTPlayer.opt.remember_last_time&&start_from_last&&(YTPlayer.start_from_last=start_from_last,jQuery.mbCookie.remove("YTPlayer_start_from"+YTPlayer.videoID)),YTPlayer.canPlayOnMobile=jQuery.mbBrowser.mobile;var playerVars={modestbranding:1,autoplay:0,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations,playsinline:jQuery.browser.mobile?1:0};if(document.createElement("video").canPlayType&&jQuery.extend(playerVars,{html5:1}),jQuery.mbBrowser.msie&&jQuery.mbBrowser.version<9&&(this.opt.opacity=1),YTPlayer.isPlayer="self"==YTPlayer.opt.containment,YTPlayer.opt.containment=jQuery("self"==YTPlayer.opt.containment?this:YTPlayer.opt.containment),YTPlayer.isBackground=YTPlayer.opt.containment.is("body"),YTPlayer.isPlayer&&(YTPlayer.inlineWrapper=jQuery("<div/>").addClass("inline-YTPlayer"),YTPlayer.inlineWrapper.css({position:"relative",maxWidth:YTPlayer.opt.containment.css("width")}),YTPlayer.opt.containment.width("100%"),YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper),YTPlayer.opt.containment.css({position:"relative",paddingBottom:"56.25%",overflow:"hidden",height:0})),!YTPlayer.isBackground||!ytp.backgroundIsInited){YTPlayer.canPlayOnMobile&&YTPlayer.isBackground&&(YTPlayer.opt.showControls=!1),YTPlayer.isPlayer||$YTPlayer.hide(),YTPlayer.overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay"),YTPlayer.isPlayer&&YTPlayer.overlay.on("click",function(){$YTPlayer.YTPTogglePlay()}),YTPlayer.wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+YTPlayer.id),YTPlayer.wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0});var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox");if(playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),YTPlayer.wrapper.append(playerBox),playerBox.css({opacity:1}),playerBox.after(YTPlayer.overlay),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),YTPlayer.wrapper.css({position:"fixed",top:0,left:0,zIndex:0}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(YTPlayer.wrapper),YTPlayer.isBackground||YTPlayer.overlay.on("mouseenter",function(){YTPlayer.controlBar&&YTPlayer.controlBar.length&&YTPlayer.controlBar.addClass("visible")}).on("mouseleave",function(){YTPlayer.controlBar&&YTPlayer.controlBar.length&&YTPlayer.controlBar.removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100),jQuery.mbBrowser.mobile&&YTPlayer.canPlayOnMobile&&jQuery("body").one("touchstart",function(){YTPlayer.player.playVideo()});else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head").prepend(tag)}if(jQuery.mbBrowser.mobile&&!YTPlayer.canPlayOnMobile)return YTPlayer.opt.mobileFallbackImage&&YTPlayer.wrapper.css({backgroundImage:"url("+YTPlayer.opt.mobileFallbackImage+")",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat",opacity:1}),YTPlayer.isPlayer||$YTPlayer.remove(),void jQuery(document).trigger("YTPUnavailable");jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?YTPlayer.isBackground?!0:!1:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){YTPlayer.isInit||(YTPlayer.isInit=!0,new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(a){YTPlayer.player=a.target,YTPlayer.isReady||(YTPlayer.isReady=YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay?!1:!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),jQuery(YTPlayer.playerEl).unselectable(),$YTPlayer.optimizeDisplay(),jQuery(window).off("resize.YTP_"+YTPlayer.id).on("resize.YTP_"+YTPlayer.id,function(){$YTPlayer.optimizeDisplay()}),YTPlayer.opt.remember_last_time&&jQuery(window).on("unload.YTP_"+YTPlayer.id,function(){var a=YTPlayer.player.getCurrentTime();jQuery.mbCookie.set("YTPlayer_start_from"+YTPlayer.videoID,a,0)}),jQuery.mbYTPlayer.checkForState(YTPlayer))},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.preventTrigger)return void(YTPlayer.preventTrigger=!1);YTPlayer.state=state;var eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPRealEnd";break;case 1:eventType="YTPPlay",YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),eventType="YTPBuffering",YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:eventType="YTPCued"}var YTPEvent=jQuery.Event(eventType);YTPEvent.time=YTPlayer.currentTime,YTPlayer.preventTrigger||jQuery(YTPlayer).trigger(YTPEvent)}},onPlaybackQualityChange:function(a){var b=a.target.getPlaybackQuality(),c=jQuery.Event("YTPQualityChange");c.quality=b,jQuery(YTPlayer).trigger(c)},onError:function(a){150==a.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==a.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,a)}}}))}))}),$YTPlayer.off("YTPTime.mask"),jQuery.mbYTPlayer.applyMask(YTPlayer)}})},isOnScreen:function(a){var b=a.wrapper,c=$(window).scrollTop(),d=c+$(window).height(),e=b.offset().top,f=e+b.height()/2;return d>=f&&e>=c},getDataFromAPI:function(a){if(a.videoData=jQuery.mbStorage.get("YTPlayer_data_"+a.videoID),jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer",function(){if(a.hasData&&a.isPlayer&&!a.opt.autoPlay){var b=a.videoData.thumb_max||a.videoData.thumb_high||a.videoData.thumb_medium;a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}}),a.videoData)setTimeout(function(){a.opt.ratio="auto"==a.opt.ratio?16/9:a.opt.ratio,a.dataReceived=!0;var b=jQuery.Event("YTPChanged");b.time=a.currentTime,b.videoId=a.videoID,jQuery(a).trigger(b);var c=jQuery.Event("YTPData");c.prop={};for(var d in a.videoData)c.prop[d]=a.videoData[d];jQuery(a).trigger(c)},a.opt.fadeOnStartTime),a.hasData=!0;else if(jQuery.mbYTPlayer.apiKey)jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//www.googleapis.com/youtube/v3/videos?id="+a.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(b){function c(b){a.videoData={},a.videoData.id=a.videoID,a.videoData.channelTitle=b.channelTitle,a.videoData.title=b.title,a.videoData.description=b.description.length<400?b.description:b.description.substring(0,400)+" ...",a.videoData.aspectratio="auto"==a.opt.ratio?16/9:a.opt.ratio,a.opt.ratio=a.videoData.aspectratio,a.videoData.thumb_max=b.thumbnails.maxres?b.thumbnails.maxres.url:null,a.videoData.thumb_high=b.thumbnails.high?b.thumbnails.high.url:null,a.videoData.thumb_medium=b.thumbnails.medium?b.thumbnails.medium.url:null,jQuery.mbStorage.set("YTPlayer_data_"+a.videoID,a.videoData)}a.dataReceived=!0;var d=jQuery.Event("YTPChanged");d.time=a.currentTime,d.videoId=a.videoID,jQuery(a).trigger(d),c(b.items[0].snippet),a.hasData=!0;var e=jQuery.Event("YTPData");e.prop={};for(var f in a.videoData)e.prop[f]=a.videoData[f];jQuery(a).trigger(e)});else{if(setTimeout(function(){var b=jQuery.Event("YTPChanged");b.time=a.currentTime,b.videoId=a.videoID,jQuery(a).trigger(b)},50),a.isPlayer&&!a.opt.autoPlay){var b=jQuery.mbYTPlayer.locationProtocol+"//i.ytimg.com/vi/"+a.videoID+"/maxresdefault.jpg";b&&a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}a.videoData=null,a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio}a.isPlayer&&!a.opt.autoPlay&&(a.loading=jQuery("<div/>").addClass("loading").html("Loading").hide(),jQuery(a).append(a.loading),a.loading.fadeIn())},removeStoredData:function(){jQuery.mbStorage.remove()},getVideoData:function(){var a=this.get(0);return a.videoData},getVideoID:function(){var a=this.get(0);return a.videoID||!1},setVideoQuality:function(a){var b=this.get(0);b.player.setPlaybackQuality(a)},playlist:function(a,b,c){var d=this,e=d.get(0);return e.isPlayList=!0,b&&(a=jQuery.shuffle(a)),e.videoID||(e.videos=a,e.videoCounter=0,e.videoLength=a.length,jQuery(e).data("property",a[0]),jQuery(e).mb_YTPlayer()),"function"==typeof c&&jQuery(e).one("YTPChanged",function(){c(e)}),jQuery(e).on("YTPEnd",function(){jQuery(e).playNext()}),this},playNext:function(){var a=this.get(0);return a.checkForStartAt&&(clearInterval(a.checkForStartAt),clearInterval(a.getState)),a.videoCounter++,a.videoCounter>=a.videoLength&&(a.videoCounter=0),jQuery(a).YTPChangeMovie(a.videos[a.videoCounter]),this},playPrev:function(){var a=this.get(0);return a.checkForStartAt&&(clearInterval(a.checkForStartAt),clearInterval(a.getState)),a.videoCounter--,a.videoCounter<0&&(a.videoCounter=a.videoLength-1),jQuery(a).YTPChangeMovie(a.videos[a.videoCounter]),this},playIndex:function(a){var b=this.get(0);return a-=1,b.checkForStartAt&&(clearInterval(b.checkForStartAt),clearInterval(b.getState)),b.videoCounter=a,b.videoCounter>=b.videoLength-1&&(b.videoCounter=b.videoLength-1),jQuery(b).YTPChangeMovie(b.videos[b.videoCounter]),this},changeMovie:function(a){var b=this,c=b.get(0);c.opt.startAt=0,c.opt.stopAt=0,c.opt.mask=!1,c.opt.mute=!0,c.hasData=!1,c.hasChanged=!0,c.player.loopTime=void 0,a&&jQuery.extend(c.opt,a),c.videoID=getYTPVideoID(c.opt.videoURL).videoID,"true"==c.opt.loop&&(c.opt.loop=9999),jQuery(c.playerEl).CSSAnimate({opacity:0},c.opt.fadeOnStartTime,function(){var a=jQuery.Event("YTPChangeMovie");a.time=c.currentTime,a.videoId=c.videoID,jQuery(c).trigger(a),jQuery(c).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+c.videoID),1,c.opt.quality),jQuery(c).optimizeDisplay(),jQuery.mbYTPlayer.checkForState(c),jQuery.mbYTPlayer.getDataFromAPI(c)}),jQuery.mbYTPlayer.applyMask(c)},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var a=this.get(0);return ytp.YTAPIReady=!0,ytp.backgroundIsInited=!1,a.isInit=!1,a.videoID=null,a.isReady=!1,a.wrapper.remove(),jQuery("#controlBar_"+a.id).remove(),clearInterval(a.checkForStartAt),clearInterval(a.getState),this},fullscreen:function(real){function hideMouse(){YTPlayer.overlay.css({cursor:"none"})}function RunPrefixMethod(a,b){for(var c,d,e=["webkit","moz","ms","o",""],f=0;f<e.length&&!a[c];){if(c=b,""==e[f]&&(c=c.substr(0,1).toLowerCase()+c.substr(1)),c=e[f]+c,d=typeof a[c],"undefined"!=d)return e=[e[f]],"function"==d?a[c]():a[c];f++}}function launchFullscreen(a){RunPrefixMethod(a,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isPlayer?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.mbBrowser.mozilla?"mozfullscreenchange":jQuery.mbBrowser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var a=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");a?(jQuery(YTPlayer).YTPSetVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("YTPFullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}return YTPlayer.isAlone?(jQuery(document).off("mousemove.YTPlayer"),clearTimeout(YTPlayer.hideCursor),YTPlayer.overlay.css({cursor:"auto"}),real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(jQuery(document).on("mousemove.YTPlayer",function(a){YTPlayer.overlay.css({cursor:"auto"}),clearTimeout(YTPlayer.hideCursor),jQuery(a.target).parents().is(".mb_YTPBar")||(YTPlayer.hideCursor=setTimeout(hideMouse,3e3))}),hideMouse(),real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("YTPFullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},2*YTPlayer.opt.fadeOnStartTime),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},YTPlayer.opt.fadeOnStartTime)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},2*YTPlayer.opt.fadeOnStartTime),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0),this},toggleLoops:function(){var a=this.get(0),b=a.opt;return 1==b.loop?b.loop=0:(b.startAt?a.player.seekTo(b.startAt):a.player.playVideo(),b.loop=1),this},play:function(){var a=this.get(0);if(!a.isReady)return this;a.player.playVideo(),a.wrapper.is(":visible")||a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},a.opt.fadeOnStartTime),jQuery(a.playerEl).is(":visible")||jQuery(a.playerEl).CSSAnimate({opacity:1},2*a.opt.fadeOnStartTime);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.pause),a.state=1,a.orig_background=jQuery(a).css("background-image"),this},togglePlay:function(a){var b=this.get(0);return 1==b.state?this.YTPPause():this.YTPPlay(),"function"==typeof a&&a(b.state),this},stop:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.play),a.player.stopVideo(),this},pause:function(){var a=this.get(0);return a.player.pauseVideo(),a.state=2,this},seekTo:function(a){var b=this.get(0);return b.player.seekTo(a,!0),this},setVolume:function(a){var b=this.get(0);if(b.player.length)return a||b.opt.vol||0!=b.player.getVolume()?!a&&b.player.getVolume()>0||a&&b.opt.vol==a?b.isMute?jQuery(b).YTPUnmute():jQuery(b).YTPMute():(b.opt.vol=a,b.player.setVolume(b.opt.vol),b.volumeBar&&b.volumeBar.length&&b.volumeBar.updateSliderVal(a)):jQuery(b).YTPUnmute(),this},toggleVolume:function(){var a=this.get(0);if(a)return a.player.isMuted()?(jQuery(a).YTPUnmute(),!0):(jQuery(a).YTPMute(),!1)},mute:function(){var a=this.get(0);if(!a.isMute){a.player.mute(),a.isMute=!0,a.player.setVolume(0),a.volumeBar&&a.volumeBar.length&&a.volumeBar.width()>10&&a.volumeBar.updateSliderVal(0);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.unmute),jQuery(a).addClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.addClass("muted");var d=jQuery.Event("YTPMuted");return d.time=a.currentTime,a.preventTrigger||jQuery(a).trigger(d),this}},unmute:function(){var a=this.get(0);if(a.isMute){a.player.unMute(),a.isMute=!1,a.player.setVolume(a.opt.vol),a.volumeBar&&a.volumeBar.length&&a.volumeBar.updateSliderVal(a.opt.vol>10?a.opt.vol:10);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.mute),jQuery(a).removeClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.removeClass("muted");var d=jQuery.Event("YTPUnmuted");return d.time=a.currentTime,a.preventTrigger||jQuery(a).trigger(d),this}},applyFilter:function(a,b){return this.each(function(){var c=this;c.filters[a].value=b,c.filtersEnabled&&jQuery(c).YTPEnableFilters()})},applyFilters:function(a){return this.each(function(){var b=this;if(!b.isReady)return void jQuery(b).on("YTPReady",function(){jQuery(b).YTPApplyFilters(a)});for(var c in a)jQuery(b).YTPApplyFilter(c,a[c]);jQuery(b).trigger("YTPFiltersApplied")})},toggleFilter:function(a,b){return this.each(function(){var c=this;c.filters[a].value?c.filters[a].value=0:c.filters[a].value=b,c.filtersEnabled&&jQuery(this).YTPEnableFilters()})},toggleFilters:function(a){return this.each(function(){var b=this;b.filtersEnabled?(jQuery(b).trigger("YTPDisableFilters"),jQuery(b).YTPDisableFilters()):(jQuery(b).YTPEnableFilters(),jQuery(b).trigger("YTPEnableFilters")),"function"==typeof a&&a(b.filtersEnabled)})},disableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl);b.css("-webkit-filter",""),b.css("filter",""),a.filtersEnabled=!1})},enableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl),c="";for(var d in a.filters)a.filters[d].value&&(c+=d.replace("_","-")+"("+a.filters[d].value+a.filters[d].unit+") ");b.css("-webkit-filter",c),b.css("filter",c),a.filtersEnabled=!0})},removeFilter:function(a,b){return this.each(function(){var c=this;if("function"==typeof a&&(b=a,a=null),a)jQuery(this).YTPApplyFilter(a,0),"function"==typeof b&&b(a);else for(var d in c.filters)jQuery(this).YTPApplyFilter(d,0),"function"==typeof b&&b(d)})},getFilters:function(){var a=this.get(0);return a.filters},addMask:function(a){var b=this.get(0);a||(a=b.actualMask);var c=jQuery("<img/>").attr("src",a).on("load",function(){b.overlay.CSSAnimate({opacity:0},b.opt.fadeOnStartTime,function(){b.hasMask=!0,c.remove(),b.overlay.css({backgroundImage:"url("+a+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"}),b.overlay.CSSAnimate({opacity:1},b.opt.fadeOnStartTime)})});return this},removeMask:function(){var a=this.get(0);return a.overlay.CSSAnimate({opacity:0},a.opt.fadeOnStartTime,function(){a.hasMask=!1,a.overlay.css({backgroundImage:"",backgroundRepeat:"",backgroundPosition:"",backgroundSize:""}),a.overlay.CSSAnimate({opacity:1},a.opt.fadeOnStartTime)}),this},applyMask:function(a){var b=jQuery(a);if(b.off("YTPTime.mask"),a.opt.mask)if("string"==typeof a.opt.mask)b.YTPAddMask(a.opt.mask),a.actualMask=a.opt.mask;else if("object"==typeof a.opt.mask){for(var c in a.opt.mask)if(a.opt.mask[c]){jQuery("<img/>").attr("src",a.opt.mask[c])}a.opt.mask[0]&&b.YTPAddMask(a.opt.mask[0]),b.on("YTPTime.mask",function(c){for(var d in a.opt.mask)c.time==d&&(a.opt.mask[d]?(b.YTPAddMask(a.opt.mask[d]),a.actualMask=a.opt.mask[d]):b.YTPRemoveMask())})}return this},toggleMask:function(){var a=this.get(0),b=$(a);return a.hasMask?b.YTPRemoveMask():b.YTPAddMask(),this},manageProgress:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPProgress"),d=b.find(".mb_YTPLoaded"),e=b.find(".mb_YTPseekbar"),f=c.outerWidth(),g=Math.floor(a.player.getCurrentTime()),h=Math.floor(a.player.getDuration()),i=g*f/h,j=0,k=100*a.player.getVideoLoadedFraction();return d.css({left:j,width:k+"%"}),e.css({left:0,width:i}),{totalTime:h,currentTime:g}},buildControls:function(YTPlayer){var data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){YTPlayer.controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).YTPPause():jQuery(YTPlayer).YTPPlay()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).YTPUnmute():jQuery(YTPlayer).YTPMute()}),volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});YTPlayer.volumeBar=volumeBar;var idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(a){timeBar.css({width:a.clientX-timeBar.offset().left}),YTPlayer.timeW=a.clientX-timeBar.offset().left,YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});var b=Math.floor(YTPlayer.player.getDuration());YTPlayer["goto"]=timeBar.outerWidth()*b/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]),!0),YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),YTPlayer.controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(YTPlayer.controlBar):(YTPlayer.controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(YTPlayer.controlBar)),volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(a){0==a.value?jQuery(YTPlayer).YTPMute():jQuery(YTPlayer).YTPUnmute(),YTPlayer.player.setVolume(a.value),YTPlayer.isMute||(YTPlayer.opt.vol=a.value)}})}},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?100:400;return clearInterval(YTPlayer.getState),jQuery.contains(document,YTPlayer)?(jQuery.mbYTPlayer.checkForStart(YTPlayer),void(YTPlayer.getState=setInterval(function(){var prog=jQuery(YTPlayer).YTPManageProgress(),$YTPlayer=jQuery(YTPlayer),data=YTPlayer.opt,startAt=YTPlayer.start_from_last?YTPlayer.start_from_last:YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;YTPlayer.start_from_last=null;var stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.currentTime!=prog.currentTime){var YTPEvent=jQuery.Event("YTPTime");YTPEvent.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(YTPEvent)}if(YTPlayer.currentTime=prog.currentTime,YTPlayer.totalTime=YTPlayer.player.getDuration(),0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,$YTPlayer.YTPPlay()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.YTPPause())),YTPlayer.opt.playOnlyIfVisible){var isOnScreen=jQuery.mbYTPlayer.isOnScreen(YTPlayer);isOnScreen?$YTPlayer.YTPPlay():$YTPlayer.YTPPause()}if(YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact?(YTPlayer.controlBar.addClass("compact"),YTPlayer.isCompact=!0,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)):YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact&&(YTPlayer.controlBar.removeClass("compact"),YTPlayer.isCompact=!1,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),1==YTPlayer.player.getPlayerState()&&(parseFloat(YTPlayer.player.getDuration()-.5)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},1e3),YTPlayer.isPlayList){if(!data.loop||data.loop>0&&YTPlayer.player.loopTime===data.loop-1){YTPlayer.player.loopTime=void 0,clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.currentTime,void jQuery(YTPlayer).trigger(YTPEnd)}}else if(!data.loop||data.loop>0&&YTPlayer.player.loopTime===data.loop-1)return YTPlayer.player.loopTime=void 0,YTPlayer.preventTrigger=!0,YTPlayer.state=2,jQuery(YTPlayer).YTPPause(),void YTPlayer.wrapper.CSSAnimate({opacity:0},YTPlayer.opt.fadeOnStartTime,function(){YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);var a=jQuery.Event("YTPEnd");a.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(a),YTPlayer.player.seekTo(startAt,!0),YTPlayer.isBackground?YTPlayer.orig_background&&jQuery(YTPlayer).css("background-image",YTPlayer.orig_background):YTPlayer.opt.backgroundUrl&&YTPlayer.isPlayer&&(YTPlayer.opt.backgroundUrl=YTPlayer.opt.backgroundUrl||YTPlayer.orig_background,YTPlayer.opt.containment.css({background:"url("+YTPlayer.opt.backgroundUrl+") center center",backgroundSize:"cover"}))});YTPlayer.player.loopTime=YTPlayer.player.loopTime?++YTPlayer.player.loopTime:1,startAt=startAt||1,YTPlayer.preventTrigger=!0,YTPlayer.state=2,jQuery(YTPlayer).YTPPause(),YTPlayer.player.seekTo(startAt,!0),$YTPlayer.YTPPlay()}},interval))):(jQuery(YTPlayer).YTPPlayerDestroy(),clearInterval(YTPlayer.getState),void clearInterval(YTPlayer.checkForStartAt))},checkForStart:function(a){var b=jQuery(a);if(!jQuery.contains(document,a))return void jQuery(a).YTPPlayerDestroy();if(a.preventTrigger=!0,a.state=2,jQuery(a).YTPPlay(),jQuery(a).YTPPause(),jQuery(a).muteYTPVolume(),jQuery("#controlBar_"+a.id).remove(),a.controlBar=!1,a.opt.showControls&&jQuery.mbYTPlayer.buildControls(a),a.overlay)if(a.opt.addRaster){var c="dot"==a.opt.addRaster?"raster-dot":"raster";a.overlay.addClass(a.isRetina?c+" retina":c)}else a.overlay.removeClass(function(a,b){var c=b.split(" "),d=[];return jQuery.each(c,function(a,b){/raster.*/.test(b)&&d.push(b)}),d.push("retina"),d.join(" ")});var d=a.start_from_last?a.start_from_last:a.opt.startAt?a.opt.startAt:1;a.start_from_last=null,a.player.playVideo(),a.player.seekTo(d,!0),clearInterval(a.checkForStartAt),jQuery(a).YTPMute(),a.checkForStartAt=setInterval(function(){var c=a.player.getVideoLoadedFraction()>=d/a.player.getDuration();if(a.player.getDuration()>0&&a.player.getCurrentTime()>=d&&c){clearInterval(a.checkForStartAt),"function"==typeof a.opt.onReady&&a.opt.onReady(a),a.isReady=!0;var e=jQuery.Event("YTPReady");if(e.time=a.currentTime,jQuery(a).trigger(e),a.preventTrigger=!0,a.state=2,jQuery(a).YTPPause(),a.opt.mute||jQuery(a).YTPUnmute(),a.preventTrigger=!1,a.opt.autoPlay){b.YTPPlay();var f=jQuery.Event("YTPStart");f.time=a.currentTime,jQuery(a).trigger(f),jQuery(a.playerEl).css({opacity:1}),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},2*a.opt.fadeOnStartTime),"mac"==jQuery.mbBrowser.os.name&&jQuery.mbBrowser.safari&&jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion,"10.1")<0&&(a.safariPlay=setInterval(function(){
1!=a.state?b.YTPPlay():clearInterval(a.safariPlay)},10)),b.one("YTPReady",function(){b.YTPPlay()})}else setTimeout(function(){a.player.pauseVideo(),a.player.seekTo(d,!0),a.isPlayer||(jQuery(a.playerEl).CSSAnimate({opacity:1},a.opt.fadeOnStartTime),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},a.opt.fadeOnStartTime))},250),a.controlBar.length&&a.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);a.isPlayer&&!a.opt.autoPlay&&a.loading&&a.loading.length&&(a.loading.html("Ready"),setTimeout(function(){a.loading.fadeOut()},100)),a.controlBar&&a.controlBar.length&&a.controlBar.slideDown(1e3)}else"mac"==jQuery.mbBrowser.os.name&&jQuery.mbBrowser.safari&&jQuery.mbBrowser.fullVersion&&jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion,"10.1")<0&&(a.player.playVideo(),d>=0&&a.player.seekTo(d,!0))},100)},getTime:function(){var a=this.get(0);return jQuery.mbYTPlayer.formatTime(a.currentTime)},getTotalTime:function(){var a=this.get(0);return jQuery.mbYTPlayer.formatTime(a.totalTime)},formatTime:function(a){var b=Math.floor(a/60),c=Math.floor(a-60*b);return(9>=b?"0"+b:b)+" : "+(9>=c?"0"+c:c)},setAnchor:function(a){var b=this;b.optimizeDisplay(a)},getAnchor:function(){var a=this.get(0);return a.opt.anchor}},jQuery.fn.optimizeDisplay=function(anchor){var YTPlayer=this.get(0),vid={};YTPlayer.opt.anchor=anchor||YTPlayer.opt.anchor,YTPlayer.opt.anchor="undefined "!=typeof YTPlayer.opt.anchor?YTPlayer.opt.anchor:"center,center";var YTPAlign=YTPlayer.opt.anchor.split(",");if(YTPlayer.opt.optimizeDisplay){var abundance=YTPlayer.isPlayer?0:180,win={},el=YTPlayer.wrapper;win.width=el.outerWidth(),win.height=el.outerHeight()+abundance,YTPlayer.opt.ratio=eval(YTPlayer.opt.ratio),vid.width=win.width,vid.height=Math.ceil(vid.width/YTPlayer.opt.ratio),vid.marginTop=Math.ceil(-((vid.height-win.height)/2)),vid.marginLeft=0;var lowest=vid.height<win.height;lowest&&(vid.height=win.height,vid.width=Math.ceil(vid.height*YTPlayer.opt.ratio),vid.marginTop=0,vid.marginLeft=Math.ceil(-((vid.width-win.width)/2)));for(var a in YTPAlign)if(YTPAlign.hasOwnProperty(a)){var al=YTPAlign[a].replace(/ /g,"");switch(al){case"top":vid.marginTop=lowest?-((vid.height-win.height)/2):0;break;case"bottom":vid.marginTop=lowest?0:-(vid.height-win.height);break;case"left":vid.marginLeft=0;break;case"right":vid.marginLeft=lowest?-(vid.width-win.width):0;break;default:vid.width>win.width&&(vid.marginLeft=-((vid.width-win.width)/2))}}}else vid.width="100%",vid.height="100%",vid.marginTop=0,vid.marginLeft=0;jQuery(YTPlayer.playerEl).css({width:vid.width,height:vid.height,marginTop:vid.marginTop,marginLeft:vid.marginLeft,maxWidth:"initial"})},jQuery.shuffle=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b},jQuery.fn.unselectable=function(){return this.each(function(){jQuery(this).css({"-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).attr("unselectable","on")})},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play,jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay,jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop,jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause,jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist,jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext,jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.YTPPlayIndex=jQuery.mbYTPlayer.playIndex,jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute,jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute,jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume,jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData,jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter,jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters,jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter,jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters,jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter,jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters,jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters,jQuery.fn.YTPGetFilters=jQuery.mbYTPlayer.getFilters,jQuery.fn.YTPGetTime=jQuery.mbYTPlayer.getTime,jQuery.fn.YTPGetTotalTime=jQuery.mbYTPlayer.getTotalTime,jQuery.fn.YTPAddMask=jQuery.mbYTPlayer.addMask,jQuery.fn.YTPRemoveMask=jQuery.mbYTPlayer.removeMask,jQuery.fn.YTPToggleMask=jQuery.mbYTPlayer.toggleMask,jQuery.fn.YTPSetAnchor=jQuery.mbYTPlayer.setAnchor,jQuery.fn.YTPGetAnchor=jQuery.mbYTPlayer.getAnchor,jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.play,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stop,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pause,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekTo,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.mute,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmute,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPGetDataFromFeed=jQuery.mbYTPlayer.getVideoData}(jQuery,ytp),jQuery.support.CSStransition=function(){var a=document.body||document.documentElement,b=a.style;return void 0!==b.transition||void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.MsTransition||void 0!==b.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(a){var b=jQuery.extend(!0,{},a);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");for(var c in b){"transform"===c&&(b[jQuery.CSS.sfx+"transform"]=b[c],delete b[c]),"transform-origin"===c&&(b[jQuery.CSS.sfx+"transform-origin"]=a[c],delete b[c]),"filter"!==c||jQuery.browser.mozilla||(b[jQuery.CSS.sfx+"filter"]=a[c],delete b[c]),"blur"===c&&setFilter(b,"blur",a[c]),"brightness"===c&&setFilter(b,"brightness",a[c]),"contrast"===c&&setFilter(b,"contrast",a[c]),"grayscale"===c&&setFilter(b,"grayscale",a[c]),"hueRotate"===c&&setFilter(b,"hueRotate",a[c]),"invert"===c&&setFilter(b,"invert",a[c]),"saturate"===c&&setFilter(b,"saturate",a[c]),"sepia"===c&&setFilter(b,"sepia",a[c]);var d="";"x"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateX("+setUnit(a[c],"px")+")",delete b[c]),"y"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateY("+setUnit(a[c],"px")+")",delete b[c]),"z"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateZ("+setUnit(a[c],"px")+")",delete b[c]),"rotate"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotate("+setUnit(a[c],"deg")+")",delete b[c]),"rotateX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateX("+setUnit(a[c],"deg")+")",delete b[c]),"rotateY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateY("+setUnit(a[c],"deg")+")",delete b[c]),"rotateZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateZ("+setUnit(a[c],"deg")+")",delete b[c]),"scale"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scale("+setUnit(a[c],"")+")",delete b[c]),"scaleX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleX("+setUnit(a[c],"")+")",delete b[c]),"scaleY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleY("+setUnit(a[c],"")+")",delete b[c]),"scaleZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleZ("+setUnit(a[c],"")+")",delete b[c]),"skew"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skew("+setUnit(a[c],"deg")+")",delete b[c]),"skewX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewX("+setUnit(a[c],"deg")+")",delete b[c]),"skewY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewY("+setUnit(a[c],"deg")+")",delete b[c]),"perspective"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" perspective("+setUnit(a[c],"px")+")",delete b[c])}return b},getProp:function(a){var b=[];for(var c in a)b.indexOf(c)<0&&b.push(uncamel(c));return b.join(",")},animate:function(a,b,c,d,e){return this.each(function(){function f(){g.called=!0,g.CSSAIsRunning=!1,h.off(jQuery.CSS.transitionEnd+"."+g.id),clearTimeout(g.timeout),h.css(jQuery.CSS.sfx+"transition",""),"function"==typeof e&&e.apply(g),"function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)}var g=this,h=jQuery(this);g.id=g.id||"CSSA_"+(new Date).getTime();var i=i||{type:"noEvent"};if(g.CSSAIsRunning&&g.eventType==i.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return void(g.CSSqueue=function(){h.CSSAnimate(a,b,c,d,e)});if(g.CSSqueue=null,g.eventType=i.type,0!==h.length&&a){if(a=jQuery.normalizeCss(a),g.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(d=c,c=0),"string"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var j in jQuery.fx.speeds){if(b==j){b=jQuery.fx.speeds[j];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),"string"==typeof e&&(d=e,e=null),!jQuery.support.CSStransition){for(var k in a){if("transform"===k&&delete a[k],"filter"===k&&delete a[k],"transform-origin"===k&&delete a[k],"auto"===a[k]&&delete a[k],"x"===k){var l=a[k],m="left";a[m]=l,delete a[k]}if("y"===k){var l=a[k],m="top";a[m]=l,delete a[k]}("-ms-transform"===k||"-ms-filter"===k)&&delete a[k]}return void h.delay(c).animate(a,b,e)}var n={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};n[d]&&(d=n[d]),h.off(jQuery.CSS.transitionEnd+"."+g.id);var o=jQuery.CSS.getProp(a),p={};jQuery.extend(p,a),p[jQuery.CSS.sfx+"transition-property"]=o,p[jQuery.CSS.sfx+"transition-duration"]=b+"ms",p[jQuery.CSS.sfx+"transition-delay"]=c+"ms",p[jQuery.CSS.sfx+"transition-timing-function"]=d,setTimeout(function(){h.one(jQuery.CSS.transitionEnd+"."+g.id,f),h.css(p)},1),g.timeout=setTimeout(function(){return g.called||!e?(g.called=!1,void(g.CSSAIsRunning=!1)):(h.css(jQuery.CSS.sfx+"transition",""),e.apply(g),g.CSSAIsRunning=!1,void("function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)))},b+c+10)}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(a){return this.each(function(){var b=jQuery(this),c=jQuery.normalizeCss(a);b.css(c)})};var nAgt=navigator.userAgent;jQuery.browser=jQuery.browser||{},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.edge=!1,jQuery.browser.ua=nAgt;var getOS=function(){var a={version:"Unknown version",name:"Unknown OS"};return-1!=navigator.appVersion.indexOf("Win")&&(a.name="Windows"),-1!=navigator.appVersion.indexOf("Mac")&&0>navigator.appVersion.indexOf("Mobile")&&(a.name="Mac"),-1!=navigator.appVersion.indexOf("Linux")&&(a.name="Linux"),/Mac OS X/.test(nAgt)&&!/Mobile/.test(nAgt)&&(a.version=/Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],a.version=a.version.replace(/_/g,".").substring(0,5)),/Windows/.test(nAgt)&&(a.version="Unknown.Unknown"),/Windows NT 5.1/.test(nAgt)&&(a.version="5.1"),/Windows NT 6.0/.test(nAgt)&&(a.version="6.0"),/Windows NT 6.1/.test(nAgt)&&(a.version="6.1"),/Windows NT 6.2/.test(nAgt)&&(a.version="6.2"),/Windows NT 10.0/.test(nAgt)&&(a.version="10.0"),/Linux/.test(nAgt)&&/Linux/.test(nAgt)&&(a.version="Unknown.Unknown"),a.name=a.name.toLowerCase(),a.major_version="Unknown",a.minor_version="Unknown","Unknown.Unknown"!=a.version&&(a.major_version=parseFloat(a.version.split(".")[0]),a.minor_version=parseFloat(a.version.split(".")[1])),a};jQuery.browser.os=getOS(),jQuery.browser.hasTouch=isTouchSupported(),jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion,jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width(),jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt),jQuery.mbBrowser=jQuery.browser,jQuery.browser.versionCompare=function(a,b){if("stringstring"!=typeof a+typeof b)return!1;for(var c=a.split("."),d=b.split("."),e=0,f=Math.max(c.length,d.length);f>e;e++){if(c[e]&&!d[e]&&0<parseInt(c[e])||parseInt(c[e])>parseInt(d[e]))return 1;if(d[e]&&!c[e]&&0<parseInt(d[e])||parseInt(c[e])<parseInt(d[e]))return-1}return 0},function(a){a.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:a.browser.mobile?"touchstart":"mousedown",end:a.browser.mobile?"touchend":"mouseup",move:a.browser.mobile?"touchmove":"mousemove"},init:function(b){return this.each(function(){var c=this,d=a(c);d.addClass("simpleSlider"),c.opt={},a.extend(c.opt,a.simpleSlider.defaults,b),a.extend(c.opt,d.data());var e="h"==c.opt.orientation?"horizontal":"vertical";e=a("<div/>").addClass("level").addClass(e),d.prepend(e),c.level=e,d.css({cursor:"default"}),"auto"==c.opt.scale&&(c.opt.scale=a(c).outerWidth()),d.updateSliderVal(),c.opt.readonly||(d.on(a.simpleSlider.events.start,function(b){a.browser.mobile&&(b=b.changedTouches[0]),c.canSlide=!0,d.updateSliderVal(b),"h"==c.opt.orientation?d.css({cursor:"col-resize"}):d.css({cursor:"row-resize"}),a.browser.mobile||(b.preventDefault(),b.stopPropagation())}),a(document).on(a.simpleSlider.events.move,function(b){a.browser.mobile&&(b=b.changedTouches[0]),c.canSlide&&(a(document).css({cursor:"default"}),d.updateSliderVal(b),a.browser.mobile||(b.preventDefault(),b.stopPropagation()))}).on(a.simpleSlider.events.end,function(){a(document).css({cursor:"auto"}),c.canSlide=!1,d.css({cursor:"auto"})}))})},updateSliderVal:function(b){var c=this.get(0);if(c.opt){c.opt.initialval="number"==typeof c.opt.initialval?c.opt.initialval:c.opt.initialval(c);var d=a(c).outerWidth(),e=a(c).outerHeight();c.x="object"==typeof b?b.clientX+document.body.scrollLeft-this.offset().left:"number"==typeof b?b*d/c.opt.scale:c.opt.initialval*d/c.opt.scale,c.y="object"==typeof b?b.clientY+document.body.scrollTop-this.offset().top:"number"==typeof b?(c.opt.scale-c.opt.initialval-b)*e/c.opt.scale:c.opt.initialval*e/c.opt.scale,c.y=this.outerHeight()-c.y,c.scaleX=c.x*c.opt.scale/d,c.scaleY=c.y*c.opt.scale/e,c.outOfRangeX=c.scaleX>c.opt.scale?c.scaleX-c.opt.scale:0>c.scaleX?c.scaleX:0,c.outOfRangeY=c.scaleY>c.opt.scale?c.scaleY-c.opt.scale:0>c.scaleY?c.scaleY:0,c.outOfRange="h"==c.opt.orientation?c.outOfRangeX:c.outOfRangeY,c.value="undefined"!=typeof b?"h"==c.opt.orientation?c.x>=this.outerWidth()?c.opt.scale:0>=c.x?0:c.scaleX:c.y>=this.outerHeight()?c.opt.scale:0>=c.y?0:c.scaleY:"h"==c.opt.orientation?c.scaleX:c.scaleY,"h"==c.opt.orientation?c.level.width(Math.floor(100*c.x/d)+"%"):c.level.height(Math.floor(100*c.y/e)),"function"==typeof c.opt.callback&&c.opt.callback(c)}}},a.fn.simpleSlider=a.simpleSlider.init,a.fn.updateSliderVal=a.simpleSlider.updateSliderVal}(jQuery),function(a){a.mbCookie={set:function(a,b,c,d){"object"==typeof b&&(b=JSON.stringify(b)),d=d?"; domain="+d:"";var e=new Date,f="";c>0&&(e.setTime(e.getTime()+864e5*c),f="; expires="+e.toGMTString()),document.cookie=a+"="+b+f+"; path=/"+d},get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))try{return JSON.parse(d.substring(a.length,d.length))}catch(e){return d.substring(a.length,d.length)}}return null},remove:function(b){a.mbCookie.set(b,"",-1)}},a.mbStorage={set:function(a,b){"object"==typeof b&&(b=JSON.stringify(b)),localStorage.setItem(a,b)},get:function(a){if(!localStorage[a])return null;try{return JSON.parse(localStorage[a])}catch(b){return localStorage[a]}},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}}(jQuery);
if($("#map-dark").length){
    function initialize() {
    var mapOptions = {
        zoom: 18,
        scrollwheel: false,
        center: new google.maps.LatLng(51.511522, -0.09304),
        zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
    };
        
    var map = new google.maps.Map(document.getElementById("map-dark"),mapOptions);
    var marker = new google.maps.Marker({
        icon: 'images/pin-two.png',
        position: map.getCenter(),
        map: map
    });
        
        /*If u want an info window*/
        /*var infowindow = new google.maps.InfoWindow({
          content: "bckjdbcsd",
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });*/

    var styles = [
              {elementType: 'geometry', stylers: [{color: "#343f44"}]},
              {elementType: 'labels.text.fill', stylers: [{color: "#95a49e"}]},
              {elementType: 'labels.text.stroke', stylers: [{"visibility": "off"}]},
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#7f9089'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#333f43'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#333f43'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#333f43'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#404a4f'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#525d62'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#525d62'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#495553'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
              }
            ]

    map.setOptions({styles: styles});
}
google.maps.event.addDomListener(window, 'load', initialize);
}
	


jQuery(function ($) {
   "use strict";
   if ($("#googleMap").length) {
      function initialize() {
         var mapOptions = {
            zoom: 16,
            scrollwheel: false,
            center: new google.maps.LatLng(51.496611, -0.137964),
            zoomControl: true,
            gestureHandling: 'cooperative',
            overviewMapControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
         };
         var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
         var marker = new google.maps.Marker({
            icon: "images/pin.jpg",
            animation: google.maps.Animation.BOUNCE,
            position: map.getCenter(),
            title: "Synx",
            map: map
         });

         /*If u want an info window*/
         /*var infowindow = new google.maps.InfoWindow({
           content: "bckjdbcsd",
         });
         marker.addListener('click', function() {
           infowindow.open(map, marker);
         });*/


         var styles = [
            {
               "featureType": "landscape",
               "elementType": "labels",
               "stylers": [
                  {
                     "visibility": "off"
                  },
                  {
                     "color": "#a2a2a2"
                  }
               ]
            },
            {
               "featureType": "transit",
               "elementType": "labels",
               "stylers": [
                  {
                     "visibility": "on"
                  }
               ]
            },
            {
               "featureType": "poi",
               "elementType": "labels",
               "stylers": [
                  {
                     "visibility": "off"
                  }
               ]
            },
            {
               "featureType": "water",
               "elementType": "labels",
               "stylers": [
                  {
                     "visibility": "on"
                  }
               ]
            },
            {
               "featureType": "road",
               "elementType": "labels.icon",
               "stylers": [
                  {
                     "visibility": "on"
                  }
               ]
            },
            {
               "stylers": [
                  {
                     "hue": "#bbbbbb"
                  },
                  {
                     "saturation": -100
                  },
                  {
                     "gamma": 1
                  },
                  {
                     "lightness": 1
                  }
               ]
            },
            {
               "featureType": "road",
               "elementType": "labels.text.fill",
               "stylers": [
                  {
                     "visibility": "on"
                  },
                  {
                     "lightness": 24
                  }
               ]
            },
            {
               "featureType": "road",
               "elementType": "geometry",
               "stylers": [
                  {
                     "lightness": 57
                  },
               ]
            }
         ]
         map.setOptions({
            styles: styles
         });
      }
      google.maps.event.addDomListener(window, "load", initialize);
   }
});
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/*! Copyright (c) 2016 THE ULTRASOFT (http://theultrasoft.com)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Project: Parallaxie
 * Version: 0.5
 *
 * Requires: jQuery 1.9+
 */

(function( $ ){

    $.fn.parallaxie = function( options ){

        var options = $.extend({
            speed: 0.2,
            repeat: 'no-repeat',
            size: 'cover',
            pos_x: 'center',
            offset: 0,
        }, options );

        this.each(function(){

            var $el = $(this);
            var local_options = $el.data('parallaxie');
            if( typeof local_options != 'object' ) local_options = {};
            local_options = $.extend( {}, options, local_options );

            var image_url = $el.data('image');
            if( typeof image_url == 'undefined' ){
                image_url = $el.css('background-image');
                if( !image_url ) return;

                // APPLY DEFAULT CSS
                var pos_y =  local_options.offset + ($el.offset().top - $(window).scrollTop()) * (1 - local_options.speed );
                $el.css({
                    'background-image': image_url,
                    'background-size': local_options.size,
                    'background-repeat': local_options.repeat,
                    'background-attachment': 'fixed',
                    'background-position': local_options.pos_x + ' ' + pos_y + 'px',
                });

                $(window).scroll( function(){
                        //var pos_y = - ( $(window).scrollTop() - $el.offset().top ) * ( 1 + local_options.speed ) - ( $el.offset().top * local_options.speed );
                        var pos_y =  local_options.offset + ($el.offset().top - $(window).scrollTop()) * (1 - local_options.speed );
                        $el.data( 'pos_y', pos_y );
                        $el.css( 'background-position', local_options.pos_x + ' ' + pos_y + 'px' );
                    }
                );
            }
        });
        return this;
    };
}( jQuery ));
/*!
 * 
 *             SimpleBar.js - v2.4.4
 *             Scrollbars, simpler.
 *             https://grsmto.github.io/simplebar/
 *             
 *             Made by Adrien Grsmto from a fork by Jonathan Nicol
 *             Under MIT License
 *         
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.SimpleBar=n():t.SimpleBar=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),c=e(194),s=r(c),u=e(191),a=r(u),f=e(193),l=r(f);e(169),e(174),e(177),e(178),e(172),e(175),e(173),e(176),e(170),e(171),e(113),e(160),e(179),e(180),e(142),e(143),e(144),e(145),e(148),e(146),e(147),e(149),e(150),e(151),e(152),e(154),e(153),e(141),e(168),e(138),e(139),e(140),e(112),e(165),e(163),e(161),e(166),e(167),e(162),e(164),e(155),e(156),e(157),e(159),e(158),e(110),e(111),e(106),e(109),e(108),e(107),e(66),e(132),e(133),e(135),e(134),e(131),e(137),e(136),e(114),e(115),e(116),e(117),e(118),e(119),e(120),e(121),e(122),e(123),e(125),e(124),e(126),e(127),e(128),e(129),e(130),e(181),e(184),e(182),e(183),e(186),e(185),e(189),e(188),e(187),e(192),e(190);var h=function(){function t(n,e){i(this,t),this.el=n,this.flashTimeout,this.contentEl,this.scrollContentEl,this.dragOffset={x:0,y:0},this.isVisible={x:!0,y:!0},this.scrollOffsetAttr={x:"scrollLeft",y:"scrollTop"},this.sizeAttr={x:"offsetWidth",y:"offsetHeight"},this.scrollSizeAttr={x:"scrollWidth",y:"scrollHeight"},this.offsetAttr={x:"left",y:"top"},this.globalObserver,this.mutationObserver,this.resizeObserver,this.currentAxis,this.options=Object.assign({},t.defaultOptions,e),this.classNames=this.options.classNames,this.scrollbarWidth=(0,s.default)(),this.offsetSize=20,this.flashScrollbar=this.flashScrollbar.bind(this),this.onDragY=this.onDragY.bind(this),this.onDragX=this.onDragX.bind(this),this.onScrollY=this.onScrollY.bind(this),this.onScrollX=this.onScrollX.bind(this),this.drag=this.drag.bind(this),this.onEndDrag=this.onEndDrag.bind(this),this.onMouseEnter=this.onMouseEnter.bind(this),this.recalculate=(0,a.default)(this.recalculate,100,{leading:!0,trailing:!1}),this.init()}return o(t,[{key:"init",value:function(){this.el.SimpleBar=this,this.initDOM(),this.scrollbarX=this.trackX.querySelector("."+this.classNames.scrollbar),this.scrollbarY=this.trackY.querySelector("."+this.classNames.scrollbar),this.scrollContentEl.style.paddingRight=(this.scrollbarWidth||this.offsetSize)+"px",this.scrollContentEl.style.marginBottom="-"+(2*this.scrollbarWidth||this.offsetSize)+"px",this.contentEl.style.paddingBottom=(this.scrollbarWidth||this.offsetSize)+"px",0!==this.scrollbarWidth&&(this.contentEl.style.marginRight="-"+this.scrollbarWidth+"px"),this.recalculate(),this.initListeners()}},{key:"initDOM",value:function(){var t=this;if(Array.from(this.el.children).find(function(n){return n.classList.contains(t.classNames.scrollContent)}))this.trackX=this.el.querySelector("."+this.classNames.track+".horizontal"),this.trackY=this.el.querySelector("."+this.classNames.track+".vertical"),this.scrollContentEl=this.el.querySelector("."+this.classNames.scrollContent),this.contentEl=this.el.querySelector("."+this.classNames.content);else{for(this.scrollContentEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.scrollContentEl.classList.add(this.classNames.scrollContent),this.contentEl.classList.add(this.classNames.content);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.scrollContentEl.appendChild(this.contentEl),this.el.appendChild(this.scrollContentEl)}if(!this.trackX||!this.trackY){var n=document.createElement("div"),e=document.createElement("div");n.classList.add(this.classNames.track),e.classList.add(this.classNames.scrollbar),n.appendChild(e),this.trackX=n.cloneNode(!0),this.trackX.classList.add("horizontal"),this.trackY=n.cloneNode(!0),this.trackY.classList.add("vertical"),this.el.insertBefore(this.trackX,this.el.firstChild),this.el.insertBefore(this.trackY,this.el.firstChild)}this.el.setAttribute("data-simplebar","init")}},{key:"initListeners",value:function(){var t=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),this.scrollbarY.addEventListener("mousedown",this.onDragY),this.scrollbarX.addEventListener("mousedown",this.onDragX),this.scrollContentEl.addEventListener("scroll",this.onScrollY),this.contentEl.addEventListener("scroll",this.onScrollX),"undefined"!=typeof MutationObserver&&(this.mutationObserver=new MutationObserver(function(n){n.forEach(function(n){(t.isChildNode(n.target)||n.addedNodes.length)&&t.recalculate()})}),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this.resizeObserver=new l.default(this.recalculate.bind(this)),this.resizeObserver.observe(this.el)}},{key:"removeListeners",value:function(){this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),this.scrollbarX.removeEventListener("mousedown",this.onDragX),this.scrollbarY.removeEventListener("mousedown",this.onDragY),this.scrollContentEl.removeEventListener("scroll",this.onScrollY),this.contentEl.removeEventListener("scroll",this.onScrollX),this.mutationObserver.disconnect(),this.resizeObserver.disconnect()}},{key:"onDragX",value:function(t){this.onDrag(t,"x")}},{key:"onDragY",value:function(t){this.onDrag(t,"y")}},{key:"onDrag",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";t.preventDefault();var e="y"===n?this.scrollbarY:this.scrollbarX,r="y"===n?t.pageY:t.pageX;this.dragOffset[n]=r-e.getBoundingClientRect()[this.offsetAttr[n]],this.currentAxis=n,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.onEndDrag)}},{key:"drag",value:function(t){var n=void 0,e=void 0,r=void 0;t.preventDefault(),"y"===this.currentAxis?(n=t.pageY,e=this.trackY,r=this.scrollContentEl):(n=t.pageX,e=this.trackX,r=this.contentEl);var i=n-e.getBoundingClientRect()[this.offsetAttr[this.currentAxis]]-this.dragOffset[this.currentAxis],o=i/e[this.sizeAttr[this.currentAxis]],c=o*this.contentEl[this.scrollSizeAttr[this.currentAxis]];r[this.scrollOffsetAttr[this.currentAxis]]=c}},{key:"onEndDrag",value:function(){document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.onEndDrag)}},{key:"resizeScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y",n=void 0,e=void 0,r=void 0,i=void 0,o=void 0;"x"===t?(n=this.trackX,e=this.scrollbarX,r=this.contentEl[this.scrollOffsetAttr[t]],i=this.contentSizeX,o=this.scrollbarXSize):(n=this.trackY,e=this.scrollbarY,r=this.scrollContentEl[this.scrollOffsetAttr[t]],i=this.contentSizeY,o=this.scrollbarYSize);var c=o/i,s=r/(i-o),u=Math.max(~~(c*(o-2))-2,this.options.scrollbarMinSize),a=~~((o-4-u)*s+2);this.isVisible[t]=o<i,this.isVisible[t]?(n.style.visibility="visible","x"===t?(e.style.left=a+"px",e.style.width=u+"px"):(e.style.top=a+"px",e.style.height=u+"px")):n.style.visibility="hidden"}},{key:"onScrollX",value:function(){this.flashScrollbar("x")}},{key:"onScrollY",value:function(){this.flashScrollbar("y")}},{key:"onMouseEnter",value:function(){this.flashScrollbar("x"),this.flashScrollbar("y")}},{key:"flashScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.resizeScrollbar(t),this.showScrollbar(t)}},{key:"showScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.isVisible[t]&&("x"===t?this.scrollbarX.classList.add("visible"):this.scrollbarY.classList.add("visible"),this.options.autoHide&&("number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout),this.flashTimeout=window.setTimeout(this.hideScrollbar.bind(this),1e3)))}},{key:"hideScrollbar",value:function(){this.scrollbarX.classList.remove("visible"),this.scrollbarY.classList.remove("visible"),"number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout)}},{key:"recalculate",value:function(){this.contentSizeX=this.contentEl[this.scrollSizeAttr.x],this.contentSizeY=this.contentEl[this.scrollSizeAttr.y]-(this.scrollbarWidth||this.offsetSize),this.scrollbarXSize=this.trackX[this.sizeAttr.x],this.scrollbarYSize=this.trackY[this.sizeAttr.y],this.resizeScrollbar("x"),this.resizeScrollbar("y"),this.options.autoHide||(this.showScrollbar("x"),this.showScrollbar("y"))}},{key:"getScrollElement",value:function(){return this.scrollContentEl}},{key:"getContentElement",value:function(){return this.contentEl}},{key:"unMount",value:function(){this.removeListeners(),this.el.SimpleBar=null}},{key:"isChildNode",value:function(t){return null!==t&&(t===this.el||this.isChildNode(t.parentNode))}}],[{key:"initHtmlApi",value:function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(function(n){n.forEach(function(n){Array.from(n.addedNodes).forEach(function(n){1===n.nodeType&&(n.hasAttribute("data-simplebar")?!n.SimpleBar&&new t(n,t.getElOptions(n)):Array.from(n.querySelectorAll("[data-simplebar]")).forEach(function(n){!n.SimpleBar&&new t(n,t.getElOptions(n))}))}),Array.from(n.removedNodes).forEach(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?t.SimpleBar&&t.SimpleBar.unMount():Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t){t.SimpleBar&&t.SimpleBar.unMount()}))})})}),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements.bind(this)):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))}},{key:"getElOptions",value:function(n){var e=Object.keys(t.htmlAttributes).reduce(function(e,r){var i=t.htmlAttributes[r];return n.hasAttribute(i)&&(e[r]=JSON.parse(n.getAttribute(i)||!0)),e},{});return e}},{key:"removeObserver",value:function(){this.globalObserver.disconnect()}},{key:"initDOMLoadedElements",value:function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(n){n.SimpleBar||new t(n,t.getElOptions(n))})}},{key:"defaultOptions",get:function(){return{autoHide:!0,classNames:{content:"simplebar-content",scrollContent:"simplebar-scroll-content",scrollbar:"simplebar-scrollbar",track:"simplebar-track"},scrollbarMinSize:25}}},{key:"htmlAttributes",get:function(){return{autoHide:"data-simplebar-autohide",scrollbarMinSize:"data-simplebar-scrollbar-min-size"}}}]),t}();n.default=h,h.initHtmlApi(),t.exports=n.default},function(t,n,e){var r=e(3),i=e(34),o=e(11),c=e(16),s=e(12),u="prototype",a=function(t,n,e){var f,l,h,v,p=t&a.F,d=t&a.G,y=t&a.S,g=t&a.P,m=t&a.B,b=d?r:y?r[n]||(r[n]={}):(r[n]||{})[u],_=d?i:i[n]||(i[n]={}),w=_[u]||(_[u]={});d&&(e=n);for(f in e)l=!p&&b&&void 0!==b[f],h=(l?b:e)[f],v=m&&l?s(h,r):g&&"function"==typeof h?s(Function.call,h):h,b&&c(b,f,h,t&a.U),_[f]!=h&&o(_,f,v),g&&w[f]!=h&&(w[f]=h)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(60)("wks"),i=e(22),o=e(3).Symbol,c="function"==typeof o,s=t.exports=function(t){return r[t]||(r[t]=c&&o[t]||(c?o:i)("Symbol."+t))};s.store=r},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(2),i=e(71),o=e(40),c=Object.defineProperty;n.f=e(9)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(20),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n,e){t.exports=!e(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(7),i=e(19);t.exports=e(9)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(17);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(54),i=e(18);t.exports=function(t){return r(i(t))}},function(t,n,e){"use strict";if(e(9)){var r=e(27),i=e(3),o=e(6),c=e(1),s=e(64),u=e(88),a=e(12),f=e(24),l=e(19),h=e(11),v=e(29),p=e(20),d=e(8),y=e(87),g=e(31),m=e(40),b=e(10),_=e(49),w=e(4),S=e(21),x=e(55),E=e(36),O=e(38),M=e(37).f,A=e(65),L=e(22),j=e(5),k=e(33),T=e(48),P=e(61),F=e(66),N=e(26),C=e(44),R=e(46),D=e(47),I=e(67),W=e(7),z=e(15),B=W.f,Y=z.f,X=i.RangeError,G=i.TypeError,V=i.Uint8Array,U="ArrayBuffer",q="Shared"+U,H="BYTES_PER_ELEMENT",K="prototype",J=Array[K],$=u.ArrayBuffer,Q=u.DataView,Z=k(0),tt=k(2),nt=k(3),et=k(4),rt=k(5),it=k(6),ot=T(!0),ct=T(!1),st=F.values,ut=F.keys,at=F.entries,ft=J.lastIndexOf,lt=J.reduce,ht=J.reduceRight,vt=J.join,pt=J.sort,dt=J.slice,yt=J.toString,gt=J.toLocaleString,mt=j("iterator"),bt=j("toStringTag"),_t=L("typed_constructor"),wt=L("def_constructor"),St=s.CONSTR,xt=s.TYPED,Et=s.VIEW,Ot="Wrong length!",Mt=k(1,function(t,n){return Tt(P(t,t[wt]),n)}),At=o(function(){return 1===new V(new Uint16Array([1]).buffer)[0]}),Lt=!!V&&!!V[K].set&&o(function(){new V(1).set({})}),jt=function(t,n){var e=p(t);if(e<0||e%n)throw X("Wrong offset!");return e},kt=function(t){if(w(t)&&xt in t)return t;throw G(t+" is not a typed array!")},Tt=function(t,n){if(!(w(t)&&_t in t))throw G("It is not a typed array constructor!");return new t(n)},Pt=function(t,n){return Ft(P(t,t[wt]),n)},Ft=function(t,n){for(var e=0,r=n.length,i=Tt(t,r);r>e;)i[e]=n[e++];return i},Nt=function(t,n,e){B(t,n,{get:function(){return this._d[e]}})},Ct=function(t){var n,e,r,i,o,c,s=S(t),u=arguments.length,f=u>1?arguments[1]:void 0,l=void 0!==f,h=A(s);if(void 0!=h&&!x(h)){for(c=h.call(s),r=[],n=0;!(o=c.next()).done;n++)r.push(o.value);s=r}for(l&&u>2&&(f=a(f,arguments[2],2)),n=0,e=d(s.length),i=Tt(this,e);e>n;n++)i[n]=l?f(s[n],n):s[n];return i},Rt=function(){for(var t=0,n=arguments.length,e=Tt(this,n);n>t;)e[t]=arguments[t++];return e},Dt=!!V&&o(function(){gt.call(new V(1))}),It=function(){return gt.apply(Dt?dt.call(kt(this)):kt(this),arguments)},Wt={copyWithin:function(t,n){return I.call(kt(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return et(kt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return D.apply(kt(this),arguments)},filter:function(t){return Pt(this,tt(kt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return rt(kt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return it(kt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z(kt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return ct(kt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return ot(kt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return vt.apply(kt(this),arguments)},lastIndexOf:function(t){return ft.apply(kt(this),arguments)},map:function(t){return Mt(kt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return lt.apply(kt(this),arguments)},reduceRight:function(t){return ht.apply(kt(this),arguments)},reverse:function(){for(var t,n=this,e=kt(n).length,r=Math.floor(e/2),i=0;i<r;)t=n[i],n[i++]=n[--e],n[e]=t;return n},some:function(t){return nt(kt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return pt.call(kt(this),t)},subarray:function(t,n){var e=kt(this),r=e.length,i=g(t,r);return new(P(e,e[wt]))(e.buffer,e.byteOffset+i*e.BYTES_PER_ELEMENT,d((void 0===n?r:g(n,r))-i))}},zt=function(t,n){return Pt(this,dt.call(kt(this),t,n))},Bt=function(t){kt(this);var n=jt(arguments[1],1),e=this.length,r=S(t),i=d(r.length),o=0;if(i+n>e)throw X(Ot);for(;o<i;)this[n+o]=r[o++]},Yt={entries:function(){return at.call(kt(this))},keys:function(){return ut.call(kt(this))},values:function(){return st.call(kt(this))}},Xt=function(t,n){return w(t)&&t[xt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Gt=function(t,n){return Xt(t,n=m(n,!0))?l(2,t[n]):Y(t,n)},Vt=function(t,n,e){return!(Xt(t,n=m(n,!0))&&w(e)&&b(e,"value"))||b(e,"get")||b(e,"set")||e.configurable||b(e,"writable")&&!e.writable||b(e,"enumerable")&&!e.enumerable?B(t,n,e):(t[n]=e.value,t)};St||(z.f=Gt,W.f=Vt),c(c.S+c.F*!St,"Object",{getOwnPropertyDescriptor:Gt,defineProperty:Vt}),o(function(){yt.call({})})&&(yt=gt=function(){return vt.call(this)});var Ut=v({},Wt);v(Ut,Yt),h(Ut,mt,Yt.values),v(Ut,{slice:zt,set:Bt,constructor:function(){},toString:yt,toLocaleString:It}),Nt(Ut,"buffer","b"),Nt(Ut,"byteOffset","o"),Nt(Ut,"byteLength","l"),Nt(Ut,"length","e"),B(Ut,bt,{get:function(){return this[xt]}}),t.exports=function(t,n,e,u){u=!!u;var a=t+(u?"Clamped":"")+"Array",l="get"+t,v="set"+t,p=i[a],g=p||{},m=p&&O(p),b=!p||!s.ABV,S={},x=p&&p[K],A=function(t,e){var r=t._d;return r.v[l](e*n+r.o,At)},L=function(t,e,r){var i=t._d;u&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[v](e*n+i.o,r,At)},j=function(t,n){B(t,n,{get:function(){return A(this,n)},set:function(t){return L(this,n,t)},enumerable:!0})};b?(p=e(function(t,e,r,i){f(t,p,a,"_d");var o,c,s,u,l=0,v=0;if(w(e)){if(!(e instanceof $||(u=_(e))==U||u==q))return xt in e?Ft(p,e):Ct.call(p,e);o=e,v=jt(r,n);var g=e.byteLength;if(void 0===i){if(g%n)throw X(Ot);if(c=g-v,c<0)throw X(Ot)}else if(c=d(i)*n,c+v>g)throw X(Ot);s=c/n}else s=y(e),c=s*n,o=new $(c);for(h(t,"_d",{b:o,o:v,l:c,e:s,v:new Q(o)});l<s;)j(t,l++)}),x=p[K]=E(Ut),h(x,"constructor",p)):o(function(){p(1)})&&o(function(){new p(-1)})&&C(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=e(function(t,e,r,i){f(t,p,a);var o;return w(e)?e instanceof $||(o=_(e))==U||o==q?void 0!==i?new g(e,jt(r,n),i):void 0!==r?new g(e,jt(r,n)):new g(e):xt in e?Ft(p,e):Ct.call(p,e):new g(y(e))}),Z(m!==Function.prototype?M(g).concat(M(m)):M(g),function(t){t in p||h(p,t,g[t])}),p[K]=x,r||(x.constructor=p));var k=x[mt],T=!!k&&("values"==k.name||void 0==k.name),P=Yt.values;h(p,_t,!0),h(x,xt,a),h(x,Et,!0),h(x,wt,p),(u?new p(1)[bt]==a:bt in x)||B(x,bt,{get:function(){return a}}),S[a]=p,c(c.G+c.W+c.F*(p!=g),S),c(c.S,a,{BYTES_PER_ELEMENT:n}),c(c.S+c.F*o(function(){g.of.call(p,1)}),a,{from:Ct,of:Rt}),H in x||h(x,H,n),c(c.P,a,Wt),R(a),c(c.P+c.F*Lt,a,{set:Bt}),c(c.P+c.F*!T,a,Yt),r||x.toString==yt||(x.toString=yt),c(c.P+c.F*o(function(){new p(1).slice()}),a,{slice:zt}),c(c.P+c.F*(o(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!o(function(){x.toLocaleString.call([1,2])})),a,{toLocaleString:It}),N[a]=T?k:P,r||T||h(x,mt,P)}}else t.exports=function(){}},function(t,n,e){var r=e(39),i=e(19),o=e(13),c=e(40),s=e(10),u=e(71),a=Object.getOwnPropertyDescriptor;n.f=e(9)?a:function(t,n){if(t=o(t),n=c(n,!0),u)try{return a(t,n)}catch(t){}if(s(t,n))return i(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(3),i=e(11),o=e(10),c=e(22)("src"),s="toString",u=Function[s],a=(""+u).split(s);e(34).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,s){var u="function"==typeof e;u&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(u&&(o(e,c)||i(e,c,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:s?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,s,function(){return"function"==typeof this&&this[c]||u.call(this)})},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(18);t.exports=function(t){return Object(r(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(5)("unscopables"),i=Array.prototype;void 0==i[r]&&e(11)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports={}},function(t,n){t.exports=!1},function(t,n,e){var r=e(82),i=e(52);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){var r=e(16);t.exports=function(t,n,e){for(var i in n)r(t,i,n[i],e);return t}},function(t,n,e){var r=e(7).f,i=e(10),o=e(5)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n,e){var r=e(20),i=Math.max,o=Math.min;t.exports=function(t,n){return t=r(t),t<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,e){var r=e(12),i=e(54),o=e(21),c=e(8),s=e(91);t.exports=function(t,n){var e=1==t,u=2==t,a=3==t,f=4==t,l=6==t,h=5==t||l,v=n||s;return function(n,s,p){for(var d,y,g=o(n),m=i(g),b=r(s,p,3),_=c(m.length),w=0,S=e?v(n,_):u?v(n,0):void 0;_>w;w++)if((h||w in m)&&(d=m[w],y=b(d,w,g),t))if(e)S[w]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:S.push(d)}else if(f)return!1;return l?-1:a||f?f:S}}},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(22)("meta"),i=e(4),o=e(10),c=e(7).f,s=0,u=Object.isExtensible||function(){return!0},a=!e(6)(function(){return u(Object.preventExtensions({}))}),f=function(t){c(t,r,{value:{i:"O"+ ++s,w:{}}})},l=function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!n)return"E";f(t)}return t[r].i},h=function(t,n){if(!o(t,r)){if(!u(t))return!0;if(!n)return!1;f(t)}return t[r].w},v=function(t){return a&&p.NEED&&u(t)&&!o(t,r)&&f(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:h,onFreeze:v}},function(t,n,e){var r=e(2),i=e(99),o=e(52),c=e(59)("IE_PROTO"),s=function(){},u="prototype",a=function(){var t,n=e(51)("iframe"),r=o.length,i="<",c=">";for(n.style.display="none",e(70).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(i+"script"+c+"document.F=Object"+i+"/script"+c),t.close(),a=t.F;r--;)delete a[u][o[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(s[u]=r(t),e=new s,s[u]=null,e[c]=t):e=a(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(82),i=e(52).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,n,e){var r=e(10),i=e(21),o=e(59)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){"use strict";var r=e(3),i=e(1),o=e(16),c=e(29),s=e(35),u=e(43),a=e(24),f=e(4),l=e(6),h=e(44),v=e(30),p=e(95);t.exports=function(t,n,e,d,y,g){var m=r[t],b=m,_=y?"set":"add",w=b&&b.prototype,S={},x=function(t){var n=w[t];o(w,t,"delete"==t?function(t){return!(g&&!f(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!f(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!f(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof b&&(g||w.forEach&&!l(function(){(new b).entries().next()}))){var E=new b,O=E[_](g?{}:-0,1)!=E,M=l(function(){E.has(1)}),A=h(function(t){new b(t)}),L=!g&&l(function(){for(var t=new b,n=5;n--;)t[_](n,n);return!t.has(-0)});A||(b=n(function(n,e){a(n,b,t);var r=p(new m,n,b);return void 0!=e&&u(e,y,r[_],r),r}),b.prototype=w,w.constructor=b),(M||L)&&(x("delete"),x("has"),y&&x("get")),(L||O)&&x(_),g&&w.clear&&delete w.clear}else b=d.getConstructor(n,t,y,_),c(b.prototype,e),s.NEED=!0;return v(b,t),S[t]=b,i(i.G+i.W+i.F*(b!=m),S),g||d.setStrong(b,t,y),b}},function(t,n,e){"use strict";var r=e(11),i=e(16),o=e(6),c=e(18),s=e(5);t.exports=function(t,n,e){var u=s(t),a=e(c,u,""[t]),f=a[0],l=a[1];o(function(){var n={};return n[u]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,f),r(RegExp.prototype,u,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},function(t,n,e){var r=e(12),i=e(76),o=e(55),c=e(2),s=e(8),u=e(65),a={},f={},n=t.exports=function(t,n,e,l,h){var v,p,d,y,g=h?function(){return t}:u(t),m=r(e,l,n?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(v=s(t.length);v>b;b++)if(y=n?m(c(p=t[b])[0],p[1]):m(t[b]),y===a||y===f)return y}else for(d=g.call(t);!(p=d.next()).done;)if(y=i(d,m,p.value,n),y===a||y===f)return y};n.BREAK=a,n.RETURN=f},function(t,n,e){var r=e(5)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],c=o[r]();c.next=function(){return{done:e=!0}},o[r]=function(){return c},t(o)}catch(t){}return e}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){"use strict";var r=e(3),i=e(7),o=e(9),c=e(5)("species");t.exports=function(t){var n=r[t];o&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){"use strict";var r=e(21),i=e(31),o=e(8);t.exports=function(t){for(var n=r(this),e=o(n.length),c=arguments.length,s=i(c>1?arguments[1]:void 0,e),u=c>2?arguments[2]:void 0,a=void 0===u?e:i(u,e);a>s;)n[s++]=t;return n}},function(t,n,e){var r=e(13),i=e(8),o=e(31);t.exports=function(t){return function(n,e,c){var s,u=r(n),a=i(u.length),f=o(c,a);if(t&&e!=e){for(;a>f;)if(s=u[f++],s!=s)return!0}else for(;a>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(25),i=e(5)("toStringTag"),o="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),i))?e:o?r(n):"Object"==(s=r(n))&&"function"==typeof n.callee?"Arguments":s}},function(t,n,e){"use strict";var r=e(7),i=e(19);t.exports=function(t,n,e){n in t?r.f(t,n,i(0,e)):t[n]=e}},function(t,n,e){var r=e(4),i=e(3).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,e){var r=e(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(26),i=e(5)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,n){var e=Math.expm1;t.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||e(-2e-17)!=-2e-17?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},function(t,n){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n,e){var r=e(4),i=e(2),o=function(t,n){if(i(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=e(12)(Function.call,e(15).f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},function(t,n,e){var r=e(60)("keys"),i=e(22);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n,e){var r=e(3),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n,e){var r=e(2),i=e(17),o=e(5)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[o])?n:i(e)}},function(t,n,e){var r=e(75),i=e(18);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(t))}},function(t,n,e){var r,i,o,c=e(12),s=e(72),u=e(70),a=e(51),f=e(3),l=f.process,h=f.setImmediate,v=f.clearImmediate,p=f.MessageChannel,d=f.Dispatch,y=0,g={},m="onreadystatechange",b=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},_=function(t){b.call(t.data)};h&&v||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return g[++y]=function(){s("function"==typeof t?t:Function(t),n)},r(y),y},v=function(t){delete g[t]},"process"==e(25)(l)?r=function(t){l.nextTick(c(b,t,1))}:d&&d.now?r=function(t){d.now(c(b,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=_,r=c(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r=m in a("script")?function(t){u.appendChild(a("script"))[m]=function(){u.removeChild(this),b.call(t)}}:function(t){setTimeout(c(b,t,1),0)}),t.exports={set:h,clear:v}},function(t,n,e){for(var r,i=e(3),o=e(11),c=e(22),s=c("typed_array"),u=c("view"),a=!(!i.ArrayBuffer||!i.DataView),f=a,l=0,h=9,v="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<h;)(r=i[v[l++]])?(o(r.prototype,s,!0),o(r.prototype,u,!0)):f=!1;t.exports={ABV:a,CONSTR:f,TYPED:s,VIEW:u}},function(t,n,e){var r=e(49),i=e(5)("iterator"),o=e(26);t.exports=e(34).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){"use strict";var r=e(23),i=e(78),o=e(26),c=e(13);t.exports=e(77)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):"keys"==n?i(0,e):"values"==n?i(0,t[e]):i(0,[e,t[e]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,n,e){"use strict";var r=e(21),i=e(31),o=e(8);t.exports=[].copyWithin||function(t,n){var e=r(this),c=o(e.length),s=i(t,c),u=i(n,c),a=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===a?c:i(a,c))-u,c-s),l=1;for(u<s&&s<u+f&&(l=-1,u+=f-1,s+=f-1);f-- >0;)u in e?e[s]=e[u]:delete e[s],s+=l,u+=l;return e}},function(t,n,e){"use strict";var r=e(7).f,i=e(36),o=e(29),c=e(12),s=e(24),u=e(43),a=e(77),f=e(78),l=e(46),h=e(9),v=e(35).fastKey,p=e(32),d=h?"_s":"size",y=function(t,n){var e,r=v(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,a){var f=t(function(t,r){s(t,f,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&u(r,e,t[a],t)});return o(f.prototype,{
clear:function(){for(var t=p(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var e=p(this,n),r=y(e,t);if(r){var i=r.n,o=r.p;delete e._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),e._f==r&&(e._f=i),e._l==r&&(e._l=o),e[d]--}return!!r},forEach:function(t){p(this,n);for(var e,r=c(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(p(this,n),t)}}),h&&r(f.prototype,"size",{get:function(){return p(this,n)[d]}}),f},def:function(t,n,e){var r,i,o=y(t,n);return o?o.v=e:(t._l=o={i:i=v(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,n,e){a(t,n,function(t,e){this._t=p(t,n),this._k=e,this._l=void 0},function(){for(var t=this,n=t._k,e=t._l;e&&e.r;)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?"keys"==n?f(0,e.k):"values"==n?f(0,e.v):f(0,[e.k,e.v]):(t._t=void 0,f(1))},e?"entries":"values",!e,!0),l(n)}}},function(t,n,e){"use strict";var r=e(29),i=e(35).getWeak,o=e(2),c=e(4),s=e(24),u=e(43),a=e(33),f=e(10),l=e(32),h=a(5),v=a(6),p=0,d=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},g=function(t,n){return h(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=g(this,t);if(n)return n[1]},has:function(t){return!!g(this,t)},set:function(t,n){var e=g(this,t);e?e[1]=n:this.a.push([t,n])},delete:function(t){var n=v(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,o){var a=t(function(t,r){s(t,a,n,"_i"),t._t=n,t._i=p++,t._l=void 0,void 0!=r&&u(r,e,t[o],t)});return r(a.prototype,{delete:function(t){if(!c(t))return!1;var e=i(t);return e===!0?d(l(this,n)).delete(t):e&&f(e,this._i)&&delete e[this._i]},has:function(t){if(!c(t))return!1;var e=i(t);return e===!0?d(l(this,n)).has(t):e&&f(e,this._i)}}),a},def:function(t,n,e){var r=i(o(n),!0);return r===!0?d(t).set(n,e):r[t._i]=e,t},ufstore:d}},function(t,n,e){var r=e(3).document;t.exports=r&&r.documentElement},function(t,n,e){t.exports=!e(9)&&!e(6)(function(){return 7!=Object.defineProperty(e(51)("div"),"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(25);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(4),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,n,e){var r=e(4),i=e(25),o=e(5)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},function(t,n,e){var r=e(2);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},function(t,n,e){"use strict";var r=e(27),i=e(1),o=e(16),c=e(11),s=e(10),u=e(26),a=e(96),f=e(30),l=e(38),h=e(5)("iterator"),v=!([].keys&&"next"in[].keys()),p="@@iterator",d="keys",y="values",g=function(){return this};t.exports=function(t,n,e,m,b,_,w){a(e,n,m);var S,x,E,O=function(t){if(!v&&t in j)return j[t];switch(t){case d:return function(){return new e(this,t)};case y:return function(){return new e(this,t)}}return function(){return new e(this,t)}},M=n+" Iterator",A=b==y,L=!1,j=t.prototype,k=j[h]||j[p]||b&&j[b],T=k||O(b),P=b?A?O("entries"):T:void 0,F="Array"==n?j.entries||k:k;if(F&&(E=l(F.call(new t)),E!==Object.prototype&&E.next&&(f(E,M,!0),r||s(E,h)||c(E,h,g))),A&&k&&k.name!==y&&(L=!0,T=function(){return k.call(this)}),r&&!w||!v&&!L&&j[h]||c(j,h,T),u[n]=T,u[M]=g,b)if(S={values:A?T:O(y),keys:_?T:O(d),entries:P},w)for(x in S)x in j||o(j,x,S[x]);else i(i.P+i.F*(v||L),n,S);return S}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=i(n),this.reject=i(e)}var i=e(17);t.exports.f=function(t){return new r(t)}},function(t,n,e){"use strict";var r=e(28),i=e(45),o=e(39),c=e(21),s=e(54),u=Object.assign;t.exports=!u||e(6)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=u({},t)[e]||Object.keys(u({},n)).join("")!=r})?function(t,n){for(var e=c(t),u=arguments.length,a=1,f=i.f,l=o.f;u>a;)for(var h,v=s(arguments[a++]),p=f?r(v).concat(f(v)):r(v),d=p.length,y=0;d>y;)l.call(v,h=p[y++])&&(e[h]=v[h]);return e}:u},function(t,n,e){var r=e(10),i=e(13),o=e(48)(!1),c=e(59)("IE_PROTO");t.exports=function(t,n){var e,s=i(t),u=0,a=[];for(e in s)e!=c&&r(s,e)&&a.push(e);for(;n.length>u;)r(s,e=n[u++])&&(~o(a,e)||a.push(e));return a}},function(t,n,e){var r=e(28),i=e(13),o=e(39).f;t.exports=function(t){return function(n){for(var e,c=i(n),s=r(c),u=s.length,a=0,f=[];u>a;)o.call(c,e=s[a++])&&f.push(t?[e,c[e]]:c[e]);return f}}},function(t,n,e){var r=e(37),i=e(45),o=e(2),c=e(3).Reflect;t.exports=c&&c.ownKeys||function(t){var n=r.f(o(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(8),i=e(86),o=e(18);t.exports=function(t,n,e,c){var s=String(o(t)),u=s.length,a=void 0===e?" ":String(e),f=r(n);if(f<=u||""==a)return s;var l=f-u,h=i.call(a,Math.ceil(l/a.length));return h.length>l&&(h=h.slice(0,l)),c?h+s:s+h}},function(t,n,e){"use strict";var r=e(20),i=e(18);t.exports=function(t){var n=String(i(this)),e="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(e+=n);return e}},function(t,n,e){var r=e(20),i=e(8);t.exports=function(t){if(void 0===t)return 0;var n=r(t),e=i(n);if(n!==e)throw RangeError("Wrong length!");return e}},function(t,n,e){"use strict";function r(t,n,e){var r,i,o,c=Array(e),s=8*e-n-1,u=(1<<s)-1,a=u>>1,f=23===n?B(2,-24)-B(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for(t=z(t),t!=t||t===I?(i=t!=t?1:0,r=u):(r=Y(X(t)/G),t*(o=B(2,-r))<1&&(r--,o*=2),t+=r+a>=1?f/o:f*B(2,1-a),t*o>=2&&(r++,o/=2),r+a>=u?(i=0,r=u):r+a>=1?(i=(t*o-1)*B(2,n),r+=a):(i=t*B(2,a-1)*B(2,n),r=0));n>=8;c[l++]=255&i,i/=256,n-=8);for(r=r<<n|i,s+=n;s>0;c[l++]=255&r,r/=256,s-=8);return c[--l]|=128*h,c}function i(t,n,e){var r,i=8*e-n-1,o=(1<<i)-1,c=o>>1,s=i-7,u=e-1,a=t[u--],f=127&a;for(a>>=7;s>0;f=256*f+t[u],u--,s-=8);for(r=f&(1<<-s)-1,f>>=-s,s+=n;s>0;r=256*r+t[u],u--,s-=8);if(0===f)f=1-c;else{if(f===o)return r?NaN:a?-I:I;r+=B(2,n),f-=c}return(a?-1:1)*r*B(2,f-n)}function o(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function c(t){return[255&t]}function s(t){return[255&t,t>>8&255]}function u(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function a(t){return r(t,52,8)}function f(t){return r(t,23,4)}function l(t,n,e){M(t[T],n,{get:function(){return this[e]}})}function h(t,n,e,r){var i=+e,o=E(i);if(o+n>t[K])throw D(F);var c=t[H]._b,s=o+t[J],u=c.slice(s,s+n);return r?u:u.reverse()}function v(t,n,e,r,i,o){var c=+e,s=E(c);if(s+n>t[K])throw D(F);for(var u=t[H]._b,a=s+t[J],f=r(+i),l=0;l<n;l++)u[a+l]=f[o?l:n-l-1]}var p=e(3),d=e(9),y=e(27),g=e(64),m=e(11),b=e(29),_=e(6),w=e(24),S=e(20),x=e(8),E=e(87),O=e(37).f,M=e(7).f,A=e(47),L=e(30),j="ArrayBuffer",k="DataView",T="prototype",P="Wrong length!",F="Wrong index!",N=p[j],C=p[k],R=p.Math,D=p.RangeError,I=p.Infinity,W=N,z=R.abs,B=R.pow,Y=R.floor,X=R.log,G=R.LN2,V="buffer",U="byteLength",q="byteOffset",H=d?"_b":V,K=d?"_l":U,J=d?"_o":q;if(g.ABV){if(!_(function(){N(1)})||!_(function(){new N(-1)})||_(function(){return new N,new N(1.5),new N(NaN),N.name!=j})){N=function(t){return w(this,N),new W(E(t))};for(var $,Q=N[T]=W[T],Z=O(W),tt=0;Z.length>tt;)($=Z[tt++])in N||m(N,$,W[$]);y||(Q.constructor=N)}var nt=new C(new N(2)),et=C[T].setInt8;nt.setInt8(0,2147483648),nt.setInt8(1,2147483649),!nt.getInt8(0)&&nt.getInt8(1)||b(C[T],{setInt8:function(t,n){et.call(this,t,n<<24>>24)},setUint8:function(t,n){et.call(this,t,n<<24>>24)}},!0)}else N=function(t){w(this,N,j);var n=E(t);this._b=A.call(Array(n),0),this[K]=n},C=function(t,n,e){w(this,C,k),w(t,N,k);var r=t[K],i=S(n);if(i<0||i>r)throw D("Wrong offset!");if(e=void 0===e?r-i:x(e),i+e>r)throw D(P);this[H]=t,this[J]=i,this[K]=e},d&&(l(N,U,"_l"),l(C,V,"_b"),l(C,U,"_l"),l(C,q,"_o")),b(C[T],{getInt8:function(t){return h(this,1,t)[0]<<24>>24},getUint8:function(t){return h(this,1,t)[0]},getInt16:function(t){var n=h(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=h(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return o(h(this,4,t,arguments[1]))},getUint32:function(t){return o(h(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return i(h(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return i(h(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){v(this,1,t,c,n)},setUint8:function(t,n){v(this,1,t,c,n)},setInt16:function(t,n){v(this,2,t,s,n,arguments[2])},setUint16:function(t,n){v(this,2,t,s,n,arguments[2])},setInt32:function(t,n){v(this,4,t,u,n,arguments[2])},setUint32:function(t,n){v(this,4,t,u,n,arguments[2])},setFloat32:function(t,n){v(this,4,t,f,n,arguments[2])},setFloat64:function(t,n){v(this,8,t,a,n,arguments[2])}});L(N,j),L(C,k),m(C[T],g.VIEW,!0),n[j]=N,n[k]=C},function(t,n,e){n.f=e(5)},function(t,n,e){var r=e(4),i=e(73),o=e(5)("species");t.exports=function(t){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&(n=n[o],null===n&&(n=void 0))),void 0===n?Array:n}},function(t,n,e){var r=e(90);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){"use strict";var r=e(17),i=e(4),o=e(72),c=[].slice,s={},u=function(t,n,e){if(!(n in s)){for(var r=[],i=0;i<n;i++)r[i]="a["+i+"]";s[n]=Function("F,a","return new F("+r.join(",")+")")}return s[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=c.call(arguments,1),s=function(){var r=e.concat(c.call(arguments));return this instanceof s?u(n,r.length,r):o(n,r,t)};return i(n.prototype)&&(s.prototype=n.prototype),s}},function(t,n,e){var r=e(28),i=e(45),o=e(39);t.exports=function(t){var n=r(t),e=i.f;if(e)for(var c,s=e(t),u=o.f,a=0;s.length>a;)u.call(t,c=s[a++])&&n.push(c);return n}},function(t,n,e){"use strict";var r=e(2);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){var r=e(4),i=e(58).set;t.exports=function(t,n,e){var o,c=n.constructor;return c!==e&&"function"==typeof c&&(o=c.prototype)!==e.prototype&&r(o)&&i&&i(t,o),t}},function(t,n,e){"use strict";var r=e(36),i=e(19),o=e(30),c={};e(11)(c,e(5)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:i(1,e)}),o(t,n+" Iterator")}},function(t,n,e){var r=e(57),i=Math.pow,o=i(2,-52),c=i(2,-23),s=i(2,127)*(2-c),u=i(2,-126),a=function(t){return t+1/o-1/o};t.exports=Math.fround||function(t){var n,e,i=Math.abs(t),f=r(t);return i<u?f*a(i/u/c)*u*c:(n=(1+c/o)*i,e=n-(n-i),e>s||e!=e?f*(1/0):f*e)}},function(t,n,e){var r=e(3),i=e(63).set,o=r.MutationObserver||r.WebKitMutationObserver,c=r.process,s=r.Promise,u="process"==e(25)(c);t.exports=function(){var t,n,e,a=function(){var r,i;for(u&&(r=c.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(u)e=function(){c.nextTick(a)};else if(o){var f=!0,l=document.createTextNode("");new o(a).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}else if(s&&s.resolve){var h=s.resolve();e=function(){h.then(a)}}else e=function(){i.call(r,a)};return function(r){var i={fn:r,next:void 0};n&&(n.next=i),t||(t=i,e()),n=i}}},function(t,n,e){var r=e(7),i=e(2),o=e(28);t.exports=e(9)?Object.defineProperties:function(t,n){i(t);for(var e,c=o(n),s=c.length,u=0;s>u;)r.f(t,e=c[u++],n[e]);return t}},function(t,n,e){var r=e(13),i=e(37).f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(t){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?s(t):i(r(t))}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(2),i=e(4),o=e(80);t.exports=function(t,n){if(r(t),i(n)&&n.constructor===t)return n;var e=o.f(t),c=e.resolve;return c(n),e.promise}},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t===1/n:t!=t&&n!=n}},function(t,n,e){var r=e(20),i=e(18);t.exports=function(t){return function(n,e){var o,c,s=String(i(n)),u=r(e),a=s.length;return u<0||u>=a?t?"":void 0:(o=s.charCodeAt(u),o<55296||o>56319||u+1===a||(c=s.charCodeAt(u+1))<56320||c>57343?t?s.charAt(u):o:t?s.slice(u,u+2):(o-55296<<10)+(c-56320)+65536)}}},function(t,n,e){var r=e(3),i=e(34),o=e(27),c=e(89),s=e(7).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||s(n,t,{value:c.f(t)})}},function(t,n,e){var r=e(1);r(r.P,"Array",{copyWithin:e(67)}),e(23)("copyWithin")},function(t,n,e){var r=e(1);r(r.P,"Array",{fill:e(47)}),e(23)("fill")},function(t,n,e){"use strict";var r=e(1),i=e(33)(6),o="findIndex",c=!0;o in[]&&Array(1)[o](function(){c=!1}),r(r.P+r.F*c,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(23)(o)},function(t,n,e){"use strict";var r=e(1),i=e(33)(5),o="find",c=!0;o in[]&&Array(1)[o](function(){c=!1}),r(r.P+r.F*c,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(23)(o)},function(t,n,e){"use strict";var r=e(12),i=e(1),o=e(21),c=e(76),s=e(55),u=e(8),a=e(50),f=e(65);i(i.S+i.F*!e(44)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,i,l,h=o(t),v="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,y=void 0!==d,g=0,m=f(h);if(y&&(d=r(d,p>2?arguments[2]:void 0,2)),void 0==m||v==Array&&s(m))for(n=u(h.length),e=new v(n);n>g;g++)a(e,g,y?d(h[g],g):h[g]);else for(l=m.call(h),e=new v;!(i=l.next()).done;g++)a(e,g,y?c(l,d,[i.value,g],!0):i.value);return e.length=g,e}})},function(t,n,e){"use strict";var r=e(1),i=e(50);r(r.S+r.F*e(6)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=0,n=arguments.length,e=new("function"==typeof this?this:Array)(n);n>t;)i(e,t,arguments[t++]);return e.length=n,e}})},function(t,n,e){var r=e(7).f,i=Function.prototype,o=/^\s*function ([^ (]*)/,c="name";c in i||e(9)&&r(i,c,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,e){"use strict";var r=e(68),i=e(32),o="Map";t.exports=e(41)(o,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=r.getEntry(i(this,o),t);return n&&n.v},set:function(t,n){return r.def(i(this,o),0===t?0:t,n)}},r,!0)},function(t,n,e){var r=e(1),i=e(79),o=Math.sqrt,c=Math.acosh;r(r.S+r.F*!(c&&710==Math.floor(c(Number.MAX_VALUE))&&c(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,e){function r(t){return isFinite(t=+t)&&0!=t?t<0?-r(-t):Math.log(t+Math.sqrt(t*t+1)):t}var i=e(1),o=Math.asinh;i(i.S+i.F*!(o&&1/o(0)>0),"Math",{asinh:r})},function(t,n,e){var r=e(1),i=Math.atanh;r(r.S+r.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,e){var r=e(1),i=e(57);r(r.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,e){var r=e(1);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,e){var r=e(1),i=Math.exp;r(r.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,n,e){var r=e(1),i=e(56);r(r.S+r.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,e){var r=e(1);r(r.S,"Math",{fround:e(97)})},function(t,n,e){var r=e(1),i=Math.abs;r(r.S,"Math",{hypot:function(t,n){for(var e,r,o=0,c=0,s=arguments.length,u=0;c<s;)e=i(arguments[c++]),u<e?(r=u/e,o=o*r*r+1,u=e):e>0?(r=e/u,o+=r*r):o+=e;return u===1/0?1/0:u*Math.sqrt(o)}})},function(t,n,e){var r=e(1),i=Math.imul;r(r.S+r.F*e(6)(function(){return i(4294967295,5)!=-5||2!=i.length}),"Math",{imul:function(t,n){var e=65535,r=+t,i=+n,o=e&r,c=e&i;return 0|o*c+((e&r>>>16)*c+o*(e&i>>>16)<<16>>>0)}})},function(t,n,e){var r=e(1);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,n,e){var r=e(1);r(r.S,"Math",{log1p:e(79)})},function(t,n,e){var r=e(1);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,n,e){var r=e(1);r(r.S,"Math",{sign:e(57)})},function(t,n,e){var r=e(1),i=e(56),o=Math.exp;r(r.S+r.F*e(6)(function(){return!Math.sinh(-2e-17)!=-2e-17}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,e){var r=e(1),i=e(56),o=Math.exp;r(r.S,"Math",{tanh:function(t){var n=i(t=+t),e=i(-t);return n==1/0?1:e==1/0?-1:(n-e)/(o(t)+o(-t))}})},function(t,n,e){var r=e(1);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,e){var r=e(1);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,e){var r=e(1),i=e(3).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,n,e){var r=e(1);r(r.S,"Number",{isInteger:e(74)})},function(t,n,e){var r=e(1);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,e){var r=e(1),i=e(74),o=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,e){var r=e(1);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,e){var r=e(1);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,e){var r=e(1);r(r.S+r.F,"Object",{assign:e(81)})},function(t,n,e){var r=e(1);r(r.S,"Object",{is:e(103)})},function(t,n,e){var r=e(1);r(r.S,"Object",{setPrototypeOf:e(58).set})},function(t,n,e){"use strict";var r,i,o,c,s=e(27),u=e(3),a=e(12),f=e(49),l=e(1),h=e(4),v=e(17),p=e(24),d=e(43),y=e(61),g=e(63).set,m=e(98)(),b=e(80),_=e(101),w=e(102),S="Promise",x=u.TypeError,E=u.process,O=u[S],M="process"==f(E),A=function(){},L=i=b.f,j=!!function(){try{var t=O.resolve(1),n=(t.constructor={})[e(5)("species")]=function(t){t(A,A)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n}catch(t){}}(),k=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},T=function(t,n){if(!t._n){t._n=!0;var e=t._c;m(function(){for(var r=t._v,i=1==t._s,o=0,c=function(n){var e,o,c=i?n.ok:n.fail,s=n.resolve,u=n.reject,a=n.domain;try{c?(i||(2==t._h&&N(t),t._h=1),c===!0?e=r:(a&&a.enter(),e=c(r),a&&a.exit()),e===n.promise?u(x("Promise-chain cycle")):(o=k(e))?o.call(e,s,u):s(e)):u(r)}catch(t){u(t)}};e.length>o;)c(e[o++]);t._c=[],t._n=!1,n&&!t._h&&P(t)})}},P=function(t){g.call(u,function(){var n,e,r,i=t._v,o=F(t);if(o&&(n=_(function(){M?E.emit("unhandledRejection",i,t):(e=u.onunhandledrejection)?e({promise:t,reason:i}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=M||F(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},F=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!F(n.promise))return!1;return!0},N=function(t){g.call(u,function(){var n;M?E.emit("rejectionHandled",t):(n=u.onrejectionhandled)&&n({promise:t,reason:t._v})})},C=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),T(n,!0))},R=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw x("Promise can't be resolved itself");(n=k(t))?m(function(){var r={_w:e,_d:!1};try{n.call(t,a(R,r,1),a(C,r,1))}catch(t){C.call(r,t)}}):(e._v=t,e._s=1,T(e,!1))}catch(t){C.call({_w:e,_d:!1},t)}}};j||(O=function(t){p(this,O,S,"_h"),v(t),r.call(this);try{t(a(R,this,1),a(C,this,1))}catch(t){C.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(29)(O.prototype,{then:function(t,n){var e=L(y(this,O));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=M?E.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&T(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=a(R,t,1),this.reject=a(C,t,1)},b.f=L=function(t){return t===O||t===c?new o(t):i(t)}),l(l.G+l.W+l.F*!j,{Promise:O}),e(30)(O,S),e(46)(S),c=e(34)[S],l(l.S+l.F*!j,S,{reject:function(t){var n=L(this),e=n.reject;return e(t),n.promise}}),l(l.S+l.F*(s||!j),S,{resolve:function(t){return w(s&&this===c?O:this,t)}}),l(l.S+l.F*!(j&&e(44)(function(t){O.all(t).catch(A)})),S,{all:function(t){var n=this,e=L(n),r=e.resolve,i=e.reject,o=_(function(){var e=[],o=0,c=1;d(t,!1,function(t){var s=o++,u=!1;e.push(void 0),c++,n.resolve(t).then(function(t){u||(u=!0,e[s]=t,--c||r(e))},i)}),--c||r(e)});return o.e&&i(o.v),e.promise},race:function(t){var n=this,e=L(n),r=e.reject,i=_(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return i.e&&r(i.v),e.promise}})},function(t,n,e){var r=e(1),i=e(17),o=e(2),c=(e(3).Reflect||{}).apply,s=Function.apply;r(r.S+r.F*!e(6)(function(){c(function(){})}),"Reflect",{apply:function(t,n,e){var r=i(t),u=o(e);return c?c(r,n,u):s.call(r,n,u)}})},function(t,n,e){var r=e(1),i=e(36),o=e(17),c=e(2),s=e(4),u=e(6),a=e(92),f=(e(3).Reflect||{}).construct,l=u(function(){function t(){}return!(f(function(){},[],t)instanceof t)}),h=!u(function(){f(function(){})});r(r.S+r.F*(l||h),"Reflect",{construct:function(t,n){o(t),c(n);var e=arguments.length<3?t:o(arguments[2]);if(h&&!l)return f(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(a.apply(t,r))}var u=e.prototype,v=i(s(u)?u:Object.prototype),p=Function.apply.call(t,v,n);return s(p)?p:v}})},function(t,n,e){var r=e(7),i=e(1),o=e(2),c=e(40);i(i.S+i.F*e(6)(function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,n,e){o(t),n=c(n,!0),o(e);try{return r.f(t,n,e),!0}catch(t){return!1}}})},function(t,n,e){var r=e(1),i=e(15).f,o=e(2);r(r.S,"Reflect",{deleteProperty:function(t,n){var e=i(o(t),n);return!(e&&!e.configurable)&&delete t[n]}})},function(t,n,e){var r=e(15),i=e(1),o=e(2);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return r.f(o(t),n)}})},function(t,n,e){var r=e(1),i=e(38),o=e(2);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,n,e){function r(t,n){var e,s,f=arguments.length<3?t:arguments[2];return a(t)===f?t[n]:(e=i.f(t,n))?c(e,"value")?e.value:void 0!==e.get?e.get.call(f):void 0:u(s=o(t))?r(s,n,f):void 0}var i=e(15),o=e(38),c=e(10),s=e(1),u=e(4),a=e(2);s(s.S,"Reflect",{get:r})},function(t,n,e){var r=e(1);r(r.S,"Reflect",{has:function(t,n){return n in t}})},function(t,n,e){var r=e(1),i=e(2),o=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,n,e){var r=e(1);r(r.S,"Reflect",{ownKeys:e(84)})},function(t,n,e){var r=e(1),i=e(2),o=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,n,e){var r=e(1),i=e(58);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},function(t,n,e){function r(t,n,e){var u,h,v=arguments.length<4?t:arguments[3],p=o.f(f(t),n);if(!p){if(l(h=c(t)))return r(h,n,e,v);p=a(0)}return s(p,"value")?!(p.writable===!1||!l(v))&&(u=o.f(v,n)||a(0),u.value=e,i.f(v,n,u),!0):void 0!==p.set&&(p.set.call(v,e),!0)}var i=e(7),o=e(15),c=e(38),s=e(10),u=e(1),a=e(19),f=e(2),l=e(4);u(u.S,"Reflect",{set:r})},function(t,n,e){e(9)&&"g"!=/./g.flags&&e(7).f(RegExp.prototype,"flags",{configurable:!0,get:e(94)})},function(t,n,e){e(42)("match",1,function(t,n,e){return[function(e){"use strict";var r=t(this),i=void 0==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},e]})},function(t,n,e){e(42)("replace",2,function(t,n,e){return[function(r,i){"use strict";var o=t(this),c=void 0==r?void 0:r[n];return void 0!==c?c.call(r,o,i):e.call(String(o),r,i)},e]})},function(t,n,e){e(42)("search",1,function(t,n,e){return[function(e){"use strict";var r=t(this),i=void 0==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},e]})},function(t,n,e){e(42)("split",2,function(t,n,r){"use strict";var i=e(75),o=r,c=[].push,s="split",u="length",a="lastIndex";if("c"=="abbc"[s](/(b)*/)[1]||4!="test"[s](/(?:)/,-1)[u]||2!="ab"[s](/(?:ab)*/)[u]||4!="."[s](/(.?)(.?)/)[u]||"."[s](/()()/)[u]>1||""[s](/.?/)[u]){var f=void 0===/()??/.exec("")[1];r=function(t,n){var e=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(e,t,n);var r,s,l,h,v,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,g=void 0===n?4294967295:n>>>0,m=new RegExp(t.source,d+"g");for(f||(r=new RegExp("^"+m.source+"$(?!\\s)",d));(s=m.exec(e))&&(l=s.index+s[0][u],!(l>y&&(p.push(e.slice(y,s.index)),!f&&s[u]>1&&s[0].replace(r,function(){for(v=1;v<arguments[u]-2;v++)void 0===arguments[v]&&(s[v]=void 0)}),s[u]>1&&s.index<e[u]&&c.apply(p,s.slice(1)),h=s[0][u],y=l,p[u]>=g)));)m[a]===s.index&&m[a]++;return y===e[u]?!h&&m.test("")||p.push(""):p.push(e.slice(y)),p[u]>g?p.slice(0,g):p}}else"0"[s](void 0,0)[u]&&(r=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function(e,i){var o=t(this),c=void 0==e?void 0:e[n];return void 0!==c?c.call(e,o,i):r.call(String(o),e,i)},r]})},function(t,n,e){"use strict";var r=e(68),i=e(32),o="Set";t.exports=e(41)(o,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,o),t=0===t?0:t,t)}},r)},function(t,n,e){"use strict";var r=e(1),i=e(104)(!1);r(r.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,n,e){"use strict";var r=e(1),i=e(8),o=e(62),c="endsWith",s=""[c];r(r.P+r.F*e(53)(c),"String",{endsWith:function(t){var n=o(this,t,c),e=arguments.length>1?arguments[1]:void 0,r=i(n.length),u=void 0===e?r:Math.min(i(e),r),a=String(t);return s?s.call(n,a,u):n.slice(u-a.length,u)===a}})},function(t,n,e){var r=e(1),i=e(31),o=String.fromCharCode,c=String.fromCodePoint;r(r.S+r.F*(!!c&&1!=c.length),"String",{fromCodePoint:function(t){for(var n,e=[],r=arguments.length,c=0;r>c;){if(n=+arguments[c++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");e.push(n<65536?o(n):o(((n-=65536)>>10)+55296,n%1024+56320))}return e.join("")}})},function(t,n,e){"use strict";var r=e(1),i=e(62),o="includes";r(r.P+r.F*e(53)(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(1),i=e(13),o=e(8);r(r.S,"String",{raw:function(t){for(var n=i(t.raw),e=o(n.length),r=arguments.length,c=[],s=0;e>s;)c.push(String(n[s++])),s<r&&c.push(String(arguments[s]));return c.join("")}})},function(t,n,e){var r=e(1);r(r.P,"String",{repeat:e(86)})},function(t,n,e){"use strict";var r=e(1),i=e(8),o=e(62),c="startsWith",s=""[c];r(r.P+r.F*e(53)(c),"String",{startsWith:function(t){var n=o(this,t,c),e=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return s?s.call(n,r,e):n.slice(e,e+r.length)===r}})},function(t,n,e){"use strict";var r=e(3),i=e(10),o=e(9),c=e(1),s=e(16),u=e(35).KEY,a=e(6),f=e(60),l=e(30),h=e(22),v=e(5),p=e(89),d=e(105),y=e(93),g=e(73),m=e(2),b=e(13),_=e(40),w=e(19),S=e(36),x=e(100),E=e(15),O=e(7),M=e(28),A=E.f,L=O.f,j=x.f,k=r.Symbol,T=r.JSON,P=T&&T.stringify,F="prototype",N=v("_hidden"),C=v("toPrimitive"),R={}.propertyIsEnumerable,D=f("symbol-registry"),I=f("symbols"),W=f("op-symbols"),z=Object[F],B="function"==typeof k,Y=r.QObject,X=!Y||!Y[F]||!Y[F].findChild,G=o&&a(function(){return 7!=S(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=A(z,n);r&&delete z[n],L(t,n,e),r&&t!==z&&L(z,n,r)}:L,V=function(t){var n=I[t]=S(k[F]);return n._k=t,n},U=B&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},q=function(t,n,e){return t===z&&q(W,n,e),m(t),n=_(n,!0),m(e),i(I,n)?(e.enumerable?(i(t,N)&&t[N][n]&&(t[N][n]=!1),e=S(e,{enumerable:w(0,!1)})):(i(t,N)||L(t,N,w(1,{})),t[N][n]=!0),G(t,n,e)):L(t,n,e)},H=function(t,n){m(t);for(var e,r=y(n=b(n)),i=0,o=r.length;o>i;)q(t,e=r[i++],n[e]);return t},K=function(t,n){return void 0===n?S(t):H(S(t),n)},J=function(t){var n=R.call(this,t=_(t,!0));return!(this===z&&i(I,t)&&!i(W,t))&&(!(n||!i(this,t)||!i(I,t)||i(this,N)&&this[N][t])||n)},$=function(t,n){if(t=b(t),n=_(n,!0),t!==z||!i(I,n)||i(W,n)){var e=A(t,n);return!e||!i(I,n)||i(t,N)&&t[N][n]||(e.enumerable=!0),e}},Q=function(t){for(var n,e=j(b(t)),r=[],o=0;e.length>o;)i(I,n=e[o++])||n==N||n==u||r.push(n);return r},Z=function(t){for(var n,e=t===z,r=j(e?W:b(t)),o=[],c=0;r.length>c;)!i(I,n=r[c++])||e&&!i(z,n)||o.push(I[n]);return o};B||(k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(e){this===z&&n.call(W,e),i(this,N)&&i(this[N],t)&&(this[N][t]=!1),G(this,t,w(1,e))};return o&&X&&G(z,t,{configurable:!0,set:n}),V(t)},s(k[F],"toString",function(){return this._k}),E.f=$,O.f=q,e(37).f=x.f=Q,e(39).f=J,e(45).f=Z,o&&!e(27)&&s(z,"propertyIsEnumerable",J,!0),p.f=function(t){return V(v(t))}),c(c.G+c.W+c.F*!B,{Symbol:k});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)v(tt[nt++]);for(var et=M(v.store),rt=0;et.length>rt;)d(et[rt++]);c(c.S+c.F*!B,"Symbol",{for:function(t){return i(D,t+="")?D[t]:D[t]=k(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var n in D)if(D[n]===t)return n},useSetter:function(){X=!0},useSimple:function(){X=!1}}),c(c.S+c.F*!B,"Object",{create:K,defineProperty:q,defineProperties:H,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:Z}),T&&c(c.S+c.F*(!B||a(function(){var t=k();return"[null]"!=P([t])||"{}"!=P({a:t})||"{}"!=P(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!U(t)){for(var n,e,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);return n=r[1],"function"==typeof n&&(e=n),!e&&g(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!U(n))return n}),r[1]=n,P.apply(T,r)}}}),k[F][C]||e(11)(k[F],C,k[F].valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){"use strict";var r=e(1),i=e(64),o=e(88),c=e(2),s=e(31),u=e(8),a=e(4),f=e(3).ArrayBuffer,l=e(61),h=o.ArrayBuffer,v=o.DataView,p=i.ABV&&f.isView,d=h.prototype.slice,y=i.VIEW,g="ArrayBuffer";r(r.G+r.W+r.F*(f!==h),{ArrayBuffer:h}),r(r.S+r.F*!i.CONSTR,g,{isView:function(t){return p&&p(t)||a(t)&&y in t}}),r(r.P+r.U+r.F*e(6)(function(){return!new h(2).slice(1,void 0).byteLength}),g,{slice:function(t,n){if(void 0!==d&&void 0===n)return d.call(c(this),t);for(var e=c(this).byteLength,r=s(t,e),i=s(void 0===n?e:n,e),o=new(l(this,h))(u(i-r)),a=new v(this),f=new v(o),p=0;r<i;)f.setUint8(p++,a.getUint8(r++));return o}}),e(46)(g)},function(t,n,e){e(14)("Float32",4,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(14)("Float64",8,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(14)("Int16",2,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(14)("Int32",4,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(14)("Int8",1,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(14)("Uint16",2,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(14)("Uint32",4,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(14)("Uint8",1,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(14)("Uint8",1,function(t){return function(n,e,r){return t(this,n,e,r)}},!0)},function(t,n,e){"use strict";var r,i=e(33)(0),o=e(16),c=e(35),s=e(81),u=e(69),a=e(4),f=e(6),l=e(32),h="WeakMap",v=c.getWeak,p=Object.isExtensible,d=u.ufstore,y={},g=function(t){
return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},m={get:function(t){if(a(t)){var n=v(t);return n===!0?d(l(this,h)).get(t):n?n[this._i]:void 0}},set:function(t,n){return u.def(l(this,h),t,n)}},b=t.exports=e(41)(h,g,m,u,!0,!0);f(function(){return 7!=(new b).set((Object.freeze||Object)(y),7).get(y)})&&(r=u.getConstructor(g,h),s(r.prototype,m),c.NEED=!0,i(["delete","has","get","set"],function(t){var n=b.prototype,e=n[t];o(n,t,function(n,i){if(a(n)&&!p(n)){this._f||(this._f=new r);var o=this._f[t](n,i);return"set"==t?this:o}return e.call(this,n,i)})}))},function(t,n,e){"use strict";var r=e(69),i=e(32),o="WeakSet";e(41)(o,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,o),t,!0)}},r,!1,!0)},function(t,n,e){"use strict";var r=e(1),i=e(48)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(23)("includes")},function(t,n,e){var r=e(1),i=e(83)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},function(t,n,e){var r=e(1),i=e(84),o=e(13),c=e(15),s=e(50);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,e,r=o(t),u=c.f,a=i(r),f={},l=0;a.length>l;)e=u(r,n=a[l++]),void 0!==e&&s(f,n,e);return f}})},function(t,n,e){var r=e(1),i=e(83)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},function(t,n,e){"use strict";var r=e(1),i=e(85);r(r.P,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,n,e){"use strict";var r=e(1),i=e(85);r(r.P,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,n,e){for(var r=e(66),i=e(28),o=e(16),c=e(3),s=e(11),u=e(26),a=e(5),f=a("iterator"),l=a("toStringTag"),h=u.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(v),d=0;d<p.length;d++){var y,g=p[d],m=v[g],b=c[g],_=b&&b.prototype;if(_&&(_[f]||s(_,f,h),_[l]||s(_,l,g),u[g]=h,m))for(y in r)_[y]||o(_,y,r[y],!0)}},function(t,n,e){var r=e(1),i=e(63);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,e){var r=e(3),i=e(1),o=r.navigator,c=[].slice,s=!!o&&/MSIE .\./.test(o.userAgent),u=function(t){return function(n,e){var r=arguments.length>2,i=!!r&&c.call(arguments,2);return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,e)}};i(i.G+i.B+i.F*s,{setTimeout:u(r.setTimeout),setInterval:u(r.setInterval)})},function(t,n){},function(t,n){(function(n){function e(t,n,e){function i(n){var e=d,r=y;return d=y=void 0,E=n,m=t.apply(r,e)}function o(t){return E=t,b=setTimeout(f,n),O?i(t):m}function u(t){var e=t-x,r=t-E,i=n-e;return M?w(i,g-r):i}function a(t){var e=t-x,r=t-E;return void 0===x||e>=n||e<0||M&&r>=g}function f(){var t=S();return a(t)?l(t):void(b=setTimeout(f,u(t)))}function l(t){return b=void 0,A&&d?i(t):(d=y=void 0,m)}function h(){void 0!==b&&clearTimeout(b),E=0,d=x=y=b=void 0}function v(){return void 0===b?m:l(S())}function p(){var t=S(),e=a(t);if(d=arguments,y=this,x=t,e){if(void 0===b)return o(x);if(M)return b=setTimeout(f,n),i(x)}return void 0===b&&(b=setTimeout(f,n)),m}var d,y,g,m,b,x,E=0,O=!1,M=!1,A=!0;if("function"!=typeof t)throw new TypeError(s);return n=c(n)||0,r(e)&&(O=!!e.leading,M="maxWait"in e,g=M?_(c(e.maxWait)||0,n):g,A="trailing"in e?!!e.trailing:A),p.cancel=h,p.flush=v,p}function r(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function i(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||i(t)&&b.call(t)==a}function c(t){if("number"==typeof t)return t;if(o(t))return u;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var e=h.test(t);return e||v.test(t)?p(t.slice(2),e?2:8):l.test(t)?u:+t}var s="Expected a function",u=NaN,a="[object Symbol]",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,v=/^0o[0-7]+$/i,p=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,y="object"==typeof self&&self&&self.Object===Object&&self,g=d||y||Function("return this")(),m=Object.prototype,b=m.toString,_=Math.max,w=Math.min,S=function(){return g.Date.now()};t.exports=e}).call(n,function(){return this}())},function(t,n){!function(n){"use strict";function e(t,n,e,r){var o=n&&n.prototype instanceof i?n:i,c=Object.create(o.prototype),s=new v(r||[]);return c._invoke=a(t,e,s),c}function r(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function c(){}function s(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function u(t){function n(e,i,o,c){var s=r(t[e],t,i);if("throw"!==s.type){var u=s.arg,a=u.value;return a&&"object"==typeof a&&m.call(a,"__await")?Promise.resolve(a.__await).then(function(t){n("next",t,o,c)},function(t){n("throw",t,o,c)}):Promise.resolve(a).then(function(t){u.value=t,o(u)},c)}c(s.arg)}function e(t,e){function r(){return new Promise(function(r,i){n(t,e,r,i)})}return i=i?i.then(r,r):r()}var i;this._invoke=e}function a(t,n,e){var i=O;return function(o,c){if(i===A)throw new Error("Generator is already running");if(i===L){if("throw"===o)throw c;return d()}for(e.method=o,e.arg=c;;){var s=e.delegate;if(s){var u=f(s,e);if(u){if(u===j)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(i===O)throw i=L,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i=A;var a=r(t,n,e);if("normal"===a.type){if(i=e.done?L:M,a.arg===j)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(i=L,e.method="throw",e.arg=a.arg)}}}function f(t,n){var e=t.iterator[n.method];if(e===y){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=y,f(t,n),"throw"===n.method))return j;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var i=r(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,j;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=y),n.delegate=null,j):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,j)}function l(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function h(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function p(t){if(t){var n=t[_];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(m.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=y,n.done=!0,n};return r.next=r}}return{next:d}}function d(){return{value:y,done:!0}}var y,g=Object.prototype,m=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},_=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",S=b.toStringTag||"@@toStringTag",x="object"==typeof t,E=n.regeneratorRuntime;if(E)return void(x&&(t.exports=E));E=n.regeneratorRuntime=x?t.exports:{},E.wrap=e;var O="suspendedStart",M="suspendedYield",A="executing",L="completed",j={},k={};k[_]=function(){return this};var T=Object.getPrototypeOf,P=T&&T(T(p([])));P&&P!==g&&m.call(P,_)&&(k=P);var F=c.prototype=i.prototype=Object.create(k);o.prototype=F.constructor=c,c.constructor=o,c[S]=o.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===o||"GeneratorFunction"===(n.displayName||n.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,S in t||(t[S]="GeneratorFunction")),t.prototype=Object.create(F),t},E.awrap=function(t){return{__await:t}},s(u.prototype),u.prototype[w]=function(){return this},E.AsyncIterator=u,E.async=function(t,n,r,i){var o=new u(e(t,n,r,i));return E.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},s(F),F[S]="Generator",F[_]=function(){return this},F.toString=function(){return"[object Generator]"},E.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},E.values=p,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(h),!t)for(var n in this)"t"===n.charAt(0)&&m.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function n(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=y),!!r}if(this.done)throw t;for(var e=this,r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=m.call(i,"catchLoc"),s=m.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,j):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),j},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),h(e),j}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;h(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:p(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=y),j}}}(function(){return this}()||Function("return this")())},function(t,n,e){!function(n,e){t.exports=e()}(this,function(){"use strict";function t(t){return parseFloat(t)||0}function n(n){var e=Array.prototype.slice.call(arguments,1);return e.reduce(function(e,r){var i=n["border-"+r+"-width"];return e+t(i)},0)}function e(n){for(var e=["top","right","bottom","left"],r={},i=0,o=e;i<o.length;i+=1){var c=o[i],s=n["padding-"+c];r[c]=t(s)}return r}function r(t){var n=t.getBBox();return u(0,0,n.width,n.height)}function i(r){var i=r.clientWidth,c=r.clientHeight;if(!i&&!c)return _;var s=getComputedStyle(r),a=e(s),f=a.left+a.right,l=a.top+a.bottom,h=t(s.width),v=t(s.height);if("border-box"===s.boxSizing&&(Math.round(h+f)!==i&&(h-=n(s,"left","right")+f),Math.round(v+l)!==c&&(v-=n(s,"top","bottom")+l)),!o(r)){var p=Math.round(h+f)-i,d=Math.round(v+l)-c;1!==Math.abs(p)&&(h-=p),1!==Math.abs(d)&&(v-=d)}return u(a.left,a.top,h,v)}function o(t){return t===document.documentElement}function c(t){return f?w(t)?r(t):i(t):_}function s(t){var n=t.x,e=t.y,r=t.width,i=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(o.prototype);return b(c,{x:n,y:e,width:r,height:i,top:e,right:n+r,bottom:i+e,left:n}),c}function u(t,n,e,r){return{x:t,y:n,width:e,height:r}}var a=function(){function t(t,n){var e=-1;return t.some(function(t,r){return t[0]===n&&(e=r,!0)}),e}return"undefined"!=typeof Map?Map:function(){function n(){this.__entries__=[]}var e={size:{}};return e.size.get=function(){return this.__entries__.length},n.prototype.get=function(n){var e=t(this.__entries__,n),r=this.__entries__[e];return r&&r[1]},n.prototype.set=function(n,e){var r=t(this.__entries__,n);~r?this.__entries__[r][1]=e:this.__entries__.push([n,e])},n.prototype.delete=function(n){var e=this.__entries__,r=t(e,n);~r&&e.splice(r,1)},n.prototype.has=function(n){return!!~t(this.__entries__,n)},n.prototype.clear=function(){this.__entries__.splice(0)},n.prototype.forEach=function(t,n){void 0===n&&(n=null);for(var e=0,r=this.__entries__;e<r.length;e+=1){var i=r[e];t.call(n,i[1],i[0])}},Object.defineProperties(n.prototype,e),n}()}(),f="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,l=function(){return"function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),h=2,v=function(t,n){function e(){o&&(o=!1,t()),c&&i()}function r(){l(e)}function i(){var t=Date.now();if(o){if(t-s<h)return;c=!0}else o=!0,c=!1,setTimeout(r,n);s=t}var o=!1,c=!1,s=0;return i},p=20,d=["top","right","bottom","left","width","height","size","weight"],y="undefined"!=typeof navigator&&/Trident\/.*rv:11/.test(navigator.userAgent),g="undefined"!=typeof MutationObserver&&!y,m=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=v(this.refresh.bind(this),p)};m.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},m.prototype.removeObserver=function(t){var n=this.observers_,e=n.indexOf(t);~e&&n.splice(e,1),!n.length&&this.connected_&&this.disconnect_()},m.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},m.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},m.prototype.connect_=function(){f&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),g?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},m.prototype.disconnect_=function(){f&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},m.prototype.onTransitionEnd_=function(t){var n=t.propertyName,e=d.some(function(t){return!!~n.indexOf(t)});e&&this.refresh()},m.getInstance=function(){return this.instance_||(this.instance_=new m),this.instance_},m.instance_=null;var b=function(t,n){for(var e=0,r=Object.keys(n);e<r.length;e+=1){var i=r[e];Object.defineProperty(t,i,{value:n[i],enumerable:!1,writable:!1,configurable:!0})}return t},_=u(0,0,0,0),w=function(){return"undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof SVGGraphicsElement}:function(t){return t instanceof SVGElement&&"function"==typeof t.getBBox}}(),S=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=u(0,0,0,0),this.target=t};S.prototype.isActive=function(){var t=c(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},S.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var x=function(t,n){var e=s(n);b(this,{target:t,contentRect:e})},E=function(t,n,e){if("function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.activeObservations_=[],this.observations_=new a,this.callback_=t,this.controller_=n,this.callbackCtx_=e};E.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new S(t)),this.controller_.addObserver(this),this.controller_.refresh())}},E.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},E.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},E.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},E.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(t){return new x(t.target,t.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},E.prototype.clearActive=function(){this.activeObservations_.splice(0)},E.prototype.hasActive=function(){return this.activeObservations_.length>0};var O="undefined"!=typeof WeakMap?new WeakMap:new a,M=function(t){if(!(this instanceof M))throw new TypeError("Cannot call a class as a function");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=m.getInstance(),e=new E(t,n,this);O.set(this,e)};["observe","unobserve","disconnect"].forEach(function(t){M.prototype[t]=function(){return(n=O.get(this))[t].apply(n,arguments);var n}});var A=function(){return"undefined"!=typeof ResizeObserver?ResizeObserver:M}();return A})},function(t,n,e){var r,i,o;/*! scrollbarWidth.js v0.1.0 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
!function(e,c){i=[],r=c,o="function"==typeof r?r.apply(n,i):r,!(void 0!==o&&(t.exports=o))}(this,function(){"use strict";function t(){var t,n=document.body,e=document.createElement("div"),r=e.style;return r.position="absolute",r.top=r.left="-9999px",r.width=r.height="100px",r.overflow="scroll",n.appendChild(e),t=e.offsetWidth-e.clientWidth,n.removeChild(e),t}return t})}])});
/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
!function(){"use strict";var e,a=function(s,i){function r(e){return Math.floor(e)}function n(){var e=T.params.autoplay,a=T.slides.eq(T.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||T.params.autoplay),T.autoplayTimeoutId=setTimeout(function(){T.params.loop?(T.fixLoop(),T._slideNext(),T.emit("onAutoplay",T)):T.isEnd?i.autoplayStopOnLast?T.stopAutoplay():(T._slideTo(0),T.emit("onAutoplay",T)):(T._slideNext(),T.emit("onAutoplay",T))},e)}function o(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var i;return s.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}if(0!==s.length)return s[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){T.onResize(!0),T.emit("onObserverUpdate",T,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),T.observers.push(s)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!T.params.allowSwipeToNext&&(T.isHorizontal()&&39===a||!T.isHorizontal()&&40===a))return!1;if(!T.params.allowSwipeToPrev&&(T.isHorizontal()&&37===a||!T.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(T.container.parents("."+T.params.slideClass).length>0&&0===T.container.parents("."+T.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,r=window.innerHeight,n=T.container.offset();T.rtl&&(n.left=n.left-T.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+T.width,n.top],[n.left,n.top+T.height],[n.left+T.width,n.top+T.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+r&&(t=!0)}if(!t)return}T.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!T.rtl||37===a&&T.rtl)&&T.slideNext(),(37===a&&!T.rtl||39===a&&T.rtl)&&T.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&T.slideNext(),38===a&&T.slidePrev()),T.emit("onKeyPress",T,a)}}function d(e){var a=0,t=0,s=0,i=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,i=10*t,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||i)&&e.deltaMode&&(1===e.deltaMode?(s*=40,i*=40):(s*=800,i*=800)),s&&!a&&(a=s<1?-1:1),i&&!t&&(t=i<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:i}}function u(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=T.rtl?-1:1,s=d(e);if(T.params.mousewheelForceToAxis)if(T.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(T.params.mousewheelInvert&&(a=-a),T.params.freeMode){var i=T.getWrapperTranslate()+a*T.params.mousewheelSensitivity,r=T.isBeginning,n=T.isEnd;if(i>=T.minTranslate()&&(i=T.minTranslate()),i<=T.maxTranslate()&&(i=T.maxTranslate()),T.setWrapperTransition(0),T.setWrapperTranslate(i),T.updateProgress(),T.updateActiveIndex(),(!r&&T.isBeginning||!n&&T.isEnd)&&T.updateClasses(),T.params.freeModeSticky?(clearTimeout(T.mousewheel.timeout),T.mousewheel.timeout=setTimeout(function(){T.slideReset()},300)):T.params.lazyLoading&&T.lazy&&T.lazy.load(),T.emit("onScroll",T,e),T.params.autoplay&&T.params.autoplayDisableOnInteraction&&T.stopAutoplay(),0===i||i===T.maxTranslate())return}else{if((new window.Date).getTime()-T.mousewheel.lastScrollTime>60)if(a<0)if(T.isEnd&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slideNext(),T.emit("onScroll",T,e);else if(T.isBeginning&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slidePrev(),T.emit("onScroll",T,e);T.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function c(a,t){a=e(a);var s,i,r,n=T.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",i=a.attr("data-swiper-parallax-x"),r=a.attr("data-swiper-parallax-y"),i||r?(i=i||"0",r=r||"0"):T.isHorizontal()?(i=s,r="0"):(r=s,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",r=r.indexOf("%")>=0?parseInt(r,10)*t+"%":r*t+"px",a.transform("translate3d("+i+", "+r+",0px)")}function m(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(s,i);var h={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=i&&i.virtualTranslate;i=i||{};var f={};for(var v in i)if("object"!=typeof i[v]||null===i[v]||(i[v].nodeType||i[v]===window||i[v]===document||void 0!==t&&i[v]instanceof t||"undefined"!=typeof jQuery&&i[v]instanceof jQuery))f[v]=i[v];else{f[v]={};for(var w in i[v])f[v][w]=i[v][w]}for(var y in h)if(void 0===i[y])i[y]=h[y];else if("object"==typeof i[y])for(var x in h[y])void 0===i[y][x]&&(i[y][x]=h[y][x]);var T=this;if(T.params=i,T.originalParams=f,T.classNames=[],void 0!==e&&void 0!==t&&(e=t),(void 0!==e||(e=void 0===t?window.Dom7||window.Zepto||window.jQuery:t))&&(T.$=e,T.currentBreakpoint=void 0,T.getActiveBreakpoint=function(){if(!T.params.breakpoints)return!1;var e,a=!1,t=[];for(e in T.params.breakpoints)T.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},T.setBreakpoint=function(){var e=T.getActiveBreakpoint();if(e&&T.currentBreakpoint!==e){var a=e in T.params.breakpoints?T.params.breakpoints[e]:T.originalParams,t=T.params.loop&&a.slidesPerView!==T.params.slidesPerView;for(var s in a)T.params[s]=a[s];T.currentBreakpoint=e,t&&T.destroyLoop&&T.reLoop(!0)}},T.params.breakpoints&&T.setBreakpoint(),T.container=e(s),0!==T.container.length)){if(T.container.length>1){var b=[];return T.container.each(function(){b.push(new a(this,i))}),b}T.container[0].swiper=T,T.container.data("swiper",T),T.classNames.push(T.params.containerModifierClass+T.params.direction),T.params.freeMode&&T.classNames.push(T.params.containerModifierClass+"free-mode"),T.support.flexbox||(T.classNames.push(T.params.containerModifierClass+"no-flexbox"),T.params.slidesPerColumn=1),T.params.autoHeight&&T.classNames.push(T.params.containerModifierClass+"autoheight"),(T.params.parallax||T.params.watchSlidesVisibility)&&(T.params.watchSlidesProgress=!0),T.params.touchReleaseOnEdges&&(T.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(T.params.effect)>=0&&(T.support.transforms3d?(T.params.watchSlidesProgress=!0,T.classNames.push(T.params.containerModifierClass+"3d")):T.params.effect="slide"),"slide"!==T.params.effect&&T.classNames.push(T.params.containerModifierClass+T.params.effect),"cube"===T.params.effect&&(T.params.resistanceRatio=0,T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.centeredSlides=!1,T.params.spaceBetween=0,T.params.virtualTranslate=!0),"fade"!==T.params.effect&&"flip"!==T.params.effect||(T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.watchSlidesProgress=!0,T.params.spaceBetween=0,void 0===g&&(T.params.virtualTranslate=!0)),T.params.grabCursor&&T.support.touch&&(T.params.grabCursor=!1),T.wrapper=T.container.children("."+T.params.wrapperClass),T.params.pagination&&(T.paginationContainer=e(T.params.pagination),T.params.uniqueNavElements&&"string"==typeof T.params.pagination&&T.paginationContainer.length>1&&1===T.container.find(T.params.pagination).length&&(T.paginationContainer=T.container.find(T.params.pagination)),"bullets"===T.params.paginationType&&T.params.paginationClickable?T.paginationContainer.addClass(T.params.paginationModifierClass+"clickable"):T.params.paginationClickable=!1,T.paginationContainer.addClass(T.params.paginationModifierClass+T.params.paginationType)),(T.params.nextButton||T.params.prevButton)&&(T.params.nextButton&&(T.nextButton=e(T.params.nextButton),T.params.uniqueNavElements&&"string"==typeof T.params.nextButton&&T.nextButton.length>1&&1===T.container.find(T.params.nextButton).length&&(T.nextButton=T.container.find(T.params.nextButton))),T.params.prevButton&&(T.prevButton=e(T.params.prevButton),T.params.uniqueNavElements&&"string"==typeof T.params.prevButton&&T.prevButton.length>1&&1===T.container.find(T.params.prevButton).length&&(T.prevButton=T.container.find(T.params.prevButton)))),T.isHorizontal=function(){return"horizontal"===T.params.direction},T.rtl=T.isHorizontal()&&("rtl"===T.container[0].dir.toLowerCase()||"rtl"===T.container.css("direction")),T.rtl&&T.classNames.push(T.params.containerModifierClass+"rtl"),T.rtl&&(T.wrongRTL="-webkit-box"===T.wrapper.css("display")),T.params.slidesPerColumn>1&&T.classNames.push(T.params.containerModifierClass+"multirow"),T.device.android&&T.classNames.push(T.params.containerModifierClass+"android"),T.container.addClass(T.classNames.join(" ")),T.translate=0,T.progress=0,T.velocity=0,T.lockSwipeToNext=function(){T.params.allowSwipeToNext=!1,T.params.allowSwipeToPrev===!1&&T.params.grabCursor&&T.unsetGrabCursor()},T.lockSwipeToPrev=function(){T.params.allowSwipeToPrev=!1,T.params.allowSwipeToNext===!1&&T.params.grabCursor&&T.unsetGrabCursor()},T.lockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!1,T.params.grabCursor&&T.unsetGrabCursor()},T.unlockSwipeToNext=function(){T.params.allowSwipeToNext=!0,T.params.allowSwipeToPrev===!0&&T.params.grabCursor&&T.setGrabCursor()},T.unlockSwipeToPrev=function(){T.params.allowSwipeToPrev=!0,T.params.allowSwipeToNext===!0&&T.params.grabCursor&&T.setGrabCursor()},T.unlockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!0,T.params.grabCursor&&T.setGrabCursor()},T.setGrabCursor=function(e){T.container[0].style.cursor="move",T.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",T.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",T.container[0].style.cursor=e?"grabbing":"grab"},T.unsetGrabCursor=function(){T.container[0].style.cursor=""},T.params.grabCursor&&T.setGrabCursor(),T.imagesToLoad=[],T.imagesLoaded=0,T.loadImage=function(e,a,t,s,i,r){function n(){r&&r()}var o;e.complete&&i?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},T.preloadImages=function(){function e(){void 0!==T&&null!==T&&T&&(void 0!==T.imagesLoaded&&T.imagesLoaded++,T.imagesLoaded===T.imagesToLoad.length&&(T.params.updateOnImagesReady&&T.update(),T.emit("onImagesReady",T)))}T.imagesToLoad=T.container.find("img");for(var a=0;a<T.imagesToLoad.length;a++)T.loadImage(T.imagesToLoad[a],T.imagesToLoad[a].currentSrc||T.imagesToLoad[a].getAttribute("src"),T.imagesToLoad[a].srcset||T.imagesToLoad[a].getAttribute("srcset"),T.imagesToLoad[a].sizes||T.imagesToLoad[a].getAttribute("sizes"),!0,e)},T.autoplayTimeoutId=void 0,T.autoplaying=!1,T.autoplayPaused=!1,T.startAutoplay=function(){return void 0===T.autoplayTimeoutId&&(!!T.params.autoplay&&(!T.autoplaying&&(T.autoplaying=!0,T.emit("onAutoplayStart",T),void n())))},T.stopAutoplay=function(e){T.autoplayTimeoutId&&(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplaying=!1,T.autoplayTimeoutId=void 0,T.emit("onAutoplayStop",T))},T.pauseAutoplay=function(e){T.autoplayPaused||(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplayPaused=!0,0===e?(T.autoplayPaused=!1,n()):T.wrapper.transitionEnd(function(){T&&(T.autoplayPaused=!1,T.autoplaying?n():T.stopAutoplay())}))},T.minTranslate=function(){return-T.snapGrid[0]},T.maxTranslate=function(){return-T.snapGrid[T.snapGrid.length-1]},T.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==T.params.slidesPerView&&T.params.slidesPerView>1)for(e=0;e<Math.ceil(T.params.slidesPerView);e++){var s=T.activeIndex+e;if(s>T.slides.length)break;a.push(T.slides.eq(s)[0])}else a.push(T.slides.eq(T.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var i=a[e].offsetHeight;t=i>t?i:t}t&&T.wrapper.css("height",t+"px")},T.updateContainerSize=function(){var e,a;e=void 0!==T.params.width?T.params.width:T.container[0].clientWidth,a=void 0!==T.params.height?T.params.height:T.container[0].clientHeight,0===e&&T.isHorizontal()||0===a&&!T.isHorizontal()||(e=e-parseInt(T.container.css("padding-left"),10)-parseInt(T.container.css("padding-right"),10),a=a-parseInt(T.container.css("padding-top"),10)-parseInt(T.container.css("padding-bottom"),10),T.width=e,T.height=a,T.size=T.isHorizontal()?T.width:T.height)},T.updateSlidesSize=function(){T.slides=T.wrapper.children("."+T.params.slideClass),T.snapGrid=[],T.slidesGrid=[],T.slidesSizesGrid=[];var e,a=T.params.spaceBetween,t=-T.params.slidesOffsetBefore,s=0,i=0;if(void 0!==T.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*T.size),T.virtualSize=-a,T.rtl?T.slides.css({marginLeft:"",marginTop:""}):T.slides.css({marginRight:"",marginBottom:""});var n;T.params.slidesPerColumn>1&&(n=Math.floor(T.slides.length/T.params.slidesPerColumn)===T.slides.length/T.params.slidesPerColumn?T.slides.length:Math.ceil(T.slides.length/T.params.slidesPerColumn)*T.params.slidesPerColumn,"auto"!==T.params.slidesPerView&&"row"===T.params.slidesPerColumnFill&&(n=Math.max(n,T.params.slidesPerView*T.params.slidesPerColumn)));var o,l=T.params.slidesPerColumn,p=n/l,d=p-(T.params.slidesPerColumn*p-T.slides.length);for(e=0;e<T.slides.length;e++){o=0;var u=T.slides.eq(e);if(T.params.slidesPerColumn>1){var c,m,h;"column"===T.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css("margin-"+(T.isHorizontal()?"top":"left"),0!==h&&T.params.spaceBetween&&T.params.spaceBetween+"px").attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===T.params.slidesPerView?(o=T.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),T.params.roundLengths&&(o=r(o))):(o=(T.size-(T.params.slidesPerView-1)*a)/T.params.slidesPerView,T.params.roundLengths&&(o=r(o)),T.isHorizontal()?T.slides[e].style.width=o+"px":T.slides[e].style.height=o+"px"),T.slides[e].swiperSlideSize=o,T.slidesSizesGrid.push(o),T.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-T.size/2-a),0===e&&(t=t-T.size/2-a),Math.abs(t)<.001&&(t=0),i%T.params.slidesPerGroup==0&&T.snapGrid.push(t),T.slidesGrid.push(t)):(i%T.params.slidesPerGroup==0&&T.snapGrid.push(t),T.slidesGrid.push(t),t=t+o+a),T.virtualSize+=o+a,s=o,i++)}T.virtualSize=Math.max(T.virtualSize,T.size)+T.params.slidesOffsetAfter;var g;if(T.rtl&&T.wrongRTL&&("slide"===T.params.effect||"coverflow"===T.params.effect)&&T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}),T.support.flexbox&&!T.params.setWrapperSize||(T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"})),T.params.slidesPerColumn>1&&(T.virtualSize=(o+T.params.spaceBetween)*n,T.virtualSize=Math.ceil(T.virtualSize/T.params.slidesPerColumn)-T.params.spaceBetween,T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"}),T.params.centeredSlides)){for(g=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<T.virtualSize+T.snapGrid[0]&&g.push(T.snapGrid[e]);T.snapGrid=g}if(!T.params.centeredSlides){for(g=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<=T.virtualSize-T.size&&g.push(T.snapGrid[e]);T.snapGrid=g,Math.floor(T.virtualSize-T.size)-Math.floor(T.snapGrid[T.snapGrid.length-1])>1&&T.snapGrid.push(T.virtualSize-T.size)}0===T.snapGrid.length&&(T.snapGrid=[0]),0!==T.params.spaceBetween&&(T.isHorizontal()?T.rtl?T.slides.css({marginLeft:a+"px"}):T.slides.css({marginRight:a+"px"}):T.slides.css({marginBottom:a+"px"})),T.params.watchSlidesProgress&&T.updateSlidesOffset()}},T.updateSlidesOffset=function(){for(var e=0;e<T.slides.length;e++)T.slides[e].swiperSlideOffset=T.isHorizontal()?T.slides[e].offsetLeft:T.slides[e].offsetTop},T.currentSlidesPerView=function(){var e,a,t=1;if(T.params.centeredSlides){var s,i=T.slides[T.activeIndex].swiperSlideSize;for(e=T.activeIndex+1;e<T.slides.length;e++)T.slides[e]&&!s&&(i+=T.slides[e].swiperSlideSize,t++,i>T.size&&(s=!0));for(a=T.activeIndex-1;a>=0;a--)T.slides[a]&&!s&&(i+=T.slides[a].swiperSlideSize,t++,i>T.size&&(s=!0))}else for(e=T.activeIndex+1;e<T.slides.length;e++)T.slidesGrid[e]-T.slidesGrid[T.activeIndex]<T.size&&t++;return t},T.updateSlidesProgress=function(e){if(void 0===e&&(e=T.translate||0),0!==T.slides.length){void 0===T.slides[0].swiperSlideOffset&&T.updateSlidesOffset();var a=-e;T.rtl&&(a=e),T.slides.removeClass(T.params.slideVisibleClass);for(var t=0;t<T.slides.length;t++){var s=T.slides[t],i=(a+(T.params.centeredSlides?T.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+T.params.spaceBetween);if(T.params.watchSlidesVisibility){var r=-(a-s.swiperSlideOffset),n=r+T.slidesSizesGrid[t];(r>=0&&r<T.size||n>0&&n<=T.size||r<=0&&n>=T.size)&&T.slides.eq(t).addClass(T.params.slideVisibleClass)}s.progress=T.rtl?-i:i}}},T.updateProgress=function(e){void 0===e&&(e=T.translate||0);var a=T.maxTranslate()-T.minTranslate(),t=T.isBeginning,s=T.isEnd;0===a?(T.progress=0,T.isBeginning=T.isEnd=!0):(T.progress=(e-T.minTranslate())/a,T.isBeginning=T.progress<=0,T.isEnd=T.progress>=1),T.isBeginning&&!t&&T.emit("onReachBeginning",T),T.isEnd&&!s&&T.emit("onReachEnd",T),T.params.watchSlidesProgress&&T.updateSlidesProgress(e),T.emit("onProgress",T,T.progress)},T.updateActiveIndex=function(){var e,a,t,s=T.rtl?T.translate:-T.translate;for(a=0;a<T.slidesGrid.length;a++)void 0!==T.slidesGrid[a+1]?s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]-(T.slidesGrid[a+1]-T.slidesGrid[a])/2?e=a:s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]&&(e=a+1):s>=T.slidesGrid[a]&&(e=a);T.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/T.params.slidesPerGroup),t>=T.snapGrid.length&&(t=T.snapGrid.length-1),e!==T.activeIndex&&(T.snapIndex=t,T.previousIndex=T.activeIndex,T.activeIndex=e,T.updateClasses(),T.updateRealIndex())},T.updateRealIndex=function(){T.realIndex=parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index")||T.activeIndex,10)},T.updateClasses=function(){T.slides.removeClass(T.params.slideActiveClass+" "+T.params.slideNextClass+" "+T.params.slidePrevClass+" "+T.params.slideDuplicateActiveClass+" "+T.params.slideDuplicateNextClass+" "+T.params.slideDuplicatePrevClass);var a=T.slides.eq(T.activeIndex);a.addClass(T.params.slideActiveClass),i.loop&&(a.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass));var t=a.next("."+T.params.slideClass).addClass(T.params.slideNextClass);T.params.loop&&0===t.length&&(t=T.slides.eq(0),t.addClass(T.params.slideNextClass));var s=a.prev("."+T.params.slideClass).addClass(T.params.slidePrevClass);if(T.params.loop&&0===s.length&&(s=T.slides.eq(-1),s.addClass(T.params.slidePrevClass)),i.loop&&(t.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass),s.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass)),T.paginationContainer&&T.paginationContainer.length>0){var r,n=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length;if(T.params.loop?(r=Math.ceil((T.activeIndex-T.loopedSlides)/T.params.slidesPerGroup),r>T.slides.length-1-2*T.loopedSlides&&(r-=T.slides.length-2*T.loopedSlides),r>n-1&&(r-=n),r<0&&"bullets"!==T.params.paginationType&&(r=n+r)):r=void 0!==T.snapIndex?T.snapIndex:T.activeIndex||0,"bullets"===T.params.paginationType&&T.bullets&&T.bullets.length>0&&(T.bullets.removeClass(T.params.bulletActiveClass),T.paginationContainer.length>1?T.bullets.each(function(){e(this).index()===r&&e(this).addClass(T.params.bulletActiveClass)}):T.bullets.eq(r).addClass(T.params.bulletActiveClass)),"fraction"===T.params.paginationType&&(T.paginationContainer.find("."+T.params.paginationCurrentClass).text(r+1),T.paginationContainer.find("."+T.params.paginationTotalClass).text(n)),"progress"===T.params.paginationType){var o=(r+1)/n,l=o,p=1;T.isHorizontal()||(p=o,l=1),T.paginationContainer.find("."+T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(T.params.speed)}"custom"===T.params.paginationType&&T.params.paginationCustomRender&&(T.paginationContainer.html(T.params.paginationCustomRender(T,r+1,n)),T.emit("onPaginationRendered",T,T.paginationContainer[0]))}T.params.loop||(T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.isBeginning?(T.prevButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.prevButton)):(T.prevButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.prevButton))),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.isEnd?(T.nextButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.nextButton)):(T.nextButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.nextButton))))},T.updatePagination=function(){if(T.params.pagination&&T.paginationContainer&&T.paginationContainer.length>0){var e="";if("bullets"===T.params.paginationType){for(var a=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length,t=0;t<a;t++)e+=T.params.paginationBulletRender?T.params.paginationBulletRender(T,t,T.params.bulletClass):"<"+T.params.paginationElement+' class="'+T.params.bulletClass+'"></'+T.params.paginationElement+">";T.paginationContainer.html(e),T.bullets=T.paginationContainer.find("."+T.params.bulletClass),T.params.paginationClickable&&T.params.a11y&&T.a11y&&T.a11y.initPagination()}"fraction"===T.params.paginationType&&(e=T.params.paginationFractionRender?T.params.paginationFractionRender(T,T.params.paginationCurrentClass,T.params.paginationTotalClass):'<span class="'+T.params.paginationCurrentClass+'"></span> / <span class="'+T.params.paginationTotalClass+'"></span>',T.paginationContainer.html(e)),"progress"===T.params.paginationType&&(e=T.params.paginationProgressRender?T.params.paginationProgressRender(T,T.params.paginationProgressbarClass):'<span class="'+T.params.paginationProgressbarClass+'"></span>',T.paginationContainer.html(e)),"custom"!==T.params.paginationType&&T.emit("onPaginationRendered",T,T.paginationContainer[0])}},T.update=function(e){function a(){T.rtl,T.translate;t=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate()),T.setWrapperTranslate(t),T.updateActiveIndex(),T.updateClasses()}if(T){T.updateContainerSize(),T.updateSlidesSize(),T.updateProgress(),T.updatePagination(),T.updateClasses(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set();var t;if(e){T.controller&&T.controller.spline&&(T.controller.spline=void 0),T.params.freeMode?(a(),T.params.autoHeight&&T.updateAutoHeight()):(("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0))||a()}else T.params.autoHeight&&T.updateAutoHeight()}},T.onResize=function(e){T.params.onBeforeResize&&T.params.onBeforeResize(T),T.params.breakpoints&&T.setBreakpoint();var a=T.params.allowSwipeToPrev,t=T.params.allowSwipeToNext;T.params.allowSwipeToPrev=T.params.allowSwipeToNext=!0,T.updateContainerSize(),T.updateSlidesSize(),("auto"===T.params.slidesPerView||T.params.freeMode||e)&&T.updatePagination(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set(),T.controller&&T.controller.spline&&(T.controller.spline=void 0);var s=!1;if(T.params.freeMode){var i=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate());T.setWrapperTranslate(i),T.updateActiveIndex(),T.updateClasses(),T.params.autoHeight&&T.updateAutoHeight()}else T.updateClasses(),s=("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0);T.params.lazyLoading&&!s&&T.lazy&&T.lazy.load(),T.params.allowSwipeToPrev=a,T.params.allowSwipeToNext=t,T.params.onAfterResize&&T.params.onAfterResize(T)},T.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?T.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(T.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),T.touchEvents={start:T.support.touch||!T.params.simulateTouch?"touchstart":T.touchEventsDesktop.start,move:T.support.touch||!T.params.simulateTouch?"touchmove":T.touchEventsDesktop.move,end:T.support.touch||!T.params.simulateTouch?"touchend":T.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===T.params.touchEventsTarget?T.container:T.wrapper).addClass("swiper-wp8-"+T.params.direction),T.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",s="container"===T.params.touchEventsTarget?T.container[0]:T.wrapper[0],r=T.support.touch?s:document,n=!!T.params.nested;if(T.browser.ie)s[t](T.touchEvents.start,T.onTouchStart,!1),r[t](T.touchEvents.move,T.onTouchMove,n),r[t](T.touchEvents.end,T.onTouchEnd,!1);else{if(T.support.touch){var o=!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1};s[t](T.touchEvents.start,T.onTouchStart,o),s[t](T.touchEvents.move,T.onTouchMove,n),s[t](T.touchEvents.end,T.onTouchEnd,o)}(i.simulateTouch&&!T.device.ios&&!T.device.android||i.simulateTouch&&!T.support.touch&&T.device.ios)&&(s[t]("mousedown",T.onTouchStart,!1),document[t]("mousemove",T.onTouchMove,n),document[t]("mouseup",T.onTouchEnd,!1))}window[t]("resize",T.onResize),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.nextButton[a]("click",T.onClickNext),T.params.a11y&&T.a11y&&T.nextButton[a]("keydown",T.a11y.onEnterKey)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.prevButton[a]("click",T.onClickPrev),T.params.a11y&&T.a11y&&T.prevButton[a]("keydown",T.a11y.onEnterKey)),T.params.pagination&&T.params.paginationClickable&&(T.paginationContainer[a]("click","."+T.params.bulletClass,T.onClickIndex),T.params.a11y&&T.a11y&&T.paginationContainer[a]("keydown","."+T.params.bulletClass,T.a11y.onEnterKey)),(T.params.preventClicks||T.params.preventClicksPropagation)&&s[t]("click",T.preventClicks,!0)},T.attachEvents=function(){T.initEvents()},T.detachEvents=function(){T.initEvents(!0)},T.allowClick=!0,T.preventClicks=function(e){T.allowClick||(T.params.preventClicks&&e.preventDefault(),T.params.preventClicksPropagation&&T.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},T.onClickNext=function(e){e.preventDefault(),T.isEnd&&!T.params.loop||T.slideNext()},T.onClickPrev=function(e){e.preventDefault(),T.isBeginning&&!T.params.loop||T.slidePrev()},T.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*T.params.slidesPerGroup;T.params.loop&&(t+=T.loopedSlides),T.slideTo(t)},
T.updateClickedSlide=function(a){var t=o(a,"."+T.params.slideClass),s=!1;if(t)for(var i=0;i<T.slides.length;i++)T.slides[i]===t&&(s=!0);if(!t||!s)return T.clickedSlide=void 0,void(T.clickedIndex=void 0);if(T.clickedSlide=t,T.clickedIndex=e(t).index(),T.params.slideToClickedSlide&&void 0!==T.clickedIndex&&T.clickedIndex!==T.activeIndex){var r,n=T.clickedIndex,l="auto"===T.params.slidesPerView?T.currentSlidesPerView():T.params.slidesPerView;if(T.params.loop){if(T.animating)return;r=parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"),10),T.params.centeredSlides?n<T.loopedSlides-l/2||n>T.slides.length-T.loopedSlides+l/2?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(n)},0)):T.slideTo(n):n>T.slides.length-l?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(n)},0)):T.slideTo(n)}else T.slideTo(n)}};var S,C,z,M,E,P,I,k,L,D,B="input, select, textarea, button, video",H=Date.now(),G=[];T.animating=!1,T.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var X,A;T.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(X="touchstart"===a.type)||!("which"in a)||3!==a.which){if(T.params.noSwiping&&o(a,"."+T.params.noSwipingClass))return void(T.allowClick=!0);if(!T.params.swipeHandler||o(a,T.params.swipeHandler)){var t=T.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=T.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(T.device.ios&&T.params.iOSEdgeSwipeDetection&&t<=T.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,E=void 0,A=void 0,T.touches.startX=t,T.touches.startY=s,M=Date.now(),T.allowClick=!0,T.updateContainerSize(),T.swipeDirection=void 0,T.params.threshold>0&&(k=!1),"touchstart"!==a.type){var i=!0;e(a.target).is(B)&&(i=!1),document.activeElement&&e(document.activeElement).is(B)&&document.activeElement.blur(),i&&a.preventDefault()}T.emit("onTouchStart",T,a)}}}},T.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!X||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return T.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(T.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(T.params.onlyExternal)return T.allowClick=!1,void(S&&(T.touches.startX=T.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,T.touches.startY=T.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,M=Date.now()));if(X&&T.params.touchReleaseOnEdges&&!T.params.loop)if(T.isHorizontal()){if(T.touches.currentX<T.touches.startX&&T.translate<=T.maxTranslate()||T.touches.currentX>T.touches.startX&&T.translate>=T.minTranslate())return}else if(T.touches.currentY<T.touches.startY&&T.translate<=T.maxTranslate()||T.touches.currentY>T.touches.startY&&T.translate>=T.minTranslate())return;if(X&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(B))return C=!0,void(T.allowClick=!1);if(z&&T.emit("onTouchMove",T,a),!(a.targetTouches&&a.targetTouches.length>1)){if(T.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,T.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===E){var t;T.isHorizontal()&&T.touches.currentY===T.touches.startY||!T.isHorizontal()&&T.touches.currentX===T.touches.startX?E=!1:(t=180*Math.atan2(Math.abs(T.touches.currentY-T.touches.startY),Math.abs(T.touches.currentX-T.touches.startX))/Math.PI,E=T.isHorizontal()?t>T.params.touchAngle:90-t>T.params.touchAngle)}if(E&&T.emit("onTouchMoveOpposite",T,a),void 0===A&&(T.touches.currentX===T.touches.startX&&T.touches.currentY===T.touches.startY||(A=!0)),S){if(E)return void(S=!1);if(A){T.allowClick=!1,T.emit("onSliderMove",T,a),a.preventDefault(),T.params.touchMoveStopPropagation&&!T.params.nested&&a.stopPropagation(),C||(i.loop&&T.fixLoop(),I=T.getWrapperTranslate(),T.setWrapperTransition(0),T.animating&&T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),T.params.autoplay&&T.autoplaying&&(T.params.autoplayDisableOnInteraction?T.stopAutoplay():T.pauseAutoplay()),D=!1,!T.params.grabCursor||T.params.allowSwipeToNext!==!0&&T.params.allowSwipeToPrev!==!0||T.setGrabCursor(!0)),C=!0;var s=T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY;s*=T.params.touchRatio,T.rtl&&(s=-s),T.swipeDirection=s>0?"prev":"next",P=s+I;var r=!0;if(s>0&&P>T.minTranslate()?(r=!1,T.params.resistance&&(P=T.minTranslate()-1+Math.pow(-T.minTranslate()+I+s,T.params.resistanceRatio))):s<0&&P<T.maxTranslate()&&(r=!1,T.params.resistance&&(P=T.maxTranslate()+1-Math.pow(T.maxTranslate()-I-s,T.params.resistanceRatio))),r&&(a.preventedByNestedSwiper=!0),!T.params.allowSwipeToNext&&"next"===T.swipeDirection&&P<I&&(P=I),!T.params.allowSwipeToPrev&&"prev"===T.swipeDirection&&P>I&&(P=I),T.params.threshold>0){if(!(Math.abs(s)>T.params.threshold||k))return void(P=I);if(!k)return k=!0,T.touches.startX=T.touches.currentX,T.touches.startY=T.touches.currentY,P=I,void(T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY)}T.params.followFinger&&((T.params.freeMode||T.params.watchSlidesProgress)&&T.updateActiveIndex(),T.params.freeMode&&(0===G.length&&G.push({position:T.touches[T.isHorizontal()?"startX":"startY"],time:M}),G.push({position:T.touches[T.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),T.updateProgress(P),T.setWrapperTranslate(P))}}}}},T.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),z&&T.emit("onTouchEnd",T,a),z=!1,S){T.params.grabCursor&&C&&S&&(T.params.allowSwipeToNext===!0||T.params.allowSwipeToPrev===!0)&&T.setGrabCursor(!1);var t=Date.now(),s=t-M;if(T.allowClick&&(T.updateClickedSlide(a),T.emit("onTap",T,a),s<300&&t-H>300&&(L&&clearTimeout(L),L=setTimeout(function(){T&&(T.params.paginationHide&&T.paginationContainer.length>0&&!e(a.target).hasClass(T.params.bulletClass)&&T.paginationContainer.toggleClass(T.params.paginationHiddenClass),T.emit("onClick",T,a))},300)),s<300&&t-H<300&&(L&&clearTimeout(L),T.emit("onDoubleTap",T,a))),H=Date.now(),setTimeout(function(){T&&(T.allowClick=!0)},0),!S||!C||!T.swipeDirection||0===T.touches.diff||P===I)return void(S=C=!1);S=C=!1;var i;if(i=T.params.followFinger?T.rtl?T.translate:-T.translate:-P,T.params.freeMode){if(i<-T.minTranslate())return void T.slideTo(T.activeIndex);if(i>-T.maxTranslate())return void(T.slides.length<T.snapGrid.length?T.slideTo(T.snapGrid.length-1):T.slideTo(T.slides.length-1));if(T.params.freeModeMomentum){if(G.length>1){var r=G.pop(),n=G.pop(),o=r.position-n.position,l=r.time-n.time;T.velocity=o/l,T.velocity=T.velocity/2,Math.abs(T.velocity)<T.params.freeModeMinimumVelocity&&(T.velocity=0),(l>150||(new window.Date).getTime()-r.time>300)&&(T.velocity=0)}else T.velocity=0;T.velocity=T.velocity*T.params.freeModeMomentumVelocityRatio,G.length=0;var p=1e3*T.params.freeModeMomentumRatio,d=T.velocity*p,u=T.translate+d;T.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(T.velocity)*T.params.freeModeMomentumBounceRatio;if(u<T.maxTranslate())T.params.freeModeMomentumBounce?(u+T.maxTranslate()<-h&&(u=T.maxTranslate()-h),c=T.maxTranslate(),m=!0,D=!0):u=T.maxTranslate();else if(u>T.minTranslate())T.params.freeModeMomentumBounce?(u-T.minTranslate()>h&&(u=T.minTranslate()+h),c=T.minTranslate(),m=!0,D=!0):u=T.minTranslate();else if(T.params.freeModeSticky){var g,f=0;for(f=0;f<T.snapGrid.length;f+=1)if(T.snapGrid[f]>-u){g=f;break}u=Math.abs(T.snapGrid[g]-u)<Math.abs(T.snapGrid[g-1]-u)||"next"===T.swipeDirection?T.snapGrid[g]:T.snapGrid[g-1],T.rtl||(u=-u)}if(0!==T.velocity)p=T.rtl?Math.abs((-u-T.translate)/T.velocity):Math.abs((u-T.translate)/T.velocity);else if(T.params.freeModeSticky)return void T.slideReset();T.params.freeModeMomentumBounce&&m?(T.updateProgress(c),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating=!0,T.wrapper.transitionEnd(function(){T&&D&&(T.emit("onMomentumBounce",T),T.setWrapperTransition(T.params.speed),T.setWrapperTranslate(c),T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))})):T.velocity?(T.updateProgress(u),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))):T.updateProgress(u),T.updateActiveIndex()}return void((!T.params.freeModeMomentum||s>=T.params.longSwipesMs)&&(T.updateProgress(),T.updateActiveIndex()))}var v,w=0,y=T.slidesSizesGrid[0];for(v=0;v<T.slidesGrid.length;v+=T.params.slidesPerGroup)void 0!==T.slidesGrid[v+T.params.slidesPerGroup]?i>=T.slidesGrid[v]&&i<T.slidesGrid[v+T.params.slidesPerGroup]&&(w=v,y=T.slidesGrid[v+T.params.slidesPerGroup]-T.slidesGrid[v]):i>=T.slidesGrid[v]&&(w=v,y=T.slidesGrid[T.slidesGrid.length-1]-T.slidesGrid[T.slidesGrid.length-2]);var x=(i-T.slidesGrid[w])/y;if(s>T.params.longSwipesMs){if(!T.params.longSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&(x>=T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w)),"prev"===T.swipeDirection&&(x>1-T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w))}else{if(!T.params.shortSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&T.slideTo(w+T.params.slidesPerGroup),"prev"===T.swipeDirection&&T.slideTo(w)}}},T._slideTo=function(e,a){return T.slideTo(e,a,!0,!0)},T.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),T.snapIndex=Math.floor(e/T.params.slidesPerGroup),T.snapIndex>=T.snapGrid.length&&(T.snapIndex=T.snapGrid.length-1);var i=-T.snapGrid[T.snapIndex];if(T.params.autoplay&&T.autoplaying&&(s||!T.params.autoplayDisableOnInteraction?T.pauseAutoplay(a):T.stopAutoplay()),T.updateProgress(i),T.params.normalizeSlideIndex)for(var r=0;r<T.slidesGrid.length;r++)-Math.floor(100*i)>=Math.floor(100*T.slidesGrid[r])&&(e=r);return!(!T.params.allowSwipeToNext&&i<T.translate&&i<T.minTranslate())&&(!(!T.params.allowSwipeToPrev&&i>T.translate&&i>T.maxTranslate()&&(T.activeIndex||0)!==e)&&(void 0===a&&(a=T.params.speed),T.previousIndex=T.activeIndex||0,T.activeIndex=e,T.updateRealIndex(),T.rtl&&-i===T.translate||!T.rtl&&i===T.translate?(T.params.autoHeight&&T.updateAutoHeight(),T.updateClasses(),"slide"!==T.params.effect&&T.setWrapperTranslate(i),!1):(T.updateClasses(),T.onTransitionStart(t),0===a||T.browser.lteIE9?(T.setWrapperTranslate(i),T.setWrapperTransition(0),T.onTransitionEnd(t)):(T.setWrapperTranslate(i),T.setWrapperTransition(a),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd(t)}))),!0)))},T.onTransitionStart=function(e){void 0===e&&(e=!0),T.params.autoHeight&&T.updateAutoHeight(),T.lazy&&T.lazy.onTransitionStart(),e&&(T.emit("onTransitionStart",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeStart",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextStart",T):T.emit("onSlidePrevStart",T)))},T.onTransitionEnd=function(e){T.animating=!1,T.setWrapperTransition(0),void 0===e&&(e=!0),T.lazy&&T.lazy.onTransitionEnd(),e&&(T.emit("onTransitionEnd",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeEnd",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextEnd",T):T.emit("onSlidePrevEnd",T))),T.params.history&&T.history&&T.history.setHistory(T.params.history,T.activeIndex),T.params.hashnav&&T.hashnav&&T.hashnav.setHash()},T.slideNext=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)}return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)},T._slideNext=function(e){return T.slideNext(!0,e,!0)},T.slidePrev=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex-1,a,e,t)}return T.slideTo(T.activeIndex-1,a,e,t)},T._slidePrev=function(e){return T.slidePrev(!0,e,!0)},T.slideReset=function(e,a,t){return T.slideTo(T.activeIndex,a,e)},T.disableTouchControl=function(){return T.params.onlyExternal=!0,!0},T.enableTouchControl=function(){return T.params.onlyExternal=!1,!0},T.setWrapperTransition=function(e,a){T.wrapper.transition(e),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTransition(e),T.params.parallax&&T.parallax&&T.parallax.setTransition(e),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTransition(e),T.params.control&&T.controller&&T.controller.setTransition(e,a),T.emit("onSetTransition",T,e)},T.setWrapperTranslate=function(e,a,t){var s=0,i=0;T.isHorizontal()?s=T.rtl?-e:e:i=e,T.params.roundLengths&&(s=r(s),i=r(i)),T.params.virtualTranslate||(T.support.transforms3d?T.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):T.wrapper.transform("translate("+s+"px, "+i+"px)")),T.translate=T.isHorizontal()?s:i;var n,o=T.maxTranslate()-T.minTranslate();n=0===o?0:(e-T.minTranslate())/o,n!==T.progress&&T.updateProgress(e),a&&T.updateActiveIndex(),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTranslate(T.translate),T.params.parallax&&T.parallax&&T.parallax.setTranslate(T.translate),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTranslate(T.translate),T.params.control&&T.controller&&T.controller.setTranslate(T.translate,t),T.emit("onSetTranslate",T,T.translate)},T.getTranslate=function(e,a){var t,s,i,r;return void 0===a&&(a="x"),T.params.virtualTranslate?T.rtl?-T.translate:T.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=i.transform||i.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new window.WebKitCSSMatrix("none"===s?"":s)):(r=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=r.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?r.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?r.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),T.rtl&&s&&(s=-s),s||0)},T.getWrapperTranslate=function(e){return void 0===e&&(e=T.isHorizontal()?"x":"y"),T.getTranslate(T.wrapper[0],e)},T.observers=[],T.initObservers=function(){if(T.params.observeParents)for(var e=T.container.parents(),a=0;a<e.length;a++)l(e[a]);l(T.container[0],{childList:!1}),l(T.wrapper[0],{attributes:!1})},T.disconnectObservers=function(){for(var e=0;e<T.observers.length;e++)T.observers[e].disconnect();T.observers=[]},T.createLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove();var a=T.wrapper.children("."+T.params.slideClass);"auto"!==T.params.slidesPerView||T.params.loopedSlides||(T.params.loopedSlides=a.length),T.loopedSlides=parseInt(T.params.loopedSlides||T.params.slidesPerView,10),T.loopedSlides=T.loopedSlides+T.params.loopAdditionalSlides,T.loopedSlides>a.length&&(T.loopedSlides=a.length);var t,s=[],i=[];for(a.each(function(t,r){var n=e(this);t<T.loopedSlides&&i.push(r),t<a.length&&t>=a.length-T.loopedSlides&&s.push(r),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))},T.destroyLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove(),T.slides.removeAttr("data-swiper-slide-index")},T.reLoop=function(e){var a=T.activeIndex-T.loopedSlides;T.destroyLoop(),T.createLoop(),T.updateSlidesSize(),e&&T.slideTo(a+T.loopedSlides,0,!1)},T.fixLoop=function(){var e;T.activeIndex<T.loopedSlides?(e=T.slides.length-3*T.loopedSlides+T.activeIndex,e+=T.loopedSlides,T.slideTo(e,0,!1,!0)):("auto"===T.params.slidesPerView&&T.activeIndex>=2*T.loopedSlides||T.activeIndex>T.slides.length-2*T.params.slidesPerView)&&(e=-T.slides.length+T.activeIndex+T.loopedSlides,e+=T.loopedSlides,T.slideTo(e,0,!1,!0))},T.appendSlide=function(e){if(T.params.loop&&T.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&T.wrapper.append(e[a]);else T.wrapper.append(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0)},T.prependSlide=function(e){T.params.loop&&T.destroyLoop();var a=T.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&T.wrapper.prepend(e[t]);a=T.activeIndex+e.length}else T.wrapper.prepend(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.slideTo(a,0,!1)},T.removeSlide=function(e){T.params.loop&&(T.destroyLoop(),T.slides=T.wrapper.children("."+T.params.slideClass));var a,t=T.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.params.loop?T.slideTo(t+T.loopedSlides,0,!1):T.slideTo(t,0,!1)},T.removeAllSlides=function(){for(var e=[],a=0;a<T.slides.length;a++)e.push(a);T.removeSlide(e)},T.effects={fade:{setTranslate:function(){for(var e=0;e<T.slides.length;e++){var a=T.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;T.params.virtualTranslate||(s-=T.translate);var i=0;T.isHorizontal()||(i=s,s=0);var r=T.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:r}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){if(T.slides.transition(e),T.params.virtualTranslate&&0!==e){var a=!1;T.slides.transitionEnd(function(){if(!a&&T){a=!0,T.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)T.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<T.slides.length;a++){var t=T.slides.eq(a),s=t[0].progress;T.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,r=-180*s,n=r,o=0,l=-i,p=0;if(T.isHorizontal()?T.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+T.slides.length,T.params.flip.slideShadows){var d=T.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=T.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),T.params.virtualTranslate&&0!==a){var t=!1;T.slides.eq(T.activeIndex).transitionEnd(function(){if(!t&&T&&e(this).hasClass(T.params.slideActiveClass)){t=!0,T.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)T.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;T.params.cube.shadow&&(T.isHorizontal()?(a=T.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),T.wrapper.append(a)),a.css({height:T.width+"px"})):(a=T.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),T.container.append(a))));for(var s=0;s<T.slides.length;s++){var i=T.slides.eq(s),r=90*s,n=Math.floor(r/360);T.rtl&&(r=-r,n=Math.floor(-r/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*T.size,d=0):(s-1)%4==0?(l=0,d=4*-n*T.size):(s-2)%4==0?(l=T.size+4*n*T.size,d=T.size):(s-3)%4==0&&(l=-T.size,d=3*T.size+4*T.size*n),T.rtl&&(l=-l),T.isHorizontal()||(p=l,l=0);var u="rotateX("+(T.isHorizontal()?0:-r)+"deg) rotateY("+(T.isHorizontal()?r:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,T.rtl&&(t=90*-s-90*o)),i.transform(u),T.params.cube.slideShadows){var c=T.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=T.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(T.wrapper.css({"-webkit-transform-origin":"50% 50% -"+T.size/2+"px","-moz-transform-origin":"50% 50% -"+T.size/2+"px","-ms-transform-origin":"50% 50% -"+T.size/2+"px","transform-origin":"50% 50% -"+T.size/2+"px"}),T.params.cube.shadow)if(T.isHorizontal())a.transform("translate3d(0px, "+(T.width/2+T.params.cube.shadowOffset)+"px, "+-T.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+T.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),f=T.params.cube.shadowScale,v=T.params.cube.shadowScale/g,w=T.params.cube.shadowOffset;a.transform("scale3d("+f+", 1, "+v+") translate3d(0px, "+(T.height/2+w)+"px, "+-T.height/2/v+"px) rotateX(-90deg)")}var y=T.isSafari||T.isUiWebView?-T.size/2:0;T.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(T.isHorizontal()?0:t)+"deg) rotateY("+(T.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),T.params.cube.shadow&&!T.isHorizontal()&&T.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=T.translate,t=T.isHorizontal()?-a+T.width/2:-a+T.height/2,s=T.isHorizontal()?T.params.coverflow.rotate:-T.params.coverflow.rotate,i=T.params.coverflow.depth,r=0,n=T.slides.length;r<n;r++){var o=T.slides.eq(r),l=T.slidesSizesGrid[r],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*T.params.coverflow.modifier,u=T.isHorizontal()?s*d:0,c=T.isHorizontal()?0:s*d,m=-i*Math.abs(d),h=T.isHorizontal()?0:T.params.coverflow.stretch*d,g=T.isHorizontal()?T.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var f="translate3d("+g+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(f),o[0].style.zIndex=1-Math.abs(Math.round(d)),T.params.coverflow.slideShadows){var v=T.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=T.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(T.browser.ie){T.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},T.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==T.slides.length)){var s=T.slides.eq(a),i=s.find("."+T.params.lazyLoadingClass+":not(."+T.params.lazyStatusLoadedClass+"):not(."+T.params.lazyStatusLoadingClass+")");!s.hasClass(T.params.lazyLoadingClass)||s.hasClass(T.params.lazyStatusLoadedClass)||s.hasClass(T.params.lazyStatusLoadingClass)||(i=i.add(s[0])),0!==i.length&&i.each(function(){var a=e(this);a.addClass(T.params.lazyStatusLoadingClass);var i=a.attr("data-background"),r=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");T.loadImage(a[0],r||i,n,o,!1,function(){if(void 0!==T&&null!==T&&T){if(i?(a.css("background-image",'url("'+i+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),r&&(a.attr("src",r),a.removeAttr("data-src"))),a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),s.find("."+T.params.lazyPreloaderClass+", ."+T.params.preloaderClass).remove(),T.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(T.params.slideDuplicateClass)){var l=T.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+T.params.slideDuplicateClass+")");T.lazy.loadImageInSlide(l.index(),!1)}else{var p=T.wrapper.children("."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');T.lazy.loadImageInSlide(p.index(),!1)}}T.emit("onLazyImageReady",T,s[0],a[0])}}),T.emit("onLazyImageLoad",T,s[0],a[0])})}},load:function(){var a,t=T.params.slidesPerView;if("auto"===t&&(t=0),T.lazy.initialImageLoaded||(T.lazy.initialImageLoaded=!0),T.params.watchSlidesVisibility)T.wrapper.children("."+T.params.slideVisibleClass).each(function(){T.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=T.activeIndex;a<T.activeIndex+t;a++)T.slides[a]&&T.lazy.loadImageInSlide(a);else T.lazy.loadImageInSlide(T.activeIndex);if(T.params.lazyLoadingInPrevNext)if(t>1||T.params.lazyLoadingInPrevNextAmount&&T.params.lazyLoadingInPrevNextAmount>1){var s=T.params.lazyLoadingInPrevNextAmount,i=t,r=Math.min(T.activeIndex+i+Math.max(s,i),T.slides.length),n=Math.max(T.activeIndex-Math.max(i,s),0);for(a=T.activeIndex+t;a<r;a++)T.slides[a]&&T.lazy.loadImageInSlide(a);for(a=n;a<T.activeIndex;a++)T.slides[a]&&T.lazy.loadImageInSlide(a)}else{var o=T.wrapper.children("."+T.params.slideNextClass);o.length>0&&T.lazy.loadImageInSlide(o.index());var l=T.wrapper.children("."+T.params.slidePrevClass);l.length>0&&T.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){T.params.lazyLoading&&(T.params.lazyLoadingOnTransitionStart||!T.params.lazyLoadingOnTransitionStart&&!T.lazy.initialImageLoaded)&&T.lazy.load()},onTransitionEnd:function(){T.params.lazyLoading&&!T.params.lazyLoadingOnTransitionStart&&T.lazy.load()}},T.scrollbar={isTouched:!1,setDragPosition:function(e){var a=T.scrollbar,t=T.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[T.isHorizontal()?"left":"top"]-a.dragSize/2,i=-T.minTranslate()*a.moveDivider,r=-T.maxTranslate()*a.moveDivider;s<i?s=i:s>r&&(s=r),s=-s/a.moveDivider,T.updateProgress(s),T.setWrapperTranslate(s,!0)},dragStart:function(e){var a=T.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),T.params.scrollbarHide&&a.track.css("opacity",1),T.wrapper.transition(100),a.drag.transition(100),T.emit("onScrollbarDragStart",T)},dragMove:function(e){var a=T.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),T.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),T.emit("onScrollbarDragMove",T))},dragEnd:function(e){var a=T.scrollbar;a.isTouched&&(a.isTouched=!1,T.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),T.emit("onScrollbarDragEnd",T),T.params.scrollbarSnapOnRelease&&T.slideReset())},draggableEvents:function(){return T.params.simulateTouch!==!1||T.support.touch?T.touchEvents:T.touchEventsDesktop}(),enableDraggable:function(){var a=T.scrollbar,t=T.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=T.scrollbar,t=T.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(T.params.scrollbar){var a=T.scrollbar;a.track=e(T.params.scrollbar),T.params.uniqueNavElements&&"string"==typeof T.params.scrollbar&&a.track.length>1&&1===T.container.find(T.params.scrollbar).length&&(a.track=T.container.find(T.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=T.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=T.size/T.virtualSize,a.moveDivider=a.divider*(a.trackSize/T.size),a.dragSize=a.trackSize*a.divider,T.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",T.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(T.params.scrollbar){var e,a=T.scrollbar,t=(T.translate,a.dragSize);e=(a.trackSize-a.dragSize)*T.progress,T.rtl&&T.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),T.isHorizontal()?(T.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(T.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),T.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){T.params.scrollbar&&T.scrollbar.drag.transition(e)}},T.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,i){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=i?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,i;this.x.length;this.interpolate=function(e){return e?(i=t(this.x,e),s=i-1,(e-this.x[s])*(this.y[i]-this.y[s])/(this.x[i]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){T.controller.spline||(T.controller.spline=T.params.loop?new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid):new T.controller.LinearSpline(T.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-T.translate:T.translate,"slide"===T.params.controlBy&&(T.controller.getInterpolateFunction(a),r=-T.controller.spline.interpolate(-e)),r&&"container"!==T.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(T.maxTranslate()-T.minTranslate()),r=(e-T.minTranslate())*i+a.minTranslate()),T.params.controlInverse&&(r=a.maxTranslate()-r),a.updateProgress(r),a.setWrapperTranslate(r,!1,T),a.updateActiveIndex()}var i,r,n=T.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,T),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){r&&(a.params.loop&&"slide"===T.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,r=T.params.control;if(Array.isArray(r))for(i=0;i<r.length;i++)r[i]!==t&&r[i]instanceof a&&s(r[i]);else r instanceof a&&t!==r&&s(r)}},T.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==T.slides.eq(T.activeIndex).attr("data-hash")&&T.slideTo(T.wrapper.children("."+T.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",T.hashnav.onHashCange)},setHash:function(){
if(T.hashnav.initialized&&T.params.hashnav)if(T.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+T.slides.eq(T.activeIndex).attr("data-hash")||"");else{var e=T.slides.eq(T.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(T.params.hashnav&&!T.params.history){T.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=T.slides.length;a<t;a++){var s=T.slides.eq(a),i=s.attr("data-hash")||s.attr("data-history");if(i===e&&!s.hasClass(T.params.slideDuplicateClass)){var r=s.index();T.slideTo(r,0,T.params.runCallbacksOnInit,!0)}}T.params.hashnavWatchState&&T.hashnav.attachEvents()}},destroy:function(){T.params.hashnavWatchState&&T.hashnav.attachEvents(!0)}},T.history={init:function(){if(T.params.history){if(!window.history||!window.history.pushState)return T.params.history=!1,void(T.params.hashnav=!0);T.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,T.params.runCallbacksOnInit),T.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){T.history.paths=T.history.getPathValues(),T.history.scrollToSlide(T.params.speed,T.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(T.history.initialized&&T.params.history){var t=T.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),T.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,i=T.slides.length;s<i;s++){var r=T.slides.eq(s),n=this.slugify(r.attr("data-history"));if(n===a&&!r.hasClass(T.params.slideDuplicateClass)){var o=r.index();T.slideTo(o,e,t)}}else T.slideTo(0,e,t)}},T.disableKeyboardControl=function(){T.params.keyboardControl=!1,e(document).off("keydown",p)},T.enableKeyboardControl=function(){T.params.keyboardControl=!0,e(document).on("keydown",p)},T.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},T.params.mousewheelControl&&(T.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),T.disableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var a=T.container;return"container"!==T.params.mousewheelEventsTarged&&(a=e(T.params.mousewheelEventsTarged)),a.off(T.mousewheel.event,u),T.params.mousewheelControl=!1,!0},T.enableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var a=T.container;return"container"!==T.params.mousewheelEventsTarged&&(a=e(T.params.mousewheelEventsTarged)),a.on(T.mousewheel.event,u),T.params.mousewheelControl=!0,!0},T.parallax={setTranslate:function(){T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,T.progress)}),T.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=T.params.speed),T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},T.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:T.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(i-t,2))},onGestureStart:function(a){var t=T.zoom;if(!T.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=T.slides.eq(T.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+T.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||T.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=T.zoom;if(!T.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(T.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<T.params.zoomMin&&(a.scale=T.params.zoomMin+1-Math.pow(T.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=T.zoom;!T.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),T.params.zoomMin),a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=T.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(T.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=T.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=T.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),T.rtl&&(a.image.startX=-a.image.startX),T.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(T.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!T.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,i=300,r=t.velocity.x*s,n=t.image.currentX+r,o=t.velocity.y*i,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(i=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,i);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,u=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-u/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var i,r,n,o,l,p,d,u,c,m,h,g,f,v,w,y,x,T;void 0===s.image.touchesStart.x&&t?(i="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,r="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(i=s.image.touchesStart.x,r=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-i,p=o+T/2-r,c=s.gesture.image[0].offsetWidth,m=s.gesture.image[0].offsetHeight,h=c*s.scale,g=m*s.scale,f=Math.min(x/2-h/2,0),v=Math.min(T/2-g/2,0),w=-f,y=-v,d=l*s.scale,u=p*s.scale,d<f&&(d=f),d>w&&(d=w),u<v&&(u=v),u>y&&(u=y)):(d=0,u=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+u+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(T.params.zoom){var s=(T.slides,!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1});T.support.gestures?(T.slides[t]("gesturestart",T.zoom.onGestureStart,s),T.slides[t]("gesturechange",T.zoom.onGestureChange,s),T.slides[t]("gestureend",T.zoom.onGestureEnd,s)):"touchstart"===T.touchEvents.start&&(T.slides[t](T.touchEvents.start,T.zoom.onGestureStart,s),T.slides[t](T.touchEvents.move,T.zoom.onGestureChange,s),T.slides[t](T.touchEvents.end,T.zoom.onGestureEnd,s)),T[t]("touchStart",T.zoom.onTouchStart),T.slides.each(function(a,s){e(s).find("."+T.params.zoomContainerClass).length>0&&e(s)[t](T.touchEvents.move,T.zoom.onTouchMove)}),T[t]("touchEnd",T.zoom.onTouchEnd),T[t]("transitionEnd",T.zoom.onTransitionEnd),T.params.zoomToggle&&T.on("doubleTap",T.zoom.toggleZoom)}},init:function(){T.zoom.attachEvents()},destroy:function(){T.zoom.attachEvents(!0)}},T._plugins=[];for(var Y in T.plugins){var O=T.plugins[Y](T,T.params[Y]);O&&T._plugins.push(O)}return T.callPlugins=function(e){for(var a=0;a<T._plugins.length;a++)e in T._plugins[a]&&T._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.emitterEventListeners={},T.emit=function(e){T.params[e]&&T.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(T.emitterEventListeners[e])for(a=0;a<T.emitterEventListeners[e].length;a++)T.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);T.callPlugins&&T.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.on=function(e,a){return e=m(e),T.emitterEventListeners[e]||(T.emitterEventListeners[e]=[]),T.emitterEventListeners[e].push(a),T},T.off=function(e,a){var t;if(e=m(e),void 0===a)return T.emitterEventListeners[e]=[],T;if(T.emitterEventListeners[e]&&0!==T.emitterEventListeners[e].length){for(t=0;t<T.emitterEventListeners[e].length;t++)T.emitterEventListeners[e][t]===a&&T.emitterEventListeners[e].splice(t,1);return T}},T.once=function(e,a){e=m(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),T.off(e,t)};return T.on(e,t),T},T.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(T.params.nextButton)?(T.onClickNext(a),T.isEnd?T.a11y.notify(T.params.lastSlideMessage):T.a11y.notify(T.params.nextSlideMessage)):e(a.target).is(T.params.prevButton)&&(T.onClickPrev(a),T.isBeginning?T.a11y.notify(T.params.firstSlideMessage):T.a11y.notify(T.params.prevSlideMessage)),e(a.target).is("."+T.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+T.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=T.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.a11y.makeFocusable(T.nextButton),T.a11y.addRole(T.nextButton,"button"),T.a11y.addLabel(T.nextButton,T.params.nextSlideMessage)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.a11y.makeFocusable(T.prevButton),T.a11y.addRole(T.prevButton,"button"),T.a11y.addLabel(T.prevButton,T.params.prevSlideMessage)),e(T.container).append(T.a11y.liveRegion)},initPagination:function(){T.params.pagination&&T.params.paginationClickable&&T.bullets&&T.bullets.length&&T.bullets.each(function(){var a=e(this);T.a11y.makeFocusable(a),T.a11y.addRole(a,"button"),T.a11y.addLabel(a,T.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){T.a11y.liveRegion&&T.a11y.liveRegion.length>0&&T.a11y.liveRegion.remove()}},T.init=function(){T.params.loop&&T.createLoop(),T.updateContainerSize(),T.updateSlidesSize(),T.updatePagination(),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.set(),T.params.scrollbarDraggable&&T.scrollbar.enableDraggable()),"slide"!==T.params.effect&&T.effects[T.params.effect]&&(T.params.loop||T.updateProgress(),T.effects[T.params.effect].setTranslate()),T.params.loop?T.slideTo(T.params.initialSlide+T.loopedSlides,0,T.params.runCallbacksOnInit):(T.slideTo(T.params.initialSlide,0,T.params.runCallbacksOnInit),0===T.params.initialSlide&&(T.parallax&&T.params.parallax&&T.parallax.setTranslate(),T.lazy&&T.params.lazyLoading&&(T.lazy.load(),T.lazy.initialImageLoaded=!0))),T.attachEvents(),T.params.observer&&T.support.observer&&T.initObservers(),T.params.preloadImages&&!T.params.lazyLoading&&T.preloadImages(),T.params.zoom&&T.zoom&&T.zoom.init(),T.params.autoplay&&T.startAutoplay(),T.params.keyboardControl&&T.enableKeyboardControl&&T.enableKeyboardControl(),T.params.mousewheelControl&&T.enableMousewheelControl&&T.enableMousewheelControl(),T.params.hashnavReplaceState&&(T.params.replaceState=T.params.hashnavReplaceState),T.params.history&&T.history&&T.history.init(),T.params.hashnav&&T.hashnav&&T.hashnav.init(),T.params.a11y&&T.a11y&&T.a11y.init(),T.emit("onInit",T)},T.cleanupStyles=function(){T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),T.wrapper.removeAttr("style"),T.slides&&T.slides.length&&T.slides.removeClass([T.params.slideVisibleClass,T.params.slideActiveClass,T.params.slideNextClass,T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),T.paginationContainer&&T.paginationContainer.length&&T.paginationContainer.removeClass(T.params.paginationHiddenClass),T.bullets&&T.bullets.length&&T.bullets.removeClass(T.params.bulletActiveClass),T.params.prevButton&&e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),T.params.nextButton&&e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.track&&T.scrollbar.track.length&&T.scrollbar.track.removeAttr("style"),T.scrollbar.drag&&T.scrollbar.drag.length&&T.scrollbar.drag.removeAttr("style"))},T.destroy=function(e,a){T.detachEvents(),T.stopAutoplay(),T.params.scrollbar&&T.scrollbar&&T.params.scrollbarDraggable&&T.scrollbar.disableDraggable(),T.params.loop&&T.destroyLoop(),a&&T.cleanupStyles(),T.disconnectObservers(),T.params.zoom&&T.zoom&&T.zoom.destroy(),T.params.keyboardControl&&T.disableKeyboardControl&&T.disableKeyboardControl(),T.params.mousewheelControl&&T.disableMousewheelControl&&T.disableMousewheelControl(),T.params.a11y&&T.a11y&&T.a11y.destroy(),T.params.history&&!T.params.replaceState&&window.removeEventListener("popstate",T.history.setHistoryPopState),T.params.hashnav&&T.hashnav&&T.hashnav.destroy(),T.emit("onDestroy"),e!==!1&&(T=null)},T.init(),T}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||i||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var s=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var r,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)s.push(n.childNodes[i])}else for(r=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<r.length;i++)r[i]&&s.push(r[i])}else if(a.nodeType||a===window||a===document)s.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)s.push(a[i]);return new e(s)};return e.prototype={addClass:function(e){if(void 0===e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.remove(a[t]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var s in e)this[t][s]=e[s],this[t].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if(void 0!==a){for(var t=0;t<this.length;t++){var s=this[t];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a}return this}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,s,i){function r(e){var i=e.target;if(a(i).is(t))s.call(i,e);else for(var r=a(i).parents(),n=0;n<r.length;n++)a(r[n]).is(t)&&s.call(r[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(s=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],s,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:s,liveListener:r}),this[n].addEventListener(l[o],r,i);return this},off:function(e,a,t,s){for(var i=e.split(" "),r=0;r<i.length;r++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],s=arguments[2]||!1),this[n].removeEventListener(i[r],t,s);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[r],this[n].dom7LiveListeners[o].liveListener,s);return this},once:function(e,a,t,s){function i(n){t(n),r.off(e,a,i,s)}var r=this;"function"==typeof a&&(a=!1,t=arguments[1],s=arguments[2]),r.on(e,a,i,s)},trigger:function(e,a){for(var t=0;t<this.length;t++){var s;try{s=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(t){s=document.createEvent("Event"),s.initEvent(e,!0,!0),s.detail=a}this[t].dispatchEvent(s)}return this},transitionEnd:function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,s=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,r=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+r-s,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var s in e)this[t].style[s]=e[s];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var s,i;if("string"==typeof t){var r=this[0];if(r===document)return t===document;if(r===window)return t===window;if(r.matches)return r.matches(t);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(t);if(r.mozMatchesSelector)return r.mozMatchesSelector(t);if(r.msMatchesSelector)return r.msMatchesSelector(t);for(s=a(t),i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(s=t.nodeType?[t]:t,i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if(void 0===a)return this;var t,s=this.length;return a>s-1?new e([]):a<0?(t=s+a,new e(t<0?[]:[this[t]])):new e([this[a]])},append:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].appendChild(a[s]);else this[t].appendChild(a);return this},prepend:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,s=i.childNodes.length-1;s>=0;s--)this[t].insertBefore(i.childNodes[s],this[t].childNodes[0])}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].insertBefore(a[s],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var r=i.nextElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var r=i.previousElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},parent:function(e){for(var t=[],s=0;s<this.length;s++)e?a(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].querySelectorAll(a),r=0;r<i.length;r++)t.push(i[r]);return new e(t)},children:function(t){for(var s=[],i=0;i<this.length;i++)for(var r=this[i].childNodes,n=0;n<r.length;n++)t?1===r[n].nodeType&&a(r[n]).is(t)&&s.push(r[n]):1===r[n].nodeType&&s.push(r[n]);return new e(a.unique(s))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,s=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)s[s.length]=i[t],s.length++}return s}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)a.indexOf(e[t])===-1&&a.push(e[t]);return a},a}()),s=["jQuery","Zepto","Dom7"],i=0;i<s.length;i++)window[s[i]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[s[i]]);var r;r=void 0===t?window.Dom7||window.Zepto||window.jQuery:t,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){
return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.min.js.map

function loadHtml5LightBox(o){!function(t){t.fn.html5lightbox=function(i){var e=this;e.options=jQuery.extend({freelink:!1,autoplay:!0,html5player:!0,responsive:!0,nativehtml5controls:!1,videohidecontrols:!1,useflashonie9:!0,useflashonie10:!1,useflashonie11:!1,googleanalyticsaccount:"",arrowloop:!0,shownavigation:!0,thumbwidth:96,thumbheight:72,thumbgap:4,thumbtopmargin:12,thumbbottommargin:12,thumbborder:1,thumbbordercolor:"transparent",thumbhighlightbordercolor:"#fff",thumbopacity:1,navbuttonwidth:32,overlaybgcolor:"#000",overlayopacity:.8,bgcolor:"#fff",bordersize:8,borderradius:0,bordermargin:16,barautoheight:!0,barheight:48,loadingwidth:64,loadingheight:64,resizespeed:400,fadespeed:400,jsfolder:o,skinsfoldername:"img/",loadingimage:"",nextimage:"lightbox-next.png",previmage:"lightbox-prev.png",closeimage:"close-box.png",playvideoimage:"lightbox-playvideo.png",titlebgimage:"lightbox-titlebg.png",showtitle:!0,titlestyle:"bottom",titleinsidecss:"{color:#fff; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;}",titlebottomcss:"{color:#333; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;}",showdescription:!0,descriptioninsidecss:"{color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",descriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",errorwidth:280,errorheight:48,errorcss:"{text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;}",supportesckey:!0,supportarrowkeys:!0,version:"3.3",stamp:!0,freemark:"",watermark:!1,watermarklink:""},i),"undefined"!=typeof html5lightbox_options&&html5lightbox_options&&jQuery.extend(e.options,html5lightbox_options),t("div#html5lightbox_options").length&&t.each(t("div#html5lightbox_options").data(),function(o,t){e.options[o.toLowerCase()]=t}),e.options.htmlfolder=window.location.href.substr(0,window.location.href.lastIndexOf("/")+1),e.options.skinsfolder=e.options.skinsfoldername,e.options.skinsfolder.length>0&&"/"!=e.options.skinsfolder[e.options.skinsfolder.length-1]&&(e.options.skinsfolder+="/"),"/"!=e.options.skinsfolder.charAt(0)&&"http:"!=e.options.skinsfolder.substring(0,5)&&"https:"!=e.options.skinsfolder.substring(0,6)&&(e.options.skinsfolder=e.options.jsfolder+e.options.skinsfolder);var n,s,r="",l=e.options.freemark.split(",");for(n=0;n<l.length;n++)r+=String.fromCharCode(l[n]);e.options.freemark=r;var a="hmtamgli5cboxh.iclolms";for(n=1;5>=n;n++)a=a.slice(0,n)+a.slice(n+1);for(s=a.length,n=0;5>n;n++)a=a.slice(0,s-9+n)+a.slice(s-8+n);-1!=e.options.htmlfolder.indexOf(a)&&(e.options.stamp=!1),e.options.navheight=0,e.options.thumbgap+=2*e.options.thumbborder,e.options.types=["IMAGE","FLASH","VIDEO","YOUTUBE","VIMEO","PDF","MP3","WEB","FLV","DAILYMOTION"],e.elemArray=new Array,e.options.curElem=-1,e.options.flashInstalled=!1;try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(e.options.flashInstalled=!0)}catch(h){navigator.mimeTypes["application/x-shockwave-flash"]&&(e.options.flashInstalled=!0)}e.options.html5VideoSupported=!!document.createElement("video").canPlayType,e.options.isChrome=null!=navigator.userAgent.match(/Chrome/i),e.options.isFirefox=null!=navigator.userAgent.match(/Firefox/i),e.options.isOpera=null!=navigator.userAgent.match(/Opera/i)||null!=navigator.userAgent.match(/OPR\//i),e.options.isSafari=null!=navigator.userAgent.match(/Safari/i),e.options.isIE11=null!=navigator.userAgent.match(/Trident\/7/)&&null!=navigator.userAgent.match(/rv:11/),e.options.isIE=null!=navigator.userAgent.match(/MSIE/i)&&!e.options.isOpera,e.options.isIE10=null!=navigator.userAgent.match(/MSIE 10/i)&&!this.options.isOpera,e.options.isIE9=null!=navigator.userAgent.match(/MSIE 9/i)&&!e.options.isOpera,e.options.isIE8=null!=navigator.userAgent.match(/MSIE 8/i)&&!e.options.isOpera,e.options.isIE7=null!=navigator.userAgent.match(/MSIE 7/i)&&!e.options.isOpera,e.options.isIE6=null!=navigator.userAgent.match(/MSIE 6/i)&&!e.options.isOpera,e.options.isIE678=e.options.isIE6||e.options.isIE7||e.options.isIE8,e.options.isIE6789=e.options.isIE6||e.options.isIE7||e.options.isIE8||e.options.isIE9,e.options.isAndroid=null!=navigator.userAgent.match(/Android/i),e.options.isIPad=null!=navigator.userAgent.match(/iPad/i),e.options.isIPhone=null!=navigator.userAgent.match(/iPod/i)||null!=navigator.userAgent.match(/iPhone/i),e.options.isIOS=e.options.isIPad||e.options.isIPhone,e.options.isMobile=e.options.isAndroid||e.options.isIPad||e.options.isIPhone,e.options.isIOSLess5=e.options.isIPad&&e.options.isIPhone&&(null!=navigator.userAgent.match(/OS 4/i)||null!=navigator.userAgent.match(/OS 3/i)),e.options.supportCSSPositionFixed=!e.options.isIE6&&!e.options.isIOSLess5,e.options.iequirksmode=e.options.isIE6789&&!jQuery.support.boxModel,e.options.resizeTimeout=-1,e.options.isMobile&&(e.options.autoplay=!1),e.options.googleanalyticsaccount&&!window._gaq&&(window._gaq=window._gaq||[],window._gaq.push(["_setAccount",e.options.googleanalyticsaccount]),window._gaq.push(["_trackPageview"]),t.getScript(("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js")),e.init=function(){e.showing=!1,e.readData(),e.createMarkup(),e.supportKeyboard()};var d=0,p=1,c=2,u=3,m=4,g=5,b=6,w=7,f=8,v=9;return e.readData=function(){e.each(function(){if("a"==this.nodeName.toLowerCase()||"area"==this.nodeName.toLowerCase()){var o=t(this),i=e.checkType(o.attr("href"));if(!(0>i)){for(var n=0;n<e.elemArray.length;n++)if(o.attr("href")==e.elemArray[n][p])return;e.elemArray.push(new Array(i,o.attr("href"),o.attr("title"),o.data("group"),o.data("width"),o.data("height"),o.data("webm"),o.data("ogg"),o.data("thumbnail"),o.data("description")))}}})},e.createMarkup=function(){"inside"==e.options.titlestyle?(e.options.titlecss=e.options.titleinsidecss,e.options.descriptioncss=e.options.descriptioninsidecss):"bottom"==e.options.titlestyle&&(e.options.titlecss=e.options.titlebottomcss,e.options.descriptioncss=e.options.descriptionbottomcss);var o="#html5-text "+e.options.titlecss;o+=".html5-description "+e.options.descriptioncss,o+=".html5-error "+e.options.errorcss,t("head").append("<style type='text/css'>"+o+"</style>"),e.$lightbox=jQuery("<div id='html5-lightbox' style='display:none;top:0px;left:0px;width:100%;height:100%;z-index:9999998;text-align:center;'><div id='html5-lightbox-overlay' style='display:block;position:absolute;top:0px;left:0px;width:100%;min-height:100%;background-color:"+e.options.overlaybgcolor+";opacity:"+e.options.overlayopacity+";filter:alpha(opacity="+Math.round(100*e.options.overlayopacity)+");'></div><div id='html5-lightbox-box' style='display:block;position:relative;margin:0px auto;'><div id='html5-elem-box' style='display:block;position:relative;margin:0px auto;text-align:center;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;'><div id='html5-elem-wrap' style='display:block;position:relative;margin:0px auto;text-align:center;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;background-color:"+e.options.bgcolor+";'><div id='html5-loading' style='display:none;position:absolute;top:0px;left:0px;text-align:center;width:100%;height:100%;background:url(\""+e.options.skinsfolder+e.options.loadingimage+"\") no-repeat center center;'></div><div id='html5-error' class='html5-error' style='display:none;position:absolute;padding:"+e.options.bordersize+"px;text-align:center;width:"+e.options.errorwidth+"px;height:"+e.options.errorheight+"px;'>The requested content cannot be loaded.<br />Please try again later.</div><div id='html5-image' style='display:none;position:absolute;top:0px;left:0px;"+(e.options.iequirksmode?"margin":"padding")+":"+e.options.bordersize+"px;text-align:center;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;'></div><div id='html5-next' style='display:none;cursor:pointer;position:absolute;right:"+e.options.bordersize+"px;top:50%;margin-top:-16px;'><img src='"+e.options.skinsfolder+e.options.nextimage+"'></div><div id='html5-prev' style='display:none;cursor:pointer;position:absolute;left:"+e.options.bordersize+"px;top:50%;margin-top:-16px;'><img src='"+e.options.skinsfolder+e.options.previmage+"'></div></div></div><div id='html5-watermark' style='display:none;position:absolute;left:"+String(e.options.bordersize+2)+"px;top:"+String(e.options.bordersize+2)+"px;'></div></div></div>"),e.$lightbox.css({position:e.options.supportCSSPositionFixed&&e.options.responsive&&!e.options.iequirksmode?"fixed":"absolute"}),e.$lightbox.appendTo("body"),e.$lightboxBox=t("#html5-lightbox-box",e.$lightbox),e.$elem=t("#html5-elem-box",e.$lightbox),e.$elemWrap=t("#html5-elem-wrap",e.$lightbox),e.$loading=t("#html5-loading",e.$lightbox),e.$error=t("#html5-error",e.$lightbox),e.$image=t("#html5-image",e.$lightbox),e.$next=t("#html5-next",e.$lightbox),e.$prev=t("#html5-prev",e.$lightbox);var i="<div id='html5-elem-data-box' style='display:none;'><div id='html5-text' style='display:block;overflow:hidden;'></div></div>";if(e.$elem.append(i),e.$elemData=t("#html5-elem-data-box",e.$lightbox),e.$text=t("#html5-text",e.$lightbox),e.options.borderradius>0&&(e.$elem.css({"border-radius":e.options.borderradius+"px","-moz-border-radius":e.options.borderradius+"px","-webkit-border-radius":e.options.borderradius+"px"}),"inside"==e.options.titlestyle?e.$elemWrap.css({"border-radius":e.options.borderradius+"px","-moz-border-radius":e.options.borderradius+"px","-webkit-border-radius":e.options.borderradius+"px"}):(e.$elemWrap.css({"border-top-left-radius":e.options.borderradius+"px","-moz-top-left-border-radius":e.options.borderradius+"px","-webkit-top-left-border-radius":e.options.borderradius+"px","border-top-right-radius":e.options.borderradius+"px","-moz-top-right-border-radius":e.options.borderradius+"px","-webkit-top-right-border-radius":e.options.borderradius+"px"}),e.$elemData.css({"border-bottom-left-radius":e.options.borderradius+"px","-moz-top-bottom-border-radius":e.options.borderradius+"px","-webkit-bottom-left-border-radius":e.options.borderradius+"px","border-bottom-right-radius":e.options.borderradius+"px","-moz-bottom-right-border-radius":e.options.borderradius+"px","-webkit-bottom-right-border-radius":e.options.borderradius+"px"}))),"inside"==e.options.titlestyle?(e.$elemData.css({position:"absolute",margin:e.options.bordersize+"px",bottom:0,left:0,"background-color":"#333","background-color":"rgba(51, 51, 51, 0.6)"}),e.$text.css({padding:e.options.bordersize+"px "+2*e.options.bordersize+"px"})):(e.$elemData.css({position:"relative",width:"100%",height:e.options.barautoheight?"auto":e.options.barheight+"px",padding:"0 0 "+e.options.bordersize+"px 0","background-color":e.options.bgcolor,"text-align":"left"}),e.$text.css({margin:"0 "+e.options.bordersize+"px"})),e.$lightboxBox.append("<div id='html5-close' style='display:none;cursor:pointer;position:absolute;top:0;right:0;margin-top:-16px;margin-right:-16px;'><img src='"+e.options.skinsfolder+e.options.closeimage+"'></div>"),e.$close=t("#html5-close",e.$lightbox),e.$watermark=t("#html5-watermark",e.$lightbox),e.options.stamp)e.$watermark.html("<a href='"+e.options.freelink+"' style='text-decoration:none;' title='jQuery Lightbox'><div style='display:block;width:170px;height:20px;text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;color:#333;font:12px Arial,sans-serif;'><div style='line-height:20px;'>"+e.options.freemark+"</div></div></a>");else if(e.options.watermark){var n="<img src='"+e.options.watermark+"' style='border:none;' />";e.options.watermarklink&&(n="<a href='"+e.options.watermarklink+"' target='_blank'>"+n+"</a>"),e.$watermark.html(n)}t("#html5-lightbox-overlay",e.$lightbox).click(e.finish),e.$close.click(e.finish),e.$next.click(function(){e.options.nextElem<=e.options.curElem&&e.options.onlastarrowclicked&&window[e.options.onlastarrowclicked]&&"function"==typeof window[e.options.onlastarrowclicked]&&window[e.options.onlastarrowclicked](),e.gotoSlide(-1)}),e.$prev.click(function(){e.options.prevElem>=e.options.curElem&&e.options.onfirstarrowclicked&&window[e.options.onfirstarrowclicked]&&"function"==typeof window[e.options.onfirstarrowclicked]&&window[e.options.onfirstarrowclicked](),e.gotoSlide(-2)}),t(window).resize(function(){e.options.isMobile||(clearTimeout(e.options.resizeTimeout),e.options.resizeTimeout=setTimeout(function(){e.resizeWindow()},500))}),t(window).scroll(function(){e.scrollBox()}),t(window).bind("orientationchange",function(o){e.options.isMobile&&e.resizeWindow()}),e.options.isIPhone&&(e.options.windowInnerHeight=window.innerHeight,setInterval(function(){e.options.windowInnerHeight!=window.innerHeight&&(e.options.windowInnerHeight=window.innerHeight,e.resizeWindow())},500)),e.enableSwipe()},e.calcNextPrevElem=function(){e.options.nextElem=-1,e.options.prevElem=-1;var o,t=e.elemArray[e.options.curElem][u];if(void 0!=t&&null!=t){for(o=e.options.curElem+1;o<e.elemArray.length;o++)if(e.elemArray[o][u]==t){e.options.nextElem=o;break}if(e.options.nextElem<0)for(o=0;o<e.options.curElem;o++)if(e.elemArray[o][u]==t){e.options.nextElem=o;break}if(e.options.nextElem>=0){for(o=e.options.curElem-1;o>=0;o--)if(e.elemArray[o][u]==t){e.options.prevElem=o;break}if(e.options.prevElem<0)for(o=e.elemArray.length-1;o>e.options.curElem;o--)if(e.elemArray[o][u]==t){e.options.prevElem=o;break}}}},e.clickHandler=function(){if(e.elemArray.length<=0)return!0;var o=t(this);e.hideObjects();for(var i=0;i<e.elemArray.length&&e.elemArray[i][p]!=o.attr("href");i++);if(i==e.elemArray.length)return!0;e.options.curElem=i,e.options.nextElem=-1,e.options.prevElem=-1,e.calcNextPrevElem(),e.$next.hide(),e.$prev.hide(),e.reset(),e.$lightbox.show(),e.options.supportCSSPositionFixed||e.$lightbox.css("top",t(window).scrollTop());var n=e.options.loadingwidth+2*e.options.bordersize,s=e.options.loadingheight+2*e.options.bordersize,r=window.innerHeight?window.innerHeight:t(window).height(),l=Math.round(r/2-s/2);return"inside"!=e.options.titlestyle&&(l-=Math.round(e.options.barheight/2)),16>l&&(l=16),e.options.iequirksmode?e.$lightboxBox.css({top:l}):e.$lightboxBox.css({"margin-top":l}),e.$lightboxBox.css({width:n,height:s}),e.$elemWrap.css({width:n,height:s}),e.loadCurElem(),!1},e.loadThumbnail=function(o,i){var n=new Image;t(n).load(function(){var n;n=this.width/this.height<=e.options.thumbwidth/e.options.thumbheight?"width:100%;":"height:100%;",t(".html5-nav-thumb").eq(i).html("<img style='"+n+"' src='"+o+"' />")}),n.src=o},e.showNavigation=function(){if(e.options.shownavigation&&e.currentElem&&e.currentElem[u]){var o,i=!1,n=e.currentElem[u];for(o=0;o<e.elemArray.length;o++)if(n==e.elemArray[o][u]&&e.elemArray[o][f]&&e.elemArray[o][f].length>0){i=!0;break}if(i&&(e.options.navheight=e.options.thumbheight+e.options.thumbtopmargin+e.options.thumbbottommargin,!(t(".html5-nav").length>0))){t("body").append("<div class='html5-nav' style='display:block;position:fixed;bottom:0;left:0;width:100%;height:"+e.options.navheight+"px;z-index:9999999;'><div class='html5-nav-container' style='position:relative;margin:"+e.options.thumbtopmargin+"px auto "+e.options.thumbbottommargin+"px;'><div class='html5-nav-prev' style='display:block;position:absolute;cursor:pointer;width:"+e.options.navbuttonwidth+'px;height:100%;left:0;top:0;background:url("'+e.options.skinsfolder+e.options.navarrowsprevimage+"\") no-repeat left center;'></div><div class='html5-nav-mask' style='display:block;position:relative;margin:0 auto;overflow:hidden;'><div class='html5-nav-list'></div></div><div class='html5-nav-next' style='display:block;position:absolute;cursor:pointer;width:"+e.options.navbuttonwidth+'px;height:100%;right:0;top:0;background:url("'+e.options.skinsfolder+e.options.navarrowsnextimage+"\") no-repeat right center;'></div></div></div>");var s=0;for(o=0;o<e.elemArray.length;o++)n==e.elemArray[o][u]&&e.elemArray[o][f]&&e.elemArray[o][f].length>0&&(t(".html5-nav-list").append("<div class='html5-nav-thumb' data-arrayindex='"+o+"' style='float:left;overflow:hidden;cursor:pointer;opacity:"+e.options.thumbopacity+";margin: 0 "+e.options.thumbgap/2+"px;width:"+e.options.thumbwidth+"px;height:"+e.options.thumbheight+"px;border:"+e.options.thumbborder+"px solid "+e.options.thumbbordercolor+";'></div>"),this.loadThumbnail(e.elemArray[o][f],s),s++);t(".html5-nav-thumb").hover(function(){t(this).css({opacity:1}),t(this).css({border:e.options.thumbborder+"px solid "+e.options.thumbhighlightbordercolor})},function(){t(this).css({opacity:e.options.thumbopacity}),t(this).css({border:e.options.thumbborder+"px solid "+e.options.thumbbordercolor})}),t(".html5-nav-thumb").click(function(){var o=t(this).data("arrayindex");o>=0&&e.gotoSlide(o)}),e.options.totalwidth=s*(e.options.thumbgap+e.options.thumbwidth+2*e.options.thumbborder),t(".html5-nav-list").css({display:"block",position:"relative","margin-left":0,width:e.options.totalwidth+"px"}).append("<div style='clear:both;'></div>");var r=t(".html5-nav-mask"),l=t(".html5-nav-prev"),a=t(".html5-nav-next");l.click(function(){var o=t(".html5-nav-list"),i=t(".html5-nav-next"),n=e.options.isMobile?Math.max(t(window).width(),t(document).width()):t(window).width(),s=n-2*e.options.navbuttonwidth,r=parseInt(o.css("margin-left"))+s;r>=0?(r=0,t(this).css({"background-position":"center left"})):t(this).css({"background-position":"center right"}),r<=s-e.options.totalwidth?i.css({"background-position":"center left"}):i.css({"background-position":"center right"}),o.animate({"margin-left":r})}),a.click(function(){var o=t(".html5-nav-list"),i=t(".html5-nav-prev"),n=e.options.isMobile?Math.max(t(window).width(),t(document).width()):t(window).width(),s=n-2*e.options.navbuttonwidth,r=parseInt(o.css("margin-left"))-s;r<=s-e.options.totalwidth?(r=s-e.options.totalwidth,t(this).css({"background-position":"center left"})):t(this).css({"background-position":"center right"}),r>=0?i.css({"background-position":"center left"}):i.css({"background-position":"center right"}),o.animate({"margin-left":r})});var h=e.options.isMobile?Math.max(t(window).width(),t(document).width()):t(window).width();e.options.totalwidth<=h?(r.css({width:e.options.totalwidth+"px"}),l.hide(),a.hide()):(r.css({width:h-2*e.options.navbuttonwidth+"px"}),l.show(),a.show())}}},e.loadElem=function(o){switch(e.currentElem=o,e.showing=!0,e.showNavigation(),e.$elem.unbind("mouseenter").unbind("mouseleave").unbind("mousemove"),e.$loading.show(),e.options.onshowitem&&window[e.options.onshowitem]&&"function"==typeof window[e.options.onshowitem]&&window[e.options.onshowitem](o),o[d]){case 0:var i=new Image;t(i).load(function(){e.showImage(o,i.width,i.height)}),t(i).error(function(){e.showError()}),i.src=o[p];break;case 1:e.showSWF(o);break;case 2:case 8:e.showVideo(o);break;case 3:case 4:case 9:e.showYoutubeVimeo(o);break;case 5:e.showPDF(o);break;case 6:e.showMP3(o);break;case 7:e.showWeb(o)}e.options.googleanalyticsaccount&&window._gaq&&window._gaq.push(["_trackEvent","Lightbox","Open",o[p]])},e.loadCurElem=function(){e.loadElem(e.elemArray[e.options.curElem])},e.showError=function(){e.$loading.hide(),e.resizeLightbox(e.options.errorwidth,e.options.errorheight,!0,function(){e.$error.show(),e.$elem.fadeIn(e.options.fadespeed,function(){e.showData()})})},e.calcTextWidth=function(o){return o-36},e.showTitle=function(o,t,i){"inside"==e.options.titlestyle&&e.$elemData.css({width:o+"px"});var n="";e.options.showtitle&&t&&t.length>0&&(n+=t),e.options.showdescription&&i&&i.length>0&&(n+='<p class="html5-description">'+i+"</p>"),e.$text.html(n)},e.showImage=function(o,t,i){var n,s;o[m]?n=o[m]:(n=t,o[m]=t),o[g]?s=o[g]:(s=i,o[g]=i);var r=e.calcElemSize({w:n,h:s});e.resizeLightbox(r.w,r.h,!0,function(){e.showTitle(r.w,o[c],o[v]),e.$image.css({width:r.w,height:r.h}).show(),e.$image.html("<img src='"+o[p]+"' width='100%' height='100%' />"),e.$elem.fadeIn(e.options.fadespeed,function(){e.showData()})})},e.showSWF=function(o){var i=o[m]?o[m]:960,n=o[g]?o[g]:540,s=e.calcElemSize({w:i,h:n});i=s.w,n=s.h,e.resizeLightbox(i,n,!0,function(){e.showTitle(s.w,o[c],o[v]),e.$image.css({width:s.w,height:s.h}).html("<div id='html5lightbox-swf' style='display:block;width:100%;height:100%;'></div>").show(),e.embedFlash(t("#html5lightbox-swf"),o[p],"window",{width:i,height:n}),e.$elem.show(),e.showData()})},e.showVideo=function(o){var i=o[m]?o[m]:960,n=o[g]?o[g]:540,s=e.calcElemSize({w:i,h:n});i=s.w,n=s.h,e.resizeLightbox(i,n,!0,function(){e.showTitle(s.w,o[c],o[v]),e.$image.css({width:s.w,height:s.h}).html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;background-color:#000;'></div>").show();var r=!1;if(e.options.isIE678||8==o[d]||e.options.isIE9&&e.options.useflashonie9||e.options.isIE10&&e.options.useflashonie10||e.options.isIE11&&e.options.useflashonie11?r=!1:e.options.isMobile?r=!0:!e.options.html5player&&e.options.flashInstalled||!e.options.html5VideoSupported||(!e.options.isFirefox&&!e.options.isOpera||(e.options.isFirefox||e.options.isOpera)&&(o[w]||o[b]))&&(r=!0),r){var l=o[p];(e.options.isFirefox||e.options.isOpera||!l)&&(l=o[b]?o[b]:o[w]),e.embedHTML5Video(t("#html5lightbox-video"),l,e.options.autoplay)}else{var a=o[p];"/"!=a.charAt(0)&&"http:"!=a.substring(0,5)&&"https:"!=a.substring(0,6)&&(a=e.options.htmlfolder+a),e.embedFlash(t("#html5lightbox-video"),e.options.jsfolder+"html5boxplayer.swf","transparent",{width:i,height:n,hidecontrols:e.options.videohidecontrols?"1":"0",hideplaybutton:"0",videofile:a,hdfile:"",ishd:"0",autoplay:e.options.autoplay?"1":"0",errorcss:".html5box-error"+e.options.errorcss,id:0})}e.$elem.show(),e.showData()})},e.getYoutubeParams=function(o){var t={};if(o.indexOf("?")<0)return t;for(var i=o.substring(o.indexOf("?")+1).split("&"),e=0;e<i.length;e++){var n=i[e].split("=");n&&2==n.length&&"v"!=n[0].toLowerCase()&&(t[n[0].toLowerCase()]=n[1])}return t},e.prepareYoutubeHref=function(o){var t="",i=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/,e=o.match(i);e&&e[7]&&11==e[7].length&&(t=e[7]);var n="https:"==window.location.protocol?"https:":"http:",s=n+"//www.youtube.com/embed/"+t,r=this.getYoutubeParams(o),l=!0;for(var a in r)l?(s+="?",l=!1):s+="&",s+=a+"="+r[a];return s},e.prepareDailymotionHref=function(o){if(o.match(/\:\/\/.*(dai\.ly)/i)){var t="https:"==window.location.protocol?"https:":"http:",i=o.match(/(dai\.ly\/)([a-zA-Z0-9\-\_]+)/)[2];o=t+"//www.dailymotion.com/embed/video/"+i}return o},e.showYoutubeVimeo=function(o){var i=o[m]?o[m]:960,n=o[g]?o[g]:540,s=e.calcElemSize({w:i,h:n});i=s.w,n=s.h,e.resizeLightbox(i,n,!0,function(){e.showTitle(s.w,o[c],o[v]),e.$image.css({width:s.w,height:s.h}).html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;'></div>").show();var i=o[p];3==o[d]&&(i=e.prepareYoutubeHref(i)),9==o[d]&&(i=e.prepareDailymotionHref(i)),e.options.autoplay&&(i+=i.indexOf("?")<0?"?autoplay=1":"&autoplay=1"),3==o[d]&&(i+=i.indexOf("?")<0?"?wmode=transparent&rel=0":"&wmode=transparent&rel=0",e.options.videohidecontrols&&(i+="&controls=0&showinfo=0")),t("#html5lightbox-video").html("<iframe width='100%' height='100%' src='"+i+"' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"),e.$elem.show(),e.showData()})},e.showPDF=function(o){},e.showMP3=function(o){},e.showWeb=function(o){var i=e.options.isMobile?Math.max(t(window).width(),t(document).width()):t(window).width(),n=window.innerHeight?window.innerHeight:t(window).height(),s=o[m]?o[m]:i,r=o[g]?o[g]:n-e.options.navheight,l=e.calcElemSize({w:s,h:r});s=l.w,r=l.h,e.resizeLightbox(s,r,!0,function(){e.$loading.hide(),e.showTitle(l.w,o[c],o[v]),e.$image.css({width:l.w,height:l.h}).html("<div id='html5lightbox-web' style='display:block;width:100%;height:100%;'></div>").show(),t("#html5lightbox-web").html("<iframe width='100%' height='100%' src='"+o[p]+"' frameborder='0'></iframe>"),e.$elem.show(),e.showData()})},e.scrollBox=function(){e.options.supportCSSPositionFixed||e.$lightbox.css("top",t(window).scrollTop())},e.resizeWindow=function(){if(e.currentElem&&e.options.responsive){var o=e.currentElem[m]?e.currentElem[m]:960,i=e.currentElem[g]?e.currentElem[g]:540,n=e.calcElemSize({w:o,h:i}),s=window.innerHeight?window.innerHeight:t(window).height(),r=n.w+2*e.options.bordersize,l=n.h+2*e.options.bordersize,a=Math.round((s-e.options.navheight)/2-l/2);if("inside"!=e.options.titlestyle&&(a-=Math.round(e.options.barheight/2)),16>a&&(a=16),e.$lightboxBox.css({"margin-top":a}),e.$lightboxBox.css({width:r,height:l}),e.$elemWrap.css({width:r,height:l}),e.$image.css({width:n.w,height:n.h}),!(t(".html5-nav").length<=0)){t(".html5-nav-list").css({"margin-left":0});var h=t(".html5-nav-mask"),d=t(".html5-nav-prev"),p=t(".html5-nav-next"),c=e.options.isMobile?Math.max(t(window).width(),t(document).width()):t(window).width();e.options.totalwidth<=c?(h.css({width:e.options.totalwidth+"px"}),d.hide(),p.hide()):(h.css({width:c-2*e.options.navbuttonwidth+"px"}),d.show(),p.show())}}},e.calcElemSize=function(o){if(!e.options.responsive)return o;var i=window.innerHeight?window.innerHeight:t(window).height();i=i?i:t(document).height();var n=i-e.options.navheight-2*e.options.bordersize-2*e.options.bordermargin;"inside"!=e.options.titlestyle&&(n-=e.options.barheight),o.h>n&&(o.w=Math.round(o.w*n/o.h),o.h=n);var s=e.options.isMobile?Math.max(t(window).width(),t(document).width()):t(window).width();s=s?s:t(document).width();var r=s-2*e.options.bordersize-2*e.options.bordermargin;return o.w>r&&(o.h=Math.round(o.h*r/o.w),o.w=r),o},e.showData=function(){e.$text.text().length>0&&e.$elemData.show(),e.$text.text().length>0&&"inside"!=e.options.titlestyle&&e.$lightboxBox.css({height:String(e.$lightboxBox.height()+e.options.barheight)+"px"}),t("#html5-lightbox-overlay",e.$lightbox).css({height:Math.max(t(window).height(),t(document).height())})},e.resizeLightbox=function(o,i,n,s){var r=window.innerHeight?window.innerHeight:t(window).height(),l=n?e.options.resizespeed:0,a=o+2*e.options.bordersize,h=i+2*e.options.bordersize,d=Math.round((r-e.options.navheight)/2-h/2);"inside"!=e.options.titlestyle&&(d-=Math.round(e.options.barheight/2)),16>d&&(d=16),a==e.$elemWrap.width()&&h==e.$elemWrap.height()&&(l=0),e.$loading.hide(),e.$watermark.hide(),e.options.arrowloop||(e.options.prevElem>=e.options.curElem&&e.$prev.hide(),e.options.nextElem<=e.options.curElem&&e.$next.hide()),e.options.nextElem<=e.options.curElem&&e.options.onlastitem&&window[e.options.onlastitem]&&"function"==typeof window[e.options.onlastitem]&&window[e.options.onlastitem](e.currentElem),e.options.prevElem>=e.options.curElem&&e.options.onfirstitem&&window[e.options.onfirstitem]&&"function"==typeof window[e.options.onfirstitem]&&window[e.options.onfirstitem](e.currentElem),e.$elem.bind("mouseenter mousemove",function(){(e.options.arrowloop&&e.options.prevElem>=0||!e.options.arrowloop&&e.options.prevElem>=0&&e.options.prevElem<e.options.curElem)&&e.$prev.fadeIn(),(e.options.arrowloop&&e.options.nextElem>=0||!e.options.arrowloop&&e.options.nextElem>=0&&e.options.nextElem>e.options.curElem)&&e.$next.fadeIn()}),e.$elem.bind("mouseleave",function(){e.$next.fadeOut(),e.$prev.fadeOut()}),e.$lightboxBox.css({"margin-top":d}),e.$lightboxBox.css({width:a,height:h}),e.$elemWrap.animate({width:a},l).animate({height:h},l,function(){e.$loading.show(),e.$watermark.show(),e.$close.show(),e.$elem.css({"background-color":e.options.bgcolor}),s()})},e.reset=function(){e.options.stamp&&e.$watermark.hide(),e.showing=!1,e.$image.empty(),e.$text.empty(),e.$error.hide(),e.$loading.hide(),e.$image.hide(),e.$elemData.hide(),e.$close.hide(),e.$elem.css({"background-color":""})},e.resetNavigation=function(){e.options.navheight=0,t(".html5-nav").remove()},e.finish=function(){e.reset(),e.resetNavigation(),e.$lightbox.hide(),e.showObjects(),e.options.oncloselightbox&&window[e.options.oncloselightbox]&&"function"==typeof window[e.options.oncloselightbox]&&window[e.options.oncloselightbox](e.currentElem)},e.pauseSlide=function(){},e.playSlide=function(){},e.gotoSlide=function(o){if(-1==o){if(e.options.nextElem<0)return;e.options.curElem=e.options.nextElem}else if(-2==o){if(e.options.prevElem<0)return;e.options.curElem=e.options.prevElem}else o>=0&&(e.options.curElem=o);e.calcNextPrevElem(),e.reset(),e.loadCurElem()},e.supportKeyboard=function(){t(document).keyup(function(o){e.showing&&(e.options.supportesckey&&27==o.keyCode?e.finish():e.options.supportarrowkeys&&(39==o.keyCode?e.gotoSlide(-1):37==o.keyCode&&e.gotoSlide(-2)))})},e.enableSwipe=function(){e.$elem.touchSwipe({preventWebBrowser:!0,swipeLeft:function(){e.gotoSlide(-1)},swipeRight:function(){e.gotoSlide(-2)}})},e.hideObjects=function(){t("select, embed, object").css({visibility:"hidden"})},e.showObjects=function(){t("select, embed, object").css({visibility:"visible"})},e.embedHTML5Video=function(o,i,n){o.html("<div style='display:block;width:100%;height:100%;position:relative;'><video id='html5-lightbox-video' width='100%' height='100%'"+(n?" autoplay":"")+(e.options.nativehtml5controls&&!e.options.videohidecontrols?" controls='controls'":"")+" src='"+i+"'></div>"),e.options.nativehtml5controls||(t("video",o).data("src",i),t("video",o).lightboxHTML5VideoControls(e.options.skinsfolder,e,e.options.videohidecontrols,!1))},e.embedFlash=function(o,i,n,s){if(e.options.flashInstalled){var r={pluginspage:"http://www.adobe.com/go/getflashplayer",quality:"high",allowFullScreen:"true",allowScriptAccess:"always",type:"application/x-shockwave-flash"};r.width="100%",r.height="100%",r.src=i,r.flashVars=t.param(s),r.wmode=n;var l="";for(var a in r)l+=a+"="+r[a]+" ";o.html("<embed "+l+"/>")}else o.html("<div class='html5lightbox-flash-error' style='display:block; position:relative;text-align:center; width:100%; left:0px; top:40%;'><div class='html5-error'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>")},e.checkType=function(o){return o?o.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)?0:o.match(/[^\.]\.(swf)\s*$/i)?1:o.match(/\.(mp4|m4v|ogv|ogg|webm)(.*)?$/i)?2:o.match(/\:\/\/.*(youtube\.com)/i)||o.match(/\:\/\/.*(youtu\.be)/i)?3:o.match(/\:\/\/.*(vimeo\.com)/i)?4:o.match(/\:\/\/.*(dailymotion\.com)/i)||o.match(/\:\/\/.*(dai\.ly)/i)?9:o.match(/[^\.]\.(pdf)\s*$/i)?5:o.match(/[^\.]\.(mp3)\s*$/i)?6:o.match(/[^\.]\.(flv)\s*$/i)?8:7:-1},e.showLightbox=function(o,i,n,s,r,l,a,h,d){e.$next.hide(),e.$prev.hide(),e.reset(),e.$lightbox.show(),e.options.supportCSSPositionFixed||e.$lightbox.css("top",t(window).scrollTop());var p=window.innerHeight?window.innerHeight:t(window).height(),c=e.options.loadingwidth+2*e.options.bordersize,u=e.options.loadingheight+2*e.options.bordersize,m=Math.round(p/2-u/2);"inside"!=e.options.titlestyle&&(m-=Math.round(e.options.barheight/2)),16>m&&(m=16),e.$lightboxBox.css({"margin-top":m,width:c,height:u}),e.$elemWrap.css({width:c,height:u}),e.loadElem(new Array(o,i,n,null,s,r,l,a,h,d))},e.addItem=function(o,t,i,n,s,r,l,a,h){type=e.checkType(o),e.elemArray.push(new Array(type,o,t,i,n,s,r,l,a,h))},e.showItem=function(o){if(e.elemArray.length<=0)return!0;e.hideObjects();for(var i=0;i<e.elemArray.length&&e.elemArray[i][p]!=o;i++);if(i==e.elemArray.length)return!0;e.options.curElem=i,e.options.nextElem=-1,e.options.prevElem=-1,e.calcNextPrevElem(),e.$next.hide(),e.$prev.hide(),e.reset(),e.$lightbox.show(),e.options.supportCSSPositionFixed||e.$lightbox.css("top",t(window).scrollTop());var n=window.innerHeight?window.innerHeight:t(window).height(),s=e.options.loadingwidth+2*e.options.bordersize,r=e.options.loadingheight+2*e.options.bordersize,l=Math.round(n/2-r/2);
return"inside"!=e.options.titlestyle&&(l-=Math.round(e.options.barheight/2)),16>l&&(l=16),e.$lightboxBox.css({"margin-top":l,width:s,height:r}),e.$elemWrap.css({width:s,height:r}),e.loadCurElem(),!1},e.init(),e.unbind("click").click(e.clickHandler)}}(jQuery),function(o){o.fn.touchSwipe=function(t){var i={preventWebBrowser:!1,swipeLeft:null,swipeRight:null,swipeTop:null,swipeBottom:null};return t&&o.extend(i,t),this.each(function(){function t(o){var t=o.originalEvent;t.targetTouches.length>=1?(l=t.targetTouches[0].pageX,a=t.targetTouches[0].pageY):s(o)}function e(o){i.preventWebBrowser&&o.preventDefault();var t=o.originalEvent;t.targetTouches.length>=1?(h=t.targetTouches[0].pageX,d=t.targetTouches[0].pageY):s(o)}function n(o){h>0||d>0?(r(),s(o)):s(o)}function s(o){l=-1,a=-1,h=-1,d=-1}function r(){h>l?i.swipeRight&&i.swipeRight.call():i.swipeLeft&&i.swipeLeft.call(),d>a?i.swipeBottom&&i.swipeBottom.call():i.swipeTop&&i.swipeTop.call()}var l=-1,a=-1,h=-1,d=-1;try{o(this).bind("touchstart",t),o(this).bind("touchmove",e),o(this).bind("touchend",n),o(this).bind("touchcancel",s)}catch(p){}})}}(jQuery),function(o){o.fn.lightboxHTML5VideoControls=function(t,i,e,n){var s="ontouchstart"in window,r=s?"touchstart":"mousedown",l=s?"touchmove":"mousemove",a=s?"touchcancel":"mouseup",h=s?"touchstart":"click",d=32,p=s?48:36,c=null,u=null,m=!1,g=!1,b=!0,w=null!=navigator.userAgent.match(/iPod/i)||null!=navigator.userAgent.match(/iPhone/i),f=o(this).data("ishd"),v=o(this).data("hd"),x=o(this).data("src"),y=o(this);if(y.get(0).removeAttribute("controls"),w){var k=y.height()-p;y.css({height:k})}var E=o("<div class='html5boxVideoPlay'></div>");w||(y.after(E),E.css({position:"absolute",top:"50%",left:"50%",display:"block",cursor:"pointer",width:64,height:64,"margin-left":-32,"margin-top":-32,"background-image":"url('"+t+"html5boxplayer_playvideo.png')","background-position":"center center","background-repeat":"no-repeat"}).bind(h,function(){y.get(0).play()}));var $=o("<div class='html5boxVideoFullscreenBg'></div>"),S=o("<div class='html5boxVideoControls'><div class='html5boxVideoControlsBg'></div><div class='html5boxPlayPause'><div class='html5boxPlay'></div><div class='html5boxPause'></div></div><div class='html5boxTimeCurrent'>--:--</div><div class='html5boxFullscreen'></div><div class='html5boxHD'></div><div class='html5boxVolume'><div class='html5boxVolumeButton'></div><div class='html5boxVolumeBar'><div class='html5boxVolumeBarBg'><div class='html5boxVolumeBarActive'></div></div></div></div><div class='html5boxTimeTotal'>--:--</div><div class='html5boxSeeker'><div class='html5boxSeekerBuffer'></div><div class='html5boxSeekerPlay'></div><div class='html5boxSeekerHandler'></div></div><div style='clear:both;'></div></div>");y.after(S),y.after($),$.css({display:"none",position:"fixed",left:0,top:0,bottom:0,right:0,"z-index":2147483647}),S.css({display:"block",position:"absolute",width:"100%",height:p,left:0,bottom:0,right:0,"max-width":"640px",margin:"0 auto"});var z=function(){b=!0};y.bind(h,function(){b=!0}).hover(function(){b=!0},function(){b=!1}),e||setInterval(function(){b&&(S.show(),b=!1,clearTimeout(c),c=setTimeout(function(){y.get(0).paused||S.fadeOut()},5e3))},250),o(".html5boxVideoControlsBg",S).css({display:"block",position:"absolute",width:"100%",height:"100%",left:0,top:0,"background-color":"#000000",opacity:.7,filter:"alpha(opacity=70)"}),o(".html5boxPlayPause",S).css({display:"block",position:"relative",width:d+"px",height:d+"px",margin:Math.floor((p-d)/2),"float":"left"});var A=o(".html5boxPlay",S),I=o(".html5boxPause",S);A.css({display:"block",position:"absolute",top:0,left:0,width:d+"px",height:d+"px",cursor:"pointer","background-image":"url('"+t+"html5boxplayer_playpause.png')","background-position":"top left"}).hover(function(){o(this).css({"background-position":"bottom left"})},function(){o(this).css({"background-position":"top left"})}).bind(h,function(){y.get(0).play()}),I.css({display:"none",position:"absolute",top:0,left:0,width:d+"px",height:d+"px",cursor:"pointer","background-image":"url('"+t+"html5boxplayer_playpause.png')","background-position":"top right"}).hover(function(){o(this).css({"background-position":"bottom right"})},function(){o(this).css({"background-position":"top right"})}).bind(h,function(){y.get(0).pause()});var M=o(".html5boxTimeCurrent",S),T=o(".html5boxTimeTotal",S),F=o(".html5boxSeeker",S),P=o(".html5boxSeekerPlay",S),H=o(".html5boxSeekerBuffer",S),B=o(".html5boxSeekerHandler",S);if(M.css({display:"block",position:"relative","float":"left","line-height":p+"px","font-weight":"normal","font-size":"12px",margin:"0 8px","font-family":"Arial, Helvetica, sans-serif",color:"#fff"}),T.css({display:"block",position:"relative","float":"right","line-height":p+"px","font-weight":"normal","font-size":"12px",margin:"0 8px","font-family":"Arial, Helvetica, sans-serif",color:"#fff"}),F.css({display:"block",cursor:"pointer",overflow:"hidden",position:"relative",height:"10px","background-color":"#222",margin:Math.floor((p-10)/2)+"px 4px"}).bind(r,function(o){var t=s?o.originalEvent.touches[0]:o,i=t.pageX-F.offset().left;P.css({width:i}),y.get(0).currentTime=i*y.get(0).duration/F.width(),F.bind(l,function(o){var t=s?o.originalEvent.touches[0]:o,i=t.pageX-F.offset().left;P.css({width:i}),y.get(0).currentTime=i*y.get(0).duration/F.width()})}).bind(a,
function(){F.unbind(l)}),H.css({display:"block",position:"absolute",left:0,top:0,height:"100%","background-color":"#444"}),P.css({display:"block",position:"absolute",left:0,top:0,height:"100%","background-color":"#fcc500"}),!w&&(y.get(0).requestFullscreen||y.get(0).webkitRequestFullScreen||y.get(0).mozRequestFullScreen||y.get(0).webkitEnterFullScreen||y.get(0).msRequestFullscreen)){var L=function(o){o?(y.get(0).requestFullscreen?y.get(0).requestFullscreen():y.get(0).webkitRequestFullScreen?y.get(0).webkitRequestFullScreen():y.get(0).mozRequestFullScreen?y.get(0).mozRequestFullScreen():y.get(0).webkitEnterFullScreen&&y.get(0).webkitEnterFullScreen(),y.get(0).msRequestFullscreen&&y.get(0).msRequestFullscreen()):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},O=function(t){S.css({position:t?"fixed":"absolute"});var i=C.css("background-position")?C.css("background-position").split(" ")[1]:C.css("background-position-y");C.css({"background-position":(t?"right":"left")+" "+i}),$.css({display:t?"block":"none"}),t?(o(document).bind("mousemove",z),S.css({"z-index":2147483647})):(o(document).unbind("mousemove",z),S.css({"z-index":""}))};document.addEventListener("fullscreenchange",function(){g=document.fullscreen,O(document.fullscreen)},!1),document.addEventListener("mozfullscreenchange",function(){g=document.mozFullScreen,O(document.mozFullScreen)},!1),document.addEventListener("webkitfullscreenchange",function(){g=document.webkitIsFullScreen,O(document.webkitIsFullScreen)},!1),y.get(0).addEventListener("webkitbeginfullscreen",function(){g=!0},!1),y.get(0).addEventListener("webkitendfullscreen",function(){g=!1},!1),o("head").append("<style type='text/css'>video::-webkit-media-controls { display:none !important; }</style>");var C=o(".html5boxFullscreen",S);C.css({display:"block",position:"relative","float":"right",width:d+"px",height:d+"px",margin:Math.floor((p-d)/2),cursor:"pointer","background-image":"url('"+t+"html5boxplayer_fullscreen.png')","background-position":"left top"}).hover(function(){var t=o(this).css("background-position")?o(this).css("background-position").split(" ")[0]:o(this).css("background-position-x");o(this).css({"background-position":t+" bottom"})},function(){var t=o(this).css("background-position")?o(this).css("background-position").split(" ")[0]:o(this).css("background-position-x");o(this).css({"background-position":t+" top"})}).bind(h,function(){g=!g,L(g)})}if(v){var j=o(".html5boxHD",S);j.css({display:"block",position:"relative","float":"right",width:d+"px",height:d+"px",margin:Math.floor((p-d)/2),cursor:"pointer","background-image":"url('"+t+"html5boxplayer_hd.png')","background-position":(f?"right":"left")+" center"}).bind(h,function(){f=!f,o(this).css({"background-position":(f?"right":"left")+" center"}),i.isHd=f;var t=y.get(0).isPaused;y.get(0).setAttribute("src",(f?v:x)+"#t="+y.get(0).currentTime),t?w||y.get(0).pause():y.get(0).play()})}var q=y.get(0).volume;if(y.get(0).volume=q/2+.1,y.get(0).volume===q/2+.1){y.get(0).volume=q;var V=o(".html5boxVolume",S),D=o(".html5boxVolumeButton",S),_=o(".html5boxVolumeBar",S),W=o(".html5boxVolumeBarBg",S),N=o(".html5boxVolumeBarActive",S);V.css({display:"block",position:"relative","float":"right",width:d+"px",height:d+"px",margin:Math.floor((p-d)/2)}).hover(function(){clearTimeout(u);var o=y.get(0).volume;N.css({height:Math.round(100*o)+"%"}),_.show()},function(){clearTimeout(u),u=setTimeout(function(){_.hide()},1e3)}),D.css({display:"block",position:"absolute",top:0,left:0,width:d+"px",height:d+"px",cursor:"pointer","background-image":"url('"+t+"html5boxplayer_volume.png')","background-position":"top left"}).hover(function(){var t=o(this).css("background-position")?o(this).css("background-position").split(" ")[0]:o(this).css("background-position-x");o(this).css({"background-position":t+" bottom"})},function(){var t=o(this).css("background-position")?o(this).css("background-position").split(" ")[0]:o(this).css("background-position-x");o(this).css({"background-position":t+" top"})}).bind(h,function(){var t=y.get(0).volume;t>0?(volumeSaved=t,t=0):t=volumeSaved;var i=o(this).css("background-position")?o(this).css("background-position").split(" ")[1]:o(this).css("background-position-y");D.css({"background-position":(t>0?"left":"right")+" "+i}),y.get(0).volume=t,N.css({height:Math.round(100*t)+"%"})}),_.css({display:"none",position:"absolute",left:4,bottom:"100%",width:24,height:80,"margin-bottom":Math.floor((p-d)/2),"background-color":"#000000",opacity:.7,filter:"alpha(opacity=70)"}),W.css({display:"block",position:"relative",width:10,height:68,margin:7,cursor:"pointer","background-color":"#222"}),N.css({display:"block",position:"absolute",bottom:0,left:0,width:"100%",height:"100%","background-color":"#fcc500"}),W.bind(r,function(o){var t=s?o.originalEvent.touches[0]:o,i=1-(t.pageY-W.offset().top)/W.height();i=i>1?1:0>i?0:i,N.css({height:Math.round(100*i)+"%"}),D.css({"background-position":"left "+(i>0?"top":"bottom")}),y.get(0).volume=i,W.bind(l,function(o){var t=s?o.originalEvent.touches[0]:o,i=1-(t.pageY-W.offset().top)/W.height();i=i>1?1:0>i?0:i,N.css({height:Math.round(100*i)+"%"}),D.css({"background-position":"left "+(i>0?"top":"bottom")}),y.get(0).volume=i})}).bind(a,function(){W.unbind(l)})}var R=function(o){var t=Math.floor(o/3600),i=10>t?"0"+t:t,e=Math.floor((o-60*t)/60),n=10>e?"0"+e:e,s=Math.floor(o-(3600*t+60*e)),r=10>s?"0"+s:s,l=n+":"+r;return t>0&&(l=i+":"+l),l};n&&E.hide(),e&&S.hide();var Q=function(){n||E.hide(),e||(A.hide(),I.show())},Y=function(){n||E.show(),e||(S.show(),clearTimeout(c),A.show(),I.hide())},X=function(){o(window).trigger("html5lightbox.videoended"),n||E.show(),e||(S.show(),clearTimeout(c),A.show(),I.hide())},G=function(){var o=y.get(0).currentTime;if(o){M.text(R(o));var t=y.get(0).duration;if(t&&(T.text(R(t)),!m)){var i=F.width(),e=Math.round(i*o/t);P.css({width:e}),B.css({left:e})}}},K=function(){if(y.get(0).buffered&&y.get(0).buffered.length>0&&!isNaN(y.get(0).buffered.end(0))&&!isNaN(y.get(0).duration)){var o=F.width();H.css({width:Math.round(o*y.get(0).buffered.end(0)/y.get(0).duration)})}};try{y.bind("play",Q),y.bind("pause",Y),y.bind("ended",X),y.bind("timeupdate",G),y.bind("progress",K)}catch(U){}}}(jQuery),jQuery(document).ready(function(){"undefined"==typeof html5Lightbox&&(html5Lightbox=jQuery(".html5lightbox").html5lightbox())})}!function(){"use strict";for(var o=document.getElementsByTagName("script"),t="",i=0;i<o.length;i++)o[i].src&&o[i].src.match(/viedolightbox\.js/i)&&(t=o[i].src.substr(0,o[i].src.lastIndexOf("/")+1));var e=!1;if("undefined"==typeof jQuery)e=!0;else{var n=jQuery.fn.jquery.split(".");(n[0]<1||1==n[0]&&n[1]<6)&&(e=!0)}if(e){var s=document.getElementsByTagName("head")[0],r=document.createElement("script");r.setAttribute("type","text/javascript"),r.readyState?r.onreadystatechange=function(){("loaded"==r.readyState||"complete"==r.readyState)&&(r.onreadystatechange=null,loadHtml5LightBox(t))}:r.onload=function(){loadHtml5LightBox(t)},r.setAttribute("src",t+"jquery.js"),s.appendChild(r)}else loadHtml5LightBox(t)}();
/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
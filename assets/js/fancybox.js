! function(t, e, n, o) {
    "use strict";
    if (t.console = t.console || {
            info: function(t) {}
        }, n) {
        if (n.fn.fancybox) {
            console.info("fancyBox already initialized");
            return
        }
        var i, s, a, r, c = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function(t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function(t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function(t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            l = n(t),
            d = n(e),
            u = 0,
            f = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            h = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e)
            },
            p = function() {
                var t, n = e.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in i)
                    if (o !== n.style[t]) return i[t];
                return "transitionend"
            }(),
            g = function(t) {
                return t && t.length && t[0].offsetHeight
            },
            b = function(t, e) {
                var o = n.extend(!0, {}, t, e);
                return n.each(e, function(t, e) {
                    n.isArray(e) && (o[t] = e)
                }), o
            },
            m = function(t) {
                var o, i;
                return !!t && t.ownerDocument === e && (n(".fancybox-container").css("pointer-events", "none"), o = {
                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i)
            },
            y = function(t, e, o) {
                var i = this;
                i.opts = b({
                    index: o
                }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = b(i.opts, e)), n.fancybox.isMobile && (i.opts = b(i.opts, i.opts.mobile)), i.id = i.opts.id || ++u, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init()
            };
        n.extend(y.prototype, {
            init: function() {
                var o, i, s = this,
                    a = s.group[s.currIndex].opts;
                a.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), n.fancybox.getInstance() || !1 === a.hideScrollbar || n.fancybox.isMobile || !(e.body.scrollHeight > t.innerHeight) || (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(a.buttons, function(t, e) {
                    i += a.btnTpl[e] || ""
                }), o = n(s.translate(s, a.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + s.id).addClass(a.baseClass).data("FancyBox", s).appendTo(a.parentEl), s.$refs = {
                    container: o
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                    s.$refs[t] = o.find(".fancybox-" + t)
                }), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex)
            },
            translate: function(t, e) {
                var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    return o === n[e] ? t : n[e]
                })
            },
            addContent: function(t) {
                var e, i = this,
                    s = n.makeArray(t);
                n.each(s, function(t, e) {
                    var s, a, r, c, l, d = {},
                        u = {};
                    n.isPlainObject(e) ? (d = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (u = (s = n(e)).data() || {}, (u = n.extend(!0, {}, u, u.options)).$orig = s, d.src = i.opts.src || u.src || s.attr("href"), d.type || d.src || (d.type = "inline", d.src = e)) : d = {
                        type: "html",
                        src: e + ""
                    }, d.opts = n.extend(!0, {}, i.opts, u), n.isArray(u.buttons) && (d.opts.buttons = u.buttons), n.fancybox.isMobile && d.opts.mobile && (d.opts = b(d.opts, d.opts.mobile)), a = d.type || d.opts.type, c = d.src || "", a || !c || ((r = c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", d.opts.video.format || (d.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", d = n.extend(!0, d, {
                        contentType: "pdf",
                        opts: {
                            iframe: {
                                preload: !1
                            }
                        }
                    })) : "#" !== c.charAt(0) || (a = "inline")), a ? d.type = a : i.trigger("objectNeedsType", d), d.contentType || (d.contentType = n.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type), d.index = i.group.length, "auto" == d.opts.smallBtn && (d.opts.smallBtn = n.inArray(d.type, ["html", "inline", "ajax"]) > -1), "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn), d.$thumb = d.opts.$thumb || null, d.opts.$trigger && d.index === i.opts.index && (d.$thumb = d.opts.$trigger.find("img:first"), d.$thumb.length && (d.opts.$orig = d.opts.$trigger)), !(d.$thumb && d.$thumb.length) && d.opts.$orig && (d.$thumb = d.opts.$orig.find("img:first")), d.$thumb && !d.$thumb.length && (d.$thumb = null), d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null), "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [i, d])), "function" === n.type(i.opts.caption) && (d.opts.caption = i.opts.caption.apply(e, [i, d])), d.opts.caption instanceof n || (d.opts.caption = o === d.opts.caption ? "" : d.opts.caption + ""), "ajax" === d.type && (l = c.split(/\s+/, 2)).length > 1 && (d.src = l.shift(), d.opts.filter = l.shift()), d.opts.modal && (d.opts = n.extend(!0, d.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), i.group.push(d)
                }), Object.keys(i.slides).length && (i.updateControls(), (e = i.Thumbs) && e.isActive && (e.create(), e.focus()))
            },
            addEvents: function() {
                var e = this;
                e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(), t.preventDefault(), e.close(t)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(), t.preventDefault(), e.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(), t.preventDefault(), e.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                    e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), l.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && h(e.requestId), e.requestId = f(function() {
                        e.update(t)
                    })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function() {
                        e.$refs.stage.show(), e.update(t)
                    }, n.fancybox.isMobile ? 600 : 250))
                }), d.on("keydown.fb", function(t) {
                    var o = (n.fancybox ? n.fancybox.getInstance() : null).current,
                        i = t.keyCode || t.which;
                    if (9 == i) {
                        o.opts.trapFocus && e.focus(t);
                        return
                    }
                    if (!(!o.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) {
                        if (8 === i || 27 === i) {
                            t.preventDefault(), e.close(t);
                            return
                        }
                        if (37 === i || 38 === i) {
                            t.preventDefault(), e.previous();
                            return
                        }
                        if (39 === i || 40 === i) {
                            t.preventDefault(), e.next();
                            return
                        }
                        e.trigger("afterKeydown", t, i)
                    }
                }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, d.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                    e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                }), e.idleInterval = t.setInterval(function() {
                    e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var e = this;
                l.off("orientationchange.fb resize.fb"), d.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, e) {
                var i, s, a, r, c, l, d, u, f, h = this,
                    p = h.group.length;
                if (!h.isDragging && !h.isClosing && (!h.isAnimating || !h.firstRun)) {
                    if (t = parseInt(t, 10), !(a = h.current ? h.current.opts.loop : h.opts.loop) && (t < 0 || t >= p)) return !1;
                    if (i = h.firstRun = !Object.keys(h.slides).length, c = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, r = h.createSlide(t), p > 1 && ((a || r.index < p - 1) && h.createSlide(t + 1), (a || r.index > 0) && h.createSlide(t - 1)), h.current = r, h.currIndex = r.index, h.currPos = r.pos, h.trigger("beforeShow", i), h.updateControls(), r.forcedDuration = o, n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[i ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), s = h.isMoved(r), r.$slide.addClass("fancybox-slide--current"), i) {
                        r.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"), h.$refs.container.addClass("fancybox-is-open").trigger("focus"), h.loadSlide(r), h.preload("image");
                        return
                    }
                    l = n.fancybox.getTranslate(c.$slide), d = n.fancybox.getTranslate(h.$refs.stage), n.each(h.slides, function(t, e) {
                        n.fancybox.stop(e.$slide, !0)
                    }), c.pos !== r.pos && (c.isComplete = !1), c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), s ? (f = l.left - (c.pos * l.width + c.pos * c.opts.gutter), n.each(h.slides, function(t, o) {
                        o.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var i = o.pos * l.width + o.pos * o.opts.gutter;
                        n.fancybox.setTranslate(o.$slide, {
                            top: 0,
                            left: i - d.left + f
                        }), o.pos !== r.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > r.pos ? "next" : "previous")), g(o.$slide), n.fancybox.animate(o.$slide, {
                            top: 0,
                            left: (o.pos - r.pos) * l.width + (o.pos - r.pos) * o.opts.gutter
                        }, e, function() {
                            o.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === h.currPos && h.complete()
                        })
                    })) : e && r.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, c.$slide.addClass("fancybox-slide--" + (c.pos > r.pos ? "next" : "previous")), n.fancybox.animate(c.$slide, u, e, function() {
                        c.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1)), r.isLoaded ? h.revealContent(r) : h.loadSlide(r), h.preload("image")
                }
            },
            createSlide: function(t) {
                var e, o, i = this;
                return o = (o = t % i.group.length) < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), i.updateSlide(i.slides[t])), i.slides[t]
            },
            scaleToActual: function(t, e, i) {
                var s, a, r, c, l, d = this,
                    u = d.current,
                    f = u.$content,
                    h = n.fancybox.getTranslate(u.$slide).width,
                    p = n.fancybox.getTranslate(u.$slide).height,
                    g = u.width,
                    b = u.height;
                !(d.isAnimating || d.isMoved()) && f && "image" == u.type && u.isLoaded && !u.hasError && (d.isAnimating = !0, n.fancybox.stop(f), t = t === o ? .5 * h : t, e = e === o ? .5 * p : e, s = n.fancybox.getTranslate(f), s.top -= n.fancybox.getTranslate(u.$slide).top, s.left -= n.fancybox.getTranslate(u.$slide).left, c = g / s.width, l = b / s.height, a = .5 * h - .5 * g, r = .5 * p - .5 * b, g > h && ((a = s.left * c - (t * c - t)) > 0 && (a = 0), a < h - g && (a = h - g)), b > p && ((r = s.top * l - (e * l - e)) > 0 && (r = 0), r < p - b && (r = p - b)), d.updateCursor(g, b), n.fancybox.animate(f, {
                    top: r,
                    left: a,
                    scaleX: c,
                    scaleY: l
                }, i || 366, function() {
                    d.isAnimating = !1
                }), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, o = this,
                    i = o.current,
                    s = i.$content;
                !(o.isAnimating || o.isMoved()) && s && "image" == i.type && i.isLoaded && !i.hasError && (o.isAnimating = !0, n.fancybox.stop(s), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(s, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / s.width(),
                    scaleY: e.height / s.height()
                }, t || 366, function() {
                    o.isAnimating = !1
                }))
            },
            getFitPos: function(t) {
                var e, o, i, s, a = t.$content,
                    r = t.$slide,
                    c = t.width || t.opts.width,
                    l = t.height || t.opts.height,
                    d = {};
                return !!t.isLoaded && !!a && !!a.length && (e = n.fancybox.getTranslate(this.$refs.stage).width, o = n.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(a.css("marginLeft")) + parseFloat(a.css("marginRight")), o -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(a.css("marginTop")) + parseFloat(a.css("marginBottom")), c && l || (c = e, l = o), i = Math.min(1, e / c, o / l), c *= i, l *= i, c > e - .5 && (c = e), l > o - .5 && (l = o), "image" === t.type ? (d.top = Math.floor((o - l) * .5) + parseFloat(r.css("paddingTop")), d.left = Math.floor((e - c) * .5) + parseFloat(r.css("paddingLeft"))) : "video" === t.contentType && (s = t.opts.width && t.opts.height ? c / l : t.opts.ratio || 16 / 9, l > c / s ? l = c / s : c > l * s && (c = l * s)), d.width = c, d.height = l, d)
            },
            update: function(t) {
                var e = this;
                n.each(e.slides, function(n, o) {
                    e.updateSlide(o, t)
                })
            },
            updateSlide: function(t, e) {
                var o = this,
                    i = t && t.$content,
                    s = t.width || t.opts.width,
                    a = t.height || t.opts.height,
                    r = t.$slide;
                o.adjustCaption(t), i && (s || a || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e)
            },
            centerSlide: function(t) {
                var e = this,
                    i = e.current,
                    s = i.$slide;
                !e.isClosing && i && (s.siblings().css({
                    transform: "",
                    opacity: ""
                }), s.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(s, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, t === o ? 0 : t, function() {
                    s.css({
                        transform: "",
                        opacity: ""
                    }), i.isComplete || e.complete()
                }, !1))
            },
            isMoved: function(t) {
                var e, o, i = t || this.current;
                return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5))
            },
            updateCursor: function(t, e) {
                var o, i, s = this.current,
                    a = this.$refs.container;
                s && !this.isClosing && this.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), i = !!(o = this.canPan(t, e)) || this.isZoomable(), a.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? a.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? a.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || this.group.length > 1) && "video" !== s.contentType && a.addClass("fancybox-can-swipe"))
            },
            isZoomable: function() {
                var t, e = this.current;
                return !!(e && !this.isClosing && "image" === e.type && !e.hasError && (!e.isLoaded || (t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)))
            },
            isScaledDown: function(t, e) {
                var i = !1,
                    s = this.current,
                    a = s.$content;
                return t !== o && e !== o ? i = t < s.width && e < s.height : a && (i = (i = n.fancybox.getTranslate(a)).width < s.width && i.height < s.height), i
            },
            canPan: function(t, e) {
                var i = this.current,
                    s = null,
                    a = !1;
                return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (a = this.getFitPos(i), t !== o && e !== o ? s = {
                    width: t,
                    height: e
                } : i.isComplete && (s = n.fancybox.getTranslate(i.$content)), s && a && (a = Math.abs(s.width - a.width) > 1.5 || Math.abs(s.height - a.height) > 1.5)), a
            },
            loadSlide: function(t) {
                var e, o, i, s = this;
                if (!t.isLoading && !t.isLoaded) {
                    if (t.isLoading = !0, !1 === s.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                    switch (e = t.type, (o = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                        case "image":
                            s.setImage(t);
                            break;
                        case "iframe":
                            s.setIframe(t);
                            break;
                        case "html":
                            s.setContent(t, t.src || t.content);
                            break;
                        case "video":
                            s.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                            break;
                        case "inline":
                            n(t.src).length ? s.setContent(t, n(t.src)) : s.setError(t);
                            break;
                        case "ajax":
                            s.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                url: t.src,
                                success: function(e, n) {
                                    "success" === n && s.setContent(t, e)
                                },
                                error: function(e, n) {
                                    e && "abort" !== n && s.setError(t)
                                }
                            })), o.one("onReset", function() {
                                i.abort()
                            });
                            break;
                        default:
                            s.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(t) {
                var o, i = this;
                setTimeout(function() {
                    var e = t.$image;
                    i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t)
                }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (o = e.createElement("img")).onerror = function() {
                    n(this).remove(), t.$ghost = null
                }, o.onload = function() {
                    i.afterLoad(t)
                }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t)
            },
            checkSrcset: function(e) {
                var n, o, i, s, a = e.opts.srcset || e.opts.image.srcset;
                if (a) {
                    i = t.devicePixelRatio || 1, s = t.innerWidth * i, (o = a.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, n) {
                            var o = parseInt(t.substring(0, t.length - 1), 10);
                            if (0 === n) return e.url = t;
                            o && (e.value = o, e.postfix = t[t.length - 1])
                        }), e
                    })).sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var r = 0; r < o.length; r++) {
                        var c = o[r];
                        if ("w" === c.postfix && c.value >= s || "x" === c.postfix && c.value >= i) {
                            n = c;
                            break
                        }
                    }!n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = a)
                }
            },
            setBigImage: function(t) {
                var o = this,
                    i = e.createElement("img"),
                    s = n(i);
                t.$image = s.one("error", function() {
                    o.setError(t)
                }).one("load", function() {
                    var e;
                    t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), !o.isClosing && (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && l.width() / l.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), s.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
                        t.$ghost && !o.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : i.error && s.trigger("error")
            },
            resolveImageSlideSize: function(t, e, n) {
                var o = parseInt(t.opts.width, 10),
                    i = parseInt(t.opts.height, 10);
                t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
            },
            setIframe: function(t) {
                var e, i = this,
                    s = t.opts.iframe,
                    a = t.$slide;
                t.$content = n('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(s.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(s.attr).appendTo(t.$content), s.preload ? (i.showLoading(t), e.on("load.fb error.fb", function(e) {
                    this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t)
                }), a.on("refresh.fb", function() {
                    var n, i, r = t.$content,
                        c = s.css.width,
                        l = s.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            i = (n = e.contents()).find("body")
                        } catch (d) {}
                        i && i.length && i.children().length && (a.css("overflow", "visible"), r.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }), c === o && (c = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), r.css("width", c || "").css("max-width", ""), l === o && (l = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), r.css("height", l || ""), a.css("overflow", "auto")), r.removeClass("fancybox-is-hidden")
                    }
                })) : i.afterLoad(t), e.attr("src", t.src), a.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (e) {}
                    n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                })
            },
            setContent: function(t, e) {
                var o;
                !this.isClosing && ((this.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), (o = e) && o.hasOwnProperty && o instanceof n && e.parent().length) ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : !t.hasError && ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                    n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(t) {
                (t = t || this.current) && !t.$spinner && (t.$spinner = n(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
            },
            hideLoading: function(t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
            },
            afterLoad: function(t) {
                !this.isClosing && (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(), !0
                }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.adjustCaption(t), this.adjustLayout(t), t.pos === this.currPos && this.updateCursor(), this.revealContent(t))
            },
            adjustCaption: function(t) {
                var e, n = t || this.current,
                    o = n.opts.caption,
                    i = n.opts.preventCaptionOverlap,
                    s = this.$refs.caption,
                    a = !1;
                s.toggleClass("fancybox-caption--separate", i), i && o && o.length && (n.pos !== this.currPos ? ((e = s.clone().appendTo(s.parent())).children().eq(0).empty().html(o), a = e.outerHeight(!0), e.empty().remove()) : this.$caption && (a = this.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", a || ""))
            },
            adjustLayout: function(t) {
                var e, n, o, i, s = t || this.current;
                s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], parseFloat(i = s.$slide.css("padding-bottom")) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), 1 > Math.abs(e - s.$slide[0].scrollHeight) && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n))
            },
            revealContent: function(t) {
                var e, i, s, a, r = this,
                    c = t.$slide,
                    l = !1,
                    d = !1,
                    u = r.isMoved(t),
                    f = t.isRevealed;
                if (t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], s = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], s = parseInt(o === t.forcedDuration ? s : t.forcedDuration, 10), (u || t.pos !== r.currPos || !s) && (e = !1), "zoom" === e && (t.pos === r.currPos && s && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"), "zoom" === e) {
                    r.isAnimating = !0, l.scaleX = l.width / d.width, l.scaleY = l.height / d.height, "auto" == (a = t.opts.zoomOpacity) && (a = Math.abs(t.width / t.height - d.width / d.height) > .1), a && (d.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d), g(t.$content), n.fancybox.animate(t.$content, l, s, function() {
                        r.isAnimating = !1, r.complete()
                    });
                    return
                }
                if (r.updateSlide(t), !e) {
                    t.$content.removeClass("fancybox-is-hidden"), f || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), t.pos === r.currPos && r.complete();
                    return
                }
                n.fancybox.stop(c), i = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, c.addClass(i).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), g(c), "image" !== t.type && t.$content.hide().show(0), n.fancybox.animate(c, "fancybox-slide--current", s, function() {
                    c.removeClass(i).css({
                        transform: "",
                        opacity: ""
                    }), t.pos === r.currPos && r.complete()
                }, !0)
            },
            getThumbPos: function(t) {
                var e, o, i, s, a, r = !1,
                    c = t.$thumb;
                return !!(c && m(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), s = parseFloat(c.css("border-bottom-width") || 0), a = parseFloat(c.css("border-left-width") || 0), r = {
                    top: e.top + o,
                    left: e.left + a,
                    width: e.width - i - a,
                    height: e.height - o - s,
                    scaleX: 1,
                    scaleY: 1
                }, e.width > 0 && e.height > 0 && r)
            },
            complete: function() {
                var t, e = this,
                    o = e.current,
                    i = {};
                !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), g(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function(t, o) {
                    o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
                }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                    Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                }), o.opts.autoFocus && "html" === o.contentType && ((t = o.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0))
            },
            preload: function(t) {
                var e, n;
                !(this.group.length < 2) && (n = this.slides[this.currPos + 1], (e = this.slides[this.currPos - 1]) && e.type === t && this.loadSlide(e), n && n.type === t && this.loadSlide(n))
            },
            focus: function(t, o) {
                var i, s;
                !this.isClosing && ((i = (i = !t && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter('a[href],area[href],input:not([disabled]):not([type="hidden"]):not([aria-hidden]),select:not([disabled]):not([aria-hidden]),textarea:not([disabled]):not([aria-hidden]),button:not([disabled]):not([aria-hidden]),iframe,object,embed,video,audio,[contenteditable],[tabindex]:not([tabindex^="-"])').filter(function() {
                    return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                })).length ? (s = i.index(e.activeElement), t && t.shiftKey ? (s < 0 || 0 == s) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (s < 0 || s == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"))
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each(function() {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            },
            close: function(t, e) {
                var o, i, s, a, r, c, l, d = this,
                    u = d.current,
                    h = function() {
                        d.cleanUp(t)
                    };
                return !d.isClosing && ((d.isClosing = !0, !1 === d.trigger("beforeClose", t)) ? (d.isClosing = !1, f(function() {
                    d.update()
                }), !1) : (d.removeEvents(), s = u.$content, o = u.opts.animationEffect, i = n.isNumeric(e) ? e : o ? u.opts.animationDuration : 0, u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(u.$slide) : o = !1, u.$slide.siblings().trigger("onReset").remove(), i && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), d.hideLoading(u), d.hideControls(!0), d.updateCursor(), "zoom" !== o || s && i && "image" === u.type && !d.isMoved() && !u.hasError && (l = d.getThumbPos(u)) || (o = "fade"), "zoom" === o) ? (n.fancybox.stop(s), c = {
                    top: (a = n.fancybox.getTranslate(s)).top,
                    left: a.left,
                    scaleX: a.width / l.width,
                    scaleY: a.height / l.height,
                    width: l.width,
                    height: l.height
                }, "auto" == (r = u.opts.zoomOpacity) && (r = Math.abs(u.width / u.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(s, c), g(s), n.fancybox.animate(s, l, i, h), !0) : (o && i ? n.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0))
            },
            cleanUp: function(e) {
                var o, i, s, a = this,
                    r = a.current.opts.$orig;
                a.current.$slide.trigger("onReset"), a.$refs.container.empty().remove(), a.trigger("afterClose", e), a.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = a.$trigger), r && r.length && (i = t.scrollX, s = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(s).scrollLeft(i))), a.current = null, (o = n.fancybox.getInstance()) ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var o, i = Array.prototype.slice.call(arguments, 1),
                    s = e && e.opts ? e : this.current;
                if (s ? i.unshift(s) : s = this, i.unshift(this), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;
                "afterClose" !== t && this.$refs ? this.$refs.container.trigger(t + ".fb", i) : d.trigger(t + ".fb", i)
            },
            updateControls: function() {
                var t = this,
                    o = t.current,
                    i = o.index,
                    s = t.$refs.container,
                    a = t.$refs.caption,
                    r = o.opts.caption;
                o.$slide.trigger("refresh"), r && r.length ? (t.$caption = a, a.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), s.find("[data-fancybox-count]").html(t.group.length), s.find("[data-fancybox-index]").html(i + 1), s.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), s.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
            },
            hideControls: function(t) {
                var e = ["infobar", "toolbar", "nav"];
                (t || !this.current.opts.preventCaptionOverlap) && e.push("caption"), this.$refs.container.removeClass(e.map(function(t) {
                    return "fancybox-show-" + t
                }).join(" ")), this.hasHiddenControls = !0
            },
            showControls: function() {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;
                t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !!(e.toolbar && e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
            },
            toggleControls: function() {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        }), n.fancybox = {
            version: "3.5.7",
            defaults: c,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    o = Array.prototype.slice.call(arguments, 1);
                return e instanceof y && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
            },
            open: function(t, e, n) {
                return new y(t, e, n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close(t))
            },
            destroy: function() {
                this.close(!0), d.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: (r = e.createElement("div"), t.getComputedStyle && t.getComputedStyle(r) && t.getComputedStyle(r).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
            getTranslate: function(t) {
                var e;
                return !!t && !!t.length && {
                    top: (e = t[0].getBoundingClientRect()).top || 0,
                    left: e.left || 0,
                    width: e.width,
                    height: e.height,
                    opacity: parseFloat(t.css("opacity"))
                }
            },
            setTranslate: function(t, e) {
                var n = "",
                    i = {};
                if (t && e) return (o !== e.left || o !== e.top) && (n = (o === e.left ? t.position().left : e.left) + "px, " + (o === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), o !== e.scaleX && o !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : o !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (i.transform = n), o !== e.opacity && (i.opacity = e.opacity), o !== e.width && (i.width = e.width), o !== e.height && (i.height = e.height), t.css(i)
            },
            animate: function(t, e, i, s, a) {
                var r, c = this;
                n.isFunction(i) && (s = i, i = null), c.stop(t), r = c.getTranslate(t), t.on(p, function(l) {
                    (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (c.stop(t), n.isNumeric(i) && t.css("transition-duration", ""), n.isPlainObject(e) ? o !== e.scaleX && o !== e.scaleY && c.setTranslate(t, {
                        top: e.top,
                        left: e.left,
                        width: r.width * e.scaleX,
                        height: r.height * e.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : !0 !== a && t.removeClass(e), n.isFunction(s) && s(l))
                }), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? (o !== e.scaleX && o !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function() {
                    t.trigger(p)
                }, i + 33))
            },
            stop: function(t, e) {
                t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(p), t.off(p).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
            }
        }, n.fn.fancybox = function(t) {
            var e;
            return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, v) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, v), this
        }, d.on("click.fb-start", "[data-fancybox]", v), d.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
            n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                $trigger: n(this)
            })
        }), i = ".fancybox-button", s = "fancybox-focus", a = null, d.on("mousedown mouseup focus blur", i, function(t) {
            switch (t.type) {
                case "mousedown":
                    a = n(this);
                    break;
                case "mouseup":
                    a = null;
                    break;
                case "focusin":
                    n(i).removeClass(s), n(this).is(a) || n(this).is("[disabled]") || n(this).addClass(s);
                    break;
                case "focusout":
                    n(i).removeClass(s)
            }
        })
    }

    function v(t, e) {
        var o, i, s, a = [],
            r = 0;
        if (!(t && t.isDefaultPrevented())) t.preventDefault(), e = e || {}, t && t.data && (e = b(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), !((s = n.fancybox.getInstance()) && s.$trigger && s.$trigger.is(o)) && (a = e.selector ? n(e.selector) : (i = o.attr("data-fancybox") || "") ? (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]') : [o], (r = n(a).index(o)) < 0 && (r = 0), (s = n.fancybox.open(a, e, r)).$trigger = o)
    }
}(window, document, jQuery),
function(t) {
    "use strict";
    var e = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        n = function(e, n, o) {
            if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
        };
    t(document).on("objectNeedsType.fb", function(o, i, s) {
        var a, r, c, l, d, u, f, h = s.src || "",
            p = !1;
        a = t.extend(!0, {}, e, s.opts.media), t.each(a, function(e, o) {
            if (c = h.match(o.matcher)) {
                if (p = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
                    "?" == (d = c[o.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                    for (var i = 0; i < d.length; ++i) {
                        var a = d[i].split("=", 2);
                        2 == a.length && (u[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
                    }
                }
                return l = t.extend(!0, {}, o.params, s.opts[e], u), h = "function" === t.type(o.url) ? o.url.call(this, c, l, s) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, s) : n(o.thumb, c), "youtube" === e ? h = h.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === e && (h = h.replace("&%23", "#")), !1
            }
        }), p ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = r), "iframe" === p && (s.opts = t.extend(!0, s.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), t.extend(s, {
            type: p,
            src: h,
            origSrc: s.src,
            contentSource: f,
            contentType: "image" === p ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
        })) : h && (s.type = s.opts.defaultType)
    });
    var o = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(t) {
            var e, n = this;
            if (this[t].loaded) {
                setTimeout(function() {
                    n.done(t)
                });
                return
            }!this[t].loading && (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                n[t].loaded = !0, n.done(t)
            } : e.onload = function() {
                n[t].loaded = !0, n.done(t)
            }, document.body.appendChild(e))
        },
        done: function(e) {
            var n, o, i;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), {
                events: {
                    onStateChange: function(t) {
                        0 == t.data && n.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o)).on("ended", function() {
                n.next()
            }))
        }
    };
    t(document).on({
        "afterShow.fb": function(t, e, n) {
            e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
        }
    })
}(jQuery),
function(t, e, n) {
    "use strict";
    var o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        },
        i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        },
        s = function(e) {
            var n = [];
            for (var o in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
            return n
        },
        a = function(t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        r = function(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
                if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        c = function(e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                o = t.getComputedStyle(e)["overflow-x"],
                i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                s = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
            return i || s
        },
        l = function(t) {
            for (var e = !1; !((e = c(t.get(0))) || !(t = t.parent()).length || t.hasClass("fancybox-stage") || t.is("body")););
            return e
        },
        d = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
        };
    d.prototype.destroy = function() {
        var t = this;
        t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
    }, d.prototype.ontouchstart = function(o) {
        var i = this,
            c = n(o.target),
            d = i.instance,
            u = d.current,
            f = u.$slide,
            h = u.$content,
            p = "touchstart" == o.type;
        if (p && i.$container.off("mousedown.fb.touch"), !(o.originalEvent && 2 == o.originalEvent.button || !f.length || !c.length || r(c) || r(c.parent())) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) {
                o.stopPropagation(), o.preventDefault();
                return
            }
            if (i.realPoints = i.startPoints = s(o), i.startPoints.length) u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = h, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = new Date().getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0
            }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = (i.startPoints[0].x + i.startPoints[1].x) * .5 - n(t).scrollLeft(), i.centerPointStartY = (i.startPoints[0].y + i.startPoints[1].y) * .5 - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = a(i.startPoints[0], i.startPoints[1])))
        }
    }, d.prototype.onscroll = function(t) {
        var n = this;
        n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0)
    }, d.prototype.ontouchmove = function(t) {
        var e = this;
        if (void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons) {
            e.ontouchend(t);
            return
        }
        if (e.isScrolling) {
            e.canTap = !1;
            return
        }
        e.newPoints = s(t), (e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = a(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = a(e.newPoints[0], e.startPoints[0], "y"), e.distance = a(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))
    }, d.prototype.onSwipe = function(e) {
        var s, a = this,
            r = a.instance,
            c = a.isSwiping,
            l = a.sliderStartPos.left || 0;
        if (!0 === c) {
            if (Math.abs(a.distance) > 10) {
                if (a.canTap = !1, r.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : r.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && n(t).width() > 800 ? a.isSwiping = "x" : (s = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = s > 45 && s < 135 ? "y" : "x"), "y" === a.isSwiping && n.fancybox.isMobile && a.isScrollable) {
                    a.isScrolling = !0;
                    return
                }
                r.isDragging = a.isSwiping, a.startPoints = a.newPoints, n.each(r.slides, function(t, e) {
                    var o, i;
                    n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
                        transform: "",
                        opacity: "",
                        "transition-duration": ""
                    }).removeClass("fancybox-animated").removeClass(function(t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                    }), e.pos === r.current.pos && (a.sliderStartPos.top = o.top - i.top, a.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
                        top: o.top - i.top,
                        left: o.left - i.left
                    })
                }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
            }
            return
        }
        "x" == c && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? l += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? l -= Math.pow(-a.distanceX, .8) : l += a.distanceX), a.sliderLastPos = {
            top: "x" == c ? 0 : a.sliderStartPos.top + a.distanceY,
            left: l
        }, a.requestId && (i(a.requestId), a.requestId = null), a.requestId = o(function() {
            a.sliderLastPos && (n.each(a.instance.slides, function(t, e) {
                var o = e.pos - a.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: a.sliderLastPos.top,
                    left: a.sliderLastPos.left + o * a.canvasWidth + o * e.opts.gutter
                })
            }), a.$container.addClass("fancybox-is-sliding"))
        })
    }, d.prototype.onPan = function() {
        var t = this;
        if (a(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) {
            t.startPoints = t.newPoints;
            return
        }
        t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, d.prototype.limitMovement = function() {
        var t, e, n, o, i, s, a = this.canvasWidth,
            r = this.canvasHeight,
            c = this.distanceX,
            l = this.distanceY,
            d = this.contentStartPos,
            u = d.left,
            f = d.top,
            h = d.width,
            p = d.height;
        return i = h > a ? u + c : u, s = f + l, t = Math.max(0, .5 * a - .5 * h), e = Math.max(0, .5 * r - .5 * p), n = Math.min(a - h, .5 * a - .5 * h), o = Math.min(r - p, .5 * r - .5 * p), c > 0 && i > t && (i = t - 1 + Math.pow(-t + u + c, .8) || 0), c < 0 && i < n && (i = n + 1 - Math.pow(n - u - c, .8) || 0), l > 0 && s > e && (s = e - 1 + Math.pow(-e + f + l, .8) || 0), l < 0 && s < o && (s = o + 1 - Math.pow(o - f - l, .8) || 0), {
            top: s,
            left: i
        }
    }, d.prototype.limitPosition = function(t, e, n, o) {
        var i = this.canvasWidth,
            s = this.canvasHeight;
        return t = n > i ? (t = t > 0 ? 0 : t) < i - n ? i - n : t : Math.max(0, i / 2 - n / 2), {
            top: e = o > s ? (e = e > 0 ? 0 : e) < s - o ? s - o : e : Math.max(0, s / 2 - o / 2),
            left: t
        }
    }, d.prototype.onZoom = function() {
        var e = this,
            s = e.contentStartPos,
            r = s.width,
            c = s.height,
            l = s.left,
            d = s.top,
            u = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            f = Math.floor(r * u),
            h = Math.floor(c * u),
            p = (r - f) * e.percentageOfImageAtPinchPointX,
            g = (c - h) * e.percentageOfImageAtPinchPointY,
            b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = b - e.centerPointStartX,
            v = m - e.centerPointStartY;
        e.canTap = !1, e.newWidth = f, e.newHeight = h, e.contentLastPos = {
            top: d + (g + v),
            left: l + (p + y),
            scaleX: u,
            scaleY: u
        }, e.requestId && i(e.requestId), e.requestId = o(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, d.prototype.ontouchend = function(t) {
        var o = this,
            a = o.isSwiping,
            r = o.isPanning,
            c = o.isZooming,
            l = o.isScrolling;
        if (o.endPoints = s(t), o.dMs = Math.max(new Date().getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
        o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(a, l)
    }, d.prototype.endSwiping = function(t, e) {
        var o = this,
            i = !1,
            s = o.instance.group.length,
            a = Math.abs(o.distanceX),
            r = "x" == t && s > 1 && (o.dMs > 130 && a > 10 || a > 50);
        o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 === i && ("x" == t || "y" == t) && o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding")
    }, d.prototype.endPanning = function() {
        var t, e, o;
        this.contentLastPos && (!1 === this.opts.momentum || this.dMs > 350 ? (t = this.contentLastPos.left, e = this.contentLastPos.top) : (t = this.contentLastPos.left + 500 * this.velocityX, e = this.contentLastPos.top + 500 * this.velocityY), (o = this.limitPosition(t, e, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width, o.height = this.contentStartPos.height, n.fancybox.animate(this.$content, o, 366))
    }, d.prototype.endZooming = function() {
        var t, e, o, i, s = this.instance.current,
            a = this.newWidth,
            r = this.newHeight;
        this.contentLastPos && (t = this.contentLastPos.left, i = {
            top: e = this.contentLastPos.top,
            left: t,
            width: a,
            height: r,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(this.$content, i), a < this.canvasWidth && r < this.canvasHeight ? this.instance.scaleToFit(150) : a > s.width || r > s.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (o = this.limitPosition(t, e, a, r), n.fancybox.animate(this.$content, o, 150)))
    }, d.prototype.onTap = function(e) {
        var o, i = this,
            a = n(e.target),
            r = i.instance,
            c = r.current,
            l = e && s(e) || i.startPoints,
            d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
            u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
            f = function(t) {
                var o = c.opts[t];
                if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
                    case "close":
                        r.close(i.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls();
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        r.group.length > 1 ? r.next() : r.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(d > a[0].clientWidth + a.offset().left))) {
            if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
            else if (a.is(".fancybox-slide")) o = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(a).addBack().filter(a).length) return;
                o = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
                f("dblclick" + o)
            } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function() {
                i.tapped = null, r.isAnimating || f("click" + o)
            }, 500) : f("click" + o);
            return this
        }
    }, n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new d(e))
    }).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function(t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this,
                n = t.instance,
                o = n.group[n.currIndex].opts.slideShow;
            t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function(t) {
            var n = this,
                o = n.instance,
                i = o.current;
            i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, i.opts.slideShow.speed), n.timer = setTimeout(function() {
                o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
            }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function() {
            var t = this,
                e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            this.isActive ? this.stop() : this.start()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function(n, o, i, s, a) {
            var r = o && o.SlideShow;
            r && i.opts.slideShow && (80 === a || 32 === a) && !e(t.activeElement).is("button,a,input") && (s.preventDefault(), r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance(),
            o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        for (var e = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], n = {}, o = 0; o < e.length; o++) {
            var i = e[o];
            if (i && i[1] in t) {
                for (var s = 0; s < i.length; s++) n[e[0][s]] = i[s];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var o = {
            request: function(e) {
                (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[n.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), e(t).on(n.fullscreenchange, function() {
            var t = o.isFullscreen(),
                n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function(t, e) {
            var i;
            if (!n) {
                e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                return
            }
            e && e.group[e.currIndex].opts.fullScreen ? ((i = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(), t.preventDefault(), o.toggle()
            }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = "fancybox-thumbs",
        o = n + "-active";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var i = function(t) {
        this.init(t)
    };
    e.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this,
                n = t.group,
                o = 0;
            e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var i = 0, s = n.length; i < s && (n[i].thumb && o++, !(o > 1)); i++);
            o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, o = this,
                i = o.instance,
                s = o.opts.parentEl,
                a = [];
            o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(s).addBack().filter(s)), o.$grid.on("click", "a", function() {
                i.jumpTo(e(this).attr("data-index"))
            })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function(e, n) {
                (t = n.thumb) || "image" !== n.type || (t = n.src), a.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), o.$list[0].innerHTML = a.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(t) {
            var e, n, i = this.$list,
                s = this.$grid;
            this.instance.current && (n = (e = i.children().removeClass(o).filter('[data-index="' + this.instance.current.index + '"]').addClass(o)).position(), "y" === this.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                scrollTop: i.scrollTop() + n.top
            }, t) : "x" === this.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && i.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && !e.Thumbs && (n = new i(e)).isActive && !0 === n.opts.autoStart && n.show()
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            var s = e && e.Thumbs;
            s && s.isActive && 71 === i && (o.preventDefault(), s.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function() {
        var t, n, o, i, s = e.fancybox.getInstance(),
            a = s.current || null;
        a && ("function" === e.type(a.opts.share.url) && (o = a.opts.share.url.apply(a, [s, a])), i = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(o)).replace(/\{\{url_raw\}\}/g, (n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }, String(t = o).replace(/[&<>"'`=\/]/g, function(t) {
            return n[t]
        }))).replace(/\{\{descr\}\}/g, s.$caption ? encodeURIComponent(s.$caption.text()) : ""), e.fancybox.open({
            src: s.translate(s, i),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(t, e) {
                    s.$refs.container.one("beforeClose.fb", function() {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(t, e, n) {
    "use strict";

    function o() {
        var e = t.location.hash.substr(1),
            n = e.split("-"),
            o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
            hash: e,
            index: o < 1 ? 1 : o,
            gallery: n.join("-")
        }
    }

    function i(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function s(t) {
        var e, n;
        return !!t && "" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        var e = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        };
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, e)
    }), n(function() {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
            "onInit.fb": function(t, e) {
                var n, i;
                !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = s(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, o, i, a) {
                var r;
                if (i && !1 !== i.opts.hash && (r = s(o))) o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (a && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function() {
                    "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), a && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null
                }, 300))
            },
            "beforeClose.fb": function(n, o, i) {
                i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null)
            }
        }), n(t).on("hashchange.fb", function() {
            var t = o(),
                e = null;
            n.each(n(".fancybox-container").get().reverse(), function(t, o) {
                var i = n(o).data("FancyBox");
                if (i && i.currentHash) return e = i, !1
            }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t)
        }), setTimeout(function() {
            n.fancybox.getInstance() || i(o())
        }, 50))
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    var n = new Date().getTime();
    e(t).on({
        "onInit.fb": function(t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var o = e.current,
                    i = new Date().getTime();
                if (!(e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated")))) t = t.originalEvent || t, !(i - n < 250) && (n = i, e[0 > (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) ? "next" : "previous"]())
            })
        }
    })
}(document, jQuery);
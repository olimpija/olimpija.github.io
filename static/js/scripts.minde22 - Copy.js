! function (t) {
    function e(e, i) {
        var s, n = this,
            r = window.navigator,
            o = r.userAgent.toLowerCase();
        n.uid = t.rsModules.uid++, n.ns = ".rs" + n.uid;
        var a, l = document.createElement("div").style,
            c = ["webkit", "Moz", "ms", "O"],
            d = "",
            h = 0;
        for (s = 0; s < c.length; s++) a = c[s], !d && a + "Transform" in l && (d = a), a = a.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[a + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a + "CancelAnimationFrame"] || window[a + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t, e) {
            var i = (new Date).getTime(),
                s = Math.max(0, 16 - (i - h)),
                n = window.setTimeout(function () {
                    t(i + s)
                }, s);
            return h = i + s, n
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        }), n.isIPAD = o.match(/(ipad)/), n.isIOS = n.isIPAD || o.match(/(iphone|ipod)/), c = {}, (s = function (t) {
            return t = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [], {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }(o)).browser && (c[s.browser] = !0, c.version = s.version), c.chrome && (c.webkit = !0), n._a = c, n.isAndroid = -1 < o.indexOf("android"), n.slider = t(e), n.ev = t(n), n._b = t(document), n.st = t.extend({}, t.fn.royalSlider.defaults, i), n._c = n.st.transitionSpeed, n._d = 0, !n.st.allowCSS3 || c.webkit && !n.st.allowCSS3OnWebkit || (s = d + (d ? "T" : "t"), n._e = s + "ransform" in l && s + "ransition" in l, n._e && (n._f = d + (d ? "P" : "p") + "erspective" in l)), d = d.toLowerCase(), n._g = "-" + d + "-", n._h = "vertical" !== n.st.slidesOrientation, n._i = n._h ? "left" : "top", n._j = n._h ? "width" : "height", n._k = -1, n._l = "fade" !== n.st.transitionType, n._l || (n.st.sliderDrag = !1, n._m = 10), n._n = "z-index:0; display:none; opacity:0;", n._o = 0, n._p = 0, n._q = 0, t.each(t.rsModules, function (t, e) {
            "uid" !== t && e.call(n)
        }), n.slides = [], n._r = 0, (n.st.slides ? t(n.st.slides) : n.slider.children().detach()).each(function () {
            n._s(this, !0)
        }), n.st.randomizeSlides && n.slides.sort(function () {
            return .5 - Math.random()
        }), n.numSlides = n.slides.length, n._t(), n.st.startSlideId ? n.st.startSlideId > n.numSlides - 1 && (n.st.startSlideId = n.numSlides - 1) : n.st.startSlideId = 0, n._o = n.staticSlideId = n.currSlideId = n._u = n.st.startSlideId, n.currSlide = n.slides[n.currSlideId], n._v = 0, n.pointerMultitouch = !1, n.slider.addClass((n._h ? "rsHor" : "rsVer") + (n._l ? "" : " rsFade")), l = '<div class="rsOverflow"><div class="rsContainer">', n.slidesSpacing = n.st.slidesSpacing, n._w = (n._h ? n.slider.width() : n.slider.height()) + n.st.slidesSpacing, n._x = Boolean(0 < n._y), 1 >= n.numSlides && (n._z = !1), n._a1 = n._z && n._l ? 2 === n.numSlides ? 1 : 2 : 0, n._b1 = 6 > n.numSlides ? n.numSlides : 6, n._c1 = 0, n._d1 = 0, n.slidesJQ = [];
        for (s = 0; s < n.numSlides; s++) n.slidesJQ.push(t('<div style="' + (n._l ? "" : s !== n.currSlideId ? n._n : "z-index:0;") + '" class="rsSlide "></div>'));
        n._e1 = l = t(l + "</div></div>");
        var u = n.ns,
            d = function (t, e, i, s, r) {
                n._j1 = t + e + u, n._k1 = t + i + u, n._l1 = t + s + u, r && (n._m1 = t + r + u)
            };
        s = r.pointerEnabled, n.pointerEnabled = s || r.msPointerEnabled, n.pointerEnabled ? (n.hasTouch = !1, n._n1 = .2, n.pointerMultitouch = Boolean(1 < r[(s ? "m" : "msM") + "axTouchPoints"]), s ? d("pointer", "down", "move", "up", "cancel") : d("MSPointer", "Down", "Move", "Up", "Cancel")) : (n.isIOS ? n._j1 = n._k1 = n._l1 = n._m1 = "" : d("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (n.hasTouch = !0, n._j1 += " touchstart" + u, n._k1 += " touchmove" + u, n._l1 += " touchend" + u, n._m1 += " touchcancel" + u, n._n1 = .5, n.st.sliderTouch && (n._f1 = !0)) : (n.hasTouch = !1, n._n1 = .2)), n.st.sliderDrag && (n._f1 = !0, c.msie || c.opera ? n._g1 = n._h1 = "move" : c.mozilla ? (n._g1 = "-moz-grab", n._h1 = "-moz-grabbing") : c.webkit && -1 != r.platform.indexOf("Mac") && (n._g1 = "-webkit-grab", n._h1 = "-webkit-grabbing"), n._i1()), n.slider.html(l), n._o1 = n.st.controlsInside ? n._e1 : n.slider, n._p1 = n._e1.children(".rsContainer"), n.pointerEnabled && n._p1.css((s ? "" : "-ms-") + "touch-action", n._h ? "pan-y" : "pan-x"), n._q1 = t('<div class="rsPreloader"></div>'), r = n._p1.children(".rsSlide"), n._r1 = n.slidesJQ[n.currSlideId], n._s1 = 0, n._e ? (n._t1 = "transition-property", n._u1 = "transition-duration", n._v1 = "transition-timing-function", n._w1 = n._x1 = n._g + "transform", n._f ? (c.webkit && !c.chrome && n.slider.addClass("rsWebkit3d"), n._y1 = "translate3d(", n._z1 = "px, ", n._a2 = "px, 0px)") : (n._y1 = "translate(", n._z1 = "px, ", n._a2 = "px)"), n._l ? n._p1[n._g + n._t1] = n._g + "transform" : (c = {}, c[n._g + n._t1] = "opacity", c[n._g + n._u1] = n.st.transitionSpeed + "ms", c[n._g + n._v1] = n.st.css3easeInOut, r.css(c))) : (n._x1 = "left", n._w1 = "top");
        var p;
        t(window).on("resize" + n.ns, function () {
            p && clearTimeout(p), p = setTimeout(function () {
                n.updateSliderSize()
            }, 50)
        }), n.ev.trigger("rsAfterPropsSetup"), n.updateSliderSize(), n.st.keyboardNavEnabled && n._b2(), n.st.arrowsNavHideOnTouch && (n.hasTouch || n.pointerMultitouch) && (n.st.arrowsNav = !1), n.st.arrowsNav && (r = n._o1, t('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(r), n._c2 = r.children(".rsArrowLeft").click(function (t) {
            t.preventDefault(), n.prev()
        }), n._d2 = r.children(".rsArrowRight").click(function (t) {
            t.preventDefault(), n.next()
        }), n.st.arrowsNavAutoHide && !n.hasTouch && (n._c2.addClass("rsHidden"), n._d2.addClass("rsHidden"), r.one("mousemove.arrowshover", function () {
            n._c2.removeClass("rsHidden"), n._d2.removeClass("rsHidden")
        }), r.hover(function () {
            n._e2 || (n._c2.removeClass("rsHidden"), n._d2.removeClass("rsHidden"))
        }, function () {
            n._e2 || (n._c2.addClass("rsHidden"), n._d2.addClass("rsHidden"))
        })), n.ev.on("rsOnUpdateNav", function () {
            n._f2()
        }), n._f2()), n.hasTouch && n.st.sliderTouch || !n.hasTouch && n.st.sliderDrag ? n._p1.on(n._j1, function (t) {
            n._g2(t)
        }) : n.dragSuccess = !1;
        var f = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        n._p1.click(function (e) {
            if (!n.dragSuccess) {
                var i = t(e.target).attr("class");
                if (-1 !== t.inArray(i, f) && n.toggleVideo()) return !1;
                if (n.st.navigateByClick && !n._h2) {
                    if (t(e.target).closest(".rsNoDrag", n._r1).length) return !0;
                    n._i2(e)
                }
                n.ev.trigger("rsSlideClick", e)
            }
        }).on("click.rs", "a", function (t) {
            if (n.dragSuccess) return !1;
            n._h2 = !0, setTimeout(function () {
                n._h2 = !1
            }, 3)
        }), n.ev.trigger("rsAfterInit")
    }
    t.rsModules || (t.rsModules = {
        uid: 0
    }), e.prototype = {
        constructor: e,
        _i2: function (t) {
            (t = t[this._h ? "pageX" : "pageY"] - this._j2) >= this._q ? this.next() : 0 > t && this.prev()
        },
        _t: function () {
            var t;
            t = this.st.numImagesToPreload, (this._z = this.st.loop) && (2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1)), this._z && 0 < t && (4 >= this.numSlides ? t = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (t = Math.floor((this.numSlides - 1) / 2))), this._y = t
        },
        _s: function (e, i) {
            function s(t, e) {
                if (e ? a.images.push(t.attr(e)) : a.images.push(t.text()), l) {
                    l = !1, a.caption = "src" === e ? t.attr("alt") : t.contents(), a.image = a.images[0], a.videoURL = t.attr("data-rsVideo");
                    var i = t.attr("data-rsw"),
                        s = t.attr("data-rsh");
                    void 0 !== i && !1 !== i && void 0 !== s && !1 !== s ? (a.iW = parseInt(i, 10), a.iH = parseInt(s, 10)) : o.st.imgWidth && o.st.imgHeight && (a.iW = o.st.imgWidth, a.iH = o.st.imgHeight)
                }
            }
            var n, r, o = this,
                a = {},
                l = !0;
            if (e = t(e), o._k2 = e, o.ev.trigger("rsBeforeParseNode", [e, a]), !a.stopParsing) return e = o._k2, a.id = o._r, a.contentAdded = !1, o._r++, a.images = [], a.isBig = !1, a.hasCover || (e.hasClass("rsImg") ? (r = e, n = !0) : (r = e.find(".rsImg")).length && (n = !0), n ? (a.bigImage = r.eq(0).attr("data-rsBigImg"), r.each(function () {
                var e = t(this);
                e.is("a") ? s(e, "href") : e.is("img") ? s(e, "src") : s(e)
            })) : e.is("img") && (e.addClass("rsImg rsMainSlideImage"), s(e, "src"))), (r = e.find(".rsCaption")).length && (a.caption = r.remove()), a.content = e, o.ev.trigger("rsAfterParseNode", [e, a]), i && o.slides.push(a), 0 === a.images.length && (a.isLoaded = !0, a.isRendered = !1, a.isLoading = !1, a.images = null), a
        },
        _b2: function () {
            var t, e, i = this,
                s = function (t) {
                    37 === t ? i.prev() : 39 === t && i.next()
                };
            i._b.on("keydown" + i.ns, function (n) {
                if (!i.st.keyboardNavEnabled) return !0;
                if (!(i._l2 || 37 !== (e = n.keyCode) && 39 !== e || t)) {
                    if (document.activeElement && /(INPUT|SELECT|TEXTAREA)/i.test(document.activeElement.tagName)) return !0;
                    i.isFullscreen && n.preventDefault(), s(e), t = setInterval(function () {
                        s(e)
                    }, 700)
                }
            }).on("keyup" + i.ns, function (e) {
                t && (clearInterval(t), t = null)
            })
        },
        goTo: function (t, e) {
            t !== this.currSlideId && this._m2(t, this.st.transitionSpeed, !0, !e)
        },
        destroy: function (e) {
            this.ev.trigger("rsBeforeDestroy"), this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1), this._p1.off(this._j1 + " click"), this.slider.data("royalSlider", null), t.removeData(this.slider, "royalSlider"), t(window).off("resize" + this.ns), this.loadingTimeout && clearTimeout(this.loadingTimeout), e && this.slider.remove(), this.ev = this.slider = this.slides = null
        },
        _n2: function (e, i) {
            function s(i, s, o) {
                i.isAdded ? (n(s, i), r(s, i)) : (o || (o = c.slidesJQ[s]), i.holder ? o = i.holder : (o = c.slidesJQ[s] = t(o), i.holder = o), i.appendOnLoaded = !1, r(s, i, o), n(s, i), c._p2(i, o, e), i.isAdded = !0)
            }

            function n(t, i) {
                i.contentAdded || (c.setItemHtml(i, e), e || (i.contentAdded = !0))
            }

            function r(t, e, i) {
                c._l && (i || (i = c.slidesJQ[t]), i.css(c._i, (t + c._d1 + u) * c._w))
            }

            function o(t) {
                if (d) {
                    if (t > h - 1) return o(t - h);
                    if (0 > t) return o(h + t)
                }
                return t
            }
            var a, l, c = this,
                d = c._z,
                h = c.numSlides;
            if (!isNaN(i)) return o(i);
            var u, p, f = c.currSlideId,
                m = e ? Math.abs(c._o2 - c.currSlideId) >= c.numSlides - 1 ? 0 : 1 : c._y,
                g = Math.min(2, m),
                _ = !1,
                v = !1;
            for (l = f; l < f + 1 + g; l++)
                if (p = o(l), (a = c.slides[p]) && (!a.isAdded || !a.positionSet)) {
                    _ = !0;
                    break
                } for (l = f - 1; l > f - 1 - g; l--)
                if (p = o(l), (a = c.slides[p]) && (!a.isAdded || !a.positionSet)) {
                    v = !0;
                    break
                } if (_)
                for (l = f; l < f + m + 1; l++) p = o(l), u = Math.floor((c._u - (f - l)) / c.numSlides) * c.numSlides, (a = c.slides[p]) && s(a, p);
            if (v)
                for (l = f - 1; l > f - 1 - m; l--) p = o(l), u = Math.floor((c._u - (f - l)) / h) * h, (a = c.slides[p]) && s(a, p);
            if (!e)
                for (g = o(f - m), f = o(f + m), m = g > f ? 0 : g, l = 0; l < h; l++) g > f && l > g - 1 || !(l < m || l > f) || (a = c.slides[l]) && a.holder && (a.holder.detach(), a.isAdded = !1)
        },
        setItemHtml: function (e, i) {
            var s = this,
                n = function () {
                    if (e.images) {
                        if (!e.isLoading) {
                            var i, n;
                            if (e.content.hasClass("rsImg") ? (i = e.content, n = !0) : i = e.content.find(".rsImg:not(img)"), i && !i.is("img") && i.each(function () {
                                    var i = t(this),
                                        s = '<img class="rsImg" src="' + (i.is("a") ? i.attr("href") : i.text()) + '" />';
                                    n ? e.content = t(s) : i.replaceWith(s)
                                }), i = n ? e.content : e.content.find("img.rsImg"), c(), i.eq(0).addClass("rsMainSlideImage"), e.iW && e.iH && (e.isLoaded || s._q2(e), a()), e.isLoading = !0, e.isBig) t("<img />").on("load.rs error.rs", function (e) {
                                t(this).off("load.rs error.rs"), r([this], !0)
                            }).attr("src", e.image);
                            else {
                                e.loaded = [], e.numStartedLoad = 0, i = function (i) {
                                    t(this).off("load.rs error.rs"), e.loaded.push(this), e.loaded.length === e.numStartedLoad && r(e.loaded, !1)
                                };
                                for (var o = 0; o < e.images.length; o++) {
                                    var l = t("<img />");
                                    e.numStartedLoad++, l.on("load.rs error.rs", i).attr("src", e.images[o])
                                }
                            }
                        }
                    } else e.isRendered = !0, e.isLoaded = !0, e.isLoading = !1, a(!0)
                },
                r = function (t, i) {
                    if (t.length) {
                        var s = t[0];
                        if (i !== e.isBig)(s = e.holder.children()) && 1 < s.length && d();
                        else if (e.iW && e.iH) o();
                        else if (e.iW = s.width, e.iH = s.height, e.iW && e.iH) o();
                        else {
                            var n = new Image;
                            n.onload = function () {
                                n.width ? (e.iW = n.width, e.iH = n.height, o()) : setTimeout(function () {
                                    n.width && (e.iW = n.width, e.iH = n.height), o()
                                }, 1e3)
                            }, n.src = s.src
                        }
                    } else o()
                },
                o = function () {
                    e.isLoaded = !0, e.isLoading = !1, a(), d(), l()
                },
                a = function () {
                    if (!e.isAppended && s.ev) {
                        var t = s.st.visibleNearby,
                            n = e.id - s._o;
                        i || e.appendOnLoaded || !s.st.fadeinLoadedSlide || 0 !== n && (!(t || s._r2 || s._l2) || -1 !== n && 1 !== n) || (t = {
                            visibility: "visible",
                            opacity: 0
                        }, t[s._g + "transition"] = "opacity 400ms ease-in-out", e.content.css(t), setTimeout(function () {
                            e.content.css("opacity", 1)
                        }, 16)), e.holder.find(".rsPreloader").length ? e.holder.append(e.content) : e.holder.html(e.content), e.isAppended = !0, e.isLoaded && (s._q2(e), l()), e.sizeReady || (e.sizeReady = !0, setTimeout(function () {
                            s.ev.trigger("rsMaybeSizeReady", e)
                        }, 100))
                    }
                },
                l = function () {
                    !e.loadedTriggered && s.ev && (e.isLoaded = e.loadedTriggered = !0, e.holder.trigger("rsAfterContentSet"), s.ev.trigger("rsAfterContentSet", e))
                },
                c = function () {
                    s.st.usePreloader && e.holder.html(s._q1.clone())
                },
                d = function (t) {
                    s.st.usePreloader && (t = e.holder.find(".rsPreloader")).length && t.remove()
                };
            e.isLoaded ? a() : i ? !s._l && e.images && e.iW && e.iH ? n() : (e.holder.isWaiting = !0, c(), e.holder.slideId = -99) : n()
        },
        _p2: function (t, e, i) {
            this._p1.append(t.holder), t.appendOnLoaded = !1
        },
        _g2: function (e, i) {
            var s, n = this,
                r = "touchstart" === e.type;
            if (n._s2 = r, n.ev.trigger("rsDragStart"), t(e.target).closest(".rsNoDrag", n._r1).length) return n.dragSuccess = !1, !0;
            if (!i && n._r2 && (n._t2 = !0, n._u2()), n.dragSuccess = !1, n._l2) r && (n._v2 = !0);
            else {
                if (r && (n._v2 = !1), n._w2(), r) {
                    var o = e.originalEvent.touches;
                    if (!(o && 0 < o.length)) return;
                    s = o[0], 1 < o.length && (n._v2 = !0)
                } else e.preventDefault(), s = e, n.pointerEnabled && (s = s.originalEvent);
                n._l2 = !0, n._b.on(n._k1, function (t) {
                    n._x2(t, i)
                }).on(n._l1, function (t) {
                    n._y2(t, i)
                }), n._z2 = "", n._a3 = !1, n._b3 = s.pageX, n._c3 = s.pageY, n._d3 = n._v = (i ? n._e3 : n._h) ? s.pageX : s.pageY, n._f3 = 0, n._g3 = 0, n._h3 = i ? n._i3 : n._p, n._j3 = (new Date).getTime(), r && n._e1.on(n._m1, function (t) {
                    n._y2(t, i)
                })
            }
        },
        _k3: function (t, e) {
            if (this._l3) {
                var i = this._m3,
                    s = t.pageX - this._b3,
                    n = t.pageY - this._c3,
                    r = this._h3 + s,
                    o = this._h3 + n,
                    a = e ? this._e3 : this._h,
                    r = a ? r : o,
                    o = this._z2;
                this._a3 = !0, this._b3 = t.pageX, this._c3 = t.pageY, "x" === o && 0 !== s ? this._f3 = 0 < s ? 1 : -1 : "y" === o && 0 !== n && (this._g3 = 0 < n ? 1 : -1), o = a ? this._b3 : this._c3, s = a ? s : n, e ? r > this._n3 ? r = this._h3 + s * this._n1 : r < this._o3 && (r = this._h3 + s * this._n1) : this._z || (0 >= this.currSlideId && 0 < o - this._d3 && (r = this._h3 + s * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > o - this._d3 && (r = this._h3 + s * this._n1)), this._h3 = r, 200 < i - this._j3 && (this._j3 = i, this._v = o), e ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        },
        _x2: function (t, e) {
            var i, s = this,
                n = "touchmove" === t.type;
            if (!s._s2 || n) {
                if (n) {
                    if (s._r3) return;
                    var r = t.originalEvent.touches;
                    if (!r) return;
                    if (1 < r.length) return;
                    i = r[0]
                } else i = t, s.pointerEnabled && (i = i.originalEvent);
                if (s._a3 || (s._e && (e ? s._s3 : s._p1).css(s._g + s._u1, "0s"), function t() {
                        s._l2 && (s._t3 = requestAnimationFrame(t), s._u3 && s._k3(s._u3, e))
                    }()), s._l3) t.preventDefault(), s._m3 = (new Date).getTime(), s._u3 = i;
                else if (r = e ? s._e3 : s._h, 7 < (i = Math.abs(i.pageX - s._b3) - Math.abs(i.pageY - s._c3) - (r ? -7 : 7))) {
                    if (r) t.preventDefault(), s._z2 = "x";
                    else if (n) return void s._v3(t);
                    s._l3 = !0
                } else if (-7 > i) {
                    if (r) {
                        if (n) return void s._v3(t)
                    } else t.preventDefault(), s._z2 = "y";
                    s._l3 = !0
                }
            }
        },
        _v3: function (t, e) {
            this._r3 = !0, this._a3 = this._l2 = !1, this._y2(t)
        },
        _y2: function (e, i) {
            function s(t) {
                return 100 > t ? 100 : 500 < t ? 500 : t
            }

            function n(t, e) {
                (c._l || i) && (a = (-c._u - c._d1) * c._w, l = Math.abs(c._p - a), c._c = l / e, t && (c._c += 250), c._c = s(c._c), c._x3(a, !1))
            }
            var r, o, a, l, c = this;
            if (r = -1 < e.type.indexOf("touch"), !c._s2 || r)
                if (c._s2 = !1, c.ev.trigger("rsDragRelease"), c._u3 = null, c._l2 = !1, c._r3 = !1, c._l3 = !1, c._m3 = 0, cancelAnimationFrame(c._t3), c._a3 && (i ? c._q3(c._h3) : c._l && c._p3(c._h3)), c._b.off(c._k1).off(c._l1), r && c._e1.off(c._m1), c._i1(), !c._a3 && !c._v2 && i && c._w3) {
                    var d = t(e.target).closest(".rsNavItem");
                    d.length && c.goTo(d.index())
                } else {
                    if (o = i ? c._e3 : c._h, !c._a3 || "y" === c._z2 && o || "x" === c._z2 && !o) {
                        if (i || !c._t2) return c._t2 = !1, void(c.dragSuccess = !1);
                        if (c._t2 = !1, c.st.navigateByClick) return c._i2(c.pointerEnabled ? e.originalEvent : e), void(c.dragSuccess = !0);
                        c.dragSuccess = !0
                    } else c.dragSuccess = !0;
                    c._t2 = !1, c._z2 = "";
                    var h = c.st.minSlideOffset;
                    r = r ? e.originalEvent.changedTouches[0] : c.pointerEnabled ? e.originalEvent : e;
                    var u = o ? r.pageX : r.pageY,
                        p = c._d3;
                    r = c._v;
                    var f = c.currSlideId,
                        m = c.numSlides,
                        g = o ? c._f3 : c._g3,
                        _ = c._z;
                    if (Math.abs(u - p), r = u - r, o = (new Date).getTime() - c._j3, o = Math.abs(r) / o, 0 === g || 1 >= m) n(!0, o);
                    else {
                        if (!_ && !i)
                            if (0 >= f) {
                                if (0 < g) return void n(!0, o)
                            } else if (f >= m - 1 && 0 > g) return void n(!0, o);
                        if (i) {
                            if ((a = c._i3) > c._n3) a = c._n3;
                            else if (a < c._o3) a = c._o3;
                            else {
                                if (u = o * o / .006, d = -c._i3, p = c._y3 - c._z3 + c._i3, 0 < r && u > d ? (d += c._z3 / (15 / (u / o * .003)), o = o * d / u, u = d) : 0 > r && u > p && (p += c._z3 / (15 / (u / o * .003)), o = o * p / u, u = p), d = Math.max(Math.round(o / .003), 50), (a += u * (0 > r ? -1 : 1)) > c._n3) return void c._a4(a, d, !0, c._n3, 200);
                                if (a < c._o3) return void c._a4(a, d, !0, c._o3, 200)
                            }
                            c._a4(a, d, !0)
                        } else d = function (t) {
                            var e = Math.floor(t / c._w);
                            return t - e * c._w > h && e++, e
                        }, p + h < u ? 0 > g ? n(!1, o) : (d = d(u - p), c._m2(c.currSlideId - d, s(Math.abs(c._p - (-c._u - c._d1 + d) * c._w) / o), !1, !0, !0)) : p - h > u ? 0 < g ? n(!1, o) : (d = d(p - u), c._m2(c.currSlideId + d, s(Math.abs(c._p - (-c._u - c._d1 - d) * c._w) / o), !1, !0, !0)) : n(!1, o)
                    }
                }
        },
        _p3: function (t) {
            t = this._p = t, this._e ? this._p1.css(this._x1, this._y1 + (this._h ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, t)
        },
        updateSliderSize: function (t) {
            var e, i;
            if (this.slider) {
                if (this.st.autoScaleSlider) {
                    var s = this.st.autoScaleSliderWidth,
                        n = this.st.autoScaleSliderHeight;
                    this.st.autoScaleHeight ? ((e = this.slider.width()) != this.width && (this.slider.css("height", n / s * e), e = this.slider.width()), i = this.slider.height()) : ((i = this.slider.height()) != this.height && (this.slider.css("width", s / n * i), i = this.slider.height()), e = this.slider.width())
                } else e = this.slider.width(), i = this.slider.height();
                if (t || e != this.width || i != this.height) {
                    for (this.width = e, this.height = i, this._b4 = e, this._c4 = i, this.ev.trigger("rsBeforeSizeSet"), this.ev.trigger("rsAfterSizePropSet"), this._e1.css({
                            width: this._b4,
                            height: this._c4
                        }), this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing, this._d4 = this.st.imageScalePadding, e = 0; e < this.slides.length; e++) t = this.slides[e], t.positionSet = !1, t && t.images && t.isLoaded && (t.isRendered = !1, this._q2(t));
                    if (this._e4)
                        for (e = 0; e < this._e4.length; e++)(t = this._e4[e]).holder.css(this._i, (t.id + this._d1) * this._w);
                    this._n2(), this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w)), this.ev.trigger("rsOnUpdateNav")
                }
                this._j2 = this._e1.offset(), this._j2 = this._j2[this._i]
            }
        },
        appendSlide: function (e, i) {
            var s = this._s(e);
            (isNaN(i) || i > this.numSlides) && (i = this.numSlides), this.slides.splice(i, 0, s), this.slidesJQ.splice(i, 0, t('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>')), i <= this.currSlideId && this.currSlideId++, this.ev.trigger("rsOnAppendSlide", [s, i]), this._f4(i), i === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function (t) {
            var e = this.slides[t];
            e && (e.holder && e.holder.remove(), t < this.currSlideId && this.currSlideId--, this.slides.splice(t, 1), this.slidesJQ.splice(t, 1), this.ev.trigger("rsOnRemoveSlide", [t]), this._f4(t), t === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function (t) {
            var e = this;
            for (t = e.numSlides, t = 0 >= e._u ? 0 : Math.floor(e._u / t), e.numSlides = e.slides.length, 0 === e.numSlides ? (e.currSlideId = e._d1 = e._u = 0, e.currSlide = e._g4 = null) : e._u = t * e.numSlides + e.currSlideId, t = 0; t < e.numSlides; t++) e.slides[t].id = t;
            e.currSlide = e.slides[e.currSlideId], e._r1 = e.slidesJQ[e.currSlideId], e.currSlideId >= e.numSlides ? e.goTo(e.numSlides - 1) : 0 > e.currSlideId && e.goTo(0), e._t(), e._l && e._p1.css(e._g + e._u1, "0ms"), e._h4 && clearTimeout(e._h4), e._h4 = setTimeout(function () {
                e._l && e._p3((-e._u - e._d1) * e._w), e._n2(), e._l || e._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14), e.ev.trigger("rsOnUpdateNav")
        },
        _i1: function () {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        },
        _w2: function () {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        },
        next: function (t) {
            this._m2("next", this.st.transitionSpeed, !0, !t)
        },
        prev: function (t) {
            this._m2("prev", this.st.transitionSpeed, !0, !t)
        },
        _m2: function (t, e, i, s, n) {
            var r, o, a, l = this;
            if (l.ev.trigger("rsBeforeMove", [t, s]), a = "next" === t ? l.currSlideId + 1 : "prev" === t ? l.currSlideId - 1 : t = parseInt(t, 10), !l._z) {
                if (0 > a) return void l._i4("left", !s);
                if (a >= l.numSlides) return void l._i4("right", !s)
            }
            l._r2 && (l._u2(!0), i = !1), o = a - l.currSlideId, a = l._o2 = l.currSlideId;
            d = l.currSlideId + o;
            s = l._u;
            var c;
            l._z ? (d = l._n2(!1, d), s += o) : s = d, l._o = d, l._g4 = l.slidesJQ[l.currSlideId], l._u = s, l.currSlideId = l._o, l.currSlide = l.slides[l.currSlideId], l._r1 = l.slidesJQ[l.currSlideId];
            var d = l.st.slidesDiff,
                h = Boolean(0 < o);
            o = Math.abs(o);
            var u = Math.floor(a / l._y),
                p = Math.floor((a + (h ? d : -d)) / l._y);
            if ((u = (h ? Math.max(u, p) : Math.min(u, p)) * l._y + (h ? l._y - 1 : 0)) > l.numSlides - 1 ? u = l.numSlides - 1 : 0 > u && (u = 0), (a = h ? u - a : a - u) > l._y && (a = l._y), o > a + d)
                for (l._d1 += (o - (a + d)) * (h ? -1 : 1), e *= 1.4, a = 0; a < l.numSlides; a++) l.slides[a].positionSet = !1;
            l._c = e, l._n2(!0), n || (c = !0), r = (-s - l._d1) * l._w, c ? setTimeout(function () {
                l._j4 = !1, l._x3(r, t, !1, i), l.ev.trigger("rsOnUpdateNav")
            }, 0) : (l._x3(r, t, !1, i), l.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function () {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        },
        _x3: function (e, i, s, n, r) {
            function o() {
                var t;
                a && (t = a.data("rsTimeout")) && (a !== l && a.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(t), a.data("rsTimeout", "")), (t = l.data("rsTimeout")) && (clearTimeout(t), l.data("rsTimeout", ""))
            }
            var a, l, c = this,
                d = {};
            isNaN(c._c) && (c._c = 400), c._p = c._h3 = e, c.ev.trigger("rsBeforeAnimStart"), c._e ? c._l ? (c._c = parseInt(c._c, 10), s = c._g + c._v1, d[c._g + c._u1] = c._c + "ms", d[s] = n ? t.rsCSS3Easing[c.st.easeInOut] : t.rsCSS3Easing[c.st.easeOut], c._p1.css(d), n || !c.hasTouch ? setTimeout(function () {
                c._p3(e)
            }, 5) : c._p3(e)) : (c._c = c.st.transitionSpeed, a = c._g4, (l = c._r1).data("rsTimeout") && l.css("opacity", 0), o(), a && a.data("rsTimeout", setTimeout(function () {
                d[c._g + c._u1] = "0ms", d.zIndex = 0, d.display = "none", a.data("rsTimeout", ""), a.css(d), setTimeout(function () {
                    a.css("opacity", 0)
                }, 16)
            }, c._c + 60)), d.display = "block", d.zIndex = c._m, d.opacity = 0, d[c._g + c._u1] = "0ms", d[c._g + c._v1] = t.rsCSS3Easing[c.st.easeInOut], l.css(d), l.data("rsTimeout", setTimeout(function () {
                l.css(c._g + c._u1, c._c + "ms"), l.data("rsTimeout", setTimeout(function () {
                    l.css("opacity", 1), l.data("rsTimeout", "")
                }, 20))
            }, 20))) : c._l ? (d[c._h ? c._x1 : c._w1] = e + "px", c._p1.animate(d, c._c, n ? c.st.easeInOut : c.st.easeOut)) : (a = c._g4, (l = c._r1).stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: c._m
            }), c._c = c.st.transitionSpeed, l.animate({
                opacity: 1
            }, c._c, c.st.easeInOut), o(), a && a.data("rsTimeout", setTimeout(function () {
                a.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, c._c + 60))), c._r2 = !0, c.loadingTimeout && clearTimeout(c.loadingTimeout), c.loadingTimeout = r ? setTimeout(function () {
                c.loadingTimeout = null, r.call()
            }, c._c + 60) : setTimeout(function () {
                c.loadingTimeout = null, c._k4(i)
            }, c._c + 60)
        },
        _u2: function (t) {
            if (this._r2 = !1, clearTimeout(this.loadingTimeout), this._l)
                if (this._e) {
                    if (!t) {
                        t = this._p;
                        var e = this._h3 = this._l4();
                        this._p1.css(this._g + this._u1, "0ms"), t !== e && this._p3(e)
                    }
                } else this._p1.stop(!0), this._p = parseInt(this._p1.css(this._h ? this._x1 : this._w1), 10);
            else 20 < this._m ? this._m = 10 : this._m++
        },
        _l4: function () {
            var t = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                e = 0 === t[0].indexOf("matrix3d");
            return parseInt(t[this._h ? e ? 12 : 4 : e ? 13 : 5], 10)
        },
        _m4: function (t, e) {
            return this._e ? this._y1 + (e ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2 : t
        },
        _k4: function (t) {
            this._l || (this._r1.css("z-index", 0), this._m = 10), this._r2 = !1, this.staticSlideId = this.currSlideId, this._n2(), this._n4 = !1, this.ev.trigger("rsAfterSlideChange")
        },
        _i4: function (t, e) {
            var i = this,
                s = (-i._u - i._d1) * i._w;
            if (0 !== i.numSlides && !i._r2)
                if (i.st.loopRewind) i.goTo("left" === t ? i.numSlides - 1 : 0, e);
                else if (i._l) {
                i._c = 200;
                var n = function () {
                    i._r2 = !1
                };
                i._x3(s + ("left" === t ? 30 : -30), "", !1, !0, function () {
                    i._r2 = !1, i._x3(s, "", !1, !0, n)
                })
            }
        },
        _q2: function (e, i) {
            if (!e.isRendered) {
                var s, n, r = e.content,
                    o = "rsMainSlideImage",
                    a = t.isFunction(this.st.imageAlignCenter) ? this.st.imageAlignCenter(e) : this.st.imageAlignCenter,
                    l = t.isFunction(this.st.imageScaleMode) ? this.st.imageScaleMode(e) : this.st.imageScaleMode;
                if (e.videoURL && (o = "rsVideoContainer", "fill" !== l ? s = !0 : ((n = r).hasClass(o) || (n = n.find("." + o)), n.css({
                        width: "100%",
                        height: "100%"
                    }), o = "rsMainSlideImage")), r.hasClass(o) || (r = r.find("." + o)), r) {
                    var c = e.iW,
                        d = e.iH;
                    if (e.isRendered = !0, "none" !== l || a) {
                        o = "fill" !== l ? this._d4 : 0, n = this._b4 - 2 * o;
                        var h, u, p = this._c4 - 2 * o,
                            f = {};
                        "fit-if-smaller" === l && (c > n || d > p) && (l = "fit"), "fill" !== l && "fit" !== l || (h = n / c, u = p / d, h = "fill" == l ? h > u ? h : u : "fit" == l ? h < u ? h : u : 1, c = Math.ceil(c * h, 10), d = Math.ceil(d * h, 10)), "none" !== l && (f.width = c, f.height = d, s && r.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        })), a && (f.marginLeft = Math.floor((n - c) / 2) + o, f.marginTop = Math.floor((p - d) / 2) + o), r.css(f)
                    }
                }
            }
        }
    }, t.rsProto = e.prototype, t.fn.royalSlider = function (i) {
        var s = arguments;
        return this.each(function () {
            var n = t(this);
            if ("object" != typeof i && i) {
                if ((n = n.data("royalSlider")) && n[i]) return n[i].apply(n, Array.prototype.slice.call(s, 1))
            } else n.data("royalSlider") || n.data("royalSlider", new e(n, i))
        })
    }, t.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    }, t.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    }, t.extend(jQuery.easing, {
        easeInOutSine: function (t, e, i, s, n) {
            return -s / 2 * (Math.cos(Math.PI * e / n) - 1) + i
        },
        easeOutSine: function (t, e, i, s, n) {
            return s * Math.sin(e / n * (Math.PI / 2)) + i
        },
        easeOutCubic: function (t, e, i, s, n) {
            return s * ((e = e / n - 1) * e * e + 1) + i
        }
    })
}(jQuery, window),
function (t) {
    t.extend(t.rsProto, {
        _i5: function () {
            var e = this;
            "bullets" === e.st.controlNavigation && (e.ev.one("rsAfterPropsSetup", function () {
                e._j5 = !0, e.slider.addClass("rsWithBullets");
                for (var i = '<div class="rsNav rsBullets">', s = 0; s < e.numSlides; s++) i += '<div class="rsNavItem rsBullet"><span></span></div>';
                e._k5 = i = t(i + "</div>"), e._l5 = i.appendTo(e.slider).children(), e._k5.on("click.rs", ".rsNavItem", function (i) {
                    e._m5 || e.goTo(t(this).index())
                })
            }), e.ev.on("rsOnAppendSlide", function (t, i, s) {
                s >= e.numSlides ? e._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : e._l5.eq(s).before('<div class="rsNavItem rsBullet"><span></span></div>'), e._l5 = e._k5.children()
            }), e.ev.on("rsOnRemoveSlide", function (t, i) {
                var s = e._l5.eq(i);
                s && s.length && (s.remove(), e._l5 = e._k5.children())
            }), e.ev.on("rsOnUpdateNav", function () {
                var t = e.currSlideId;
                e._n5 && e._n5.removeClass("rsNavSelected"), (t = e._l5.eq(t)).addClass("rsNavSelected"), e._n5 = t
            }))
        }
    }), t.rsModules.bullets = t.rsProto._i5
}(jQuery),
function (t) {
    t.extend(t.rsProto, {
        _h6: function () {
            var e = this;
            "thumbnails" === e.st.controlNavigation && (e._i6 = {
                drag: !0,
                touch: !0,
                orientation: "horizontal",
                navigation: !0,
                arrows: !0,
                arrowLeft: null,
                arrowRight: null,
                spacing: 4,
                arrowsAutoHide: !1,
                appendSpan: !1,
                transitionSpeed: 600,
                autoCenter: !0,
                fitInViewport: !0,
                firstMargin: !0,
                paddingTop: 0,
                paddingBottom: 0
            }, e.st.thumbs = t.extend({}, e._i6, e.st.thumbs), e._j6 = !0, !1 === e.st.thumbs.firstMargin ? e.st.thumbs.firstMargin = 0 : !0 === e.st.thumbs.firstMargin && (e.st.thumbs.firstMargin = e.st.thumbs.spacing), e.ev.on("rsBeforeParseNode", function (e, i, s) {
                i = t(i), s.thumbnail = i.find(".rsTmb").remove(), s.thumbnail.length ? s.thumbnail = t(document.createElement("div")).append(s.thumbnail).html() : (s.thumbnail = i.attr("data-rsTmb"), s.thumbnail || (s.thumbnail = i.find(".rsImg").attr("data-rsTmb")), s.thumbnail = s.thumbnail ? '<img src="' + s.thumbnail + '"/>' : "")
            }), e.ev.one("rsAfterPropsSetup", function () {
                e._k6()
            }), e._n5 = null, e.ev.on("rsOnUpdateNav", function () {
                var i = t(e._l5[e.currSlideId]);
                i !== e._n5 && (e._n5 && (e._n5.removeClass("rsNavSelected"), e._n5 = null), e._l6 && e._m6(e.currSlideId), e._n5 = i.addClass("rsNavSelected"))
            }), e.ev.on("rsOnAppendSlide", function (t, i, s) {
                t = "<div" + e._n6 + ' class="rsNavItem rsThumb">' + e._o6 + i.thumbnail + "</div>", e._e && e._s3.css(e._g + "transition-duration", "0ms"), s >= e.numSlides ? e._s3.append(t) : e._l5.eq(s).before(t), e._l5 = e._s3.children(), e.updateThumbsSize(!0)
            }), e.ev.on("rsOnRemoveSlide", function (t, i) {
                var s = e._l5.eq(i);
                s && (e._e && e._s3.css(e._g + "transition-duration", "0ms"), s.remove(), e._l5 = e._s3.children(), e.updateThumbsSize(!0))
            }))
        },
        _k6: function () {
            var e, i, s = this,
                n = "rsThumbs",
                r = s.st.thumbs,
                o = "",
                a = r.spacing;
            s._j5 = !0, s._e3 = "vertical" !== r.orientation, s._n6 = e = a ? ' style="margin-' + (s._e3 ? "right" : "bottom") + ":" + a + 'px;"' : "", s._i3 = 0, s._p6 = !1, s._m5 = !1, s._l6 = !1, s._q6 = r.arrows && r.navigation, i = s._e3 ? "Hor" : "Ver", s.slider.addClass("rsWithThumbs rsWithThumbs" + i), o += '<div class="rsNav rsThumbs rsThumbs' + i + '"><div class="' + n + 'Container">', s._o6 = r.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var l = 0; l < s.numSlides; l++) i = s.slides[l], o += "<div" + e + ' class="rsNavItem rsThumb">' + i.thumbnail + s._o6 + "</div>";
            o = t(o + "</div></div>"), e = {}, r.paddingTop && (e[s._e3 ? "paddingTop" : "paddingLeft"] = r.paddingTop), r.paddingBottom && (e[s._e3 ? "paddingBottom" : "paddingRight"] = r.paddingBottom), o.css(e), s._s3 = t(o).find("." + n + "Container"), s._q6 && (n += "Arrow", r.arrowLeft ? s._r6 = r.arrowLeft : (s._r6 = t('<div class="' + n + " " + n + 'Left"><div class="' + n + 'Icn"></div></div>'), o.append(s._r6)), r.arrowRight ? s._s6 = r.arrowRight : (s._s6 = t('<div class="' + n + " " + n + 'Right"><div class="' + n + 'Icn"></div></div>'), o.append(s._s6)), s._r6.click(function () {
                var t = (Math.floor(s._i3 / s._t6) + s._u6) * s._t6 + s.st.thumbs.firstMargin;
                s._a4(t > s._n3 ? s._n3 : t)
            }), s._s6.click(function () {
                var t = (Math.floor(s._i3 / s._t6) - s._u6) * s._t6 + s.st.thumbs.firstMargin;
                s._a4(t < s._o3 ? s._o3 : t)
            }), r.arrowsAutoHide && !s.hasTouch && (s._r6.css("opacity", 0), s._s6.css("opacity", 0), o.one("mousemove.rsarrowshover", function () {
                s._l6 && (s._r6.css("opacity", 1), s._s6.css("opacity", 1))
            }), o.hover(function () {
                s._l6 && (s._r6.css("opacity", 1), s._s6.css("opacity", 1))
            }, function () {
                s._l6 && (s._r6.css("opacity", 0), s._s6.css("opacity", 0))
            }))), s._k5 = o, s._l5 = s._s3.children(), s.msEnabled && s.st.thumbs.navigation && s._s3.css("-ms-touch-action", s._e3 ? "pan-y" : "pan-x"), s.slider.append(o), s._w3 = !0, s._v6 = a, r.navigation && s._e && s._s3.css(s._g + "transition-property", s._g + "transform"), s._k5.on("click.rs", ".rsNavItem", function (e) {
                s._m5 || s.goTo(t(this).index())
            }), s.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function () {
                s._w6 = s._e3 ? s._c4 : s._b4, s.updateThumbsSize(!0)
            }), s.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs", function (t, e) {
                s.updateThumbsSize(!0, e)
            })
        },
        updateThumbsSize: function (t, e) {
            var i = this,
                s = i._l5.first(),
                n = {},
                r = i._l5.length;
            i._t6 = (i._e3 ? s.outerWidth() : s.outerHeight()) + i._v6, i._y3 = r * i._t6 - i._v6, n[i._e3 ? "width" : "height"] = i._y3 + i._v6, i._z3 = i._e3 ? i._k5.width() : void 0 !== e ? e : i._k5.height(), i._w3 && (i.isFullscreen || i.st.thumbs.fitInViewport) && (i._e3 ? i._c4 = i._w6 - i._k5.outerHeight() : i._b4 = i._w6 - i._k5.outerWidth()), i._z3 && (i._o3 = -(i._y3 - i._z3) - i.st.thumbs.firstMargin, i._n3 = i.st.thumbs.firstMargin, i._u6 = Math.floor(i._z3 / i._t6), i._y3 < i._z3 ? (i.st.thumbs.autoCenter ? i._q3((i._z3 - i._y3) / 2) : i._q3(i._n3), i.st.thumbs.arrows && i._r6 && (i._r6.addClass("rsThumbsArrowDisabled"), i._s6.addClass("rsThumbsArrowDisabled")), i._l6 = !1, i._m5 = !1, i._k5.off(i._j1)) : i.st.thumbs.navigation && !i._l6 && (i._l6 = !0, !i.hasTouch && i.st.thumbs.drag || i.hasTouch && i.st.thumbs.touch) && (i._m5 = !0, i._k5.on(i._j1, function (t) {
                i._g2(t, !0)
            })), i._s3.css(n), t && e && i._m6(i.currSlideId, !0))
        },
        setThumbsOrientation: function (t, e) {
            this._w3 && (this.st.thumbs.orientation = t, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), e || this.updateSliderSize(!0))
        },
        _q3: function (t) {
            this._i3 = t, this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, t)
        },
        _a4: function (e, i, s, n, r) {
            var o = this;
            if (o._l6) {
                i || (i = o.st.thumbs.transitionSpeed), o._i3 = e, o._x6 && clearTimeout(o._x6), o._p6 && (o._e || o._s3.stop(), s = !0);
                var a = {};
                o._p6 = !0, o._e ? (a[o._g + "transition-duration"] = i + "ms", a[o._g + "transition-timing-function"] = s ? t.rsCSS3Easing[o.st.easeOut] : t.rsCSS3Easing[o.st.easeInOut], o._s3.css(a), o._q3(e)) : (a[o._e3 ? o._x1 : o._w1] = e + "px", o._s3.animate(a, i, s ? "easeOutCubic" : o.st.easeInOut)), n && (o._i3 = n), o._y6(), o._x6 = setTimeout(function () {
                    o._p6 = !1, r && (o._a4(n, r, !0), r = null)
                }, i)
            }
        },
        _y6: function () {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
        },
        _m6: function (t, e) {
            var i, s = 0,
                n = t * this._t6 + 2 * this._t6 - this._v6 + this._n3,
                r = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (e = !0, this._j6 = !1), n + this._i3 > this._z3 ? (t === this.numSlides - 1 && (s = 1), r = -t + this._u6 - 2 + s, i = r * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== t ? (t - 1) * this._t6 <= -this._i3 + this._n3 && t - 1 <= this.numSlides - this._u6 && (i = (1 - t) * this._t6 + this._n3) : i = this._n3, i !== this._i3 && ((s = void 0 === i ? this._i3 : i) > this._n3 ? this._q3(this._n3) : s < this._o3 ? this._q3(this._o3) : void 0 !== i && (e ? this._q3(i) : this._a4(i))), this._y6())
        }
    }), t.rsModules.thumbnails = t.rsProto._h6
}(jQuery),
function (t) {
    t.extend(t.rsProto, {
        _f6: function () {
            var e = this;
            "tabs" === e.st.controlNavigation && (e.ev.on("rsBeforeParseNode", function (e, i, s) {
                i = t(i), s.thumbnail = i.find(".rsTmb").remove(), s.thumbnail.length ? s.thumbnail = t(document.createElement("div")).append(s.thumbnail).html() : (s.thumbnail = i.attr("data-rsTmb"), s.thumbnail || (s.thumbnail = i.find(".rsImg").attr("data-rsTmb")), s.thumbnail = s.thumbnail ? '<img src="' + s.thumbnail + '"/>' : "")
            }), e.ev.one("rsAfterPropsSetup", function () {
                e._g6()
            }), e.ev.on("rsOnAppendSlide", function (t, i, s) {
                s >= e.numSlides ? e._k5.append('<div class="rsNavItem rsTab">' + i.thumbnail + "</div>") : e._l5.eq(s).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>"), e._l5 = e._k5.children()
            }), e.ev.on("rsOnRemoveSlide", function (t, i) {
                var s = e._l5.eq(i);
                s && (s.remove(), e._l5 = e._k5.children())
            }), e.ev.on("rsOnUpdateNav", function () {
                var t = e.currSlideId;
                e._n5 && e._n5.removeClass("rsNavSelected"), (t = e._l5.eq(t)).addClass("rsNavSelected"), e._n5 = t
            }))
        },
        _g6: function () {
            var e, i = this;
            i._j5 = !0, e = '<div class="rsNav rsTabs">';
            for (var s = 0; s < i.numSlides; s++) e += '<div class="rsNavItem rsTab">' + i.slides[s].thumbnail + "</div>";
            e = t(e + "</div>"), i._k5 = e, i._l5 = e.children(".rsNavItem"), i.slider.append(e), i._k5.click(function (e) {
                (e = t(e.target).closest(".rsNavItem")).length && i.goTo(e.index())
            })
        }
    }), t.rsModules.tabs = t.rsProto._f6
}(jQuery),
function (t) {
    t.extend(t.rsProto, {
        _q5: function () {
            var e = this;
            e._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            }, e.st.fullscreen = t.extend({}, e._r5, e.st.fullscreen), e.st.fullscreen.enabled && e.ev.one("rsBeforeSizeSet", function () {
                e._s5()
            })
        },
        _s5: function () {
            var e = this;
            if (e._t5 = !e.st.keyboardNavEnabled && e.st.fullscreen.keyboardNav, e.st.fullscreen.nativeFS) {
                var i = {
                        supportsFullScreen: !1,
                        isFullScreen: function () {
                            return !1
                        },
                        requestFullScreen: function () {},
                        cancelFullScreen: function () {},
                        fullScreenEventName: "",
                        prefix: ""
                    },
                    s = ["webkit", "moz", "o", "ms", "khtml"];
                if (void 0 !== document.cancelFullScreen) i.supportsFullScreen = !0;
                else
                    for (var n = 0, r = s.length; n < r; n++)
                        if (i.prefix = s[n], void 0 !== document[i.prefix + "CancelFullScreen"]) {
                            i.supportsFullScreen = !0;
                            break
                        } i.supportsFullScreen ? (e.nativeFS = !0, i.fullScreenEventName = i.prefix + "fullscreenchange" + e.ns, i.isFullScreen = function () {
                    switch (this.prefix) {
                        case "":
                            return document.fullScreen;
                        case "webkit":
                            return document.webkitIsFullScreen;
                        default:
                            return document[this.prefix + "FullScreen"]
                    }
                }, i.requestFullScreen = function (t) {
                    return "" === this.prefix ? t.requestFullScreen() : t[this.prefix + "RequestFullScreen"]()
                }, i.cancelFullScreen = function (t) {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
                }, e._u5 = i) : e._u5 = !1
            }
            e.st.fullscreen.buttonFS && (e._v5 = t('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(e._o1).on("click.rs", function () {
                e.isFullscreen ? e.exitFullscreen() : e.enterFullscreen()
            }))
        },
        enterFullscreen: function (e) {
            var i = this;
            if (i._u5) {
                if (!e) return i._b.on(i._u5.fullScreenEventName, function (t) {
                    i._u5.isFullScreen() ? i.enterFullscreen(!0) : i.exitFullscreen(!0)
                }), void i._u5.requestFullScreen(t("html")[0]);
                i._u5.requestFullScreen(t("html")[0])
            }
            if (!i._w5) {
                i._w5 = !0, i._b.on("keyup" + i.ns + "fullscreen", function (t) {
                    27 === t.keyCode && i.exitFullscreen()
                }), i._t5 && i._b2(), e = t(window), i._x5 = e.scrollTop(), i._y5 = e.scrollLeft(), i._z5 = t("html").attr("style"), i._a6 = t("body").attr("style"), i._b6 = i.slider.attr("style"), t("body, html").css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    padding: "0"
                }), i.slider.addClass("rsFullscreen");
                var s;
                for (s = 0; s < i.numSlides; s++) e = i.slides[s], e.isRendered = !1, e.bigImage && (e.isBig = !0, e.isMedLoaded = e.isLoaded, e.isMedLoading = e.isLoading, e.medImage = e.image, e.medIW = e.iW, e.medIH = e.iH, e.slideId = -99, e.bigImage !== e.medImage && (e.sizeType = "big"), e.isLoaded = e.isBigLoaded, e.isLoading = !1, e.image = e.bigImage, e.images[0] = e.bigImage, e.iW = e.bigIW, e.iH = e.bigIH, e.isAppended = e.contentAdded = !1, i._c6(e));
                i.isFullscreen = !0, i._w5 = !1, i.updateSliderSize(), i.ev.trigger("rsEnterFullscreen")
            }
        },
        exitFullscreen: function (e) {
            var i = this;
            if (i._u5) {
                if (!e) return void i._u5.cancelFullScreen(t("html")[0]);
                i._b.off(i._u5.fullScreenEventName)
            }
            if (!i._w5) {
                i._w5 = !0, i._b.off("keyup" + i.ns + "fullscreen"), i._t5 && i._b.off("keydown" + i.ns), t("html").attr("style", i._z5 || ""), t("body").attr("style", i._a6 || "");
                var s;
                for (s = 0; s < i.numSlides; s++) e = i.slides[s], e.isRendered = !1, e.bigImage && (e.isBig = !1, e.slideId = -99, e.isBigLoaded = e.isLoaded, e.isBigLoading = e.isLoading, e.bigImage = e.image, e.bigIW = e.iW, e.bigIH = e.iH, e.isLoaded = e.isMedLoaded, e.isLoading = !1, e.image = e.medImage, e.images[0] = e.medImage, e.iW = e.medIW, e.iH = e.medIH, e.isAppended = e.contentAdded = !1, i._c6(e, !0), e.bigImage !== e.medImage && (e.sizeType = "med"));
                i.isFullscreen = !1, (e = t(window)).scrollTop(i._x5), e.scrollLeft(i._y5), i._w5 = !1, i.slider.removeClass("rsFullscreen"), i.updateSliderSize(), setTimeout(function () {
                    i.updateSliderSize()
                }, 1), i.ev.trigger("rsExitFullscreen")
            }
        },
        _c6: function (e, i) {
            var s = e.isLoaded || e.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + e.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + e.image + '"></a>';
            e.content.hasClass("rsImg") ? e.content = t(s) : e.content.find(".rsImg").eq(0).replaceWith(s), e.isLoaded || e.isLoading || !e.holder || e.holder.html(e.content)
        }
    }), t.rsModules.fullscreen = t.rsProto._q5
}(jQuery),
function (t) {
    t.extend(t.rsProto, {
        _x4: function () {
            var e, i = this;
            i._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2e3
            }, !i.st.autoPlay && i.st.autoplay && (i.st.autoPlay = i.st.autoplay), i.st.autoPlay = t.extend({}, i._y4, i.st.autoPlay), i.st.autoPlay.enabled && (i.ev.on("rsBeforeParseNode", function (i, s, n) {
                s = t(s), (e = s.attr("data-rsDelay")) && (n.customDelay = parseInt(e, 10))
            }), i.ev.one("rsAfterInit", function () {
                i._z4()
            }), i.ev.on("rsBeforeDestroy", function () {
                i.stopAutoPlay(), i.slider.off("mouseenter mouseleave"), t(window).off("blur" + i.ns + " focus" + i.ns)
            }))
        },
        _z4: function () {
            var e = this;
            e.startAutoPlay(), e.ev.on("rsAfterContentSet", function (t, i) {
                e._l2 || e._r2 || !e._a5 || i !== e.currSlide || e._b5()
            }), e.ev.on("rsDragRelease", function () {
                e._a5 && e._c5 && (e._c5 = !1, e._b5())
            }), e.ev.on("rsAfterSlideChange", function () {
                e._a5 && e._c5 && (e._c5 = !1, e.currSlide.isLoaded && e._b5())
            }), e.ev.on("rsDragStart", function () {
                e._a5 && (e.st.autoPlay.stopAtAction ? e.stopAutoPlay() : (e._c5 = !0, e._d5()))
            }), e.ev.on("rsBeforeMove", function (t, i, s) {
                e._a5 && (s && e.st.autoPlay.stopAtAction ? e.stopAutoPlay() : (e._c5 = !0, e._d5()))
            }), e._e5 = !1, e.ev.on("rsVideoStop", function () {
                e._a5 && (e._e5 = !1, e._b5())
            }), e.ev.on("rsVideoPlay", function () {
                e._a5 && (e._c5 = !1, e._d5(), e._e5 = !0)
            }), t(window).on("blur" + e.ns, function () {
                e._a5 && (e._c5 = !0, e._d5())
            }).on("focus" + e.ns, function () {
                e._a5 && e._c5 && (e._c5 = !1, e._b5())
            }), e.st.autoPlay.pauseOnHover && (e._f5 = !1, e.slider.hover(function () {
                e._a5 && (e._c5 = !1, e._d5(), e._f5 = !0)
            }, function () {
                e._a5 && (e._f5 = !1, e._b5())
            }))
        },
        toggleAutoPlay: function () {
            this._a5 ? this.stopAutoPlay() : this.startAutoPlay()
        },
        startAutoPlay: function () {
            this._a5 = !0, this.currSlide.isLoaded && this._b5()
        },
        stopAutoPlay: function () {
            this._e5 = this._f5 = this._c5 = this._a5 = !1, this._d5()
        },
        _b5: function () {
            var t = this;
            t._f5 || t._e5 || (t._g5 = !0, t._h5 && clearTimeout(t._h5), t._h5 = setTimeout(function () {
                var e;
                t._z || t.st.loopRewind || (e = !0, t.st.loopRewind = !0), t.next(!0), e && (t.st.loopRewind = !1)
            }, t.currSlide.customDelay ? t.currSlide.customDelay : t.st.autoPlay.delay))
        },
        _d5: function () {
            this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null))
        }
    }), t.rsModules.autoplay = t.rsProto._x4
}(jQuery),
function (t) {
    t.extend(t.rsProto, {
        _z6: function () {
            var e = this;
            e._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="https://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="https://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            }, e.st.video = t.extend({}, e._a7, e.st.video), e.ev.on("rsBeforeSizeSet", function () {
                e._b7 && setTimeout(function () {
                    var t = (t = e._r1).hasClass("rsVideoContainer") ? t : t.find(".rsVideoContainer");
                    e._c7 && e._c7.css({
                        width: t.width(),
                        height: t.height()
                    })
                }, 32)
            });
            var i = e._a.mozilla;
            e.ev.on("rsAfterParseNode", function (s, n, r) {
                if (s = t(n), r.videoURL) {
                    e.st.video.disableCSS3inFF && i && (e._e = e._f = !1), n = t('<div class="rsVideoContainer"></div>');
                    var o = t('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    s.hasClass("rsImg") ? r.content = n.append(s).append(o) : r.content.find(".rsImg").wrap(n).after(o)
                }
            }), e.ev.on("rsAfterSlideChange", function () {
                e.stopVideo()
            })
        },
        toggleVideo: function () {
            return this._b7 ? this.stopVideo() : this.playVideo()
        },
        playVideo: function () {
            var e = this;
            if (!e._b7) {
                var i = e.currSlide;
                if (!i.videoURL) return !1;
                e._d7 = i;
                var s, n, r = e._e7 = i.content;
                return (i = i.videoURL).match(/youtu\.be/i) || i.match(/youtube\.com/i) ? (n = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (n = i.match(n)) && 11 == n[7].length && (s = n[7]), void 0 !== s && (e._c7 = e.st.video.youTubeCode.replace("%id%", s))) : i.match(/vimeo\.com/i) && (n = /(www\.)?vimeo.com\/(\d+)($|\/)/, (n = i.match(n)) && (s = n[2]), void 0 !== s && (e._c7 = e.st.video.vimeoCode.replace("%id%", s))), e.videoObj = t(e._c7), e.ev.trigger("rsOnCreateVideoElement", [i]), e.videoObj.length && (e._c7 = t('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), e._c7.find(".rsPreloader").after(e.videoObj), r = r.hasClass("rsVideoContainer") ? r : r.find(".rsVideoContainer"), e._c7.css({
                    width: r.width(),
                    height: r.height()
                }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function (t) {
                    return e.stopVideo(), t.preventDefault(), t.stopPropagation(), !1
                }), r.append(e._c7), e.isIPAD && r.addClass("rsIOSVideo"), e._f7(!1), setTimeout(function () {
                    e._c7.addClass("rsVideoActive")
                }, 10), e.ev.trigger("rsVideoPlay"), e._b7 = !0), !0
            }
            return !1
        },
        stopVideo: function () {
            var t = this;
            return !!t._b7 && (t.isIPAD && t.slider.find(".rsCloseVideoBtn").remove(), t._f7(!0), setTimeout(function () {
                t.ev.trigger("rsOnDestroyVideoElement", [t.videoObj]);
                var e = t._c7.find("iframe");
                if (e.length) try {
                    e.attr("src", "")
                } catch (t) {}
                t._c7.remove(), t._c7 = null
            }, 16), t.ev.trigger("rsVideoStop"), t._b7 = !1, !0)
        },
        _f7: function (t, e) {
            var i = [],
                s = this.st.video;
            if (s.autoHideArrows && (this._c2 && (i.push(this._c2, this._d2), this._e2 = !t), this._v5 && i.push(this._v5)), s.autoHideControlNav && this._k5 && i.push(this._k5), s.autoHideBlocks && this._d7.animBlocks && i.push(this._d7.animBlocks), s.autoHideCaption && this.globalCaption && i.push(this.globalCaption), this.slider[t ? "removeClass" : "addClass"]("rsVideoPlaying"), i.length)
                for (s = 0; s < i.length; s++) t ? i[s].removeClass("rsHidden") : i[s].addClass("rsHidden")
        }
    }), t.rsModules.video = t.rsProto._z6
}(jQuery),
function (t) {
    t.extend(t.rsProto, {
        _p4: function () {
            function e() {
                var t = s.currSlide;
                if (s.currSlide && s.currSlide.isLoaded && s._t4 !== t) {
                    if (0 < s._s4.length) {
                        for (i = 0; i < s._s4.length; i++) clearTimeout(s._s4[i]);
                        s._s4 = []
                    }
                    if (0 < s._r4.length) {
                        var e;
                        for (i = 0; i < s._r4.length; i++)(e = s._r4[i]) && (s._e ? (e.block.css(s._g + s._u1, "0s"), e.block.css(e.css)) : e.block.stop(!0).css(e.css), s._t4 = null, t.animBlocksDisplayed = !1);
                        s._r4 = []
                    }
                    t.animBlocks && (t.animBlocksDisplayed = !0, s._t4 = t, s._u4(t.animBlocks))
                }
            }
            var i, s = this;
            s._q4 = {
                fadeEffect: !0,
                moveEffect: "top",
                moveOffset: 20,
                speed: 400,
                easing: "easeOutSine",
                delay: 200
            }, s.st.block = t.extend({}, s._q4, s.st.block), s._r4 = [], s._s4 = [], s.ev.on("rsAfterInit", function () {
                e()
            }), s.ev.on("rsBeforeParseNode", function (e, i, s) {
                i = t(i), s.animBlocks = i.find(".rsABlock").css("display", "none"), s.animBlocks.length || (i.hasClass("rsABlock") ? s.animBlocks = i.css("display", "none") : s.animBlocks = !1)
            }), s.ev.on("rsAfterContentSet", function (t, i) {
                i.id === s.slides[s.currSlideId].id && setTimeout(function () {
                    e()
                }, s.st.fadeinLoadedSlide ? 300 : 0)
            }), s.ev.on("rsAfterSlideChange", function () {
                e()
            })
        },
        _v4: function (t, e) {
            setTimeout(function () {
                t.css(e)
            }, 6)
        },
        _u4: function (e) {
            var i, s, n, r, o, a, l, c = this;
            c._s4 = [], e.each(function (e) {
                i = t(this), s = {}, n = {}, r = null;
                var d = i.attr("data-move-offset");
                if (0 < (d = d ? parseInt(d, 10) : c.st.block.moveOffset) && ((a = i.data("move-effect")) ? "none" === (a = a.toLowerCase()) ? a = !1 : "left" !== a && "top" !== a && "bottom" !== a && "right" !== a && "none" === (a = c.st.block.moveEffect) && (a = !1) : a = c.st.block.moveEffect, a && "none" !== a)) {
                    var h;
                    h = "right" === a || "left" === a;
                    var u;
                    l = !1, c._e ? (u = 0, o = c._x1) : (h ? isNaN(parseInt(i.css("right"), 10)) ? o = "left" : (o = "right", l = !0) : isNaN(parseInt(i.css("bottom"), 10)) ? o = "top" : (o = "bottom", l = !0), o = "margin-" + o, l && (d = -d), c._e ? u = parseInt(i.css(o), 10) : void 0 === (u = i.data("rs-start-move-prop")) && (u = parseInt(i.css(o), 10), isNaN(u) && (u = 0), i.data("rs-start-move-prop", u))), n[o] = c._m4("top" === a || "left" === a ? u - d : u + d, h), s[o] = c._m4(u, h)
                }(d = i.attr("data-fade-effect")) ? "none" !== d.toLowerCase() && "false" !== d.toLowerCase() || (d = !1): d = c.st.block.fadeEffect, d && (n.opacity = 0, s.opacity = 1), (d || a) && (r = {}, r.hasFade = Boolean(d), Boolean(a) && (r.moveProp = o, r.hasMove = !0), r.speed = i.data("speed"), isNaN(r.speed) && (r.speed = c.st.block.speed), r.easing = i.data("easing"), r.easing || (r.easing = c.st.block.easing), r.css3Easing = t.rsCSS3Easing[r.easing], r.delay = i.data("delay"), isNaN(r.delay) && (r.delay = c.st.block.delay * e)), d = {}, c._e && (d[c._g + c._u1] = "0ms"), d.moveProp = s.moveProp, d.opacity = s.opacity, d.display = "none", c._r4.push({
                    block: i,
                    css: d
                }), c._v4(i, n), c._s4.push(setTimeout(function (t, e, i, s) {
                    return function () {
                        if (t.css("display", "block"), i) {
                            var n = {};
                            if (c._e) {
                                var r = "";
                                i.hasMove && (r += i.moveProp), i.hasFade && (i.hasMove && (r += ", "), r += "opacity"), n[c._g + c._t1] = r, n[c._g + c._u1] = i.speed + "ms", n[c._g + c._v1] = i.css3Easing, t.css(n), setTimeout(function () {
                                    t.css(e)
                                }, 24)
                            } else setTimeout(function () {
                                t.animate(e, i.speed, i.easing)
                            }, 16)
                        }
                        delete c._s4[s]
                    }
                }(i, s, r, e), 6 >= r.delay ? 12 : r.delay))
            })
        }
    }), t.rsModules.animatedBlocks = t.rsProto._p4
}(jQuery),
function (t) {
    t.extend(t.rsProto, {
        _w4: function () {
            var t = this;
            if (t.st.autoHeight) {
                var e, i, s, n = !0,
                    r = function (r) {
                        s = t.slides[t.currSlideId], (e = s.holder) && (i = e.height()) && void 0 !== i && i > (t.st.minAutoHeight || 30) && (t._c4 = i, t._e || !r ? t._e1.css("height", i) : t._e1.stop(!0, !0).animate({
                            height: i
                        }, t.st.transitionSpeed), t.ev.trigger("rsAutoHeightChange", i), n && (t._e && setTimeout(function () {
                            t._e1.css(t._g + "transition", "height " + t.st.transitionSpeed + "ms ease-in-out")
                        }, 16), n = !1))
                    };
                t.ev.on("rsMaybeSizeReady.rsAutoHeight", function (t, e) {
                    s === e && r()
                }), t.ev.on("rsAfterContentSet.rsAutoHeight", function (t, e) {
                    s === e && r()
                }), t.slider.addClass("rsAutoHeight"), t.ev.one("rsAfterInit", function () {
                    setTimeout(function () {
                        r(!1), setTimeout(function () {
                            t.slider.append('<div style="clear:both; float: none;"></div>')
                        }, 16)
                    }, 16)
                }), t.ev.on("rsBeforeAnimStart", function () {
                    r(!0)
                }), t.ev.on("rsBeforeSizeSet", function () {
                    setTimeout(function () {
                        r(!1)
                    }, 16)
                })
            }
        }
    }), t.rsModules.autoHeight = t.rsProto._w4
}(jQuery),
function (t) {
    t.extend(t.rsProto, {
        _d6: function () {
            var e = this;
            e.st.globalCaption && (e.ev.on("rsAfterInit", function () {
                e.globalCaption = t('<div class="rsGCaption"></div>').appendTo(e.st.globalCaptionInside ? e._e1 : e.slider), e.globalCaption.html(e.currSlide.caption || "")
            }), e.ev.on("rsBeforeAnimStart", function () {
                e.globalCaption.html(e.currSlide.caption || "")
            }))
        }
    }), t.rsModules.globalCaption = t.rsProto._d6
}(jQuery),
function (t) {
    t.rsProto._o4 = function () {
        var t, e = this;
        e.st.addActiveClass && e.ev.on("rsOnUpdateNav", function () {
            t && clearTimeout(t), t = setTimeout(function () {
                e._g4 && e._g4.removeClass("rsActiveSlide"), e._r1 && e._r1.addClass("rsActiveSlide"), t = null
            }, 50)
        })
    }, t.rsModules.activeClass = t.rsProto._o4
}(jQuery),
function (t) {
    t.extend(t.rsProto, {
        _o5: function () {
            var e, i, s, n = this;
            if (n._p5 = {
                    enabled: !1,
                    change: !1,
                    prefix: ""
                }, n.st.deeplinking = t.extend({}, n._p5, n.st.deeplinking), n.st.deeplinking.enabled) {
                var r = n.st.deeplinking.change,
                    o = n.st.deeplinking.prefix,
                    a = "#" + o,
                    l = function () {
                        var t = window.location.hash;
                        return t && 0 < t.indexOf(o) && 0 <= (t = parseInt(t.substring(a.length), 10)) ? t - 1 : -1
                    },
                    c = l(); - 1 !== c && (n.st.startSlideId = c), r && (t(window).on("hashchange" + n.ns, function (t) {
                    e || 0 > (t = l()) || (t > n.numSlides - 1 && (t = n.numSlides - 1), n.goTo(t))
                }), n.ev.on("rsBeforeAnimStart", function () {
                    i && clearTimeout(i), s && clearTimeout(s)
                }), n.ev.on("rsAfterSlideChange", function () {
                    i && clearTimeout(i), s && clearTimeout(s), s = setTimeout(function () {
                        e = !0, window.location.replace(("" + window.location).split("#")[0] + a + (n.currSlideId + 1)), i = setTimeout(function () {
                            e = !1, i = null
                        }, 60)
                    }, 400)
                })), n.ev.on("rsBeforeDestroy", function () {
                    i = s = null, r && t(window).off("hashchange" + n.ns)
                })
            }
        }
    }), t.rsModules.deeplinking = t.rsProto._o5
}(jQuery),
function (t, e, i) {
    function s(t) {
        return "#" + (t = t || location.href).replace(/^[^#]*#?(.*)$/, "$1")
    }
    var n, r = document,
        o = t.event.special,
        a = r.documentMode,
        l = "onhashchange" in e && (a === i || 7 < a);
    t.fn.hashchange = function (t) {
        return t ? this.bind("hashchange", t) : this.trigger("hashchange")
    }, t.fn.hashchange.delay = 50, o.hashchange = t.extend(o.hashchange, {
        setup: function () {
            if (l) return !1;
            t(n.start)
        },
        teardown: function () {
            if (l) return !1;
            t(n.stop)
        }
    }), n = function () {
        function n() {
            var i = s(),
                r = u(c);
            i !== c ? (h(c = i, r), t(e).trigger("hashchange")) : r !== c && (location.href = location.href.replace(/#.*/, "") + r), o = setTimeout(n, t.fn.hashchange.delay)
        }
        var o, a = {},
            c = s(),
            d = function (t) {
                return t
            },
            h = d,
            u = d;
        return a.start = function () {
            o || n()
        }, a.stop = function () {
            o && clearTimeout(o), o = i
        }, e.attachEvent && !e.addEventListener && !l && function () {
            var e, i;
            a.start = function () {
                e || (i = (i = t.fn.hashchange.src) && i + s(), e = t('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                    i || h(s()), n()
                }).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, r.onpropertychange = function () {
                    try {
                        "title" === event.propertyName && (e.document.title = r.title)
                    } catch (t) {}
                })
            }, a.stop = d, u = function () {
                return s(e.location.href)
            }, h = function (i, s) {
                var n = e.document,
                    o = t.fn.hashchange.domain;
                i !== s && (n.title = r.title, n.open(), o && n.write('<script>document.domain="' + o + '"</script>'), n.close(), e.location.hash = i)
            }
        }(), a
    }()
}(jQuery, this),
function (t) {
    t.rsProto._g7 = function () {
        var e = this;
        e.st.visibleNearby && e.st.visibleNearby.enabled && (e._h7 = {
            enabled: !0,
            centerArea: .6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: .8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, e.st.visibleNearby = t.extend({}, e._h7, e.st.visibleNearby), e.ev.one("rsAfterPropsSetup", function () {
            e._i7 = e._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent(), e.st.visibleNearby.hiddenOverflow || e._i7.css("overflow", "visible"), e._o1 = e.st.controlsInside ? e._i7 : e.slider
        }), e.ev.on("rsAfterSizePropSet", function () {
            var t, i = e.st.visibleNearby;
            t = i.breakpoint && e.width < i.breakpoint ? i.breakpointCenterArea : i.centerArea, e._h ? (e._b4 *= t, e._i7.css({
                height: e._c4,
                width: e._b4 / t
            }), e._d = e._b4 * (1 - t) / 2 / t) : (e._c4 *= t, e._i7.css({
                height: e._c4 / t,
                width: e._b4
            }), e._d = e._c4 * (1 - t) / 2 / t), i.navigateByCenterClick || (e._q = e._h ? e._b4 : e._c4), i.center && e._e1.css("margin-" + (e._h ? "left" : "top"), e._d)
        }))
    }, t.rsModules.visibleNearby = t.rsProto._g7
}(jQuery),
function (t) {
    if ("function" == typeof define && define.amd) define(t);
    else if ("object" == typeof exports) module.exports = t();
    else {
        var e = window.Cookies,
            i = window.Cookies = t();
        i.noConflict = function () {
            return window.Cookies = e, i
        }
    }
}(function () {
    function t() {
        for (var t = 0, e = {}; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i) e[s] = i[s]
        }
        return e
    }

    function e(i) {
        function s(e, n, r) {
            var o;
            if (arguments.length > 1) {
                if ("number" == typeof (r = t({
                        path: "/"
                    }, s.defaults, r)).expires) {
                    var a = new Date;
                    a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires), r.expires = a
                }
                try {
                    o = JSON.stringify(n), /^[\{\[]/.test(o) && (n = o)
                } catch (t) {}
                return n = encodeURIComponent(String(n)), n = n.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape), document.cookie = [e, "=", n, r.expires && "; expires=" + r.expires.toUTCString(), r.path && "; path=" + r.path, r.domain && "; domain=" + r.domain, r.secure ? "; secure" : ""].join("")
            }
            e || (o = {});
            for (var l = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, d = 0; d < l.length; d++) {
                var h = l[d].split("="),
                    u = h[0].replace(c, decodeURIComponent),
                    p = h.slice(1).join("=");
                '"' === p.charAt(0) && (p = p.slice(1, -1));
                try {
                    if (p = i && i(p, u) || p.replace(c, decodeURIComponent), this.json) try {
                        p = JSON.parse(p)
                    } catch (t) {}
                    if (e === u) {
                        o = p;
                        break
                    }
                    e || (o[u] = p)
                } catch (t) {}
            }
            return o
        }
        return s.get = s.set = s, s.getJSON = function () {
            return s.apply({
                json: !0
            }, [].slice.call(arguments))
        }, s.defaults = {}, s.remove = function (e, i) {
            s(e, "", t(i, {
                expires: -1
            }))
        }, s.withConverter = e, s
    }
    return e()
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (t) {
    var e, i, s, n, r, o, a = function () {},
        l = !!window.jQuery,
        c = t(window),
        d = function (t, i) {
            e.ev.on("mfp" + t + ".mfp", i)
        },
        h = function (e, i, s, n) {
            var r = document.createElement("div");
            return r.className = "mfp-" + e, s && (r.innerHTML = s), n ? i && i.appendChild(r) : (r = t(r), i && r.appendTo(i)), r
        },
        u = function (i, s) {
            e.ev.triggerHandler("mfp" + i, s), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(s) ? s : [s]))
        },
        p = function (i) {
            return i === o && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), o = i), e.currTemplate.closeBtn
        },
        f = function () {
            t.magnificPopup.instance || ((e = new a).init(), t.magnificPopup.instance = e)
        },
        m = function () {
            var t = document.createElement("p").style,
                e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length;)
                if (e.pop() + "Transition" in t) return !0;
            return !1
        };
    a.prototype = {
        constructor: a,
        init: function () {
            var i = navigator.appVersion;
            e.isIE7 = -1 !== i.indexOf("MSIE 7."), e.isIE8 = -1 !== i.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = m(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), s = t(document), e.popupsCache = {}
        },
        open: function (i) {
            var n;
            if (!1 === i.isObj) {
                e.items = i.items.toArray(), e.index = 0;
                var o, a = i.items;
                for (n = 0; n < a.length; n++)
                    if ((o = a[n]).parsed && (o = o.el[0]), o === i.el[0]) {
                        e.index = n;
                        break
                    }
            } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0; {
                if (!e.isOpen) {
                    e.types = [], r = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = s, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = h("bg").on("click.mfp", function () {
                        e.close()
                    }), e.wrap = h("wrap").attr("tabindex", -1).on("click.mfp", function (t) {
                        e._checkIfClose(t.target) && e.close()
                    }), e.container = h("container", e.wrap)), e.contentContainer = h("content"), e.st.preloader && (e.preloader = h("preloader", e.container, e.st.tLoading));
                    var l = t.magnificPopup.modules;
                    for (n = 0; n < l.length; n++) {
                        var f = l[n];
                        f = f.charAt(0).toUpperCase() + f.slice(1), e["init" + f].call(e)
                    }
                    u("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (d("MarkupParse", function (t, e, i, s) {
                        i.close_replaceWith = p(s.type)
                    }), r += " mfp-close-btn-in") : e.wrap.append(p())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                        overflow: e.st.overflowY,
                        overflowX: "hidden",
                        overflowY: e.st.overflowY
                    }) : e.wrap.css({
                        top: c.scrollTop(),
                        position: "absolute"
                    }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                        height: s.height(),
                        position: "absolute"
                    }), e.st.enableEscapeKey && s.on("keyup.mfp", function (t) {
                        27 === t.keyCode && e.close()
                    }), c.on("resize.mfp", function () {
                        e.updateSize()
                    }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
                    var m = e.wH = c.height(),
                        g = {};
                    if (e.fixedContentPos && e._hasScrollBar(m)) {
                        var _ = e._getScrollbarSize();
                        _ && (g.marginRight = _)
                    }
                    e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : g.overflow = "hidden");
                    var v = e.st.mainClass;
                    return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), u("BuildControls"), t("html").css(g), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function () {
                        e.content ? (e._addClassToMFP("mfp-ready"), e._setFocus()) : e.bgOverlay.addClass("mfp-ready"), s.on("focusin.mfp", e._onFocusIn)
                    }, 16), e.isOpen = !0, e.updateSize(m), u("Open"), i
                }
                e.updateItemHTML()
            }
        },
        close: function () {
            e.isOpen && (u("BeforeClose"), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP("mfp-removing"), setTimeout(function () {
                e._close()
            }, e.st.removalDelay)) : e._close())
        },
        _close: function () {
            u("Close");
            var i = "mfp-removing mfp-ready ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                var n = {
                    marginRight: ""
                };
                e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n)
            }
            s.off("keyup.mfp focusin.mfp"), e.ev.off(".mfp"), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, u("AfterClose")
        },
        updateSize: function (t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    s = window.innerHeight * i;
                e.wrap.css("height", s), e.wH = s
            } else e.wH = t || c.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), u("Resize")
        },
        updateItemHTML: function () {
            var i = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
            var s = i.type;
            if (u("BeforeChange", [e.currItem ? e.currItem.type : "", s]), e.currItem = i, !e.currTemplate[s]) {
                var r = !!e.st[s] && e.st[s].markup;
                u("FirstMarkupParse", r), e.currTemplate[s] = !r || t(r)
            }
            n && n !== i.type && e.container.removeClass("mfp-" + n + "-holder");
            var o = e["get" + s.charAt(0).toUpperCase() + s.slice(1)](i, e.currTemplate[s]);
            e.appendContent(o, s), i.preloaded = !0, u("Change", i), n = i.type, e.container.prepend(e.contentContainer), u("AfterChange")
        },
        appendContent: function (t, i) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(p()) : e.content = t : e.content = "", u("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
        },
        parseEl: function (i) {
            var s, n = e.items[i];
            if (n.tagName ? n = {
                    el: t(n)
                } : (s = n.type, n = {
                    data: n,
                    src: n.src
                }), n.el) {
                for (var r = e.types, o = 0; o < r.length; o++)
                    if (n.el.hasClass("mfp-" + r[o])) {
                        s = r[o];
                        break
                    } n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
            }
            return n.type = s || e.st.type || "inline", n.index = i, n.parsed = !0, e.items[i] = n, u("ElementParse", n), e.items[i]
        },
        addGroup: function (t, i) {
            var s = function (s) {
                s.mfpEl = this, e._openClick(s, t, i)
            };
            i || (i = {});
            var n = "click.magnificPopup";
            i.mainEl = t, i.items ? (i.isObj = !0, t.off(n).on(n, s)) : (i.isObj = !1, i.delegate ? t.off(n).on(n, i.delegate, s) : (i.items = t, t.off(n).on(n, s)))
        },
        _openClick: function (i, s, n) {
            if ((void 0 !== n.midClick ? n.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var r = void 0 !== n.disableOn ? n.disableOn : t.magnificPopup.defaults.disableOn;
                if (r)
                    if (t.isFunction(r)) {
                        if (!r.call(e)) return !0
                    } else if (c.width() < r) return !0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), n.el = t(i.mfpEl), n.delegate && (n.items = s.find(n.delegate)), e.open(n)
            }
        },
        updateStatus: function (t, s) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i), s || "loading" !== t || (s = e.st.tLoading);
                var n = {
                    status: t,
                    text: s
                };
                u("UpdateStatus", n), t = n.status, s = n.text, e.preloader.html(s), e.preloader.find("a").on("click", function (t) {
                    t.stopImmediatePropagation()
                }), e.container.addClass("mfp-s-" + t), i = t
            }
        },
        _checkIfClose: function (i) {
            if (!t(i).hasClass("mfp-prevent-close")) {
                var s = e.st.closeOnContentClick,
                    n = e.st.closeOnBgClick;
                if (s && n) return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) {
                    if (s) return !0
                } else if (n && t.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (t) {
            e.bgOverlay.addClass(t), e.wrap.addClass(t)
        },
        _removeClassFromMFP: function (t) {
            this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
        },
        _hasScrollBar: function (t) {
            return (e.isIE7 ? s.height() : document.body.scrollHeight) > (t || c.height())
        },
        _setFocus: function () {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        },
        _onFocusIn: function (i) {
            if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target)) return e._setFocus(), !1
        },
        _parseMarkup: function (e, i, s) {
            var n;
            s.data && (i = t.extend(s.data, i)), u("MarkupParse", [e, i, s]), t.each(i, function (t, i) {
                if (void 0 === i || !1 === i) return !0;
                if ((n = t.split("_")).length > 1) {
                    var s = e.find(".mfp-" + n[0]);
                    if (s.length > 0) {
                        var r = n[1];
                        "replaceWith" === r ? s[0] !== i[0] && s.replaceWith(i) : "img" === r ? s.is("img") ? s.attr("src", i) : s.replaceWith('<img src="' + i + '" class="' + s.attr("class") + '" />') : s.attr(n[1], i)
                    }
                } else e.find(".mfp-" + t).html(i)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    }, t.magnificPopup = {
        instance: null,
        proto: a.prototype,
        modules: [],
        open: function (e, i) {
            return f(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e)
        },
        close: function () {
            return t.magnificPopup.instance && t.magnificPopup.instance.close()
        },
        registerModule: function (e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, t.fn.magnificPopup = function (i) {
        f();
        var s = t(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var n, r = l ? s.data("magnificPopup") : s[0].magnificPopup,
                    o = parseInt(arguments[1], 10) || 0;
                r.items ? n = r.items[o] : (n = s, r.delegate && (n = n.find(r.delegate)), n = n.eq(o)), e._openClick({
                    mfpEl: n
                }, s, r)
            } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else i = t.extend(!0, {}, i), l ? s.data("magnificPopup", i) : s[0].magnificPopup = i, e.addGroup(s, i);
        return s
    };
    var g, _, v, y = function () {
        v && (_.after(v.addClass(g)).detach(), v = null)
    };
    t.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                e.types.push("inline"), d("Close.inline", function () {
                    y()
                })
            },
            getInline: function (i, s) {
                if (y(), i.src) {
                    var n = e.st.inline,
                        r = t(i.src);
                    if (r.length) {
                        var o = r[0].parentNode;
                        o && o.tagName && (_ || (g = n.hiddenClass, _ = h(g), g = "mfp-" + g), v = r.after(_).detach().removeClass(g)), e.updateStatus("ready")
                    } else e.updateStatus("error", n.tNotFound), r = t("<div>");
                    return i.inlineElement = r, r
                }
                return e.updateStatus("ready"), e._parseMarkup(s, {}, i), s
            }
        }
    });
    var w, b = function () {
            w && t(document.body).removeClass(w)
        },
        S = function () {
            b(), e.req && e.req.abort()
        };
    t.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                e.types.push("ajax"), w = e.st.ajax.cursor, d("Close.ajax", S), d("BeforeChange.ajax", S)
            },
            getAjax: function (i) {
                w && t(document.body).addClass(w), e.updateStatus("loading");
                var s = t.extend({
                    url: i.src,
                    success: function (s, n, r) {
                        var o = {
                            data: s,
                            xhr: r
                        };
                        u("ParseAjax", o), e.appendContent(t(o.data), "ajax"), i.finished = !0, b(), e._setFocus(), setTimeout(function () {
                            e.wrap.addClass("mfp-ready")
                        }, 16), e.updateStatus("ready"), u("AjaxContentAdded")
                    },
                    error: function () {
                        b(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(s), ""
            }
        }
    });
    var C, x = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var s = e.st.image.titleSrc;
        if (s) {
            if (t.isFunction(s)) return s.call(e, i);
            if (i.el) return i.el.attr(s) || ""
        }
        return ""
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var i = e.st.image,
                    s = ".image";
                e.types.push("image"), d("Open" + s, function () {
                    "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                }), d("Close" + s, function () {
                    i.cursor && t(document.body).removeClass(i.cursor), c.off("resize.mfp")
                }), d("Resize" + s, e.resizeImage), e.isLowIE && d("AfterChange", e.resizeImage)
            },
            resizeImage: function () {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                }
            },
            _onImageHasSize: function (t) {
                t.img && (t.hasSize = !0, C && clearInterval(C), t.isCheckingImgSize = !1, u("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
            },
            findImageSize: function (t) {
                var i = 0,
                    s = t.img[0],
                    n = function (r) {
                        C && clearInterval(C), C = setInterval(function () {
                            s.naturalWidth > 0 ? e._onImageHasSize(t) : (i > 200 && clearInterval(C), 3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500))
                        }, r)
                    };
                n(1)
            },
            getImage: function (i, s) {
                var n = 0,
                    r = function () {
                        i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, u("ImageLoadComplete")) : ++n < 200 ? setTimeout(r, 100) : o())
                    },
                    o = function () {
                        i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                    },
                    a = e.st.image,
                    l = s.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", r).on("error.mfploader", o), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return e._parseMarkup(s, {
                    title: x(i),
                    img_replaceWith: i.img
                }, i), e.resizeImage(), i.hasSize ? (C && clearInterval(C), i.loadError ? (s.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (s.removeClass("mfp-loading"), e.updateStatus("ready")), s) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, s.addClass("mfp-loading"), e.findImageSize(i)), s)
            }
        }
    });
    var T, I = function () {
        return void 0 === T && (T = void 0 !== document.createElement("p").style.MozTransform), T
    };
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (t) {
                return t.is("img") ? t : t.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var t, i = e.st.zoom,
                    s = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var n, r, o = i.duration,
                        a = function (t) {
                            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                s = "all " + i.duration / 1e3 + "s " + i.easing,
                                n = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return n["-webkit-" + r] = n["-moz-" + r] = n["-o-" + r] = n[r] = s, e.css(n), e
                        },
                        l = function () {
                            e.content.css("visibility", "visible")
                        };
                    d("BuildControls" + s, function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(n), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void l();
                            (r = a(t)).css(e._getOffset()), e.wrap.append(r), n = setTimeout(function () {
                                r.css(e._getOffset(!0)), n = setTimeout(function () {
                                    l(), setTimeout(function () {
                                        r.remove(), t = r = null, u("ZoomAnimationEnded")
                                    }, 16)
                                }, o)
                            }, 16)
                        }
                    }), d("BeforeClose" + s, function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(n), e.st.removalDelay = o, !t) {
                                if (!(t = e._getItemToZoom())) return;
                                r = a(t)
                            }
                            r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout(function () {
                                r.css(e._getOffset())
                            }, 16)
                        }
                    }), d("Close" + s, function () {
                        e._allowZoom() && (l(), r && r.remove(), t = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === e.currItem.type
            },
            _getItemToZoom: function () {
                return !!e.currItem.hasSize && e.currItem.img
            },
            _getOffset: function (i) {
                var s, n = (s = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                    r = parseInt(s.css("padding-top"), 10),
                    o = parseInt(s.css("padding-bottom"), 10);
                n.top -= t(window).scrollTop() - r;
                var a = {
                    width: s.width(),
                    height: (l ? s.innerHeight() : s[0].offsetHeight) - o - r
                };
                return I() ? a["-moz-transform"] = a.transform = "translate(" + n.left + "px," + n.top + "px)" : (a.left = n.left, a.top = n.top), a
            }
        }
    });
    var A = function (t) {
        if (e.currTemplate.iframe) {
            var i = e.currTemplate.iframe.find("iframe");
            i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
        }
    };
    t.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                e.types.push("iframe"), d("BeforeChange", function (t, e, i) {
                    e !== i && ("iframe" === e ? A() : "iframe" === i && A(!0))
                }), d("Close.iframe", function () {
                    A()
                })
            },
            getIframe: function (i, s) {
                var n = i.src,
                    r = e.st.iframe;
                t.each(r.patterns, function () {
                    if (n.indexOf(this.index) > -1) return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1
                });
                var o = {};
                return r.srcAction && (o[r.srcAction] = n), e._parseMarkup(s, o, i), e.updateStatus("ready"), s
            }
        }
    });
    var k = function (t) {
            var i = e.items.length;
            return t > i - 1 ? t - i : t < 0 ? i + t : t
        },
        E = function (t, e, i) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
        };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var i = e.st.gallery,
                    n = ".mfp-gallery",
                    o = Boolean(t.fn.mfpFastClick);
                if (e.direction = !0, !i || !i.enabled) return !1;
                r += " mfp-gallery", d("Open" + n, function () {
                    i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function () {
                        if (e.items.length > 1) return e.next(), !1
                    }), s.on("keydown" + n, function (t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                    })
                }), d("UpdateStatus" + n, function (t, i) {
                    i.text && (i.text = E(i.text, e.currItem.index, e.items.length))
                }), d("MarkupParse" + n, function (t, s, n, r) {
                    var o = e.items.length;
                    n.counter = o > 1 ? E(i.tCounter, r.index, o) : ""
                }), d("BuildControls" + n, function () {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var s = i.arrowMarkup,
                            n = e.arrowLeft = t(s.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                            r = e.arrowRight = t(s.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close"),
                            a = o ? "mfpFastClick" : "click";
                        n[a](function () {
                            e.prev()
                        }), r[a](function () {
                            e.next()
                        }), e.isIE7 && (h("b", n[0], !1, !0), h("a", n[0], !1, !0), h("b", r[0], !1, !0), h("a", r[0], !1, !0)), e.container.append(n.add(r))
                    }
                }), d("Change" + n, function () {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
                        e.preloadNearbyImages(), e._preloadTimeout = null
                    }, 16)
                }), d("Close" + n, function () {
                    s.off(n), e.wrap.off("click" + n), e.arrowLeft && o && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
                })
            },
            next: function () {
                e.direction = !0, e.index = k(e.index + 1), e.updateItemHTML()
            },
            prev: function () {
                e.direction = !1, e.index = k(e.index - 1), e.updateItemHTML()
            },
            goTo: function (t) {
                e.direction = t >= e.index, e.index = t, e.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var t, i = e.st.gallery.preload,
                    s = Math.min(i[0], e.items.length),
                    n = Math.min(i[1], e.items.length);
                for (t = 1; t <= (e.direction ? n : s); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? s : n); t++) e._preloadItem(e.index - t)
            },
            _preloadItem: function (i) {
                if (i = k(i), !e.items[i].preloaded) {
                    var s = e.items[i];
                    s.parsed || (s = e.parseEl(i)), u("LazyLoad", s), "image" === s.type && (s.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
                        s.hasSize = !0
                    }).on("error.mfploader", function () {
                        s.hasSize = !0, s.loadError = !0, u("LazyLoadError", s)
                    }).attr("src", s.src)), s.preloaded = !0
                }
            }
        }
    });
    t.magnificPopup.registerModule("retina", {
            options: {
                replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, function (t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        (i = isNaN(i) ? i() : i) > 1 && (d("ImageHasSize.retina", function (t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), d("ElementParse.retina", function (e, s) {
                            s.src = t.replaceSrc(s, i)
                        }))
                    }
                }
            }
        }),
        function () {
            var e = "ontouchstart" in window,
                i = function () {
                    c.off("touchmove" + s + " touchend" + s)
                },
                s = ".mfpFastClick";
            t.fn.mfpFastClick = function (n) {
                return t(this).each(function () {
                    var r, o = t(this);
                    if (e) {
                        var a, l, d, h, u, p;
                        o.on("touchstart" + s, function (t) {
                            h = !1, p = 1, u = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], l = u.clientX, d = u.clientY, c.on("touchmove" + s, function (t) {
                                u = t.originalEvent ? t.originalEvent.touches : t.touches, p = u.length, u = u[0], (Math.abs(u.clientX - l) > 10 || Math.abs(u.clientY - d) > 10) && (h = !0, i())
                            }).on("touchend" + s, function (t) {
                                i(), h || p > 1 || (r = !0, t.preventDefault(), clearTimeout(a), a = setTimeout(function () {
                                    r = !1
                                }, 1e3), n())
                            })
                        })
                    }
                    o.on("click" + s, function () {
                        r || n()
                    })
                })
            }, t.fn.destroyMfpFastClick = function () {
                t(this).off("touchstart" + s + " click" + s), e && c.off("touchmove" + s + " touchend" + s)
            }
        }(), f()
}),
function (t, e, i, s) {
    function n(e, i) {
        this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, u), this.state = t.extend({}, p), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function (t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(n.Pipe, t.proxy(function (e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function r(t) {
        if (t.touches !== s) return {
            x: t.touches[0].pageX,
            y: t.touches[0].pageY
        };
        if (t.touches === s) {
            if (t.pageX !== s) return {
                x: t.pageX,
                y: t.pageY
            };
            if (t.pageX === s) return {
                x: t.clientX,
                y: t.clientY
            }
        }
    }

    function o(t) {
        var e, s, n = i.createElement("div"),
            r = t;
        for (e in r)
            if (s = r[e], void 0 !== n.style[s]) return n = null, [s, e];
        return [!1]
    }

    function a() {
        return o(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function l() {
        return o(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function c() {
        return o(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function d() {
        return "ontouchstart" in e || !!navigator.msMaxTouchPoints
    }

    function h() {
        return e.navigator.msPointerEnabled
    }
    var u, p, f;
    u = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, p = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, f = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, n.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, n.Plugins = {}, n.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var t = this._clones;
            (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var t, e, i = this._clones,
                s = this._items,
                n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
            for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var t, e, i, s = this.settings.rtl ? 1 : -1,
                n = (this.width() / this.settings.items).toFixed(3),
                r = 0;
            for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, r += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(r)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var e, i, s = (this.width() / this.settings.items).toFixed(3),
                n = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(n), n = {
                    width: this.settings.autoWidth ? "auto" : s - this.settings.margin
                }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function (t) {
                    return t > 1
                }).length > 0)
                for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
            else this.$stage.children().css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current && this.reset(this.$stage.children().index(t.current))
        }
    }, {
        filter: ["position"],
        run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                r = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + r,
                a = o + this.width() * n,
                l = [];
            for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + r * n, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], n.prototype.initialize = function () {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) {
            var e, i, n;
            if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, n.prototype.setup = function () {
        var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            n = null;
        i ? (t.each(i, function (t) {
            e >= t && t > s && (s = Number(t))
        }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function (t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, n.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, n.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, n.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
                return this[t]
            }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}
    }, n.prototype.width = function (t) {
        switch (t = t || n.Width.Default) {
            case n.Width.Inner:
            case n.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, n.prototype.refresh = function () {
        if (0 === this._items.length) return !1;
        (new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, n.prototype.eventsCall = function () {
        this.e._onDragStart = t.proxy(function (t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function (t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function (t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function (t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function (t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function (t) {
            this.preventClick(t)
        }, this)
    }, n.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, n.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
    }, n.prototype.eventsRouter = function (t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, n.prototype.internalEvents = function () {
        var i = (d(), h());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function (t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function () {
            return !1
        }), this.$stage.get(0).onselectstart = function () {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function (t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, n.prototype.onDragStart = function (s) {
        var n, o, a, l;
        if (3 === (n = s.originalEvent || s || e.event).which || this.state.isTouch) return !1;
        if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, o = r(n).x, a = r(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = o - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = o - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function (t) {
            this.eventsRouter(t)
        }, this))
    }, n.prototype.onDragMove = function (t) {
        var i, n, o, a, l, c;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = r(i).x, o = r(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = o - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), c = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + c), l + c)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, n.prototype.onDragEnd = function (e) {
        var s, n;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, (Math.abs(this.drag.distance) > 3 || s > 300) && this.removeClick(this.drag.targetEl), n = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(n), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(n) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
    }, n.prototype.removeClick = function (i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function () {
            t(i).off("click.preventClick")
        }, 300)
    }, n.prototype.preventClick = function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, n.prototype.getTransformProperty = function () {
        var t;
        return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), !0 !== (16 === t.length) ? t[4] : t[12]
    }, n.prototype.closest = function (e) {
        var i = -1,
            s = this.width(),
            n = this.coordinates();
        return this.settings.freeDrag || t.each(n, t.proxy(function (t, r) {
            return e > r - 30 && r + 30 > e ? i = t : this.op(e, "<", r) && this.op(e, ">", n[t + 1] || r - s) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", n[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", n[this.maximum()]) && (i = e = this.maximum())), i
    }, n.prototype.animate = function (e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: e + "px"
        }) : this.$stage.animate({
            left: e
        }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function () {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, n.prototype.current = function (t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, n.prototype.invalidate = function (t) {
        this._invalidated[t] = !0
    }, n.prototype.reset = function (t) {
        (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, n.prototype.normalize = function (e, i) {
        var n = i ? this._items.length : this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
    }, n.prototype.relative = function (t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, n.prototype.maximum = function (t) {
        var e, i, s, n = 0,
            r = this.settings;
        if (t) return this._items.length - 1;
        if (!r.loop && r.center) e = this._items.length - 1;
        else if (r.loop || r.center)
            if (r.loop || r.center) e = this._items.length + r.items;
            else {
                if (!r.autoWidth && !r.merge) throw "Can not detect maximum absolute position.";
                for (revert = r.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                    (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
            }
        else e = this._items.length - r.items;
        return e
    }, n.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, n.prototype.items = function (t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, n.prototype.mergers = function (t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, n.prototype.clones = function (e) {
        var i = this._clones.length / 2,
            n = i + this._items.length,
            r = function (t) {
                return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2
            };
        return e === s ? t.map(this._clones, function (t, e) {
            return r(e)
        }) : t.map(this._clones, function (t, i) {
            return t === e ? r(i) : null
        })
    }, n.prototype.speed = function (t) {
        return t !== s && (this._speed = t), this._speed
    }, n.prototype.coordinates = function (e) {
        var i = null;
        return e === s ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
    }, n.prototype.duration = function (t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, n.prototype.to = function (i, s) {
        if (this.settings.loop) {
            var n = i - this.relative(this.current()),
                r = this.current(),
                o = this.current(),
                a = this.current() + n,
                l = 0 > o - a,
                c = this._clones.length + this._items.length;
            a < this.settings.items && !1 === l ? (r = o + this._items.length, this.reset(r)) : a >= c - this.settings.items && !0 === l && (r = o - this._items.length, this.reset(r)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function () {
                this.speed(this.duration(this.current(), r + n, s)), this.current(r + n), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
    }, n.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, n.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, n.prototype.transitionEnd = function (t) {
        return (t === s || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
    }, n.prototype.viewport = function () {
        var s;
        if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) s = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            s = i.documentElement.clientWidth
        }
        return s
    }, n.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, n.prototype.add = function (t, e) {
        e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
            content: t,
            position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, n.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, n.prototype.addTriggerableEvents = function () {
        var e = t.proxy(function (e, i) {
            return t.proxy(function (t) {
                t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        t.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, t.proxy(function (t, i) {
            this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
    }, n.prototype.watchVisibility = function () {
        function i(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }
        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(function () {
            i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }, this), 500))
    }, n.prototype.preloadAutoWidthImages = function (e) {
        var i, s, n, r;
        i = 0, s = this, e.each(function (o, a) {
            n = t(a), (r = new Image).onload = function () {
                i++, n.attr("src", r.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize())
            }, r.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")
        })
    }, n.prototype.destroy = function () {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var s in this._plugins) this._plugins[s].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, n.prototype.op = function (t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? t > i : i > t;
            case ">":
                return s ? i > t : t > i;
            case ">=":
                return s ? i >= t : t >= i;
            case "<=":
                return s ? t >= i : i >= t
        }
    }, n.prototype.on = function (t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, n.prototype.off = function (t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, n.prototype.trigger = function (e, i, s) {
        var n = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            r = t.camelCase(t.grep(["on", e, s], function (t) {
                return t
            }).join("-").toLowerCase()),
            o = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, n, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(o)
        }), this.$element.trigger(o), this.settings && "function" == typeof this.settings[r] && this.settings[r].apply(this, o)), o
    }, n.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, n.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, n.prototype.browserSupport = function () {
        if (this.support3d = c(), this.support3d) {
            this.transformVendor = l();
            var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function (e) {
        return this.each(function () {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e))
        })
    }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function (t, e) {
    var i = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, r = (e.property && e.property.value || this._core.current()) + n, o = this._core.clones().length, a = t.proxy(function (t, e) {
                            this.load(e)
                        }, this); n++ < s;) this.load(o / 2 + this._core.relative(r)), o && t.each(this._core.clones(this._core.relative(r++)), a)
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1
    }, i.prototype.load = function (i) {
        var s = this._core.$stage.children().eq(i),
            n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function (i, s) {
            var n, r = t(s),
                o = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
            this._core.trigger("load", {
                element: r,
                url: o
            }, "lazy"), r.is("img") ? r.one("load.owl.lazy", t.proxy(function () {
                r.css("opacity", 1), this._core.trigger("loaded", {
                    element: r,
                    url: o
                }, "lazy")
            }, this)).attr("src", o) : (n = new Image, n.onload = t.proxy(function () {
                r.css({
                    "background-image": "url(" + o + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: r,
                    url: o
                }, "lazy")
            }, this), n.src = o)
        }, this)), this._loaded.push(s.get(0)))
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function (t) {
    var e = function (i) {
        this._core = i, this._handlers = {
            "initialized.owl.carousel": t.proxy(function () {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function (t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function (t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (t, e, i) {
    var s = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": t.proxy(function (t) {
                this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": t.proxy(function () {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function (e) {
                var i = t(e.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    s.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, s.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            r = t.attr("data-height") || this._core.settings.videoHeight,
            o = t.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if ((s = o.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else {
            if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            i = "vimeo"
        }
        s = s[6], this._videos[o] = {
            type: i,
            id: s,
            width: n,
            height: r
        }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
    }, s.prototype.thumbnail = function (e, i) {
        var s, n, r, o = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            l = "src",
            c = "",
            d = this._core.settings,
            h = function (t) {
                n = '<div class="owl-video-play-icon"></div>', s = d.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n)
            };
        return e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (h(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (r = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", h(r)) : "vimeo" === i.type && t.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                r = t[0].thumbnail_large, h(r)
            }
        }))
    }, s.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, s.prototype.play = function (e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var i, s, n = t(e.target || e.srcElement),
            r = n.closest("." + this._core.settings.itemClass),
            o = this._videos[r.attr("data-video")],
            a = o.width || "100%",
            l = o.height || this._core.$stage.height();
        "youtube" === o.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + o.id + "?autoplay=1&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type && (i = '<iframe src="http://player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), r.addClass("owl-video-playing"), this._playing = r, s = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s)
    }, s.prototype.isInFullScreen = function () {
        var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(s && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
    }, s.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, s) {
    var n = function (e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                this.swapping = "translated" == t.type
            }, this),
            "translate.owl.carousel": t.proxy(function () {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, n.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), r && n.addClass("animated owl-animated-in").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, n.prototype.clear = function (e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function (t, e, i) {
    var s = function (e) {
        this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function () {
                this.autoplay()
            }, this),
            "play.owl.autoplay": t.proxy(function (t, e, i) {
                this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function () {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function () {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function () {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, s.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function () {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, s.prototype.play = function () {
        return !0 === i.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, s.prototype.stop = function () {
        e.clearInterval(this.interval)
    }, s.prototype.pause = function () {
        e.clearInterval(this.interval)
    }, s.prototype.destroy = function () {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document),
function (t) {
    "use strict";
    var e = function (i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": t.proxy(function (e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": t.proxy(function (t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "change.owl.carousel": t.proxy(function (t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(),
                        i = this._core.maximum(),
                        s = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
                }
            }, this),
            "changed.owl.carousel": t.proxy(function (t) {
                "position" == t.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": t.proxy(function () {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, e.prototype.initialize = function () {
        var e, i, s = this._core.settings;
        s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function (e) {
            var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, s.dotsSpeed)
        }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function () {
            this.prev(s.navSpeed)
        }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function () {
            this.next(s.navSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
    }, e.prototype.destroy = function () {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function () {
        var t, e, i = this._core.settings,
            s = this._core.clones().length / 2,
            n = s + this._core.items().length,
            r = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;
        if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy)
            for (this._pages = [], t = s, e = 0, 0; n > t; t++)(e >= r || 0 === e) && (this._pages.push({
                start: t - s,
                end: t - s + r - 1
            }), e = 0, 0), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function () {
        var e, i, s = "",
            n = this._core.settings,
            r = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= r), this._controls.$next.toggleClass("disabled", r >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(s)
            } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(n.dots)
    }, e.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
        }
    }, e.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function (t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, e.prototype.getPosition = function (e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
    }, e.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function (e, i, s) {
        var n;
        s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (t, e) {
    "use strict";
    var i = function (s) {
        this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function () {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function (e) {
                var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function () {
            var t = e.location.hash.substring(1),
                i = this._core.$stage.children(),
                s = this._hashes[t] && i.index(this._hashes[t]) || 0;
            return !!t && void this._core.to(s, !1, !0)
        }, this))
    };
    i.Defaults = {
        URLhashListener: !1
    }, i.prototype.destroy = function () {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document),
function (t) {
    var e = navigator.userAgent;
    t.HTMLPictureElement && /ecko/.test(e) && e.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () {
        var e, i = document.createElement("source"),
            s = function (t) {
                var e, s, n = t.parentNode;
                "PICTURE" === n.nodeName.toUpperCase() ? (e = i.cloneNode(), n.insertBefore(e, n.firstElementChild), setTimeout(function () {
                    n.removeChild(e)
                })) : (!t._pfLastSize || t.offsetWidth > t._pfLastSize) && (t._pfLastSize = t.offsetWidth, s = t.sizes, t.sizes += ",100vw", setTimeout(function () {
                    t.sizes = s
                }))
            },
            n = function () {
                var t, e = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (t = 0; t < e.length; t++) s(e[t])
            },
            r = function () {
                clearTimeout(e), e = setTimeout(n, 99)
            },
            o = t.matchMedia && matchMedia("(orientation: landscape)"),
            a = function () {
                r(), o && o.addListener && o.addListener(r)
            };
        return i.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), r
    }())
}(window),
function (t, e, i) {
    "use strict";

    function s(t) {
        return " " === t || "\t" === t || "\n" === t || "\f" === t || "\r" === t
    }

    function n() {
        $ = !1, L = t.devicePixelRatio, O = {}, D = {}, g.DPR = L || 1, B.width = Math.max(t.innerWidth || 0, C.clientWidth), B.height = Math.max(t.innerHeight || 0, C.clientHeight), B.vw = B.width / 100, B.vh = B.height / 100, m = [B.height, B.width, L].join("-"), B.em = g.getEmValue(), B.rem = B.em
    }

    function r(t, e, i, s) {
        var n, r, o;
        return "saveData" === T.algorithm ? t > 2.7 ? o = i + 1 : (r = (e - i) * (n = Math.pow(t - .6, 1.5)), s && (r += .1 * n), o = t + r) : o = i > 1 ? Math.sqrt(t * e) : t, o > i
    }

    function o(t) {
        var e, i = g.getSet(t),
            s = !1;
        "pending" !== i && (s = m, i && (e = g.setRes(i), g.applySetCandidate(e, t))), t[g.ns].evaled = s
    }

    function a(t, e) {
        return t.res - e.res
    }

    function l(t, e, i) {
        var s;
        return !i && e && (i = (i = t[g.ns].sets) && i[i.length - 1]), (s = c(e, i)) && (e = g.makeUrl(e), t[g.ns].curSrc = e, t[g.ns].curCan = s, s.res || Y(s, s.set.sizes)), s
    }

    function c(t, e) {
        var i, s, n;
        if (t && e)
            for (n = g.parseSet(e), t = g.makeUrl(t), i = 0; i < n.length; i++)
                if (t === g.makeUrl(n[i].url)) {
                    s = n[i];
                    break
                } return s
    }

    function d(t, e) {
        var i, s, n, r, o = t.getElementsByTagName("source");
        for (i = 0, s = o.length; i < s; i++)(n = o[i])[g.ns] = !0, (r = n.getAttribute("srcset")) && e.push({
            srcset: r,
            media: n.getAttribute("media"),
            type: n.getAttribute("type"),
            sizes: n.getAttribute("sizes")
        })
    }

    function h(t, e) {
        function i(e) {
            var i, s = e.exec(t.substring(h));
            if (s) return i = s[0], h += i.length, i
        }

        function n() {
            var t, i, s, n, a, l, c, d, h, p = !1,
                f = {};
            for (n = 0; n < o.length; n++) l = (a = o[n])[a.length - 1], c = a.substring(0, a.length - 1), d = parseInt(c, 10), h = parseFloat(c), q.test(c) && "w" === l ? ((t || i) && (p = !0), 0 === d ? p = !0 : t = d) : V.test(c) && "x" === l ? ((t || i || s) && (p = !0), h < 0 ? p = !0 : i = h) : q.test(c) && "h" === l ? ((s || i) && (p = !0), 0 === d ? p = !0 : s = d) : p = !0;
            p || (f.url = r, t && (f.w = t), i && (f.d = i), s && (f.h = s), s || i || t || (f.d = 1), 1 === f.d && (e.has1x = !0), f.set = e, u.push(f))
        }
        for (var r, o, a, l, c, d = t.length, h = 0, u = [];;) {
            if (i(F), h >= d) return u;
            r = i(R), o = [], "," === r.slice(-1) ? (r = r.replace(W, ""), n()) : function () {
                for (i(j), a = "", l = "in descriptor";;) {
                    if (c = t.charAt(h), "in descriptor" === l)
                        if (s(c)) a && (o.push(a), a = "", l = "after descriptor");
                        else {
                            if ("," === c) return h += 1, a && o.push(a), void n();
                            if ("(" === c) a += c, l = "in parens";
                            else {
                                if ("" === c) return a && o.push(a), void n();
                                a += c
                            }
                        }
                    else if ("in parens" === l)
                        if (")" === c) a += c, l = "in descriptor";
                        else {
                            if ("" === c) return o.push(a), void n();
                            a += c
                        }
                    else if ("after descriptor" === l)
                        if (s(c));
                        else {
                            if ("" === c) return void n();
                            l = "in descriptor", h -= 1
                        } h += 1
                }
            }()
        }
    }

    function u(t) {
        var e, i, n, r, o, a, l = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            c = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (n = (i = function (t) {
                function e() {
                    r && (o.push(r), r = "")
                }

                function i() {
                    o[0] && (a.push(o), o = [])
                }
                for (var n, r = "", o = [], a = [], l = 0, c = 0, d = !1;;) {
                    if ("" === (n = t.charAt(c))) return e(), i(), a;
                    if (d) {
                        if ("*" === n && "/" === t[c + 1]) {
                            d = !1, c += 2, e();
                            continue
                        }
                        c += 1
                    } else {
                        if (s(n)) {
                            if (t.charAt(c - 1) && s(t.charAt(c - 1)) || !r) {
                                c += 1;
                                continue
                            }
                            if (0 === l) {
                                e(), c += 1;
                                continue
                            }
                            n = " "
                        } else if ("(" === n) l += 1;
                        else if (")" === n) l -= 1;
                        else {
                            if ("," === n) {
                                e(), i(), c += 1;
                                continue
                            }
                            if ("/" === n && "*" === t.charAt(c + 1)) {
                                d = !0, c += 2;
                                continue
                            }
                        }
                        r += n, c += 1
                    }
                }
            }(t)).length, e = 0; e < n; e++)
            if (r = i[e], o = r[r.length - 1], function (t) {
                    return !!(l.test(t) && parseFloat(t) >= 0) || !!c.test(t) || "0" === t || "-0" === t || "+0" === t
                }(o)) {
                if (a = o, r.pop(), 0 === r.length) return a;
                if (r = r.join(" "), g.matchesMedia(r)) return a
            } return "100vw"
    }
    e.createElement("picture");
    var p, f, m, g = {},
        _ = !1,
        v = function () {},
        y = e.createElement("img"),
        w = y.getAttribute,
        b = y.setAttribute,
        S = y.removeAttribute,
        C = e.documentElement,
        x = {},
        T = {
            algorithm: ""
        },
        I = navigator.userAgent,
        A = /rident/.test(I) || /ecko/.test(I) && I.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        k = "currentSrc",
        E = /\s+\+?\d+(e\d+)?w/,
        z = /(\([^)]+\))?\s*(.+)/,
        P = t.picturefillCFG,
        M = "font-size:100%!important;",
        $ = !0,
        O = {},
        D = {},
        L = t.devicePixelRatio,
        B = {
            px: 1,
            in: 96
        },
        N = e.createElement("a"),
        H = !1,
        j = /^[ \t\n\r\u000c]+/,
        F = /^[, \t\n\r\u000c]+/,
        R = /^[^ \t\n\r\u000c]+/,
        W = /[,]+$/,
        q = /^\d+$/,
        V = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        X = function (t, e, i, s) {
            t.addEventListener ? t.addEventListener(e, i, s || !1) : t.attachEvent && t.attachEvent("on" + e, i)
        },
        Q = function (t) {
            var e = {};
            return function (i) {
                return i in e || (e[i] = t(i)), e[i]
            }
        },
        U = function () {
            var t = /^([\d\.]+)(em|vw|px)$/,
                e = function () {
                    for (var t = arguments, e = 0, i = t[0]; ++e in t;) i = i.replace(t[e], t[++e]);
                    return i
                },
                i = Q(function (t) {
                    return "return " + e((t || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function (e, s) {
                var n;
                if (!(e in O))
                    if (O[e] = !1, s && (n = e.match(t))) O[e] = n[1] * B[n[2]];
                    else try {
                        O[e] = new Function("e", i(e))(B)
                    } catch (t) {}
                return O[e]
            }
        }(),
        Y = function (t, e) {
            return t.w ? (t.cWidth = g.calcListLength(e || "100vw"), t.res = t.w / t.cWidth) : t.res = t.d, t
        },
        Z = function (t) {
            if (_) {
                var i, s, n, r = t || {};
                if (r.elements && 1 === r.elements.nodeType && ("IMG" === r.elements.nodeName.toUpperCase() ? r.elements = [r.elements] : (r.context = r.elements, r.elements = null)), i = r.elements || g.qsa(r.context || e, r.reevaluate || r.reselect ? g.sel : g.selShort), n = i.length) {
                    for (g.setupRun(r), H = !0, s = 0; s < n; s++) g.fillImg(i[s], r);
                    g.teardownRun(r)
                }
            }
        };
    t.console && console.warn, k in y || (k = "src"), x["image/jpeg"] = !0, x["image/gif"] = !0, x["image/png"] = !0, x["image/svg+xml"] = e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), g.ns = ("pf" + (new Date).getTime()).substr(0, 9), g.supSrcset = "srcset" in y, g.supSizes = "sizes" in y, g.supPicture = !!t.HTMLPictureElement, g.supSrcset && g.supPicture && !g.supSizes && function (t) {
        y.srcset = "data:,a", t.src = "data:,a", g.supSrcset = y.complete === t.complete, g.supPicture = g.supSrcset && g.supPicture
    }(e.createElement("img")), g.supSrcset && !g.supSizes ? function () {
        var t = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            i = e.createElement("img"),
            s = function () {
                2 === i.width && (g.supSizes = !0), f = g.supSrcset && !g.supSizes, _ = !0, setTimeout(Z)
            };
        i.onload = s, i.onerror = s, i.setAttribute("sizes", "9px"), i.srcset = t + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", i.src = t
    }() : _ = !0, g.selShort = "picture>img,img[srcset]", g.sel = g.selShort, g.cfg = T, g.DPR = L || 1, g.u = B, g.types = x, g.setSize = v, g.makeUrl = Q(function (t) {
        return N.href = t, N.href
    }), g.qsa = function (t, e) {
        return "querySelector" in t ? t.querySelectorAll(e) : []
    }, g.matchesMedia = function () {
        return t.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? g.matchesMedia = function (t) {
            return !t || matchMedia(t).matches
        } : g.matchesMedia = g.mMQ, g.matchesMedia.apply(this, arguments)
    }, g.mMQ = function (t) {
        return !t || U(t)
    }, g.calcLength = function (t) {
        var e = U(t, !0) || !1;
        return e < 0 && (e = !1), e
    }, g.supportsType = function (t) {
        return !t || x[t]
    }, g.parseSize = Q(function (t) {
        var e = (t || "").match(z);
        return {
            media: e && e[1],
            length: e && e[2]
        }
    }), g.parseSet = function (t) {
        return t.cands || (t.cands = h(t.srcset, t)), t.cands
    }, g.getEmValue = function () {
        var t;
        if (!p && (t = e.body)) {
            var i = e.createElement("div"),
                s = C.style.cssText,
                n = t.style.cssText;
            i.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", C.style.cssText = M, t.style.cssText = M, t.appendChild(i), p = i.offsetWidth, t.removeChild(i), p = parseFloat(p, 10), C.style.cssText = s, t.style.cssText = n
        }
        return p || 16
    }, g.calcListLength = function (t) {
        if (!(t in D) || T.uT) {
            var e = g.calcLength(u(t));
            D[t] = e || B.width
        }
        return D[t]
    }, g.setRes = function (t) {
        var e;
        if (t)
            for (var i = 0, s = (e = g.parseSet(t)).length; i < s; i++) Y(e[i], t.sizes);
        return e
    }, g.setRes.res = Y, g.applySetCandidate = function (t, e) {
        if (t.length) {
            var i, s, n, o, c, d, h, u, p, f = e[g.ns],
                m = g.DPR;
            if (d = f.curSrc || e[k], (h = f.curCan || l(e, d, t[0].set)) && h.set === t[0].set && ((p = A && !e.complete && h.res - .1 > m) || (h.cached = !0, h.res >= m && (c = h))), !c)
                for (t.sort(a), c = t[(o = t.length) - 1], s = 0; s < o; s++)
                    if ((i = t[s]).res >= m) {
                        c = t[n = s - 1] && (p || d !== g.makeUrl(i.url)) && r(t[n].res, i.res, m, t[n].cached) ? t[n] : i;
                        break
                    } c && (u = g.makeUrl(c.url), f.curSrc = u, f.curCan = c, u !== d && g.setSrc(e, c), g.setSize(e))
        }
    }, g.setSrc = function (t, e) {
        var i;
        t.src = e.url, "image/svg+xml" === e.set.type && (i = t.style.width, t.style.width = t.offsetWidth + 1 + "px", t.offsetWidth + 1 && (t.style.width = i))
    }, g.getSet = function (t) {
        var e, i, s, n = !1,
            r = t[g.ns].sets;
        for (e = 0; e < r.length && !n; e++)
            if ((i = r[e]).srcset && g.matchesMedia(i.media) && (s = g.supportsType(i.type))) {
                "pending" === s && (i = s), n = i;
                break
            } return n
    }, g.parseSets = function (t, e, i) {
        var s, n, r, o, a = e && "PICTURE" === e.nodeName.toUpperCase(),
            l = t[g.ns];
        (void 0 === l.src || i.src) && (l.src = w.call(t, "src"), l.src ? b.call(t, "data-pfsrc", l.src) : S.call(t, "data-pfsrc")), (void 0 === l.srcset || i.srcset || !g.supSrcset || t.srcset) && (s = w.call(t, "srcset"), l.srcset = s, o = !0), l.sets = [], a && (l.pic = !0, d(e, l.sets)), l.srcset ? (n = {
            srcset: l.srcset,
            sizes: w.call(t, "sizes")
        }, l.sets.push(n), (r = (f || l.src) && E.test(l.srcset || "")) || !l.src || c(l.src, n) || n.has1x || (n.srcset += ", " + l.src, n.cands.push({
            url: l.src,
            d: 1,
            set: n
        }))) : l.src && l.sets.push({
            srcset: l.src,
            sizes: null
        }), l.curCan = null, l.curSrc = void 0, l.supported = !(a || n && !g.supSrcset || r && !g.supSizes), o && g.supSrcset && !l.supported && (s ? (b.call(t, "data-pfsrcset", s), t.srcset = "") : S.call(t, "data-pfsrcset")), l.supported && !l.srcset && (!l.src && t.src || t.src !== g.makeUrl(l.src)) && (null === l.src ? t.removeAttribute("src") : t.src = l.src), l.parsed = !0
    }, g.fillImg = function (t, e) {
        var i, s = e.reselect || e.reevaluate;
        t[g.ns] || (t[g.ns] = {}), i = t[g.ns], (s || i.evaled !== m) && (i.parsed && !e.reevaluate || g.parseSets(t, t.parentNode, e), i.supported ? i.evaled = m : o(t))
    }, g.setupRun = function () {
        H && !$ && L === t.devicePixelRatio || n()
    }, g.supPicture ? (Z = v, g.fillImg = v) : function () {
        var i, s = t.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            n = function () {
                var t = e.readyState || "";
                r = setTimeout(n, "loading" === t ? 200 : 999), e.body && (g.fillImgs(), (i = i || s.test(t)) && clearTimeout(r))
            },
            r = setTimeout(n, e.body ? 9 : 99),
            o = C.clientHeight;
        X(t, "resize", function (t, e) {
            var i, s, n = function () {
                var r = new Date - s;
                r < e ? i = setTimeout(n, e - r) : (i = null, t())
            };
            return function () {
                s = new Date, i || (i = setTimeout(n, e))
            }
        }(function () {
            $ = Math.max(t.innerWidth || 0, C.clientWidth) !== B.width || C.clientHeight !== o, o = C.clientHeight, $ && g.fillImgs()
        }, 99)), X(e, "readystatechange", n)
    }(), g.picturefill = Z, g.fillImgs = Z, g.teardownRun = v, Z._ = g, t.picturefillCFG = {
        pf: g,
        push: function (t) {
            var e = t.shift();
            "function" == typeof g[e] ? g[e].apply(g, t) : (T[e] = t[0], H && g.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; P && P.length;) t.picturefillCFG.push(P.shift());
    t.picturefill = Z, "object" == typeof module && "object" == typeof module.exports ? module.exports = Z : "function" == typeof define && define.amd && define("picturefill", function () {
        return Z
    }), g.supPicture || (x["image/webp"] = function (e, i) {
        var s = new t.Image;
        return s.onerror = function () {
            x[e] = !1, Z()
        }, s.onload = function () {
            x[e] = 1 === s.width, Z()
        }, s.src = i, "pending"
    }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document),
function () {
    function t() {
        M.keyboardSupport && u("keydown", n)
    }

    function e() {
        if (!B && document.body) {
            B = !0;
            var e = document.body,
                i = document.documentElement,
                s = window.innerHeight,
                n = e.scrollHeight;
            if (N = document.compatMode.indexOf("CSS") >= 0 ? i : e, I = e, t(), top != self) D = !0;
            else if (n > s && (e.offsetHeight <= s || i.offsetHeight <= s)) {
                var r = document.createElement("div");
                r.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + N.scrollHeight + "px", document.body.appendChild(r);
                var o;
                k = function () {
                    o || (o = setTimeout(function () {
                        O || (r.style.height = "0", r.style.height = N.scrollHeight + "px", o = null)
                    }, 500))
                }, setTimeout(k, 10), u("resize", k);
                var a = {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                };
                if ((A = new Y(k)).observe(e, a), N.offsetHeight <= s) {
                    var l = document.createElement("div");
                    l.style.clear = "both", e.appendChild(l)
                }
            }
            M.fixedBackground || O || (e.style.backgroundAttachment = "scroll", i.style.backgroundAttachment = "scroll")
        }
    }

    function i(t, e, i) {
        if (m(e, i), 1 != M.accelerationMax) {
            var s = Date.now() - q;
            if (s < M.accelerationDelta) {
                var n = (1 + 50 / s) / 2;
                n > 1 && (n = Math.min(n, M.accelerationMax), e *= n, i *= n)
            }
            q = Date.now()
        }
        if (R.push({
                x: e,
                y: i,
                lastX: e < 0 ? .99 : -.99,
                lastY: i < 0 ? .99 : -.99,
                start: Date.now()
            }), !W) {
            var r = t === document.body,
                o = function (s) {
                    for (var n = Date.now(), a = 0, l = 0, c = 0; c < R.length; c++) {
                        var d = R[c],
                            h = n - d.start,
                            u = h >= M.animationTime,
                            p = u ? 1 : h / M.animationTime;
                        M.pulseAlgorithm && (p = b(p));
                        var f = d.x * p - d.lastX >> 0,
                            m = d.y * p - d.lastY >> 0;
                        a += f, l += m, d.lastX += f, d.lastY += m, u && (R.splice(c, 1), c--)
                    }
                    r ? window.scrollBy(a, l) : (a && (t.scrollLeft += a), l && (t.scrollTop += l)), e || i || (R = []), R.length ? U(o, t, 1e3 / M.frameRate + 1) : W = !1
                };
            U(o, t, 0), W = !0
        }
    }

    function s(t) {
        B || e();
        var s = t.target,
            n = l(s);
        if (!n || t.defaultPrevented || t.ctrlKey) return !0;
        if (f(I, "embed") || f(s, "embed") && /\.pdf/i.test(s.src) || f(I, "object")) return !0;
        var r = -t.wheelDeltaX || t.deltaX || 0,
            a = -t.wheelDeltaY || t.deltaY || 0;
        if (j && (t.wheelDeltaX && _(t.wheelDeltaX, 120) && (r = t.wheelDeltaX / Math.abs(t.wheelDeltaX) * -120), t.wheelDeltaY && _(t.wheelDeltaY, 120) && (a = t.wheelDeltaY / Math.abs(t.wheelDeltaY) * -120)), r || a || (a = -t.wheelDelta || 0), 1 === t.deltaMode && (r *= 40, a *= 40), !M.touchpadSupport && g(a)) return !0;
        Math.abs(r) > 1.2 && (r *= M.stepSize / 120), Math.abs(a) > 1.2 && (a *= M.stepSize / 120), i(n, r, a), t.preventDefault(), o()
    }

    function n(t) {
        var e = t.target,
            s = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== F.spacebar;
        document.contains(I) || (I = document.activeElement);
        var n = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (/^(textarea|select|embed|object)$/i.test(e.nodeName) || f(e, "input") && !n.test(e.type) || f(I, "video") || y(t) || e.isContentEditable || t.defaultPrevented || s) return !0;
        if ((f(e, "button") || f(e, "input") && n.test(e.type)) && t.keyCode === F.spacebar) return !0;
        var r = 0,
            a = 0,
            c = l(I),
            d = c.clientHeight;
        switch (c == document.body && (d = window.innerHeight), t.keyCode) {
            case F.up:
                a = -M.arrowScroll;
                break;
            case F.down:
                a = M.arrowScroll;
                break;
            case F.spacebar:
                a = -(t.shiftKey ? 1 : -1) * d * .9;
                break;
            case F.pageup:
                a = .9 * -d;
                break;
            case F.pagedown:
                a = .9 * d;
                break;
            case F.home:
                a = -c.scrollTop;
                break;
            case F.end:
                var h = c.scrollHeight - c.scrollTop - d;
                a = h > 0 ? h + 10 : 0;
                break;
            case F.left:
                r = -M.arrowScroll;
                break;
            case F.right:
                r = M.arrowScroll;
                break;
            default:
                return !0
        }
        i(c, r, a), t.preventDefault(), o()
    }

    function r(t) {
        I = t.target
    }

    function o() {
        clearTimeout(E), E = setInterval(function () {
            X = {}
        }, 1e3)
    }

    function a(t, e) {
        for (var i = t.length; i--;) X[V(t[i])] = e;
        return e
    }

    function l(t) {
        var e = [],
            i = document.body,
            s = N.scrollHeight;
        do {
            var n = X[V(t)];
            if (n) return a(e, n);
            if (e.push(t), s === t.scrollHeight) {
                var r = d(N) && d(i) || h(N);
                if (D && c(N) || !D && r) return a(e, Z())
            } else if (c(t) && h(t)) return a(e, t)
        } while (t = t.parentElement)
    }

    function c(t) {
        return t.clientHeight + 10 < t.scrollHeight
    }

    function d(t) {
        return "hidden" !== getComputedStyle(t, "").getPropertyValue("overflow-y")
    }

    function h(t) {
        var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
        return "scroll" === e || "auto" === e
    }

    function u(t, e) {
        window.addEventListener(t, e, !1)
    }

    function p(t, e) {
        window.removeEventListener(t, e, !1)
    }

    function f(t, e) {
        return (t.nodeName || "").toLowerCase() === e.toLowerCase()
    }

    function m(t, e) {
        t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, L.x === t && L.y === e || (L.x = t, L.y = e, R = [], q = 0)
    }

    function g(t) {
        if (t) return H.length || (H = [t, t, t]), t = Math.abs(t), H.push(t), H.shift(), clearTimeout(z), z = setTimeout(function () {
            window.localStorage && (localStorage.SS_deltaBuffer = H.join(","))
        }, 1e3), !v(120) && !v(100)
    }

    function _(t, e) {
        return Math.floor(t / e) == t / e
    }

    function v(t) {
        return _(H[0], t) && _(H[1], t) && _(H[2], t)
    }

    function y(t) {
        var e = t.target,
            i = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
            do {
                if (i = e.classList && e.classList.contains("html5-video-controls")) break
            } while (e = e.parentNode);
        return i
    }

    function w(t) {
        var e, i;
        return (t *= M.pulseScale) < 1 ? e = t - (1 - Math.exp(-t)) : (t -= 1, e = (i = Math.exp(-1)) + (1 - Math.exp(-t)) * (1 - i)), e * M.pulseNormalize
    }

    function b(t) {
        return t >= 1 ? 1 : t <= 0 ? 0 : (1 == M.pulseNormalize && (M.pulseNormalize /= w(1)), w(t))
    }

    function S(t) {
        for (var e in t) P.hasOwnProperty(e) && (M[e] = t[e])
    }
    var C = navigator.platform.toUpperCase().indexOf("WIN") >= 0,
        x = navigator.userAgent.toUpperCase().indexOf("CHROME") > -1,
        T = $("html").hasClass("no-touch");
    if (C && T && x && $(window).width() > 1024) {
        var I, A, k, E, z, P = {
                frameRate: 120,
                animationTime: 555,
                stepSize: 100,
                pulseAlgorithm: !0,
                pulseScale: 4,
                pulseNormalize: 1,
                accelerationDelta: 50,
                accelerationMax: 3,
                keyboardSupport: !0,
                arrowScroll: 50,
                touchpadSupport: !1,
                fixedBackground: !0,
                excluded: ""
            },
            M = P,
            O = !1,
            D = !1,
            L = {
                x: 0,
                y: 0
            },
            B = !1,
            N = document.documentElement,
            H = [],
            j = /^Mac/.test(navigator.platform),
            F = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            },
            R = [],
            W = !1,
            q = Date.now(),
            V = function () {
                var t = 0;
                return function (e) {
                    return e.uniqueID || (e.uniqueID = t++)
                }
            }(),
            X = {};
        window.localStorage && localStorage.SS_deltaBuffer && (H = localStorage.SS_deltaBuffer.split(","));
        var Q, U = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t, e, i) {
                window.setTimeout(t, i || 1e3 / 60)
            },
            Y = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            Z = function () {
                var t;
                return function () {
                    if (!t) {
                        var e = document.createElement("div");
                        e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                        var i = document.body.scrollTop;
                        document.documentElement.scrollTop;
                        window.scrollBy(0, 3), t = document.body.scrollTop != i ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
                    }
                    return t
                }
            }(),
            J = window.navigator.userAgent,
            K = /Edge/.test(J),
            x = /chrome/i.test(J) && !K,
            G = /safari/i.test(J) && !K,
            tt = /mobile/i.test(J),
            et = (x || G) && !tt;
        "onwheel" in document.createElement("div") ? Q = "wheel" : "onmousewheel" in document.createElement("div") && (Q = "mousewheel"), Q && et && (u(Q, s), u("mousedown", r), u("load", e)), S.destroy = function () {
            A && A.disconnect(), p(Q, s), p("mousedown", r), p("keydown", n), p("resize", k), p("load", e)
        }, window.SmoothScrollOptions && S(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
            return S
        }) : "object" == typeof exports ? module.exports = S : window.SmoothScroll = S
    }
}(),
function (t, e) {
    var i, s = t.jQuery || t.Cowboy || (t.Cowboy = {});
    s.throttle = i = function (t, i, n, r) {
        function o() {
            function s() {
                l = +new Date, n.apply(o, d)
            }
            var o = this,
                c = +new Date - l,
                d = arguments;
            r && !a && s(), a && clearTimeout(a), r === e && c > t ? s() : !0 !== i && (a = setTimeout(r ? function () {
                a = e
            } : s, r === e ? t - c : t))
        }
        var a, l = 0;
        return "boolean" != typeof i && (r = n, n = i, i = e), s.guid && (o.guid = n.guid = n.guid || s.guid++), o
    }, s.debounce = function (t, s, n) {
        return n === e ? i(t, s, !1) : i(t, n, !1 !== s)
    }
}(this),
function (t) {
    "use strict";
    var e = function (e, i) {
        this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, i), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    e.prototype = {
        constructor: e,
        init: function () {
            var t = this;
            t.timeout = setTimeout(function () {
                for (var e = 0; e < t.strings.length; ++e) t.sequence[e] = e;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        },
        build: function () {
            var e = this;
            if (!0 === this.showCursor && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                var i = this.stringsElement.children();
                t.each(i, function (i, s) {
                    e.strings.push(t(s).html())
                })
            }
            this.init()
        },
        typewrite: function (t, e) {
            if (!0 !== this.stop) {
                var i = Math.round(70 * Math.random()) + this.typeSpeed,
                    s = this;
                s.timeout = setTimeout(function () {
                    var i = 0,
                        n = t.substr(e);
                    if ("^" === n.charAt(0)) {
                        var r = 1;
                        /^\^\d+/.test(n) && (r += (n = /\d+/.exec(n)[0]).length, i = parseInt(n)), t = t.substring(0, e) + t.substring(e + r)
                    }
                    if ("html" === s.contentType) {
                        var o = t.substr(e).charAt(0);
                        if ("<" === o || "&" === o) {
                            var a = "";
                            for (a = "<" === o ? ">" : ";"; t.substr(e + 1).charAt(0) !== a && (t.substr(e).charAt(0), !(++e + 1 > t.length)););
                            e++, a
                        }
                    }
                    s.timeout = setTimeout(function () {
                        if (e === t.length) {
                            if (s.options.onStringTyped(s.arrayPos), s.arrayPos === s.strings.length - 1 && (s.options.callback(), s.curLoop++, !1 === s.loop || s.curLoop === s.loopCount)) return;
                            s.timeout = setTimeout(function () {
                                s.backspace(t, e)
                            }, s.backDelay)
                        } else {
                            0 === e && s.options.preStringTyped(s.arrayPos);
                            var i = t.substr(0, e + 1);
                            s.attr ? s.el.attr(s.attr, i) : s.isInput ? s.el.val(i) : "html" === s.contentType ? s.el.html(i) : s.el.text(i), e++, s.typewrite(t, e)
                        }
                    }, i)
                }, i)
            }
        },
        backspace: function (t, e) {
            if (!0 !== this.stop) {
                var i = Math.round(70 * Math.random()) + this.backSpeed,
                    s = this;
                s.timeout = setTimeout(function () {
                    if ("html" === s.contentType && ">" === t.substr(e).charAt(0)) {
                        for (;
                            "<" !== t.substr(e - 1).charAt(0) && (t.substr(e).charAt(0), !(--e < 0)););
                        e--, "<"
                    }
                    var i = t.substr(0, e);
                    s.attr ? s.el.attr(s.attr, i) : s.isInput ? s.el.val(i) : "html" === s.contentType ? s.el.html(i) : s.el.text(i), e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.shuffle && (s.sequence = s.shuffleArray(s.sequence)), s.init()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e))
                }, i)
            }
        },
        shuffleArray: function (t) {
            var e, i, s = t.length;
            if (s)
                for (; --s;) e = t[i = Math.floor(Math.random() * (s + 1))], t[i] = t[s], t[s] = e;
            return t
        },
        reset: function () {
            var t = this;
            clearInterval(t.timeout);
            this.el.attr("id");
            this.el.empty(), void 0 !== this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
        }
    }, t.fn.typed = function (i) {
        return this.each(function () {
            var s = t(this),
                n = s.data("typed"),
                r = "object" == typeof i && i;
            n && n.reset(), s.data("typed", n = new e(this, r)), "string" == typeof i && n[i]()
        })
    }, t.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function () {},
        preStringTyped: function () {},
        onStringTyped: function () {},
        resetCallback: function () {}
    }
}(window.jQuery),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    function e() {
        var e, i, s = {
            height: c.innerHeight,
            width: c.innerWidth
        };
        return s.height || ((e = l.compatMode) || !t.support.boxModel) && (i = "CSS1Compat" === e ? d : l.body, s = {
            height: i.clientHeight,
            width: i.clientWidth
        }), s
    }

    function i() {
        return {
            top: c.pageYOffset || d.scrollTop || l.body.scrollTop,
            left: c.pageXOffset || d.scrollLeft || l.body.scrollLeft
        }
    }

    function s() {
        if (a.length) {
            var s = 0,
                o = t.map(a, function (t) {
                    var e = t.data.selector,
                        i = t.$element;
                    return e ? i.find(e) : i
                });
            for (n = n || e(), r = r || i(); s < a.length; s++)
                if (t.contains(d, o[s][0])) {
                    var l = t(o[s]),
                        c = {
                            height: l[0].offsetHeight,
                            width: l[0].offsetWidth
                        },
                        h = l.offset(),
                        u = l.data("inview");
                    if (!r || !n) return;
                    h.top + c.height > r.top && h.top < r.top + n.height && h.left + c.width > r.left && h.left < r.left + n.width ? u || l.data("inview", !0).trigger("inview", [!0]) : u && l.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    var n, r, o, a = [],
        l = document,
        c = window,
        d = l.documentElement;
    t.event.special.inview = {
        add: function (e) {
            a.push({
                data: e,
                $element: t(this),
                element: this
            }), !o && a.length && (o = setInterval(s, 250))
        },
        remove: function (t) {
            for (var e = 0; e < a.length; e++) {
                var i = a[e];
                if (i.element === this && i.data.guid === t.guid) {
                    a.splice(e, 1);
                    break
                }
            }
            a.length || (clearInterval(o), o = null)
        }
    }, t(c).on("scroll resize scrollstop", function () {
        n = r = null
    }), !d.addEventListener && d.attachEvent && d.attachEvent("onfocusin", function () {
        r = null
    })
});
var sty = sty || {};
sty.initContactForm = function () {
    var t = $(".js_contactForm"),
        e = $(".js_Csrf > input").val();
    $formInput = t.find("input, textarea").not("input[type=hidden]"), t.on("submit", function (i) {
        i.preventDefault();
        var s = t.serialize();
        $.ajax({
            type: "POST",
            url: t.attr("action"),
            data: s,
            beforeSend: function (t, i) {
                t.setRequestHeader("X-CSRFToken", e)
            },
            success: function (t, e, i) {
                $(".form__error").remove(), $(".form__success").show(), $formInput.val(""), setTimeout(function () {
                    $(".form__success").hide()
                }, 3500)
            },
            error: function (e, i, s) {
                $(".form__error").remove();
                for (var n in e.responseJSON) {
                    var r = e.responseJSON[n][0],
                        o = t.find('[name="' + n + '"]');
                    o.after('<span class="form__error">' + r + "</span>");
                    o.parents(".form__row").addClass("has_error")
                }
            }
        })
    })
}, $(document).ready(function () {
    sty.initContactForm()
}), (sty = sty || {}).initFunBoxes = function () {
    var t = $(".js_funFiguresA"),
        e = $(".js_funFiguresB"),
        i = $(".js_funTitle").css({
            "padding-top": "0",
            "padding-bottom": "0"
        }),
        s = (t.height() - e.height()) / 2;
    i.css({
        "padding-top": s + "px",
        "padding-bottom": s + "px"
    }), $(window).outerWidth() <= 1006 && (i = $(".js_funTitle").css({
        "padding-top": "0",
        "padding-bottom": "0"
    }))
}, sty.animateFunBoxes = function () {
    $(".fun__figure img, .team__figure img, .pagination__item, .content_section .project__figure img").addClass("animate_me"), $(".animate_me").on("inview", function (t, e) {
        e && ($img = $(this), $img.removeClass("animate_me"))
    })
}, $(document).ready(function () {
    $(window).resize($.throttle(500, sty.initFunBoxes)), sty.initFunBoxes(), sty.animateFunBoxes(), setTimeout(function () {
        sty.initFunBoxes()
    }, 1e3)
}), (sty = sty || {}).initIntro = function (t) {
    function e() {
        var t = i.scrollTop();
        s.css({
            top: "0",
            opacity: .7 / (1 + t / l)
        }), n.css({
            top: "0" + Math.round(t / 2.15) + "px",
            opacity: .7 / (1 + t / l)
        }), r.css({
            top: "0" + Math.round(t / 1.65) + "px",
            opacity: .7 / (1 + t / l)
        }), o.css({
            top: "0" + Math.round(t / 1.15) + "px",
            opacity: .7 / (1 + t / l)
        }), a.css({
            top: "0" + Math.round(t / 4) + "px"
        })
    }
    var i = $(window),
        s = t.find(".intro__layer--extra"),
        n = t.find(".intro__layer--big"),
        r = t.find(".intro__layer--mid"),
        o = t.find(".intro__layer--small"),
        a = t.find(".intro__content"),
        l = s.height();
    i.on("scroll", function () {
        i.width() > 1024 ? e() : (s.css({
            top: "0",
            opacity: 1
        }), n.css({
            top: "0",
            opacity: 1
        }), r.css({
            top: "0",
            opacity: 1
        }), o.css({
            top: "0",
            opacity: 1
        }), a.css({
            top: "50px"
        }))
    }), i.width() > 1024 && e()
}, $(document).ready(function () {
    $(".js_introTitle").typed({
        stringsElement: $(".js_fakeText"),
        typeSpeed: 10
    });
    var t = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
        e = "undefined" != typeof InstallTrigger,
        i = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0,
        s = !!document.documentMode,
        n = !s && !!window.StyleMedia;
    (!!window.chrome && !!window.chrome.webstore || t) && window.CSS;
    if (s || n || i || e) return !1;
    $(".js_intro").each(function () {
        new sty.initIntro($(this))
    })
}), (sty = sty || {}).initIntroParallax = function (t) {
    function e() {
        var t = i.scrollTop();
        s.css({
            backgroundPosition: "50%" + Math.round(t / 2) + "px"
        }), n.css({
            top: "0" + Math.round(t / 4) + "px"
        })
    }
    var i = $(window),
        s = t.find(".intro_parallax__bg"),
        n = t.find(".intro_parallax__content");
    s.height();
    i.on("scroll", function () {
        i.width() > 1024 ? e() : (s.css({
            backgroundPosition: "50% 50%"
        }), n.css({
            top: "0"
        }))
    }), i.width() > 1024 && e()
}, $(document).ready(function () {
    var t = "Our Mission: Turn your data into a business advantage",
        e = $(".js_introParallaxTitle");
    e.each(function () {
        var i = $(this).data("typedText");
        i && (t = i), e.typed({
            strings: [t],
            typeSpeed: -20
        })
    });
    var i = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
        s = "undefined" != typeof InstallTrigger,
        n = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0,
        r = !!document.documentMode,
        o = !r && !!window.StyleMedia;
    (!!window.chrome && !!window.chrome.webstore || i) && window.CSS;
    if (r || o || n || s) return !1;
    $(".js_introParallax").each(function () {
        new sty.initIntroParallax($(this))
    })
}), (sty = sty || {}).initNavigation = function () {
    var t = $(".js_menu"),
        e = $(".js_navList"),
        i = !1;
    t.on("touchstart click", function (s) {
        return s.preventDefault(), s.stopPropagation(), i || (i = !0, setTimeout(function () {
            i = !1
        }, 150), e.toggleClass("is_open"), t.toggleClass("is_open")), !1
    })
}, $(document).ready(function () {
    sty.initNavigation()
}), $.fn.parallax = function (t, e) {
    var i, s;
    return this.each(function (n, r) {
        var o = $(r);
        return (arguments.length < 1 || null === t) && (t = "50%"), (arguments.length < 2 || null === e) && (e = .4), o.css("background-attachment", "fixed"), {
            update: function () {
                i = o.offset().top, s = $(window).scrollTop(), o.css("backgroundPosition", t + " " + Math.round((i - s) * e) + "px"), $(window).outerWidth() > 1024 || o.css("backgroundPosition", "50% 50%")
            },
            init: function () {
                var t = this;
                t.update(), $(window).on("scroll", t.update)
            }
        }.init()
    })
}, $(document).ready(function () {
    function t() {
        return $(window).outerWidth() > 1024 && (!!i && void $(".js_feedback_image").each(function () {
            $(this).parallax("center", .4)
        }))
    }
    var e = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
        i = (Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor"), !!!document.documentMode && window.StyleMedia, !!window.chrome && !!window.chrome.webstore);
    (i || e) && window.CSS;
    $(window).resize($.throttle(500, t)), t(), setTimeout(function () {
        t()
    }, 333)
}), (sty = sty || {}).initRecentSlider = function () {
    var t = $(".js_recentSlider");
    t.owlCarousel({
        items: 1,
        margin: 10,
        nav: !1,
        loop: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    }), $(".js_recentSliderPrev").click(function () {
        t.trigger("next.owl.carousel")
    }), $(".js_recentSliderNext").click(function () {
        t.trigger("prev.owl.carousel", [300])
    })
}, $(document).ready(function () {
    sty.initRecentSlider()
}), (sty = sty || {}).initServices = function () {
    var t = $(".js_services").find(".services__box_title");
    t.on("click", function (e) {
        e.preventDefault(), t.removeClass("is_active"), $(this).addClass("is_active")
    })
}, $(document).ready(function () {
    sty.initServices()
}), (sty = sty || {}).initStandardsBoxes = function () {
    var t = $(".js_standardsBoxes").find(".standards__box").css("height", "auto"),
        e = t.slice(0, 3),
        i = t.slice(4, 6),
        s = t.slice(6, 9),
        n = 0;
    e.each(function () {
        $(this).height() > n && (n = $(this).height())
    }), e.height(n), i.each(function () {
        $(this).height() > n && (n = $(this).height())
    }), i.height(n), s.each(function () {
        $(this).height() > n && (n = $(this).height())
    }), s.height(n)
}, $(document).ready(function () {
    function t() {
        $(window).outerWidth() <= 1006 ? $(".js_standardsBoxes").find(".standards__box").css("height", "auto") : sty.initStandardsBoxes()
    }
    $(window).resize($.throttle(500, t)), t()
}), (sty = sty || {}).stickyHeader = function (t) {
    function e() {
        $(window).width() >= 1005 && i.scrollTop() > 40 ? s.addClass("is_sticky") : s.removeClass("is_sticky")
    }
    var i = $(window),
        s = $("body");
    i.on("scroll", function () {
        e()
    }), i.on("resize", function () {
        e()
    }), e()
}, $(document).ready(function () {
    $(".js_stickyHeader").each(function () {
        new sty.stickyHeader($(this))
    })
}), (sty = sty || {}).funcDemo = function () {}, jQuery(document).ready(function () {
    sty.funcDemo()
});
//# sourceMappingURL=scripts.min.js.map
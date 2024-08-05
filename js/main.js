"use strict";
document.addEventListener("DOMContentLoaded", (function () {
  var tabs = document.querySelectorAll(".tab");
  var tabLink =document.querySelector(".tab > a");
  var tabBoxes = document.querySelectorAll(".tab-content > div");
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => {item.classList.remove("is-active")})
      tab.classList.add("is-active");
      var t = tab.dataset.target;
      tabBoxes.forEach((box) => {
        if (box.getAttribute("id") === t) {
          box.classList.remove("is-hidden");
        } 
        else {
          box.classList.add("is-hidden");
        }
      })
    })
  })
  var i = y("#categories .bd-category");
  i.length > 0 && i.forEach((function (e) {
    e.querySelector(".bd-category-toggle").addEventListener("click", (function (t) {
      e.classList.toggle("is-active")
    }))
  }));
  var l = y("#meta a");
  l.length > 0 && l.forEach((function (e) {
    e.addEventListener("click", (function (t) {
      t.preventDefault();
      var n = e.getAttribute("href");
      return document.getElementById(n.substring(1)).scrollIntoView(!0),
      !1
    }))
  }));
  var u = y(".dropdown:not(.is-hoverable)");
  function d() {
    u.forEach((function (e) {
      e.classList.remove("is-active")
    }))
  }
  u.length > 0 && (u.forEach((function (e) {
    e.addEventListener("click", (function (t) {
      t.stopPropagation(),
      e.classList.toggle("is-active")
    }))
  })), document.querySelector(".dropdown").addEventListener("click", (() => {
    d()
  })));
  var s = y(".burger");
  s.length > 0 && s.forEach((function (e) {
    e.addEventListener("click", (function () {
      var t = e.dataset.target,
        n = document.getElementById(t);
      e.classList.toggle("is-active"),
      n.classList.toggle("is-active")
    }))
  }));
  bulmaAccordion.attach();

  var v = document.documentElement,
    m = y(".modal"),
    f = y(".modal-open"),
    g = y(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button");
  function E() {
    v.classList.remove("is-clipped"),
    m.forEach((function (e) {
      e.classList.remove("is-active")
    }))
  }
  var currentvp = window.innerWidth;
  if (currentvp > 768) {
    var acTabs = y('.footer .accordion');
    var acTitles = y('.footer .accordion-header');
    var acBtns = y('.footer button.toggle');
    for (let i = 0; i < acTabs.length; i++) {
      acTabs[i].classList.toggle('accordion');
      acTitles[i].classList.toggle('accordion-header');
      acBtns[i].style.display = 'none';
    }
  }
  var bp = document.querySelector(".quantity-plus");
  var num = document.querySelector("#quantity");
  var bm = document.querySelector(".quantity-minus");
  if (num != null || bp != null || bm != null) {
    num.addEventListener("input", () => {
    num.value = num.value.slice(0, 4);
  })
  bp.addEventListener("click", () => {
    if (num.value <= num.max) num.value++;
    if (num.value == num.max) bp.disabled = true;
  })
  bm.addEventListener("click", () => {
    if (num.value > num.min) num.value -= 1;
    if (num.value < num.max) bp.disabled = false;
  })
  }
  
  function y(e) {
    return Array.prototype.slice.call(document.querySelectorAll(e), 0)
  }
  f.length > 0 && f.forEach((function (e) {
    e.addEventListener("click", (function () {
      !function (e) {
        var t = document.getElementById(e);
        v.classList.add("is-clipped"),
        t.classList.add("is-active")
      }(e.dataset.target)
    }))
  })),
  g.length > 0 && g.forEach((function (e) {
    e.addEventListener("click", (function () {
      E()
    }))
  })),
  document.getElementById("sender-btn").addEventListener("click", (function () {
    alert("HELLO EVERYBODY!")
  })),
  document.addEventListener("keydown", (function (e) {
    27 === (e || window.event).keyCode && (E(), d())
  })),
  document.getElementById("unchecker").addEventListener("click", (() => {
    document.querySelectorAll('input[type="checkbox"]').forEach((e => {
      e.checked = !1
    })),
    c.value = c.min,
    a.value = a.max,
    o.value = o.min,
    r.value = r.max,
    t(c, a, "#B5B5B5", "#6F066C", a)
  }))
  function e(e, t) {
    return [
      parseInt(e.value, 10),
      parseInt(t.value, 10)
    ]
  }
  function t(e, t, n, c, a) {
    var o = t.max - t.min,
      r = e.value - t.min,
      i = t.value - t.min;
    a.style.background = `linear-gradient(\n      to right, ${n} 0%, ${n} ${
      r / o * 100
    }%, ${c} ${
      r / o * 100
    }%, ${c} ${
      i / o * 100
    }%, ${n} ${
      i / o * 100
    }%, ${n} 100%)`
  }
  function n(e) {
    var t = document.querySelector("#toSlider");
    Number(e.value) <= 0 ? t.style.zIndex = 2 : t.style.zIndex = 0
  }
  var c = document.querySelector("#fromSlider"),
    a = document.querySelector("#toSlider"),
    o = document.querySelector("#fromInput"),
    r = document.querySelector("#toInput");
  t(c, a, "#B5B5B5", "#6F066C", a),
  n(a),
  c.oninput = () => function (n, c, a) {
    const [o, r] = e(n, c);
    t(n, c, "#B5B5B5", "#6F066C", c),
    o > r ? (n.value = r, a.value = r) : a.value = o
  }(c, a, o),
  a.oninput = () => function (c, a, o) {
    const [r, i] = e(c, a);
    t(c, a, "#B5B5B5", "#6F066C", a),
    n(a),
    r <= i ? (a.value = i, o.value = i) : (o.value = r, a.value = r)
  }(c, a, r),
  o.oninput = () => function (t, n, c, a) {
    const [o, r] = e(n, c);
    o > r ? (t.value = r, n.value = r) : t.value = o
  }(c, o, r),
  r.oninput = () => function (t, n, c, a) {
    const [o, r] = e(n, c);
    o <= r ? (t.value = r, c.value = r) : c.value = o
  }(a, o, r)
}));
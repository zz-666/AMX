function carousel(d,im,bt,li,j) {
  this.d = d;
  this.im = im;
  this.bt = bt;
  this.li = li;
  this.j = j;
}
carousel.prototype.bind = function () {
  var me = this;
  this.bt.onclick = function () {
    me.j++;
    if (me.j == me.im.length) {
      me.j = 1;
    };
    for (var i = 1; i < me.im.length; i++){
      me.im[i].className = "";
      me.li[i - 1].className = "";
    }
    me.im[me.j].className = "active";
    me.li[me.j - 1].className = "active";
  }
  for (var i = 0; i < this.li.length; i++){
    this.li[i].onclick = function () {
      me.j = this.getAttribute("zz");
      for (var i = 1; i < me.im.length; i++){
        me.im[i].className = "";
        me.li[i - 1].className = "";
      }
      me.im[me.j].className = "active";
      me.li[me.j - 1].className = "active";
    }
  }
  timer = setInterval(function () {
    me.bt.onclick();
}, 2000);
  this.d.onmouseover = function () {
    clearInterval(timer);
  };
  this.d.onmouseout = function () {
    timer = setInterval(function () {
      me.bt.onclick();
  }, 2000);
  }
}
var div = document.getElementsByClassName("carousel")[0];
var imgs = div.getElementsByTagName("img");
var bts = div.getElementsByTagName("button")[0];
var ul=div.getElementsByTagName("ul")[0];
var lis=ul.getElementsByTagName("li");
var obj = new carousel(div,imgs, bts, lis, 1);
obj.bind();

// 跳转
var choose_p = document.getElementsByClassName("choose_p")[0];
var choose = document.getElementsByClassName("choose fl")[0];
var j = 0;
var divs = choose.children;
console.log(divs)
choose_p.onclick = function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.innerHTML == "首页") {
    for (var i = 0; i < divs.length - 1; i++) {
      divs[i].className = "style-right";
    }
    j = 0;
    divs[j].className = "style-right active";

  } else if (target.innerHTML == "下页") {
    j++;
    if (j == 12) {
      j = 11;
    }
    if (j < 12) {
      for (var i = 0; i < divs.length - 1; i++) {
        divs[i].className = "style-right";
      }
      divs[j].className = "style-right active";
    }
  } else if (target.innerHTML == "上页") {
    j--;
    if (j == -1) {
      j = 0;
    }
    if (j >= 0) {
      for (var i = 0; i < divs.length - 1; i++) {
        divs[i].className = "style-right";
      }
      divs[j].className = "style-right active";
    }
  } else if (target.innerHTML == "尾页") {
    for (var i = 0; i < divs.length - 1; i++) {
      divs[i].className = "style-right";
    }
    j = 11;
    divs[j].className = "style-right active";
  } else if (target.nodeName == "LI") {
    j = target.innerHTML - 1;
    for (var i = 0; i < divs.length - 1; i++) {
      divs[i].className = "style-right";
    }
    divs[j].className = "style-right active";
  }
}
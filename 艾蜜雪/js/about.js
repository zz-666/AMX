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

// 选项卡
var list = document.getElementsByClassName("list")[0];
var ul = list.getElementsByTagName("ul")[0];
var spans = ul.querySelectorAll("span");
var bs = ul.querySelectorAll("b");
var choose = document.querySelector(".choose");
var sty = document.getElementsByClassName("style")[0];
var h_span = sty.children;
var divs = choose.children;
ul.onclick = function (e) {
  e = e || window.event;
  var target = e.target || srcElement;
  if (target.nodeName == "LI") {
    for (var i = 0; i < spans.length; i++){
      spans[i].className = "";
      bs[i].style.opacity = 0;
      divs[i].style.className = "style-right";
    }
    h_span[3].innerHTML = target.children[1].innerHTML;
    target.children[1].className = "active";
    target.children[2].style.opacity = "1";
    divs[target.getAttribute("zc")].className = "style-right active";
  } else if (target.parentNode.nodeName == "LI") {
    for (var i = 0; i < spans.length; i++){
      spans[i].className = "";
      bs[i].style.opacity = 0;
      divs[i].style.display = "none";
    }
    h_span[3].innerHTML = target.parentNode.children[1].innerHTML;
    target.parentNode.children[1].className = "active";
    target.parentNode.children[2].style.opacity = "1";
    divs[target.parentNode.getAttribute("zc")].style.display = "block";

  }

}

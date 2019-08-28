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

// 移入特效
var design = document.getElementsByClassName("design")[0];
design.onmouseover = function (e) {
  e = window.event || e;
  var target = e.target;
  if (target.className == "people fl") {
    target.children[0].style.transform = "rotateY(360deg)";
    target.children[1].style.transform = "rotateY(180deg)";
    target.children[2].style.color = "red";
  } else if(target.parentNode.className=="people fl"){
    target.parentNode.children[0].style.transform = "rotateY(360deg)";
    target.parentNode.children[1].style.transform = "rotateY(180deg)";
    target.parentNode.children[2].style.color = "red";
  }
};
design.onmouseout = function (e) {
  e = window.event || e;
  var target = e.target;
  if (target.className == "people fl") {
    target.children[0].style.transform = "rotateY(180deg)";
    target.children[1].style.transform = "rotateY(0deg)";
    target.children[2].style.color = "#343434";
  }else if(target.parentNode.className=="people fl") {
    target.parentNode.children[0].style.transform = "rotateY(180deg)";;
    target.parentNode.children[1].style.transform = "rotateY(0deg)";
    target.parentNode.children[2].style.color = "#343434";
  }
}

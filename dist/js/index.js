"use strict";var menuOne=document.querySelector(".main-left"),menuTwo=document.querySelector(".service-float");function showMenu(){var i="";$.ajax({type:"get",datatype:"jsonp",url:"./data/list.json",success:function(e){$.each(e,function(e,t){var n=t.name.split(" ");i+=' <li  class="hot-line-li clearfix">\n\t\t\t\t\t<div class="hot-line">\n\t\t\t\t\t<div class="line-title">\n\t\t\t\t\t\t<p class="line-text">\n\t\t\t\t\t\t\t'.concat(t.category,'\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="line-con">');for(var o=0;o<n.length;o++)i+=' <a href="javascript:;">'.concat(n[o],"</a>");i+='</div>\n\t\t\t\t\t<div class="line-dotted"></div>\n\t\t\t\t</div>\n\t\t\t\t</li>'}),$(".hot-line-ul").each(function(e,t){$(t).html(i)})}})}menuOne.onmouseenter=function(e){menuTwo.style.display="block",showMenu(),cancelBubble(e=window.event||e)},menuOne.onmouseleave=function(){menuTwo.style.display="none"};var search=document.querySelector("#search"),searchInp=search.querySelector("input"),searchFlag=!0;searchInp.addEventListener("compositionstart",function(){searchFlag=!1}),searchInp.addEventListener("compositionend",function(){searchFlag=!0}),searchInp.oninput=function(){setTimeout(function(){searchFlag&&ajax({dataType:"jsonp",url:"https://suggest.taobao.com/sug",data:{code:"utf-8",q:searchInp.value,_ksTS:"1563970517892_385",k:1,area:"c2c",bucketid:10},success:function(e){var t=e.result,n="";t.forEach(function(e){n+="<li>"+e[0]+"</li>"}),document.querySelector("#search-box").innerHTML=n}})},0)};var mySwiper1=new Swiper("#swiper1",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",hideOnClick:!0},autoplay:{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!1}});mySwiper1.el.onmouseover=function(){mySwiper1.navigation.$nextEl.removeClass("hide"),mySwiper1.navigation.$prevEl.removeClass("hide")},mySwiper1.el.onmouseout=function(){mySwiper1.navigation.$nextEl.addClass("hide"),mySwiper1.navigation.$prevEl.addClass("hide")};var mySwiper2=new Swiper("#swiper2",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:4e3,stopOnLastSlide:!1,disableOnInteraction:!1}});mySwiper2.el.onmouseover=function(){mySwiper2.navigation.$nextEl.removeClass("hide"),mySwiper2.navigation.$prevEl.removeClass("hide")},mySwiper2.el.onmouseout=function(){mySwiper2.navigation.$nextEl.addClass("hide"),mySwiper2.navigation.$prevEl.addClass("hide")};for(var noticeUl=document.getElementById("notice-ul"),noticeLis=noticeUl.getElementsByTagName("li"),noticeDiv=document.getElementById("notice-div"),ndUl=noticeDiv.getElementsByTagName("ul"),i=0;i<noticeLis.length;i++)noticeLis[i].setAttribute("index",i),noticeLis[i].onmouseenter=function(){for(var e=0;e<noticeLis.length;e++)ndUl[e].style.display="none";var t=this.getAttribute("index");ndUl[t].style.display="block"};var slidebar=document.getElementById("slidebar"),aSlidebar=slidebar.getElementsByTagName("a");function scroll(){return{left:document.documentElement.scrollLeft||document.body.scrollLeft,top:document.documentElement.scrollTop||document.body.scrollTop}}function ajax(e){var t=e.url;if(t){var n=(e.method||"get").toLowerCase(),o=e.data||{},i="";for(var a in o)i+=a+"="+o[a]+"&";i=i.slice(0,-1);var l=e.success,s=e.error,r=(e.dataType||"json").toLowerCase(),c=e.jsonp||"callback",d=e.cb||"phone"+(new Date).getTime()+Math.random().toString().slice(2);if("json"==r){var u=new XMLHttpRequest;"get"==n&&(u.open("get",t+"?"+i),u.send(null)),"post"==n&&(u.open("post",t),u.setRequestHeader("content-type","application/x-www-form-urlencoded"),u.send(i)),u.onreadystatechange=function(){4==u.readyState&&(200==u.status?l(u.response):s&&s())}}var p=document.createElement("script");p.src=t+"?"+i+"&"+c+"="+d,window[d]=function(e){l(e),p.remove()},document.body.appendChild(p)}else console.error("请求路径必须传入")}function cancelBubble(e){(e=e||window.enent)&&e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}document.onscroll=function(){var e=window.innerHeight,t=scroll().top;slidebar.className=e<=t?"slidebar slideScroll":"slidebar"},slidebar.onclick=function(e){var t=(e=e||window.event).target||e.srcElement;return"fixedtool-1"==t.className&&(document.documentElement.scrollTop=document.querySelector(".layer").offsetTop),"fixedtool-2"==t.className&&(document.documentElement.scrollTop=document.querySelector(".buy").offsetTop),"fixedtool-3"==t.className&&(document.documentElement.scrollTop=document.querySelector(".buy").offsetTop+document.querySelector(".buy").offsetHeight),"fixedtool-4"==t.className&&(document.documentElement.scrollTop=0),!1};
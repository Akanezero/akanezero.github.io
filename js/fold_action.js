// build time:Wed Aug 26 2020 13:07:22 GMT+0800 (中国标准时间)
$(document).ready(function(){$(document).on("click",".fold_hider",function(){$(">.fold",this.parentNode).slideToggle();$(">:first",this).toggleClass("open")});$("div.fold").css("display","none")});
//rebuild by neat 
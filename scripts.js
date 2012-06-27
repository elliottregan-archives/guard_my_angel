$(document).ready(function() {
  $("#overlay, .close").click(function() {
    $("#overlay, #overlay_box").fadeOut();
    $("#overlay_box").children().fadeOut();
  });
  
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  if(isAndroid) {
    $("a.store").attr("href", "https://play.google.com/store/apps/details?id=com.guardmyangel")
    $(".video_wrapper").wrap("<a href='http://m.youtube.com/watch?v=oq-iCdrMFrg' target='blank' />")
  }
    
  if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    $("a.store").click(function() {
      $(".coming_soon, .close").show();
      $("#overlay").fadeIn();
      $("#overlay_box").delay(400).fadeIn();
    });
    
    $(".video_wrapper").click(function() {
      $("#overlay").fadeIn();
      $(".intro_movie, .close").show();
      $("#overlay_box").delay(400).fadeIn();
    });
  };
  
  if((!isAndroid && !navigator.userAgent.match(/iPhone/i)) && !(navigator.userAgent.match(/iPod/i))) {
    $("a.store").click(function() {
      $("button.store, .store_links").fadeOut(200);
      $("button.ios, button.android").delay(400).fadeIn(200);
    });
    
    $("button.ios, .ios_link").click(function() {
      $(".coming_soon, .close").show();
      $("#overlay").fadeIn();
      $("#overlay_box").delay(400).fadeIn();
    });
    
    $(".video_wrapper").click(function() {
      $("#overlay").fadeIn();
      $(".intro_movie, .close").show();
      $("#overlay_box").delay(400).fadeIn();
    });
  }
  
})
//toggle B&W and color photos
$(document).ready(function(){
  $(".photos").hover(function(){
    $(this).css("filter","none");
  },function(){
    $(this).css("filter","grayscale(100%)");
  });
});
	
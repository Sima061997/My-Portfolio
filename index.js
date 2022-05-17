//color and height of navigation bar on scroll
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });
  
//scroll the page to the top page on click of top button
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
 });

 //sider navigation bar on small screen size
document.getElementsByClassName("button")[0].addEventListener("click", event => {
    document.getElementById("navbarText").style.width = "300px";
})

function closeNav() {
  document.getElementById("navbarText").style.width = "0";

}

/*
// more contents on click of screen image 
document.querySelectorAll(".grid-item").forEach(item => {
  item.addEventListener("click", event => {
    console.log("content item clicked");
  const removeItem = document.getElementsByName("front-image");
  removeItem.remove();
    const moreImages = document.createElement("img");
    moreImages.src = "img/image1.png";
    document.body.appendChild(moreImages);

    /*
    const moreContents = event.target.getElementsByClassName(".onclick");
    event.preventDefault();

  })
})
*/ 
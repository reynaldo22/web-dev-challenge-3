$(document).ready(function(){
    // Animations
    $("h1").addClass("animated fadeIn");

    // Responsive nav
    $(".open").click(function(){
      $(this).css("display", "none");
      $(".navResponsive").css("width", "100%");
    });

    $(".close").click(function(){
      $(".navResponsive").css("width", "0");
      $(".open").css("display", "block");
    });

});

const panels = document.querySelectorAll('.panel');
function toggleOpen() {
	this.classList.toggle('open');
}
function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}
panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));

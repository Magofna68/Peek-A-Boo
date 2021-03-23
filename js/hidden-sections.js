// "$ = JQuery; interchangable"
$(function() { // updated syntax: (document).ready
  $(".clickable.section1").on("click", function() {
    $("#content1").slideToggle()
    $("#hide1").fadeToggle()
    $("#show1").slideToggle()
  })
  $(".clickable.section2").on("click", function() {
    $("#content2").slideToggle()
    $("#hide2").fadeToggle()
    $("#show2").slideToggle()
  })
})
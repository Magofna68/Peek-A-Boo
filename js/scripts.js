// "$ = JQuery; interchangable"
$(function() { // updated syntax: (document).ready
  $(".clickable").on("click", function() {
    $("#walrus-showing").slideToggle()
    $("#walrus-hidden").slideToggle()
  })
})
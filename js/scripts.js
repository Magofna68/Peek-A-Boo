// "$ = JQuery; interchangable"
$(function() { // updated syntax: (document).ready
  $("p").on("click", function() {
    $(".walrus-showing").toggle()
    $(".walrus-hidden").toggle()
  })
})
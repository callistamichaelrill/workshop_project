$(document).ready(function() {
  $("#word-button").click(function() {
    $("#word-list").append("<li class='list-item'>" + $("#new-word").val() + "</li>");
    $("#new-word").val("");
  })
})

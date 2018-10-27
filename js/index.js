
$(document).ready(function functionName() {
  $(".choose").click(function() {
  $(".choose").addClass("active");
  $(".choose > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".wrap__coin").removeClass("active");
  $(".ship").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".wrap__coin > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("one");
  $("#line").removeClass("two");
  $("#line").removeClass("three");
  $("#line").removeClass("four");
})

$(".pay").click(function() {
  $(".pay").addClass("active");
  $(".pay > .icon").addClass("active");
  $(".choose").removeClass("active");
  $(".wrap__coin").removeClass("active");
  $(".ship").removeClass("active");
  $(".choose > .icon").removeClass("active");
  $(".wrap__coin > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("two");
  $("#line").removeClass("one");
  $("#line").removeClass("three");
  $("#line").removeClass("four");
})

$(".wrap__coin").click(function() {
  $(".wrap__coin").addClass("active");
  $(".wrap__coin > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".choose").removeClass("active");
  $(".ship").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".choose > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("three");
  $("#line").removeClass("two");
  $("#line").removeClass("one");
  $("#line").removeClass("four");
})

$(".ship").click(function() {
  $(".ship").addClass("active");
  $(".ship > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".wrap__coin").removeClass("active");
  $(".choose").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".wrap__coin > .icon").removeClass("active");
  $(".choose > .icon").removeClass("active");
  $("#line").addClass("four");
  $("#line").removeClass("two");
  $("#line").removeClass("three");
  $("#line").removeClass("one");
})

$(".choose").click(function() {
  $("#first").addClass("active");
  $("#second").removeClass("active");
  $("#third").removeClass("active");
  $("#fourth").removeClass("active");
})

$(".pay").click(function() {
  $("#first").removeClass("active");
  $("#second").addClass("active");
  $("#third").removeClass("active");
  $("#fourth").removeClass("active");
})

$(".wrap__coin").click(function() {
  $("#first").removeClass("active");
  $("#second").removeClass("active");
  $("#third").addClass("active");
  $("#fourth").removeClass("active");
})

$(".ship").click(function() {
  $("#first").removeClass("active");
  $("#second").removeClass("active");
  $("#third").removeClass("active");
  $("#fourth").addClass("active");
})
})
// Created by MK

$(function(){
    $("#li1, #li2, #btn2, #btn3, #okey, #no").hide()
    $("#btn1").click(function(){
        $("#li1, #li2, #btn2, #btn3").fadeToggle(500);
        $("#btn1").hide()
    });
    $("#btn2").click(function(){
        $("#okey").toggleClass("okey")
        $("#okey").slideToggle(1000)
        $("#li1, #li2, #btn1, #btn2, #btn3 ").hide()
    });
    $("#btn3").click(function(){
        $("#no").toggleClass("no")
        $("#no").slideToggle(1000)
        $("#li1, #li2, #btn1, #btn2, #btn3 ").hide()
    })
});
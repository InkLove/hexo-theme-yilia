/*
* @Author: inksmallfrog
* @Date:   2017-03-10 15:15:10
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-03-10 16:26:31
*/

'use strict';

function addListener(obj, event, f, casecade_down){
    if(!obj) return false;
    if(obj.addEventListener){
        //others
        obj.addEventListener(event, f, casecade_down);
    }
    else if(obj.attachEvent){
        //IE
        obj.attachEvent("on" + event, f);
    }
    else{
        //Use Level 0
        return false;
    }
}

function showCloseIcon(){
    let $close_icon = document.querySelector("#left-col-close");
    if($close_icon) $close_icon.style.display = "block"
}

function hideCloseIcon(){
    let $close_icon = document.querySelector("#left-col-close");
    if($close_icon) $close_icon.style.display = "none"
}

function hideLeft(){
    let $left_col = document.querySelector(".left-col");
    let $left_col_class = $left_col.getAttribute("class");
    $left_col.setAttribute("class", $left_col_class + " hide");
    let $mid_col = document.querySelector(".mid-col");
    let $mid_col_class = $mid_col.getAttribute("class");
    $mid_col.setAttribute("class", $mid_col_class + " left-hide");
    let $tools_col = document.querySelector(".tools-col");
    $tools_col.style.display = "none";
    let $left_col_open = document.querySelector("#left-col-open");
    $left_col_open.style.display = "block";
}

function openLeft(){
    let $left_col = document.querySelector(".left-col");
    let $left_col_class = $left_col.getAttribute("class").replace(" hide", "");
    $left_col.setAttribute("class", $left_col_class);
    let $mid_col = document.querySelector(".mid-col");
    let $mid_col_class = $mid_col.getAttribute("class").replace(" left-hide", "");
    $mid_col.setAttribute("class", $mid_col_class);
    let $tools_col = document.querySelector(".tools-col");
    $tools_col.style.display = "block";
    let $left_col_open = document.querySelector("#left-col-open");
    $left_col_open.style.display = "none";
}

let init = function(){
    let $left_col = document.querySelector(".left-col");
    addListener($left_col,  "mouseover", showCloseIcon, false);
    addListener($left_col,  "mouseleave", hideCloseIcon, false);
    let $left_col_close = document.querySelector("#left-col-close");
    addListener($left_col_close, "click", function(event){
        hideLeft();
    }, false);
    let $left_col_open = document.querySelector("#left-col-open");
    addListener($left_col_open, "click", function(event){
        openLeft();
    }, false);
}

module.exports = {
    init: init
}
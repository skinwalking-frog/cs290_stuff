

function Toggle_Menu(){
    if(document.getElementById("sidebar").style.display == "none"){
        document.getElementById("sidebar").style.display = "block";
    }else{
        document.getElementById("sidebar").style.display = "none";
    }
}

function Toggle_Themes_Menu(){
    if(document.getElementById("themes").style.display == "none"){
        document.getElementById("themes").style.display = "block";
    }else{
        document.getElementById("themes").style.display = "none";
    }
}

function Light_Theme(){
    let boxs = document.getElementsByClassName("entry")
    for(let i = 0; i < boxs.length; i++){
        boxs[i].style.backgroundColor = "#d3d3d380"
    }
    document.querySelector("body").style.backgroundColor = "white" 
    document.querySelector(".mainbody").style.backgroundColor = "white" 
    document.querySelector(".list").style.backgroundColor = "white"    
    document.querySelector("#blurb").style.color = "black"
    document.querySelector("#movies").style.color = "black"
    let stuff1 = document.querySelectorAll(".words")
    for(let j = 0; j < stuff1.length; j++){
        console.log(stuff1[j])
        stuff1[j].style.color = "black"
    }
}

function Dark_Theme(){
    let boxs = document.getElementsByClassName("entry")
    for(let i = 0; i < boxs.length; i++){
        boxs[i].style.backgroundColor = "#88888880"
    }
    document.querySelector("body").style.backgroundColor = "#353535" 
    document.querySelector(".mainbody").style.backgroundColor = "#353535" 
    document.querySelector(".list").style.backgroundColor = "#353535"
    document.querySelector("#blurb").style.color = "#fafafa"
    document.querySelector("#movies").style.color = "#fafafa"
    let stuff1 = document.querySelectorAll(".words")
    for(let j = 0; j < stuff1.length; j++){
        console.log(stuff1[j])
        stuff1[j].style.color = "#fafafa"
    }
}

function standard(){
    let boxs = document.getElementsByClassName("entry")
    for(let i = 0; i < boxs.length; i++){
        boxs[i].style.backgroundColor = "#add8e580"
    }
    document.querySelector("body").style.backgroundColor = "lightgrey" 
    document.querySelector(".mainbody").style.backgroundColor = "lightgrey" 
    document.querySelector(".list").style.backgroundColor = "lightgrey" 
    document.querySelector("#blurb").style.color = "black"
    document.querySelector("#movies").style.color = "black"
    let stuff1 = document.querySelectorAll(".words")
    for(let j = 0; j < stuff1.length; j++){
        console.log(stuff1[j])
        stuff1[j].style.color = "black"
    }
}

setTimeout(() => {
    Toggle_Menu()
    Toggle_Themes_Menu()
}, 100);
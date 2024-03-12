

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
    let boxs = document.getElementsByClassName("entry");
    for(let i = 0; i < boxs.length; i++){
        boxs[i].style.backgroundColor = "dark-grey";
    };
    
}
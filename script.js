document.getElementById('div2').style.display = "none";
document.getElementById('p2').style.display = "none";

function yes(){
    document.getElementById('div2').style.display = "block";
    document.getElementById('p2').style.display = "block";
    
    document.getElementById('animation').style.display = "none";
    
    document.getElementById('btn').style.display = "none";
    
    document.getElementsByClassName('static-txt').style.display = "none";
    document.getElementsByClassName('dynamic-txts').style.display = "none";
}
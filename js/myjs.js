var btn = document.getElementById("btnsubmit")
btn.addEventListener('click', click_determine);
function click_determine(){
    var question01 = document.getElementById("question1");
    var as1 = question01.options[question01.selectedIndex].value;
    var question02 = document.getElementById("question2");
    var as2 = question02.options[question02.selectedIndex].value;
    var question03 = document.getElementById("question3");
    var as3 = question03.options[question03.selectedIndex].value;
    var imgchange = document.getElementById("changeimg");
    var title = document.getElementById("bltitle");
    
    if(as1==question01.options[1].value && as2==question02.options[3].value && as3==question03.options[2].value){
        title.textContent = "You are Alien";
        imgchange.src ="../IMG/alien.jpg";
    }
    else if(as1==question01.options[3].value && as2==question02.options[1].value && as3==question03.options[1].value){
        title.textContent = "You are Bizarre";
        imgchange.src ="../IMG/bizarre.jpg";
    }
    else{
        title.textContent = "You are Normal";
        imgchange.src ="../IMG/normal.jpg";
    }
}
const mail = document.querySelector(".obligatoire1");
const saisirmdp = document.querySelector(".saisirmdp");
const testbutton = document.querySelector(".test");
const sucess = document.querySelector(".messError2");

testbutton.addEventListener('click' , event =>{
    if(mail.value == ""){
        saisirmdp.style.display = "block";
    }
    else if(mail.value !==""){
        sucess.style.display = "block"
    }
    else{
        saisirmdp.style.display ="none"
    }
    })

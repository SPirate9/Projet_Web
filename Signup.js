const mdp1 = document.querySelector(".mdp1")
const mdp2 = document.querySelector(".mdp2")
const mdpDifferent = document.querySelector(".mdpDifferent")
const mail = document.querySelector(".obligatoire1");
const password = document.querySelector(".obligatoire2");
const saisirmdp = document.querySelector(".saisirmdp");
const saisirmdp2 = document.querySelector(".saisirmdp2")
const testbutton = document.querySelector(".test")

function verif (param1,param2){
    if(param1 == param2){
        mdpDifferent.style.display = "none";
    }
    else{
        mdpDifferent.style.display = "block";
    }   
}
mdp2.oninput = function(){
    console.log(mdp1.value);
    verif (mdp1.value, mdp2.value)
}

mdp1.oninput = function(){s
    console.log(mdp1.value);
    verif (mdp1.value, mdp2.value)
}

testbutton.addEventListener('click' , event =>{
    if(mail.value == ""){
        saisirmdp.style.display = "block";
    }
    else{
        saisirmdp.style.display = "none"
    }
    })
    
    testbutton.addEventListener('click' , event  =>{
        if(password.value == ""){
            saisirmdp2.style.display = "block";
        }
        else{
            saisirmdp2.style.display = "none"
        }
        })

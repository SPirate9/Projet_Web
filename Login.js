const mail = document.querySelector(".obligatoire1");
const password = document.querySelector(".obligatoire2");
const saisirmdp = document.querySelector(".saisirmdp");
const saisirmdp2 = document.querySelector(".saisirmdp2")
const testbutton = document.querySelector(".test")

testbutton.addEventListener('click' , event =>{
if(mail.value == ""){
    saisirmdp.style.display = "block";
}
else{
    saisirmdp.style.display = "none"
}
})

testbutton.addEventListener('click' , event =>{
    if(password.value == ""){
        saisirmdp2.style.display = "block";
    }
    else{
        saisirmdp2.style.display = "none"
    }
    })


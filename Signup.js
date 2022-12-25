const mdp1 = document.querySelector(".mdp1")
const mdp2 = document.querySelector(".mdp2")
const mdpDifferent = document.querySelector(".mdpDifferent")
const mail = document.querySelector(".obligatoire1");
const password = document.querySelector(".obligatoire2");
const saisirmdp = document.querySelector(".saisirmdp");
const saisirmdp2 = document.querySelector(".saisirmdp2")
const testbutton = document.querySelector(".test")
const form = document.querySelector("form")

form.onsubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      body: JSON.stringify({
        
        email :new FormData(form) ,
        password : new FormData(form) 
    }),
      headers: {
                   "Content-Type" : "application/json"
                },
    });

    const result = await response.json();
    console.log(result)
}



// TEST

// const handleSubmit = async (event) => {
//     event.preventDefault();

//     const data = new FormData(form);

//     try {
//       const response = await fetch(form.action, {
//         method: form.method,
//         body: JSON.stringify({
        
//             body:new FormData(form) 
//         }),
//         headers: {
//             "Content-Type" : "application/json"
//           },
//       });
//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`);
//       }

//       const responseData = await response.json();
//       console.log(responseData);
//       return responseData;
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   form.addEventListener("submit", handleSubmit);


// TEST

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

mdp1.oninput = function(){
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

        
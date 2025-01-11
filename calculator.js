let inpt = document.querySelector("#inpt");
let btns = document.querySelectorAll("button");

let string = " ";
let arr = Array.from(btns);

arr.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            inpt.value = string;
        } else if(e.target.innerHTML == 'AC'){
           string = " ";
           inpt.value = string;

            
        } else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            inpt.value = string;
 
             
         }

         else {
            string = string + e.target.innerHTML;
            inpt.value = string;
        }
    })
})
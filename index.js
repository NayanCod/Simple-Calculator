let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "-P"){
            document.querySelector('input').value = "-"+ string;
            string = document.querySelector('input').value;
        }
        else if(e.target.innerHTML == "X"){
            document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
            string = document.querySelector('input').value;
        }
        else if(e.target.innerHTML == "+P"){
            if(document.querySelector('input').value.slice(0,1) == "-"){
                document.querySelector('input').value = document.querySelector('input').value.slice(1);
                string = document.querySelector('input').value;
            }
            else{
                string = document.querySelector('input').value;
                document.querySelector('input').value = string;
        }
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })
})
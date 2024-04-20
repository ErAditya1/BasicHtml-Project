let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHtml == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHtml == 'AC'){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else{

        
        console.log(e.target)
        string = string +e.target.innerHtml;
        document.querySelector('input').value = string;
    }
    })
    })
 
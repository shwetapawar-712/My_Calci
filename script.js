// let string="";
// let buttons= document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
// buttons.addEventListener('click',(e) =>{
// if(e.target.innerHTML==='='){
//     string=eval(string);
//     document.querySelector('input').value = string;
// }
// else if (e.target.innerHTML==='C'){
//     string="";
//     document.querySelector('input').value = string;
// }
// else {
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
// }
// });
// });

let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => { // Attach event listener to each button
        if (e.target.textContent === '=') { // Use textContent instead of innerHTML
            try {
                string = eval(string); // Be cautious with eval
                document.querySelector('input').value = string;
            } catch (err) {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } else if (e.target.textContent === 'C') { // Correct else if syntax
            string = "";
            document.querySelector('input').value = string;
        } else {
            console.log(e.target);
            string = string + e.target.textContent; // Append button value to string
            document.querySelector('input').value = string;
        }
    });
});

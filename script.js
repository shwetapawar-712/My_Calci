

let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => { 
        if (e.target.textContent === '=') { 
            try {
                string = eval(string); // Be cautious with eval
                document.querySelector('input').value = string;
            } catch (err) {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } else if (e.target.textContent === 'C') { 
            string = "";
            document.querySelector('input').value = string;
        } else {
            console.log(e.target);
            string = string + e.target.textContent; 
            document.querySelector('input').value = string;
        }
    });
});

let input = document.querySelector('.input');
let submit = document.querySelector('.submit');
let output = document.querySelector('.output__header');

function isPalindrome(str) {
    let reverse = str.split("").reverse().join("");
    if (str == reverse) {
        output.innerHTML = 'Yes ' + reverse + ' is a palindrome';
    } else {
        output.innerHTML = 'Naw dawg, That aint the stuff';
    }

}

submit.addEventListener('click', function() {
    let string = input.value;
    isPalindrome(string);
});
// 1 create a function
// 2 run that function as call back inside of function 1 
// link with click event
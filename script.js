var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});




let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("signup-now", (e) => {
  e.preventDefault();

  let username = document.getElementById("gmail");
  let text = document.getElementById("text");
  let number = document.getElementById("number");
  

  if (username.value == "" && text.value == "" || number.value=="")    {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${text.value} and ${number.value}`
    );

    username.value = "";
    text.value = "";
    number.value = "";
  }
});

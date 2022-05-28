// header
let headerTemplate = '<img src="assests/images/logo.png" height="60px" width="60px" alt="" /> <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal1" id="login">LOGIN</button>';
document.getElementById("header").innerHTML = headerTemplate;
// footer
let footerTemplate = '<div class="footer-all"> <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal2">Contact Us</button> <div class="footer-social" style="order: 3;"> <a href="https://www.facebook.com "><img src="assests/images/facebook.png" alt=""></a> <a href="https://www.instagram.com/accounts/login/"><img src="assests/images/instagram.png" alt=""></a> <a href="https://twitter.com/i/flow/login"><img src="assests/images/twitter.png" alt=""></a> </div> <div class="footer-copyright" style="order: 2;" > <p style="order: 2;">&copy;2020 ROOM SEARCH PVT LTD</p> </div> </div>';
document.getElementById("footer").innerHTML = footerTemplate;

// login modal
// let login = e => {
//     localStorage.setItem('username', 'admin');
//     localStorage.setItem('password', 'admin');
//     // localStorage.setItem('isLogin', 'false');

//     e.preventDefault();
//     let userElement = document.getElementById('username');
//     let passwordElement = document.getElementById('password');

//     if (userElement.value === localStorage.getItem('username') && passwordElement.value === localStorage.getItem('password')) {
//         localStorage.setItem('isLogin', 'true');
//         alert('Successfully logged in!');
//         let loginElement = document.getElementById('login');
//         loginElement.dataset.target = '';
//         loginElement.innerText = 'LOGOUT';
//         location.reload();
//     }
//     else{
//         alert('Incorrect credential Login failed');
//         userElement.value='';
//         passwordElement.value='';
//     }

// };

// let isLogin = localStorage.getItem('isLogin');
// let loginElement = document.getElementById('exampleModalLabel');

// let checkLogin = () =>{
//     if(!isLogin || isLogin === 'false'){
//         localStorage.clear();
//         loginElement.dataset.target = '#login-modal';
//         loginElement.innerHTML = 'LOGIN'
//     }
//     else if(isLogin === 'true'){
//         loginElement.dataset.target = '';
//         loginElement.innerText = 'LOGOUT';
//     }
// }
// checkLogin();


function chekvalue(){
var username1 = localStorage.setItem("username", "admin");
var pass1= localStorage.setItem("password", "admin");

var userName = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(username1==userName && pass1==password){
    alert('Successfully logged in!');
}

}
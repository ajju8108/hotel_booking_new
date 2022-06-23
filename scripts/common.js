// header template
let headerTemplate = `<a href="index.html"><img id="logo" src="assests/images/logo.png" halt="logo" /></a> 
<button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal1" id="loginnav" onclick="logoutModal()">LOGIN</button>`;
document.getElementById("header").innerHTML = headerTemplate;
// footer template
let footerTemplate = `<div class="footer-all"> <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal2">Contact Us</button> <div class="footer-social" style="order: 3;"> <a href="https://www.facebook.com "><img src="assests/images/facebook.png" alt=""></a> <a href="https://www.instagram.com/accounts/login/"><img src="assests/images/instagram.png" alt=""></a> <a href="https://twitter.com/i/flow/login"><img src="assests/images/twitter.png" alt=""></a> </div> <div class="footer-copyright" style="order: 2;" > <p style="order: 2;">&copy;2020 ROOM SEARCH PVT LTD</p> </div> </div>`;
document.getElementById("footer").innerHTML = footerTemplate;



// LOGIN LOGOUT MODAL
// CHANGE LOGOUT TO LOGIN & CLEAR THE LOCAL STORAGE
function logoutModal() {
    if (document.getElementById('loginnav').innerText == 'LOGOUT') {
        location.reload();
        localStorage.clear();
    }
       /*  document.getElementById("paynow").disabled = true;   
    }
    else {
        document.getElementById("paynow").disabled = false;
    } */
    }
   
// FOR LOGIN AND TO SAVE THE USERNAME AND PASS FOR ADMIN IN LOCAL STORAGE
function loginModal() {
    let logout = document.getElementById('loginnav');
    if (logout.innerText === 'LOGIN') {
        var adminUserName = localStorage.setItem('user', 'admin');
        var adminPassword = localStorage.setItem('pass', 'admin');
        var adminuser = localStorage.getItem('user');
        var adminpass = localStorage.getItem('pass');
        var userName = document.getElementById('username').value;
        var modalPassword = document.getElementById('modalpassword').value;

        if (userName == adminuser && modalPassword == adminpass) {
            alert('sucessfull loged in');
            document.getElementById('loginnav').innerText = 'LOGOUT';
            document.getElementById("paynow").disabled = false;
        }
        else {
            alert('unsuccessful')

        }
    }
}
// LOGIN LOGOUT MODAL ENDS

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



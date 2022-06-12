
document.getElementById('submit').addEventListener('click', function () {
    let userName = document.getElementById('uName');
    let userEmail = document.getElementById('uEmail'); 

    if (userName.value == '') {
        document.getElementById('uName').style.border ='5px red solid';
        document.getElementById('uNameError').style.visibility ='visible';
    } else {
        document.getElementById('uName').style.border ='5px #9453A6 double '
        document.getElementById('uNameError').style.visibility ='hidden'
    }
    if (userEmail.value == '') {
        document.getElementById('uEmail').style.border ='5px red solid';
        document.getElementById('uEmailError').innerText =' * Email Is Required ';
        document.getElementById('uEmailError').style.visibility ='visible';
    } else if (userEmail.value !== '' && userEmail.value.indexOf('@') == -1 || userEmail.value.indexOf('.') == -1){
    document.getElementById('uEmail').style.border ='5px red solid';
        document.getElementById('uEmailError').innerText =' @ or . is Missing ';
        document.getElementById('uEmailError').style.visibility ='visible';
    }
    else {
        document.getElementById('uEmail').style.border ='5px #9453A6 double ';
        document.getElementById('uEmailError').style.visibility ='hidden';
        
    }
});
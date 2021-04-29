const txtFirstName = document.getElementById('txtFirstName');
const txtLastName = document.getElementById('txtLastName');
const txtMail = document.getElementById('txtMail');
const txtPassword = document.getElementById('txtPassword');
const btnSubmit = document.getElementById('btnSubmit');

const funValidar = el => {
    el.preventDefault();

    let formControls = document.querySelectorAll('.form-control');
    formControls.forEach(cont => cont.classList.remove('border-danger'));

    let formControlsAux = document.querySelectorAll(".text-right");
    formControlsAux.forEach(cont => {
        cont.classList.remove("text-danger");
        cont.classList.add("text-white");
    });

    if(txtFirstName.value=='' || txtFirstName.value=='!') {
        funAppplyVal(txtFirstName);
        return false;
    }

    if(txtLastName.value=='' || txtLastName.value=='!') {
        funAppplyVal(txtLastName);
        return false;
    }

    if(txtMail.value=='' || !funTestMail(txtMail.value)) {
        funAppplyVal(txtMail);
        return false;
    }
    
    if(txtPassword.value=='' || txtPassword.value=='!') {
        funAppplyVal(txtPassword);
        return false;
    }
    
}

const funAppplyVal = (elem) => {
    (elem.type!='email') ? elem.value="!" : 0  ;
    elem.focus();
    (elem.type!='email') ? elem.setSelectionRange(0,1) : 0  ;
    elem.classList.add('border-danger');
    let nextSib = elem.nextElementSibling;
    nextSib.classList.add('text-danger');
    nextSib.classList.remove('text-white');
    return true;
}

const funTestMail = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

btnSubmit.addEventListener('click', funValidar);
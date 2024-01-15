// input field identification
let fname = document.getElementById('fname')
let mail = document.getElementById('mail')
let phno = document.getElementById('phno')
let pass = document.getElementById('pass')
let cpass = document.getElementById('cpass')

// error field identification
let erName = document.getElementById('errFname')
let erMail = document.getElementById('errMail')
let erPhno = document.getElementById('errphno')
let erPass = document.getElementById('errPass')
let erCpass = document.getElementById('errCpass')


const regMail = RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$')
const regPass = RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$')

fname.addEventListener('input', namechecking)
mail.addEventListener('input', mailchecking)
// phno.addEventListener('input', phnochecking)
pass.addEventListener('input', passchecking)
cpass.addEventListener('input', cpasschecking)


// for submission part
let no_fname_err = true;
let no_mail_err = true;
// let no_phno_err = true;
let no_pass_err = true;
let no_cpass_err = true;

function namechecking() {
    let data = fname.value;
    // console.log("value in fullname input:",data);
    if (data.length < 1) {
        erName.innerHTML = "*Required field"
        erName.style.color = "red"
        no_fname_err = false;
    }
    else if (data.length < 5) {
        erName.innerHTML = "Minimum 5 characters"
        erName.style.color = "red"
        no_fname_err = false;
    }
    else if (data.length > 20) {
        erName.innerHTML = "maximum 20 characters"
        erName.style.color = "red"
        no_fname_err = false;
    }
    else
        erName.innerHTML = ""
        no_fname_err = true;
}

function mailchecking() {
    let data = mail.value;
    // console.log("value in mail input:",data)
    if (data.length < 1)
    {
        erMail.innerHTML = "*Required field"
        no_mail_err = false;
    }
    else if (!regMail.test(data))
    {
        erMail.innerHTML = "*wrong pattern"
        no_mail_err = false;
    }
    else
        erMail.innerHTML = ""
        no_mail_err = true;
}


// contact validation
// function phnochecking() {
//     let contactValue = phno.value
//     // console.log("value in contact:,Contactvalue")
//     let validcontact = RegExp('^[6-9]{1}[0-9]{9}$')
//     if (phnoValue === "") {
//         Phnoerr.innerHTML = "**Required field"
//         no_phno_err = false
//     }
//     else if (!validcontact.test(contactvalue)) {
//         Phnoerr.innerHTML = "**wrong pattern"
//         no_phno_err = false
//     }
//     else {
//         Phnoerr.innerHTML = ""
//         no_phno_err = true;
//     }
// }

function cpasschecking() {
    let passData = pass.value;
    let cpassData = cpass.value
    // console.log("password:",passData,"confirm:",cpassData);
    if (cpassData.length < 1) {
        erCpass.innerHTML = "*Required field"
        no_cpass_err = false;
    }
    else if (cpassData !== passData) {
        erCpass.innerHTML = "Password mismatched"
        no_cpass_err = false;
        erCpass.style.color = "red"
    }
    else {
        erCpass.innerHTML = "Password matched"
        erCpass.style.color = "blue"
        no_cpass_err = true;
    }
}

function passchecking() {
    let data = pass.value;
    // console.log("password:",data)
    if (data.length < 1)
    {
        erPass.innerHTML = "*required field"
        let no_pass_err = false;
    }
    else if (!regPass.test(data))
    {
        erPass.innerHTML = "*wrong pattern"
        let no_pass_err = false;
    }
    else
        erPass.innerHTML = ""
        let no_pass_err = true;
}


// validation for submit
function validateMyForm() {
    no_fname_err = true;
    no_mail_err = true;
    // no_phno_err = true;
    no_pass_err = true;
    no_cpass_err = true;
    namechecking();
    mailchecking();
    // phnochecking();
    passchecking();
    cpasschecking();



    if (
    no_fname_err === false||
    no_mail_err === false||
    // no_phno_err === false||
    no_pass_err === false||
    no_cpass_err === false
    )
    
    {
        alert("validation failed");
        return false; 
    }
    else{
    alert("Data Submitted successsfully");
    return true;
    }

}
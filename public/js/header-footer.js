// Sweet alert
var samaForm = document.getElementById('formInput');
console.log(samaForm);
const email = document.getElementById('Email');
console.log(email);

samaForm.addEventListener('click', (e) => {
    e.preventDefault();

    let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.value === ''){
        // alert('Please enter email address');
        Swal.fire({
            icon: "error",
            title: "Oh non",
            text: "Renseigner votre addresse email SVP...",
        });
    }else if(!email.value.match(regexEmail)) {
        // alert('Please enter a valid email');
        Swal.fire({
            icon: "error",
            title: "Attention",
            text: "Vérifier votre addresse email SVP...",
        });
    }else{
        // alert('email already');
        Swal.fire({
            icon: "success",
            title: "Bien, Bravo",
            text: "Vous etes abonné à notre newsletter",
        });
    }
})

    


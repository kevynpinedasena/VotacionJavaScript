const name = document.getElementById('inputNombre');
const age = document.getElementById('inputEdad');
const btnSend = document.getElementById('botonCalcular');
const menssage = document.getElementById('mensaje');

const nameTwo = document.getElementById('input_nombre');
const ageTwo = document.getElementById('input_edad_fecha');
const btnSendTwo = document.getElementById('boton_fecha');
const mensaageTwo = document.getElementById('respuesta');

btnSend.addEventListener('click', () =>{
    outcome();
})

btnSendTwo.addEventListener('click', () =>{
    let calt = calculate();
})

//metodo para calcular en la primera carta
function outcome() {
    let naame = name.value;
    let eega = age.value;
    let res;

    if (naame == "" || eega == 0) {
        swal('Faltan Campos Por Llenar','Llene los Campos correspondientes','warning');
    }
    else{
        if (eega >= 18) {
            res = `${naame} Edad  ${eega} Puede votar`;
            menssage.style.color=("Green");
        }
        else{
            res = `${naame} no puede votar su Edad es ${eega} es Menor`;
            menssage.style.color=("Red");
        }

        res = menssage.innerText = res;
    }

    return res;

}

//metodo para traer los datos del input de date y calcular la edad
const calculateAge = (ageTwo) => {
    const currentDate = new Date();
    const currentYear = parseInt(currentDate.getFullYear());
    const currentMonth = parseInt(currentDate.getMonth())+1;
    const currentDay = parseInt(currentDate.getDate());

    const yearBirth = parseInt(String(ageTwo).substring(0,4));
    const monthBirth = parseInt(String(ageTwo).substring(5,7));
    const dayBirth = parseInt(String(ageTwo).substring(8,10));

    let age = currentYear-yearBirth;

    if (currentMonth > monthBirth) {
        age = age-1;
    }
    else if (currentMonth == monthBirth) {
        if (currentDay < dayBirth) {
            age = age-1;
        }
    }
    console.log(age);
    return age;
}

//metodo para calcular y imprimir en la carta 2
function calculate() {
    let nameTwoo = nameTwo.value;
    let ageTwoo = ageTwo.value;
    let rest;

    let age = calculateAge(ageTwoo);

    if (nameTwoo == "" || ageTwoo == "") {
        swal('Faltan Campos Por Llenar','Llene los Campos correspondientes','warning');
    }
    else{
        if (age >= 18) {
            rest = `${nameTwoo} Puede Votar Edad ${age}`
            mensaageTwo.style.color=("Green");
        }
        else{
            rest = `${nameTwoo} No puede Votar su Edad es ${age}`
            mensaageTwo.style.color=("Red");
        }

        rest = mensaageTwo.innerText = rest;
    }
    return rest;
}


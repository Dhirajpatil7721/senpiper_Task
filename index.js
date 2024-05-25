let view = document.querySelector('#view')
let submit = document.getElementById("submit")
console.log(submit);

let formdata = {
    fname: '',
    Email: '',
    phone: '',
    q1: '',
    q2: '',
    q3: '',
    q4: ''
}

function setq1() {
    let service1 = document.getElementById("service1").checked
    let service2 = document.getElementById("service2").checked
    let service3 = document.getElementById("service3").checked
    let service4 = document.getElementById("service4").checked
    if (service1) {
        formdata.q1 = document.getElementById("service1").value;
    }
    else if (service2) {
        formdata.q1 = document.getElementById("service2").value;
    }
    else if (service3) {
        formdata.q1 = document.getElementById("service3").value;
    }
    else if (service4) {
        formdata.q1 = document.getElementById("service4").value;
    }
}

function setq2() {
    let beverage1 = document.getElementById("beverage1").checked
    let beverage2 = document.getElementById("beverage2").checked
    let beverage3 = document.getElementById("beverage3").checked
    let beverage4 = document.getElementById("beverage4").checked
    if (beverage1) {
        formdata.q2 = document.getElementById("beverage1").value;
    }
    else if (beverage2) {
        formdata.q2 = document.getElementById("beverage2").value;
    }
    else if (beverage3) {
        formdata.q2 = document.getElementById("beverage3").value;
    }
    else if (beverage4) {
        formdata.q2 = document.getElementById("beverage4").value;
    }

}

function setq3() {
    let cle1 = document.getElementById("clean1").checked
    let cle2 = document.getElementById("clean2").checked
    let cle3 = document.getElementById("clean3").checked
    let cle4 = document.getElementById("clean4").checked

    if (cle1) {
        formdata.q3 = document.getElementById("clean1").value;
    }
    else if (cle2) {
        formdata.q3 = document.getElementById("clean2").value;
    }
    else if (cle3) {
        formdata.q3 = document.getElementById("clean3").value;
    }
    else if (cle4) {
        formdata.q3 = document.getElementById("clean4").value;
    }
}

function setq4() {
    let experience1 = document.getElementById("experience1").checked
    let experience2 = document.getElementById("experience2").checked
    let experience3 = document.getElementById("experience3").checked
    let experience4 = document.getElementById("experience4").checked

    // console.log(experience4,experience3,experience2,experience1);

    if (experience1) {
        formdata.q4 = document.getElementById("experience1").value;
    }
    else if (experience2) {
        formdata.q4 = document.getElementById("experience2").value;
    }
    else if (experience3) {
        formdata.q4 = document.getElementById("experience3").value;
    }
    else if (experience4) {
        formdata.q4 = document.getElementById("experience4").value;
    }

}

function formload() {
    let formdata = localStorage.getItem("formdata")
    document.getElementById("fname").value = (JSON.parse(formdata).fname);
    document.getElementById("Email").value = (JSON.parse(formdata).Email);
    document.getElementById("phone").value = (JSON.parse(formdata).phone);

    let ans = (JSON.parse(formdata).q1)
    console.log(ans);
    if (document.getElementById("service1").value === ans) {
        document.getElementById("service1").checked = true;
    }
    else if (document.getElementById("service2").value === ans) {
        document.getElementById("service2").checked = true;
    }
    else if (document.getElementById("service3").value === ans) {
        document.getElementById("service3").checked = true;
    }
    else if (document.getElementById("service4").value === ans) {
        document.getElementById("service4").checked = true;
    }

    let ans2 = (JSON.parse(formdata).q2)
    // console.log(ans);
    if (document.getElementById("beverage1").value === ans2) {
        document.getElementById("beverage1").checked = true;
    }
    else if (document.getElementById("beverage2").value === ans2) {
        document.getElementById("beverage2").checked = true;
    }
    else if (document.getElementById("beverage3").value === ans2) {
        document.getElementById("beverage3").checked = true;
    }
    else if (document.getElementById("beverage4").value === ans2) {
        document.getElementById("beverage4").checked = true;
    }
    let ans3 = (JSON.parse(formdata).q3)

    if (document.getElementById("clean1").value === ans3) {
        document.getElementById("clean1").checked = true;
    }
    else if (document.getElementById("clean2").value === ans3) {
        document.getElementById("clean2").checked = true;
    }
    else if (document.getElementById("clean3").value === ans3) {
        document.getElementById("clean3").checked = true;
    }
    else if (document.getElementById("clean4").value === ans3) {
        document.getElementById("clean4").checked = true;
    }
    let ans4 = (JSON.parse(formdata).q4)
    console.log(ans);
    if (document.getElementById("experience1").value === ans4) {
        document.getElementById("experience1").checked = true;
    }
    else if (document.getElementById("experience2").value === ans4) {
        document.getElementById("experience2").checked = true;
    }
    else if (document.getElementById("experience3").value === ans4) {
        document.getElementById("experience3").checked = true;
    }
    else if (document.getElementById("experience4").value === ans4) {
        document.getElementById("experience4").checked = true;
    }


}

function fnamechange() {

    formdata.fname = document.getElementById('fname').value
    localStorage.setItem('formdata', JSON.stringify(formdata))
}
function Emailchange() {
    formdata.Email = document.getElementById('Email').value
    localStorage.setItem('formdata', JSON.stringify(formdata))
}
function phonechange() {
    formdata.phone = document.getElementById('phone').value
    localStorage.setItem('formdata', JSON.stringify(formdata))
}
function q1change() {
    setq1();
    localStorage.setItem('formdata', JSON.stringify(formdata))

}
function q2change() {
    setq2();
    localStorage.setItem('formdata', JSON.stringify(formdata))
}
function q3change() {
    setq3();
    localStorage.setItem('formdata', JSON.stringify(formdata))

}
function q4change() {
    setq4();
    localStorage.setItem('formdata', JSON.stringify(formdata))
}

function mameval() {
    fname.value
let namespan=document.getElementById('namespan')
    if(fname.length == 0){
        namespan.innerHTML="name is required"
    }
    else if(!fname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        namespan.innerHTML="write full name"
        
    }
   
}


function phoneval() {
    let phoneno = document.getElementById('phone').value;
    let lph = document.getElementById('lph');
    phonespan= document.getElementById('phonespan');

    if (phoneno.length == 0) {
        phonespan.innerHTML="numbers is required "
        // return false;
    }
    else if (phoneno.length !== 10) {
        phonespan.innerHTML="number Should be 10 "
    }
    else if (!phoneno.match(/^[0-9]{10}$/)) {
        phonespan.innerHTML="Only numbers required "
        
    }
}



submit.addEventListener("click", (e) => {
    
    
    
    phoneval();
    // view.style.display = "block";
    
    e.preventDefault();
    formdata.fname = document.getElementById("fname").value
    formdata.Email = document.getElementById("Email").value
    formdata.phone = document.getElementById("phone").value

    
    
    let q1 = document.getElementById("q1").value;
    
    let q2 = document.getElementById("q2");
    
    let q3 = document.getElementById("q3");
    
    let q4 = document.getElementById("q4");
    
    setq1();
    setq2();
    setq3();
    setq4();

    
    localStorage.setItem('formdata', JSON.stringify(formdata));
    
    let link= '/thankyou.html';
    window.location.assign(link) ;
    
    
})
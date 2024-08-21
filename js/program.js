function Signup_page2() {
    var F_name = document.getElementById("First-name-inp").value;
    var L_name = document.getElementById("Last-name-inp").value;
    var Phone_num = document.getElementById("Phone-num-inp").value;

    var Fname =document.getElementById("Fname2");
    var Lname = document.getElementById("Lname2")
   
    if(Phone_num.length != 10){
        alert("The entered mobile number is invalid");
    }
    else{
        window.location.href= "signup2.html";
        Fname.innerHTML=F_name
        Lname.innerHTML=L_name
    }
}

const storedUserInfo = localStorage.getItem("UserInformation");

if(storedUserInfo){
    const userInfo = JSON.parse(storedUserInfo);

    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("district").textContent = userInfo.district;
    document.getElementById("city").textContent = userInfo.city;
    
 } else{
    storeInformation();
 }

 function storeInformation(){
    const firstName = prompt("Type your First Name");
    const lastName = prompt("Type your Last Name");
    const country = prompt("Type your Country");
    const phoneNumber = prompt("Type your Phone Number");
    const state = prompt("Type your State");
    const district = prompt("Type your District");
    const city = prompt("Type your City");

    const userInfo ={
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        district,
        city,
    };

    localStorage.setItem("userInformation" , JSON.stringify(userInfo));

    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("district").textContent = userInfo.district;
    document.getElementById("city").textContent = userInfo.city;

 }

 storeInformation();
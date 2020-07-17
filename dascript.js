function oFunctie(){
    var o = document.forms["daForm"]["name"].value;
    var k = document.forms["daForm"]["email"].value;
    if (o == "" || k == "") {
        alert("If you are going to click the Submit button,\na name as well as an email address would be appreciated!!!");
        return false;
    } else {
        alert("The Super Genius has heard your plea!\nRest assured you will hear from us!");
        return true;
    }
}

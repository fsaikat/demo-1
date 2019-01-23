function checkFirstName() {
    var firstNameValue = $('#firstName').val();
    if(firstNameValue.length>=6 && firstNameValue.length<=15)
    {
        $('#firstNameError').text(' ');
        return true;
    }
    else
    {
        $('#firstNameError').text('Name must be between 6 to 15 characters');
        return false;
    }
}

function checkLastName() {
    var lastNameValue = $('#lastName').val();
    if(lastNameValue.length>=6 && lastNameValue.length<=15)
    {
        $('#lastNameError').text(' ');
        return true;
    }
    else
    {
        $('#lastNameError').text('Name must be between 6 to 15 characters');
        return false;
    }
}

function checkPass(){
    var passValue = $('#password').val();

    if(passValue.length>=8)
    {
        $('#passError').text(' ');
    }
    else
    {
        $('#passError').text('Password must be 8 characters');
    }
}

$('#firstName').blur(function () {
    checkFirstName();
})
$('#lastName').blur(function () {
    checkLastName();
})
$('#password').blur(function () {
    checkPass();
})
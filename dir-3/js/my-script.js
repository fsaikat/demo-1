// document.getElementById('submit').onclick = function () {
//     var startingNum = document.getElementById('sratingNum').value;
//     var endingNum = document.getElementById('endingNum').value;
//     var res = ' ';
//
//     for (var i=startingNum; i<=endingNum; i++)
//     {
//         res += i;
//     }
//
//     document.getElementById('result').value = res;
//
// }

//JavaScript

// document.getElementById('submit').onclick = function () {
//     var firstName = document.getElementById('firstName').value;
//     var lastName = document.getElementById('lastName').value;
//
//     document.getElementById('fullName').value = firstName+' '+lastName;
// }

//Jquery

// $('#submit').click(function () {
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//
//     $('#fullName').val(firstName+' '+lastName);
// });

$('#firstName').keyup(function () {
    var firstName = $('#firstName').val();
    $('#tblfirstName').text(firstName);
})
$('#lastName').keyup(function () {
    var lastName = $('#lastName').val();
    $('#tbllastName').text(lastName);
})
$('#lastName').blur(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    $('#tblfullName').text(firstName+' '+lastName);
})
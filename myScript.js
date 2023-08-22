var show=1;
var firstname;
var lastname;
function getData()
{
 firstname=document.getElementById("fname").value;
 lastname=document.getElementById("lname").value;
 console.log(firstname);
 console.log(lastname);

}
function showRegister()
{
    if (show==1)
    {
    document.getElementById("register_form").style.display="block";
    show=0;
    }
    else {
        document.getElementById("register_form").style.display="none";
        show=1;
    }
}
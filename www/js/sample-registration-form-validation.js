function formValidation()
{
var fname = document.registration.firstname;
var lname = document.registration.lastname;
var uadd = document.registration.address;

var tele = document.registration.telephone;
var mob = document.registration.moblie;

if(allLetter(fname))
{
if(allLetter(lname))
{
if(alphanumeric(uadd))
{ 

if(allnumeric(tele))
{
 
if(allnumeric(mob))
{
}
 
}
}
}
}

return false;

} 
function allLetter(fname)
{ 
var letters = /^[A-Za-z]+$/;
if(fname.value.match(letters))
{
return true;
}
else
{
alert('First Name must have alphabet characters only');
fname.focus();
return false;
}
}

function allLetter(lname)
{ 
var letters = /^[A-Za-z]+$/;
if(lname.value.match(letters))
{
return true;
}
else
{
alert('Last Name must have alphabet characters only');
uname.focus();
return false;
}
}


function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}

function allnumeric(tele)
{ 
var numbers = /^[0-9]+$/;
if(tele.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
tele.focus();
return false;
}
}

function allnumeric(mob)
{ 
var numbers = /^[0-9]+$/;
if(mob.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
mob.focus();
return false;
}
}


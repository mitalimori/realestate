

function login() {
    var name=document.getElementById('name').values;
    var pass=document.getElementById('pass').values;

    var name1="mitali";
    var pass1="mitali0105"
    if(name==name1 && pass==pass1)
    {
        alert("you are log in");
    }
    else{
        alert("wrong email and password");
    }
}
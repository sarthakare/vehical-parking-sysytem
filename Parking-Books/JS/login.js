let btn=document.getElementById("btnOne");
btn.addEventListener('click', function myfun()
{
                let txt=document.getElementById("userName");
                let pass=document.getElementById("pass");

                if(txt.value == "annies" && pass.value == "annies")
                {
                    alert("Log In Succesfull","danger");
                    window.open("index.html");
                }
                else
                {
                    alert('All fields must me filled!');

                }
          
});
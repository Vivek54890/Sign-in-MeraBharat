function enter() {
	
	var id = document.getElementById("email").value;
	var pass = document.getElementById("password").value;



    if(id == "vivek54890@gmail.com" && pass == "890")
    {
        alert("Login Sucessfully!");
        return false;
    }


    else if(id != "vivek54890@gmail.com" && pass != "890")
    {
        document.getElementById('errorId').innerHTML = "*** Enter correct User Id..!!";
        document.getElementById('errorPass').innerHTML = "*** Enter correct password..!!";
        alert("Login faild!");
        return false;
    }
    
    
    else
    {
        alert("Login faild!");
        return false;
    }


}
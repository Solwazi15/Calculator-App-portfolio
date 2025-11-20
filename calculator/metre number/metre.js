{
    document.getElementById('submit').addEventListener('click',function(event){
        event,preventDefault();
        var accountholder=getElementById('accountholder').value
        var metreNumber=getElementById('metreNumber').value
        if(accountholder==="Mr Khumalo" && metreNumber==="0781468560"){
            alert("Successful")
        }else{
            alert("Try again")
        }
    })

};



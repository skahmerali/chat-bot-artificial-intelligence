const axios = require("axios");

const url = process.env.PORT||3000;

function submit(){

    axios({
        method: 'post',
        url=url + '/user',

        
       data:{

        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        pasword : document.getElementById("pasword").value
    }, 
    }).then((response)=>{
        if(response.data.status === 200){
            alert(response.data.message)
        }
    })
return false;
}
$(function () {
$("#sendMessageButton").on('click',function(e){
    e.preventDefault();
        let customer=JSON.parse(localStorage.getItem("customer"))||[];
        let seller=JSON.parse(localStorage.getItem("seller"))||[];
        let alluser=customer.concat(seller);
        let emailExist = alluser.some(e => e.email === $("#email").val());
        let nameExist = alluser.some(e => e.name === $("#name").val());
        
        if(!emailExist){
            $("#email").next().show();
            $("#email").focus();
        }else{
            $("#email").next().hide();
        }
        if(!nameExist){
            $("#name").next().show();
            $("#name").focus();
        }else{
            $("#name").next().hide();
        }

        if(nameExist && emailExist){
            user=alluser.filter(e => e.email === $("#email").val());
            user[0].contact.push({
                    "subject":$("#subject").val(),
                    "message":$("#message").val(),
                    
                 });
                 localStorage.setItem('usermesg', JSON.stringify(user));
            
          
            
             
        }
        
    });
    console.log(new Date().toTimeString().split(' ')[0]);

});//end of load





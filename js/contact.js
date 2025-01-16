import { Contact } from "../js/registration.js";

$(function () {
$("#sendMessageButton").on('click',function(e){
    e.preventDefault();
    let currentuser=JSON.parse(localStorage.getItem("currentUser"))||[];  
        let emailExist = currentuser.email === $("#email").val();
        let nameExist = currentuser.name === $("#name").val();;
        $("input").on("input", function () {
        $(this).parent().find("p").hide();
      });
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

        if(nameExist && emailExist && $("#subject").val()!="" && $("#message").val()!=""){
            let alluser =JSON.parse(localStorage.getItem(currentuser.type))||[];
            // console.log(alluser);
            let obj;
            let id = 0;
            const productsitem =
              JSON.parse(localStorage.getItem("contactus")) || [];
            if (productsitem.length === 0) {
              id = 0;
            } else {
              id = productsitem[productsitem.length - 1].id + 1;
            }
            let user = alluser.find(e => e.email === $("#email").val());
              obj = new Contact(
                   id,
                   user.name,
                   user.email,
                   $("#message").val(),
            );
            
            let arrmesg=JSON.parse(localStorage.getItem('contactus'))||[];
            arrmesg.push(obj);
            localStorage.setItem("contactus", JSON.stringify(arrmesg));
            $("form").trigger("reset");
          $("input").blur();

            }     
    });
    let adminmesg=JSON.parse(localStorage.getItem('adminmesg'))||[];
    let currentUser=JSON.parse(localStorage.getItem('currentUser'))||[];

    
    let test = adminmesg.filter(e => e.email === currentUser.email);
    console.log(test);
    let display=document.getElementById('displaymesg');
    test.forEach(e => {
        let div=document.createElement('div');
        let left=document.createElement('div');
        let right=document.createElement('div');
        div.className="parent";
        left.className="left";
        right.className="right";
        let p1=document.createElement('p');
        let p2=document.createElement('p');
        p1.innerText=e.usermesg;
        p2.innerText=e.adminmasg;
        left.append(p1);
        right.append(p2); 
        div.append(left);
        div.append(right); 
        display.append(div);    
    });
    

    // console.log(new Date().toTimeString().split(' ')[0]);

});//end of load





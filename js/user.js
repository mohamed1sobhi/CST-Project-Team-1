
let customers=document.getElementById('customers');
let sellers=document.getElementById('sellers');
let admins=document.getElementById('admin');



creating(customers,'customer');
creating(sellers,'seller');
creating(admins,'admin');

function creating(table,data){
    let users=JSON.parse(localStorage.getItem(data))||[];
    let id=0;
    users.forEach(e => {
        let row=document.createElement('tr')
        let td1=document.createElement('td')
        let td2=document.createElement('td')
        let td3=document.createElement('td')
        let td4=document.createElement('td')
        let td5=document.createElement('td')
    
        let a=document.createElement('a');
        a.className="text-primary";
        a.href='pages/examples/invoice.html';
    
        let span=document.createElement('span');
        span.className="badge badge-success";
    
        let div=document.createElement('div');
        div.id='table-sparkline-1';
    
        let button1=document.createElement('button');
        button1.className='btn btn-sm btn-danger';
        let icon1=document.createElement('i');
        icon1.className='fa fa-trash';
    
        let button2=document.createElement('button');
        button2.className='btn btn-sm btn-warning';
        let icon2=document.createElement('i');
        icon2.className='fa fa-edit';
    
        table.append(row)
        row.append(td1);
        row.append(td2);
        row.append(td3);
        row.append(td4);
        row.append(td5);
        td1.append(a);
        td3.append(span);
        td4.append(div);
        td5.append(button1);
        button1.append(icon1);
        td5.append(button2);
        button2.append(icon2);

        a.innerText=++id;
        td2.innerText=e.name;
        span.innerText=e.email;
    

        button1.addEventListener('click', (e) => {
            let removeuser=e.currentTarget.parentElement.parentElement.children[2].children[0].innerText;
            let answer=confirm(`Are you sure to delete this account ${removeuser}`);
           if(answer){
            let newusers=users.filter(ele => {
                return ele.email!=removeuser;
            });
            localStorage.setItem(data,JSON.stringify(newusers));
            e.currentTarget.parentElement.parentElement.remove();
           }
        })
    });
    
}

function labelcreate(tag,att,attval,content){
    let ele=document.createElement(tag);
    ele.setAttribute(att,attval);
    ele.innerHTML=content;
    return ele;
}

function brk (tag){
let ele=document.createElement(tag);
return ele;
}

function input(tag,att1,attval1,att2,attval2){
    let ele=document.createElement(tag);
    ele.setAttribute(att1,attval1);
    ele.setAttribute(att2,attval2);
    return ele;
}

let labelfirstname=labelcreate("label","for","fname","Firstname");
let br1=brk("br");
let inputfname=input("input","type","text","id","fname");
let br11=brk("br");
let labelm=labelcreate("label","for","mname","Middlename");
let br2=brk("br");
let inputmname=input("input","type","text","id","mname");
let br22=brk("br");
let labell=labelcreate("label","for","lname","Lastname");
let br3=brk("br");
let inputl=input("input","type","text","id","lname");
let br33=brk("br");
let labelemail=labelcreate("label","for","email","Email");
let br4=brk("br");
let inputemail=input("input","type","email","id","email");
let br44=brk("br");
let labelempassword=labelcreate("label","for","password","Password");
let br5=brk("br");
let inputpass=input("input","type","password","id","password");

document.body.append(labelfirstname,br1,inputfname,br11,labelm,br2,inputmname,br22,labell,br3,inputl,br33,labelemail,br4,inputemail,br44,labelempassword,br5,inputpass)

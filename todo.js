var addbtn=document.querySelector('.addbtn');

let task={
    list2: document.createElement("div"), 
    txt2: document.createElement("P"),
    btn2: document.createElement("button"),
    trash2:document.createElement("span")
}


addbtn.addEventListener("click", function(){
    var input= document.querySelector('.input').value;
    var list2 = document.createElement("div");  
    var txt2 = document.createElement("P"); 
    var btn2=document.createElement("button");
    var trash2=document.createElement("span");
    list2.textContent=input;
    list2.className="thelist";
    txt2.className="thein";
    btn2.className="btn-light";
    trash2.className="bi-trash";
    document.querySelector('.list').appendChild(list2);
    document.querySelector('.thelist').appendChild(txt2);
    document.querySelector('.thelist').appendChild(btn2);
    document.querySelector('.btn-light').appendChild(trash2);
     
 
});


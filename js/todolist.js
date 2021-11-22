let veri = document.querySelector("#task");
let ekle = document.querySelector("#liveToastBtn");
let liste = document.querySelector("#list");

let close = document.getElementsByClassName("close");

// her list elementine kapatma tuşu 
let listCount = document.getElementsByTagName("li");
for (let i = 0; i<listCount.length; i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className = "close";
    listCount[i].appendChild(span);
}
// kapatma Fonksiyonu
function closeList(){
    let closed = this.parentElement;
    let ul = closed.parentElement;
    ul.removeChild(closed)
}
// her kapatma tuşu için event çağrılması
for (let i=0; i<close.length; i++){
    close[i].addEventListener("click",closeList);
}
//  listeye tıklarken tick atma 
liste.addEventListener("click", function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
    

//  listeye li elementi ekleme ekleme
function newElement() {
    let li = document.createElement("li");
    li.textContent=veri.value;
    let regEx = /^[0-9a-zA-Z]+$/;

    if (veri.value !=="" && veri.value.match(regEx)){
        liste.appendChild(li);
        document.querySelector("#liveToast").className = "toast success fade show";
        setTimeout(function(){
            document.querySelector("#liveToast").className = "toast success fade hide";
        },3000)
        
    }else {
        document.querySelector("#errorToast").className = "toast error fade show";
        setTimeout(function(){
            document.querySelector("#errorToast").className = "toast error fade hide";
        },3000)
    }
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className = "close";
    li.appendChild(span);
    veri.value = "";
    for (let i=0; i<close.length; i++){
        close[i].addEventListener("click",closeList);
    }
    

}





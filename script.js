function dataStore(event){
    event.preventDefault();

    let amt = event.target.amount.value;
    let dis = event.target.Discription.value;
    let cata = event.target.Catagory.value;
    console.log(amt,dis,cata)

    let obj ={
        amt,
        dis,
        cata,
    };
    localStorage.setItem(obj.cata, JSON.stringify(obj))
    showData(obj)

}

function showData(obj){
  let ultag = document.getElementById("browData");
  let litag = document.createElement("li");
  litag.textContent = obj.amt + "--" + obj.cata + "--" + obj.dis;

  //delete data in local Storage

  let delbtn = document.createElement("input");
  delbtn.type = "button";
  delbtn.value = "Delete";
  delbtn.className = "delbtn";
  delbtn.onclick = () => {
    localStorage.removeItem(obj.cata);
    ultag.removeChild(litag);
  };

  //Edit data in local Storage

  let edit = document.createElement('input')
  edit.type = "button"
  edit.value = "Edit"
  edit.className = "edtbtn"
  edit.onclick=()=>{
    localStorage.removeItem(obj.cata);
    ultag.removeChild(litag);

    document.getElementById("amt") = obj.amt;
    document.getElementById("dis") = obj.dis;
    document.getElementById("cat") = obj.cata
  }

  litag.appendChild(delbtn);
  litag.appendChild(edit)
  ultag.appendChild(litag);
}

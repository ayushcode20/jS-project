let putter = document.getElementById('item'); 
let valueees = document.getElementById('input');
let allarray =[];

function add(){
    let vlu = valueees.value;
    if(!vlu){
        alert("no value");
        return
    }
    allarray.push(vlu);
    valueees.value = ''

    render();
    saveitems();

    
}

function render(){
        putter.innerHTML=null;
        for(let [index,values] of Object.entries(allarray)){
            
            let button = document.createElement("button")
            button.textContent = "delete";
            button.style.marginLeft='20px';
            button.onclick = () => removelistitem(index)


            let insert = document.createElement("p");
            insert.textContent= values;
            insert.style.fontSize= '30px';
            insert.style.marginLeft = "20px";
            insert.style.display = "inline";
            
            let container = document.createElement("div");
            container.style.marginTop = '10px'
            
            container.appendChild(insert);
            container.appendChild(button);
            putter.appendChild(container);

    };
};
 
function removelistitem(index){
    allarray.splice(index,1);
    render();
    saveitems();
}

let key = allarray;

function loaditems(){
    const loaded = localStorage.getItem(key);
    if (loaded) allarray = JSON.parse(loaded);
    render();
}

function saveitems(){
    const saveed = JSON.stringify(allarray);
    localStorage.setItem(key,saveed);
}

document.addEventListener('DOMContentLoaded',loaditems);

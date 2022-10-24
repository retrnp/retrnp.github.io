var a = document.getElementsByTagName("a");
for(let i=0;i<a.length;i++){
    if(!(a.item(i).classList.value.split(" ").includes("outof"))){
        a.item(i).target = "player";
        a.item(i).addEventListener("click",()=>{
            document.getElementById("if").style.display = 'block';
        });
    }
}

document.getElementById("player").addEventListener("load",()=>{
    console.log(a);
    document.getElementById("player").contentWindow.document.getElementById("toolbar").remove();
});
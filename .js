function fn_getname(){
    
    getname=localStorage.getItem("player1");
    getname=localStorage.getItem("player2");
    document.getElementById("playr1_name").innerHTML=getname ;
    document.getElementById("playr2_name").innerHTML=getname ;
}
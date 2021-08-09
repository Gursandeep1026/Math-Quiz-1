function fn_login(){
    var name_1=document.getElementById("player1_name").value;
    var name_2=document.getElementById("player2_name").value;
    localStorage.setItem("player1",name_1);
    localStorage.setItem("player2",name_2);
    window.location="quiz.html";
}

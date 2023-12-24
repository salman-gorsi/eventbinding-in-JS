console.log("Start")
function handleAddNewTodo(){
    console.log("Handling Add New To Do Button");
}
console.log("B")
function doBindings(){
 //   console.log("handle bindings");
    console.log("Binding");
    var btn= document.getElementById("btnADD");
    btn.onclick= handleAddNewTodo;
}
window.onload=doBindings;
console.log("End")
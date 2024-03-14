// let todo=[];
// let req =prompt("Enter your request");
// // console.log(req);
// while(true){
//     if(req=="quit"){
//         console.log("you are quitting");
//         break;
//     }

//      if(req=="list"){
//         console.log("---------------");
//         for(let i =0;i<todo.length;i++){
//             console.log(i, todo[i]);
//         }
//         // for (task of todo){
//         //     console.log(task);
//         // }
//         console.log("---------------");
//      }else if(req=="add"){
//         let task=prompt("Enter the task you want to perform :");
//         todo.push(task);
//         console.log("task added sucessfully");

//     }else if(req=="delete"){
//        let idx= prompt('please enter the task index you want to remove ');
//        todo.splice(idx,1);
//        console.log("task removed sucessfully");
//         }else{
//             console.log("wrong request ");
//         }
//   req =prompt("Enter your request");
//     }
    
let btn=document.querySelector("#taskbutton");
let ul=document.querySelector("ul");
let inp=document.querySelector("#taskInput");

btn.addEventListener("click",function(){
    // console.log("inp.value");
    let item = document.createElement("li");
    item.innerText= inp.value;
   
    let delBtn=document.createElement("button"); 
    delBtn.innerText="delete";
    delBtn.classList.add("delete");// this adds delete button to every new list that user create
    item.appendChild(delBtn);
    
    ul.appendChild(item);
    // item.innerText= 
    inp.value="";
});


ul.addEventListener("click", function(event){
if(event.target.nodeName=="BUTTON"){
let itemList=event.target.parentElement;
itemList.remove();
// console.log(itemList);
    console.log("delete");

}
else{
    console.log("don't delete");
}
});

// let delBtns= document.querySelectorAll(".delete");
// for(delButn of delBtns ){
//     delBtn.addEventListener("click", function(){
//         let par =this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// } 

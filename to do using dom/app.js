let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ol");

btn.addEventListener("click", function()
{
    let item = document.createElement("li");
    item.innerText=inp.value;
    


    let dbtn = document.createElement("button");
    dbtn.innerText="delete";
    dbtn.classList.add("delete");

    item.appendChild(dbtn);
    ul.appendChild(item);
    inp.value="";
}

);

ul.addEventListener("click",function(event){
    if(event.target.nodeName ==="BUTTON"){
        event.stopPropagation();
        event.preventDefault();
        event.target.parentElement.remove();
    }
});

















// ul.addEventListener("click", function(event) {
//     if (event.target.nodeName === "Button") {
//         event.stopPropagation();
//         event.preventDefault();
//         event.target.parentElement.remove();
//     }
// });


// ul.addEventListener("click", function(event)
//  {
//     if (event.target.nodeName === "BUTTON")
//      {
//         event.stopPropagation(); // Prevents the click event from bubbling up to the parent elements
//         event.preventDefault(); // Prevents the default behavior of the button
//         event.target.parentElement.remove(); // Removes the parent li element of the clicked button
//     }
// });


// let dbtn =document.querySelectorAll(".delete");
// for(dbtn of dbtn)
// {
//     dbtn.addEventListener("click",function(ele)
//     {
//         ele.stopPropogation();
//         this.parentElement.remove();
//     }

// );
// }
// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ol");

// btn.addEventListener("click", function() {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let dbtn = document.createElement("button");
//     dbtn.innerText = "delete";
//     dbtn.classList.add("delete");

//     item.appendChild(dbtn);
//     ul.appendChild(item);
//     inp.value = "";
// });

// ul.addEventListener("click", function(event) {
//     if (event.target.nodeName === "BUTTON") {
//         event.stopPropagation(); // Prevents the click event from bubbling up to the parent elements
//         event.preventDefault(); // Prevents the default behavior of the button
//         event.target.parentElement.remove(); // Removes the parent li element of the clicked button
//     }
// });




let data;
 data=[
     {
  
        quote:"this quote is written in world",
        authoor:"karamveer"
    }
]
    
let section = document.querySelector("section div ul")
let li;



let searchHistory = document.querySelector("#quote")
console.log(searchHistory)
let author = document.querySelector("#author")
let inputHistory = document.querySelector(".inputHistory")
let inputHistoryDiv = document.querySelector(".inputHistory div");

document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("haja")
  let quoteValue=searchHistory.value
  let authorValue=author.value
    // quote.push(quoteValue);
    inputHistoryDiv.innerHTML += `<h4>${quoteValue}</h4>`;

    li = document.createElement("li")
    li.innerHTML=`<blockquote>${quoteValue}</blockquote>
    <span>${authorValue}</span>
    <button >Remove</button>`;
    console.log(li)
    section.appendChild(li)
    // e.currentTarget.children[0].value=""
    // e.currentTarget.children[1].value=""
    
    // data.push(quoteValue,authorValue)
    
    
})



searchHistory.addEventListener("click", () => {
    console.log("lk")
    inputHistory.classList.toggle("hidden")
})

// function clicked(){
//     console.log("clicked")
// }




// export default data;

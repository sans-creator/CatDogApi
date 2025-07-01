let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button")
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value
    // console.log(country)
    console.log("button was clicked")
    let colleges=await getColleges(country)
    // console.log(colleges)
    show(colleges)
    
})
async function getColleges(country){
    try{
        let result=await axios.get(url+country);
        return result.data

    }catch(e){
        console.log(e)
        return [];
    }
}

function show(colleges){
    let list=document.querySelector("#result")

    for(i of colleges){
        // console.log(i.name);
        let li=document.createElement("li");
        li.innerText=i.name;
        list.appendChild(li)
    }

}

let url="https://catfact.ninja/fact"
let url2="https://dog.ceo/api/breeds/image/random"


let btn=document.querySelector("button")

btn.addEventListener("click",async ()=>{
    let f=await getFacts()
    let p=document.querySelector("#result")
    p.innerText=f

})

async function getFacts() {
    try{
        let facts=await axios.get(url)
        return facts.data.fact

    }catch{
        return "not fact found"
    }

    
}
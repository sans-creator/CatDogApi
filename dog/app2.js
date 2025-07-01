let url2="https://dog.ceo/api/breeds/image/random"

let btn=document.querySelector("button")
let im=document.querySelector("#result")
btn.addEventListener("click",async ()=>{
    let image=await getImg()
    im.setAttribute("src",image)

})

async function getImg() {
    let img=await axios.get(url2)
    return img.data.message
}
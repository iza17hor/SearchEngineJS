const words = document.querySelectorAll("li")
const search = document.querySelector(".search")

const test = () => {

    for(let i = 0 ; words.length > i; i++){ 
        let products = words[i].textContent
        
        if(search.value == ""){
     
            words[i].style.display = "block"  
        }
        else if(products != search.value){

            words[i].style.display = "none"     
        }

        else if(products == search.value){
            console.log(products.charAt(0))
            console.log(search.value)
            words[i].style.display = "block"     
        }
    }

}

search.addEventListener("keyup", test)












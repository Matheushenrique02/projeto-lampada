const lampadaOn = document.querySelector('#lampadaOn')
const lampadaOf = document.querySelector('#lampadaOf')
const liga = document.querySelector('#liga')
const desliga = document.querySelector('#desliga')
const lampadaQuebra = document.querySelector('#lampadaQuebra')

liga.addEventListener("click" ,acender)
desliga.addEventListener("click",apagar)
lampadaOf.addEventListener("dblclick",quebrar)
lampadaOn.addEventListener("dblclick",quebrar)

let quebrada = false

function acender(){ 
    if(quebrada){
        alert('Não é possivel acender a lampada quebrada')
        return;
    }
    lampadaOn.style.display = 'block'
    lampadaOf.style.display = 'none'

}

function apagar(){
    if(quebrada){
        alert('Não tente desligar,a lampada quebrada')
        return;
    }
    lampadaOn.style.display = 'none'
    lampadaOf.style.display = 'block'
}

function quebrar(){
     lampadaOn.style.display = 'none'
     lampadaOf.style.display = 'none'
     lampadaQuebra.style.display='block'
     quebrada = true
     alert('A lampada quebrou!!')
     
}



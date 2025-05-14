const lampadaOn = document.querySelector('#lampadaOn')
const lampadaOf = document.querySelector('#lampadaOf')
const liga = document.querySelector('#liga')
const desliga = document.querySelector('#desliga')
const lampadaQuebra = document.querySelector('#lampadaQuebra')
const troca = document.querySelector('#troca')

liga.addEventListener("click" ,acender)
desliga.addEventListener("click",apagar)
lampadaOf.addEventListener("dblclick",quebrar)
lampadaOn.addEventListener("dblclick",quebrar)
troca.addEventListener('click',trocar)

let quebrada = false

function acender(){
    lampadaOf.style.display ='none'
    lampadaOn.style.display ='block'
    if(quebrada){
        alert('A lampada está quebrada!')
         lampadaOf.style.display ='none'
         lampadaOn.style.display ='none'
    }

}

function apagar(){
    lampadaOf.style.display ='block'
    lampadaOn.style.display ='none'
    if(quebrada){
        alert('A lampada está quebrada!')
         lampadaOf.style.display ='none'
         lampadaOn.style.display ='none'
    }


}

function quebrar(){
     quebrada = true
     lampadaOf.style.display ='none'
     lampadaOn.style.display ='none'
     lampadaQuebra.style.display ='block'
     troca.style.display = 'block'

}

function trocar(){
     quebrada = false
     troca.style.display = 'none'
     lampadaOf.style.display ='block'
     lampadaOn.style.display ='none'
     lampadaQuebra.style.display ='none'
}
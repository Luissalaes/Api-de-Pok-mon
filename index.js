
const lista = document.getElementById('lista')
const alerta = document.getElementById('alerta')



const getPokemon = async (id) =>{
    const url =  `https://pokeapi.co/api/v2/pokemon/${id}`
    const reponse = await fetch(url)
    return reponse.json() 
}

const addPokemon = async (id) =>{
    const data = await getPokemon(id)

        
    console.log(data)
    //tipo do pokemon
    const type = await data.types.map((item)=>{
      return item.type.name
    })
    
    //crio os elementos
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const p = document.createElement('p')
    const img = document.createElement('img')

    div.classList.add('card')
    h3.classList.add('h3')
    h3.classList.add('h3')
    p.classList.add('p')
    img.classList.add('img')

    //adc valores
    h3.innerHTML += data.name
    p.innerHTML = type.join(' | ')
    img.src = data.sprites.front_default



    //adc a view
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(img)

    lista.appendChild(div)


} 

     
for (let i = 1; i < 151; i++) {
    const id = i
    addPokemon(id)
}





document.querySelector('.busca').addEventListener('submit',(event)=>{
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    if(input !== ""){
        showWarning("Carregando...")

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${ encodeURL(input) }&appid=6e970309ab369df73f38c10918431f77&units=metrics&lang=pt_br`)
        let json =  await results.json();

        console.log(json)

        if (json.cod == 200) {
            showInfo(({
                name:json.name,
            }))
        }else{
            showWarning("Não encontramos essa localização...")
        }

    } else {
        
    }
})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}

function showInfo(json){

}
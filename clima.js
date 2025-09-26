document.querySelector('.busca').addEventListener('submit',(event)=>{
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    if(input !== ''){
        showWarning("Carregando...")

        let results = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${encodeURL(input)}&appid=62f1cfa0e9f235e549032d2752765265&units=metrics&lang=pt_br');
        let json = await results.json();

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
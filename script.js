async function showCountry(){

    const dados = await fetch('https://restcountries.com/v3.1/all');
    const endereco = await dados.json();
    let container = document.querySelector('.container-paises');

    function showItens(iten){
        let img = iten.flags.png
        let name = iten.name.common
        let capital = iten.capital
        let population = iten.population
        let region = iten.subregion

        container.innerHTML += `
            <div class="box-pais">
                <div class="box-container">
                    <div class="img">
                        <img id="imgCountry" src="${img}" alt="image country">
                    </div>

                    <div class="nome-pais">
                        <h2 id="nameCountry">${name}</h2>
                    </div>

                    <div class="informations capital">
                        <p>Capital</p>
                        <h3 id="capitalCountry">${capital}</h3>
                    </div>
                    <div class="informations population">
                        <p>Population</p>
                        <h3 id="populationCountry">${population}</h3>
                    </div>
                    <div class="informations region">
                        <p>Region</p>
                        <h3 id="regionCountry">${region}</h3>
                    </div>
                </div>
            </div>
        `

    }

    endereco.forEach(showItens);

}

showCountry()

async function searchCountry(){

    let countryValue = document.getElementById('country').value;
    console.log(countryValue)

    let container = document.querySelector('.container-paises');

    const dados = await fetch(`https://restcountries.com/v3.1/name/${countryValue}`);
    const endereco = await dados.json();

    let img = endereco[0]['flags']['png']
    let name = endereco['0']['name']['common']
    let capital = endereco['0']['capital']
    let population = endereco['0']['population']
    let region = endereco[0]['subregion']

    
    container.innerHTML = `
        <div class="box-pais">
            <div class="box-container">
                <div class="img">
                    <img id="imgCountry" src="${img}" alt="image country">
                </div>

                <div class="nome-pais">
                    <h2 id="nameCountry">${name}</h2>
                </div>

                <div class="informations capital">
                    <p>Capital</p>
                    <h3 id="capitalCountry">${capital}</h3>
                </div>
                <div class="informations population">
                    <p>Population</p>
                    <h3 id="populationCountry">${population}</h3>
                </div>
                <div class="informations region">
                    <p>Region</p>
                    <h3 id="regionCountry">${region}</h3>
                </div>
            </div>
        </div>
    `
    
}

function clearNameCountry(){
    document.getElementById('country').value = '';
}

let btn = document.getElementById('btnSearch');
btn.onclick = () => {
    searchCountry();
    clearNameCountry()
}

// let btnBack = document.querySelector('.btn-back');
// btn.onclick = () => {
//     showCountry();
// }


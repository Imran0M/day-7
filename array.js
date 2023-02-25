// async function api() {
//     var api_data = fetch('https://restcountries.com/v3.1/all')
//     // console.log(api_data)
//     var api_promise = await api_data
//     // console.log(api_res)
//     var api_res = api_promise.json()
//     var api_result = await api_res
//     var result = api_result
//     console.log(result)
//     var parent = document.querySelector('.userdata')
//     var display = document.createElement('p')
//     // display.style.display='block'
//     let out = result.filter(result => result.continents == "Asia" || result.population > 200000)
//     console.log(out)
//     for (let i of out) {
//         display.innerText = i.continents
//         parent.append(display)
//     }

// }
// api()

async function api(){
    let data = fetch('https://restcountries.com/v3.1/all')
    console.log(data)
    let promise = await data
    let api_response = promise.json()
    let result = await api_response
    console.log(result)

    
    let out = result.filter(result => result.continents == "Asia")
    for(let i of out){
        console.log(i.continents)
        var parent=document.querySelector('.userdata')
        final_res=out[0].continents
        parent.innerHTML =`
        <p>${final_res}</p>
        `  
    }

    let out1= result.filter(result => result.population < 200000)
    for (let i of out1){
        console.log(i.population)
        var parent=document.querySelector('.userdata')
         parent.innerHTML=`
         <p>${i.population}</p>
         `    
    }

    let out2=result.reduce(function (result,population){
        return i.populationconsole.log(out2)
    })

    let out3= result.filter(result => result.currencies.CLP.symbol)
    console.log(out3)
    
}
api()
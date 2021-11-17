// get our ranger data
const getData = async (year, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    console.log(response.data)
    return response.data
}

// Create Constants to hold DOM elements
const DOM_Elements = {
    drivers: '.driver-list',
}

// function to load data and display HTML

const loadData = async (year, round) => {
    const driverList = await getData(year, round)

    
 ;
}


// creating variable for form
const form = document.querySelector('#testDataForm')
console.log(form)

// adding event listener for submisson of form
form.addEventListener('submit',( event ) => {
    event.preventDefault()
    let year = event.path[0][0].value
    let round = event.path[0][1].value
    console.log(`This came from the query selector: ${year} ${round}`)
    response = getData(year, round)
    document.getElementById('name0').innerhtml = response.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName


})
// get our ranger data
const getData = async (year, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    return response.data
}

// Create Constants to hold DOM elements
const DOM_Elements = {
    drivers: '.driver-list',
}

// function to load data and display HTML

const loadData = async (year, round) => {
    const driverList = await getData(year, round)
    
    // document.getElementById('invisible').id = 'visible'
    
    let th = 5
    for (let i = 0; i < 7; i++){
    let first_name = driverList.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
    let last_name = driverList.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
    let full_name = first_name + " " + last_name
    let nat = driverList.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
    let man = driverList.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].constructorId
    let point = driverList.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
    let pos = driverList.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position

    document.getElementsByTagName('th')[th].innerHTML = full_name
    document.getElementsByTagName('th')[th + 1].innerHTML = pos
    document.getElementsByTagName('th')[th + 2].innerHTML = nat
    document.getElementsByTagName('th')[th + 3].innerHTML = man
    document.getElementsByTagName('th')[th + 4].innerHTML = point
    th = th + 5
    }

}

const clearData = () => {
    for (let i = 5; i <40; i++){
    console.log(i)
    document.getElementsByTagName('th')[i].innerHTML = i
    }
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
    loadData(year, round)
})

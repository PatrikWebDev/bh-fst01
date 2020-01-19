// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// a tömbök adatainak kinyerésére

// (1) egyszerű destructuring

const arr1 = ['Budapest', 'HU']
const [city, country] = arr1
console.log(city, country)

// (2) tömbelemek elhagyása
const data = ['Steve Ballmest','1970', '01', '01', 'Washington', 'DC']
//const name = data[0], yob = data[0], city = data[4]
const [name, yob,,, city,,] = data
console.log(name, yob, city)

// (3) visszatérési érték destructuringja
function details() {
    return 'Steve Ballmest;1970;01;01;Washington;DC'.split(';')
}
const ret = details()
const [name, yob] = ret
console.log(name,yob)

// (4) visszatérési érték destructuringja

const [,removed]=[1,2,3]
console.log(removed)

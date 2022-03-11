let n = -3
let m = -10
let count = 42
let mass = []

while (mass.length !== count) {
    mass.push(Math.round(Math.random() * m) + n)
}
console.log(mass)





var roadMines = [false, false, false, true, false, false, true, false, false, false]
var live = 2
var step = roadMines[0]
for (var i in roadMines) {
    step = roadMines[i]
    console.log(`танк переместился на ${parseInt(i)+1}`)
    if (step == true && live >= 2) {
        console.log(live)
        live -= 1
        console.log('танк повреждён')
    } else if (step == true && live <= 1) {

        console.log(live)
        console.log('танк уничтожен')
        break
    }
}







let array = []
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

for (let i = 0; i < 31; ++i) {
    array.push(i + 1)
}
console.log(array)
let day = 'Среда'
var indexWeek = week.indexOf(day)



for (o = 0; o < week.length; o++) {
    if (week[o] == day)
        indexWeek = o

}
console.log(indexWeek)

for (var elem of array) {

    let y = (indexWeek + elem - 1) % 7;

    console.log(`${elem} января, ${week[y]}`);
}
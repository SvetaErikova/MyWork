let password = '1234-'

if (password.length > 4 && (password.includes('-') || password.includes('_'))) {
    console.log('Пароль надёжный')
} else { console.log('Пароль недостаточно надёжный') }


let name = 'KiRa'
let sureName = 'MirOnOvA'
var nameLower = name.substring(1).toLowerCase()
var nameUpper = name.substring(0, 1).toUpperCase()
var nameResult = nameUpper + nameLower
console.log(nameResult)

var sureNameLower = sureName.substring(1).toLowerCase()
var sureNameUpper = sureName.substring(0, 1).toUpperCase()
var sureNameResult = sureNameUpper + sureNameLower
console.log(sureNameResult)


var x = ''
    //if (name == nameResult) { console.log('Имя осталось без изменений') } else { console.log('Имя было преобразовано') }

x = (name == nameResult) ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');

var y = ''
    //if (sureName == sureNameResult) { console.log('Имя осталось без изменений') } else { console.log('Имя было преобразовано') }
y = (sureName == sureNameResult) ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');
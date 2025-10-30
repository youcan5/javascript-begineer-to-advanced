const newDate = new Date();

console.log(newDate,"Date is ")

console.log(newDate.toString(),"To String")
console.log(Date.now())


// MILLISECONDS STARTS FROM 1st January 1970 ok 


// Date objects are created with the new Date() constructor.

// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)


const dayTest = new Date(2028,11,10,5,10,15,10)

console.log(dayTest.toLocaleString())




console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getHours())
console.log(newDate.getMilliseconds())
console.log(newDate.getSeconds())
console.log(newDate.getUTCDate())
const carIn = "20/01/2021 10:01:00"
const carOut = "23/01/2022 14:34:20"





function convertToMS(time){
    const [ date, hours] = time.split(' ')
    const [ day, month , year ] = date.split('/')
    const [ hour, minutes , seconds ] = hours.split(':')

     const newDate = new Date(year , month -1 , day, hour, minutes, seconds)
     
    return  newDate.getTime()
}

const carInMS = convertToMS(carIn)
const carOutMS =convertToMS(carOut)


const stayedTimeInSeconds =  (carOutMS - carInMS)/1000

// formatar meu tempo de estadia 

const years = Math.floor(stayedTimeInSeconds / (12*30*24*60*60)) // dia horas minutos
const months = Math.floor(stayedTimeInSeconds / (30*24*60*60)) // dia horas minutos
const days = Math.floor(stayedTimeInSeconds / (24*60*60)) // dia horas minutos
const hours = Math.floor(stayedTimeInSeconds / (60*60)) % 24 //horas minutos
const minutes = Math.floor(stayedTimeInSeconds / 60) % 60 


console.log( time={year:years, mes:months, dia:days,horas:hours,minutos:minutes})

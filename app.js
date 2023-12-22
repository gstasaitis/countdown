const daysElement = document.querySelector(".days .number")
const hoursElement = document.querySelector(".hours .number")
const minutesElement = document.querySelector(".minutes .number")
const secondsElement = document.querySelector(".seconds .number")

const newYears  = "1 Jan 2024"

const countdown = () => {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    const totalSecondsLeft = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSecondsLeft / 3600 / 24) % 365
    daysElement.innerText = formatTime(days)

    const hours = Math.floor(totalSecondsLeft / 3600) % 24
    hoursElement.innerText = formatTime(hours)

    const minutes = Math.floor(totalSecondsLeft / 60) % 60
    minutesElement.innerText = formatTime(minutes)

    const seconds = Math.floor(totalSecondsLeft) % 60
    secondsElement.innerText = formatTime(seconds)
}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
}

setInterval(countdown, 1000)

// initial call
countdown()

//initial animation
const countdownContainer = document.querySelector(".countdown-container")
const website = document.querySelector(".website")

setTimeout(() => {
    website.classList.add("show")
}, 500)

setTimeout(() => {
    countdownContainer.style.opacity = 1
}, 1000)

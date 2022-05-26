/**
 * This function receives the delay parameter in miliseconds
 * when the function is executed it will wait for the entered
 * time before continuing to execute the code.
 * This function only can be used in async functions.
 * @param {number} delay 
 * @returns 
 */
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
/**
 * Shows the value spent of the parameter day
 * @param {string} day 
 */
function barMouseEnter(day) {
    let valueSpent = document.getElementsByClassName(day)[0].getElementsByClassName('spent')[0]
    valueSpent.style.display = "block"
}
/**
 * Hide the value spent of the paremeter day
 * @param {string} day 
 */
function barMouseLeave(day) {
    let valueSpent = document.getElementsByClassName(day)[0].getElementsByClassName('spent')[0]
    valueSpent.style.display = "none"
}
/**
 * Collect the chart data from data.json and display it
 */
function getDataChart() {
    fetch("data.json")
        .then(response => response.json())
        .then(
            async function (data) {
                let highestSpendingDay = ''
                let highestValue = 0
                let currentDay = new Date().getDay()
                for (let i = 0; i < data.length; i++) {
                    for (let i = 0; i < data.length; i++) {
                        document.getElementsByClassName(data[i].day)[0].getElementsByClassName('spent')[0].innerHTML = `$${data[i].amount}`
                        if (data[i].amount > highestValue) {
                            highestValue = data[i].amount
                            highestSpendingDay = data[i].day
                        }
                    }
                    let bar = document.getElementsByClassName(data[i].day)[0].getElementsByClassName('bar')[0]
                    if (data[i].id == currentDay) {
                        console.log(data[i])
                        console.log(currentDay)
                        bar.style.backgroundColor = "var(--cyan)"
                    }
                    // -15 percent is for show the value spent correctly
                    bar.style.height = `${data[i].amount * 100 / highestValue - 15}%`

                    await sleep(200)
                }
            }
        );
}
getDataChart()


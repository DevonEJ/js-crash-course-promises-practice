// Example using only Promise without async-await...

function makeRequest(webpage) {
    return new Promise((resolve, reject) => {
        console.log(`Sending your request to: ${webpage}`)
        if (webpage == 'Best Website Ever') {
            resolve(`You have logged into: ${webpage}`)
        }
        else {
            reject(`You picked a rubbish website. Try again.`)
        }
    })
}


function formatRequest(message) {
    return new Promise((resolve, reject) => {
        console.log(`About to format your request...`)
        resolve(`Congratulations! Here's your message; ${message}`)
    })
}


makeRequest('Best Website Ever').then(response => {
    console.log(`Processing Request...`)
    return formatRequest(response)
}).then(formattedRequest => {
    console.log(formattedRequest)
}).catch(err => {
    console.log(`Oops: ${err}`)
})
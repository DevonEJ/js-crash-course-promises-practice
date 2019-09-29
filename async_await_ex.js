// Example using only Promise with async-await...

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


// Call these functions with an async function - using await to force functions to be executed synchronously
async function processAllWithAsync(webpage) {
    const response = await makeRequest(webpage)
    console.log(`Processing Request...`)
    const formattedRequest = await formatRequest(response)
    console.log(formattedRequest)
}

processAllWithAsync(`Best Website Ever`)
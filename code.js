let isRainy = false;

function checkWeather() {
    return new Promise(function(resolve, reject) {
        if (isRainy) {
            resolve("It's raining. Do you have ambrela?");
        } else {
            reject("It's not raining.");
        }
    })
}

checkWeather()
.then(function(resolvedValue) {
    console.log(resolvedValue);
})
.catch(function(error) {
    console.log(error);
})
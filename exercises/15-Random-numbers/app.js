/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    //var randomNumber = Math.random();
    return randomNumber;
}


console.log(getRandomInt());
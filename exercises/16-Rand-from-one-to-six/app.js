function getRandomInt()
{
    var randomNumber = Math.floor((Math.random() * 6) + 1);
	//var randomNumber = Math.random();
	return randomNumber;
}
console.log(getRandomInt());
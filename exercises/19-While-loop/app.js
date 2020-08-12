
//fix this function:
function startCounting()
{
	var counter = 100;
	while(counter <= 100)
	{
        if(counter < 1) 
        {
            counter = 0;
            console.log(counter);
            return counter;
        }
		console.log(counter);
        counter --;

	}
	//return counter;
}

startCounting();
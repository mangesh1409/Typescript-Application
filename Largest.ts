function largest(no1:number,no2:number,no3:number):number
{
    if((no1>no2)&&(no1>no3))
    {
        return no1;
    }
    if((no2>no1)&&(no2>no3))
    {
        return no2;
    }
    else
    {
        return no3;
    }    
}

console.log("Largest number is "+largest(34,32,32));
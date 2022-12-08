let starter = document.getElementById("starter");

//set rest of image in array
let heartArray = ["Assets/images/Asset19 Small.jpeg","Assets/images/Asset20 Small.jpeg", "Assets/images/Asset21 Small.jpeg", "Assets/images/Asset22 Small.jpeg","Assets/images/Asset23 Small.jpeg" ,"Assets/images/Asset24 Small.jpeg","Assets/images/Asset25 Small.jpeg" ,"Assets/images/Asset26 Small.jpeg","Assets/images/Asset27 Small.jpeg"];

//set counter
let count = 0;
function animate() {
    //select initial image
    starter.src = heartArray[count]; 
    //Increment through array
    count++;
    //increase count through full length of array
    if (heartArray.length == count)
    {
        //reset and start over

        count = 0;
    }
 
}

setInterval(animate,100)


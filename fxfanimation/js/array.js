let starter = document.getElementById("starter");

//set rest of image in array
let heartArray = ["Assets/images/Asset20.png", "Assets/images/Asset21.png", "Assets/images/Asset22.png", "Assets/images/Asset23.png","Assets/images/Asset24.png", "Assets/images/Asset25.png","Assets/images/Asset26.png","Assets/images/Asset27.png"];

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


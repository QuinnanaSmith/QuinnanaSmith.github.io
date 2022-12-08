let starter = document.getElementById("starter");

//set rest of image in array
let heartArray = ["assets/images/Asset20.png", "assets/images/Asset21.png", "assets/images/Asset22.png", "assets/images/Asset23.png","assets/images/Asset24.png", "assets/images/Asset25.png","assets/images/Asset26.png","assets/images/Asset27.png"];

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


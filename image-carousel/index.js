var images = [
    "/udata/DErqVR5q0Pv/longexposurewaterfall1.jpg",
    "/udata/MLE2D8Lzv6X/route66.jpg",
    "/udata/nPaBd6Mq1Ly/archesdrive.jpg",
    "/udata/1krmXeav6GB/army2.jpg",
    "/udata/1klaZD0vxjz/redwoodupwards2.jpg",
    "/udata/4WQvGrR56Qq/solduc2.jpg",
    "/udata/1koZJB2vq8k/truck4scale.jpg"
  ];

  var currentIndex = 0; 

  var incrementIndex = function(){
   
    if(currentIndex==images.length){
        currentIndex=0;
        return currentIndex;
    }
    currentIndex++;
    return currentIndex;

   
    //write your code here
  }
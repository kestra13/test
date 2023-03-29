import React from 'react';

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './patients/patient1.png';

imgArray[1] = new Image();
imgArray[1].src = './patients/patient2.png';

imgArray[2] = new Image();
imgArray[2].src = './patients/patient3.png';

imgArray[3] = new Image();
imgArray[3].src = './patients/patient4.png';

imgArray[4] = new Image();
imgArray[4].src = './patients/patient5.png';

imgArray[5] = new Image();
imgArray[5].src = './patients/patient6.png';

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}

const patientImages = () => {
  return (
    <div>patientImages</div>
  )
}

export default patientImages
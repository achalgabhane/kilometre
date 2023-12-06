// covert kms to miles using js
// 1 kilometer = 0.621371
// miles = kilometers * factor

function convert(){
    var kms = document.getElementById('data').value;
    //alert(kms);
    const factor = 0.621371;
    var miles = kms * factor;
   // alert(miles);
  // document.getElementById('res').innerText =`${miles} miles`;
  document.getElementById('res').innerText = miles +'Miles';
}
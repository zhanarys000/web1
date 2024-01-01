'use strict';

var weightSlider = document.getElementById("myWeight");
var weightOutput = document.getElementById("inputWeight");
var heightSlider = document.getElementById("myHeight");
var heightOutput = document.getElementById("inputHeight");


weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;


weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
};

heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
};


function updateWeightSliderValue(newVal) {
  weightSlider.value = newVal;
}


function updateHeightSliderValue(newVal) {
  heightSlider.value = newVal;
}


weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);

function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}

function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}


function calculateBmi() {
  var weight = document.bmiForm.realweight.value;
  var height = (document.bmiForm.realheight.value) / 100;
  var realBmi = weight / Math.pow(height, 2);
  var realBmiOutput = document.getElementById("yourbmi");
  var messageOutput = document.getElementById("evaluationMessage");
  var roundedBmi = realBmi.toFixed(1);
  messageOutput.innerHTML = ""; 
  realBmiOutput.innerHTML = " " + roundedBmi; 

 
  if (roundedBmi > 26) {
    messageOutput.innerHTML = "YOU'RE OVERWEIGHT!";
  } else {
    
  }

 
  console.log('Weight: ' + weight + " kg");
  console.log('Height: ' + height + " m");
  console.log('BMI: ' + realBmi);
}

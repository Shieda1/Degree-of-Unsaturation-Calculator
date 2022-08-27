// https://www.omnicalculator.com/chemistry/degree-of-unsaturation#degree-of-unsaturation-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const degreeofunsaturationRadio = document.getElementById('degreeofunsaturationRadio');
const numberofcarbonatomsRadio = document.getElementById('numberofcarbonatomsRadio');
const numberofhydrogenatomsRadio = document.getElementById('numberofhydrogenatomsRadio');
const numberofnitrogenatomsRadio = document.getElementById('numberofnitrogenatomsRadio');
const numberofhalogensatomsRadio = document.getElementById('numberofhalogensatomsRadio');

let degreeofunsaturation;
let numberofcarbonatoms = v1;
let numberofhydrogenatoms = v2;
let numberofnitrogenatoms = v3;
let numberofhalogensatoms = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

degreeofunsaturationRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of carbon atoms';
  variable2.textContent = 'Number of hydrogen atoms';
  variable3.textContent = 'Number of nitrogen atoms';
  variable4.textContent = 'Number of halogens atoms';
  numberofcarbonatoms = v1;
  numberofhydrogenatoms = v2;
  numberofnitrogenatoms = v3;
  numberofhalogensatoms = v4;
  result.textContent = '';
});

numberofcarbonatomsRadio.addEventListener('click', function() {
  variable1.textContent = 'Degree of unsaturation';
  variable2.textContent = 'Number of hydrogen atoms';
  variable3.textContent = 'Number of nitrogen atoms';
  variable4.textContent = 'Number of halogens atoms';
  degreeofunsaturation = v1;
  numberofhydrogenatoms = v2;
  numberofnitrogenatoms = v3;
  numberofhalogensatoms = v4;
  result.textContent = '';
});

numberofhydrogenatomsRadio.addEventListener('click', function() {
  variable1.textContent = 'Degree of unsaturation';
  variable2.textContent = 'Number of carbon atoms';
  variable3.textContent = 'Number of nitrogen atoms';
  variable4.textContent = 'Number of halogens atoms';
  degreeofunsaturation = v1;
  numberofcarbonatoms = v2;
  numberofnitrogenatoms = v3;
  numberofhalogensatoms = v4;
  result.textContent = '';
});

numberofnitrogenatomsRadio.addEventListener('click', function() {
  variable1.textContent = 'Degree of unsaturation';
  variable2.textContent = 'Number of carbon atoms';
  variable3.textContent = 'Number of hydrogen atoms';
  variable4.textContent = 'Number of halogens atoms';
  degreeofunsaturation = v1;
  numberofcarbonatoms = v2;
  numberofhydrogenatoms = v3;
  numberofhalogensatoms = v4;
  result.textContent = '';
});

numberofhalogensatomsRadio.addEventListener('click', function() {
  variable1.textContent = 'Degree of unsaturation';
  variable2.textContent = 'Number of carbon atoms';
  variable3.textContent = 'Number of hydrogen atoms';
  variable4.textContent = 'Number of nitrogen atoms';
  degreeofunsaturation = v1;
  numberofcarbonatoms = v2;
  numberofhydrogenatoms = v3;
  numberofnitrogenatoms = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(degreeofunsaturationRadio.checked)
    result.textContent = `Degree of unsaturation = ${computeDegreeofunsaturation().toFixed(2)}`;

  else if(numberofcarbonatomsRadio.checked)
    result.textContent = `Number of carbon atoms = ${computeNumberofcarbonatoms().toFixed(2)}`;

  else if(numberofhydrogenatomsRadio.checked)
    result.textContent = `Number of hydrogen atoms = ${computeNumberofhydrogenatoms().toFixed(2)}`;

  else if(numberofnitrogenatomsRadio.checked)
    result.textContent = `Number of nitrogen atoms = ${computeNumberofnitrogenatoms().toFixed(2)}`;

  else if(numberofhalogensatomsRadio.checked)
    result.textContent = `Number of halogens atoms = ${computeNumberofhalogensatoms().toFixed(2)}`;
})

// calculation

function computeDegreeofunsaturation() {
  return 0.5 * (2 + 2 * Number(numberofcarbonatoms.value) - Number(numberofhydrogenatoms.value) + Number(numberofnitrogenatoms.value) - Number(numberofhalogensatoms.value));
}

function computeNumberofcarbonatoms() {
  return (Number(degreeofunsaturation.value) * 2 - 2 + Number(numberofhydrogenatoms.value) - Number(numberofnitrogenatoms.value) + Number(numberofhalogensatoms.value)) / 2;
}

function computeNumberofhydrogenatoms() {
  return 2 + 2 * Number(numberofcarbonatoms.value) - 2 * Number(degreeofunsaturation.value) + Number(numberofnitrogenatoms.value) - Number(numberofhalogensatoms.value);
}

function computeNumberofnitrogenatoms() {
  return Number(degreeofunsaturation.value) * 2 - 2 - 2 * Number(numberofcarbonatoms.value) + Number(numberofhydrogenatoms.value) + Number(numberofhalogensatoms.value);
}

function computeNumberofhalogensatoms() {
  return 2 + 2 * Number(numberofcarbonatoms.value) - Number(numberofhydrogenatoms.value) + Number(numberofnitrogenatoms.value) - 2 * Number(degreeofunsaturation.value);
}
// function: to get text from input field
function getTextFromInputField(id){
    const value = document.getElementById(id).innerText;
    const valueInNumber = parseFloat(value);
    return valueInNumber;
}

// function: to get value from input field
function getValueFromInputField(id){
    const value = document.getElementById(id).value;
    const valueInNumber = parseFloat(value);
    return valueInNumber;
}

// function: to set value to a field
function setValue(id, updatedData){
    document.getElementById(id).innerText = updatedData;
}

// function: to remove disable property from input field
function active(id1, id2){
    document.getElementById(id1).removeAttribute('disabled');
    document.getElementById(id2).removeAttribute('disabled');
}

// function: to update formula text by input field value
function updateFormulaText(formulaTextFieldId1, inputFieldId1, formulaTextFieldId2, inputFieldId2){
    const inputField1 = getValueFromInputField(inputFieldId1);
    setValue(formulaTextFieldId1, inputField1);
    const inputField2 = getValueFromInputField(inputFieldId2);
    setValue(formulaTextFieldId2, inputField2);
}

// function: to calculate the area for triangle, rhombus or pentagon
function areaCalculator1(input1, input2){
    const inputValue1 = getValueFromInputField(input1);
    const inputValue2 = getValueFromInputField(input2);
    const areaResult = parseFloat(0.5 * inputValue1 * inputValue2).toFixed(2);

    // data validation
    if(isNaN(inputValue1) || isNaN(inputValue2)){
        alert('You can only input in number format.')
    }
    else if(inputValue1 <= 0 || inputValue2 <= 0){
        alert('Negative values are not allowed! You should input more than 0 here.')
    }
    else{
        return areaResult;
    }
}

// function: to calculate the area for rectangle or parallelogram
function areaCalculator2(input1, input2){
    const inputValue1 = getValueFromInputField(input1);
    const inputValue2 = getValueFromInputField(input2);
    const areaResult = parseFloat(inputValue1 * inputValue2).toFixed(2);
    
    // data validation
    if(isNaN(inputValue1) || isNaN(inputValue2)){
        alert('You can only input in number format.')
    }
    else if(inputValue1 <= 0 || inputValue2 <= 0){
        alert('Negative values are not allowed! You should input more than 0 here.')
    }
    else{
        return areaResult;
    }
}

// function: to calculate the area for rectangle or parallelogram
function areaCalculator3(input1, input2){
    const inputValue1 = getValueFromInputField(input1);
    const inputValue2 = getValueFromInputField(input2);
    const pie = Math.PI.toFixed(2);
    const areaResult = parseFloat(pie * inputValue1 * inputValue2).toFixed(2);
    
    // data validation
    if(isNaN(inputValue1) || isNaN(inputValue2)){
        alert('You can only input in number format.')
    }
    else if(inputValue1 <= 0 || inputValue2 <= 0){
        alert('Negative values are not allowed! You should input more than 0 here.')
    }
    else{
        return areaResult;
    }
}



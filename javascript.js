function transform(){
    //Text Box
    let inputField = document.querySelector("#inputField");
    //Output After Clicking Submit
    let message = document.querySelector("#sentence");
    //String in Text Box
    let inputSentence = inputField.value;
    //Regex to Remove WhiteSpace
    let wsRegex = /\s/g;
    
    //Apply Function to Reverse String
    let reversed = reverseString(inputSentence)
    //Remove WhiteSpace apply Regex
    let removedWhiteSpace = reversed.replace(wsRegex, "");

    //Show Result
    message.innerHTML = removedWhiteSpace;
}

//Function to Reverse String
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

//Reverse Function Test (Disregard)
function reverse(){
    let inputField = document.querySelector("#inputField");
    let message = document.querySelector("#sentence");
    let inputSentence = inputField.value;

    let reversed = reverseString(inputSentence);
    message.innerHTML = reversed;
}


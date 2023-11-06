// Whale talk - translate a phrase to make it sound like a wahle talking


function getUserInput () {

    let userInput = prompt("Enter phase to be translated into whale talk...");
    userInput = userInput.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let resultArray = [];

    for (let index = 0; index < userInput.length; index++) {

        for (let j = 0; j < vowels.length; j++) {

            if (vowels[j] === userInput.substring(index, index+1)) {
                
                resultArray.push(vowels[j]);

                if (userInput.substring(index, index+1)==='u' ||
                userInput.substring(index, index+1)==='e') {
                    resultArray.push(vowels[j]);
                }           
            }
                   
        }
        
    }

    let text = resultArray.join('');
    console.log(text.toUpperCase());
}



function translateWhale() {

    getUserInput();
    
    }

translateWhale();

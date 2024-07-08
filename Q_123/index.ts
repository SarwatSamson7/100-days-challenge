//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

//Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.

function logUntillVowel(str:string):void{
    const vowels ="aeiouAEIOU";
    for (const char of str){
        if (vowels.includes(char)){
            console.log(`First vowel found : ${char}`)
        break;
        }
        console.log(char); // logs each character untill vowel is encountered
    }
    }

logUntillVowel("syhgturj"); // logs untill "u" is found"
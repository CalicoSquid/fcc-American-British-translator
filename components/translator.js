const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    // American to British translator
    translateToBritish(text) {  
        let addPunctuation = false;
        let lastChar = text.charAt(text.length - 1);
        let changedWords = []

        if (/[.!?,;:%$*]/.test(lastChar)) {
            text = text.slice(0, -1);
            addPunctuation = true
        }
        //text = text.split(' ')
        let newText = text.toLowerCase()
        text = text.split(' ')
        newText = newText.split(' ');
       
        // Maps through array of input words
        newText
        .map((item, index) => {
            let spelling = americanToBritishSpelling[item]
            let word = americanOnly[item]
            let titles = americanToBritishTitles[item.toLowerCase()]
            let twoWordArray = []
            let keys = Object.keys(americanOnly)
            // Sets an array of any phrases that have more that one word in them and pushes them to an array as a string
            let moreThanOne = keys
            .filter(key => { return key.indexOf(' ') >= 0})
            
            moreThanOne.map(item => twoWordArray.push(item.split(' ')))
            //Check if item is a number and replace the ":" with "." if necessary
            if (!isNaN(parseInt(item))) {
                if (item.includes(':')) {
                    let replaceTime = item.replace(':','.')
                    text.splice(index, 1, replaceTime)
                    changedWords.push(replaceTime)
                }   
            }

            // Replace any phrase (more than one word) with its translation
            twoWordArray.map((data, i) => {
                
                if (data[0] === item.toLowerCase()) {

                    let wordIndex = moreThanOne[i]
                    let britishWord = americanOnly[wordIndex]
 
                    if (britishWord) {
                        let check = text
                        .slice(index, (index + data.length))
                        .join(' ')
                        .toLowerCase()
   
                        if (check === data.join(' ')) {
                            text.splice(index, data.length, britishWord)
                            newText.splice(index, data.length, britishWord)
                            changedWords.push(britishWord)
                        } 
                    }
                }
            })
            // Check and replace any single word in american-only object
            if (word) {
                text.splice(index, 1, word)
                changedWords.push(word)
            }
            // Check and replace any single word in american-to-british-spelling object
            if (spelling) {
                text.splice(index, 1, spelling)
                changedWords.push(spelling)
            }
            // Check and replace any single word in american-to-british-titles object
            if(titles) {
                let title = titles
                .charAt(0)
                .toUpperCase()
                + titles.slice(1)

                text.splice(index, 1, title)
                changedWords.push(title)

            }
        })

        text = text.join(' ');

        if (addPunctuation) text = text + lastChar;
        
        // Return translation as string
        return [text, changedWords];
    }

    translateToAmerican(text) {  
        let addPunctuation = false;
        let changedWords = [];

        let lastChar = text.charAt(text.length - 1);
        if (/[.!?,;:%$*]/.test(lastChar)) {
            text = text.slice(0, -1);
            addPunctuation = true;
        }

        let newText = text.toLowerCase().split(' ');
        text = text.split(' ');
        console.log(text)
        // Maps through array of input words
        newText
        .map((item, index) => {
            let word = britishOnly[item];
            
            let titles = Object
            .keys(americanToBritishTitles)
            .find(key => americanToBritishTitles[key] === item.toLowerCase());
            let spelling = Object
            .keys(americanToBritishSpelling)
            .find(key => americanToBritishSpelling[key] === item);
            
            let twoWordArray = [];
            let keys = Object.keys(britishOnly);
            // Sets an array of any phrases that have more that one word in them and pushes them to an array as a string
            let moreThanOne = keys.filter(key => { return key.indexOf(' ') >= 0});
            moreThanOne.map(item => twoWordArray.push(item.split(' ')));

            //Check if item is a number and replace the ":" with "." if necessary
            if (!isNaN(parseInt(item))) {
                if (item.includes('.')) {
                    let replaceTime = item.replace('.',':');
                    text.splice(index, 1, replaceTime);
                    changedWords.push(replaceTime);
                }   
            }
            // Replace any phrase (more than one word) with its translation
            twoWordArray.map((data, i) => {
                if (data[0] === item) {
                    let wordIndex = moreThanOne[i];
                    
                    let americanWord = britishOnly[wordIndex];

                    if (americanWord) {
                        let check = text
                        .slice(index, index + 2)
                        .join(' ');

                        if (check === data.join(' ')) {
                            text.splice(index, 2, americanWord);
                            newText.splice(index, data.length, americanWord);
                            changedWords.push(americanWord);
                        } 
                    }
                }
            })
            // Check and replace any single word in british-only object
            if (word) {
                text.splice(index, 1, word);
                changedWords.push(word);
            }
           // Check and replace any single word in american-to-british-spelling object
            if(spelling) {
                text.splice(index, 1, spelling);
                changedWords.push(spelling);
            }     
            // Check and replace any single word in american-to-british-titles object
            if(titles) {
                let title = titles
                .charAt(0)
                .toUpperCase()
                + titles.slice(1)

                text.splice(index, 1, title);
                changedWords.push(title);
            }
        })

        text = text.join(' ');

        if (addPunctuation) text = text + lastChar;
   
        // Return translation as an array with the list of translated words...
        return [text, changedWords];
    }
}

module.exports = Translator;
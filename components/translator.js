const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    // American to British translator
    translateToBritish(text) {
        
        text = text.split(' ')
        // Maps through array of input words
        text
        .map((item, index) => {
            let spelling = americanToBritishSpelling[item]
            let word = americanOnly[item]
            let titles = americanToBritishTitles[item.toLowerCase()]
            let twoWordArray = []
            let keys = Object.keys(americanOnly)
            // Sets an array of any phrases that have more that one word in them and pushes them to an array as a string
            let moreThanOne = keys
            .filter(key => key.indexOf(' ') >= 0)
            .map(item => twoWordArray.push(item.split(' ')))

            if (!isNaN(parseInt(item))) {
                if (item.includes(':')) {
                    let replaceTime = item.replace(':','.')
                    text.splice(index, 1, '<span class="highlight">' + replaceTime + '</span>')
                }   
            }

            twoWordArray.map((data, i) => {
                if (data[0] === item) {
                    let wordIndex = moreThanOne[i]
                    let textIndex = text.indexOf(data[0])

                    if (americanOnly[wordIndex] != undefined) {
                        let check = text
                        .slice(textIndex, textIndex + 2)
                        .join(' ');

                        if (check === data.join(' ')) {
                            text.splice(index, 2, '<span class="highlight">' + americanOnly[wordIndex] + '</span>')
                        } 
                    }
                }
            })

            if (word != undefined) {
                text.splice(index, 1, '<span class="highlight">' + word + '</span>')
            }
            if (spelling != undefined) {
                text.splice(index, 1, '<span class="highlight">' + spelling + '</span>')
            }
            if (titles != undefined) {
                let x = titles.split('');
                x[0] = x[0].toUpperCase()
                text.splice(index, 1, '<span class="highlight">' + x.join('') + '</span>')
            }
        })

        return text.join(' ')
    }

    translateToAmerican(text) {
        
        text = text.split(' ')
        text
        .map((item, index) => {
            let word = britishOnly[item]

            let titles = Object
            .keys(americanToBritishTitles)
            .find(key => americanToBritishTitles[key] === item.toLowerCase());
            let spelling = Object
            .keys(americanToBritishSpelling)
            .find(key => americanToBritishSpelling[key] === item);
            
            let twoWordArray = []
            let keys = Object.keys(britishOnly)
            // Sets an array of any phrases that have more that one word in them and pushes them to an array as a string
            let moreThanOne = keys
            .filter(key => key.indexOf(' ') >= 0)
            .map(item => twoWordArray.push(item.split(' ')))

            if (!isNaN(parseInt(item))) {
                if (item.includes('.')) {
                    let replaceTime = item.replace('.',':')
                    text.splice(index, 1, '<span class="highlight">' + replaceTime + '</span>')
                }   
            }

            twoWordArray.map((data, i) => {
                if (data[0] === item) {
                    let wordIndex = moreThanOne[i]
                    let textIndex = text.indexOf(data[0])

                    if (britishOnly[wordIndex] != undefined) {
                        let check = text
                        .slice(textIndex, textIndex + 2)
                        .join(' ');

                        if (check === data.join(' ')) {
                            text.splice(index, 2, '<span class="highlight">' + britishOnly[wordIndex] + '</span>')
                        } 
                    }
                }
            })

            if (word != undefined) {
                text.splice(index, 1, '<span class="highlight">' + word + '</span>')
            }
           
            if(spelling != undefined) {
                text.splice(index, 1, '<span class="highlight">' + spelling + '</span>')
            }     

            if(titles != undefined) {
                let x = titles.split('');
                x[0] = x[0].toUpperCase()
                text.splice(index, 1, '<span class="highlight">' + x.join('') + '</span>')
            }
        })

        return text.join(' ')
    }
}

module.exports = Translator;
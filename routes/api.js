'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let locale = req.body.locale;
      let text = req.body.text;
      let translation;
      let changedWords = [];

     
      // If no text is entered
      if (text === '') {
        return res.json({ error: 'No text to translate' })
      }
       // If one or more field is missing
      if (!text || !locale) {
        return res.json({ error: 'Required field(s) missing' })
      }
      // If incorrect locale is entered
      if ( locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' })
      }

      // Call function depending on entered locale
      if (locale === 'american-to-british') {
        translation = translator.translateToBritish(text)[0];
        changedWords = translator.translateToBritish(text)[1].join(' ').split(' ')
      } else {
        translation = translator.translateToAmerican(text)[0];
        changedWords = translator.translateToAmerican(text)[1].join(' ').split(' ');
      }
      console.log(translation)
      console.log(changedWords)
      

     // If no translation is needed (If returned value is equal to entered value)
      if (translation === text) {
        translation = 'Everything looks good to me!'
      } else {
        /*changedWords.map(word => {
          if (translation.includes(word)) {
            translation = translation.replace(word, `<span class="highlight">${word}</span>`)
          }
        })*/
        translation = translation.split(' ').map(word => {
          if (changedWords.includes(word)) {
            word = `<span class="highlight">${word}</span>`
          }
          return word
        }).join(' ')
      }
      console.log(translation)
      // Return json object
      return res.json({text, translation})
    });
};

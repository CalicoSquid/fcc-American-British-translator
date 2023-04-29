'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let locale = req.body.locale;
      let text = req.body.text;
      let translated;
      // If no text is entered
      if (text === '') {
        return res.json({ error: 'No text to translate' })
      }
      // If incorrect locale is entered
      if ( locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' })
      }
      // If one or more field is missing
     if (!text || !locale) {
       return res.json({ error: 'Required field(s) missing' })
     }
      // Call function depending on entered locale
      locale === 'american-to-british' ?
      translated = translator.translateToBritish(text) :
      translated = translator.translateToAmerican(text);
     // If no translation is needed (If returned value is equal to entered value)
      if (translated === text) {
        translated = 'Everything looks good to me!'
      }
      // Return json object
      return res.json({text: text, translation: translated})
    });
};

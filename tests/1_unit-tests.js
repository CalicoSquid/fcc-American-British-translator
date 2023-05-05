const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translate = new Translator;

suite('Unit Tests', () => {
    suite('Translate Tests', () => {
        //Translate Mangoes are my favorite fruit. to British English
        test('Translate Mangoes are my favorite fruit. to British English', done => {
            let text = 'Mangoes are my favorite fruit.'
            assert.equal(translate.translateToBritish(text)[0], 'Mangoes are my favourite fruit.')
            done();
        })
        //Translate I ate yogurt for breakfast. to British English
        test('Translate I ate yogurt for breakfast.', done => {
            let text = 'I ate yogurt for breakfast.'
            assert.equal(translate.translateToBritish(text)[0], 'I ate yoghurt for breakfast.')
            done();
        })
        //Translate We had a party at my friend's condo. to British English
        test("We had a party at my friend's condo.", done => {
            let text = "We had a party at my friend's condo."
            assert.equal(translate.translateToBritish(text)[0], "We had a party at my friend's flat.")
            done();
        })
        //Translate Can you toss this in the trashcan for me? to British English
        test("Translate Can you toss this in the trashcan for me? to British English", done => {
            let text = "Can you toss this in the trashcan for me?"
            assert.equal(translate.translateToBritish(text)[0], 'Can you toss this in the bin for me?')
            done();
        })
        //Translate The parking lot was full. to British English
        test("Translate The parking lot was full. to British English", done => {
            let text = "The parking lot was full."
            assert.equal(translate.translateToBritish(text)[0], 'The car park was full.')
            done();
        })
        //Translate Like a high tech Rube Goldberg machine. to British English
        test("Translate Like a high tech Rube Goldberg machine. to British English", done => {
            let text = "Like a high tech Rube Goldberg machine."
            assert.equal(translate.translateToBritish(text)[0], 'Like a high tech Heath Robinson device.')
            done();
        })
        //Translate To play hooky means to skip class or work. to British English
        test("Translate To play hooky means to skip class or work. to British English", done => {
            let text = "To play hooky means to skip class or work."
            assert.equal(translate.translateToBritish(text)[0], 'To bunk off means to skip class or work.')
            done();
        })
        //Translate No Mr. Bond, I expect you to die. to British English
        test("Translate No Mr. Bond, I expect you to die. to British English", done => {
            let text = "No Mr. Bond, I expect you to die."
            assert.equal(translate.translateToBritish(text)[0], 'No Mr Bond, I expect you to die.')
            done();
        })
        //Translate Dr. Grosh will see you now. to British English
        test("Translate Dr. Grosh will see you now. to British English", done => {
            let text = "Dr. Grosh will see you now."
            assert.equal(translate.translateToBritish(text)[0], 'Dr Grosh will see you now.')
            done();
        })
        //Translate Lunch is at 12:15 today. to British English
        test("Translate Lunch is at 12:15 today. to British English", done => {
            let text = "Lunch is at 12:15 today."
            assert.equal(translate.translateToBritish(text)[0], 'Lunch is at 12.15 today.')
            done();
        })
        //Translate We watched the footie match for a while. to American English
        test("Translate We watched the footie match for a while. to American English", done => {
            let text = "We watched the footie match for a while."
            assert.equal(translate.translateToAmerican(text)[0], 'We watched the soccer match for a while.')
            done();
        })
        //Translate Paracetamol takes up to an hour to work. to American English
        test("Translate Paracetamol takes up to an hour to work. to American English", done => {
            let text = "Paracetamol takes up to an hour to work."
            assert.equal(translate.translateToAmerican(text)[0], 'Tylenol takes up to an hour to work.')
            done();
        })
        //Translate First, caramelise the onions. to American English
        test("Translate First, caramelise the onions. to American English", done => {
            let text = "First, caramelise the onions."
            assert.equal(translate.translateToAmerican(text)[0], 'First, caramelize the onions.')
            done();
        })
        //Translate I spent the bank holiday at the funfair. to American English
        test("Translate I spent the bank holiday at the funfair. to American English", done => {
            let text = "I spent the bank holiday at the funfair."
            assert.equal(translate.translateToAmerican(text)[0], 'I spent the public holiday at the carnival.')
            done();
        })
        //Translate I had a bicky then went to the chippy. to American English
        test("Translate I had a bicky then went to the chippy. to American English", done => {
            let text = "I had a bicky then went to the chippy."
            assert.equal(translate.translateToAmerican(text)[0], 'I had a cookie then went to the fish-and-chip shop.')
            done();
        })
        //Translate I've just got bits and bobs in my bum bag. to American English
        test("Translate I've just got bits and bobs in my bum bag. to American English", done => {
            let text = "I've just got bits and bobs in my bum bag."
            assert.equal(translate.translateToAmerican(text)[0], "I've just got bits and bobs in my fanny pack.")
            done();
        })
        //Translate The car boot sale at Boxted Airfield was called off. to American English
        test("Translate The car boot sale at Boxted Airfield was called off. to American English", done => {
            let text = "The car boot sale at Boxted Airfield was called off."
            assert.equal(translate.translateToAmerican(text)[0], "The trunk sale at Boxted Airfield was called off.")
            done();
        })
        //Translate Have you met Mrs Kalyani? to American English
        test("Translate Have you met Mrs Kalyani? to American English", done => {
            let text = "Have you met Mrs Kalyani?"
            assert.equal(translate.translateToAmerican(text)[0], "Have you met Mrs. Kalyani?")
            done();
        })
        //Translate Prof Joyner of King's College, London. to American English
        test("Translate Prof Joyner of King's College, London. to American English", done => {
            let text = "Prof Joyner of King's College, London."
            assert.equal(translate.translateToAmerican(text)[0], "Prof. Joyner of King's College, London.")
            done();
        })
        //Translate Tea time is usually around 4 or 4.30. to American English
        test("Translate Tea time is usually around 4 or 4.30. to American English", done => {
            let text = "Tea time is usually around 4 or 4.30."
            assert.equal(translate.translateToAmerican(text)[0], "Tea time is usually around 4 or 4:30.")
            done();
        })
    })

    suite('Highlight Tests', () => {
        //Highlight translation in Mangoes are my favorite fruit.
        test("Highlight translation in Mangoes are my favorite fruit.", done => {
            let text = "Mangoes are my favorite fruit."
            let highlighted = translate.translateToBritish(text)[1].join(' ').split(' ')
            assert.equal(highlighted.includes('favourite'), true)
            done();
        })
        //Highlight translation in I ate yogurt for breakfast.
        test("Highlight translation in I ate yogurt for breakfast.", done => {
            let text = "I ate yogurt for breakfast."
            let highlighted = translate.translateToBritish(text)[1].join(' ').split(' ')
            assert.equal(highlighted.includes('yoghurt'), true)
            done();
        })
        //Highlight translation in We watched the footie match for a while.
        test("Highlight translation in We watched the footie match for a while.", done => {
            let text = "We watched the footie match for a while."
            let highlighted = translate.translateToAmerican(text)[1].join(' ').split(' ')
            assert.equal(highlighted.includes('soccer'), true)
            done();
        })
        //Highlight translation in Paracetamol takes up to an hour to work.
        test("Highlight translation in Paracetamol takes up to an hour to work.", done => {
            let text = "Paracetamol takes up to an hour to work."
            let highlighted = translate.translateToAmerican(text)[1].join(' ').split(' ')
            assert.equal(highlighted.includes('Tylenol'), true)
            done();
        })
    })

});

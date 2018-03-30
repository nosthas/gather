const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User visits single item page', () => {
    describe('create and visit new item', () => {
      it('and is rendered', () => {
        // Setup
        const itemToCreate = buildItemObject();

        // Exercise
        browser.url('/items/create');
        browser.setValue('#title-input', itemToCreate.title);
        browser.setValue('#description-input', itemToCreate.description);
        browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
        browser.click('#submit-button');
        //browser.click('#item-XXX a');

        // Verify
        assert.include(browser.getText('body'), itemToCreate.title);
        //assert.include(browser.getText('body'), itemToCreate.description);
        assert.include(browser.getAttribute('body img', 'src'), itemToCreate.imageUrl);
      });
    });
});

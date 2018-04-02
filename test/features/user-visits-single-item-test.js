const { assert } = require('chai');
const { buildItemObject } = require('../test-utils');

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

        // Verify
        assert.include(browser.getText('body'), itemToCreate.title);
        browser.click(".item-card a:first-child");
        assert.include(browser.getText('body'), itemToCreate.description);
      });
    });
});

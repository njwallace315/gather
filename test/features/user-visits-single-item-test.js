const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');
describe('user submits a new item and returns to main page', () => {
	describe('new item is rendered and link to single item page is clicked', () => {
		it('renders item description', () => {
			const itemToCreate = buildItemObject();
			browser.url('/items/create');
			browser.setValue('#title-input', itemToCreate.title);
			browser.setValue('#description-input', itemToCreate.description);
			browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
			browser.click('#submit-button');
			browser.click('.item-card a');
			
			assert.include(browser.getText('body'), itemToCreate.description);

		});
	});
});
const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');
describe('new item is rendered with view and delete clickable icons', () => {
	describe('view icon is clicked', () => {
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
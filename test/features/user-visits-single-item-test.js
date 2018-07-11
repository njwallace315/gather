const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');
describe('new item is rendered', () => {
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

		describe('update button is clicked', () => {
			it('post only updates desired changes', () => {
				const itemToCreate = buildItemObject();
				browser.url('/items/create');
				const oldTitle = itemToCreate.title;
				const updatedTitle = "fresh new title";

				browser.setValue('#title-input', updatedTitle);
				browser.setValue('#description-input', itemToCreate.description);
				browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
				browser.click('#submit-button');

				assert.include(browser.getText('body'), updatedTitle);
				assert.notInclude(browser.getText('body'), oldTitle);
			});
		});
	});
});
const {assert} = require('chai');
const {buildItemObject, 
  //findItemIdByTitle
} = require('../test-utils.js')

describe('User visits root', () => {
  describe('without existing items', () => {
    it('starts blank', () => {
      browser.url('/');
      assert.equal(browser.getText('#items-container'), '');
    });
  });
  describe('can navigate', () => {
    it('to the create page', () => {
      // Setup
      browser.url('/');
      // Exercise
      browser.click('a[href="/items/create"]');
      // Verification
      assert.include(browser.getText('body'), 'Create');
    });
  });
  // describe('with existing items', () => {
  //   it('delete button removes desired item', () => {
  //     const itemToCreate = buildItemObject();
  //     browser.url('/items/create');
      
  //     browser.setValue('#title-input', itemToCreate.title);
  //     browser.setValue('#description-input', itemToCreate.description);
  //     browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
  //     browser.click('#submit-button');

  //     const item = findItemIdByTitle(itemToCreate.title);
  //     console.log('***************** item ******************');
  //     console.log('title: ', item.title);
  //     console.log('description: ', item.description);
  //     console.log('imageUrl: ', item.imageUrl);
  //     console.log('_id: ', item._id);
  //     console.log('*****************************************')

  //     browser.click(`#delete-${item._id}`);

  //     assert.notInclude(browser.getText('body'), item.title);
  //   });
  // });
});

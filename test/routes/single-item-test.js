const {assert} = require('chai');
const request = require('supertest');
const Item = require('../../models/item');
const app = require('../../app');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  // Write your test blocks below:
  describe('GET', () => {
  	it('returns item description', async () => {
  		const item = await seedItemToDatabase();

  		const response = await request(app)
  			.get(`/items/${item._id}`);

  		assert.include(parseTextFromHTML(response.text, '#item-title'), item.title);
  		assert.include(parseTextFromHTML(response.text, '#item-description'), item.description);
  	});
  });
  describe('/delete', () => {
  	describe('POST', () => {
  		it('removes item from rendering', async () => {
  			const item = await seedItemToDatabase();

  			const response = await request(app)
  				.post(`/items/${item._id}/delete`);
			const found = await Item.findById(item._id);
  			
  			assert.equal(found, null);
  		});
  	});
  });
});

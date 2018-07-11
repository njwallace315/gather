const {assert} = require('chai');
const request = require('supertest');
const Item = require('../../models/item');
const app = require('../../app');

const {parseTextFromHTML, seedItemToDatabase, findImageElementBySource} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id/update', () => {
	beforeEach(connectDatabaseAndDropData);
	afterEach(diconnectDatabase);

	describe('GET', () => {
		it('populates fields with current item attributes', async () => {
			const item = await seedItemToDatabase();

			const response = await request(app) 
			.get(`/items/${item._id}/update`);
			
			assert.equal(parseTextFromHTML(response.text, '#description-input'), item.description);
			const imageUrlElement = findImageElementBySource(response.text, item.imageUrl);
			assert.equal(imageUrlElement.src, item.imageUrl);
			
		});
	});

	describe('POST', () => {
		it('returns user to the single item page', async () => {
			const item = await seedItemToDatabase();
			item.title = 'Fresh new Title';

			const response = await request(app) 
				.post(`/items/${item._id}/update`)
				.type('form')
				.send({item});

			assert.equal(response.status, 302);
      		assert.equal(response.headers.location, `/items/${item._id}`);
		});
	})
});
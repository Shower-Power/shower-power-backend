require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Shower = require('../lib/models/Shower');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('gets all shower data', async() => {
    const showers = JSON.parse(JSON.stringify(await Shower.create([ 
      { tempBefore: 68.3, tempPeak: 87, humidityBefore: 40, humidityPeak: 90, duration: 40 }, 
      { tempBefore: 53, tempPeak: 90, humidityBefore: 15, humidityPeak: 87.3, duration: 70 }, 
    ])));
    return request(app)
      .get('/api/v1/showers')
      .then(res => {
        showers.forEach(shower => {
          expect(res.body).toContainEqual([{
            _id: shower._id.toString(),
            tempBefore: shower.tempBefore,
            tempPeak: shower.tempPeak,
            humidityBefore: shower.humidityBefore,
            humidityPeak: shower.humidityPeak,
            duration: shower.duration,
            updatedAt: expect.any(String),
            createdAt: expect.any(String),
          }]);
        });
      });
  });
});

require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Demographic = require('../lib/model/Demographic');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let demographic;
  beforeEach(async() => {
    demographic = await Demographic.create({
      major: 'Civil Engineering',
      majorId: 2406,
      majorCategory: 'Engineering',
      totalStudent: 53153,
      totalMen: 41081,
      totalWomen: 12072,
      shareWomen: 0.227117943
    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('create a demographic', () => {
    return request(app)
      .post('/api/v1/demographics')
      .send({
        major: 'Civil Engineering',
        majorId: 2406,
        majorCategory: 'Engineering',
        totalStudent: 53153,
        totalMen: 41081,
        totalWomen: 12072,
        shareWomen: 0.227117943
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          major: expect.any(String),
          majorId: expect.any(Number),
          majorCategory: expect.any(String),
          totalStudent: expect.any(Number),
          totalMen: expect.any(Number),
          totalWomen: expect.any(Number),
          shareWomen: expect.any(Number),
          __v: 0
        });
      });
  });

  it('gets a demographic by id', () => {
    return request(app)
      .get(`/api/v1/demographics/${demographic.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: demographic.id,
          major: 'Civil Engineering',
          majorId: 2406,
          majorCategory: 'Engineering',
          totalStudent: 53153,
          totalMen: 41081,
          totalWomen: 12072,
          shareWomen: 0.227117943,
          __v: 0
        });
      });
  });

  it('get all demographics', () => {
    return request(app)
      .get('/api/v1/demographics')
      .then(res => {
        expect(res.body).toEqual([
          {
            _id: expect.any(String),
            major: 'Civil Engineering',
            majorId: 2406,
            majorCategory: 'Engineering',
            totalStudent: 53153,
            totalMen: 41081,
            totalWomen: 12072,
            shareWomen: 0.227117943,
            __v: 0
          }
        ]);
      });
  });

  it('updates/patches a demographic', () => {
    return request(app)
      .patch(`/api/v1/demographics/${demographic.id}`)
      .send({ major: 'Audio Engineering' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          major: 'Audio Engineering',
          majorId: 2406,
          majorCategory: 'Engineering',
          totalStudent: 53153,
          totalMen: 41081,
          totalWomen: 12072,
          shareWomen: 0.227117943,
          __v: 0
        });
      });
  });
  it('deletes a demographic', () => {
    return request(app)
      .delete(`/api/v1/demographics/${demographic.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          major: 'Civil Engineering',
          majorId: 2406,
          majorCategory: 'Engineering',
          totalStudent: 53153,
          totalMen: 41081,
          totalWomen: 12072,
          shareWomen: 0.227117943,
          __v: 0
        });
      });
  });
});

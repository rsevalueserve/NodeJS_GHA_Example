import 'jest'
// import supertest from 'supertest';
// import { StatusCodes } from 'http-status-codes';
// import { app } from '../../app';

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1)
  })
})

// it('Example endpoint', () => {
//   test('should return dog object', async () => {
//     const res = await supertest(app).get('/api/example/dog');
//     return expect(res.body).toEqual({
//       name: 'Doggo',
//       age: '5',
//       image:
//         'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
//     });
//   });
// });

// it('should return status OK', async () => {
//   try {
//     await supertest(app)
//       .get('/api/example/dog')
//       .set('Accept', 'application/json')
//       .expect(StatusCodes.OK);
//   } catch (error) {
//     expect(error).toBe(error);
//   }
// });

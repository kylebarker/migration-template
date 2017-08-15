
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'rowValue1', password: 'test', email: 'fake@fake.net', age: 21},
        {username: 'bob', password: 'bob', email: 'bob@fake.net', age: 56},
        {username: 'susy', password: '12345', email: 'suzy@fake.net', age: 34},
        {username: 'ROBOTRON', password: 'itsover9000', email: 'robo@fake.net', age: 5},
        {username: 'admin', password: 'admin', email: 'admin@fake.net', age: 9999}
      ]);
    });
};

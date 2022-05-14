'use strict';
const bcrypt = require('bcrypt');


module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users', [{
        nama: "superadmin",
        email:"superadmin@mail.com" ,
        password: bcrypt.hashSync("superadmin", 10),
        type: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
     
  }
};

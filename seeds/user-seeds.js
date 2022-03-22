const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'jordan123',
        email: 'jordan@email.com',
        password: 'password123'
    },
    {
        username: 'keanna123',
        email: 'keanna@email.com',
        password: 'password123'
    },
    {
        username: 'nat123',
        email: 'nat@email.com',
        password: 'password123'
    },
    {
        username: 'bianca123',
        email: 'bianca@email.com',
        password: 'password123'
    },
    {
        username: 'gabi123',
        email: 'gabi@email.com',
        password: 'password123'
    },
    {
        username: 'gary123',
        email: 'gary@email.com',
        password: 'password123'
    },
    {
        username: 'joey123',
        email: 'joey@email.com',
        password: 'password123'
    },
    {
        username: 'maria123',
        email: 'maria@email.com',
        password: 'password123'
    },
    {
        username: 'sophia123',
        email: 'sophia@email.com',
        password: 'password123'
    },
    {
        username: 'tracy123',
        email: 'tracy@email.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
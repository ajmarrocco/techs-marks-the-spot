const { Post } = require('../models');

const postdata = [
    {
        title: 'Git Branching',
        post_content: 'Interested in learning Git? Well you have come to the right place! Learn Git Branching is the most visual and interactive way to learn Git on the web. You will be challenged with exciting levels, given step-by-step demonstrations of powerful features, and maybe even have a bit of fun along the way.',
        user_id: 10
    },
    {
        title: 'Website wireframe.',
        post_content: 'A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework of a website',
        user_id: 8
    },
    {
        title: 'Scope',
        post_content: 'The current context of execution. The context in which values and expressions are visible or can be referenced',
        user_id: 1
    },
    {
        title: 'Functions',
        post_content: 'Functions are one of the fundamental building blocks in JavaScript.',
        user_id: 4
    },
    {
        title: 'this',
        post_content: 'A function this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.',
        user_id: 7
    },
    {
        title: 'Equality comparisons and sameness',
        post_content: 'Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared.',
        user_id: 4
    },
    {
        title: 'Git Cherry Pick',
        post_content: 'Apply the changes introduced by some existing commits',
        user_id: 1
    },
    {
        title: 'Insomnia',
        post_content: 'All the information needed to deliver high-quality APIs through standards and collaboration with the Insomnia API design platform.',
        user_id: 1
    },
    {
        title: 'express.urlencoded Function',
        post_content: 'The express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.',
        user_id: 9
    },
    {
        title: 'Middleware',
        post_content: 'Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application is request-response cycle.',
        user_id: 5
    },
    {
        title: 'Sequelize',
        post_content: 'Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.',
        user_id: 2
    },
    {
        title: 'Handlebars',
        post_content: 'Handlebars is a simple templating language.',
        user_id: 10
    },
    {
        title: 'Partials',
        post_content: 'Handlebars allows for template reuse through partials. Partials are normal Handlebars templates that may be called directly by other templates',
        user_id: 8
    },
    {
        title: 'Expressions',
        post_content: 'Handlebars expressions are the basic unit of a Handlebars template.',
        user_id: 6
    },
    {
        title: 'Block Helpers',
        post_content: 'Block helpers make it possible to define custom iterators and other functionality that can invoke the passed block with a new context.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

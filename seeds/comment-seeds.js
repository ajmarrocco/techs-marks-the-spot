const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Great insight!',
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'Wow!',
        user_id: 6,
        post_id: 8
    },
    {
        comment_text: 'So smart!',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'How wonderful!',
        user_id: 3,
        post_id: 14
    },
    {
        comment_text: 'Good thought!',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'I agree!',
        user_id: 1,
        post_id: 10
    },
    {
        comment_text: 'You rock!',
        user_id: 6,
        post_id: 7
    },
    {
        comment_text: 'Great minds think alike!',
        user_id: 7,
        post_id: 4
    },
    {
        comment_text: 'Never knew that!',
        user_id: 6,
        post_id: 12
    },
    {
        comment_text: 'Good idea!',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'Okay!',
        user_id: 3,
        post_id: 14
    },
    {
        comment_text: 'Love this!',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'Agree to disagree!',
        user_id: 4,
        post_id: 9
    },
    {
        comment_text: 'Great definition!',
        user_id: 5,
        post_id: 14
    },
    {
        comment_text: 'On point!',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'Yes I concur!',
        user_id: 8,
        post_id: 2
    },
    {
        comment_text: 'Go you!',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Great mindsight!',
        user_id: 4,
        post_id: 11
    },
    {
        comment_text:'Cool',
        user_id: 5,
        post_id: 13
    },
    {
        comment_text:'New perspective of that idea!',
        user_id: 9,
        post_id: 6
    },
    {
        comment_text: 'Some things just sound great!',
        user_id: 6,
        post_id: 4
    },
    {
        comment_text: 'Amazing definition!',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'Unaware of that!',
        user_id: 3,
        post_id: 8
    },
    {
        comment_text: 'Okay...',
        user_id: 8,
        post_id: 10
    },
    {
        comment_text: 'I always thought it was something else!',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'Very nice!',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Lovely!',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'Great thought!',
        user_id: 4,
        post_id: 5
    },
    {
        comment_text: 'Intuitive!',
        user_id: 4,
        post_id: 8
    },
    {
        comment_text: 'I do not agree but that is okay!',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'GREAT!!!',
        user_id: 7,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

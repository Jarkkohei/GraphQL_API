const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/check-auth');
const Post = require('../../models/Post');

module.exports = {
    Mutation: {
        // Arrow function example
        createComment: async (_, { postId, body }, context) => {
            const { username } = checkAuth(context);

            if(body.trim() === '') {
                throw new UserInputError('Empty comment', {
                    errors: {
                        body: 'Comment body must not be empty'
                    }
                });
            }

            const post = await Post.findById(postId);

            if(post) {
                post.comments.unshift({
                    body,
                    username,
                    created_at: new Date().toISOString()
                });

                await post.save();
                return post;
            } else throw new UserInputError('Post not found');
        }
    }
}
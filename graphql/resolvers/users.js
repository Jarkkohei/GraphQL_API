const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { JWT_SECRET_KEY } = require('../../config');
const User = require('../../models/User');

module.exports = {
    Mutation: {
        async register(
            _, 
            { registerInput : { username, email, password, confirmPassword } 
        }, 
            context, info) {
            
            const user = await User.findOne({ username });

            if(user) {
                throw new UserInputError('Username is taken', {
                    errors: {
                        username: 'This username is already taken'
                    }
                });
            }

            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email, 
                username, 
                password, 
                created_at: new Date().toISOString() 
            });

            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, JWT_SECRET_KEY, { expiresIn: '1h'});

            return {
                ...res._doc,
                id: res._id,
                token
            };
        }
    }
}
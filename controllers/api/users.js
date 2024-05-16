const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,
};

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        console.log(user)
        const match = await bcrypt.compare(req.body.password, user.password);
        console.log(match)
        if (!match) throw new Error();
        res.json( createJWT(user) );
      } catch {
        res.status(400).json('Bad Credentials');
      }
}


async function create(req, res){
    try {
        console.log('test2')
        const user = await User.create(req.body);
        console.log(user)
        const token = createJWT(user);
        console.log(token)
        
        res.json(token);
    } catch (error) {
        res.status(400).json(error);
    }
};

function checkToken(req, res) {
    // Verify middleware is doing its job
    console.log('req.user', req.user);
    res.json(req.exp);
  }

//helper functions
function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}
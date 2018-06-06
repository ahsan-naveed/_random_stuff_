import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';


// Mongo Connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/friends', {})

const friendSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    language: { type: String },
    contacts: { type: Array },
    gender: { type: String },
    email: { type: String },
    age: { type: Number },
})

const Friends = mongoose.model('friends', friendSchema)


// SQL Connection
const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './aliens.sqlite',
});

const Aliens = sequelize.define('aliens', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    planet: { type: Sequelize.STRING },
});

Aliens.sync({ force: true }).then(() => {
    _.times(10, (i) => {
        Aliens.create({
            firstName: casual.first_name,
            lastName: casual.last_name,
            planet: casual.word,
        });
    });
});


export { Friends, Aliens }
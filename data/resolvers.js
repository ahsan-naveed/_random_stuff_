import mongoose from 'mongoose';
import { Friends, Aliens } from './dbConnectors';


// import idMaker from '../../utils';

// // in mem db
// class Friend {
//     constructor(id, {firstName, lastName, gender, age, language, email, contacts}) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.language = language;
//         this.email = email;
//         this.gender = gender;
//         this.age = age;
//         this.contacts = contacts;
//     }
// }

// const friendDatabase = {}
// const gen = idMaker()

// create resolver for schema - would fetch the actual data from DB 
// resolver map
export const resolvers = {
    Query: {
        getFriend: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Friends.findById(id, (err, friend) => {
                    if (err) reject(err)
                    else resolve(friend)
                })
            })
        },
        getFriends: (root) => {
            return new Promise((resolve, reject) => {
                Friends.find({}, (err, friends) => {
                    if (err) reject(err)
                    else resolve(friends)
                })
            })
        }, 
        getAliens: () => {
            return Aliens.findAll()
        }
    },
    Mutation: {
        createFriend: (root, { input }) => {
            // let id = gen.next().value
            // friendDatabase[id] = input;
            // return new Friend(id, input);

            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                language: input.language,
                email: input.email,
                contacts: input.contacts
            });

            newFriend.id = newFriend._id;

            return new Promise((resolve, reject) => {
                newFriend.save((err) => {
                    if (err) reject(err)
                    else resolve(newFriend)
                })
            })
        },
        updateFriend: (root, { input }) => {
            return new Promise((resolve, reject) => {
                Friends.findOneAndUpdate({ _id: input.id}, input, { new: true }, (err, friend) => {
                    if (err) reject(err)
                    else resolve(friend)
                })
            })
        },
        deleteFriend: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Friends.remove({ _id: id}, (err) => {
                    if (err) reject(err)
                    else resolve(`Successfully deleted friend!`)
                })
            })
        },
    },
};
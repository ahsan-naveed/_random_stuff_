import mongoose from 'mongoose';
import { Friends } from './schema';
import { resolve } from 'path';

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
        getFriend: ({
            id
        }) => {
            return new Friend(id, friendDatabase[id])
        }
    },
    Mutation: {
        createFriend: ({
            input
        }) => {
            // let id = gen.next().value
            // friendDatabase[id] = input;
            // return new Friend(id, input);

            const newFriend = new Friends({
                firstName = input.firstName,
                lastName = input.lastName,
                email = input.email,
                age = input.age,
                gender = input.gender,
                language = input.language,
                contacts = input.contacts
            });

            newFriend.id = newFriend._id;

            return new Promise((resolve, object) => {
                newFriend.save(err => {
                    if (err) reject(err)
                    else resolve(newFriend)
                })
            })
        }
    }
};

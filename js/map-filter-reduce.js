"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

console.log(users);

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let threeOrMoreLanguages = users.filter(function(user){
    if (user.languages.length >= 3) {
        return user;
    }
});
console.log(threeOrMoreLanguages);


// Use .map to create an array of strings where each element is a user's email address

let userEmails = [];

users.map(function(user){
    userEmails.push(user.email);
});

console.log(userEmails);


// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

let objects = users.reduce(function(obj, user){
    obj[user.id] = user.name;
    return obj;
}, {});

console.log(objects);


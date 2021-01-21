const bcryptjs = require("bcryptjs");

const saltRounds = 10;

const userPassword1 = "123";

// on top of the user's password, bcryptjs adds SALT (a random string that gets scrambled together with a password to create a hashed password)

const salt1 = bcryptjs.genSaltSync(saltRounds);

console.log(`SALT 1: ${salt1}`); // $2a$10$u58SNEEPj01yKCX9BP3QV.

// create a hashed password using user's password input and salt

const hashedPassword1 = bcryptjs.hashSync(userPassword1, salt1);

console.log(`HASHED PASSWORD 1: ${hashedPassword1}`); //  $2a$10$ejJbCUynyguMTyvMt3bxOeKXZU3RvOY3ZiNEtV54L7M5m4yhA1..i

// $2a$10$u58SNEEPj01yKCX9BP3QV.
// $2a$10$ejJbCUynyguMTyvMt3bxOeKXZU3RvOY3ZiNEtV54L7M5m4yhA1..i

// 2:

const userPassword2 = "iLoveJS2021";
const salt2 = bcryptjs.genSaltSync(saltRounds);

console.log(`SALT 2: ${salt2}`); // $2a$10$SbhyyCZnbs9myuMfmfLHVO

const hashedPassword2 = bcryptjs.hashSync(userPassword2, salt2);

console.log(`HASHED PASSWORD 2: ${hashedPassword2}`); // $2a$10$SbhyyCZnbs9myuMfmfLHVOfkqxIZG2nmN2vfKP9V1RcHSr.aBxnj6

const bcryptjs = require("bcryptjs");

const saltRounds = 10;

const userPassword1 = "123";

bcryptjs
  .genSalt(saltRounds)
  .then((salt) => {
    console.log(`SALT: ${salt}`); // $2a$10$mPL1RvCACbFnt9OJaJcYT.

    return bcryptjs.hash(userPassword1, salt);
  })
  .then((hashedPassword) => console.log(`Hashed password: ${hashedPassword}`))
  .catch((err) => console.log("Error while generating hashed password: ", err));

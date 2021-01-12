## Check POST method - req body

### Starter

```shell
$ git clone https://github.com/ironhack-labs/check-post-req-body
$ cd check-post-req-body
$ npm install
$ npm install nodemon --save-dev

# to run the app:
$ nodemon app.js
```

### Questions

1. To be able to access to the values of input fields (rendered in the browser and filled in by users) on the server side, which npm package we need to require? **Answer: ??**
2. To be able to send the values of input fields to the server side, which method we need to use in the form? **Answer: post**
3. Which property of `request` we should access to get the value of input fields? **Answer: req.body**
4. Create a route in the `app.js` to capture what a user inputted in the input field in the `index.hbs`.
5. Create a new form in the `index.hbs` where user should be able to input their full name and full address (we need input field for the street, street number, city, zip code and country). Then create a route in the `app.js` where anything user inputted would be available.s

- **What is npm?**

  npm packages are code written by someone and provided to the community to use. If we use a certain collection of these packages all the time to achieve some goals, we are talking about frameworks. Frameworks will most likely include packages for database access, templating engines (to make dynamic HTML/or some other views) and session management (to keep track of users).

- **What is package.json?**

  file that defines all of our project packages and dependencies.

- **What are node_modules?**

  node_modules folder has locally, on your machine, all the libraries/packages you defined in package.json. Never push it to GitHub. Create .gitignore and add node_modules.

- **The Request-Response Cycle** - [https://gist.github.com/sandrabosk/520023a331ccd77ba80d0a558a9c01f9]

- **Is node a programming language or a runtime? Why?**

  Node is not a programming language. It is a runtime. Runtime means that it is an environment that includes all of the tools and features needed to run a specific program, or in the case of NodeJS, a programming language, somewhere where this language wasn't meant to be used.

  Before Node, the only place where you could use JavaScript was a client-side environment (browsers). Thanks to Node, we can use JS in the backend (server) side as well.

- **What does it mean that mongo is a no-sql db?**

  What is DB? - Databases are programs that allow us to save and retrieve data, which will be used by our applications. Until now, every program that we wrote will reset/refresh every time we run it (variables will lose its value).
  MongoDB is a document-oriented database that stores data in collections instead of tables.

  - A collection is nothing but a set of documents.
  - Any type of document can be saved in a collection (although the similarity is recommended).

  MongoDB is a NoSQL database that stores the data in the form of key-value pairs (like in JSON).

- **What is the difference between mongo and mongoose? why do we use mongoose?**

  We use mongoose to connect our node app with the MongoDB database. It allows us to work with pure JavaScript.
  We use mongoose methods to create, read, update, and delete documents in the database. Mongoose is an Object Document Mapper (mongoose) which comes as a solution to some common issues when working with raw data from the database: 1. We repeat a lot of code; 2. It is hard to enforce consistency; 3. Documents retrieved from a database are just objects, there's no methods included. mongoose comes to help and save.
  Mongoose methods that make our lives easier: `.create()`, `.find()`, `.findOne()`, `.findById()`, `.updateOne()`, `.updateMany()`, `.findByIdAndUpdate()`, `.deleteOne()`, `.deleteMany()`, `.findByIdAndRemove()`, `.countDocuments()`.

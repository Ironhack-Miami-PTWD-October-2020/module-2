const usersArray = [
  {
    firstName: "Kirby",
    lastName: "Doyle",
    id: "b71794e5-851e-44b5-9eec-1dd4e897e3b8",
    isActive: false,
    balance: "$3,570.06",
    gender: "male"
  },
  {
    firstName: "Tracie",
    lastName: "May",
    id: "1af0e9ee-66fc-4298-b8ce-5d99bcbaac05",
    isActive: false,
    balance: "$1,547.73",
    gender: "female"
  },
  {
    firstName: "Kendra",
    lastName: "Hines",
    id: "5e92af3a-b08e-4689-bdeb-3226300470e3",
    isActive: true,
    balance: "$12,383.08",
    gender: "female"
  },
  {
    firstName: "Kinney",
    lastName: "Howard",
    id: "0ad2388d-83e1-4831-9cc4-e3581f8edf36",
    isActive: false,
    balance: "$3,207.06",
    gender: "male"
  },
  {
    firstName: "Howard",
    lastName: "Gilmore",
    id: "0719205d-c965-44cb-a128-708cf335b26c",
    isActive: true,
    balance: "$21,307.75",
    gender: "male"
  },
  {
    firstName: "Rachelle",
    lastName: "Schneider",
    id: "04012184-651b-41eb-9642-d362fedff02f",
    isActive: true,
    balance: "$35,121.49",
    gender: "female"
  },
  {
    firstName: "Lizzie",
    lastName: "Alford",
    id: "598ca7ec-888e-494d-ae94-c21ace3ffa52",
    isActive: false,
    balance: "$4,382.94",
    gender: "female"
  }
];

// ********************************************************************************************
// 1
// Create a function getFirstNames() and, using for...of loop, iterate over the usersArray
// and push all the first names into a new array userFirstNames.

// ********************************************************************************************

const getFirstNames = (array) => {
  const userFirstNames = [];

  for (let user of array) {
    // const firstName = user.firstName;
    const { firstName } = user;
    userFirstNames.push(firstName);
  }

  return userFirstNames;
};

// getFirstNames(usersArray);

// ********************************************************************************************
// 2
// ********************************************************************************************

const getFullNames = (array) => {
  const userFullNames = [];

  for (let user of array) {
    const fullName = `${user.firstName} ${user.lastName}`;
    userFullNames.push(fullName);
  }

  return userFullNames;
};

// getFullNames(usersArray);

// ********************************************************************************************
// 3
// ********************************************************************************************

const getUsersCreditDetails = (array) => {
  const usersCreditDetails = [];

  for (let user of array) {
    // const firstName = user.firstName;
    // const lastName = user.lastName;
    // const balance = user.balance;

    const { firstName, lastName, balance } = user;

    // const userDetail = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   balance: balance
    // };

    const userDetail = {
      firstName,
      lastName,
      balance
    };

    usersCreditDetails.push(userDetail);
  }

  return usersCreditDetails;
};

// getUsersCreditDetails(usersArray);

// const student = {
//   name: 'val',
//   course: 'web'
// }

// ********************************************************************************************
// 4
// ********************************************************************************************

const genderView = (users) => {
  const maleUsers = [];
  const femaleUsers = [];

  [...users].filter((user) => {
    const { firstName, lastName, gender } = user;

    if (gender === "male") maleUsers.push(`${firstName} ${lastName}`);
    else femaleUsers.push(`${firstName} ${lastName}`);
  });

  return {
    maleUsers,
    femaleUsers
  };
};

// genderView(usersArray);

// ********************************************************************************************
// 5
// ********************************************************************************************

const data = genderView(usersArray);

const genderCount = (data) => {
  const { maleUsers, femaleUsers } = data;

  return `male: ${maleUsers.length}; female: ${femaleUsers.length} `;
};

// genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ********************************************************************************************
// 6
// ********************************************************************************************

const promo20 = (users) => {
  return users
    .filter((user) => {
      const { balance } = user;
      const cleaned = +balance.substring(1).replace(",", "");
      // parseInt or Number() ===> turns string to a number type

      if (cleaned > 20000) return user;
    })
    .map((user) => {
      const { firstName, balance } = user;
      console.log(
        `Dear ${firstName} since your balance is ${balance}, you are eligible to apply for this awesome credit card.`
      );
    });
};
// promo20(usersArray)

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ********************************************************************************************
// 7
// ********************************************************************************************

// const addActive = array => {
//   array.map(user => user.isActive = true);

//   return array
// }

const addActive = (array) => {
  return array.map((user) => {
    return {
      ...user,
      isActive: true
    };
  });
};

addActive(usersArray);

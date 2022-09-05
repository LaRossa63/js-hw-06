const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => {
    if (user.age > min && user.age < max) {
      return user;
    }
  });
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

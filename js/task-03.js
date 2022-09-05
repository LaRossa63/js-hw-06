const getUsersWithGender = (users, gender) => {
  const currentUsers = users.filter((user) => user.gender === gender);

  return currentUsers.map((user) => user.name);
};

console.log(getUsersWithGender(users, 'male'));

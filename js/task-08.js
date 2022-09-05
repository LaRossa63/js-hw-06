const getUsersWithFriend = (users, friendName) => {
  let result = [];

  users.forEach((user) => {
    if (user.friends.includes(friendName)) {
      result.push(user.name);
    }
  });

  return result;
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

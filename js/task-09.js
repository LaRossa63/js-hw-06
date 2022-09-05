const getNamesSortedByFriendsCount = (users) => {
  const objSort = users.sort((a, b) => a.friends.length - b.friends.length);

  return objSort.map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

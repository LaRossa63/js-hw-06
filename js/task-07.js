const calculateTotalBalance = (users) => {
  return users.reduce((total, element) => total + element.balance, 0);
};

console.log(calculateTotalBalance(users));

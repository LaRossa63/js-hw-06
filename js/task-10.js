const getSortedUniqueSkills = (users) => {
  const allSkills = users.flatMap((element) => element.skills);

  return [...new Set(allSkills.sort())];
};

console.log(getSortedUniqueSkills(users));

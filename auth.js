const register = (username) => {
  console.log(`User ${username} has been registered`);
};

const login = function (username, password) {
  console.log(`User ${username} is logged in`);
};

module.exports = {
  register: register,
  login: login, // or can be written as login key value are same
};

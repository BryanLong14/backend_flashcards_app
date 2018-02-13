const database = require("./database-connection");

module.exports = {
  list() {
    return database("user").select();
  },
  create(username) {
    return database("user")
      .insert({username})
      .returning("*")
      .then(record => record[0]);
  }
};
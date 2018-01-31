module.exports = {
  development: {
    client: 'pg',
    connection:
      "postgres:///flashcards_app"
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

module.exports = ({ env }) => {
  const { host, port, database, user, password } = env("PG_CONNECTION_STRING");

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
      },
      debug: false,
    },
  };
};
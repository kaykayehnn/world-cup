const redis = require("redis");

module.exports = () => {
  const client = redis.createClient(process.env.REDIS_PATH);

  client.on("error", err => {
    console.log(`Redis error: ${err}`);
  });

  client.on("connect", () => {
    console.log("Redis ready!");
  });

  return client;
};

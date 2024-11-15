const config = {
  dev: process.env.NODE_ENV !== "production",
  hostname: "localhost",
  port: 3000,
  f123options: {
    port: process.env.F123_PORT,
    address: process.env.F123_ADDRESS,
  },
};

export default config;

export default {
  jwt: {
    secret: process.env.SECRET_KEY || 'default',
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
};

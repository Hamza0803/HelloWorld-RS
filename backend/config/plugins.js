module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '7d', // Set the expiry time according to your preference. E.g., '7d' for 7 days.
        },
      },
    },
  });
  
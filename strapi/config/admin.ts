export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5758dafe475ec55847b0e1cadc7321b1'),
  },
});

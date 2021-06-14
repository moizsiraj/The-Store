import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@thestore.pk',
    password: bcrypt.hashSync('012345'),
    isAdmin: true,
  },
  {
    name: 'moiz',
    email: 'moiz@thestore.pk',
    password: bcrypt.hashSync('012345'),
  },
  {
    name: 'siraj',
    email: 'siraj@thestore.pk',
    password: bcrypt.hashSync('012345'),
  },
];

export default users;

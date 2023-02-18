enum ROLES {
  ADMIN = "admin",
  SELLER = 'seller',
  CUSTOMER = 'customer'
}
type User = {
  username: string;
  role: ROLES;
}
const crisUser: User = {username: 'crishian', role: ROLES.ADMIN}

const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const AdminBroSequelize = require('@admin-bro/sequelize')

const db = require('../../models');
AdminBro.registerAdapter(AdminBroSequelize)
const adminBro = new AdminBro({
  databases: [db],
  rootPath: '/admin',
})

const ADMIN = {
  email: 'aullauri@paloalto.com.ec',
  password: 'aullauripalo20'
}

//const router = AdminBroExpress.buildRouter(adminBro)

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
  cookieName: 'admin-bro' ,
  cookiePassword: 'secretKey-1234',
  authenticate: async(email, password) =>{
    if (email === ADMIN.email && password === ADMIN.password){
      return ADMIN;
    }else{
      return null;
    }
  }
}, null, {
  resave: false,
  saveUninitialized: true,
});

module.exports = router;
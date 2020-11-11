import { Sequelize } from 'sequelize';
const connection = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/db.sqlite'
})


export default connection
import {  DataTypes, Model} from "sequelize"
import connection from './../database/connection'

export interface Client {
  id: number
  name: string
  email: string
  number: number
  birthDate: Date
}

const ClientModel = connection.define("Client", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'clients'
});

export const modelToInterface = (model:Model<Client>) => {
  return <Client>{
    id: model.getDataValue("id"),
    name: model.getDataValue("name"),
    number: model.getDataValue("number"),
    email: model.getDataValue("email"),
    birthDate: model.getDataValue("birthDate")
  }
}

export default ClientModel
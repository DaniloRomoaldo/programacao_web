// @ts-nocheck
import {Model, DataTypes} from "sequelize";
import {sequelize} from '../sequelize.js'


export class Aluno extends Model {}

Aluno.init(
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nome:{
            type: DataTypes.STRING
        
        },
        matricula:{
            type:DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: "Aluno",
        tableName: "aluno",
        timestamps: false
    }

)
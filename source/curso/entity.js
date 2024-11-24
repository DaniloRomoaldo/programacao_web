// @ts-nocheck
import {Model, DataTypes} from "sequelize";
import { sequelize } from "../sequelize.js";


export class Curso extends Model {}

Curso.init(
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nome:{
            type: DataTypes.STRING
        
        }
    },
    {
        sequelize,
        modelName: "Curso",
        tableName: "curso",
        timestamps: false
    }

)
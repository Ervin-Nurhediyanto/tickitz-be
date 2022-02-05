import { Sequelize } from "sequelize";
import db from "../../../config/database.js";

const { DataTypes } = Sequelize;

const Movie = db.define('movies', {
  title: {
    type: DataTypes.STRING
  },
  director: {
    type: DataTypes.STRING
  },
  category: {
    type: DataTypes.STRING
  },
  cast: {
    type: DataTypes.STRING
  },
  synopsis: {
    type: DataTypes.STRING
  },
  releaseDate: {
    type: DataTypes.DATE
  },
  duration: {
    type: DataTypes.NUMBER
  },
  image: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
})

export default Movie;

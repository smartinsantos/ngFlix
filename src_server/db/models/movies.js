const db = require('mongoose')
const Schema = db.Schema

const MovieSchema = new Schema({
  title: { type: String, required: true },
  year: { type: String, default: '' },
  genre: { type: String, default: '' },
  actors: { type: String, default: '' },
  rating: { type: Number, default: 0 },
  poster_url: { type: String, default: '/dist/img/default_poster.jpg' }
},
  {
    timestamps: { createdAt: 'created_on', updatedAt: 'modified_on' }
  })

const Movies = db.model('Movies', MovieSchema)

module.exports = Movies

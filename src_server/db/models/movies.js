const db = require('mongoose')
const Schema = db.Schema

const MovieSchema = new Schema({
  title: { type: String, default: 'title' },
  tmdb_id: { type: String, default: null },
  release_date: { type: String, default: 'date' },
  overview: { type: String, default: 'overview' },
  rating: { type: Number, default: 0 },
  poster_url: { type: String, default: null }
},
  {
    timestamps: { createdAt: 'created_on', updatedAt: 'modified_on' }
  })

const Movies = db.model('Movies', MovieSchema)

module.exports = Movies

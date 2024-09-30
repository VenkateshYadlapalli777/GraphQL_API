
import mongoose, { model,Schema } from "mongoose";

const filmSchema = new mongoose.Schema( {
         age_certification: String,
         description: String,
         genres: [String],
         id: String,
         imdb_score: Number,
         production_countries: [String],
         release_year: Number,
         runtime: Number,
         title: String,
         type: String
});

const film = mongoose.model("netflixes",filmSchema);


export default film;

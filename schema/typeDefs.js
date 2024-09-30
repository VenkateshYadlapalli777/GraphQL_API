import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type film {
         age_certification: String,
         description: String,
         genres: [String],
         id: String,
         imdb_score: Float,
         production_countries: [String],
         release_year: Int,
         runtime: Int,
         title: String,
         type: String
    }
    type Query {
        getFilm: [film]
        getFilmOnTitle(title: String!): film!
    }
    type Mutation {
        createFilm(input: addFilm): film
        updateFilm(title:String,input: updateFilmInput): film!
        deleteFilm(title:String):film!
    }
    input addFilm {
         age_certification: String,
         description: String,
         genres: [String],
         id: String,
         imdb_score: Float,
         production_countries: [String],
         release_year: Int,
         runtime: Int,
         title: String,
         type: String
    }
    input updateFilmInput {
        description: String,
        runtime: Int,
        genres: [String],
        imdb_score: Float
    }
    

`;
export default typeDefs;
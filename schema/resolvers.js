
import film from "../models/film.js";
const resolvers = {
    Query:{
        async getFilm() {
            console.log("I came here to query");
            const resultGetAllFilms = await film.find();
            return resultGetAllFilms;
        },
        async getFilmOnTitle(_,{title}) {
            return await film.findOne({title});
        }
    },
    Mutation: {
        async createFilm(_,{input}){
            try{
             const resultCreate = new film(input);
                 console.log(input)
                 return await resultCreate.save();
             }
             catch(error){
                console.log("error saving data to mongodb");
                throw new Error("failed to save to db");
             }
        },

        async updateFilm(_,{title,input}){
            console.log(input);
            const resultUpdate =  await film.findOneAndUpdate({title},input,{});
            return resultUpdate;
            
            
            
        },
        async deleteFilm(_,{title}){
            return await film.findOneAndDelete({title});
        }
    }
}
export default resolvers;
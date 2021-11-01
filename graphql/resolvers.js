import { getMovieDetail, getMovies, getSuggestions } from './db';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovieDetail(id),
    suggestion: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;

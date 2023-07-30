const Movies = require("../models/movies");

const createMovie = async (req, res) => {
  try {
    const movie = await Movies.createMovie(req.body);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la película" });
  }
};

const getMovies = async (req, res) => {
  try {
    const options = await Movies.getMovies();
    res.json(options);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las peliculas" });
  }
};

module.exports = {
  createMovie,
  getMovies,
};

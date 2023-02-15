function getMovies() {
  return fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b3d802e9a6msh4f5f22841b791b6p11e7a8jsnbd6b8d439505',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  })
  .then(response => response.json())
  .then(data => {
    return data.d;
  })
  .catch(err =>{
    console.error(err);
    throw err;
  });
}

export { getMovies };

const apiUrl = "https://api.tvmaze.com/shows/1/seasons";

const getData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export default getData;

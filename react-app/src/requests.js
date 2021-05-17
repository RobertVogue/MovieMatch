const API_KEY = "b2e58c2ed826f09532aa372a74f4cde9";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchInTheatres: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2021-02-15&primary_release_date.lte=2021-04-01`,
    fetchMostPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchThisYearsHits: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2021`,
    fetchEmAll: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2019-02-15&primary_release_date.lte=2021-02-01`,
    fetch1: `/discover/movie?api_key=${API_KEY}&page=1&sort_by=popularity.desc`,
    fetch2: `/discover/movie?api_key=${API_KEY}&page=2&sort_by=popularity.desc`,
    fetch3: `/discover/movie?api_key=${API_KEY}&page=3&sort_by=popularity.desc`,
    fetch4: `/discover/movie?api_key=${API_KEY}&page=4&sort_by=popularity.desc`,
    fetch5: `/discover/movie?api_key=${API_KEY}&page=5&sort_by=popularity.desc`,
    fetch6: `/discover/movie?api_key=${API_KEY}&page=6&sort_by=popularity.desc`,
    fetch7: `/discover/movie?api_key=${API_KEY}&page=7&sort_by=popularity.desc`,
    fetch8: `/discover/movie?api_key=${API_KEY}&page=8&sort_by=popularity.desc`,
    fetch9: `/discover/movie?api_key=${API_KEY}&page=9&sort_by=popularity.desc`,
    fetch10: `/discover/movie?api_key=${API_KEY}&page=10&sort_by=popularity.desc`,
    fetch11: `/discover/movie?api_key=${API_KEY}&page=11&sort_by=popularity.desc`,
    fetch12: `/discover/movie?api_key=${API_KEY}&page=12&sort_by=popularity.desc`,
    fetch13: `/discover/movie?api_key=${API_KEY}&page=13&sort_by=popularity.desc`,
    fetch14: `/discover/movie?api_key=${API_KEY}&page=14&sort_by=popularity.desc`,
    fetch15: `/discover/movie?api_key=${API_KEY}&page=15&sort_by=popularity.desc`,
}

export default requests

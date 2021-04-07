const API_KEY = "b2e58c2ed826f09532aa372a74f4cde9";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchInTheatres: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2021-02-15&primary_release_date.lte=2021-04-01`,
    fetchMostPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchThisYearsHits: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2021`,
    fetchEmAll: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2019-02-15&primary_release_date.lte=2021-02-01`,
}

export default requests

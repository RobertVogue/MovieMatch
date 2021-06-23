const API_KEY = "b2e58c2ed826f09532aa372a74f4cde9";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchInTheatres: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2021-02-15&primary_release_date.lte=2021-04-01`,
    fetchMostPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchThisYearsHits: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2021`,
    fetchEmAll: `/discover/movie?api_key=${API_KEY}&primary_release_date=2019-02-15&primary_release_date=2021-02-01`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=28`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=12`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=16`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=35`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=80`,
    fetchDocumentary: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=99`,
    fetchDrama: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=18`,
    fetchFamily: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=10751`,
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=14`,
    fetchHistory: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=36`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=27`,
    fetchMusic: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=10402`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=9648`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=10749`,
    fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=878`,
    fetchTVMovie: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=10770`,
    fetchThriller: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=53`,
    fetchWar: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=10752`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&with_genres=37`,
}

export default requests

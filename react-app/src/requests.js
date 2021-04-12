const API_KEY = "b2e58c2ed826f09532aa372a74f4cde9";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchInTheatres: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2021-02-15&primary_release_date.lte=2021-04-01`,
    fetchMostPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchThisYearsHits: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2021`,
    fetchEmAll: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2019-02-15&primary_release_date.lte=2021-02-01`,
    fetch1: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2000`,
    fetch2: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2001`,
    fetch3: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2002`,
    fetch4: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2003`,
    fetch5: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2004`,
    fetch6: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2005`,
    fetch7: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2006`,
    fetch8: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2007`,
    fetch9: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2008`,
    fetch10: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2009`,
    fetch11: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2010`,
    fetch12: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2011`,
    fetch13: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2012`,
    fetch14: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2013`,
    fetch15: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2014`,
}

export default requests

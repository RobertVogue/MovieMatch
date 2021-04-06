const API_KEY = "b2e58c2ed826f09532aa372a74f4cde9";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
}

export default requests

const LOAD_POSTS = "LOAD_POSTS";


const load = (posts) => ({
  type: LOAD_POSTS,
  posts,
});


export const getAllPosts = () => async (dispatch) => {
  // get all posts of the user's feed
  const response = await fetch(`/api/posts/`);
  if (response.ok) {
    const posts = await response.json();
    dispatch(load(posts));
  }

  return response;
};


// REDUCER
const initialState = {};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      const allPost = []; // need to keep it in an array so it says in newest first order
      action.posts.posts.forEach((post) => {
        allPost.push(post);
      });
      return {
        personalPosts: allPost,
      };
    default:
      return state;
  }
};

export default postReducer;

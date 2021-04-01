const IS_FRIEND = "friend/IS_FRIEND";
const UPDATE_FRIEND = "friend/UPDATE_FRIEND"
const IS_THEIR_FRIEND = "friend/IS_THEIR_FRIEND";

const loadFriends = (friends) => ({
    type: IS_FRIEND,
    friends,
});

const loadTheirFriend = (theirFriends) => ({
    type: IS_THEIR_FRIEND,
    theirFriends,
});

const updateFriends = (friends) => ({
    type: UPDATE_FRIEND,
    friends,
});

export const getAllFriends = (userId) => async (dispatch) => {
    const response = await fetch(`/api/friend/${userId}/friends`);

    if (response.ok) {
        const friends = await response.json();
        dispatch(loadFriends(friends));
    }

    return response;
};

export const getAllTheirFriends = (userId) => async (dispatch) => {
    const response = await fetch(`/api/friend/${userId}/thierFriends`);

    if (response.ok) {
        const theirFriends = await response.json();
        dispatch(loadTheirFriend(theirFriends));

        return response;
    };
};

export const newFriendUser = (friend1Id, friend2Id) => async (dispatch) => {
    const response = await fetch(`/api/friend/${friend2Id}/friends`, {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({ friend1_id: friend1Id }),
    });
    if (response.ok) {
        const friends = await response.json();
        dispatch(updateFriends(friends));
    }
};

export const newUnfriendUser = (friend1Id, friend2Id) => async (dispatch) => {
    const response = await fetch(`/api/friend/${friend2Id}/friends`, {
        method: "DELETE",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({ friend1_id: friend1Id }),
    });
    if (response.ok) {
        const friends = await response.json();
        dispatch(updateFriends(friends));
    }
};

const initialState = {};

const friendSession = (state = initialState, action) => {
    switch (action.type) {
        case IS_FRIEND:
            return { ...state, following: [...action.friends.friends] };
        case IS_THEIR_FRIEND:
            return { ...state, followers: [...action.theirFriends.friended] };
        case UPDATE_FRIEND:
            let updatedFriends = {}
            if (action.friends?.friends) {
                updatedFriends = action.friends.friends
            }
            return { ...state, friends: updatedFriends }
        default:
            return state;
    }
};

export default friendSession;

const ADD_MEETING = 'meeting/addMeeting'
const FIND_MEETING = 'meeting/findMeeting'

const addMeeting = (newMeeting) => ({
    type: ADD_MEETING,
    newMeeting
})

const findMeeting = (meeting) => ({
    type: FIND_MEETING,
    meeting
})

export const createMeeting = (active) => async (dispatch) => {
    const res = await fetch('/api/meetings/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            active,
        }),
    })
    const data = await res.json();
    dispatch(addMeeting(data));
    return data
}

export const findMeetings = (meetingId) => async (dispatch) => {
    const response = await fetch('/api/meetings/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(meetingId),
    });
    const data = await response.json();
    dispatch(findMeeting(data));
    return data;
};

const initialState = {};
const meetingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEETING:
            return action.newMeeting;
        case FIND_MEETING:
            return { ...action.meeting };
        default:
            return state;
    }
};

export default meetingReducer;

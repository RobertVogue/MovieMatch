from flask import Blueprint, request
from app.models import db, User, Meeting


meeting_routes = Blueprint('meetings', __name__)


@meeting_routes.route('/', methods=['POST'])
def add_meeting():
    meeting = request.json
    new_meeting = Meeting(
        requestedId = meeting['requestedId'],
        createdAt = db.func.current_timestamp()
    )

    db.session.add(new_meeting)
    db.session.commit()
    return new_meeting.to_dict()


@meeting_routes.route('/', methods=['PUT'])
def grab_meeting():
    meetingId = request.json
    helper = Meeting.query.get(meetingId)
    grab_meeting = Meeting(
        id = helper.id,
        requestedId = helper.requestedId
    )


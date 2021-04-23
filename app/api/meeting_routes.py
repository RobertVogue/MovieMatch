from flask import Blueprint, request
from app.models import db, User, Meeting


meeting_routes = Blueprint('meetings', __name__)


@meeting_routes.route('/', methods=['POST'])
def add_meeting():
    meeting = request.json
    new_meeting = Meeting(
        name=meeting['name'],
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
    meeting = Meeting(
        id = helper.id,
        name=helper.name,
        requestedId = helper.requestedId
    )

    foundMeeting = meeting.to_dict()
    formattedMessages = [mess.to_dict() for
                         mess in helper.message]

    for formattedMessage in formattedMessages:
        messageUsername = User.query.get(formattedMessage['requesterId'])
        formattedMessage['username'] = messageUsername.username
    formattedMessages.sort(key=lambda x: x['createdAt'])
    foundMeeting['messages'] = formattedMessages
    return foundMeeting

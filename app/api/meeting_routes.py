from flask import Blueprint, request
from app.models import db, User, Meeting


meeting_routes = Blueprint('meetings', __name__)


@meeting_routes.route('/', methods=['POST'])
def add_meeting():
    meeting = request.json
    newMeeting = Meeting(
        name=meeting['name'],
        userId = meeting['userId'],
        createdAt = db.func.current_timestamp()
    )

    db.session.add(newMeeting)
    db.session.commit()
    return newMeeting.to_dict()


@meeting_routes.route('/', methods=['PUT'])
def grab_meeting():
    meetingId = request.json
    helper = Meeting.query.get(meetingId)
    meeting = Meeting(
        id = helper.id,
        name=helper.name,
        userId = helper.userId
    )

    foundMeeting = meeting.to_dict()
    formattedMessages = [mess.to_dict() for
                         mess in helper.messages]

    for formattedMessage in formattedMessages:
        messageUsername = User.query.get(formattedMessage['userId'])
        formattedMessage['username'] = messageUsername.username
    formattedMessages.sort(key=lambda x: x['createdAt'])
    foundMeeting['messages'] = formattedMessages
    return foundMeeting


@meeting_routes.route('/', methods={'PUT'})
def editMeeting():
    meeting = request.json
    found = Meeting.query.get(meeting['meetingId'])
    found.name = meeting['newName']
    db.session.commit()
    return found.to_dict()


@meeting_routes.route('/', methods=['DELETE'])
def deleteMeeting():
    meeting = request.json
    room = Meeting.query.get(meeting)
    db.session.delete(room)
    db.session.commit()
    return room.to_dict()

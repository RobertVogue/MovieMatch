from flask import Blueprint, request, jsonify
from app.models import db, User, Message


message_routes = Blueprint('message', __name__)

@message_routes.route('/', methods={'POST'})
def chat():
    requested = request.json
    new_message = Message(
        body=requested['messageInput'],
        requesterId=requested['user']['id'],
        meetingId=requested['meeting_id']
    )

    deb.session.add(new_message)
    db.session.commit()
    return jsonify(requested)

from flask import Blueprint, request, jsonify
from app.models import db, User, Message


message_routes = Blueprint('message', __name__)

@message_routes.route('/', methods={'POST'})
def chat():
    requested = request.json
    newMessage = Message(
        body=requested['messageInput'],
        userId=requested['user']['id'],
        meetingId=requested['meetingId']
    )

    db.session.add(newMessage)
    db.session.commit()
    return jsonify(requested)


@message_routes.route('/edit/', methods=["PUT"])
def editMessage():
    message = request.json
    foundMessage = Message.query.get(message['messageId'])
    foundMessage.message = message["newMessage"]
    db.session.commit()
    return foundMessage.to_dict()


@message_routes.route('/delete/', methods=["DELETE"])
def deleteMessage():
    message = request.json
    toDelete = Message.query.get(message)
    db.session.delete(toDelete)
    db.session.commit()
    return message.to_dict()

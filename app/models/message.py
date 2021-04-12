from .db import db


class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    requesterId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    meetingId = db.Column(db.Integer, db.ForeignKey('meetings.id'), nullable=False)
    body = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime,  default=db.func.current_timestamp())
    updatedAt = db.Column(db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    meeting = db.relationship('Meeting', backref="messages")
    user = db.relationship('User', backref="messages")

    def to_dict(self):
        return {
            'id': self.id,
            'requesterId': self.requesterId,
            'meetingId': self.meetingId,
            'body': self.body,
            'createdAt': self.createdAt
        }

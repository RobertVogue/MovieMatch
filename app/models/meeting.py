from .db import db


class Meeting(db.Model):
    __tablename__ = 'meetings'

    id = db.Column(db.Integer, primary_key=True)
    requestedId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    active = db.Column(db.Boolean, nullable=False, default=False)

    message = db.relationship('Message', backref="meetings")
    user = db.relationship('User', backref="meetings")

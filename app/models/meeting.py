from .db import db


class Meeting(db.Model):
    __tablename__ = 'meetings'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(40), nullable=False)
    createdAt = db.Column(db.DateTime,  default=db.func.current_timestamp())
    updatedAt = db.Column(db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    message = db.relationship('Message', backref="meetings")
    user = db.relationship('User', backref="meetings")

    def to_dict(self):
        return {
            'id': self.id,
            'requestedId': self.requestedId,
            'name': self.name,
        }

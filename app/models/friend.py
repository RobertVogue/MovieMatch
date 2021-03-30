from .db import db


class Friend(db.Model):
    __tablename__ = 'friends'

    id = db.Column(db.Integer, primary_key=True)
    friend1Id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    friend2Id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    createdAt = db.Column(db.DateTime,  default=db.func.current_timestamp())
    updatedAt = db.Column(db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    user = db.relationship("User", backref="friends")

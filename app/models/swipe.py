from .db import db


class Swipe(db.Model):
    __tablename__ = 'swipes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    movieId = db.Column(db.Integer, db.ForeignKey('movies.id'), nullable=False)
    answer = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.DateTime,  default=db.func.current_timestamp())
    updatedAt = db.Column(db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    user = db.relationship('User', backref="swipes")
    movie = db.relationship('Movie', backref="swipes")

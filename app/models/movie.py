from .db import db


class Movie(db.Model):
    __tablename__ = 'movies'

    id = db.Column(db.Integer, primary_key=True)
    movieId = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String, nullable=False)
    listType = db.Column(db.String, nullable=False)
    synopsis = db.Column(db.Text, nullable=False)
    movieArt = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime,  default=db.func.current_timestamp())
    updatedAt = db.Column(db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    swipe = db.relationship('Swipe', backref="movies")

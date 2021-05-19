from .db import db


class UserMovie(db.Model):
    __tablename__ = "userMovies"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    movieId = db.Column(db.Integer, db.ForeignKey('movies.id'), nullable=False)
    movieArt = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime,  default=db.func.current_timestamp())
    updatedAt = db.Column(db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    user = db.relationship('User', backref="userMovies")
    movie = db.relationship('Movie', backref="userMovies")

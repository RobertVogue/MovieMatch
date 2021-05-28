from flask import Blueprint, request, jsonify
from app.models import db, User, UserMovie


bp = Blueprint("swipes", __name__, url_prefix="/api")


@bp.route('/swipes/users/<int:userId>')
def getUserSwipes(userId):
    swipes = UserMovie.query.filter(userId == UserMovie.userId).all()
    print(swipes)
    data = [swipe.as_dict() for swipe in swipes]
    return {'swipes': data}


@bp.route('/users/<int:userId>/swipe/<int:movieId>', methods={'POST'})
def addSwipeToUser(userId, movieId):
    swipe = UserMovie(userId=userId, movieId=movieId)
    db.session.add(swipe)
    db.session.commit()

    return swipe.as_dict()

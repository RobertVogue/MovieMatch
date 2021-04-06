from flask import Blueprint, jsonify, redirect, request
from app.models import db, Movie, friends, User

movie_routes = Blueprint("movies", __name__)


@movie_routes.route('/all')
# Query all posts from users that the session user is not following
def posts(id):
    all_user_ids = set([x for (x,) in db.session.query(User.id).all()])

    # find the list of users that are followed by the session user
    following = db.session.query(follows).filter_by(follower_id=id).all()
    following_ids = [y for x,y in following]
    # add in the session user's id to the list so their posts show on the feed also
    following_ids.append(id)
    following_set = set(following_ids)
    not_following_set = all_user_ids - following_set

    # Query posts with a userId in the not_following_set (ordered with newest first)
    posts = Post.query.filter(Post.userId.in_(not_following_set),
    Post.vaulted=='false').order_by(Post.createdAt.desc()).all()

    # posts = Post.query.all()
    return {"posts": [post.to_dict() for post in posts]}

@movie_routes.route('/<int:id>')
#Add all user posts into user's feed based on userId
def post(id):
    posts = Post.query.filter_by(userId=id).order_by(Post.createdAt.desc()).all()
    return {"posts": [post.to_dict() for post in posts]}

@movie_routes.route('/swipedRight')
def following_posts(id):
    # get the list of user id's that follow the session user that aren't vaulted
    following = db.session.query(follows).filter_by(follower_id=id).all()
    following_ids = [y for x,y in following]
    # add in the session user's id to the list so their posts show on the feed also
    following_ids.append(id)
    following_set = set(following_ids)
    # Query posts with a userId in the ids set (ordered with newest first)
    posts = Post.query.filter(Post.userId.in_(following_set),
    Post.vaulted=='false').order_by(Post.createdAt.desc()).all()
    return {"posts": [post.to_dict() for post in posts]}

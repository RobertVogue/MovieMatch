from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


friends = db.Table(
  "friends",
  db.Column("friend1_id", db.Integer, db.ForeignKey("users.id")),
  db.Column("friend2_id", db.Integer, db.ForeignKey("users.id"))
)


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  bio = db.Column(db.Text, nullable = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  createdAt  = db.Column(db.DateTime,  default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime,  default=db.func.current_timestamp(),onupdate=db.func.current_timestamp())


  frienders = db.relationship(
      "User",
      secondary=friends,
      primaryjoin=(friends.c.friend1_id == id),
      secondaryjoin=(friends.c.friend2_id == id),
      backref=db.backref("friends", lazy="dynamic"),
      lazy="dynamic"
    )


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "bio": self.bio
    }

from app.models import db, friends, User

def seed_friends():
    users = User.query.all()
    user = users[0]

    for i in range(1, 50):
        user.frienders.append(users[i])

    db.session.commit()


def undo_friends():
    db.session.execute('TRUNCATE friends;')
    db.session.commit()

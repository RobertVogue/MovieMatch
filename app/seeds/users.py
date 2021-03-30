from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                bio='I am the Demo User',
                password='password')


    db.session.add(demo)


    namename = "user"
    password = "password"
    etag = "@aa.io"
    superBio1 = "I am number: "
    superBio2 = ", user."
    count = 0
    while count < 100:
        newUser = User(
            username= namename + count,
            email= namename + count + etag,
            bio = superBio1 + count + superBio2,
            password = (f'password{count}')
        )
        count = count + 1
        db.session.add(newUser)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()

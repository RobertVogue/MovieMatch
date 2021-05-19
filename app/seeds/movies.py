from app.models import db, Movie

def seed_movies():

    movie1 = Movie(
        movieId="567189",
        title="Tom Clancy's Without Remorse",
        synopsis="An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.",
        movieArt="https://image.tmdb.org/t/p/original/rEm96ib0sPiZBADNKBHKBv5bve9.jpg",
    )


    db.session.add(movie1)


    movie2 = Movie(
        movieId="460465",
        title="Mortal Kombat",
        synopsis="Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
        movieArt="https://image.tmdb.org/t/p/original/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
    )


    db.session.add(movie2)


    movie3 = Movie(
        movieId="399566",
        title="Godzilla vs. Kong",
        synopsis="In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        movieArt="https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
    )


    db.session.add(movie3)


    movie4 = Movie(
        movieId="615457",
        title="Nobody",
        synopsis="Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
        movieArt="https://image.tmdb.org/t/p/original/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
    )


    db.session.add(movie4)


    movie5 = Movie(
        movieId="811367",
        title="22 vs. Earth",
        synopsis="Set before the events of ‘Soul’, 22 refuses to go to Earth, enlisting a gang of 5 new souls in attempt of rebellion. However, 22’s subversive plot leads to a surprising revelation about the meaning of life.",
        movieArt="https://image.tmdb.org/t/p/original/32vLDKSzcCMh55zqqaSqqUA8naz.jpg",
    )


    db.session.add(movie5)


    db.session.commit()


def undo_movies():
    db.session.execute('TRUNCATE movies;')
    db.session.commit()

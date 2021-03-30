"""new seed data

Revision ID: 10c3fe190cb7
Revises: 
Create Date: 2021-03-30 14:28:32.130653

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '10c3fe190cb7'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('movies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('synopsis', sa.Text(), nullable=False),
    sa.Column('movieArt', sa.Text(), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=True),
    sa.Column('updatedAt', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('bio', sa.Text(), nullable=True),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=True),
    sa.Column('updatedAt', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('friends',
    sa.Column('friend1_id', sa.Integer(), nullable=True),
    sa.Column('friend2_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['friend1_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['friend2_id'], ['users.id'], )
    )
    op.create_table('meetings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('requestedId', sa.Integer(), nullable=False),
    sa.Column('active', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['requestedId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('swipes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('movieId', sa.Integer(), nullable=False),
    sa.Column('answer', sa.Integer(), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=True),
    sa.Column('updatedAt', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['movieId'], ['movies.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('messages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('requesterId', sa.Integer(), nullable=False),
    sa.Column('meetingId', sa.Integer(), nullable=False),
    sa.Column('body', sa.Text(), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=True),
    sa.Column('updatedAt', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['meetingId'], ['meetings.id'], ),
    sa.ForeignKeyConstraint(['requesterId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('messages')
    op.drop_table('swipes')
    op.drop_table('meetings')
    op.drop_table('friends')
    op.drop_table('users')
    op.drop_table('movies')
    # ### end Alembic commands ###

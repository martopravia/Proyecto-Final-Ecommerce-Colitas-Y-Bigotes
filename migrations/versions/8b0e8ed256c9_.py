"""empty message

Revision ID: 8b0e8ed256c9
Revises: 940f6e110c50
Create Date: 2025-01-27 14:42:11.532196

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8b0e8ed256c9'
down_revision = '940f6e110c50'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('otp', schema=None) as batch_op:
        batch_op.alter_column('otp',
               existing_type=sa.VARCHAR(length=6),
               type_=sa.Integer(),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('otp', schema=None) as batch_op:
        batch_op.alter_column('otp',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=6),
               existing_nullable=False)

    # ### end Alembic commands ###

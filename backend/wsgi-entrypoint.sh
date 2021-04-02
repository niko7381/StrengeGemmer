#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "waiting gor postgres......."

    while ! nc -z $SQL HOST $SQL PORT; do
        sleep 0.1
    done

    echo "PostgreSQL started"
fi

python manage.py flush --no-input
python manage.py migrate

exec "$@"

gunicorn base.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4
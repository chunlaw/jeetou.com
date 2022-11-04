FROM python:3

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN python manage.py collectstatic
CMD [ "gunicorn", "main.wsgi_prod", "-b", "0.0.0.0:8000", "--log-file", "-" ]

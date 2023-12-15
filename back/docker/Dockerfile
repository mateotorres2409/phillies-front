FROM python:alpine3.19
#RUN apt-get update
RUN pip install flask
ENV FLASK_APP=app.py
COPY back/calculator /app
WORKDIR /app
EXPOSE  80
CMD [ "flask","run","--host=0.0.0.0", "--port=80" ]
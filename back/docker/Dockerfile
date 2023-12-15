FROM python:alpine3.19
RUN pip install flask
RUN pip install flask-cors
ENV FLASK_APP=app.py
COPY back/calculator/app.py /app/app.py
WORKDIR /app
EXPOSE  80
CMD [ "flask","run","--host=0.0.0.0", "--port=80" ]
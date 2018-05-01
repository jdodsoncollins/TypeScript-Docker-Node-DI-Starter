FROM digitalcanvasdesign/nginx-ssl:alpine

LABEL maintainer="Jason Raimondi <jason@raimondi.us>"

RUN rm -rf /etc/nginx/conf.d

COPY ./nginx/conf.d /etc/nginx/conf.d

ADD app.tgz /app

EXPOSE 8000

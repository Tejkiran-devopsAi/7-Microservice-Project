FROM postgres:16

ENV POSTGRES_USER=microapp
ENV POSTGRES_PASSWORD=microapp123
ENV POSTGRES_DB=postgres

COPY database/bootstrap.sql /docker-entrypoint-initdb.d/bootstrap.sql

EXPOSE 5432

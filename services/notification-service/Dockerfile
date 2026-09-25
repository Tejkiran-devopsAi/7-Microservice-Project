FROM ruby:3.4-alpine

WORKDIR /notification-service

RUN apk add --no-cache \
    postgresql-dev \
    build-base

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

EXPOSE 8086

CMD ["bundle", "exec", "ruby", "app.rb"]

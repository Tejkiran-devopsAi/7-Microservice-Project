
FROM golang:1.25-alpine

WORKDIR /catalog-service

COPY go.mod go.sum ./

RUN go mod tidy

COPY . .

EXPOSE 8082

CMD ["go", "run", "."]


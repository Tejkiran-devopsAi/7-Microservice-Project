


FROM maven:3.9.11-eclipse-temurin-21

WORKDIR /auth-service

COPY pom.xml .

RUN mvn dependency:go-offline

COPY . .

RUN mvn clean package -DskipTests

EXPOSE 8081

CMD ["mvn", "spring-boot:run"]

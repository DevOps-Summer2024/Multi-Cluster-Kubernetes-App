# FROM openjdk:17-jdk-slim

# # ENV SA_LOGIC_API_URL http://172.17.0.2:5000

# WORKDIR /app

# COPY sa-webapp/edu/target/edu-0.0.1-SNAPSHOT.jar app.jar

# EXPOSE 8080

# ENTRYPOINT ["java", "-jar", "app.jar", "--sa.logic.api.url=http://172.18.0.2:5000"]



FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/edu-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
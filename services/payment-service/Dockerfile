FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR payment-service/
COPY payment-service.csproj ./
RUN dotnet restore
COPY . .
EXPOSE 8085
CMD ["dotnet","run"]

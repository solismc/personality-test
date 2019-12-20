dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.1/publish

docker build -t my-personality-test-image ./bin/release/netcoreapp2.1/publish

docker build -t my-personality-test-image ./bin/release/netcoreapp2.1/publish

docker push registry.heroku.com/my-personality-test/web

heroku container:release web -a my-personality-test
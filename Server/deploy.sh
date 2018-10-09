dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.1/publish

docker build -t my-personality-test-image ./bin/release/netcoreapp2.1/publish

docker tag my-personality-test-image registry.heroku.com/my-personality-test/web

docker push registry.heroku.com/my-personality-test/web

heroku container:release web -a my-personality-test
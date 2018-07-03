docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker build -t pslytics .
docker run -p 80:80 pslytics

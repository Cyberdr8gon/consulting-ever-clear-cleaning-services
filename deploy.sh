set -e

./build.sh
git add .
DATE=`date +%Y-%m-%d:%H:%M:%S`
git commit -m "auto-deploy:$DATE"
git push
git push heroku master

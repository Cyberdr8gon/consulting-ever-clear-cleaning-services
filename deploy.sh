./build.sh
git add .
COMMIT_MSG="auto-deploy: "
DATE=`date +%Y-%m-%d:%H:%M:%S`
COMMIT_MSG+=DATE
git commit -m $COMMIT_MSG
git push
git push heroku master

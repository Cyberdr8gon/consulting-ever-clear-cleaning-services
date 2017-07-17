set -e

./build.sh
git add .
git -c color.status=false status \
  | sed -n -r -e '1,/Changes to be committed:/ d' \ -e '1,1 d' \ -e '/^Untracked files:/,$ d' \ -e 's/^\s*//' \ -e '/./p' \
  | git commit -F -
git push
git push heroku master

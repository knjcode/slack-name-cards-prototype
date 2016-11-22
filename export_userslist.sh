if [ -n "$token" ]; then
  curl https://slack.com/api/users.list\?token\=$token > userslist.json
else
  echo "Set your slack test token"
fi

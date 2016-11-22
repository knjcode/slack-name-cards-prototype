if [ -n "$token" ]; then
  curl https://slack.com/api/team.info\?token\=$token > teaminfo.json
else
  echo "Set your slack test token"
fi

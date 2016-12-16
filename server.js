const express = require('express')
const userslist = require('./userslist.json')['members']
const teaminfo = require('./teaminfo.json')['team']

const teamIcon = teaminfo.icon.image_original || teaminfo.icon.image_230
const users = userslist.map((user) => {
  return {
    name: user.name,
    real_name: user.real_name,
    icon: user.profile.image_1024 || user.profile.image_512 || user.profile.image_192
  }
})

function splitUsersArray (users, count) {
  var usersArray = []
  for (var i = 0; i < Math.ceil(users.length / count); i++) {
    var j = i * count
    var p = users.slice(j, j + count)
    usersArray.push(p)
  }
  return usersArray
}

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.redirect('/slackbot')
})

app.get('/:name', (req, res) => {
  const names = req.params.name.split('+')
  let selectUsers = []
  users.forEach((user) => {
    if (names.indexOf(user.name) >= 0) {
      selectUsers.push({ name: user.name, real_name: user.real_name, icon: user.icon })
    }
  })

  if (selectUsers.length > 0) {
    const usersArray = splitUsersArray(selectUsers, 10)
    res.render('index', { usersArray: usersArray, team_name: teaminfo.name, team_icon: teamIcon })
  } else {
    res.status(404)
    res.send('User not found.')
  }
})

app.listen(3000)

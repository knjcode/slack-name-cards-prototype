const express = require('express')
const userslist = require('./userslist.json')['members']
const teaminfo = require('./teaminfo.json')['team']

var team_icon = ''
if (teaminfo.icon.image_original) {
  team_icon = teaminfo.icon.image_original
} else {
  team_icon = teaminfo.icon.image_230
}

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.redirect('/slackbot')
})

app.get('/:name', (req, res) => {
  var names = req.params.name.split('+')
  var users = []
  userslist.forEach((user) => {
    if (names.indexOf(user.name) >= 0) {
      var icon_url = ''
      if (user.profile.image_1024) {
        icon_url = user.profile.image_1024
      } else if (user.profile.image_512) {
        icon_url = user.profile.image_512
      } else {
        icon_url = user.profile.image_192
      }
      users.push({ name: user.name, real_name: user.real_name, icon: icon_url })
    }
  })

  if (users.length > 0) {
    res.render('index', { users: users, team_name: teaminfo.name, team_icon: team_icon })
  } else {
    res.status(404)
    res.send('User not found.')
  }
})

app.listen(3000)

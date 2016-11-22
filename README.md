# slack-name-card

Generate name cards from your slack team.

## setup

__Install pacakges__

```
$ npm install
```

__Export slack user list__

```
## Set your slack test token
$ export token=xoxp-1111111111-2222222222-3333333333-aa000a
## Run export script (Require: curl command)
$ npm run export
```

__Start server__

```
$ npm start
```

## View name cards

Access local server URL with username [http://localhost:3000/slackbot](http://localhost:3000/slackbot)

Multiple user names can be specified by concatenating with +

Access url [http://localhost:3000/slackbot+yourname](http://localhost:3000/slackbot+yourname)

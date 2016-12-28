# slack-name-cards-prototype

Generate name cards from your slack team.

## Setup

__Install pacakges__

```
$ npm install
```

__Generate slack test token__

Generate your slack test token from here [https://api.slack.com/docs/oauth-test-tokens](https://api.slack.com/docs/oauth-test-tokens).

Set an environmant variable as below.

```
$ export token="your-slack-test-token"
```

__Export slack team info__

Run export script (Require: curl command)

```
$ npm run export
```

__Start local server__

```
$ npm start
```


## View name cards

Access local server URL with username [http://localhost:3000/slackbot](http://localhost:3000/slackbot)

Multiple user names can be specified by concatenating with `+`

For example, when you want to display 3 users: "andrew", "dave", and "steve".  
Open the following URL [http://localhost:3000/andrew+dave+steve](http://localhost:3000/andrew+dave+steve)

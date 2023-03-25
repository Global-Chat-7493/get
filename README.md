# @globalchat/get
A package to get information about a user or guild using Global Chat.

## Usage

### guild

```js
const { guild } = require("@globalchat/get");

const guildInfo = await guild(1234567890123456789);

console.log(guildInfo);
// {"guild":"1234567890123456789","banned":false,"registered":false,"welcome_messages_enabled":true}
```

### user

```js
const { user } = require("@globalchat/get");

const userInfo = await user(1234567890123456789);

console.log(userInfo);
// {"user":"1234567890123456789","banned":false,"roles":{"beta":false,"dev":false,"mod":false,"verified":false}}
```

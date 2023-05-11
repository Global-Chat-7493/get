# @globalchat/get
A package to get information about a user or guild using Global Chat.

## Usage

### guild

```js
const { guild } = require("@globalchat/get");

const guildInfo = await guild(123456789012345678);

console.log(guildInfo);
// {"guild":"123456789012345678","banned":false,"registered":false,"settings":{"welcome_messages_enabled":true}}
```

### user

```js
const { user } = require("@globalchat/get");

const userInfo = await user(123456789012345678);

console.log(userInfo);
// {"user":"123456789012345678","banned":false,"roles":{"dev":false,"mod":false,"verified":false}}
```

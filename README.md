Adds shortened names to ascii-colors

| Original  | New! |
| --------  | ---- |
| black     | bl   |
| red       | r    |
| green     | g    |
| yellow    | y    |
| blue      | b    |
| magenta   | m    |
| cyan      | c    |
| white     | w    |
| bgBlack   | bgBl |
| bgRed     | bgR  |
| bgGreen   | bgG  |
| bgYellow  | bgY  |
| bgBlue    | bgB  |
| bgMagenta | bgM  |
| bgCyan    | bgC  |
| bgWhite   | bgW  |
| bgGray    | bgGr |
| bgGrey    | bgGr |

Example
```javascript
const shorten = require("ansi-color-shortener");
const c = require("ansi-colors");
shorten(c);
```
Note: For some weird reason, `const c = require("ansi-color-shortener")(require("ansi-colors"))
does not work. Sorry for the inconvience.

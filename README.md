# Package

[](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)

[](https://www.sohamkamani.com/nodejs/executing-shell-commands/)

[](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line#run-nodejs-scripts-from-the-command-line)

[](https://www.npmjs.com/package/prompts)

[](https://stackoverflow.com/questions/31596267/how-do-you-access-flags-passed-in-through-the-command-line-in-node)

[](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)

# REGEX

### Special Characters (Meta-characters)

| Meta-character | Meaning                                                              |
| -------------- | -------------------------------------------------------------------- |
| `.`            | Matches any single character except newline                          |
| `^`            | Matches the beginning of a line or string                            |
| `$`            | Matches the end of a line or string                                  |
| `*`            | Matches 0 or more of the preceding element                           |
| `+`            | Matches 1 or more of the preceding element                           |
| `?`            | Matches 0 or 1 of the preceding element (makes it optional)          |
| `\`            | Escapes a special character (e.g., `\.` matches a literal dot `.`)   |
| `[]`           | Character set. Matches any one of the characters inside the brackets |
| `()`           | Groups expressions together and captures matched text                |
| `{}`           | Matches a specific number or range of repetitions (e.g., `{2,4}`)    |

### Character Classes

Character classes match one character out of a set of characters.

| Character Class | Meaning                                                   |
| --------------- | --------------------------------------------------------- |
| `[abc]`         | Matches any single character a, b, or c                   |
| `[^abc]`        | Matches any character except a, b, or c (negation)        |
| `[0-9]`         | Matches any digit                                         |
| `[a-z]`         | Matches any lowercase letter                              |
| `\d`            | Matches any digit (equivalent to `[0-9]`)                 |
| `\D`            | Matches any non-digit (equivalent to `[^0-9]`)            |
| `\w`            | Matches any word character (alphanumeric + underscore)    |
| `\W`            | Matches any non-word character                            |
| `\s`            | Matches any whitespace character (spaces, tabs, newlines) |
| `\S`            | Matches any non-whitespace character                      |

# Package

[](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)

[](https://www.sohamkamani.com/nodejs/executing-shell-commands/)

[](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line#run-nodejs-scripts-from-the-command-line)

[](https://www.npmjs.com/package/prompts)

[](https://stackoverflow.com/questions/31596267/how-do-you-access-flags-passed-in-through-the-command-line-in-node)

[](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)

# REGEX

[tool](https://regex101.com/)

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

## Operators

### Truthy values

-   All numbers(positive and negative) are truthy except zero
-   All strings are truthy except an empty string ('')
-   The boolean true

### Falsy values

-   0
-   0n
-   null
-   undefined
-   NaN
-   the boolean false
-   '', "", ``, empty string

### [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Date

> date formmater

```ts
const format = (date: Date, options: [any]) => {
    const leftPad = (data: any, spacing: number) => {
        const strPad = String(data);
        if (strPad.length < spacing) {
            return `${'0'.repeat(spacing - strPad.length)}${strPad}`;
        }
        return strPad;
    };
    let dateStr = '';
    for (let i = 0; i < options.length; i++) {
        switch (options[i]) {
            case 'year':
                dateStr.concat(`${leftPad(date.getFullYear(), 4)}/`);
                break;
            case 'month':
                dateStr.concat(`${leftPad(date.getMonth(), 2)}/`);
                break;
            case 'date':
                dateStr.concat(`${leftPad(date.getDate(), 2)}/`);
                break;
            case 'day':
                dateStr.concat(`${leftPad(date.getDay(), 2)}/`);
                break;
            case 'hour':
                dateStr.concat(`${leftPad(date.getHours(), 2)}/`);
                break;
            case 'min':
                dateStr.concat(`${leftPad(date.getMinutes(), 2)}/`);
                break;
            case 'sec':
                dateStr.concat(`${leftPad(date.getSeconds(), 2)}/`);
                break;
            default:
                break;
        }
    }
};
```

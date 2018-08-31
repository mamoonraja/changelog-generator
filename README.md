# changelog-generator

Wrapper around conventional changelog core [package](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-core) to generate a changelog from a certain git tag in past to any git tag in future.

## Getting Started

You will need to have [Node.js](https://nodejs.org/en/download/) installed.

```bash
$ npm i -g changelog-generator
```

Print the changelog from a github tag `v1.0.0_8_27_18` to `v1.0.1_8_28_18`.

```bash
$ changelog-generator -t v1.0.0_8_28_18 -f v1.0.0_8_27_18
```

Example output

```
<a name="v1.0.0_8_28_18"></a>
## [v1.0.0_8_28_18](github.link) (2018-08-31)


### Features

* **feature-X:** feature X added ([commit](github.link))
```

## Help

```bash
$ changelog-generator --help            # or -h (see all possibles options)

  Usage: changelog-generator [options]

  Options:

    -v, --version         output the version number
    -t, --to [tag]        to
    -f, --from [tag]      from
    -t, --type [preset]   type of preset [angular]
    -o, --outfile [file]  output file
    -h, --help            output usage information

```

## LICENSE
MIT.

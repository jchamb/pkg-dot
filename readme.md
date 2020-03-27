# pkg-dot

CLI tool for managing `package.json`.

## Installation

```bash
npm install -g pkg-dot
```

## Usage

```sh
$ pkg-dot property value

  --path specify path to file
  --delete | --del delete a property


  Example
    $ pkg-dot version
    $ pkg-dot version 1.0
    $ pkg-dot --path ./submodule/package.json version 1.0
    $ pkg-dot resolutions.easy-peasy next
    $ pkg-dot resolutions.easy-peasy --delete
```

## TODO

- [X] Add support for deleting
- [ ] Add tests
- [ ] Add --help 

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

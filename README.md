# Lerna + monorepo +GitHub Actions Release Flow

This repository is an example of monorepo release flow.

## Release Flow

1. [Local] Run `yarn run versionup`
    - Update CHANGELOG.md and `package.json`'s `version`, and `lerna.json`'s `version`
    - Does not git tag
2. [Local] Submit to Release Pull Request
3. [GitHub] Review Release Pull Request
4. [GitHub] Merge Release Pull Request
5. [CI] git tag && publish to npm(GitHub Package Registry)

## Changelog

See [Releases page](https://github.com/azu/lerna-monorepo-github-actions-release/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/lerna-monorepo-github-actions-release/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu

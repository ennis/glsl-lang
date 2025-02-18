## [Unreleased]

- - -
## v0.3.1 - 2022-07-03
#### Bug Fixes
- **(transpiler)** allow !Sized sinks for transpiler functions - (0385b7e) - Alexandre Bléron
#### Continuous Integration
- use cargo-workspaces - (52f54da) - vtavernier

- - -

## v0.3.0 - 2022-06-15
#### Bug Fixes
- update all dependencies to 0.2.1 - (bea4a64) - vtavernier
#### Build system
- fix ci/bumpver.sh - (10c6aca) - vtavernier
- configure cog - (0aed54d) - vtavernier
#### Continuous Integration
- configure cocogitto - (ea369e4) - vtavernier
#### Features
- update dependencies - (16020e4) - vtavernier
#### Miscellaneous Chores
- update CHANGELOG for cocogitto - (23bcf06) - vtavernier

- - -


## [0.2.1] - 2022-06-11
### Changed
- Updated to Rust 2021 edition

### Fixed
- `glsl-lang`: Fix documentation example for v0.2.0

## [0.2.0] - 2022-02-07
### Added
- `lang-util`: Add lang_util::error::ResolvedPosition::without_source_number
- `lang-util`: Add support for serde serializing of node contents
- `lang-util`: Implement AsRef for Node (contents)
- `lang-util`: Implement PartialOrd/Ord for Node (contents)
- `lang-util`: Implement Hash for Node (contents)
- `glsl-lang`: Add `serde` feature for AST serialization
- `glsl-lang-cli`: Add JSON output format
- `glsl-lang-cli`: Add input file argument
- `glsl-lang-cli`: Add GLSL output format
- `glsl-lang`: Implement PartialOrd and Hash for Identifier and TypeName
- `lang-util`: Add NodeSpan::start() and NodeSpan::end()
- `lang-util`: Generate display impl for derive(Token)
- `lang-util`: Add lang_util(as = "...") for mapping to lalrpop parser tokens
- `lang-util`: Add TokenDescription metadata for lexer tokens
- `glsl-lang`: Add location data to all AST nodes

### Changed
- PartialEq for Node now compares the contents of the node by default
- `glsl-lang`: Box large enum variants (FunIdentifierData::TypeSpecifier, ConditionData::Assignment) to reduce size differences

### Removed
- NodeContentEq trait in lang-util
- `lang-util`: dependency on parse-display
- `glsl-lang`: dependency on parse-display

### Fixed
- `#[derive(NodeContent)]` doesn't require importing NodeDisplay anymore

## [0.1.3] - 2021-04-16
### Added
- Add ParseContext::with_policy

## [0.1.2] - 2021-04-06
### Changed
- Updated landing pages for crates in this workspace

### Fixed
- Fix CI scripts behavior
- Fix crates.io categories for `glsl-lang-quote`

## [0.1.1] - 2021-04-05
### Fixed
- Fix READMEs for crates.io

## [0.1.0] - 2021-04-05
- Initial release

[Unreleased]: https://github.com/vtavernier/glsl-lang/compare/v0.2.1...HEAD
[0.2.1]: https://github.com/vtavernier/glsl-lang/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/vtavernier/glsl-lang/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/vtavernier/glsl-lang/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/vtavernier/glsl-lang/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/vtavernier/glsl-lang/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/vtavernier/glsl-lang/releases/tag/v0.1.0

# Contributing to Units Converter Extension

First off, thank you for considering contributing to Units Converter Extension! It's people like you that make this extension such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE-OF-CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements

If you have a suggestion for the extension, we'd love to hear about it. Before creating enhancement suggestions, please check the existing issues as you might find out that you don't need to create one.

When creating an enhancement suggestion, please include:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead

### Pull Requests

1. Fork the repo and create your branch from `main`
2. Create a new branch
3. If you've added code that should be tested, add tests
4. If you've changed APIs, update the documentation
5. Ensure the test suite passes
6. Make sure your code lints

### Development Process

1. Clone the repository

```bash
git clone https://github.com/your-username/units_converter_extension.git
```


2. Create a new branch


```bash
git checkout -b feature/your-feature-name
```


3. Make your changes and commit them


```bash
git add .
git commit -m "Description of changes"
```


4. Push to your fork


```bash
git push origin feature/your-feature-name
```


5. Open a Pull Request

## Development Setup

1. Install dependencies

```bash
npm install
```

2. Run tests

```bash
npm test
```

3. Build the extension

```bash
npm run build
```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

* Use 2 spaces for indentation
* Use semicolons
* Use single quotes for strings
* No unused variables
* Space after keywords (if, for, while, etc.)
* Space after function name
* Always use === instead of ==

### Testing Styleguide

* Include thoughtfully-worded, well-structured tests
* Test all new features and bug fixes
* Keep test files in the `test` directory
* Name test files with `_test.js` suffix


## Documentation

* Keep README.md up to date
* Comment your code
* Update JSDoc comments for any changed functions
* Update API documentation for any changed endpoints


## Questions?

Feel free to contact the project maintainers if you have any questions.

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

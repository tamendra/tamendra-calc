# My Library

A simple library that provides a function to sum an array of numbers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the library using npm:

`npm install tamendra-calc`


Or using yarn:

`yarn add tamendra-calc

## Usage

Here’s an example of how to use the library in your project:

```
import { sum } from 'tamendra-calc';

const data = [1, 2, 3, 4, 5];
const result = sum(data);
console.log(result); // Outputs: 15

```

## API

`sum(data: number[]): number`
This function takes an array of numbers and returns their sum.

Parameters
`data` (number[]): An array of numbers to be summed.

Returns
`number`: The sum of the numbers in the array.

Throws
`Error`: If the input is not an array or contains non-number elements.

## Development
To contribute to the development of this library, follow these steps:

Clone the repository:
`git clone https://github.com/tamendra/tamendra-calc.git`

Navigate to the project directory:
`cd tamendra-calc`

Install the dependencies:
`npm install`

Build the project:
`npm run build`

Run the tests:
`npm test`

## Clone the repository:
`git clone https://github.com/tamendra/tamendra-calc.git`

Navigate to the project directory:
`cd tamendra-calc`

Install the dependencies:
`npm install`

Build the project:

`npm run build`

Run the tests:
`npm test`

## Contributing
Contributions are welcome! Please read our [Contributing Guide](https://github.com/tamendra/tamendra-calc#CONTRIBUTING.md) for more information.

License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/tamendra/tamendra-calc#LICENSE)  file for details.
`
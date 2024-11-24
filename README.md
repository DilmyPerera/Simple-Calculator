# React Calculator SPA

This project is a simple **Calculator Single Page Application (SPA)** built using **React.js**. It performs basic arithmetic operations: addition, subtraction, multiplication, and division, based on two input numbers provided by the user.

---

## Features

- **User-Friendly Interface**: Easy-to-use layout for entering numbers and viewing results.
- **Arithmetic Operations**:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- **Real-Time Calculation**: Results update dynamically as the user inputs numbers.

---

## Installation and Setup

### Prerequisites

- Node.js (v14 or later) and npm installed on your system.
- Basic knowledge of React and JavaScript.

### Steps to Run the Project Locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-calculator.git
   ```

2. Navigate into the project directory:
   ```bash
   cd react-calculator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Code Structure

### `Calculator` Component:
The main component of the app, responsible for:
1. Accepting two numbers (`num1` and `num2`) via input fields.
2. Performing arithmetic calculations and displaying results in a table.

### Hooks Used:
- `useState`: Manages the state of the input numbers (`num1` and `num2`).

---

## CSS Styling
The styling for the calculator is managed in the `Calculator.css` file. It handles:
- Table layout for inputs and results.
- Center alignment and proper spacing between elements.

---

## Usage

1. Enter a value for **Number 1**.
2. Enter a value for **Number 2**.
3. The results for all operations (Addition, Subtraction, Multiplication, and Division) will be displayed dynamically in the table.

---

## Future Improvements

- Add advanced features like square roots, percentages, or exponential calculations.
- Improve the UI with a responsive design.
- Display error messages for invalid inputs (e.g., division by zero).

---

### Happy Calculating! 😊

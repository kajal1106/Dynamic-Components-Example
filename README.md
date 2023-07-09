
```markdown
# React Dynamic Components Example

This is a sample React application that demonstrates the usage of dymanic componet and styled-components for styling components. The code showcases different styling techniques using styled-components and provides an interactive form as an example.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/react-styling-example.git](https://github.com/kajal1106/Dynamic-Components-Example.git]
   ```

2. Navigate to the project directory:

   ```bash
   cd distilled-task
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will be running at [http://localhost:3000](http://localhost:3000).

## Folder Structure

The project structure is organized as follows:

- `src`: Contains the source code of the application.
  - `components`: Contains reusable components used in the application.
  - `App.tsx`: The main component that renders the application.

## Styling

The application uses styled-components library for styling. The styling is defined using tagged template literals in JavaScript, allowing for dynamic and responsive styles. The `styled` function is used to create styled components, which can be further customized with props.

## Features

- Dynamic styling based on component state.
- Responsive design using media queries.
- Form handling and input validation.
- State management using React hooks.

## App.tsx

The `App.tsx` file defines the main component of your React application. It includes the following key components and functionality:

### State Variables

- `isHidden`: A boolean state variable that determines whether the form inputs are hidden or visible.
- `formInputs`: An array state variable that stores the values of the form inputs.

### `toggleVisibility` Function

- This function is triggered when the toggle button is clicked.
- It toggles the `isHidden` state variable to show or hide the form inputs.
- If the inputs are hidden (`isHidden` is true), it also clears out any empty input fields by filtering the `formInputs` array.

### `handleSubmit` Function

- This function is triggered when the form is submitted.
- It prevents the default form submission behavior.
- It processes the values of the form inputs and creates an output object with a `fieldArray` property that contains the input values.

### Rendered Components

- `StyledAppContainer`: A styled container component for the entire app.
- `AppHeader`: A component that displays the app's title and description.
- `FormInput` (imported from `'./components/FormInput/FormInput'`): A custom component that renders an input field.
- `Button` and `ButtonContainer`: Styled components for rendering buttons.
- A conditional rendering of the form inputs based on the `isHidden` state variable.
- A toggle button to show/hide the form inputs.

### Return Statement

The `App` component returns the JSX code that defines the structure and layout of the app. It includes the various styled components, the form inputs, and the toggle button.


## Components
## DynamicInput Component

The `DynamicInput` component is a custom input component that showcases dynamic styling based on the component's state. It is defined in the `DynamicInput.tsx` file.

### Usage

```jsx
<DynamicInput label="Username" value={username} onChange={handleUsernameChange} />
```

### Props

- `label` (string): The label for the input.
- `value` (string): The current value of the input.
- `onChange` (function): A callback function invoked when the input value changes.

### Implementation

The `DynamicInput` component uses the `BaseInput` component as a base and adds dynamic styling based on the state of the input. It renders the `BaseInput` component and applies additional styles based on the state.

## BaseInput Component

The `BaseInput` component is a reusable input component that provides a consistent style for input fields. It is defined in the `BaseInput.tsx` file.

### Usage

```jsx
<BaseInput label="Username" value={username} onChange={handleUsernameChange} />
```

### Props

- `label` (string): The label for the input.
- `value` (string): The current value of the input.
- `onChange` (function): A callback function invoked when the input value changes.

### Implementation

The `BaseInput` component is a simple input wrapper that renders a label and an input field. It applies consistent styling to the input field, such as border, padding, and font styles, to provide a unified look and feel across the application.

The `label` prop is used to render the label for the input, while the `value` and `onChange` props are used to control the input value and handle input changes, respectively.

These components demonstrate how you can create reusable input components with consistent styling and add dynamic styles based on the component's state.

## FormInput Component

The `FormInput` component is a reusable component that represents an input field within a form. It is designed to handle user input and provide validation functionality.

### Usage

```jsx
<FormInput
  label="Username"
  name="username"
  value={username}
  onChange={handleUsernameChange}
  error={usernameError}
/>
```

### Props

- `label` (string): The label for the input field.
- `name` (string): The name of the input field.
- `value` (string): The current value of the input field.
- `onChange` (function): A callback function invoked when the input value changes.
- `error` (string): An optional error message to display for the input field.

### Implementation

The `FormInput` component renders a label and an input field. It handles user input and triggers the `onChange` callback function when the input value changes.

The `label` prop is used to display the label for the input field, and the `name` prop is used to uniquely identify the input field within the form.

The `value` prop represents the current value of the input field, and the `onChange` prop is responsible for updating the value in response to user input.

The `error` prop is optional and can be used to display an error message below the input field. This is typically used for form validation, where an error message is shown if the input value is invalid.

The `FormInput` component can be used as a building block for creating forms in your application. It provides a consistent and reusable input field with validation capabilities. You can customize the component and extend its functionality based on your specific requirements.


## License
```


## Table of contents

- [Table of contents](#table-of-contents)
- [Overview](#overview)
  - [Features](#features)
  - [Links](#links)
  - [Built with](#built-with)
  - [Installation guide](#installation-guide)
  - [Folder Structure](#folder-structure)
  - [Component and its properties](#component-and-its-properties)
- [Storybook](#storybook)
- [Screenshots](#screenshots)
- [Author](#author)

## Overview
This is a sample React application that demonstrates the usage of dynamic components and styled-components for styling components. The code showcases various styling techniques using styled-components and provides an interactive form as an example. The Dynamic Input Component generates new Base Inputs dynamically based on the user's interactions with the input they are typing in. It adheres to the following conditions:

### Features
- Dynamic styling based on component state.
- Responsive design using media queries.
- Form handling and input validation.
- State management using React hooks.
- A new input appears when the user starts typing in a text input.
- If the text is removed from an input that is not the last one, it will remain there.
- Only one empty input at the end is allowed.
- When the user toggles or revisits the rendered component, empty inputs will be removed.

### Links

- Solution URL: [Click Here](https://github.com/kajal1106/Dynamic-Components-Example)
- Live Site URL: [Click Here](https://dynamic-components-example.netlify.app/)
- Code Sandbox URL: [Click Here](https://codesandbox.io/p/github/kajal1106/Dynamic-Components-Example/master?workspaceId=f9297b46-44b3-480b-8979-0c911c8cbd19)

  
### Installation Guide

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-styling-example.git](https://github.com/kajal1106/Dynamic-Components-Example.git
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

### Folder Structure

The project structure is organized as follows:

- `src`: Contains the source code of the application.
  - `components`: Contains reusable components used in the application.
  - `App.tsx`: The main component that renders the application.

## Component and its properties

### Styling

The application uses styled-components library for styling. The styling is defined using tagged template literals in JavaScript, allowing for dynamic and responsive styles. The `styled` function is used to create styled components, which can be further customized with props.


### App.tsx

The `App.tsx` file defines the main component of your React application. It includes the following key components and functionality:

#### State Variables

- `isHidden`: A boolean state variable that determines whether the form inputs are hidden or visible.
- `formInputs`: An array state variable that stores the values of the form inputs.

#### `toggleVisibility` Function

- This function is triggered when the toggle button is clicked.
- It toggles the `isHidden` state variable to show or hide the form inputs.
- If the inputs are hidden (`isHidden` is true), it also clears out any empty input fields by filtering the `formInputs` array.

#### `handleSubmit` Function

- This function is triggered when the form is submitted.
- It prevents the default form submission behavior.
- It processes the values of the form inputs and creates an output object with a `fieldArray` property that contains the input values.

#### Rendered Components

- `StyledAppContainer`: A styled container component for the entire app.
- `AppHeader`: A component that displays the app's title and description.
- `FormInput` (imported from `'./components/FormInput/FormInput'`): A custom component that renders an input field.
- `Button` and `ButtonContainer`: Styled components for rendering buttons.
- A conditional rendering of the form inputs based on the `isHidden` state variable.
- A toggle button to show/hide the form inputs.

#### Return Statement

The `App` component returns the JSX code that defines the structure and layout of the app. It includes the various styled components, the form inputs, and the toggle button.


### Components

#### DynamicInput Component

The `DynamicInput` component is a custom input component that showcases dynamic styling based on the component's state. It is defined in the `DynamicInput.tsx` file.

#### Usage

```jsx
<DynamicInput label="Username" value={username} onChange={handleUsernameChange} />
```

#### Props

- `label` (string): The label for the input.
- `value` (string): The current value of the input.
- `onChange` (function): A callback function invoked when the input value changes.

#### Implementation

The `DynamicInput` component uses the `BaseInput` component as a base and adds dynamic styling based on the state of the input. It renders the `BaseInput` component and applies additional styles based on the state.

### BaseInput Component

The `BaseInput` component is a reusable input component that provides a consistent style for input fields. It is defined in the `BaseInput.tsx` file.

#### Usage

```jsx
<BaseInput label="Username" value={username} onChange={handleUsernameChange} />
```

#### Props

- `label` (string): The label for the input.
- `value` (string): The current value of the input.
- `onChange` (function): A callback function invoked when the input value changes.

#### Implementation

The `BaseInput` component is a simple input wrapper that renders a label and an input field. It applies consistent styling to the input field, such as border, padding, and font styles, to provide a unified look and feel across the application.

The `label` prop is used to render the label for the input, while the `value` and `onChange` props are used to control the input value and handle input changes, respectively.

These components demonstrate how you can create reusable input components with consistent styling and add dynamic styles based on the component's state.

### FormInput Component

The `FormInput` component is a reusable component that represents an input field within a form. It is designed to handle user input and provide validation functionality.

#### Usage

```jsx
<FormInput
  label="Username"
  name="username"
  value={username}
  onChange={handleUsernameChange}
  error={usernameError}
/>
```

#### Props

- `label` (string): The label for the input field.
- `name` (string): The name of the input field.
- `value` (string): The current value of the input field.
- `onChange` (function): A callback function invoked when the input value changes.
- `error` (string): An optional error message to display for the input field.

#### Implementation

The `FormInput` component renders a label and an input field. It handles user input and triggers the `onChange` callback function when the input value changes.

The `label` prop is used to display the label for the input field, and the `name` prop is used to uniquely identify the input field within the form.

The `value` prop represents the current value of the input field, and the `onChange` prop is responsible for updating the value in response to user input.

The `error` prop is optional and can be used to display an error message below the input field. This is typically used for form validation, where an error message is shown if the input value is invalid.

The `FormInput` component can be used as a building block for creating forms in your application. It provides a consistent and reusable input field with validation capabilities. You can customize the component and extend its functionality based on your specific requirements.


## Storybook

### Running Storybook

To run Storybook and view the component documentation, follow these steps:

   1. Install the project dependencies:
      ```bash
      npm install
      ```
   
   2. Run Storybook:
      ```bash
      npm run storybook
      ```

   3. Open your browser and navigate to `http://localhost:6006` to view the Storybook interface.

### Component Documentation

- [BaseInput](./src/stories/BaseInput.stories.tsx)
- [DynamicInput](./src/stories/DynamicInput.stories.tsx)
- [FormInput](./src/stories/FormInput.stories.tsx)

### Screenshot of Storybook Interface
<img width="1440" alt="image" src="https://github.com/kajal1106/Dynamic-Components-Example/assets/39821430/1bf0a390-c523-4a56-b558-1adb93276328">


### Screenshots

#### List of thoughts in dynamic input
<img width="1440" alt="image" src="https://github.com/kajal1106/Dynamic-Components-Example/assets/39821430/339030bc-424a-4ba0-ab20-2d1f4131ed6f">

#### This part is demonstrating the error-handling in the dynamic input componet
<img width="1440" alt="image" src="https://github.com/kajal1106/Dynamic-Components-Example/assets/39821430/4c1a4c5e-2ee9-4fe0-88d1-5e7d043c06ae">

#### Upon submit button firing an alert to show the output of the fields in the following format:
<img width="1440" alt="image" src="https://github.com/kajal1106/Dynamic-Components-Example/assets/39821430/13be491c-efff-49cd-94fd-c69bae3fa710">

## Author

- LinkedIn - [Kajal Singh](https://www.linkedin.com/in/singhkajal/)

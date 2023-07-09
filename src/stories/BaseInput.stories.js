import { BaseInput } from "./BaseInput";

export default {
  title: 'BaseInput',
  component: BaseInput,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Primary = {
  args: {
    value: '',
    isFocus: false,
    isEmpty: true,
    isFilled: false,
    isError: false,
    onChange: undefined
  }
}
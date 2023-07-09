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
    isfocus: false,
    isEmpty: true,
    isFilled: false,
    iserror: false,
    onChange: undefined,
    onFocus: undefined,
    onBlur: undefined
  },
  argTypes: {
    isfocus: {
      control: false
    },
    isEmpty: {
      control: false
    },
    isFilled: {
      control: false
    }
  }
}
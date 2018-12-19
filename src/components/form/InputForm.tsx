import {Form, Formik} from "formik";
import * as React from "react";

interface IState {
  inputValue: string
}

class InputForm extends React.Component<{}, IState> {
  public readonly state: IState = {
    inputValue: 'フォームに入力した値がここに入ります',
  };

  public handleSubmit(value: string) {
    this.setState(() => ({
      inputValue: value,
    }));
  }

  public render() {
    return (
      <>
        <Formik
          initialValues={{
            inputValue: ''
          }}
          onSubmit={(value) => this.handleSubmit(value.inputValue)}
        >
          {({values, handleSubmit, handleChange}) => (
            <>
              <Form>
                <input
                  name="inputValue"
                  type="text"
                  onChange={handleChange}
                  placeholder="文字列を入力"
                />
                <button type="submit" onSubmit={() => handleSubmit}>submit</button>
              </Form>
            </>
          )}
        </Formik>
        <p>{this.state.inputValue}</p>
      </>
    )
  }
}

export default InputForm;
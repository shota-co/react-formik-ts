import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
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
                <Input
                  name="inputValue"
                  type="text"
                  onChange={handleChange}
                  placeholder="文字列を入力"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onSubmit={() => handleSubmit}>submit</Button>
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
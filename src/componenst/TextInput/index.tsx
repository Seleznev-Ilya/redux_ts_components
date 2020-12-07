import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import { Input } from "../Input";
// import { ItemInput } from "../Input";

interface Props {
  placeHolder: string;
  action: (...a: any) => { type: string; payload: string; id?: number };
  actionArguments?: {
    payload: string;
    id: number;
  };
  toggleTitleState?: () => void;
  deleteHendler?: () => any;
}
let state = { data: { title: "", titleItem: "" } };
const Textinput = ({
  placeHolder,
  action,
  actionArguments,
  toggleTitleState,
  deleteHendler,
}: Props) => {
  const dispatch = useDispatch();
  state = {
    data: {
      title: "",
      titleItem: actionArguments ? actionArguments.payload : "",
    },
  };

  const handelOnSubmit = (values: any) => {
    if (!!values.titleItem ? !values.titleItem.trim() : true)
      if (deleteHendler) deleteHendler();

    if (actionArguments) {
      dispatch(action(values.titleItem, actionArguments.id));
    } else if (!!values.title && values.title.trim() !== "") {
      dispatch(addTodo(values.title));
    }

    if (toggleTitleState) toggleTitleState();
  };
  const formEvents = (e: any) => {};

  return (
    <div>
      <Form
        onSubmit={handelOnSubmit}
        initialValues={state.data}
        render={({ form, values }) => (
          <form
            onSubmit={(e: any) => (
              e.preventDefault(e),
              Object.keys(values).length !== 0 && handelOnSubmit(values),
              form.reset()
            )}
          >
            <Field<string>
              name={!actionArguments ? "title" : "titleItem"}
              component={Input}
              placeholder={actionArguments ? "" : placeHolder}
              onBlur={(e: any) => (
                e.preventDefault(e),
                Object.keys(values).length !== 0 && handelOnSubmit(values),
                form.reset()
              )}
            />
          </form>
        )}
      />
    </div>
  );
};

export default Textinput;

import React, {useState, useEffect} from "react";
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import formSchema from "./validation/formSchema";
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  mushroom: false,
  ham: false,
  olives: false,
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialOrders = [];
const initialDisabled = true;

const App = () => {

  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'mushroom', 'ham', ].filter(topping => formValues[topping])
    }
    console.log(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <h1>Billy's Pizza Place</h1>
      <Switch>
        <Route path="/pizza">
        <Form 
          values={formValues}
          change={inputChange}
          disabled={disabled}
          errors={formErrors}
          submit={formSubmit}
        />
        </Route>
        <Route path="/">
        <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;

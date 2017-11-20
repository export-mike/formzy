![Formzy logo](logo-small.png)

# Eazy forms for React

```yarn add formzy```

## Features

- Populate from parent component state
- Submissions
- Async data loading to pre-populate forms
- Validation

### [Example](https://formzy.surge.sh)

```js
import React, {PureComponent} from 'react'
import Formzy, {isEmail} from './formzy'

const validate = (fields) => {
  const errors = {};
  if (!fields.email) {
    errors.email = 'Please enter an email';
  } else if (!isEmail(fields.email)) {
    errors.email = 'Please enter a valid email';
  }
  return errors;
}
export default class BasicExample extends PureComponent {
  state = {
    user: {
      email : '',
      password: ''
    }
  }
  submit = data => new Promise(resolve => setTimeout(() => resolve({
    ...data,
    firstname: `${data.firstname}.bounced` //show that the UI will update when the server responds with saved data.
  }), 2000))
  render() {
    return <div>
      <h2>Basic Example</h2>
      <Formzy
        submit={this.submit}
        initialValue={this.state.user}
        fields={user => ({
          email: {
            label: 'Email',
            value: user.email,
            type: 'email'
          },
          password: {
            label: 'Password',
            value: user.password,
            type: 'password'
          }
        })}
        validate={validate}
        render={({fields, isFormValid, submit, submitting, errorSubmitting}) =>
        <form onSubmit={submit}>
          {errorSubmitting && <span>Error Submitting</span>}
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={fields.email.onChange}
              onBlur={fields.email.onBlur}
              value={fields.email.value}
            />
            {fields.email.touched && fields.email.value && <div>{fields.email.error}</div>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={fields.password.onChange}
              onBlur={fields.password.onBlur}
              value={fields.password.value}
            />
            {fields.password.touched && fields.password.error && <div>{fields.spassword.error}</div>}
          </div>
          <button type="submit" disabled={submitting || !isFormValid}>
            {!submitting && <span>Submit</span>}
            {submitting && <span>Please wait...</span>}
          </button>
        </form>}
      />
    </div>
  }
}
```


# Alternatives
- [formik](https://github.com/jaredpalmer/formik)
- [redux forms](https://github.com/erikras/redux-form)

## Thanks

- [Canva for the logo](https://www.canva.com)
- [Create React App for being awesome!](https://github.com/facebookincubator/create-react-app)
- [MedApps for sponsoring](https://medapps.com.au/)

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

export default class PopulateExample extends PureComponent {
  fetch = () => new Promise(resolve => setTimeout(() => resolve({
    email: 'rick@morty.com',
    password: 'mr-meeseeks-cant-do'
  }), 2000))
  submit = data => new Promise(resolve => setTimeout(() => resolve({
    ...data,
    firstname: `${data.firstname}.bounced` //show that the UI will update when the server responds with saved data.
  }), 2000))
  render() {
    return <div>
      <h2>Populate Example</h2>
      <Formzy
        fetch={this.fetch}
        submit={this.submit}
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
        render={({fields, isFormValid, submit, submitting, loading, errorSubmitting}) => {
          if (loading) return <div>Loading...</div>
          return <form onSubmit={submit}>
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
            </form>
        }}
      />
    </div>
  }
}

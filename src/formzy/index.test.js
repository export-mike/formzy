import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Formzy, { isEmail } from './';
import toJson from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });

test('Form should render with no errors', () => {
  const tree = renderer.create(<Formzy />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Form should render with initialValue', () => {
  const initialValue = { make: 'rover', model: '200', mileage: 97000 };
  const tree = renderer
    .create(
      <Formzy
        initialValue={initialValue}
        fields={car => ({
          make: {
            label: 'Make',
            value: car.make,
          },
          model: {
            label: 'Model',
            value: car.model,
          },
          mileage: {
            label: 'Mileage (Miles)',
            value: car.mileage,
            type: 'number',
          },
        })}
        render={({ fields }) => (
          <form>
            <input
              type={fields.make.type}
              onChange={fields.make.onChange}
              onBlur={fields.make.onBlur}
              onFocus={fields.make.onFocus}
              value={fields.make.value}
              placeholder={fields.make.label}
            />
            <input
              type={fields.model.type}
              onChange={fields.model.onChange}
              onBlur={fields.model.onBlur}
              onFocus={fields.model.onFocus}
              value={fields.model.value}
              placeholder={fields.model.label}
            />
            <input
              type={fields.mileage.type}
              onChange={fields.mileage.onChange}
              onBlur={fields.mileage.onBlur}
              onFocus={fields.mileage.onFocus}
              value={fields.mileage.value}
              placeholder={fields.mileage.label}
            />
          </form>
        )}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Form should render with updated value', () => {
  const initialValue = { make: 'rover', model: '200', mileage: 97000 };
  const tree = mount(
    <Formzy
      initialValue={initialValue}
      fields={car => ({
        make: {
          label: 'Make',
          value: car.make,
        },
        model: {
          label: 'Model',
          value: car.model,
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number',
        },
      })}
      render={({ fields }) => (
        <form>
          <input
            type={fields.make.type}
            onChange={fields.make.onChange}
            onBlur={fields.make.onBlur}
            onFocus={fields.make.onFocus}
            value={fields.make.value}
            placeholder={fields.make.label}
          />
          <input
            type={fields.model.type}
            onChange={fields.model.onChange}
            onBlur={fields.model.onBlur}
            onFocus={fields.model.onFocus}
            value={fields.model.value}
            placeholder={fields.model.label}
          />
          <input
            type={fields.mileage.type}
            onChange={fields.mileage.onChange}
            onBlur={fields.mileage.onBlur}
            onFocus={fields.mileage.onFocus}
            value={fields.mileage.value}
            placeholder={fields.mileage.label}
          />
        </form>
      )}
    />
  );

  const input = tree.find('input[placeholder="Mileage (Miles)"]');
  input.simulate('change', { target: { value: '10000' } });

  expect(toJson(tree)).toMatchSnapshot();
});

test('Form should render as expected after focus', () => {
  const initialValue = { make: 'rover', model: '200', mileage: 97000 };
  const tree = mount(
    <Formzy
      initialValue={initialValue}
      fields={car => ({
        make: {
          label: 'Make',
          value: car.make,
        },
        model: {
          label: 'Model',
          value: car.model,
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number',
        },
      })}
      render={({ fields }) => (
        <form>
          <input
            type={fields.make.type}
            onChange={fields.make.onChange}
            onBlur={fields.make.onBlur}
            onFocus={fields.make.onFocus}
            value={fields.make.value}
            placeholder={fields.make.label}
          />
          <input
            type={fields.model.type}
            onChange={fields.model.onChange}
            onBlur={fields.model.onBlur}
            onFocus={fields.model.onFocus}
            value={fields.model.value}
            placeholder={fields.model.label}
          />
          <input
            type={fields.mileage.type}
            onChange={fields.mileage.onChange}
            onBlur={fields.mileage.onBlur}
            onFocus={fields.mileage.onFocus}
            value={fields.mileage.value}
            placeholder={fields.mileage.label}
          />
        </form>
      )}
    />
  );

  const input = tree.find('input[placeholder="Mileage (Miles)"]');
  input.simulate('focus', { target: { value: '10000' } });

  expect(toJson(tree)).toMatchSnapshot();
});

test('Form should render as expected after blur', () => {
  const initialValue = { make: 'rover', model: '200', mileage: 97000 };
  const tree = mount(
    <Formzy
      initialValue={initialValue}
      fields={car => ({
        make: {
          label: 'Make',
          value: car.make,
        },
        model: {
          label: 'Model',
          value: car.model,
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number',
        },
      })}
      render={({ fields }) => (
        <form>
          <input
            type={fields.make.type}
            onChange={fields.make.onChange}
            onBlur={fields.make.onBlur}
            onFocus={fields.make.onFocus}
            value={fields.make.value}
            placeholder={fields.make.label}
          />
          <input
            type={fields.model.type}
            onChange={fields.model.onChange}
            onBlur={fields.model.onBlur}
            onFocus={fields.model.onFocus}
            value={fields.model.value}
            placeholder={fields.model.label}
          />
          <input
            type={fields.mileage.type}
            onChange={fields.mileage.onChange}
            onBlur={fields.mileage.onBlur}
            onFocus={fields.mileage.onFocus}
            value={fields.mileage.value}
            placeholder={fields.mileage.label}
          />
        </form>
      )}
    />
  );

  const input = tree.find('input[placeholder="Mileage (Miles)"]');
  input.simulate('blur', { target: { value: '10000' } });

  expect(toJson(tree)).toMatchSnapshot();
});

test('Form should render with initial values from fetch with loading state', () => {
  const initialValue = { make: 'rover', model: '200', mileage: 97000 };
  const tree = mount(
    <Formzy
      fetch={() =>
        new Promise(
          resolve =>
            setTimeout(() =>
              resolve({
                ...initialValue,
              })
            ),
          500
        )
      }
      fields={car => ({
        make: {
          label: 'Make',
          value: car.make,
        },
        model: {
          label: 'Model',
          value: car.model,
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number',
        },
      })}
      render={({ fields, loading }) => (
        <form>
          {loading && <div>Loading...</div>}
          <input
            type={fields.make.type}
            onChange={fields.make.onChange}
            onBlur={fields.make.onBlur}
            onFocus={fields.make.onFocus}
            value={fields.make.value}
            placeholder={fields.make.label}
          />
          <input
            type={fields.model.type}
            onChange={fields.model.onChange}
            onBlur={fields.model.onBlur}
            onFocus={fields.model.onFocus}
            value={fields.model.value}
            placeholder={fields.model.label}
          />
          <input
            type={fields.mileage.type}
            onChange={fields.mileage.onChange}
            onBlur={fields.mileage.onBlur}
            onFocus={fields.mileage.onFocus}
            value={fields.mileage.value}
            placeholder={fields.mileage.label}
          />
        </form>
      )}
    />
  );

  const input = tree.find('input[placeholder="Mileage (Miles)"]');
  input.simulate('change', { target: { value: '10000' } });
  expect(toJson(tree)).toMatchSnapshot();
});

test('Form should render with initial values from fetch without loading state', cb => {
  const initialValue = { make: 'rover', model: '200', mileage: 97000 };
  const tree = mount(
    <Formzy
      fetch={() =>
        new Promise(resolve =>
          resolve({
            ...initialValue,
          })
        )
      }
      fields={car => ({
        make: {
          label: 'Make',
          value: car.make,
        },
        model: {
          label: 'Model',
          value: car.model,
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number',
        },
      })}
      render={({ fields, loading }) => (
        <form>
          {loading && <div>Loading...</div>}
          <input
            type={fields.make.type}
            onChange={fields.make.onChange}
            onBlur={fields.make.onBlur}
            onFocus={fields.make.onFocus}
            value={fields.make.value}
            placeholder={fields.make.label}
          />
          <input
            type={fields.model.type}
            onChange={fields.model.onChange}
            onBlur={fields.model.onBlur}
            onFocus={fields.model.onFocus}
            value={fields.model.value}
            placeholder={fields.model.label}
          />
          <input
            type={fields.mileage.type}
            onChange={fields.mileage.onChange}
            onBlur={fields.mileage.onBlur}
            onFocus={fields.mileage.onFocus}
            value={fields.mileage.value}
            placeholder={fields.mileage.label}
          />
        </form>
      )}
    />
  );
  setTimeout(() => {
    const input = tree.find('input[placeholder="Mileage (Miles)"]');
    input.simulate('change', { target: { value: '10000' } });
    expect(toJson(tree)).toMatchSnapshot();
    cb();
  }, 0);
});
test('Form should render with date field', () => {
  const initialValue = {
    created: new Date('10-10-1990 10:10:10'),
    make: 'rover',
    model: '200',
    mileage: 97000,
  };
  const tree = mount(
    <Formzy
      initialValue={initialValue}
      fields={car => ({
        make: {
          label: 'Make',
          value: car.make,
        },
        created: {
          label: 'Created',
          value: car.created,
          type: 'date',
        },
        model: {
          label: 'Model',
          value: car.model,
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number',
        },
      })}
      render={({ fields, loading }) => (
        <form>
          {loading && <div>Loading...</div>}
          <input
            type={fields.make.type}
            onChange={fields.make.onChange}
            onBlur={fields.make.onBlur}
            onFocus={fields.make.onFocus}
            value={fields.make.value}
            placeholder={fields.make.label}
          />
          <input
            type={fields.created.type}
            onChange={fields.created.onChange}
            onBlur={fields.created.onBlur}
            onFocus={fields.created.onFocus}
            value={fields.created.value}
            placeholder={fields.created.label}
          />
          <input
            type={fields.model.type}
            onChange={fields.model.onChange}
            onBlur={fields.model.onBlur}
            onFocus={fields.model.onFocus}
            value={fields.model.value}
            placeholder={fields.model.label}
          />
          <input
            type={fields.mileage.type}
            onChange={fields.mileage.onChange}
            onBlur={fields.mileage.onBlur}
            onFocus={fields.mileage.onFocus}
            value={fields.mileage.value}
            placeholder={fields.mileage.label}
          />
        </form>
      )}
    />
  );
  setTimeout(() => {
    const input = tree.find('input[placeholder="Mileage (Miles)"]');
    input.simulate('change', { target: { value: '10000' } });
    expect(toJson(tree)).toMatchSnapshot();
    cb();
  }, 0);
});

test('Form should render with submit correct render props and call submit callback', () => {
  const initialValue = {
    created: new Date('10-10-1990 10:10:10'),
    make: 'rover',
    model: '200',
    mileage: 97000,
  };
  const submitSpy = jest.fn();
  const renderSpy = jest.fn();
  let renders = 0;
  const renderPropsSpy = Component => args => {
    renders++;
    if (renders === 4) {
      expect(submitSpy).toBeCalled();
      expect(args.submitting).toEqual(true);
    }
    if (renders === 5) {
      expect(submitSpy).toBeCalled();
      expect(args.submitting).toEqual(false);
    }
    //TODO Reduce wasted Render Cycles
    expect(renders).toBeLessThan(6);
    return <Component {...args} />;
  };
  const tree = mount(
    <Formzy
      initialValue={initialValue}
      submit={() =>
        new Promise(
          resolve =>
            setTimeout(() => {
              resolve();
              submitSpy();
            }),
          400
        )
      }
      fields={car => ({
        make: {
          label: 'Make',
          value: car.make,
        },
        created: {
          label: 'Created',
          value: car.created,
          type: 'date',
        },
        model: {
          label: 'Model',
          value: car.model,
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number',
        },
      })}
      submit={submitSpy}
      render={renderPropsSpy(({ loading, fields, submit, submitting }) => (
        <form>
          {loading && <div>Loading...</div>}
          <input
            type={fields.make.type}
            onChange={fields.make.onChange}
            onBlur={fields.make.onBlur}
            onFocus={fields.make.onFocus}
            value={fields.make.value}
            placeholder={fields.make.label}
          />
          <input
            type={fields.created.type}
            onChange={fields.created.onChange}
            onBlur={fields.created.onBlur}
            onFocus={fields.created.onFocus}
            value={fields.created.value}
            placeholder={fields.created.label}
          />
          <input
            type={fields.model.type}
            onChange={fields.model.onChange}
            onBlur={fields.model.onBlur}
            onFocus={fields.model.onFocus}
            value={fields.model.value}
            placeholder={fields.model.label}
          />
          <input
            type={fields.mileage.type}
            onChange={fields.mileage.onChange}
            onBlur={fields.mileage.onBlur}
            onFocus={fields.mileage.onFocus}
            value={fields.mileage.value}
            placeholder={fields.mileage.label}
          />
          <button onClick={submit}>Save</button>
        </form>
      ))}
    />
  );
  const input = tree.find('input[placeholder="Mileage (Miles)"]');
  input.simulate('change', { target: { value: '10000' } });
  expect(toJson(tree)).toMatchSnapshot();
  const button = tree.find('button');
  button.simulate('click');
});

test('Form should render with initial values from fail fetch loading state', cb => {
  const initialValue = { make: 'rover', model: '200', mileage: 97000 };
  const tree = mount(
    <Formzy
      fetch={() =>
        new Promise((resolve, reject) =>
          reject({
            ...initialValue,
          })
        )
      }
      fields={car => ({
        make: {
          label: 'Make',
          value: car.make,
        },
        model: {
          label: 'Model',
          value: car.model,
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number',
        },
      })}
      render={({ fields, loading, errorLoading }) => (
        <form>
          {loading && <div>Loading...</div>}
          {errorLoading && <div>Error Loading :( ...</div>}
          <input
            type={fields.make.type}
            onChange={fields.make.onChange}
            onBlur={fields.make.onBlur}
            onFocus={fields.make.onFocus}
            value={fields.make.value}
            placeholder={fields.make.label}
          />
          <input
            type={fields.model.type}
            onChange={fields.model.onChange}
            onBlur={fields.model.onBlur}
            onFocus={fields.model.onFocus}
            value={fields.model.value}
            placeholder={fields.model.label}
          />
          <input
            type={fields.mileage.type}
            onChange={fields.mileage.onChange}
            onBlur={fields.mileage.onBlur}
            onFocus={fields.mileage.onFocus}
            value={fields.mileage.value}
            placeholder={fields.mileage.label}
          />
        </form>
      )}
    />
  );
  setTimeout(() => {
    const input = tree.find('input[placeholder="Mileage (Miles)"]');
    input.simulate('change', { target: { value: '10000' } });
    expect(toJson(tree)).toMatchSnapshot();
    cb();
  }, 0);
});

test('is invalid email', () => {
  const cases = [
    'plainaddress',
    '#@%^%#$@#$@#.com',
    '@domain.com',
    'Joe Smith <email@domain.com>',
    'email.domain.com',
    'email@domain@domain.com',
    '.email@domain.com',
    'email.@domain.com',
    'email..email@domain.com',
    'email@domain.com (Joe Smith)',
    'email@domain',
    'email@111.222.333.44444',
    'email@domain..com',
  ];
  cases.forEach(a => {
    expect(isEmail(a)).toBeFalsy();
  });
});

test.skip('ignore? "あいうえお@domain.com", "email@-domain.com"', () => {
  expect(isEmail('あいうえお@domain.com')).toBeFalsy();
  expect(isEmail('email@-domain.com')).toBeFalsy();
});

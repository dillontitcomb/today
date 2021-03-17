import { useFormik } from 'formik';
import { mutate } from 'swr';
import { fetcher } from '../../utils/helperFunctions';
import { OutlineButton } from '../layout/Buttons';
import { Form, NumberInput, Option, Select, TextInput } from '../layout/Forms';
import { Lead } from '../layout/Typography';

export default function AddTask() {
  const formik = useFormik({
    initialValues: {
      name: '',
      time: 20,
      resistance: 0,
      urgency: 0,
      recurring: false,
      status: 'incomplete',
    },

    onSubmit: async (values) => {
      console.log('trying to submit from addtask form');
      const newTask = await fetcher('http://localhost:3000/api/tasks', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      let task = newTask.data;
      console.log(`New task, ${task.name} added`);
      mutate('/api/tasks');
    },
  });
  function onSelect(e) {
    e.preventDefault();
    const urgency = e.target.value;
    formik.setFieldValue(e.target.name, urgency);
  }

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Lead primary>Create a new task.</Lead>
        <p>
          I
          <Select name='urgency' id='urgency' onChange={onSelect}>
            <Option value='0'>at some point</Option>
            <Option value='1'>soon</Option>
            <Option value='2'>urgently</Option>
            <Option value='3'>very urgently</Option>
          </Select>
          want to{' '}
          <TextInput
            type='text'
            name='name'
            id='name'
            onChange={formik.handleChange}
            value={formik.values.name}
          ></TextInput>
          .
        </p>
        <p>
          This should take about
          <NumberInput
            placeholder='0'
            name='time'
            id='time'
            onChange={formik.handleChange}
            value={formik.values.time}
          ></NumberInput>
          minutes.
        </p>
        <p>
          I feel{' '}
          <Select
            name='resistance'
            id='resistance'
            onChange={onSelect}
            value={formik.values.resistance}
          >
            <Option value='0'>Good</Option>
            <Option value='1'>Hesitant</Option>
            <Option value='2'>Very Stressed</Option>
            <Option value='3'>Terrified</Option>
          </Select>{' '}
          about completing this task.
        </p>
        <p>
          I probably
          <Select>
            <Option value='false'>Will not</Option>
            <Option value='true'>Will</Option>
          </Select>{' '}
          do this task again in the future.
        </p>
        <OutlineButton primary type='submit'>
          Add Task
        </OutlineButton>
      </Form>
    </div>
  );
}

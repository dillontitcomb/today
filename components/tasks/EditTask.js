import { useFormik } from 'formik';
import styled from 'styled-components';
import { fetcher } from '../../utils/helperFunctions';
import { Button } from '../layout/Buttons';
import { Form, NumberInput, Option, Select, TextInput } from '../layout/Forms';
import { Lead } from '../layout/Typography';

const ButtonContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  grid-gap: 0.5rem;
  max-width: 400px;
`;

export default function EditTask({ task }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: task.name ? task.name : '',
      time: task.time ? task.time : 0,
      resistance: task.resistance ? task.resistance : 0,
      urgency: task.urgency ? task.urgency : 0,
      complete: task.complete ? task.complete : false,
      active: task.active ? task.active : true,
      _id: task._id ? task._id : '',
    },
    onSubmit: async (values) => {
      console.log('Trying to submit form to edit task!');
      const newTask = await fetcher(
        `http://localhost:3000/api/tasks/${values._id}`,
        {
          method: 'PUT',
          body: JSON.stringify(values),
        }
      );
      console.log(`New task, ${newTask.data.name} added`);
    },
  });

  function onSelect(e) {
    e.preventDefault();
    formik.setFieldValue(e.target.name, e.target.value);
  }

  function handleMarkComplete(e) {
    e.preventDefault();
    console.log(formik.values);
    formik.setFieldValue('complete', true);
    console.log(formik.values);
  }

  return (
    <div>
      <h1>Edit Task</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Lead primary>Update Task</Lead>
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

        <ButtonContainer>
          <Button buttonstyle='primary' onClick={handleMarkComplete}>
            Mark Complete
          </Button>
          <Button buttonstyle='secondary' type='button'>
            Delete Task
          </Button>
          <Button type='submit'>Update Task</Button>
        </ButtonContainer>
      </Form>
    </div>
  );
}

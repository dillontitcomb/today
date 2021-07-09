import { useFormik } from 'formik';
import styled from 'styled-components';
import useGlobalContext from '../../hooks/useGlobalContext';
import { Button } from '../layout/Buttons';
import {
  Checkbox,
  Form,
  NumberInput,
  Option,
  Select,
  TextInput,
} from '../layout/Forms';
import { SubText } from '../layout/Typography';
import { toastSuccess, toastError } from '../../utils/toasts';

const FormContainer = styled.div`
  margin: auto;
  text-align: left;
  max-width: 500px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: stretch;
  grid-gap: 0.5rem;
  max-width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
`;

export default function SimpleEditTask({ task }) {
  const { updateTask, deleteTask, closeModal } = useGlobalContext();

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
      // TODO: Add context func to update task
      console.log('Trying to submit form to edit task!', values._id);
      updateTask(values);
      closeModal();
      toastSuccess('Task Successfully Updated!');
    },
  });

  function onSelect(e) {
    e.preventDefault();
    console.log(formik.values);
    formik.setFieldValue(e.target.name, e.target.value);
  }

  async function handleDeleteTask() {
    console.log('Trying to delete task!');
    deleteTask(task._id);
    closeModal();
    toastError('Task Deleted.');

    // TODO: Add message on tasks dashboard that task has been deleted
  }

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <FormContainer>
          <h1>Edit Task</h1>
          <h3>
            {task.name}, {task.score} point(s).
          </h3>
          <FormGroup>
            <InputGroup>
              <label htmlFor='name'>Name</label>
              <TextInput
                type='text'
                name='name'
                id='name'
                onChange={formik.handleChange}
                value={formik.values.name}
                full
              ></TextInput>
            </InputGroup>
            <SubText>What task do you want to complete?</SubText>
          </FormGroup>
          <FormGroup>
            Urgency
            <Select name='urgency' id='urgency' onChange={onSelect}>
              <Option value='0'>at some point</Option>
              <Option value='1'>soon</Option>
              <Option value='2'>urgently</Option>
              <Option value='3'>very urgently</Option>
            </Select>
            <SubText>How soon does this task need to be completed?</SubText>
          </FormGroup>
          <FormGroup>
            Time
            <NumberInput
              placeholder='0'
              name='time'
              id='time'
              onChange={formik.handleChange}
              value={formik.values.time}
            ></NumberInput>
            minutes.
            <SubText>How long should this take?</SubText>
          </FormGroup>
          <FormGroup>
            Resistance
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
            </Select>
            <SubText>How resistant are you to undertaking this task?</SubText>
          </FormGroup>
          <FormGroup>
            Complete
            <Checkbox
              id='complete'
              name='complete'
              onChange={formik.handleChange}
              checked={formik.values.complete}
            />
          </FormGroup>
          <ButtonContainer>
            <Button type='submit'>Update Task</Button>
            <Button
              buttonstyle='secondary'
              type='button'
              onClick={handleDeleteTask}
            >
              Delete Task
            </Button>
          </ButtonContainer>
        </FormContainer>
      </Form>
    </div>
  );
}

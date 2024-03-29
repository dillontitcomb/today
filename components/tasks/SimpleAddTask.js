import { useFormik } from 'formik';
import styled from 'styled-components';
import useGlobalContext from '../../hooks/useGlobalContext';
import { Button } from '../layout/Buttons';
import { Form, NumberInput, Option, Select, TextInput } from '../layout/Forms';
import { SubText } from '../layout/Typography';
import { toastSuccess } from '../../utils/toasts';

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

// TODO: take as props: habitId (attach to habit array), inactive (change active to false), and updateHabit (make second API request to add this task's ID to the habit that created it)
export default function SimpleAddTask(props) {
  const { addTask, closeModal } = useGlobalContext();

  const formik = useFormik({
    initialValues: {
      name: '',
      time: 0,
      resistance: 0,
      urgency: 0,
      habit: props.habitId ? props.habitId : null,
      active: props.inactive ? false : true,
    },
    onSubmit: async (values) => {
      console.log('Trying to submit form to add task!');
      addTask(values, props.updateHabit);
      closeModal();
      toastSuccess('Task Successfully Created!');
    },
  });

  function onSelect(e) {
    e.preventDefault();
    console.log(formik.values);
    formik.setFieldValue(e.target.name, e.target.value);
  }

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <FormContainer>
          <h1>Add Task</h1>
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
          <ButtonContainer>
            <Button buttonstyle='primary' type='submit'>
              Add Task
            </Button>
          </ButtonContainer>
        </FormContainer>
      </Form>
    </div>
  );
}

import { useFormik } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import { mutate } from 'swr';
import { fetcher } from '../../utils/helperFunctions';
import { Button, OutlineButton } from '../layout/Buttons';
import { Form, NumberInput, Option, Select, TextInput } from '../layout/Forms';
import { SubText } from '../layout/Typography';
// Fields to include/add:
// name, tasks, startDate, endDate, frequencyValue, frequencyPeriod

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;
const FormContainer = styled.div`
  margin: auto;
  text-align: left;
  max-width: 500px;
`;

const DateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
`;

export default function SimpleAddHabit() {
  const [habitPeriod, setHabitPeriod] = useState('day');

  const formik = useFormik({
    initialValues: {
      name: '',
      tasks: [],
      startDate: Date.now(),
      endDate: null,
      frequencyValue: 1,
      frequencyPeriod: 'week',
    },

    onSubmit: async (values) => {
      const newHabit = await fetcher('/api/habits', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      let habit = newHabit.data;
      console.log(`New habit, ${habit.name} added`);
      mutate('/api/habits');
    },
  });
  function onSelect(e) {
    e.preventDefault();
    formik.setFieldValue(e.target.name, e.target.value);
    if (e.target.name === 'frequencyPeriod') setHabitPeriod(e.target.value);
  }

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <FormContainer>
          <h3>Develop a new habit.</h3>
          <FormGroup>
            <label htmlFor='name'>Name</label>
            <TextInput
              type='text'
              name='name'
              id='name'
              onChange={formik.handleChange}
              value={formik.values.name}
            ></TextInput>
            <SubText>What is the name of this habit?</SubText>
          </FormGroup>
          <DateContainer>
            <FormGroup>
              <h3>Start Date</h3>
              
            </FormGroup>
            <FormGroup>
              <h3>End Date</h3>
            </FormGroup>
          </DateContainer>

          <FormGroup>
            <label htmlFor='frequencyPeriod'>Tracking Period</label>
            <Select
              name='frequencyPeriod'
              id='frequencyPeriod'
              onChange={onSelect}
            >
              <Option value='day'>Daily</Option>
              <Option value='week'>Weekly</Option>
              <Option value='month'>Monthly</Option>
            </Select>
            <SubText>
              Over what time period do you want to monitor this habit?
            </SubText>
          </FormGroup>
          <FormGroup>
            <label htmlFor='frequencyValue'>Tracking Frequency</label>
            <NumberInput
              name='frequencyValue'
              id='frequencyValue'
              onChange={formik.handleChange}
              value={formik.values.frequencyValue}
            ></NumberInput>
            <SubText>How many times per {habitPeriod}?</SubText>
          </FormGroup>
          {/* TODO: Add Logic for adding tasks to habit   */}
          {/* TODO: Add Modal! */}
          <Button buttonstyle='primary' noradius>
            Add New Task
          </Button>
          <Button noradius>Select Existing</Button>
          <br></br>
          <OutlineButton noradius buttonstyle='secondary' type='submit'>
            Create New Habit
          </OutlineButton>
        </FormContainer>
      </Form>
    </div>
  );
}

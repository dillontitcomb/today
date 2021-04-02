import { useFormik } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import { mutate } from 'swr';
import { fetcher } from '../../utils/helperFunctions';
import { Button, OutlineButton } from '../layout/Buttons';
import { Form, NumberInput, Option, Select, TextInput } from '../layout/Forms';
import { SubText } from '../layout/Typography';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import SimpleAddTask from '../tasks/SimpleAddTask';

// Fields to include/add:
// name, tasks, startDate, endDate, frequencyValue, frequencyPeriod

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;
const FormContainer = styled.div`
  margin: auto;
  text-align: left;
  max-width: 600px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0rem 1rem;
`;

export default function SimpleAddHabit() {
  const [habitPeriod, setHabitPeriod] = useState('day');
  const [showTaskForm, setShowTaskForm] = useState(false);

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
      console.log('Trying to submit!');
      console.log(values);

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
  function handleStartDateChange(selectedDay) {
    formik.setFieldValue('startDate', selectedDay);
  }
  function handleEndDateChange(selectedDay) {
    formik.setFieldValue('endDate', selectedDay);
  }
  function handleShowTaskForm() {
    setShowTaskForm(!showTaskForm);
  }

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <FormContainer>
          <h1>Add Habit</h1>
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
              <label>Start Date </label>
              <DayPickerInput
                onDayChange={handleStartDateChange}
                selectedDays={formik.values.startDate}
              />
              <SubText>When will you start?</SubText>
            </FormGroup>
            <FormGroup>
              <label>End Date </label>
              <DayPickerInput
                onDayChange={handleEndDateChange}
                selectedDays={formik.values.endDate}
              />
              <SubText>When will you finish?</SubText>
            </FormGroup>
          </DateContainer>

          <FormGroup>
            <label htmlFor='frequencyPeriod'>Period</label>
            <Select
              name='frequencyPeriod'
              id='frequencyPeriod'
              onChange={onSelect}
            >
              <Option value='day'>Daily</Option>
              <Option value='week'>Weekly</Option>
              <Option value='month'>Monthly</Option>
            </Select>
            <SubText>How often will you engage in this habit?</SubText>
          </FormGroup>
          <FormGroup>
            <label htmlFor='frequencyValue'>Frequency</label>
            <Select
              name='frequencyValue'
              id='frequencyValue'
              onChange={onSelect}
            >
              <Option value='1'>Once</Option>
              <Option value='2'>Twice</Option>
              <Option value='3'>3x</Option>
              <Option value='4'>4x</Option>
              <Option value='5'>5x</Option>
              <Option value='6'>6x</Option>
              <Option value='7'>7x</Option>
            </Select>
            <SubText>How many times per {habitPeriod}?</SubText>
          </FormGroup>
          {/* TODO: Add Logic for adding tasks to habit   */}
          {/* TODO: Add Modal! */}
          <OutlineButton buttonstyle='secondary' type='submit'>
            Create New Habit
          </OutlineButton>

          <Button onClick={handleShowTaskForm}>Add Tasks</Button>

          {showTaskForm && <h1>This is the task form!</h1>}
        </FormContainer>
      </Form>
    </div>
  );
}

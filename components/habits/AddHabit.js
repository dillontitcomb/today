import { useFormik } from 'formik';
import { mutate } from 'swr';
import { fetcher } from '../../utils/helperFunctions';
import { Button, OutlineButton } from '../layout/Buttons';
import { Form, NumberInput, Option, Select, TextInput } from '../layout/Forms';
import { Lead } from '../layout/Typography';

const dateLookup = {
  day: 1,
  week: 7,
  month: 30,
  year: 365,
};

export default function AddHabit() {
  const formik = useFormik({
    initialValues: {
      name: '',
      tasks: [],
      frequency: 1,
      period: 'week',
      durationLength: 1,
      durationType: 'month',
    },

    onSubmit: async (values) => {
      const totalGoal = 15;
      const currentTotal = 3;
      values.totalGoal = totalGoal;
      values.currentTotal = currentTotal;
      const newHabit = await fetcher('http://localhost:3000/api/habits', {
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
    const urgency = e.target.value;
    formik.setFieldValue(e.target.name, urgency);
  }

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Lead primary>Develop a new habit.</Lead>
        <p>
          I want to
          <TextInput
            type='text'
            name='name'
            id='name'
            onChange={formik.handleChange}
            value={formik.values.name}
          ></TextInput>
          .
        </p>
        <p>To learn this habit, I will complete the following tasks</p>
        <p>
          <NumberInput
            placeholder='1'
            name='frequency'
            id='frequency'
            onChange={formik.handleChange}
            value={formik.values.frequency}
          ></NumberInput>
          time(s) per
          <Select name='period' id='period' onChange={onSelect}>
            <Option value='day'>day</Option>
            <Option value='week'>week</Option>
            <Option value='month'>month</Option>
          </Select>
          for{' '}
          <NumberInput
            placeholder='1'
            name='durationLength'
            id='durationLength'
            onChange={formik.handleChange}
            value={formik.values.durationLength}
          ></NumberInput>
          <Select name='durationType' id='durationType' onChange={onSelect}>
            <Option value='day'>day</Option>
            <Option value='week'>week</Option>
            <Option value='month'>month</Option>
            <Option value='year'>year</Option>
          </Select>
        </p>
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
      </Form>
    </div>
  );
}

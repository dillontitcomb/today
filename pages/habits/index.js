import { OutlineButton } from '../../components/layout/Buttons';
import {
  Form,
  NumberInput,
  Option,
  Select,
  TextInput,
} from '../../components/layout/Forms';
import { Lead } from '../../components/layout/Typography';

export default function habits(params) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Habits Page</h1>
      <Form>
        <Lead primary>Create a new task.</Lead>
        <p>
          I
          <Select>
            <Option>very urgently</Option>
            <Option>urgently</Option>
            <Option>soon</Option>
            <Option>at some point</Option>
          </Select>
          want to <TextInput></TextInput>.
        </p>
        <p>
          This should take about <NumberInput placeholder='0'></NumberInput>{' '}
          minutes.
        </p>
        <p>
          I feel{' '}
          <Select>
            <Option>Good</Option>
            <Option>Hesitant</Option>
            <Option>Very Stressed</Option>
            <Option>Terrified</Option>
          </Select>{' '}
          about completing this task.
        </p>
        <p>
          I probably{' '}
          <Select>
            <Option>Will</Option>
            <Option>Will not</Option>
          </Select>{' '}
          do this task again in the future.
        </p>
        <OutlineButton buttonstyle='primary'>Add New Task</OutlineButton>
      </Form>
    </div>
  );
}

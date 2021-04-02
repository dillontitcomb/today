import HabitItem from './HabitItem';

export default function HabitsList({ habits }) {
  return (
    <div>
      <h1>Your Habits</h1>
      {habits &&
        habits.map((habit) => {
          return <HabitItem habit={habit} key={habit._id}></HabitItem>;
        })}
    </div>
  );
}

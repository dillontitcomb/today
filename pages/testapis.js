export default function testapis() {
  return (
    <div>
      <h1>Let's test out our apis!</h1>
      <div>
        <button value='/api/tasks' onClick={makeGetRequest}>
          Get All Tasks
        </button>
      </div>
    </div>
  );
}

const makeGetRequest = async (e) => {
  e.preventDefault();
  const tasks = await fetch(e.target.value, { method: 'POST' });
  console.log(tasks);
};

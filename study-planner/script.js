const form = document.getElementById('examForm');
const examList = document.getElementById('examList');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('examName').value;
  const date = new Date(document.getElementById('DueDate').value);
  const today = new Date();
  const studyStart = new Date(date);
  studyStart.setDate(date.getDate() - 10); // Start 10 days before

  const li = document.createElement('li');
  li.textContent = `${name} – Exam on ${date.toDateString()}, start studying on ${studyStart.toDateString()}`;

  if (today >= studyStart && today < date) {
    li.style.borderLeftColor = 'orange';
    li.textContent += ' ⚠️ Time to start studying!';
  } else if (today >= date) {
    li.style.borderLeftColor = 'red';
    li.textContent += ' ❌ Exam passed!';
  }

  examList.appendChild(li);
  form.reset();
});

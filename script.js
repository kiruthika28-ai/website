document.getElementById("quizForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const answers = {
    q1: "a",
    q2: "a",
    q3: "a",
  };

  let score = 0;
  Object.keys(answers).forEach((q) => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  });

  if (score >= 2) {
    alert("You passed!");
    window.location.href = "certificate.html";
  } else {
    alert("You did not pass. Try again!");
  }
});

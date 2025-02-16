const judge = (e) => {
    e.preventDefault();
    const company = parseInt(document.getElementById('company').value);
    const communication = parseInt(document.getElementById('communication').value);
    const project = parseInt(document.getElementById('project').value);
    const dsa = parseInt(document.getElementById('dsa').value);
    const output = document.getElementById('output');

    output.style.opacity = '0';
    setTimeout(() => {
        const selected = decide(company, communication, project, dsa);
        output.innerHTML = selected ? "You will be selected 🎉" : "May not be selected 😔";
        output.style.backgroundColor = selected ? "green" : "red";
        output.style.opacity = '1';
        output.style.visibility = 'visible';

        if (selected) {
            launchBalloons(10);
        }
    }, 200);
}

const decide = (company, communication, project, dsa) => {
    const prediction = predict(company, communication, project, dsa);
    return prediction[1] >= prediction[0];
}

function predict(company, communication, project, dsa) {
  if (dsa <= 0.5) {
    if (project <= 1.5) {
      return [24.0, 0.0];
    } else if (company <= 3.5) {
      if (company <= 0.5) {
        return [1.0, 0.0];
      } else if (company <= 1.5) {
        return [0.0, 1.0];
      } else if (company <= 2.5) {
        return [1.0, 0.0];
      } else {
        return [0.0, 1.0];
      }
    } else if (company <= 4.5) {
      return [4.0, 0.0];
    } else {
      return communication <= 1.5 ? [1.0, 1.0] : [1.0, 0.0];
    }
  } else {
    return [0.0, 47.0];
  }
}

function launchBalloons(number) {
    const container = document.getElementById('balloon-container');
    for (let i = 0; i < number; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 75%, 60%)`;
        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 5000);
    }
}

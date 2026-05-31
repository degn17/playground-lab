const experiments = [
  {
    title: 'Dark Mode Toggle',
    description: 'A simple UI theme switcher.',
    status: 'Todo',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'LocalStorage Todo',
    description: 'A small todo widget that saves data in the browser.',
    status: 'Todo',
    tags: ['JavaScript', 'localStorage'],
  },
  {
    title: 'GitHub Repo Viewer',
    description: 'A tool to display basic GitHub repository information.',
    status: 'Todo',
    tags: ['API', 'GitHub', 'JSON'],
  },
  {
    title: 'Prompt Template Builder',
    description: 'A simple tool for saving and reusing prompt templates.',
    status: 'Todo',
    tags: ['JavaScript', 'UI'],
  },
  {
    title: 'Bug Museum',
    description: 'A place to record bugs and what they teach.',
    status: 'Todo',
    tags: ['Debugging', 'Documentation'],
  },
];

const experimentGrid = document.querySelector('#experiment-grid');

function createTagList(tags) {
  return tags
    .map((tag) => `<li class="tag">${tag}</li>`)
    .join('');
}

function createExperimentCard(experiment) {
  return `
    <article class="experiment-card">
      <span class="status">${experiment.status}</span>
      <h3>${experiment.title}</h3>
      <p>${experiment.description}</p>
      <ul class="tag-list" aria-label="Tech tags for ${experiment.title}">
        ${createTagList(experiment.tags)}
      </ul>
      <button class="card-button" type="button">Open experiment</button>
    </article>
  `;
}

function renderExperiments() {
  experimentGrid.innerHTML = experiments.map(createExperimentCard).join('');
}

renderExperiments();

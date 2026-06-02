const experiments = [
  {
    title: 'Dark Mode Toggle',
    description: 'A simple UI theme switcher.',
    status: 'Done',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'LocalStorage Todo',
    description: 'A small todo widget that saves data in the browser.',
    status: 'Done',
    tags: ['JavaScript', 'localStorage'],
    url: 'experiments/localstorage-todo.html',
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
    status: 'Done',
    tags: ['Debugging', 'Documentation'],
  },
];

const experimentGrid = document.querySelector('#experiment-grid');
const filterButtons = document.querySelectorAll('.filter-button');
let activeFilter = 'All';

function createTagList(tags) {
  return tags
    .map((tag) => `<li class="tag">${tag}</li>`)
    .join('');
}

function createExperimentAction(experiment) {
  if (experiment.url) {
    return `
      <div class="card-actions">
        <a class="card-button" href="${experiment.url}">Open experiment</a>
        <a class="direct-experiment-link" href="${experiment.url}">${experiment.url}</a>
      </div>
    `;
  }

  return `
    <div class="card-actions">
      <button class="card-button card-button-disabled" type="button" disabled>Not available yet</button>
    </div>
  `;
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
      ${createExperimentAction(experiment)}
    </article>
  `;
}

function getFilteredExperiments() {
  if (activeFilter === 'All') {
    return experiments;
  }

  return experiments.filter((experiment) => experiment.status === activeFilter);
}

function updateFilterButtons() {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive.toString());
  });
}

function renderExperiments() {
  experimentGrid.innerHTML = getFilteredExperiments().map(createExperimentCard).join('');
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    updateFilterButtons();
    renderExperiments();
  });
});

renderExperiments();

// Global State
let allQuestions = [];
let currentQuestion = null;
let currentCrudPage = 1;
let totalCrudPages = 1;
let debounceTimer = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  checkDbStatus();
  loadQuestions();
  loadCarsTable();
  populateBrandFilterOptions();
});

// Navigation Tab Switching
function setupTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach((c) => c.classList.remove('active'));

      tab.classList.add('active');
      const targetTabId = `tab-${tab.getAttribute('data-tab')}`;
      document.getElementById(targetTabId).classList.add('active');
    });
  });
}

// Health Check & DB Status
async function checkDbStatus() {
  const badge = document.getElementById('dbStatusBadge');
  const text = document.getElementById('dbStatusText');

  try {
    const res = await fetch('/api/health');
    const data = await res.json();

    if (data.dbConnectionState === 'Connected') {
      badge.className = 'badge badge-online';
      text.innerText = 'DB Connected';
    } else {
      badge.className = 'badge badge-offline';
      text.innerText = `DB: ${data.dbConnectionState}`;
    }
  } catch (err) {
    badge.className = 'badge badge-offline';
    text.innerText = 'Server Disconnected';
  }

  // Update total car count
  try {
    const resCars = await fetch('/api/cars?limit=1');
    const dataCars = await resCars.json();
    document.getElementById('carCountText').innerText = dataCars.total || 0;
  } catch (err) {
    document.getElementById('carCountText').innerText = '0';
  }
}

// Seed Database Action
async function handleSeedDatabase() {
  const btn = document.getElementById('seedDbBtn');
  btn.disabled = true;
  btn.innerText = 'Seeding...';

  try {
    const res = await fetch('/api/cars/seed', { method: 'POST' });
    const data = await res.json();

    if (data.success) {
      alert(`✅ ${data.message}`);
      checkDbStatus();
      loadCarsTable();
      populateBrandFilterOptions();
    } else {
      alert(`❌ Seed Failed: ${data.message}`);
    }
  } catch (err) {
    alert(`❌ Error seeding DB: ${err.message}`);
  } finally {
    btn.disabled = false;
    btn.innerText = '⚡ Seed Sample DB';
  }
}

// ==========================================
// TAB 1: PRACTICE QUESTIONS & SOLVER
// ==========================================

async function loadQuestions() {
  try {
    const res = await fetch('/api/practice/questions');
    const data = await res.json();

    if (data.success) {
      allQuestions = data.data;
      document.getElementById('questionCount').innerText = `${allQuestions.length} Questions`;
      renderQuestionsList();
    }
  } catch (err) {
    console.error('Failed to load questions:', err);
  }
}

function renderQuestionsList() {
  const filter = document.getElementById('difficultyFilter').value;
  const listContainer = document.getElementById('questionsList');
  listContainer.innerHTML = '';

  const filtered = allQuestions.filter((q) => {
    if (filter === 'ALL') return true;
    return q.difficulty.toUpperCase() === filter.toUpperCase();
  });

  if (filtered.length === 0) {
    listContainer.innerHTML = '<div style="color: var(--text-muted); padding: 1rem; text-align: center;">No questions match filter.</div>';
    return;
  }

  filtered.forEach((q) => {
    const card = document.createElement('div');
    card.className = `q-card ${currentQuestion && currentQuestion.id === q.id ? 'active' : ''}`;
    card.onclick = () => selectQuestion(q.id);

    const diffClass = `tag-${q.difficulty.toLowerCase()}`;

    card.innerHTML = `
      <div class="q-title">${q.id.toUpperCase()}. ${q.title}</div>
      <div class="q-meta">
        <span class="tag tag-category">${q.category}</span>
        <span class="tag ${diffClass}">${q.difficulty}</span>
      </div>
    `;

    listContainer.appendChild(card);
  });
}

function selectQuestion(qId) {
  currentQuestion = allQuestions.find((q) => q.id === qId);
  if (!currentQuestion) return;

  renderQuestionsList();

  document.getElementById('questionEmptyState').classList.add('hidden');
  document.getElementById('questionSolver').classList.remove('hidden');

  document.getElementById('qTitle').innerText = `${currentQuestion.id.toUpperCase()}. ${currentQuestion.title}`;
  document.getElementById('qCategory').innerText = currentQuestion.category;

  const diffTag = document.getElementById('qDifficulty');
  diffTag.innerText = currentQuestion.difficulty;
  diffTag.className = `tag tag-${currentQuestion.difficulty.toLowerCase()}`;

  document.getElementById('qDescription').innerText = currentQuestion.question;
  document.getElementById('qHint').innerText = currentQuestion.hint;

  document.getElementById('hintBox').classList.add('hidden');
  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('solutionPipelineContainer').classList.add('hidden');

  // Set starter template in code editor
  const defaultTemplate = [
    {
      $match: {}
    }
  ];
  document.getElementById('pipelineEditor').value = JSON.stringify(defaultTemplate, null, 2);
}

function toggleHint() {
  document.getElementById('hintBox').classList.toggle('hidden');
}

function formatUserPipeline() {
  const editor = document.getElementById('pipelineEditor');
  try {
    const parsed = JSON.parse(editor.value);
    editor.value = JSON.stringify(parsed, null, 2);
  } catch (err) {
    alert(`Invalid JSON format: ${err.message}`);
  }
}

function resetUserPipeline() {
  if (confirm('Reset your aggregation pipeline code to empty template?')) {
    document.getElementById('pipelineEditor').value = '[\n  {\n    "$match": {}\n  }\n]';
  }
}

async function verifyCurrentAnswer() {
  if (!currentQuestion) return;

  const editor = document.getElementById('pipelineEditor');
  let userPipeline;

  try {
    userPipeline = JSON.parse(editor.value);
  } catch (err) {
    alert(`JSON Format Error: ${err.message}`);
    return;
  }

  const spinner = document.getElementById('verifySpinner');
  const verifyBtn = document.getElementById('verifyBtn');
  spinner.classList.remove('hidden');
  verifyBtn.disabled = true;

  try {
    const res = await fetch('/api/practice/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        questionId: currentQuestion.id,
        userPipeline
      })
    });

    const data = await res.json();
    renderVerificationResults(data);
  } catch (err) {
    alert(`Failed to verify answer: ${err.message}`);
  } finally {
    spinner.classList.add('hidden');
    verifyBtn.disabled = false;
  }
}

function renderVerificationResults(data) {
  const resultSection = document.getElementById('resultSection');
  const feedbackBanner = document.getElementById('feedbackBanner');
  const userOutput = document.getElementById('userOutput');
  const expectedOutput = document.getElementById('expectedOutput');
  const solutionCode = document.getElementById('solutionPipelineCode');

  resultSection.classList.remove('hidden');

  if (data.isCorrect) {
    feedbackBanner.className = 'feedback-banner feedback-pass';
    feedbackBanner.innerText = `✅ PASS: ${data.feedback}`;
  } else {
    feedbackBanner.className = 'feedback-banner feedback-fail';
    feedbackBanner.innerText = `❌ REJECTED: ${data.feedback}`;
  }

  document.getElementById('userCount').innerText = data.userResultCount || 0;
  document.getElementById('userTime').innerText = data.userExecutionTimeMs || 0;
  document.getElementById('expectedCount').innerText = data.expectedResultCount || 0;

  userOutput.innerText = JSON.stringify(data.userResult || data.error || [], null, 2);
  expectedOutput.innerText = JSON.stringify(data.expectedResult || [], null, 2);
  solutionCode.innerText = JSON.stringify(data.solutionPipeline || [], null, 2);

  resultSection.scrollIntoView({ behavior: 'smooth' });
}

function toggleSolutionPipeline() {
  document.getElementById('solutionPipelineContainer').classList.toggle('hidden');
}

// ==========================================
// TAB 2: CUSTOM AGGREGATION SANDBOX
// ==========================================

function formatSandboxJson() {
  const editor = document.getElementById('sandboxEditor');
  try {
    const parsed = JSON.parse(editor.value);
    editor.value = JSON.stringify(parsed, null, 2);
  } catch (err) {
    alert(`Invalid JSON format: ${err.message}`);
  }
}

function setSandboxTemplate(type) {
  const editor = document.getElementById('sandboxEditor');
  let pipeline = [];

  if (type === 'group') {
    pipeline = [
      {
        $group: {
          _id: '$basicInfo.brand',
          carCount: { $sum: 1 },
          avgPrice: { $avg: '$pricing.exShowroom' },
          maxSpeed: { $max: '$performance.topSpeed.value' }
        }
      },
      { $sort: { carCount: -1 } }
    ];
  } else if (type === 'unwind') {
    pipeline = [
      { $unwind: '$features' },
      {
        $group: {
          _id: '$features',
          carsWithFeature: { $sum: 1 }
        }
      },
      { $sort: { carsWithFeature: -1 } },
      { $limit: 10 }
    ];
  } else if (type === 'facet') {
    pipeline = [
      {
        $facet: {
          totalStats: [
            { $group: { _id: null, avgPrice: { $avg: '$pricing.exShowroom' }, maxPower: { $max: '$engine.power.value' } } }
          ],
          byCountry: [
            { $group: { _id: '$basicInfo.countryOfManufacture', count: { $sum: 1 } } }
          ]
        }
      }
    ];
  }

  editor.value = JSON.stringify(pipeline, null, 2);
}

async function runSandboxQuery() {
  const editor = document.getElementById('sandboxEditor');
  const output = document.getElementById('sandboxOutput');
  const meta = document.getElementById('sandboxMeta');

  let pipeline;
  try {
    pipeline = JSON.parse(editor.value);
  } catch (err) {
    alert(`Invalid JSON: ${err.message}`);
    return;
  }

  output.innerText = 'Executing aggregation query...';
  meta.innerText = '';

  try {
    const res = await fetch('/api/aggregate/custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pipeline })
    });

    const data = await res.json();
    if (data.success) {
      meta.innerText = `⏱️ ${data.executionTimeMs}ms | 📄 ${data.resultCount} docs returned`;
      output.innerText = JSON.stringify(data.data, null, 2);
    } else {
      meta.innerText = '❌ Execution Error';
      output.innerText = JSON.stringify(data, null, 2);
    }
  } catch (err) {
    output.innerText = `Server Error: ${err.message}`;
  }
}

// ==========================================
// TAB 3: SUPERCAR CRUD MANAGER
// ==========================================

function debounceLoadCars() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    currentCrudPage = 1;
    loadCarsTable();
  }, 300);
}

async function populateBrandFilterOptions() {
  try {
    const res = await fetch('/api/cars?limit=100');
    const data = await res.json();

    if (data.success) {
      const brands = [...new Set(data.data.map((c) => c.basicInfo?.brand).filter(Boolean))].sort();
      const select = document.getElementById('crudBrandFilter');
      select.innerHTML = '<option value="">All Brands</option>';
      brands.forEach((b) => {
        select.innerHTML += `<option value="${b}">${b}</option>`;
      });
    }
  } catch (err) {
    console.error('Failed to populate brand filters', err);
  }
}

async function loadCarsTable() {
  const search = document.getElementById('crudSearch').value;
  const brand = document.getElementById('crudBrandFilter').value;
  const bodyType = document.getElementById('crudBodyTypeFilter').value;
  const sortBy = document.getElementById('crudSortBy').value;

  const params = new URLSearchParams({
    page: currentCrudPage,
    limit: 8,
    sortBy
  });

  if (search) params.append('search', search);
  if (brand) params.append('brand', brand);
  if (bodyType) params.append('bodyType', bodyType);

  const tbody = document.getElementById('carsTableBody');
  tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding: 2rem; color: var(--text-muted);">Loading cars...</td></tr>';

  try {
    const res = await fetch(`/api/cars?${params.toString()}`);
    const data = await res.json();

    if (data.success) {
      renderCarsTableRows(data.data);
      totalCrudPages = data.totalPages || 1;

      document.getElementById('crudPaginationInfo').innerText = `Showing ${data.count} of ${data.total} supercars (Page ${data.page} of ${totalCrudPages})`;
      document.getElementById('currentPageNum').innerText = data.page;

      document.getElementById('prevPageBtn').disabled = data.page <= 1;
      document.getElementById('nextPageBtn').disabled = data.page >= totalCrudPages;
    }
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color: var(--accent-rose);">Error loading cars: ${err.message}</td></tr>`;
  }
}

function renderCarsTableRows(cars) {
  const tbody = document.getElementById('carsTableBody');
  tbody.innerHTML = '';

  if (cars.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding: 2rem; color: var(--text-muted);">No supercars found. Click "Seed Sample DB" to pre-populate database.</td></tr>';
    return;
  }

  cars.forEach((car) => {
    const tr = document.createElement('tr');

    const brand = car.basicInfo?.brand || 'N/A';
    const model = car.basicInfo?.model || 'N/A';
    const variant = car.basicInfo?.variant ? `(${car.basicInfo.variant})` : '';
    const year = car.basicInfo?.year || '-';
    const body = car.basicInfo?.bodyType || '-';
    const country = car.basicInfo?.countryOfManufacture || '-';

    const engineType = car.engine?.type || '-';
    const power = car.engine?.power?.value ? `${car.engine.power.value} hp` : '-';

    const accel = car.performance?.acceleration?.zeroToHundred?.value ? `${car.performance.acceleration.zeroToHundred.value}s` : '-';
    const topSpeed = car.performance?.topSpeed?.value ? `${car.performance.topSpeed.value} km/h` : '-';

    const price = car.pricing?.exShowroom ? `₹${(car.pricing.exShowroom / 100000).toFixed(1)} Lakhs` : '-';
    const rating = car.ratings?.overall ? `⭐ ${car.ratings.overall}` : '-';

    tr.innerHTML = `
      <td>
        <div class="car-title">${brand} ${model} ${variant}</div>
        <div class="car-sub">ID: ${car._id}</div>
      </td>
      <td>${year}</td>
      <td>
        <div>${body}</div>
        <div class="car-sub">${country}</div>
      </td>
      <td>
        <div>${power}</div>
        <div class="car-sub">${engineType}</div>
      </td>
      <td>
        <div>0-100: ${accel}</div>
        <div class="car-sub">Max: ${topSpeed}</div>
      </td>
      <td><strong style="color: var(--accent-cyan);">${price}</strong></td>
      <td>${rating}</td>
      <td>
        <div style="display:flex; gap:0.35rem;">
          <button class="btn btn-outline btn-xs" onclick="openViewCarModal('${car._id}')">👁️ View</button>
          <button class="btn btn-secondary btn-xs" onclick="openEditCarModal('${car._id}')">✏️ Edit</button>
          <button class="btn btn-danger btn-xs" onclick="deleteCarRecord('${car._id}')">🗑️</button>
        </div>
      </td>
    </tr>
    `;

    tbody.appendChild(tr);
  });
}

function changePage(delta) {
  const newPage = currentCrudPage + delta;
  if (newPage >= 1 && newPage <= totalCrudPages) {
    currentCrudPage = newPage;
    loadCarsTable();
  }
}

// Modal View / Edit / Create
let activeModalCar = null;

function switchModalView(type) {
  const formBtn = document.getElementById('tabFormBtn');
  const jsonBtn = document.getElementById('tabJsonBtn');
  const form = document.getElementById('carForm');
  const jsonContainer = document.getElementById('jsonViewContainer');

  if (type === 'form') {
    formBtn.classList.add('active');
    jsonBtn.classList.remove('active');
    form.classList.remove('hidden');
    jsonContainer.classList.add('hidden');
  } else {
    jsonBtn.classList.add('active');
    formBtn.classList.remove('active');
    jsonContainer.classList.remove('hidden');
    form.classList.add('hidden');

    // Populate JSON editor
    document.getElementById('rawJsonEditor').value = JSON.stringify(activeModalCar || {}, null, 2);
  }
}

function openCreateCarModal() {
  activeModalCar = {
    basicInfo: { brand: '', model: '', variant: '', year: 2026, bodyType: 'Coupe', countryOfManufacture: 'Germany' },
    engine: { type: 'Petrol', power: { value: 500, unit: 'hp' } },
    performance: { topSpeed: { value: 300, unit: 'km/h' } },
    pricing: { currency: 'INR', exShowroom: 15000000 }
  };

  document.getElementById('modalTitle').innerText = 'Add New Supercar';
  document.getElementById('formCarId').value = '';

  document.getElementById('fBrand').value = '';
  document.getElementById('fModel').value = '';
  document.getElementById('fVariant').value = '';
  document.getElementById('fYear').value = 2026;
  document.getElementById('fBodyType').value = 'Coupe';
  document.getElementById('fCountry').value = 'Germany';
  document.getElementById('fEngineType').value = 'Petrol';
  document.getElementById('fPower').value = 500;
  document.getElementById('fTopSpeed').value = 300;
  document.getElementById('fPrice').value = 15000000;

  switchModalView('form');
  document.getElementById('carModal').classList.remove('hidden');
}

async function openViewCarModal(id) {
  try {
    const res = await fetch(`/api/cars/${id}`);
    const data = await res.json();
    if (data.success) {
      activeModalCar = data.data;
      document.getElementById('modalTitle').innerText = `View Supercar: ${activeModalCar.basicInfo?.brand} ${activeModalCar.basicInfo?.model}`;
      populateModalForm(activeModalCar);
      switchModalView('json');
      document.getElementById('carModal').classList.remove('hidden');
    }
  } catch (err) {
    alert(`Failed to fetch car: ${err.message}`);
  }
}

async function openEditCarModal(id) {
  try {
    const res = await fetch(`/api/cars/${id}`);
    const data = await res.json();
    if (data.success) {
      activeModalCar = data.data;
      document.getElementById('modalTitle').innerText = `Edit Supercar: ${activeModalCar.basicInfo?.brand} ${activeModalCar.basicInfo?.model}`;
      populateModalForm(activeModalCar);
      switchModalView('form');
      document.getElementById('carModal').classList.remove('hidden');
    }
  } catch (err) {
    alert(`Failed to fetch car: ${err.message}`);
  }
}

function populateModalForm(car) {
  document.getElementById('formCarId').value = car._id || '';
  document.getElementById('fBrand').value = car.basicInfo?.brand || '';
  document.getElementById('fModel').value = car.basicInfo?.model || '';
  document.getElementById('fVariant').value = car.basicInfo?.variant || '';
  document.getElementById('fYear').value = car.basicInfo?.year || 2026;
  document.getElementById('fBodyType').value = car.basicInfo?.bodyType || '';
  document.getElementById('fCountry').value = car.basicInfo?.countryOfManufacture || '';
  document.getElementById('fEngineType').value = car.engine?.type || '';
  document.getElementById('fPower').value = car.engine?.power?.value || '';
  document.getElementById('fTopSpeed').value = car.performance?.topSpeed?.value || '';
  document.getElementById('fPrice').value = car.pricing?.exShowroom || '';
}

function closeCarModal() {
  document.getElementById('carModal').classList.add('hidden');
}

async function handleCarFormSubmit(e) {
  e.preventDefault();
  const carId = document.getElementById('formCarId').value;

  const payload = activeModalCar || {};
  if (!payload.basicInfo) payload.basicInfo = {};
  if (!payload.engine) payload.engine = {};
  if (!payload.performance) payload.performance = {};
  if (!payload.pricing) payload.pricing = {};

  payload.basicInfo.brand = document.getElementById('fBrand').value;
  payload.basicInfo.model = document.getElementById('fModel').value;
  payload.basicInfo.variant = document.getElementById('fVariant').value;
  payload.basicInfo.year = Number(document.getElementById('fYear').value);
  payload.basicInfo.bodyType = document.getElementById('fBodyType').value;
  payload.basicInfo.countryOfManufacture = document.getElementById('fCountry').value;

  payload.engine.type = document.getElementById('fEngineType').value;
  if (!payload.engine.power) payload.engine.power = { unit: 'hp' };
  payload.engine.power.value = Number(document.getElementById('fPower').value);

  if (!payload.performance.topSpeed) payload.performance.topSpeed = { unit: 'km/h' };
  payload.performance.topSpeed.value = Number(document.getElementById('fTopSpeed').value);

  payload.pricing.exShowroom = Number(document.getElementById('fPrice').value);

  await saveCarPayload(carId, payload);
}

async function saveRawJsonModal() {
  const carId = document.getElementById('formCarId').value;
  let payload;
  try {
    payload = JSON.parse(document.getElementById('rawJsonEditor').value);
  } catch (err) {
    alert(`Invalid JSON format: ${err.message}`);
    return;
  }

  await saveCarPayload(carId, payload);
}

async function saveCarPayload(carId, payload) {
  const url = carId ? `/api/cars/${carId}` : '/api/cars';
  const method = carId ? 'PUT' : 'POST';

  try {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data.success) {
      alert(`✅ Supercar ${carId ? 'updated' : 'created'} successfully!`);
      closeCarModal();
      checkDbStatus();
      loadCarsTable();
      populateBrandFilterOptions();
    } else {
      alert(`❌ Error: ${data.message}`);
    }
  } catch (err) {
    alert(`❌ Server Request Error: ${err.message}`);
  }
}

async function deleteCarRecord(id) {
  if (confirm(`Are you sure you want to delete supercar record ${id}?`)) {
    try {
      const res = await fetch(`/api/cars/${id}`, { method: 'DELETE' });
      const data = await res.json();

      if (data.success) {
        alert('🗑️ Supercar deleted!');
        checkDbStatus();
        loadCarsTable();
        populateBrandFilterOptions();
      } else {
        alert(`❌ Delete failed: ${data.message}`);
      }
    } catch (err) {
      alert(`❌ Delete error: ${err.message}`);
    }
  }
}

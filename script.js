// Show tab
function showTab(tab) {
  document.querySelectorAll('.tab').forEach(s => s.style.display='none');
  document.getElementById(tab).style.display='block';
}

// Load listings from localStorage
let listings = JSON.parse(localStorage.getItem('listings')) || [];
let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

// Render marketplace listings
function renderListings() {
  const container = document.getElementById('listings');
  container.innerHTML = '';
  if(listings.length === 0){
    document.getElementById('no-listings').style.display='block';
    return;
  } else {
    document.getElementById('no-listings').style.display='none';
  }
  listings.forEach(l => {
    const div = document.createElement('div');
    div.className = 'listing'+(l.premium?' premium':'');
    div.innerHTML = `<strong>${l.title}</strong> (${l.category}, ${l.type})<br>${l.description}<br>Price: ${l.price? 'P'+l.price:'N/A'}<br>
      ${l.whatsapp? `<a class="whats" target="_blank" href="https://wa.me/${l.whatsapp.replace(/\D/g,'')}">Chat on WhatsApp</a>`:''}`;
    if(l.image){
      div.innerHTML += `<br><img src="${l.image}" alt="product image">`;
    }
    container.appendChild(div);
  });
}

// Render job listings
function renderJobs() {
  const container = document.getElementById('jobListings');
  container.innerHTML = '';
  if(jobs.length === 0){
    document.getElementById('no-jobs').style.display='block';
    return;
  } else {
    document.getElementById('no-jobs').style.display='none';
  }
  jobs.forEach(j => {
    const div = document.createElement('div');
    div.className = 'job';
    div.innerHTML = `<strong>${j.title}</strong><br>${j.description}<br>
      ${j.whatsapp? `<a class="whats" target="_blank" href="https://wa.me/${j.whatsapp.replace(/\D/g,'')}">Contact on WhatsApp</a>`:''}`;
    container.appendChild(div);
  });
}

// Post Ad
document.getElementById('adForm').addEventListener('submit', e=>{
  e.preventDefault();

  const imageInput = document.getElementById('adImage');

  const newAd = {
    title: document.getElementById('adTitle').value,
    description: document.getElementById('adDesc').value,
    category: document.getElementById('adCategory').value,
    type: document.getElementById('adType').value,
    price: document.getElementById('adPrice').value,
    whatsapp: document.getElementById('adWhats').value,
    premium: document.getElementById('adPremium').checked,
    image: '',
    created: Date.now()
  };

  // Handle image
  if(imageInput.files[0]){
    const reader = new FileReader();
    reader.onload = function(e){
      newAd.image = e.target.result; // base64
      listings.unshift(newAd);
      localStorage.setItem('listings', JSON.stringify(listings));
      renderListings();
      document.getElementById('adForm').reset();
      showTab('market');
    }
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    listings.unshift(newAd);
    localStorage.setItem('listings', JSON.stringify(listings));
    renderListings();
    document.getElementById('adForm').reset();
    showTab('market');
  }
});

// Post Job
document.getElementById('jobForm').addEventListener('submit', e=>{
  e.preventDefault();
  const newJob = {
    title: document.getElementById('jobTitle').value,
    description: document.getElementById('jobDesc').value,
    whatsapp: document.getElementById('jobWhats').value,
    created: Date.now()
  };
  jobs.unshift(newJob);
  localStorage.setItem('jobs', JSON.stringify(jobs));
  renderJobs();
  document.getElementById('jobForm').reset();
});

renderListings();
renderJobs();

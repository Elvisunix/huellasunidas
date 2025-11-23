const citaForm = document.getElementById('cita-form');
const citasContainer = document.getElementById('citas-container');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const dogProfileForm = document.getElementById('dog-profile-form');

let citas = [];
let dogProfile = {};

citaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const dogName = document.getElementById('dog-name').value;
    const ownerName = document.getElementById('owner-name').value;
    const location = document.getElementById('location').value;
    const datetime = document.getElementById('datetime').value;

    const newCita = {
        dogName,
        ownerName,
        location,
        datetime,
    };

    citas.push(newCita);
    renderCitas();
    citaForm.reset();
});

dogProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    dogProfile.breed = document.getElementById('dog-breed').value;
    dogProfile.age = document.getElementById('dog-age').value;
    dogProfile.size = document.getElementById('dog-size').value;
    dogProfile.personality = document.getElementById('dog-personality').value;

    alert('¡Perfil del perro guardado con éxito!');
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCitas = citas.filter(cita => 
        cita.dogName.toLowerCase().includes(searchTerm) ||
        cita.ownerName.toLowerCase().includes(searchTerm) ||
        cita.location.toLowerCase().includes(searchTerm)
    );
    renderCitas(filteredCitas);
});

function renderCitas(citasToRender = citas) {
    citasContainer.innerHTML = '';
    citasToRender.forEach((cita) => {
        const citaDiv = document.createElement('div');
        citaDiv.classList.add('cita');
        citaDiv.innerHTML = `
            <h3>${cita.dogName}</h3>
            <p><strong>Dueño:</strong> ${cita.ownerName}</p>
            <p><strong>Lugar:</strong> ${cita.location}</p>
            <p><strong>Fecha y hora:</strong> ${new Date(cita.datetime).toLocaleString()}</p>
        `;
        citasContainer.appendChild(citaDiv);
    });
}

renderCitas();

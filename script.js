const citaForm = document.getElementById('cita-form');
const citasContainer = document.getElementById('citas-container');

let citas = [];

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

function renderCitas() {
    citasContainer.innerHTML = '';
    citas.forEach((cita) => {
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

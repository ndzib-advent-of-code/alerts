window.onload = () => {

    document.querySelector('#create-obj').addEventListener('click', () => {
        const body = document.querySelector('#body');
        const newAlert = document.createElement('div');

        newAlert.innerHTML = `<div class="alert">
    <iconify-icon class="alert-icon warn-text"  icon="ri:close-circle-fill"></iconify-icon>
    <p class="alert-message warn-text">
        Your object could not be created
    </p>
    <button onclick="close()" class="alert-action">
        <iconify-icon icon="material-symbols:close"></iconify-icon>
    </button>
</div>`;

        body.appendChild(newAlert);

        setTimeout(()=>newAlert.classList.toggle('hide'), 2000)
    })

    document.querySelectorAll('.alert-action').forEach(elt => {
        elt.addEventListener('click', () => {
            elt.parentElement.classList.toggle('hide')
        })
    })
}

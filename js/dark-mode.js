function toggleClick(event) {
    const body = document.body;
    const switchState = event.target.checked;

    toggleLight(body, switchState);
}

function toggleLight(element, toggle) {
    if (typeof toggle != 'boolean') {
        throw 'toggle parameter was not a boolean!';
    }

    if (toggle) {
        element.classList.add('light');
    } else {
        element.classList.remove('light');
    }
}

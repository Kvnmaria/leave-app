const form = document.getElementById('Form');
const form2 = document.getElementById('Form_2');
console.log(form2);

const employeeId = document.getElementById('employeeId')
const password = document.getElementById('Password')

const employeeId_2 = document.getElementById('employeeId_2');
const password_2 = document.getElementById('Password_2')


const sendFetchApiRequest = (method, url, data) => {

    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })

        .then(response => {
            return response.status;
        })

}
// Mobile Layout
form.addEventListener('submit', function (e) {

    e.preventDefault();

    console.log('A Button Clicked');

    sendFetchApiRequest('POST', 'http://localhost:7777/loginValidation', {
        employeeId: employeeId.value,
        password: password.value
    })
        .then(respData => {

            if (respData < 400) {
                window.location.pathname = './Welcome/welcome.html'
            } else {
                console.log('Get Lost');
            }

        })
        .catch(err => console.log(err))
})


// Desktop Layout
form2.addEventListener('submit', function (e) {

    e.preventDefault();

    console.log('A Button Clicked');

    sendFetchApiRequest('POST', 'http://localhost:7777/loginValidation', {
        employeeId: employeeId_2.value,
        password: password_2.value
    })
        .then(respData => {

            if (respData < 400) {
                window.location.pathname = './Welcome/welcome.html'
            } else {
                console.log('Get Lost');
            }

        })
        .catch(err => console.log(err))
})

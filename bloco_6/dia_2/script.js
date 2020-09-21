//pikADay

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

//JustValidate

new window.JustValidate('.teste', {
  rules: {
    document: {
      required: true,
      minLength: 11,
      maxLength: 11,
    },
    addressForm: {
      required: true,
      minLength: 5,
      maxLength: 100,
    },
    radio: {
      required: true,
    },
    cityForm: {
      required: true,
      minLength: 2,
    },
    officeForm: {
      required: true,
      minLength: 2,
    },
    dataForm: {
      required: true,
    },
    stateForm: {
      required: true,
    }
  },
});

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const container = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const stateComboBox = document.querySelector('#state');
const office = document.querySelector('#office');

// https://stackoverflow.com/questions/15148659/how-can-i-use-queryselector-on-to-pick-an-input-element-by-name - Alex Cheuk;

// const immobile = document.querySelector('input[name="immobile"]');
const send = document.querySelector('#send');
const clear = document.querySelector('#clear')

window.onload = function () {
  for (let index = 0; index < states.length; index += 1) {
    const newStateOption = document.createElement('option');
    newStateOption.innerText = states[index];
    stateComboBox.appendChild(newStateOption);
  }
};

function styleNewDiv(newDiv) {
  newDiv.style.backgroundColor = 'gray';
  newDiv.style.borderRadius = '5px';
  newDiv.style.color = 'white';
  newDiv.style.fontFamily = 'monospace';
  newDiv.style.padding = '10px';
  newDiv.style.textAlign = 'justify';
}

send.addEventListener('click', function (event) {
  // event.preventDefault()
  const newDiv = document.createElement('div');

  // https://www.w3schools.com/jsref/met_element_setattribute.asp;

  newDiv.setAttribute('id', 'curriculum');
  newDiv.innerText = `Olá ${name.value} portador/portadora do CPF:${cpf.value} infelizmente ainda não estamos contratando na cidade ${city.value} do estado ${state.value} para o cargo de ${office.value}. Salvamos os seus dados para futuras contratações, entraremos em contato pelo email: ${email.value}`;
  container.appendChild(newDiv);
  styleNewDiv(newDiv);
});

clear.addEventListener('click', function () {
  const removeThisDiv = document.querySelector('#curriculum');
  container.removeChild(removeThisDiv);
});
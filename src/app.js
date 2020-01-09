const Pet = function createPetEl({
  name,
  animal,
  breed
}) {
  return React.createElement(
    'div',
    {},
    [
      React.createElement(
        'h1',
        {},
        name
      ),
        React.createElement(
        'h2',
        {},
        animal
      ),
        React.createElement(
        'h1',
        {},
        breed
      ),
    ]
  );
}

const test = function test() {
  return 'test';
}

const App = function appRoot() {
  return React.createElement(
    'div',
    {},
    [
      React.createElement(
        'h1',
        {},
        'Adopt Me!'
      ),
      React.createElement(
        Pet, 
        {
          name: 'Poppy',
          animal: 'Dog',
          breed: 'Cocker Spaniel'
        }
      ),
      React.createElement(
        Pet,
        {
          name: 'Sky',
          animal: 'Dog',
          breed: 'King Charles'
        }
      ),
      React.createElement(
        Pet,
        {
          name: 'Sammy',
          animal: 'Cat',
          breed: 'Mixed'
        }
      ),
    ]
  );
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
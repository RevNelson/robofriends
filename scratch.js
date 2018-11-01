// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const timed = new Promise((resolve) => {
    setTimeout(resolve, 4000, 'success')
});
// #2) Run the above promise and make it console.log "success"

timed.then(console.log);

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(console.log('Oops, something went wrong.'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
];

Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
))
    .then(results => {
        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
        console.log(results[3]);
}).catch((err) => console.log('error', err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
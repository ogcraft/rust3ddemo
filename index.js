
const rust = import('./pkg/rust3ddemo');

rust.then(m => m.say_hello_from_rust())
    .catch(console.error);

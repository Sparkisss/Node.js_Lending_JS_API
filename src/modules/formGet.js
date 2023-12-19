fetch('http://localhost:3000/MyObject')
    .then(data => data.json())
    .then(res => console.log(res));
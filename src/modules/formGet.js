fetch('http://localhost:3000/MyObject')
    .then(data => data.json())
    .then(res => console.log(res));

export const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};
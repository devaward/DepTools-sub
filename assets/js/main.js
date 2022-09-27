let search = window.location.search;
let params = new URLSearchParams(search);

alert(params.get('test'));

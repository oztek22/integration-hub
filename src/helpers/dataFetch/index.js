export const fetchJobsData = async () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/500');
};

export const runJob = async function(source, destination) {
    var reqObj = {
        url: source.url,
        data: source.data,
        host: destination.host,
        user: destination.user,
        password: destination.password,
        db: destination.db,
        table: destination.table
    };
    
    return fetch('https://50yume2ahj.execute-api.us-east-1.amazonaws.com/dev/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(reqObj)
    }).then(res => res.json())
    .catch(err => err.json());
};
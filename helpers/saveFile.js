import fs from 'fs';

const saveDB = (data) =>{
    const file = './db/data.json'
    fs.writeFileSync(file, JSON.stringify(data)); 
}

export {
    saveDB
}
import * as fs from 'fs';

const path = './db/data.json';


const saveJson = (data) =>{
    fs.writeFileSync(path, JSON.stringify(data)); 
}
const readJson = () => {
    console.log(path);
    console.log(fs.existsSync(path));
    if(!fs.existsSync(path)){return null}
    const data= JSON.parse(fs.readFileSync(path, {encoding: 'utf8'}));
    console.log('data', data);
    return data;
}

export {
    saveJson,
    readJson
}
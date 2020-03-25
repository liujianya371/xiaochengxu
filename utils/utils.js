//把数组转成附带路径的数据，以减少传输数据量
const pathToData = (ary) => {
  let json = {};
  let stringify = [];
  try {
    for (let obj of ary) {
      stringify.push(JSON.stringify(obj.path) + ':' + JSON.stringify(obj.value));
    }
    json = JSON.parse('{' + stringify.join(',') + '}');
  } catch (e) { 
    console.log(e)
  }
  return json;
}

module.exports={
  pathToData:pathToData
}
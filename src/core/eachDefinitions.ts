let refTotal: any;

export default function eachDefinitions(params: any = {}){
  const { definitions = {}, firstFlag = true, isArray } = params;
  let { ref } = params;
  let data = {};

  if(firstFlag === true){
    refTotal = [];
  }

  ref = ref.replace('#/definitions/', '');

  const findRefIndex = refTotal.findIndex(item=>{
    return item.ref === ref;
  })
  if(findRefIndex == -1){
    refTotal.push({ ref, count: 1 })
  } else {
    if(refTotal[findRefIndex].count >= 3){
      return {}
    }
    refTotal[findRefIndex].count++;
  }

  if(ref === 'String'){
    return data = {
      type: 'string'
    }
  }

  if(!definitions[ref]){
    return console.log(`没有找到ref: ${ref}`)
  } 
  const { type, properties = {} } = definitions[ref];

  // if(isArray){
  //   data['isArray'] = true;
  // }
  
  if(type == 'object'){
    Object.keys(properties).forEach((key)=>{
      const childData = properties[key];
      // console.log('childData>>', childData)
      // const { type } = childData;
      
      if(childData['$ref']){
        data[key] = eachDefinitions({definitions, ref: childData['$ref'], firstFlag: false});
      } 
      else if(childData['items'] && childData['items']['$ref']){
        data[key] = eachDefinitions({definitions, ref: childData['items']['$ref'], firstFlag: false });
      }
      else if(childData['schema'] && childData['schema']['$ref']){
        data[key] = eachDefinitions({definitions, ref: childData['schema']['$ref'], firstFlag: false });
      }
      else {
        data[key] = childData;
      }
  
      // if(childData['$ref']){
      //   data[key] = eachDefinitions({definitions, ref: childData['$ref'], firstFlag: false});
      // }
    })
  }
  return data;
}
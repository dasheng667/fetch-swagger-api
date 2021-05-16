import eachDefinitions from './eachDefinitions';

export default function parametersBody(definitions: any = {}, request: any = {}){
  const { parameters } = request;
  if(!parameters) return null;
  const body = {};

  if(parameters.length == 1 && parameters[0].in == 'body'){
    const value = eachDefinitions({ definitions, ref: parameters[0].schema.$ref });
    Object.assign(body, value);
    return body;
  }

  parameters.map(item=>{
    if(item.schema && item.schema.$ref){
      const value: any = eachDefinitions({ definitions, ref: item.schema.$ref });
      // if(item.schema.$ref.indexOf('SortVO') > -1){
      //   console.log('value>>>>>', value);
      // }
      body[item.name] = value;
    } else {
      body[item.name] = item;
    }
  })
  return body;
};
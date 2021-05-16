import request from 'request';

export default function fetch(url: string){
  url = url || 'https://fedev.feng1.com/wxapp/v2/api-docs'
  return new Promise((resolve, reject) => {
    request({
      url,
      method: "GET",
      json: true,
      headers: {
        "content-type": "application/json",
      },
    }, function(error, response, body) {
      if (!error && response.statusCode == 200) { 
        resolve(body);
      }
    })
  })
}
module.exports = function check(str, bracketsConfig) {
  let length = str.length;
  if(length % 2 != 0) return false;
  let s = str;
  let config = bracketsConfig.map(item => item.join(''));  // transform to type: ['{}', '[]', '()']
  while(true) {
    for (let i = 0; i < config.length; i++) {
      if(s.indexOf(config[i]) >= 0) s=s.replace(config[i], '');
    }
    if (s.length == length) break;
    length = s.length;
  }  
  return s.length == 0 ? true : false; 
}

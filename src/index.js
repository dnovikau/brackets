module.exports = function check(str, bracketsConfig) {
  let brackets = '';
  bracketsConfig.forEach((conf) => {
    brackets += `${conf.map((i) => i.match(/\d/) ? i : `\\${i}`).join('')}|`;
  });

  brackets = brackets.slice(0, -1);
  const regexp = new RegExp(brackets, 'g')

  while (regexp.test(str)) {
    str = str.replace(regexp, '');
  }
  return !str;
}

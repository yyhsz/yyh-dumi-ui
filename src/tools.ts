interface classNameSuffix {
  [key: string]: boolean;
}

const classNameGenerator = (prefix: string) => {
  const str = `yyh-${prefix}`;
  return (...suffix: Array<string | classNameSuffix>) => {
    const suffixArr = suffix
      .map((ele) => {
        if (typeof ele !== 'string') {
          // ['moday','asdfasdf']
          return Object.entries(ele)
            .filter((arr) => arr[1])
            .map((arr) => arr[0]);
        }
        return ele;
      })
      .flat();
    //without flat: ['header',['content','sider']] use flat:['header','content','sider']

    return suffixArr.length === 0
      ? str
      : suffixArr.map((suffix) => (suffix ? `${str}-${suffix}` : str)).join(' ');
    //sc() --> 'yyh-prefix'
  };
};

export { classNameGenerator };

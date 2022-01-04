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

    return suffixArr.map((suffix) => (suffix ? `${str}-${suffix}` : str)).join(' ');

    // return ['yyh', prefix, suffix].filter(Boolean).join('-');
  };
};

export { classNameGenerator };

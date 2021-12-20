const classNameGenerator = (prefix: string) => {
  return (suffix?: string) => {
    return ['yyh', prefix, suffix].filter(Boolean).join('-');
  };
};

export { classNameGenerator };

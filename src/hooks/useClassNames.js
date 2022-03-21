const useClassNames = () => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
    // Not too sure what the 'filter(Boolean)' adds to this. Seems to work just as well when 'classes.join(' ')'
  };

  return classNames;
};

export default useClassNames;

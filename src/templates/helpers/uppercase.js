module.exports = (title) => {
  const titleIsString = typeof title === 'string';
  return titleIsString ? title.toUpperCase() : '';
};

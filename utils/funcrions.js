const userTypeFormat = (type) => {
  switch (type) {
    case "customers":
      return 1;
    case "customer-care":
      return 2;
    default:
      return 1;
  }
};

module.exports = {
  userTypeFormat,
};

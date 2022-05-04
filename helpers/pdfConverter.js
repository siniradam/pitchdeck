const fs = require("fs");
const toPdf = require("custom-soffice-to-pdf");
const path = `./public/project`;

const convert = (fileName) => {
  const ppt = fs.readFileSync(`${path}/${fileName}`);

  return toPdf(ppt)
    .then((pdfBuffer) => {
      fs.writeFileSync(`${path}/${fileName}.pdf`, pdfBuffer);
      return pdfBuffer;
    })
    .catch((err) => {
      return err;
    });
};

export default {
  convert,
};

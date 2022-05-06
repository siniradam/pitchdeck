import { fromPath } from "pdf2pic";
import fs from "fs";
import PDF from "pdf-page-counter";
import { projectFS } from "./projectFs";

const extractImages = (file, id) => {
  const options = {
    density: 100,
    saveFilename: id,
    savePath: `./public/images/project/${id}`,
    format: "png",
    // width: 600,
    // height: 900,
  };

  const filePath = `./public/project/${file}`;
  const dataBuffer = fs.readFileSync(filePath);

  if (dataBuffer) {
    fs.mkdirSync(`./public/images/project/${id}`, { recursive: true });

    const storeAsImage = fromPath(filePath, options);

    PDF(dataBuffer)
      .then(function async(data) {
        const pages = [];
        for (var pageNo = 1; pageNo <= data.numpages; pageNo++) {
          console.log("Task added for page: " + pageNo);

          storeAsImage(pageNo)
            .then((resolve) => {
              console.log("Page converted as image");
              pages.push(resolve);
              return resolve;
            })
            .finally(() => {
              if (data.numpages == pages.length) {
                projectFS.edit(id, {
                  images: pages
                    .sort((a, b) => a.page - b.page)
                    .map((item) => {
                      item.path = item.path.replace("./public", "");
                      return item;
                    }),
                  inProgress: false,
                });
              }
            })
            .catch((reject) => {
              console.error(reject);
            });
        }
        return true;
      })
      .catch(function (err) {
        return err;
      });

    return true;
  } else {
    return false;
  }

  //   const pageToConvertAsImage = 1;

  //   storeAsImage(pageToConvertAsImage).then((resolve) => {
  //     console.log("Page 1 is now converted as image");

  //     return resolve;
  //   });
};

export default {
  extract: extractImages,
};

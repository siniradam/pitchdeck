import nextConnect from "next-connect";
import multer from "multer";

import { projectFS } from "../../helpers/projectFs";
import imageExtractor from "../../helpers/imageExtractor";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/project",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Upload failed! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("file"));
apiRoute.post((req, res) => {
  const form = req.body;
  const project = projectFS.create({ ...form, inProgress: true });
  const extract = imageExtractor.extract(req.file.filename, project.id);

  console.log({ extract });

  res.status(200).json({
    project: {
      id: project.id,
    },
    status: 200,
  });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiRoute;

import { NextApiRequest, NextApiResponse } from "next";

import { services } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // by default get request will return json data

  console.log("API", services);

  res.status(200).json({ services });
};

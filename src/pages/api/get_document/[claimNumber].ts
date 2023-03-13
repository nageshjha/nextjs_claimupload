import type { NextApiRequest, NextApiResponse } from 'next'

import listClaimDocData from '../../../../mock-data/claimDocData.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.headers.authorization != undefined) {
    let filterDocData = listClaimDocData.filter((ele, index) => {
      if (ele.claimNumber == req.query.claimNumber) {
        return listClaimDocData[index].data
      }
    })

    if (filterDocData.length) {
      res.status(200).json({ message: "Document found successfully!", data: filterDocData[0].data })
    } else {
      res.status(200).json({ message: `No document found for claim number ${req.query.claimNumber}!`, data: [] })
    }
  }
  else {
    res.status(401).json({ message: "Unauthorized user!" })
  }
}

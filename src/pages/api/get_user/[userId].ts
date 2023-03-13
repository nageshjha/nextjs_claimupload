import type { NextApiRequest, NextApiResponse } from 'next'

import listUserData from '../../../../mock-data/allUsersData.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.headers.authorization != undefined) {
    let filterUsersData = listUserData.filter((ele, index) => {
      if (ele.userId == req.query.userId) {
        return listUserData[index].data
      }
    })

    if (filterUsersData.length) {
      res.status(200).json({ message: "User data found successfully!", data: filterUsersData[0].data })
    } else {
      res.status(200).json({ message: `No user data found for user id ${req.query.userId}!`, data: [] })
    }
  } else {
    res.status(401).json({ message: "Unauthorized user!" })
  }


}

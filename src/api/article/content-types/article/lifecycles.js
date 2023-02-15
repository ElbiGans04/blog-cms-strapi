const axios = require("axios");

module.exports = {
  afterCreate(event) {
    Validate(event)
  },
  afterCreateMany(event) {
    Validate(event)
  },
  afterUpdate(event) {
    Validate(event)
  },
  afterUpdateMany(event) {
    Validate(event)
  },
  afterDelete(event) {
    Validate(event)
  },
  afterDeleteMany(event) {
    Validate(event)
  },
};

async function Validate(event) {
  try {
    const request = await axios(
      `${process.env.FRONTEND_APP_URL_REVALIDATE}?kind=blog&id=${event.result.slug}&secret=${process.env.FRONTEND_APP_SECRET}`
    );
    const request2 = await axios(
      `${process.env.FRONTEND_APP_URL_REVALIDATE}?kind=blogs&id=${event.result.id}&secret=${process.env.FRONTEND_APP_SECRET}`
    );

    if (parseInt(request.status) !== 200 || parseInt(request2.status) !== 200) {
      throw new Error("GAGAL MELAKUKAN REVALIADATE");
    }
  } catch (err) {
    console.log(
      `\n\n\n\n GAGAL MELAKUKAN REVALIDATE : ${err.message} \n\n\n\n`
    );
  }
}

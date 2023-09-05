// const User = require("../models/Register")
const Artical = require("../models/artical")

const getArticalForCategory = async (req , res ) => {
    // we want to get the donations for the current logged in association
    // the association is a normal user so we can get the asscciation like so
    const articalcategory = req.user
    const { _id } = articalcategory

    const artical = await Artical.where({articalcategory: _id}).populate('donatedBy')
    res.json(artical)
}

module.exports = {
    getArticalForCategory
}
// const User = require("../models/Register")
const Tags = require("../models/tag")

const getTagForArtical = async (req , res ) => {
    // we want to get the donations for the current logged in association
    // the association is a normal user so we can get the asscciation like so
    const tagArtical = req.user
    const { _id } = tagArtical

    const tag = await Tags.where({tagArtical: _id}).populate('donatedBy')

    res.json(tag)
}

module.exports = {
    getTagForArtical
}
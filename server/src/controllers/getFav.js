const {Favorite} = require('../db');

const getFav = async(req,res)=>{
    try {
        const allFavorites = await Favorite.findAll()
        return res.status(200).json(allFavorites)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getFav
}
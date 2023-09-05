const Artical = require('../models/artical')
// Get All Elemnts of artical
const getAllElement=async function(req,res){
    Artical.find({}).then ((articale) =>{
        res.status(200).send(articale)
    }).catch((e) => {
        res.status(500).send(e)
    })
}
// Get artical by id

const getElmenetById= async function(req,res){
    const _id = req.params.id
    Artical.findById(_id).then ((artical) => {
        if(!artical){
          return  res.status(404).send('UNABLE TO FIND')
        }
        res.status(200).send(artical)
      }).catch ((e) => {
        res.status(500).send(e)
      })
}

// add new artical

const addNewِArtical = async function(req,res){
    console.log(req.body)
    const artical = new Artical (req.body,{ isDraft: false ,id: artical.length + 1, })
    artical.save()
    .then ((artical) => {res.status(200).json({ message: 'Article published successfully', artical})})
    .catch((e)=>{ res.status(400).send(e)})
}
//update artical by id

const updateArticalById =async function(req,res){

  try {
      const _id = req.params.id 
      const artical = await Artical.findByIdAndUpdate (_id , req.body , {
         new : true,
         runValidators : true
      })
      if(!artical) {
         return res.status(404).send('No User Founded')
      }
      res.status(200).send(artical)
   }
   catch(error) {
      res.status(400).send(error)
   }
}

// delete article by id

const deletById = async function(req,res){
  try {
      const _id = req.params.id
      const artical = await Artical.findByIdAndDelete(_id)
      if(!artical) {
         return res.status(404).send('UNABLE TO FIND USER')
      }
      res.status(200).send(artical)
 }
 catch(e){
     res.status(400).send(e)
 }
}
//   creat article as draft
const draft =async (req, res) => {
    try {
        console.log(req.body)
            // const artical = new Artical (req.body,{isDraft: true , id: artical.length + 1,} )
const artical = new Artical({
                Title,
                subtitle,
                Phara,
                categoryArtical,
                isDraft: true,
              });
              artical.save();
              res.status(201).json({ message: 'The article has been successfully saved as a draft.', artical });

    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
      }
}
// edit-draft arical by id

const updateDraftArticalById =async function(req,res){

    try {
        const _id = req.params.id 
        const artical = await Artical.findByIdAndUpdate (_id , req.body , {
           new : true,
           runValidators : true
        })
        if(!artical) {
           return res.status(404).send('No User Founded')
        }
        res.status(200).send(artical)
     }
     catch(error) {
        res.status(400).send(error)
     }
}

// make a post as preview
const preview = async function(req,res){
    const articleId = req.params.id;
    const artical = Artical[articleId];
    if (!artical) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article preview', artical });
}


// to move article to trash  
const moveArticalToTrash = async function(req,res){

  const articleId = parseInt(req.params.id, 10);
  const articleIndex = Artical.findIndex(article => article.id === articleId);

  if (articleIndex === -1) {
    return res.status(404).json({ message: 'Article not found.' });
  }

  const deletedArticle = Artical.splice(articleIndex, 1)[0];
  trash.push(deletedArticle);
  res.status(200).json({ message: 'Article moved to trash.', artical: deletedArticle });
}
// Function used to delete article from trash after 30 days
function deleteOldTrashArticles() {
    const currentDate = new Date();
    const thirtyDaysAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 يومًا بالميلي ثانية
  
    for (let i = trash.length - 1; i >= 0; i--) {
      if (trash[i].deletedAt < thirtyDaysAgo) {
        trash.splice(i, 1);
      }
    }
  }
  
module.exports = {
    getAllElement,
    draft,
    addNewِArtical,
    getElmenetById,
    updateArticalById,
    deletById,
    preview,
    updateDraftArticalById,
    moveArticalToTrash,
    deleteOldTrashArticles

}

// save artical as draft
// const draft = async function(req,res){
//     console.log(req.body)
//     const artical = new Artical (req.body)
//     artical.save()
//     .then ((artical) => {res.status(200).json({ message: 'Article saved as draft', artical})})
//     .catch((e)=>{ res.status(400).send(e)})
// }
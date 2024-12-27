import Joi from 'joi';

const createBlogValidation = Joi.object({
  body: Joi.object().keys({
    title: Joi.string().required(),
    content:Joi.string().required()
  }),
});
const deleteBlogValidation = Joi.object({
    body:Joi.object().keys({
        id:Joi.number().required()
    })
})
const patchBlogValidation = Joi.object({
    body:Joi.object().keys({
        id:Joi.number().required(),
        title:Joi.string(),
        content:Joi.string()
    })
})
const putBlogValidation = Joi.object({
    body:Joi.object().keys({
        id:Joi.number().required(),
        title:Joi.string().required(),
        content:Joi.string().required()
    })
})
export{
    createBlogValidation,
    deleteBlogValidation,
    putBlogValidation,
    patchBlogValidation
}
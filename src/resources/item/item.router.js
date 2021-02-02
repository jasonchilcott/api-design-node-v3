import { Router } from 'express'
// import controllers from './item.controllers'

const router = Router()

const controller = (req, res) => {
  res.send({ message: 'hello' })
}

router
  .route('/')
  .get(controller)
  .post(controller)

router
  .route('/:id')
  .get(controller)
  .put(controller)
  .delete(controller)

// router
//   .route('/')
//   .get(controllers.getMany)
//   .post(controllers.createOne)

// router
//   .route('/:id')
//   .get(controllers.getOne)
//   .put(controllers.updateOne)
//   .delete(controllers.removeOne)

export default router

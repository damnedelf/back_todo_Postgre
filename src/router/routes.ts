import { NextFunction, Request, Response } from 'express';
let express = require('express');
const router = express.Router();

const Todos = require('../db/models/todo_model');

//new todo===>db
router.post(
  '/',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let person = await Todos.create({
        name: req.body.name,
        isCompleted: false,
        order: req.body.order,
      });

      const responseObject = {
        id: person.dataValues.id,
        name: req.body.name,
        isCompleted: false,
        order: req.body.order,
      };
      res.status(201).json(responseObject);
    } catch (error) {
      console.log(error);
      next(new Error('access denied'));
    }
  }
);
//get all array for onLoad
router.get(
  '/',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const todoArr: IobjectFromPostgre[] = await Todos.findAll({
        order: [['order', 'ASC']],
      });
      res.status(200).json(todoArr);
    } catch (error) {
      console.log(error);
      next(new Error('access denied'));
    }
  }
);
//delete todo by id
router.delete(
  '/:id',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      await Todos.destroy({
        where: { id: req.params.id },
      });
      res.status(204).end();
    } catch (error) {
      console.log(error);
      next(new Error('access denied'));
    }
  }
);

router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Todos.update(
      { isCompleted: !req.body.condition },
      {
        where: {},
      }
    );
  } catch (error) {
    console.log(error.message);
    next(new Error('access denied'));
  }

  res.status(204).end();
});

// //mark completed/!completed by id + update all + order
router.patch(
  '/:id',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      //if req  => order
      if (req.body.order !== null && req.body.condition == null) {
        await Todos.update(
          { order: Number(req.body.order) },
          {
            where: {
              id: req.params.id,
            },
          }
        );

        return res.status(204).end();
        //   //if req => mark all
      }
      //if req mark one

      let todoObj: IobjectFromPostgre = await Todos.findOne({
        where: { id: req.params.id },
      });

      await Todos.update(
        { isCompleted: !todoObj.dataValues.isCompleted },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(204).end();
    } catch (error) {
      console.log(error);
      next(new Error('access denied'));
    }
  }
);

module.exports = router;

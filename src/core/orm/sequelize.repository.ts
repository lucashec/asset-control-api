import { ModelCtor } from 'sequelize-typescript';

export default abstract class Repository {
  protected model: ModelCtor;

  constructor(model: ModelCtor) {
    this.model = model;
  }
}

interface IError extends Error {
  status: number;
}
interface IobjectFromPostgre {
  dataValues: {
    id: number;
    name: string;
    isCompleted: boolean;
    order: number;
  };
  _previousDataValues: {
    id: number;
    name: string;
    isCompleted: boolean;
    order: number;
  };
  _changed: Function;
  _options: {
    isNewRecord: boolean;
    _schema: any;
    _schemaDelimiter: string;
    raw: boolean;
    attributes: string[];
  };
  isNewRecord: boolean;
}

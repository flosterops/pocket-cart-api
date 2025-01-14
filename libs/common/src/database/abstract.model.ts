export abstract class AbstractModel {
    protected constructor(
        readonly table: string,
        readonly pk: string = 'id',
    ) {}
}

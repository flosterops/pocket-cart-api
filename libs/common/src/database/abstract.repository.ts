import { AbstractDb } from '@app/common/database/abstract.db';
import { Client } from 'pg';
import { AbstractEntity } from '@app/common/database/abstract.entity';
import { Logger } from '@nestjs/common';
import { AbstractModel } from '@app/common/database/abstract.model';

export abstract class AbstractRepository<Entity extends AbstractEntity> extends AbstractDb<Entity, Client> {
    protected abstract readonly logger: Logger;

    protected constructor(
        protected readonly db: Client,
        private readonly model: AbstractModel,
    ) {
        super(db);
    }

    async findAll(): Promise<Entity[]> {
        try {
            const query = `SELECT * FROM ${this.model.table}`;
            const results = await this.query(query);

            console.log('here');
            return results;
        } catch (error) {
            throw error;
        }
    }
    async findOne(id: number): Promise<Entity> {
        try {
            const query = `SELECT * FROM ${this.model.table} WHERE ${this.model.pk} = $1`;
            const [entity] = await this.query(query, [id]);

            return entity;
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(id: number): Promise<Entity> {
        try {
            const query = `DELETE FROM ${this.model.table} WHERE ${this.model.pk} = $1 RETURNING *`;
            const [entity] = await this.query(query, [id]);

            return entity;
        } catch (error) {
            throw error;
        }
    }

    async updateOne(id: number, updateData: Partial<Entity>): Promise<Entity> {
        try {
            const fields = Object.keys(updateData);
            const values = Object.values(updateData);

            const combinedUpdate = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');
            const query = `UPDATE ${this.model.table} SET ${combinedUpdate} WHERE ${this.model.pk} = $${fields.length + 1} RETURNING *`;

            const [entity] = await this.query(query, [...values, id]);
            return entity;
        } catch (error) {
            throw error;
        }
    }

    async addOne(data: Partial<Entity>) {
        try {
            const fields = Object.keys(data);
            const values = Object.values(data);

            const combinedFields = fields.join(', ');
            const combinedValues = values.map((_, index) => `$${index + 1}`).join(', ');

            const query = `INSERT INTO ${this.model.table} (${combinedFields}) VALUES (${combinedValues}) RETURNING *`;
            const [entity] = await this.query(query, [...values]);

            return entity;
        } catch (error) {
            throw error;
        }
    }
}

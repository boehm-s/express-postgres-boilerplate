module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host:'127.0.0.1',
            database: process.env.DB_NAME || 'seedup',
            user:     process.env.DB_USER || 'seedup',
            password: 'seedup'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            host:'127.0.0.1',
            database: process.env.DB_NAME || 'seedup',
            user:     process.env.DB_USER || 'postgresql',
            password: 'seedup'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};

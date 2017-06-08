module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host:'127.0.0.1',
            database: 'seedup',
            user:     'seedup',
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
            database: 'seedup',
            user:     'postgresql',
            password: ''
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

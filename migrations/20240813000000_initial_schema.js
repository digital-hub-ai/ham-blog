exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.timestamps(true, true);
    })
    .createTable('tools', table => {
      table.increments(&apos;id&apos;).primary();
      table.string(&apos;name&apos;).notNullable();
      table.text(&apos;description&apos;);
      table.string(&apos;url&apos;);
      table.string(&apos;category&apos;);
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists(&apos;tools&apos;)
    .dropTableIfExists(&apos;users&apos;);
};

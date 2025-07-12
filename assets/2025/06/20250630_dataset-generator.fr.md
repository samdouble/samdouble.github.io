```
call add_configuration(parse_json('{
  "version": "1.0.0",
  "random_seed": 1,
  "database": "db",
  "schema": "schema",
  "tables": [
    {
      "name": "users",
      "initialization": {
        "max_rows": 1000,
        "min_rows": 100
      },
      "columns": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "first_name",
          "type": "first_name"
        },
        {
          "name": "last_name",
          "type": "last_name"
        },
        {
          "name": "email",
          "type": "email"
        },
        {
          "name": "pet",
          "type": "enum",
          "possible_values": [
            {
              "value": "dog"
            },
            {
              "value": "cat"
            },
            {
              "value": "bird"
            },
            {
              "value": "fish"
            }
          ]
        }
      ]
    }
  ]
}'));
```

call generate_configuration('30e251c4-bba4-494d-a4c1-c78721fdf120');

select * from db.schema.users;
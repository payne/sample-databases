const databases = {
  "sample_databases": [
    {
      "name": "Sakila",
      "description": "A modern successor to Northwind, created by MySQL. Models a DVD rental store business with tables for films, actors, customers, rentals, payments, and stores.",
      "urls": [
        "https://dev.mysql.com/doc/sakila/en/",
        "https://dev.mysql.com/doc/index-other.html"
      ]
    },
    {
      "name": "Pagila",
      "description": "PostgreSQL's port of the Sakila database, with PostgreSQL-specific optimizations and features.",
      "urls": [
        "https://github.com/devrimgunduz/pagila"
      ]
    },
    {
      "name": "Chinook",
      "description": "Models a digital media store (similar to iTunes) with tables for artists, albums, media tracks, invoices, and customers.",
      "urls": [
        "https://github.com/lerocha/chinook-database"
      ]
    },
    {
      "name": "AdventureWorks",
      "description": "Created by Microsoft but available openly, models a bicycle manufacturer with complex schemas covering manufacturing, sales, purchasing, and human resources.",
      "urls": [
        "https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure",
        "https://github.com/Microsoft/sql-server-samples"
      ]
    },
    {
      "name": "Employees",
      "description": "A sample database from MySQL containing about 300,000 employee records with 2.8 million salary entries.",
      "urls": [
        "https://github.com/datacharmer/test_db"
      ]
    },
    {
      "name": "World Database",
      "description": "Contains information about countries, cities, and languages.",
      "urls": [
        "https://dev.mysql.com/doc/world-setup/en/"
      ]
    }
  ]
};

console.log(JSON.stringify(databases, null, 2));


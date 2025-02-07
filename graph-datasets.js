const graphDatasets = {
  "graph_datasets": [
    {
      "name": "SNAP Datasets",
      "description": "Stanford Network Analysis Project collection of large network datasets",
      "categories": [
        "Social networks",
        "Web graphs",
        "Road networks",
        "Communication networks",
        "Citation networks"
      ],
      "notable_examples": [
        {
          "name": "Facebook Social Circles",
          "nodes": "4,039",
          "edges": "88,234",
          "type": "Social network"
        },
        {
          "name": "Amazon Co-purchasing Network",
          "nodes": "334,863",
          "edges": "925,872",
          "type": "Product network"
        }
      ],
      "url": "https://snap.stanford.edu/data/"
    },
    {
      "name": "NetworkRepository",
      "description": "Interactive scientific network data repository",
      "categories": [
        "Biological networks",
        "Brain networks",
        "Social networks",
        "Infrastructure networks"
      ],
      "url": "https://networkrepository.com",
      "formats": ["GraphML", "GML", "Edge List"]
    },
    {
      "name": "Konect Datasets",
      "description": "Koblenz Network Collection - Large network datasets of various types",
      "url": "http://konect.cc/networks/",
      "categories": [
        "Social networks",
        "Hyperlink networks",
        "Communication networks",
        "Contact networks",
        "Rating networks"
      ]
    },
    {
      "name": "OpenFlights",
      "description": "Airport, airline and route data",
      "url": "https://openflights.org/data.html",
      "components": [
        {
          "name": "Airports",
          "count": "7,698"
        },
        {
          "name": "Airlines",
          "count": "6,162"
        },
        {
          "name": "Routes",
          "count": "67,663"
        }
      ],
      "format": "CSV/JSON"
    },
    {
      "name": "DBpedia",
      "description": "Structured content from Wikipedia",
      "url": "https://www.dbpedia.org/resources/latest-core/",
      "type": "Knowledge graph",
      "formats": ["RDF", "N-Triples", "JSON-LD"],
      "features": [
        "Ontology structure",
        "Cross-domain knowledge",
        "Multilingual",
        "Linked data"
      ]
    },
    {
      "name": "Bio2RDF",
      "description": "Linked data for life sciences",
      "url": "http://bio2rdf.org/",
      "type": "Biological network",
      "domains": [
        "Drug data",
        "Protein interactions",
        "Genetic data",
        "Scientific literature"
      ],
      "format": "RDF"
    },
    {
      "name": "DBLP",
      "description": "Computer science bibliography network",
      "url": "https://dblp.org/xml/",
      "type": "Citation network",
      "features": [
        "Author collaborations",
        "Publication citations",
        "Conference relationships"
      ],
      "formats": ["XML", "RDF"]
    },
    {
      "name": "WordNet",
      "description": "Lexical database of English",
      "url": "https://wordnet.princeton.edu/download",
      "type": "Semantic network",
      "features": [
        "Synsets (sets of synonyms)",
        "Lexical relations",
        "Word hierarchies",
        "Semantic relationships"
      ],
      "format": "Various database formats"
    }
  ]
};

console.log(JSON.stringify(graphDatasets, null, 2));

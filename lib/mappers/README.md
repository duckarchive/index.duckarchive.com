# Mappers

Mappers are used to map data from one format to another. They are used in the context of data integration, data migration, and data transformation.

## Development

If you want to develop a new mapper, please read the following guidelines:

### Input and Output

Let's start from the end. The output of a mapper should be an array of Person objects defined in the [Prisma schema](/prisma/schema.prisma).
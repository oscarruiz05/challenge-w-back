# Challenge W Backend

## Base de datos y migraciones

Este proyecto utiliza PostgreSQL como base de datos y TypeORM para el ORM con soporte para migraciones y seeders.

### Configuración

La configuración de la base de datos se encuentra en:
- `src/infrastructure/config/database.config.ts` - Configuración para NestJS
- `typeorm.config.ts` - Configuración para migraciones y CLI

### Estructura

El proyecto sigue una arquitectura hexagonal:

- **Domain**: Contiene las entidades y las interfaces de los repositorios
  - `domain/entities/` - Entidades de dominio
  - `domain/repositories/` - Interfaces de repositorios

- **Infrastructure**: Contiene las implementaciones concretas
  - `infrastructure/config/` - Configuraciones
  - `infrastructure/` - Implementaciones de repositorios
  - `infrastructure/migrations.ts` - Migraciones
  - `infrastructure/seeds.ts` - Seeders

### Comandos para migraciones

```bash
# Crear una nueva migración
npm run migration:create -- src/infrastructure/migrations/NombreMigracion

# Generar una migración a partir de cambios en entidades
npm run migration:generate -- src/infrastructure/migrations/NombreMigracion

# Ejecutar migraciones
npm run migration:run

# Revertir última migración
npm run migration:revert
```

### Comandos para seeders

```bash
# Crear un nuevo seeder
npm run seed:create -- src/infrastructure/seeds/NombreSeeder

# Ejecutar seeders
npm run seed:run
```
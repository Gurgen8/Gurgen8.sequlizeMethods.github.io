import { Categories, Products, ProductCategoryRelation, Users } from "../models";

async function main() {
  await Users.sync({ alter: true });
  await Products.sync({ alter: true });
  await Categories.sync({ alter: true });
  await ProductCategoryRelation.sync({ alter: true });
  process.exit(0)
}

main().catch(e => console.error(e))

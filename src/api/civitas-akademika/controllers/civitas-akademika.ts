/**
 * civitas-akademika controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::civitas-akademika.civitas-akademika",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          paraGurudanPengajar: {
            populate: "*",
          },
        },
      };

      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db
        .query("api::civitas-akademika.civitas-akademika")
        .findOne({
          where: { id },
          populate: {
            paraGurudanPengajar: {
              populate: "*",
            },
          },
        });

      if (!entity) {
        return ctx.notFound("Data civitas akademika tidak ditemukan");
      }

      return { data: entity };
    },
  })
);

/**
 * fasilitas-sekolah controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::fasilitas-sekolah.fasilitas-sekolah",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          fasilitasSekolah: {
            populate: "*",
          },
          fasilitasAsrama: {
            populate: "*",
          },
        },
      };

      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db.query("api::fasilitas-sekolah.fasilitas-sekolah").findOne({
        where: { id },
        populate: {
          fasilitasSekolah: {
            populate: "*",
          },
          fasilitasAsrama: {
            populate: "*",
          },
        },
      });

      if (!entity) {
        return ctx.notFound("Data fasilitas sekolah tidak ditemukan");
      }

      return { data: entity };
    },
  })
);

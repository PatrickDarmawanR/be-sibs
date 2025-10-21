/**
 * school-facility controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::school-facility.school-facility",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          school: { populate: "*" },
          dormitory: { populate: "*" },
        },
      };

      const { data, meta } = await super.find(ctx);
      const baseUrl =
        strapi.config.get("server.url") || "http://localhost:1337";

      const item = data?.[0];
      if (!item) return ctx.notFound("Data fasilitas sekolah tidak ditemukan");

      const attrs = item.attributes || item;

      const mapFacility = (facilities) =>
        facilities?.map((f) => ({
          title: f.title,
          alt: f.alt,
          imageUrl: f.image?.url ? `${baseUrl}${f.image.url}` : null,
        })) || [];

      const result = {
        id: item.id,
        title: attrs.title,
        description: attrs.description,
        school: mapFacility(attrs.school),
        dormitory: mapFacility(attrs.dormitory),
      };

      ctx.send({ schoolFacility: result, meta });
    },

    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db
        .query("api::school-facility.school-facility")
        .findOne({
          where: { id },
          populate: {
            school: { populate: "*" },
            dormitory: { populate: "*" },
          },
        });

      if (!entity)
        return ctx.notFound("Data fasilitas sekolah tidak ditemukan");

      const baseUrl =
        strapi.config.get("server.url") || "http://localhost:1337";

      const mapFacility = (facilities) =>
        facilities?.map((f) => ({
          title: f.title,
          alt: f.alt,
          imageUrl: f.image?.url ? `${baseUrl}${f.image.url}` : null,
        })) || [];

      const result = {
        id: entity.id,
        title: entity.title,
        description: entity.description,
        school: mapFacility(entity.school),
        dormitory: mapFacility(entity.dormitory),
      };

      ctx.send(result);
    },
  })
);

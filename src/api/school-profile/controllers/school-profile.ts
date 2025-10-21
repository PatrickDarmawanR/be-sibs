/**
 * school-profile controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::school-profile.school-profile",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          SMPIT: {
            populate: {
              section_1: { populate: { image: true } },
              section_2: {
                populate: { image: true, descriptionMisi: { populate: "*" } },
              },
              section_3: { populate: { superiority: { populate: "*" } } },
              section_4: {
                populate: { icon: true, accordionAspect: { populate: "*" } },
              },
            },
          },
          SMAIT: {
            populate: {
              section_1: { populate: { image: true } },
              section_2: {
                populate: { image: true, descriptionMisi: { populate: "*" } },
              },
              section_3: { populate: { superiority: { populate: "*" } } },
            },
          },
        },
      };

      const { data, meta } = await super.find(ctx);
      const baseUrl =
        strapi.config.get("server.url") || "http://localhost:1337";

      const item = data?.[0];
      if (!item) return ctx.notFound("Data school profile tidak ditemukan");

      const attrs = item.attributes || item;

      const mapImage = (img) =>
        img
          ? Array.isArray(img)
            ? img.map((i) => `${baseUrl}${i.url}`)
            : `${baseUrl}${img.url}`
          : null;

      const result = {
        id: item.id,
        SMPIT: {
          section_1: attrs.SMPIT?.section_1 && {
            title: attrs.SMPIT.section_1.title,
            description: attrs.SMPIT.section_1.description,
            imageUrl: mapImage(attrs.SMPIT.section_1.image),
          },
          section_2: attrs.SMPIT?.section_2 && {
            title: attrs.SMPIT.section_2.title,
            textVisi: attrs.SMPIT.section_2.textVisi,
            descriptionVisi: attrs.SMPIT.section_2.descriptionVisi,
            textMisi: attrs.SMPIT.section_2.textMisi,
            descriptionMisi:
              attrs.SMPIT.section_2.descriptionMisi?.map((m) => m.point) || [],
            imageUrl: mapImage(attrs.SMPIT.section_2.image),
          },
          section_3: attrs.SMPIT?.section_3 && {
            title: attrs.SMPIT.section_3.title,
            description: attrs.SMPIT.section_3.description,
            superiority:
              attrs.SMPIT.section_3.superiority?.map((s) => ({
                title: s.title,
                description: s.description,
                iconUrl: s.icon?.url ? `${baseUrl}${s.icon.url}` : null,
              })) || [],
          },
          section_4: attrs.SMPIT?.section_4 && {
            title: attrs.SMPIT.section_4.title,
            iconUrl: attrs.SMPIT.section_4.icon?.url
              ? `${baseUrl}${attrs.SMPIT.section_4.icon.url}`
              : null,
            numberOfAspects: attrs.SMPIT.section_4.numberOfAspects,
            textAspect: attrs.SMPIT.section_4.textAspect,
            description: attrs.SMPIT.section_4.description,
            accordionAspect:
              attrs.SMPIT.section_4.accordionAspect?.map((a) => ({
                title: a.title,
                subPointAspect: a.subPointAspect,
              })) || [],
          },
        },
        SMAIT: {
          section_1: attrs.SMAIT?.section_1 && {
            title: attrs.SMAIT.section_1.title,
            description: attrs.SMAIT.section_1.description,
            imageUrl: mapImage(attrs.SMAIT.section_1.image),
          },
          section_2: attrs.SMAIT?.section_2 && {
            title: attrs.SMAIT.section_2.title,
            textVisi: attrs.SMAIT.section_2.textVisi,
            descriptionVisi: attrs.SMAIT.section_2.descriptionVisi,
            textMisi: attrs.SMAIT.section_2.textMisi,
            descriptionMisi:
              attrs.SMAIT.section_2.descriptionMisi?.map((m) => m.point) || [],
            imageUrl: mapImage(attrs.SMAIT.section_2.image),
          },
          section_3: attrs.SMAIT?.section_3 && {
            title: attrs.SMAIT.section_3.title,
            description: attrs.SMAIT.section_3.description,
            superiority:
              attrs.SMAIT.section_3.superiority?.map((s) => ({
                title: s.title,
                description: s.description,
                iconUrl: s.icon?.url ? `${baseUrl}${s.icon.url}` : null,
              })) || [],
          },
        },
      };

      ctx.send({ data: result, meta });
    },
  })
);

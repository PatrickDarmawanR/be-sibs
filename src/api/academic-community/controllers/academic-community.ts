/**
 * academic-community controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::academic-community.academic-community",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          section_1: {
            populate: {
              openingSpeech: { populate: { image: true } },
            },
          },
          section_2: {
            populate: {
              teacherAndInstructors: { populate: { image: true } },
            },
          },
        },
      };

      const { data, meta } = await super.find(ctx);
      const baseUrl =
        strapi.config.get("server.url") || "http://localhost:1337";

      const item = data?.[0];
      if (!item) return ctx.notFound("Data civitas akademika tidak ditemukan");

      const attrs = item.attributes || item;

      const result = {
        id: item.id,
        section_1: attrs.section_1
          ? {
              title: attrs.section_1.title,
              description: attrs.section_1.description,
              openingSpeech: attrs.section_1.openingSpeech
                ? {
                    alt: attrs.section_1.openingSpeech.alt,
                    quotes: attrs.section_1.openingSpeech.quotes,
                    speech: attrs.section_1.openingSpeech.speech,
                    name: attrs.section_1.openingSpeech.name,
                    position: attrs.section_1.openingSpeech.position,
                    imageUrl: attrs.section_1.openingSpeech.image?.url
                      ? `${baseUrl}${attrs.section_1.openingSpeech.image.url}`
                      : null,
                  }
                : null,
            }
          : null,
        section_2: attrs.section_2
          ? {
              title: attrs.section_2.title,
              description: attrs.section_2.description,
              teacherAndInstructors:
                attrs.section_2.teacherAndInstructors?.map((person) => ({
                  alt: person.alt,
                  name: person.name,
                  position: person.position,
                  imageUrl: person.image?.url
                    ? `${baseUrl}${person.image.url}`
                    : null,
                })) || [],
            }
          : null,
      };

      ctx.send({ data: result, meta });
    },
  })
);

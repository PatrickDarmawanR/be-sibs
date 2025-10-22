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
              head: { populate: { image: true } },
            },
          },
        },
      };

      const { data, meta } = await super.find(ctx);
      const baseUrl = strapi.config.get("server.url") || "http://localhost:1337";

      const item = data?.[0];
      if (!item) return ctx.notFound("Data civitas akademika tidak ditemukan");

      const attrs = item.attributes || item;

      const mapImage = (img) =>
        img
          ? Array.isArray(img)
            ? img.map((i) => `${baseUrl}${i.url}`)
            : `${baseUrl}${img.url}`
          : null;

      const result = {
        id: item.id,

        section_1: attrs.section_1 && {
          title: attrs.section_1.title,
          description: attrs.section_1.description,
          openingSpeech: attrs.section_1.openingSpeech && {
            alt: attrs.section_1.openingSpeech.alt,
            quotes: attrs.section_1.openingSpeech.quotes,
            speech: attrs.section_1.openingSpeech.speech,
            name: attrs.section_1.openingSpeech.name,
            position: attrs.section_1.openingSpeech.position,
            imageUrl: mapImage(attrs.section_1.openingSpeech.image),
          },
        },

        section_2: attrs.section_2 && {
          title: attrs.section_2.title,
          description: attrs.section_2.description,
          head:
            attrs.section_2.head?.map((person) => ({
              alt: person.alt,
              name: person.name,
              position: person.position,
              imageUrl: mapImage(person.image),
            })) || [],

          teacherAndInstructors:
            attrs.section_2.teacherAndInstructors?.map((person) => ({
              alt: person.alt,
              name: person.name,
              position: person.position,
              imageUrl: mapImage(person.image),
            })) || [],
        },
      };

      ctx.send({ data: result, meta });
    },
  })
);

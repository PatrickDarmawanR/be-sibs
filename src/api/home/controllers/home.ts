/**
 * home controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::home.home",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          section_1: { populate: { image: true } },
          section_2: {
            populate: {
              image: true,
              formSMPIT: { populate: "*" },
              formSMAIT: { populate: "*" },
            },
          },
          section_3: {
            populate: {
              image: true,
              whyStudy: {
                populate: {
                  whyStudyMain: { populate: { icon: true } },
                  whyStudySubMain: { populate: { icon: true } },
                },
              },
            },
          },
          section_4: {
            populate: {
              testimoniStudentAndParent: { populate: { profile: true } },
            },
          },
        },
      };

      const { data, meta } = await super.find(ctx);
      const baseUrl =
        strapi.config.get("server.url") || "http://localhost:1337";

      const item = data?.[0];
      if (!item) return ctx.notFound("Data home tidak ditemukan");

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
          alt: attrs.section_1.alt,
          button: attrs.section_1.button,
          imageUrl: mapImage(attrs.section_1.image),
        },
        section_2: attrs.section_2 && {
          title: attrs.section_2.title,
          description: attrs.section_2.description,
          alt: attrs.section_2.alt,
          imageUrl: mapImage(attrs.section_2.image),
          formSMPIT: attrs.section_2.formSMPIT || null,
          formSMAIT: attrs.section_2.formSMAIT || null,
        },
        section_3: attrs.section_3 && {
          title: attrs.section_3.title,
          description: attrs.section_3.description,
          alt: attrs.section_3.alt,
          imageUrl: mapImage(attrs.section_3.image),
          whyStudy: attrs.section_3.whyStudy
            ? {
                whyStudyMain: attrs.section_3.whyStudy.whyStudyMain && {
                  title: attrs.section_3.whyStudy.whyStudyMain.title,
                  description:
                    attrs.section_3.whyStudy.whyStudyMain.description,
                  alt: attrs.section_3.whyStudy.whyStudyMain.alt,
                  iconUrl: attrs.section_3.whyStudy.whyStudyMain.icon?.url
                    ? `${baseUrl}${attrs.section_3.whyStudy.whyStudyMain.icon.url}`
                    : null,
                },
                whyStudySubMain:
                  attrs.section_3.whyStudy.whyStudySubMain?.map((sub) => ({
                    title: sub.title,
                    description: sub.description,
                    alt: sub.alt,
                    iconUrl: sub.icon?.url ? `${baseUrl}${sub.icon.url}` : null,
                  })) || [],
              }
            : null,
        },
        section_4: attrs.section_4 && {
          title: attrs.section_4.title,
          description: attrs.section_4.description,
          testimoniStudentAndParent:
            attrs.section_4.testimoniStudentAndParent?.map((t) => ({
              testimonialName: t.testimonialName,
              testimonialRole: t.testimonialRole,
              testimonial: t.testimonial,
              alt: t.alt,
              profileUrl: t.profile?.url ? `${baseUrl}${t.profile.url}` : null,
            })) || [],
        },
      };

      ctx.send({ data: result, meta });
    },
  })
);

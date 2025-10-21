import type { Schema, Struct } from '@strapi/strapi';

export interface AcademicCommunityOpeningSpeech extends Struct.ComponentSchema {
  collectionName: 'components_academic_community_opening_speeches';
  info: {
    displayName: 'openingSpeech';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    quotes: Schema.Attribute.String;
    speech: Schema.Attribute.Text;
  };
}

export interface AcademicCommunitySection1 extends Struct.ComponentSchema {
  collectionName: 'components_academic_community_section_1s';
  info: {
    displayName: 'section_1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    openingSpeech: Schema.Attribute.Component<
      'academic-community.opening-speech',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface AcademicCommunitySection2 extends Struct.ComponentSchema {
  collectionName: 'components_academic_community_section_2s';
  info: {
    displayName: 'section_2';
  };
  attributes: {
    description: Schema.Attribute.Text;
    teacherAndInstructors: Schema.Attribute.Component<
      'academic-community.teacher-and-instructors',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface AcademicCommunityTeacherAndInstructors
  extends Struct.ComponentSchema {
  collectionName: 'components_academic_community_teacher_and_instructors';
  info: {
    displayName: 'teacherAndInstructors';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface AccordionAccordionAspect extends Struct.ComponentSchema {
  collectionName: 'components_accordion_accordion_aspects';
  info: {
    displayName: 'accordionAspect';
  };
  attributes: {
    subPointAspect: Schema.Attribute.Component<'points.sub-point-aspect', true>;
    title: Schema.Attribute.String;
  };
}

export interface CategoryProgramAcademicSmpitCocurricular
  extends Struct.ComponentSchema {
  collectionName: 'components_category_program_academic_smpit_cocurriculars';
  info: {
    displayName: 'cocurricular';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CategoryProgramAcademicSmpitIntracurricular
  extends Struct.ComponentSchema {
  collectionName: 'components_category_program_academic_smpit_intracurriculars';
  info: {
    displayName: 'intracurricular';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CategoryProgramAcademicSmpitSchedule
  extends Struct.ComponentSchema {
  collectionName: 'components_category_program_academic_smpit_schedules';
  info: {
    displayName: 'schedule';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CategoryProgramNonAcademicSmpitExtracurricular
  extends Struct.ComponentSchema {
  collectionName: 'components_category_program_non_academic_smpit_extracurriculars';
  info: {
    displayName: 'extracurricular';
  };
  attributes: {
    description: Schema.Attribute.Text;
    extracurricularActivity: Schema.Attribute.Component<
      'category-program-non-academic-smpit.extracurricular-activity',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CategoryProgramNonAcademicSmpitExtracurricularActivity
  extends Struct.ComponentSchema {
  collectionName: 'components_category_program_non_academic_smpit_extracurricular_activities';
  info: {
    displayName: 'extracurricularActivity';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CategoryProgramNonAcademicSmpitTahfidz
  extends Struct.ComponentSchema {
  collectionName: 'components_category_program_non_academic_smpit_tahfidzs';
  info: {
    displayName: 'tahfidz';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FacilityDormitoryFacilities extends Struct.ComponentSchema {
  collectionName: 'components_facility_dormitory_facilities';
  info: {
    displayName: 'dormitoryFacilities';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface FacilitySchoolFacilities extends Struct.ComponentSchema {
  collectionName: 'components_facility_school_facilities';
  info: {
    displayName: 'schoolFacilities';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface FormSmaitFormSmait extends Struct.ComponentSchema {
  collectionName: 'components_form_smait_form_smaits';
  info: {
    displayName: 'formSMAIT';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FormSmpitFormSmpit extends Struct.ComponentSchema {
  collectionName: 'components_form_smpit_form_smpits';
  info: {
    displayName: 'formSMPIT';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeSection1 extends Struct.ComponentSchema {
  collectionName: 'components_home_section_1s';
  info: {
    displayName: 'section_1';
  };
  attributes: {
    button: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeSection2 extends Struct.ComponentSchema {
  collectionName: 'components_home_section_2s';
  info: {
    displayName: 'section_2';
  };
  attributes: {
    description: Schema.Attribute.Text;
    formSMAIT: Schema.Attribute.Component<'form-smait.form-smait', false>;
    formSMPIT: Schema.Attribute.Component<'form-smpit.form-smpit', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeSection3 extends Struct.ComponentSchema {
  collectionName: 'components_home_section_3s';
  info: {
    displayName: 'section_3';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    whyStudy: Schema.Attribute.Component<
      'why-study-component.why-study',
      false
    >;
  };
}

export interface HomeSection4 extends Struct.ComponentSchema {
  collectionName: 'components_home_section_4s';
  info: {
    displayName: 'section_4';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimoniStudentAndParent: Schema.Attribute.Component<
      'testimoni.testimoni-student-and-parent',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface MisiSmaitDescriptionMisi extends Struct.ComponentSchema {
  collectionName: 'components_misi_smait_description_misis';
  info: {
    displayName: 'descriptionMisi';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface MisiDescriptionMisi extends Struct.ComponentSchema {
  collectionName: 'components_misi_description_misis';
  info: {
    displayName: 'descriptionMisi';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface PoinPoinAspek extends Struct.ComponentSchema {
  collectionName: 'components_poin_poin_aspeks';
  info: {
    displayName: 'poinAspek';
  };
  attributes: {
    poin: Schema.Attribute.Text;
  };
}

export interface PointsSubPointAspect extends Struct.ComponentSchema {
  collectionName: 'components_points_sub_point_aspects';
  info: {
    displayName: 'subPointAspect';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface ProgramSmpitAcademic extends Struct.ComponentSchema {
  collectionName: 'components_program_smpit_academics';
  info: {
    displayName: 'academic';
  };
  attributes: {
    cocurricular: Schema.Attribute.Component<
      'category-program-academic-smpit.cocurricular',
      false
    >;
    intracurricular: Schema.Attribute.Component<
      'category-program-academic-smpit.intracurricular',
      false
    >;
    schedule: Schema.Attribute.Component<
      'category-program-academic-smpit.schedule',
      false
    >;
  };
}

export interface ProgramSmpitNonAcademic extends Struct.ComponentSchema {
  collectionName: 'components_program_smpit_non_academics';
  info: {
    displayName: 'nonAcademic';
  };
  attributes: {
    extracurricular: Schema.Attribute.Component<
      'category-program-non-academic-smpit.extracurricular',
      false
    >;
    tahfidz: Schema.Attribute.Component<
      'category-program-non-academic-smpit.tahfidz',
      false
    >;
  };
}

export interface ProgramSmpitSection1 extends Struct.ComponentSchema {
  collectionName: 'components_program_smpit_section_1s';
  info: {
    displayName: 'section_1';
  };
  attributes: {};
}

export interface ProgramSmpitSection2 extends Struct.ComponentSchema {
  collectionName: 'components_program_smpit_section_2s';
  info: {
    displayName: 'section_2';
  };
  attributes: {};
}

export interface SchoolProfileSmait extends Struct.ComponentSchema {
  collectionName: 'components_school_profile_smaits';
  info: {
    displayName: 'SMAIT';
  };
  attributes: {
    section_1: Schema.Attribute.Component<'smait.section-1', false>;
    section_2: Schema.Attribute.Component<'smait.section-2', false>;
    section_3: Schema.Attribute.Component<'smait.section-3', false>;
  };
}

export interface SchoolProfileSmpit extends Struct.ComponentSchema {
  collectionName: 'components_school_profile_smpits';
  info: {
    displayName: 'SMPIT';
  };
  attributes: {
    section_1: Schema.Attribute.Component<'smpit.section-1', false>;
    section_2: Schema.Attribute.Component<'smpit.section-2', false>;
    section_3: Schema.Attribute.Component<'smpit.section-3', false>;
    section_4: Schema.Attribute.Component<'smpit.section-4', false>;
  };
}

export interface SmaitSection1 extends Struct.ComponentSchema {
  collectionName: 'components_smait_section_1s';
  info: {
    displayName: 'section_1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SmaitSection2 extends Struct.ComponentSchema {
  collectionName: 'components_smait_section_2s';
  info: {
    displayName: 'section_2';
  };
  attributes: {
    descriptionMisi: Schema.Attribute.Component<
      'misi-smait.description-misi',
      true
    >;
    descriptionVisi: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    textMisi: Schema.Attribute.String;
    textVisi: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SmaitSection3 extends Struct.ComponentSchema {
  collectionName: 'components_smait_section_3s';
  info: {
    displayName: 'section_3';
  };
  attributes: {
    description: Schema.Attribute.Text;
    superiority: Schema.Attribute.Component<
      'superiority-smait.superiority',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SmpitSection1 extends Struct.ComponentSchema {
  collectionName: 'components_smpit_section_1s';
  info: {
    displayName: 'section_1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SmpitSection2 extends Struct.ComponentSchema {
  collectionName: 'components_smpit_section_2s';
  info: {
    displayName: 'section_2';
  };
  attributes: {
    descriptionMisi: Schema.Attribute.Component<'misi.description-misi', true>;
    descriptionVisi: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    textMisi: Schema.Attribute.String;
    textVisi: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SmpitSection3 extends Struct.ComponentSchema {
  collectionName: 'components_smpit_section_3s';
  info: {
    displayName: 'section_3';
  };
  attributes: {
    description: Schema.Attribute.Text;
    superiority: Schema.Attribute.Component<
      'superiority-smpit.superiority',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SmpitSection4 extends Struct.ComponentSchema {
  collectionName: 'components_smpit_section_4s';
  info: {
    displayName: 'section_4';
  };
  attributes: {
    accordionAspect: Schema.Attribute.Component<
      'accordion.accordion-aspect',
      true
    >;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    numberOfAspects: Schema.Attribute.Integer;
    textAspect: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SuperioritySmaitSuperiority extends Struct.ComponentSchema {
  collectionName: 'components_superiority_smait_superiorities';
  info: {
    displayName: 'superiority';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SuperioritySmpitSuperiority extends Struct.ComponentSchema {
  collectionName: 'components_superiority_smpit_superiorities';
  info: {
    displayName: 'superiority';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface TestimoniTestimoniStudentAndParent
  extends Struct.ComponentSchema {
  collectionName: 'components_testimoni_testimoni_student_and_parents';
  info: {
    displayName: 'testimoniStudentAndParent';
  };
  attributes: {
    alt: Schema.Attribute.String;
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    testimonial: Schema.Attribute.Text;
    testimonialName: Schema.Attribute.String;
    testimonialRole: Schema.Attribute.String;
  };
}

export interface WhyStudyComponentWhyStudy extends Struct.ComponentSchema {
  collectionName: 'components_why_study_component_why_studies';
  info: {
    displayName: 'whyStudy';
  };
  attributes: {
    whyStudyMain: Schema.Attribute.Component<
      'why-study-component.why-study-main',
      false
    >;
    whyStudySubMain: Schema.Attribute.Component<
      'why-study-component.why-study-sub-main',
      true
    >;
  };
}

export interface WhyStudyComponentWhyStudyMain extends Struct.ComponentSchema {
  collectionName: 'components_why_study_component_why_study_mains';
  info: {
    displayName: 'whyStudyMain';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface WhyStudyComponentWhyStudySubMain
  extends Struct.ComponentSchema {
  collectionName: 'components_why_study_component_why_study_sub_mains';
  info: {
    displayName: 'whyStudySubMain';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'academic-community.opening-speech': AcademicCommunityOpeningSpeech;
      'academic-community.section-1': AcademicCommunitySection1;
      'academic-community.section-2': AcademicCommunitySection2;
      'academic-community.teacher-and-instructors': AcademicCommunityTeacherAndInstructors;
      'accordion.accordion-aspect': AccordionAccordionAspect;
      'category-program-academic-smpit.cocurricular': CategoryProgramAcademicSmpitCocurricular;
      'category-program-academic-smpit.intracurricular': CategoryProgramAcademicSmpitIntracurricular;
      'category-program-academic-smpit.schedule': CategoryProgramAcademicSmpitSchedule;
      'category-program-non-academic-smpit.extracurricular': CategoryProgramNonAcademicSmpitExtracurricular;
      'category-program-non-academic-smpit.extracurricular-activity': CategoryProgramNonAcademicSmpitExtracurricularActivity;
      'category-program-non-academic-smpit.tahfidz': CategoryProgramNonAcademicSmpitTahfidz;
      'facility.dormitory-facilities': FacilityDormitoryFacilities;
      'facility.school-facilities': FacilitySchoolFacilities;
      'form-smait.form-smait': FormSmaitFormSmait;
      'form-smpit.form-smpit': FormSmpitFormSmpit;
      'home.section-1': HomeSection1;
      'home.section-2': HomeSection2;
      'home.section-3': HomeSection3;
      'home.section-4': HomeSection4;
      'misi-smait.description-misi': MisiSmaitDescriptionMisi;
      'misi.description-misi': MisiDescriptionMisi;
      'poin.poin-aspek': PoinPoinAspek;
      'points.sub-point-aspect': PointsSubPointAspect;
      'program-smpit.academic': ProgramSmpitAcademic;
      'program-smpit.non-academic': ProgramSmpitNonAcademic;
      'program-smpit.section-1': ProgramSmpitSection1;
      'program-smpit.section-2': ProgramSmpitSection2;
      'school-profile.smait': SchoolProfileSmait;
      'school-profile.smpit': SchoolProfileSmpit;
      'smait.section-1': SmaitSection1;
      'smait.section-2': SmaitSection2;
      'smait.section-3': SmaitSection3;
      'smpit.section-1': SmpitSection1;
      'smpit.section-2': SmpitSection2;
      'smpit.section-3': SmpitSection3;
      'smpit.section-4': SmpitSection4;
      'superiority-smait.superiority': SuperioritySmaitSuperiority;
      'superiority-smpit.superiority': SuperioritySmpitSuperiority;
      'testimoni.testimoni-student-and-parent': TestimoniTestimoniStudentAndParent;
      'why-study-component.why-study': WhyStudyComponentWhyStudy;
      'why-study-component.why-study-main': WhyStudyComponentWhyStudyMain;
      'why-study-component.why-study-sub-main': WhyStudyComponentWhyStudySubMain;
    }
  }
}

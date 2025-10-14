import type { Schema, Struct } from '@strapi/strapi';

export interface SekolahFasilitasAsrama extends Struct.ComponentSchema {
  collectionName: 'components_sekolah_fasilitas_asramas';
  info: {
    displayName: 'fasilitasAsrama';
  };
  attributes: {
    alt: Schema.Attribute.String;
    gambar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SekolahFasilitasSekolah extends Struct.ComponentSchema {
  collectionName: 'components_sekolah_fasilitas_sekolahs';
  info: {
    displayName: 'fasilitasSekolah';
  };
  attributes: {
    alt: Schema.Attribute.String;
    gambar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SekolahSekolah extends Struct.ComponentSchema {
  collectionName: 'components_sekolah_sekolahs';
  info: {
    displayName: 'sekolah';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sekolah.fasilitas-asrama': SekolahFasilitasAsrama;
      'sekolah.fasilitas-sekolah': SekolahFasilitasSekolah;
      'sekolah.sekolah': SekolahSekolah;
    }
  }
}

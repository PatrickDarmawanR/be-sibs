import type { Schema, Struct } from '@strapi/strapi';

export interface ParaGurudanPengajarGuruPengajar
  extends Struct.ComponentSchema {
  collectionName: 'components_para_gurudan_pengajar_guru_pengajars';
  info: {
    displayName: 'guruPengajar';
  };
  attributes: {
    alt: Schema.Attribute.String;
    foto: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    nama: Schema.Attribute.String;
    posisi: Schema.Attribute.Text;
  };
}

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
      'para-gurudan-pengajar.guru-pengajar': ParaGurudanPengajarGuruPengajar;
      'sekolah.fasilitas-asrama': SekolahFasilitasAsrama;
      'sekolah.fasilitas-sekolah': SekolahFasilitasSekolah;
      'sekolah.sekolah': SekolahSekolah;
    }
  }
}

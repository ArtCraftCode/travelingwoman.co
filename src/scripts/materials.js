var materials = angular.module('Materials', [])

materials.value('materialsList', [
  // inches and yards
  {
    yarn: 'lace',
    size: 'medium',
    depth: 16,
    wingspan: 57,
    yards: 470,
    weight: 0,
    sized: 2
  },
  {
    yarn: 'lace',
    size: 'xlarge',
    depth: 23.5,
    wingspan: 70,
    yards: 500,
    weight: 0,
    sized: 4
  },
  {
    yarn: 'fingering',
    size: 'xsmall',
    depth: 14,
    wingspan: 48,
    yards: 310,
    weight: 1,
    sized: 0
  },
  {
    yarn: 'fingering',
    size: 'small',
    depth: 17,
    wingspan: 56,
    yards: 380,
    weight: 1,
    sized: 1
  },
  {
    yarn: 'fingering',
    size: 'medium',
    depth: 18,
    wingspan: 58,
    yards: 440,
    weight: 1,
    sized: 2
  },
  {
    yarn: 'fingering',
    size: 'large',
    depth: 24,
    wingspan: 75,
    yards: 600,
    weight: 1,
    sized: 3
  },
  {
    yarn: 'sport',
    size: 'xsmall',
    depth: 14,
    wingspan: 50,
    yards: 250,
    weight: 2,
    sized: 0
  },
  {
    yarn: 'sport',
    size: 'small',
    depth: 16,
    wingspan: 54,
    yards: 335,
    weight: 2,
    sized: 1
  },
  {
    yarn: 'DK',
    size: 'xlarge',
    depth: 24,
    wingspan: 72,
    yards: 520,
    weight: 3,
    sized: 4
  },
  {
    yarn: 'worsted',
    size: 'large',
    depth: 18.5,
    wingspan: 60,
    yards: 390,
    weight: 4,
    sized: 3
  },
  {
    yarn: 'worsted',
    size: 'xlarge',
    depth: 20,
    wingspan: 62,
    yards: 500,
    weight: 4,
    sized: 5
  }
])
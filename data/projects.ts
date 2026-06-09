import type { Locale } from './i18n'

export type ProjectType = 'internship' | 'game jam' | 'personal' | 'prototype'

export type Engine = 'Unity' | 'Unreal' | 'Godot' | 'Custom'

export type ProjectTag = | 'Unreal Engine'
    | 'C#'
    | 'Blueprint'
    | 'C++'
    | 'UMG'
    | 'UI'
    | '2D animation'
    | 'Spine'
    | 'DragonBones'
    | 'Shader Graph'
    | 'Material Editor'
    | 'Material Setup'
    | 'Niagara'
    | 'VFX'
    | 'Post-Processing'
    | 'Lighting'
    | 'Spatial Audio'
    | 'Audio Attenuation'
    | 'Editor Utility Widget'
    | 'Editor Scripting'
    | 'ISM/Merge Actors'
    | 'Photoshop'
    | 'Data Tables'
    | 'Line Trace'
    | 'Save System'

export interface VideoMedia {
  preview: string
  full: string
  poster: string
}

export interface BreakdownBlock {
  title: Record<Locale, string>
  video: VideoMedia
  done: Record<Locale, string>
  responsibility: Record<Locale, string>
  technicalDetails: Record<Locale, string>
}

export interface ProjectMetaGroup {
  project: Record<Locale, string[]>
  technologies: string[]
  contribution: Record<Locale, string[]>
}

export interface Project {
  slug: string
  title: string
  type: ProjectType
  engine: Engine
  meta: ProjectMetaGroup
  backgroundGradients: string[]
  summary: Record<Locale, string>
  tags: ProjectTag[]
  previewVideo: VideoMedia
  overview: Record<Locale, string[]>
  breakdown: BreakdownBlock[]
  technicalNotes: Record<Locale, string[]>
  result: Record<Locale, string[]>
}

export const homeBackgroundGradients = [
  '#4aff00',
  '#004e42',
  '#2900ae',
  '#58dcff'
]

export const projects: Project[] = [
  {
    slug: 'damned-heaven',
    title: 'Damned Heaven',
    type: 'internship',
    engine: 'Unreal',
    meta: {
      project: {
        ru: [
          'Стилизованный 3D survival',
          'Командная работа',
          'Стажировка',
          'Разработка больше года'
        ],
        en: [
          'Stylized 3D survival',
          'Teamwork',
          'Internship',
          'Developed for more than a year'
        ]
      },
      technologies: [
        'Unreal Engine',
        'Editor Utility Widget',
        'Blueprint',
        'Niagara',
        'C++',
        'Git'
      ],
      contribution: {
        ru: [
          'Реализация UI',
          'Разработка системы сохранений',
          'Оптимизация процессов разработки',
          'Импорт 2D-анимаций',
          'Реализация механик',
          'Сборка сцен'
        ],
        en: [
          'UI implementation',
          'Save system development',
          'Development workflow optimization',
          '2D animation import',
          'Mechanics implementation',
          'Scene assembly'
        ]
      }
    },
    backgroundGradients: [
        '#245100',
        '#805c00',
        '#510600'
    ],
    summary: {
      ru: '«Чёртовы небеса»: командный Unreal-проект. Зона ответственности: разработка UI (верстка и логика), имплементация части механик, сборка и оптимизация процессов через Editor Scripting.',
      en: '"Damned Heavens": team Unreal project. Responsibility: UI development (layout and logic), implementation of partial mechanics, assembly and process optimization via Editor Scripting.'
    },
    tags: [
      'Editor Utility Widget',
      'ISM/Merge Actors',
      'UMG',
      'Save System',
      'Line Trace',
      'Audio Attenuation',
      'Data Tables',
      'Blueprint',
      'C++'
    ],
    previewVideo: {
      preview: '/media/videos/homepage/short/DH_short_showcase.mp4',
      full: '/media/videos/DH/full/DH_gameplay_showcase_main.mp4',
      poster: '/media/posters/DH/DH_main_poster.jpg'
    },
    overview: {
      ru: [
        '«Чёртовы небеса» — стажировочный 3D survival-проект на Unreal Engine, который команда из 8 человек продолжала развивать больше года.',
        'Игрок исследует враждебный рай от лица жителя ада, собирает алхимические ингредиенты, крафтит из них спеллы для борьбы с врагами и выживания.',
        'Главный вклад: UI и система сохранений, связывающие все механики в полноценную игру, оптимизация процесса разработки и тестирования.',
        'Дополнительные зоны: система диалогов, VFX, тестовая сборка сцен и связка систем в целостную игру.'
      ],
      en: [
        '"Damned Heavens" is an internship 3D survival project on Unreal Engine, developed by an 8-person team for more than a year.',
        'The player explores hostile heaven as a hell dweller, collects alchemical ingredients, crafts spells to fight enemies and survive.',
        'Main contribution: UI and save system connecting all mechanics into a complete game, optimization of development and testing processes.',
        'Additional areas: dialogue system, VFX, test scene assembly, and connecting systems into a cohesive game.'
      ]
    },
    breakdown: [
      {
        title: { ru: 'UI и интро', en: 'UI & Intro' },
        video: {
          preview: '/media/videos/DH/preview/DH_ui_and_intro_showcase_optimised.mp4',
          full: '/media/videos/DH/full/DH_ui_and_intro_showcase.mp4',
          poster: '/media/posters/DH/DH_ui_and_intro_poster.jpg'
        },
        done: {
          ru: 'Собраны адаптивные UI-экраны: HUD, главное меню, меню паузы, настройки графики и управления. Дополнительно добавлен комикс-пролог с 2D-анимацией.',
          en: 'Assembled adaptive UI screens: HUD, main menu, pause menu, graphics and control settings. Additionally added a comic prologue with 2D animation.'
        },
        responsibility: {
          ru: 'Верстка UI, сборка экранов из ассетов художников, подключение интерфейсов к игровому циклу, настройка состояний виджетов, анимаций и логики ввода. Техническая интеграция 2D-катсцен.',
          en: 'UI layout, screen assembly from artist assets, connecting interfaces to the game loop, configuring widget states, animations, and input logic. Technical integration of 2D cutscenes.'
        },
        technicalDetails: {
          ru: 'UI реализовано через UMG и Blueprint, настроена адаптивность (Anchors, DPI Scaling) и переходы между экранами, в катсцену интегрированы 2D-анимации из Spine / DragonBones.',
          en: 'UI implemented via UMG and Blueprint, responsiveness (Anchors, DPI Scaling) and screen transitions configured, 2D animations from Spine / DragonBones integrated into the cutscene.'
        }
      },
      {
        title: {
          ru: 'Система сохранений',
          en: 'Save System'
        },
        video: {
          preview: '/media/videos/DH/preview/DH_saving_showcase_optimised.mp4',
          full: '/media/videos/DH/full/DH_saving_showcase.mp4',
          poster: '/media/posters/DH/DH_saving_poster.jpg'
        },
        done: {
          ru: 'Реализована система сохранений (Save/Load) состояния игрока (HP, сытость, светобоязнь, инвентарь, спеллы), врагов, интерактивных предметов на карте и настроек профиля.',
          en: 'Implemented a Save/Load system for player state (HP, hunger, photophobia, inventory, spells), enemies, interactive items on the map, and profile settings.'
        },
        responsibility: {
          ru: 'Проектирование структуры сохраняемых данных, интеграция Save/Load в игровой цикл, тестирование восстановления состояний мира после загрузки.',
          en: 'Designing the saved data structure, integration of Save/Load into the game loop, testing world state restoration after loading.'
        },
        technicalDetails: {
          ru: 'Разработан централизованный SaveManager. Восстановление параметров объектов реализовано через переключение их состояний и видимости (аналог Object Pooling без деструкции акторов)',
          en: 'Developed a centralized SaveManager. Object parameters restoration is implemented via toggling their states and visibility (analogous to Object Pooling without actor destruction).'
        }
      },
      {
        title: { ru: 'Геймплей и диалоги', en: 'Gameplay & Dialogues' },
        video: {
          preview: '/media/videos/DH/preview/DH_dialogues_showcase_optimised.mp4',
          full: '/media/videos/DH/full/DH_dialogues_showcase.mp4',
          poster: '/media/posters/DH/DH_dialogues_poster.jpg'
        },
        done: {
          ru: 'Разработана гибкая система разветвленных диалогов с персонажем-проводником и реализованы основные механики выживания.',
          en: 'Developed a flexible branching dialogue system with a guide character and implemented core survival mechanics.'
        },
        responsibility: {
          ru: 'Реализация логики и UI диалогов, настройка удобного импорта данных для геймдизайнера. Реализация механики светобоязни — урона от источников света.',
          en: 'Implementation of dialogue logic and UI, configuring convenient data import for the game designer. Implementation of the photophobia mechanic — damage from light sources.'
        },
        technicalDetails: {
          ru: 'Диалоги динамически парсятся из таблиц для генерации дерева ответов. Попадание под солнечные лучи определяется через Line Trace по вектору направления света, а зоны локальных источников — через Collision-компоненты.',
          en: 'Dialogues are dynamically parsed from tables to generate a response tree. Sunlight exposure is determined via Line Trace along the light direction vector, and local source zones — via Collision components.'
        }
      },
      {
        title: { ru: 'Сборка систем и сцен', en: 'System Integration & Level Assembly' },
        video: {
          preview: '/media/videos/DH/preview/DH_gameplay_showcase_optimised.mp4',
          full: '/media/videos/DH/full/DH_gameplay_showcase.mp4',
          poster: '/media/posters/DH/DH_gameplay_poster.jpg'
        },
        done: {
          ru: 'Разрозненные подсистемы объединены в стабильный playable-билд. Выполнена первичная сборка сцен и интеграция аудиовизуальных эффектов.',
          en: 'Isolated subsystems combined into a stable playable build. Performed initial scene assembly and integration of audiovisual effects.'
        },
        responsibility: {
          ru: 'Интеграция подсистем в общий игровой цикл, первичная техническая сборка локации под дальнейший арт-полиш. Импорт и настройка VFX, интеграция звукового сопровождения (SFX, Ambient) и оптимизация Draw Calls. Разработаны инструменты для автоматической расстановки декоративных объектов по поверхности уровня с учётом нормалей и уклона на Blueprint в виде Editor Utility  Widget.',
          en: 'Integration of subsystems into the general game loop, initial technical assembly of the location for further art polish. Import and configuration of VFX, integration of soundtrack (SFX, Ambient), and optimization of Draw Calls. Developed Blueprint tools in the form of an Editor Utility Widget for automatic placement of decorative objects across the level surface, accounting for normals and slope.'
        },
        technicalDetails: {
          ru: 'VFX управляется динамически через привязку параметров к материалам (MID) и масштабирование поведения систем частиц. Draw Calls оптимизируются через ISM/Merge Actors. Внутри игры используется Spatial Audio с Audio Attenuation.',
          en: 'VFX is managed dynamically via parameter binding to materials (MID) and scaling particle system behavior. Draw Calls are optimized via ISM/Merge Actors. Spatial Audio with Audio Attenuation is used inside the game.'
        }
      }
    ],
    technicalNotes: {
      ru: [
        'Интегрированы ассеты от 2D-художников и аниматоров в игровой цикл, оптимизированы Draw Calls, разработаны и внедрены Editor Utility Widgets.',
        'Оптимизированы UI-системы (UMG) под различные разрешения экрана (DPI Scaling).',
        'Интегрированы визуальные и звуковые эффекты (VFX/SFX) через динамические материалы и параметры затухания аудио.',
        'Разработана архитектура систем (диалоги, сохранения) для автономного наполнения контентом и тестирования геймдизайнерами и художниками.'
      ],
      en: [
        'Integrated assets from 2D artists and animators into the game loop, optimized Draw Calls, and developed and integrated Editor Utility Widgets.',
        'Optimized UI systems (UMG) for various screen resolutions (DPI Scaling).',
        'Integrated visual and audio effects (VFX/SFX) via dynamic materials and audio attenuation parameters.',
        'Developed system architecture (dialogues, saves) enabling game designers and artists to autonomously fill the project with content and test.'
      ]
    },
    result: {
      ru: [
        'Объединение кода и арт-части в стабильный playable-билд проекта.',
        'Обеспечение сквозного игрового цикла: от интро и катсцен до механик выживания, крафта и сохранения состояний.',
        'Ускорение процессов разработки: команда получила возможность тестировать поздние стадии за счет сохранений.',
        'Успешная интеграция геймплейных систем, сформировавшая финальный survival-опыт.'
      ],
      en: [
        'Bridged code and art assets into a stable playable build of the project.',
        'Ensuring an end-to-end game loop: from intro and cutscenes to survival mechanics, crafting, and state saving.',
        'Accelerating development processes: the team gained the ability to test late stages due to saves.',
        'Successful integration of gameplay systems, shaping the final survival experience.'
      ]
    }
  },
  {
    slug: 'the-contract',
    title: 'The Contract',
    type: 'internship',
    engine: 'Unity',
    meta: {
      project: {
        ru: [
          '3D puzzle-platformer',
          'Сюрреалистичная стилизация',
          'Стажировка',
          'Командная работа'
        ],
        en: [
          '3D puzzle-platformer',
          'Surreal stylization',
          'Internship',
          'Teamwork'
        ]
      },
      technologies: [
        'Unity',
        'C#',
        'Shader Graph',
        'Material Setup',
        'Editor Scripting',
        'VFX',
      ],
      contribution: {
        ru: [
          'Сборка уровней',
          'Настройка света',
          'Настройка материалов',
          'Работа с шейдерами',
          'Реализация UI',
          'Создание VFX',
          'Моделинг',
          'Оптимизация',
          'Editor Scripting'
        ],
        en: [
          'Level assembly',
          'Lighting setup',
          'Material setup',
          'Shader work',
          'UI implementation',
          'VFX creation',
          'Modeling',
          'Optimization',
          'Editor Scripting'
        ]
      }
    },
    backgroundGradients: [
      '#00d5a3',
      '#002059',
      '#4e0008'],
    summary: {
      ru: 'Платформер-головоломка на Unity с фокусом на атмосферу локаций',
      en: 'Unity puzzle-platformer with a focus on the atmosphere of locations'
    },
    tags: [
      'Editor Scripting',
      'Shader Graph',
      'Material Editor',
      'Post-Processing',
      'VFX',
      'C#'
    ],
    previewVideo: {
      preview: '/media/videos/homepage/short/TC_short_showcase.mp4',
      full: '/media/videos/TC/full/TC_gameplay_showcase.mp4',
      poster: '/media/posters/TC/TC_main_poster.jpg'
    },
    overview: {
      ru: [
        'The Contract — стажировочный 3D-платформер на движке Unity с акцентом на сюрреалистичную атмосферу и визуальное повествование.',
        'Основной вклад: унификация графических ассетов, техническая сборка локаций и оптимизация производительности (Draw Calls, Mesh-клиппинг партиклов).',
        'Дополнительный фокус: разработка инструментов автоматизации (Editor Scripting), адаптация шейдеров, моделирование пропсов и устранение нестыковок в материалах.'
      ],
      en: [
        'The Contract is a 3D platformer internship project on the Unity engine with an emphasis on surreal atmosphere and visual storytelling.',
        'Main contribution: asset unification, technical level assembly, and performance optimization (Draw Calls, mesh particle clipping).',
        'Additional focus: development of automation tools (Editor Scripting), shader adaptation, prop modeling, and resolving material inconsistencies.'
      ]
    },
    breakdown: [
      {
        title: { ru: 'Унификация ассетов и окружение', en: 'Asset Unification & Environment' },
        video: {
          preview: '/media/videos/TC/preview/TC_gameplay_showcase_optimised.mp4',
          full: '/media/videos/TC/full/TC_gameplay_showcase.mp4',
          poster: '/media/posters/TC/TC_gameplay_poster.jpg'
        },
        done: {
          ru: 'Собраны играбельные локации из разнородных ассет-паков по концептам художника.',
          en: 'Assembled playable locations from heterogeneous asset packs based on artist concepts.'
        },
        responsibility: {
          ru: 'Унификация графических ассетов и приведение локаций к единому визуальному стилю. Моделирование недостающих пропсов и интеграция визуала в сцены, настройка шейдеров. Настройка освещения и Environment Effects, анимаций объектов окружения, оптимизация Draw Calls.',
          en: 'Unification of graphic assets and bringing locations to a unified visual style. Modeling missing props and integrating visuals into scenes, configuring shaders. Configuring lighting and Environment Effects, animations of environment objects, optimizing Draw Calls.'
        },
        technicalDetails: {
          ru: 'Карты текстур доработаны в Photoshop (цветокоррекция, создание карт для точечной эмиссии). Настройка кастомных материалов велась как в Shader Graph, так и через адаптацию готового GLSL-кода. Настроено Mixed Lighting, для статических источников сделана запечка света. Для эффектов окружения использованы Volumetric Fog, генераторы частиц (God Rays, искры) и Post-Processing, анимация состояний объектов через Animation Controller. Оптимизация партиклов сделана подрезкой пустых прозрачных областей текстуры за счет замены Quad на Mesh для минимизации нагрузки. Разработан редакторный инструмент Editor Scripting для автоматизации группировки по материалам, использовались другие сортирующие и управляющие community скрипты.',
          en: 'Texture maps refined in Photoshop (color correction, custom emissive mask creation). Custom materials setup was done both in Shader Graph and via adapting existing GLSL code. Configured Mixed Lighting with lightbaking for static sources. Volumetric Fog, particle systems (God Rays, sparks), and Post-Processing were used for environment effects, object state animations via Animation Controller. Particle optimization was done by clipping empty transparent texture areas by swapping Quads for Meshes to minimize load. Developed an Editor Scripting tool for automating material grouping, other sorting and management community scripts were used.'
        }
      },
      {
        title: { ru: 'UI и взаимодействия', en: 'UI & Interactions' },
        video: {
          preview: '/media/videos/TC/preview/TC_ui_showcase_optimised.mp4',
          full: '/media/videos/TC/full/TC_ui_showcase.mp4',
          poster: '/media/posters/TC/TC_ui_poster.jpg'
        },
        done: {
          ru: 'Собрано главное меню, интерфейсы для головоломок и визуальный отклик на интерактивные элементы сцены.',
          en: 'Assembled main menu, puzzle interfaces, and visual feedback for interactive scene elements.'
        },
        responsibility: {
          ru: 'Реализация UI-компонентов, настройка визуального фидбека для действий игрока и связка элементов интерфейса с логикой игрового мира.',
          en: 'Implementation of UI components, configuring visual feedback for player actions, and binding interface elements to world logic.'
        },
        technicalDetails: {
          ru: 'Адаптивная верстка интерфейсов (Anchors). Интеграция систем частиц (атмосферный эффект дыма за кнопками) с оптимизацией плотности партиклов.',
          en: 'Adaptive UI layout (Anchors). Integration of particle systems (atmospheric smoke effect behind buttons) with optimization of particle density.'
        }
      }
    ],
    technicalNotes: {
      ru: [
        'Разработаны Editor Scripting инструменты для группировки и настройки ассетов на сцене.',
        'Унифицированы разнородные ассеты под единый визуальный стиль (Asset Unification / Art Pipeline).',
        'Доработаны текстуры в Photoshop (Emissive-маски) и кастомизированы материалы (Shader Graph, GLSL).',
        'Настроено смешанное освещение (Mixed Lighting) и запечены карты света (Lightmaps).',
        'Созданы эффекты (Volumetric Fog, Particle Systems) и снижен Overdraw UI-партиклов (Quad → Mesh).'
      ],
      en: [
        'Developed Editor Scripting tools for asset grouping and configuration on the scene.',
        'Unified heterogeneous assets into a single visual style (Asset Unification / Art Pipeline).',
        'Refined textures in Photoshop (Emissive masks) and customized materials (Shader Graph, GLSL).',
        'Configured Mixed Lighting and baked lightmaps (Lightmaps).',
        'Created effects (Volumetric Fog, Particle Systems) and reduced UI particle Overdraw (Quad → Mesh).'
      ]
    },
    result: {
      ru: [
        'Разнородная графика из ассет-паков успешно объединена в монолитный визуальный стиль.',
        'За счет настройки смешанного света, тумана и пост-процесса создана глубокая сюрреалистичная атмосфера.',
        'Настроены UI-компоненты и визуальный отклик интерфейса, полностью интегрированные в общую логику игры.'
      ],
      en: [
        'Successfully brought inconsistent asset pack graphics into a cohesive, singular visual style.',
        'Established a deep surreal atmosphere through strategic mixed lighting, volumetric fog, and post-processing.',
        'Interfaces and optimized UI effects provided clear visual feedback and complete scene playability.'
      ]
    }
  },
  {
    slug: 'minecart',
    title: 'MineCart',
    type: 'game jam',
    engine: 'Unreal',
    meta: {
      project: {
        ru: [
          '3D-головоломка',
          'Low-poly стилизация',
          'Game jam → доработка до демо',
          'Командная работа'
        ],
        en: [
          '3D puzzle',
          'Low-poly stylization',
          'Game jam → demo refinement',
          'Teamwork'
        ]
      },
      technologies: ['Unreal Engine', 'Blueprint', 'UMG', 'Git'],
      contribution: {
        ru: [
          'Реализация UI',
          'Сборка сцен',
          'Настройка света',
          'Настройка материалов',
          'Настройка звука'
        ],
        en: [
          'UI implementation',
          'Scene assembly',
          'Lighting setup',
          'Material setup',
          'Sound setup'
        ]
      }
    },
    backgroundGradients: [
        '#4b1cbd',
         '#f4d84a',
        '#1f2459'],
    summary: {
      ru: 'Проект начался на Unreal game jam и был доработан командой до цельной демо-версии. Основной вклад: реализация UI, сборка сцен, настройка материалов и аудио.',
      en: 'The project started at Unreal game jam and was refined by the team into a complete demo version. Main contribution: UI implementation, scene assembly, material setup, and audio integration.'
    },
    tags: [
      'Unreal Engine',
      'Blueprint',
      'Lighting',
      'Material Editor',
      'C++'
    ],
    previewVideo: {
      preview: '/media/videos/homepage/short/MK_short_showcase.mp4',
      full: '/media/videos/MK/full/MK_main_gameplay_showcase.mp4',
      poster: '/media/posters/MK/MK_main_poster.jpg'
    },
    overview: {
      ru: [
        'MineCart — 3D-головоломка на Unreal Engine, которая началась на game jam и позже была доработана командой до цельной демо-версии.',
        'Главный вклад — полная реализация UI для игрового flow: меню, подсказки, win/lose screens и понятная подача правил.',
        'Второй фокус — сборка сцен, настройка материалов, свет и аудио-интеграция для кнопок, фоновых звуков и действий игрока.',
        'Кейс показывает умение быстро закрывать engine-side задачи под дедлайн и доводить джемовый прототип до презентабельного playable demo.'
      ],
      en: [
        'MineCart is a 3D Unreal Engine puzzle that started at game jam and was later refined by the team into a complete demo version.',
        'Main contribution — full UI implementation for the game flow: menu, hints, win/lose screens, and readable rule presentation.',
        'Second focus — scene assembly, material setup, lighting, and audio integration for buttons, ambient sounds, and player actions.',
        'The case shows the ability to quickly close engine-side tasks under a deadline and bring a jam prototype to a presentable playable demo.'
      ]
    },
    breakdown: [
      {
        title: { ru: 'Геймплей и сборка сцен', en: 'Gameplay & Scene Assembly' },
        video: {
          preview: '/media/videos/MK/preview/MK_main_gameplay_showcase_optimised.mp4',
          full: '/media/videos/MK/full/MK_main_gameplay_showcase.mp4',
          poster: '/media/posters/MK/MK_gameplay_poster.jpg'
        },
        done: {
          ru: 'Собраны тестовые и финальные сцены: локация, освещение, настройка материалов и звуков мира.',
          en: 'Assembled test and final scenes: location, lighting, material setup and world sounds.'
        },
        responsibility: {
          ru: 'Техническая сборка уровней на основе ассетов и концептов художников и геймдизайнера.',
          en: 'Technical level assembly based on assets and concepts from artists and the game designer.'
        },
        technicalDetails: {
          ru: 'Настройка материалов и освещения (Mixed/Stationary lighting). Использование Post Process Volume для стилизации и позиционирование звуков через Audio Attenuation.',
          en: 'Configuring materials and lighting (Mixed/Stationary lighting). Using Post Process Volume for stylization and positioning sounds via Audio Attenuation.'
        }
      },
      {
        title: { ru: 'UI и логика геймплея', en: 'UI & Gameplay Flow' },
        video: {
          preview: '/media/videos/MK/preview/MK_ui_and_short_gameplay_showcase_optimised.mp4',
          full: '/media/videos/MK/full/MK_ui_and_short_gameplay_showcase.mp4',
          poster: '/media/posters/MK/MK_ui_poster.jpg'
        },
        done: {
          ru: 'Собран UI игрового цикла: главное меню, игровые подсказки и экраны победы/поражения. Добавлены SFX.',
          en: 'Assembled UI of the game loop: main menu, gameplay hints, and win/lose screens. Added SFX.'
        },
        responsibility: {
          ru: 'Верстка и техническая реализация интерфейсов на основе артов от художников. Привязка звуков к действиям игрока и анимациям виджетов.',
          en: 'Layout and technical implementation of interfaces based on art from artists. Binding sounds to player actions and widget animations.'
        },
        technicalDetails: {
          ru: 'Интерфейсы реализованы через UMG и Blueprints с настройкой адаптивной верстки (Anchors, DPI Scaling).',
          en: 'Interfaces implemented via UMG and Blueprints with configuration of adaptive layout (Anchors, DPI Scaling).'
        }
      }
    ],
    technicalNotes: {
      ru: [
        'Собран полный UI-флоу игры (меню, подсказки, экраны финала) и адаптивная верстка в UMG (Anchors и DPI Scaling).',
        'Настроено освещение (Mixed lighting) и материалы для сцены (динамические источники сигнализируют о выезде вагонетки).',
        'Интеграция и пространственное позиционирование звуков окружения и интерфейса через Audio Attenuation.',
        'Быстрое прототипирование и сборка презентационного билда в хаотичных условиях гейм-джема.'
      ],
      en: [
        'Assembled complete UI flow of the game (menus, hints, final screens) and adaptive layout in UMG (Anchors and DPI Scaling).',
        'Configured lighting (Mixed lighting) and materials for the scene (dynamic sources signal minecart deployment).',
        'Integration and spatial positioning of ambient and interface sounds via Audio Attenuation.',
        'Rapid prototyping and assembly of a presentation build under chaotic game jam conditions.'
      ]
    },
    result: {
      ru: [
        'В условиях дедлайна собран стабильный билд игры.',
        'Комплексная работа над визуалом, UI и звуком сделала геймплей целостным.',
        'Прототип успешно доработан до состояния playable-демо'
      ],
      en: [
        'Assembled stable game build under deadline conditions.',
        'Comprehensive work on visuals, UI, and sound made the gameplay cohesive.',
        'Prototype successfully refined to the state of a playable demo.'
      ]
    }
  },
]

export const featuredProjects = projects.slice(0, 3)

export const findProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug)

export const locales = ['ru', 'en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'ru'

export const localeLabels: Record<Locale, string> = {
  ru: 'Рус',
  en: 'Eng'
}

export const isLocale = (value: unknown): value is Locale =>
    typeof value === 'string' && (locales as readonly string[]).includes(value)

export const uiText = {
  ru: {
    app: {
      title: 'Портфолио Technical Artist',
      description:
          'Портфолио technical artist: Unity, Unreal Engine, UI implementation, adaptive UI layout, shaders, VFX, material setup, draw call optimization и asset tools.'
    },
    languageSwitcher: {
      label: 'Переключение языка сайта'
    },
    home: {
      headTitle: 'My TA/TD Portfolio',
      headDescription:
          'Портфолио technical artist: Unity, Unreal Engine, responsive UI implementation, scene assembly, material and shader setup, VFX, draw call optimization and asset tools.',
      kicker: 'Портфолио - практические кейсы',
      name: 'Полина Шипневская',
      contacts: 'nifflerinthefog@gmail.com · @poli_nash',
      role: 'Technical Artist / Technical Designer',
      summary:
          'Интегрирую арт в движок, оптимизирую графику и пишу код для логики игровых систем и инструментов автоматизации.',
      skills: [
        'Создание пайплайн-инструментов автоматизации',
        'Оптимизация графики, draw calls и ассетов',
        'Сборка сцен и локаций (Unity / UE)',
        'Вёрстка и интеграция адаптивных UI',
        'Разработка шейдеров, материалов и VFX',
        'Прототипирование и разработка механик (C++/C#)'
      ],
      projectsKicker: 'Проекты',
      projectsTitle: 'Разборы проектов',
      projectsDescription:
          'Каждый кейс показывает конкретный вклад: что было сделано для проекта, зачем и с помощью чего.'
    },
    projectCard: {
      openAria: 'Открыть разбор проекта',
      tagsAria: 'Технические направления',
      viewBreakdown: 'Смотреть разбор'
    },
    projectDetail: {
      notFound: 'Разбор проекта не найден',
      headSuffix: 'Разбор проекта',
      navigationAria: 'Навигация по проекту',
      backToProjects: '← Назад к проектам',
      headerKicker: 'Разбор проекта',
      meta: {
        project: 'О проекте',
        technologies: 'Технологии',
        contribution: 'Моя работа'
      },
      tagsAria: 'Технические направления',
      overviewKicker: 'Обзор',
      overviewTitle: 'Контекст сцены / билда',
      breakdownKicker: 'Разбор работы',
      breakdownTitle: 'Реализованные системы и задачи',
      breakdownDescription:
          'Каждый блок показывает конкретную часть работы: что было сделано, зона ответственности и технические детали. Видео показывает работу в действии.',
      technicalNotesKicker: 'Технические заметки',
      technicalNotesTitle: 'Технологическое саммари',
      resultKicker: 'Результат',
      resultTitle: 'Что получилось'
    },
    breakdownBlock: {
      task: 'Задача',
      done: 'Что сделано',
      responsibility: 'Моя зона ответственности',
      technicalDetails: 'Технические детали'
    },
    video: {
      watchFull: 'Смотреть полное видео',
      close: 'Закрыть',
      previewAlt: 'Превью видео',
      loading: 'Загрузка видео'
    },
    projectTypes: {
      internship: 'Стажировка',
      'game jam': 'Геймджем',
      personal: 'Личный проект',
      prototype: 'Прототип'
    }
  },

  en: {
    app: {
      title: 'Technical Artist Portfolio',
      description:
          'Technical artist portfolio: Unity, Unreal Engine, UI implementation, adaptive UI layout, shaders, VFX, material setup, draw call optimization, and asset tools.'
    },
    languageSwitcher: {
      label: 'Site Language Switcher'
    },
    home: {
      headTitle: 'My TA/TD Portfolio',
      headDescription:
          'Technical artist portfolio: Unity, Unreal Engine, responsive UI implementation, scene assembly, material and shader setup, VFX, draw call optimization, and asset tools.',
      kicker: 'Portfolio — Practical Cases',
      name: 'Polina Shipnevskaya',
      contacts: 'nifflerinthefog@gmail.com · @poli_nash',
      role: 'Technical Artist / Technical Designer',
      summary:
          'Integrating art into game engines, optimizing graphics, and developing code for gameplay systems and automation tools.',
      skills: [
        'Creating pipeline automation tools',
        'Graphics, draw call, and asset optimization',
        'Scene and environment assembly (Unity / UE)',
        'Responsive UI layout and implementation',
        'Shader, material, and VFX development',
        'Mechanic prototyping and development (C++ / C#)'
      ],
      projectsKicker: 'Projects',
      projectsTitle: 'Project Breakdowns',
      projectsDescription:
          'Each case demonstrates a specific contribution: what was done for the project, why it was needed, and which technologies were used.'
    },
    projectCard: {
      openAria: 'Open Project Breakdown',
      tagsAria: 'Technical Areas',
      viewBreakdown: 'View Breakdown'
    },
    projectDetail: {
      notFound: 'Project Breakdown Not Found',
      headSuffix: 'Project Breakdown',
      navigationAria: 'Project Navigation',
      backToProjects: '← Back to Projects',
      headerKicker: 'Project Breakdown',
      meta: {
        project: 'Project',
        technologies: 'Technologies',
        contribution: 'My Work'
      },
      tagsAria: 'Technical Areas',
      overviewKicker: 'Overview',
      overviewTitle: 'Scene / Build Context',
      breakdownKicker: 'Work Breakdown',
      breakdownTitle: 'Implemented Systems and Tasks',
      breakdownDescription:
          'Each block highlights a specific part of the work: what was done, area of responsibility, and technical details. The video demonstrates the result in action.',
      technicalNotesKicker: 'Technical Notes',
      technicalNotesTitle: 'Technical Summary',
      resultKicker: 'Result',
      resultTitle: 'What Was Achieved'
    },
    breakdownBlock: {
      task: 'Task',
      done: 'What Was Done',
      responsibility: 'My Area of Responsibility',
      technicalDetails: 'Technical Details'
    },
    video: {
      watchFull: 'Watch Full Video',
      close: 'Close',
      previewAlt: 'Video Preview',
      loading: 'Loading Video'
    },
    projectTypes: {
      internship: 'Internship',
      'game jam': 'Game Jam',
      personal: 'Personal Project',
      prototype: 'Prototype'
    }
  }
} as const
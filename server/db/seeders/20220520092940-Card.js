module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      // химия
      question: 'Наименьшая частица вещества',
      answer: 'Молекула',
      themeId: 1,
      cost: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Назовите самый лёгкий газ',
      answer: 'Водород',
      themeId: 1,
      cost: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Назовите самый распространённый элемент на планете земля',
      answer: 'Кислород',
      themeId: 1,
      cost: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Назовите вещество, преимущественно из которого состоит солнце',
      answer: 'Водород',
      themeId: 1,
      cost: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Из скольких элементов состоит этиловый спирт?',
      answer: 'Из трёх',
      themeId: 1,
      cost: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // музыка
    {
      question: 'Назовите самый известный балет П.И.Чайковского, посвященный птицам',
      answer: 'Лебединое озеро',
      themeId: 2,
      cost: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Какие две ноты «образуют» продукт, растущий в огороде?',
      answer: 'Фасоль',
      themeId: 2,
      cost: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Какой инструмент Клара украла у Карла в известной скороговорке?',
      answer: 'Кларнет',
      themeId: 2,
      cost: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Как называется басня И.А.Крылова, в которой четыре «музыканта» играли, кто в лес, кто по дрова?',
      answer: 'Квартет',
      themeId: 2,
      cost: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Что общего между гитарой и роялем?',
      answer: 'Струны',
      themeId: 2,
      cost: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // философия
    {
      question: 'Кому принадлежит понятие «сверхчеловек»? ',
      answer: 'Ницше',
      themeId: 3,
      cost: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Основной рабочий метод Ф. Бэкона',
      answer: 'Индукция',
      themeId: 3,
      cost: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Основателем этики в западноевропейской философии считается:',
      answer: 'Cократ',
      themeId: 3,
      cost: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: '«В одну и туже реку нельзя войти дважды», - говорил:',
      answer: 'Гераклит',
      themeId: 3,
      cost: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Понимание Макиавелли соотношения политики и морали зачастую определяется другими как',
      answer: 'Цинизм',
      themeId: 3,
      cost: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // история
    {
      question: 'Столица Древнего Египта',
      answer: 'Мемфис',
      themeId: 4,
      cost: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      question: 'У какого бога древние греки просили успешного плавания кораблю?',
      answer: 'Посейдона',
      themeId: 4,
      cost: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'От какой империи Россия унаследовала двуглавого орла на гербе??',
      answer: 'Византийской',
      themeId: 4,
      cost: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Какой город был столицей России в 17 в.?',
      answer: 'Москва',
      themeId: 4,
      cost: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Как назывался первый русский аэродром?',
      answer: 'Ходынское поле',
      themeId: 4,
      cost: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

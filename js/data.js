export const ITEMS = [
    {
        id: 1,
        title: "Кроссовки",
        description: "Стильные и удобные кроссовки",
        price: 2500,
        image: "shoes.jpg",
        customCharacteristics: {
            "Материал": "Искусственная кожа, резина",
            "Страна производства": "Китай",
            "Пол": "Унисекс"
        },
        categories: ["shoes"],
        badgeText: "Новинка",
        badgeType: "new",
        isAvailable: true,
        rating: 4.2,
    },
    {
        id: 2,
        title: "Цветные карандаши",
        description: "Яркие и прочные цветные карандаши",
        price: 200,
        image: "pencils.jpg",
        customCharacteristics: {
            "Количество цветов": "12",
            "Материал корпуса": "Дерево",
            "Тип": "Шестигранные"
        },
        categories: ["stationery"],
        isAvailable: true,
        rating: 4.5
    },
    {
        id: 3,
        title: "Парфюм",
        description: "Ароматный парфюм для женщин",
        price: 5000,
        image: "perfume.jpg",
        customCharacteristics: {
            "Объем": "50 мл",
            "Тип аромата": "Цветочный",
            "Назначение": "Для женщин"
        },
        categories: ["perfume"],
        isAvailable: true,
        rating: 4.9
    },
    {
        id: 4,
        title: "Книга",
        description: "Очень интересная книга",
        price: 400,
        image: "book.jpg",
        customCharacteristics: {
            "Язык": "Русский",
            "Переплет": "Мягкий",
            "Формат": "А5"
        },
        categories: ["books"],
        isAvailable: false,
        rating: 4.7
    },
    {
        id: 5,
        title: "Настенные часы",
        description: "Полезный и красивый предмет для Вашего интерьера",
        price: 900,
        oldPrice: 1200,
        image: "clock.jpg",
        customCharacteristics: {
            "Тип механизма": "Кварцевый",
            "Источник питания": "Батарейка AA",
            "Материал корпуса": "Пластик"
        },
        categories: ["home"],
        badgeText: "Скидка",
        badgeType: "sale",
        isAvailable: true,
        rating: 4.1,
    },
    {
        id: 6,
        title: "Пальто",
        description: "Стильное демисезонное пальто",
        price: 6500,
        image: "coat.jpg",
        customCharacteristics: {
            "Сезон": "Демисезонное",
            "Материал": "Шерсть, полиэстер",
            "Стиль": "Повседневный"
        },
        categories: ["clothing"],
        isAvailable: true,
        rating: 4.5
    },
    {
        id: 7,
        title: "Кукла-пупс",
        description: "Отличный подарок для девочек",
        price: 2200,
        image: "doll.jpg",
        customCharacteristics: {
            "Материал": "Пластик, текстиль",
            "Высота": "30 см",
            "Возраст": "От 3 лет"
        },
        categories: ["toys"],
        isAvailable: true,
        rating: 0.0
    },
    {
        id: 8,
        title: "Мобильный телефон",
        description: "Стильный дизайн, мощный аккумулятор, много встроенных функций",
        price: 9000,
        image: "mobile phone.jpg",
        customCharacteristics: {
            "Цвет": "Черный",
            "Поддержка сети": "4G",
            "Емкость аккумулятора": "5000 мА·ч"
        },
        categories: ["electronics"],
        isAvailable: true,
        rating: 4.4
    },
    {
        id: 9,
        title: "Ожерелье",
        description: "Стильный аксессуар для любого образа",
        price: 500,
        image: "necklace.jpg",
        customCharacteristics: {
            "Материал": "Бижутерный сплав",
            "Цвет": "Золотистый",
            "Тип застежки": "Карабин"
        },
        categories: ["accessories"],
        badgeText: "Хит",
        badgeType: "popular",
        isAvailable: false,
        rating: 4.6
    }
];

export const CATEGORIES = ["Обувь", "Канцелярия", "Аксессуары", "Электроника", "Игрушки", "Одежда", "Для дома", "Книги", "Парфюмерия"];
export const CATEGORIES_TRANSLATIONS = {
    "Обувь": "shoes",
    "Канцелярия": "stationery",
    "Аксессуары": "accessories",
    "Электроника": "electronics",
    "Игрушки": "toys",
    "Одежда": "clothing",
    "Для дома": "home",
    "Книги": "books",
    "Парфюмерия": "perfume"
};
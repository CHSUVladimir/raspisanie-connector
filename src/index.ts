
export {default as RaspisanieSettings} from './Settings/Settings';
export {default as RaspisanieConnector} from './Connector';
export {default as RaspisanieAuditorium} from './Auditorium';
export {default as RaspisanieBuidings} from './Buildings';
export {default as Raspisanie} from './TimeTable';

/**Данные для аутентификации */
export interface IAuthPost{
    /**Логин */
    username: string;
    /**Пароль */
    password: string;
}

/**
 * ответ сервера при атентификации
 */
export interface IAuthResponse{
    /**Значение идентификатора ссесии */
    data:string;
    /**Ошибка при наличии */
    error?:IError;
}
/**Данные ошибки */
export interface IError{
    /**Код ошибки */
    code:number;
    /**Статус ошибки */
    status:string;
    /**расшифровка ошибки */
    description:string;
}

/**Данные о здании */
export interface IBuildingResponse{
    /**Идентификатор */
    id:number;
    /**Наименование */
    title:string;
}

/**Данные об аудитории */
export interface IAuditory{
    /**Идентификатор аудитории */
    id:number;
    /**Наименование аудитории */
    name:string;
    /**Номер аудитории */
    number:string;
    /**Наименование здания */
    buildName:string;
    /**Идентификатор здания */
    buildId: number;
    height: number;
    length: number;
    width: number;
}

/**Расписание */
export interface ITimeTable{
    /**Идентификатор */
    id:number;
    /**
     * Дата
     * @example "2022-11-18"
     */
    dateEvent: string;
    /**Начало*/
    startTime: string;
    /**Окончание */
    endTime: string;
    /**Наименование занятия которое будет проходить */
    discipline:IDiscipline;
    /**Группы которые присутствуют на занятии */
    groups:IGroup[];
    /**Здание где проходит занятие */
    build:IBuildingResponse;
    /**Аудитория где проходит занятие */
    auditory:IAuditoryShort;
    /**Лекторы (преподователи) */
    lecturers:ILecturer[];
    /**Аббревиатура типа занятия */
    abbrlessontype: string;
    /**Тип занятия */
    lessontype: string;
    /**Неделя учебного года */
    week: number;
    /**День недели */
    weekday: number;
    /**ч/н неделя */
    weekType: string;
    /** событие онлайн */
    onlineEvent: string;
    /** прохождение занятия онлайн */
    online: number;
}

/**Краткая информация по дисциплине */
export interface IDiscipline{
    /**Идентификатор */
    id:number;
    /**Наименование */
    title:string;
}

/**Информация по группе */
export interface IGroup{
    /**Идентификатор */
    id:number;
    /**Наименование */
    title:string;
}
/**Краткая информация по аудитории */
export interface IAuditoryShort{
    /**Идентификатор аудитории */
    id:number;
    /** Название аудитории */
    title:string;
}

/**
 * Данные преподователя
 */
export interface ILecturer{
    /** Идентификатор преподователя */
    id:number;
    /**Фамилия преподователя */
    lastName: string;
    /** Имя преподователя */
    firstName: string;
    /**Отчество преподователя */
    middleName: string;
    /**
     * Краткое имя преподователя
     */
    shortName: string;
    /**
     * ФИО преаодователя
     */
    fio: string;
}

export interface IMainSettings{
    /**
     * Данные авторизации
     */
    Auth:IAuthPost;
    /**
     * Набор адресов для работы
     */
    URLS:IURLs;
}

/**
 * Конфигурация адресов
 */
export interface IURLs{
    /**
     * Адрес сервера api
     */
    main:string;
     /**
     * Относительный адрес получения идентификатора ссесии
     */
    Signin:string;
     /**
     * Относительный адрес проверки сессии
     */
    Validation:string;
     /**
     * Относительный адрес для получения справочника по зданиям
     */
    Building:string;
     /**
     * Относительный адрес аудиторий
     */
    Auditorium:string;
    /**
     * Относительный адрес расписания
     */
    TimeTable:string;
}
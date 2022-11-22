export default class Store<T> {
    /** Данные содержимого */
    Buffer: T[];
    /** Произведена первичная загрузка */
    FirstLoadStarted: boolean;
    /**
     * Первичная загрузка
     */
    FirstLoad(): Promise<any>;
    /**
     * Принудительная перезагрузка
     */
    ForceReload(): Promise<any>;
    /**
     * Подписанные на обновление
     */
    private _subscribedUpdate;
    /**
     * Подписка на обновление
     * @param {string} name наименование подписки (должно быть уникальным)
     * @param {()=>any} method метод исполняемый при обновлении
     */
    SubscribeToUpdate(name: string, method: () => any): void;
    /**
     * Отписка от обновления
     * @param {string} name наименование подписки (должно быть уникальным)
     */
    UnSubscribeToUpdate(name: string): void;
    /**
     * Проверяет отсутствие названия подписки во всех подписках
     * @param {string} name Наименование подписки для проверки
     * @returns {boolean} Отсутствие подписки с таким именем
     */
    NameIsUniqeSubUpd(name: string): boolean;
    /**
     * Действие при обновлении
     */
    protected Updated(): void;
    /**
     * время в милисекундах между обновлениями
     */
    UpdateInterval: number;
    /**
     * Таймер обслуживающий обновления
    */
    private UpdateTimer?;
    protected Load(): Promise<any>;
}

import { Raspisanie, RaspisanieSettings } from "../../src"

const URLS = {
   main: "main/",
   Signin: "Signin",
   Validation: "Validation",
   Building: "Building",
   Auditorium: "Auditorium",
   TimeTable: "TimeTable/from/{startDt}/to/{endDt}",
}

const headers: HeadersInit = new Headers()
headers.set("Content-Type", "application/json")

const mockResponse: Response = {
   text: () =>
      Promise.resolve(
         `[
            {
              "id": 1748454181244367600,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1724374916460836000,
                "title": "Программа личностного и профессионального развития"
              },
              "groups": [
                {
                  "id": 1739582424589661700,
                  "title": "2СОб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254033822000,
                "title": "510"
              },
              "lecturers": [
                {
                  "id": 1421235333943531300,
                  "lastName": "Каракина",
                  "firstName": "Татьяна",
                  "middleName": "Геннадьевна",
                  "shortName": "Каракина Т. Г.",
                  "fio": "Каракина Татьяна Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685236272296700,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1726358777855079700,
                "title": "Математический анализ"
              },
              "groups": [
                {
                  "id": 1739582424574981600,
                  "title": "1ПМб-02-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776432345300,
                "title": "410"
              },
              "lecturers": [
                {
                  "id": 1421238082544342800,
                  "lastName": "Кашинцева",
                  "firstName": "Ольга",
                  "middleName": "Альбертовна",
                  "shortName": "Кашинцева О. А.",
                  "fio": "Кашинцева Ольга Альбертовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749022214345061000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1665382176272684300,
                "title": "Политология"
              },
              "groups": [
                {
                  "id": 1671816807348967000,
                  "title": "2ЖУРб-00-1зп-20"
                },
                {
                  "id": 1671816936575473200,
                  "title": "2Тб-00-1зп-20"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1424934984009914000,
                  "lastName": "Марков",
                  "firstName": "Евгений",
                  "middleName": "Алфеевич",
                  "shortName": "Марков Е. А.",
                  "fio": "Марков Евгений Алфеевич"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1747577411470226200,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 0,
                "title": "Технологическая практика 1"
              },
              "groups": [
                {
                  "id": 1705969217163884000,
                  "title": "1ИСб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378592244000,
                "title": "212"
              },
              "lecturers": [
                {
                  "id": 1421218013576697600,
                  "lastName": "Виноградова",
                  "firstName": "Людмила",
                  "middleName": "Николаевна",
                  "shortName": "Виноградова Л. Н.",
                  "fio": "Виноградова Людмила Николаевна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685282513449700,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1695736805997942000,
                "title": "Иностранный язык (англ пг1)"
              },
              "groups": [
                {
                  "id": 1705969217177515500,
                  "title": "2Тб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048817783000,
                "title": "830"
              },
              "lecturers": [
                {
                  "id": 1424935579290703600,
                  "lastName": "Миронова",
                  "firstName": "Эльвира",
                  "middleName": "Геннадьевна",
                  "shortName": "Миронова Э. Г.",
                  "fio": "Миронова Эльвира Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685251367596800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1631794558423537000,
                "title": "Спортивные и подвижные игры"
              },
              "groups": [
                {
                  "id": 1671825251655227000,
                  "title": "9ФКб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1490442417495610400,
                "title": "Спортивный комплекс \"Университетский\" (ул. Труда, 3)"
              },
              "auditory": {
                "id": 1671133117620949200,
                "title": "1"
              },
              "lecturers": [
                {
                  "id": 1425480254933178000,
                  "lastName": "Шкляр",
                  "firstName": "Ольга",
                  "middleName": "Брониславовна",
                  "shortName": "Шкляр О. Б.",
                  "fio": "Шкляр Ольга Брониславовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685297504940800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696842072032974000,
                "title": "Прикладные информационные технологии"
              },
              "groups": [
                {
                  "id": 1705969217206875600,
                  "title": "3ТМб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490435777622970600,
                "title": "27б"
              },
              "lecturers": [
                {
                  "id": 1424935238807590700,
                  "lastName": "Мащенко",
                  "firstName": "Марина",
                  "middleName": "Александровна",
                  "shortName": "Мащенко М. А.",
                  "fio": "Мащенко Марина Александровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685221296534300,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1602604374937310500,
                "title": "Методологические основы психологии"
              },
              "groups": [
                {
                  "id": 1609302467033437700,
                  "title": "4ПСД-01-1оп-18"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292951388400,
                "title": "612"
              },
              "lecturers": [
                {
                  "id": 1425475133716305700,
                  "lastName": "Смирнова",
                  "firstName": "Ольга",
                  "middleName": "Валериевна",
                  "shortName": "Смирнова О. В.",
                  "fio": "Смирнова Ольга Валериевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685269603382000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1682591902915892500,
                "title": "Социология общественного мнения"
              },
              "groups": [
                {
                  "id": 1641733989795370500,
                  "title": "2Сб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254003413200,
                "title": "504"
              },
              "lecturers": [
                {
                  "id": 1424935477039863600,
                  "lastName": "Мехова",
                  "firstName": "Альбина",
                  "middleName": "Анатольевна",
                  "shortName": "Мехова А. А.",
                  "fio": "Мехова Альбина Анатольевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685285710558000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1728093643399361800,
                "title": "Менеджмент и организация производства"
              },
              "groups": [
                {
                  "id": 1641742539920774700,
                  "title": "3МТб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436480212930800,
                "title": "40"
              },
              "lecturers": [
                {
                  "id": 1421224411620448000,
                  "lastName": "Деткова",
                  "firstName": "Татьяна",
                  "middleName": "Викторовна",
                  "shortName": "Деткова Т. В.",
                  "fio": "Деткова Татьяна Викторовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685320068199200,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1727369724120921300,
                "title": "Физика технических объектов (пг2)"
              },
              "groups": [
                {
                  "id": 1739582424522552800,
                  "title": "1АПб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624649097500,
                "title": "325"
              },
              "lecturers": [
                {
                  "id": 1425494008685139700,
                  "lastName": "Козырева",
                  "firstName": "Яна",
                  "middleName": "Анатольевна",
                  "shortName": "Козырева Я. А.",
                  "fio": "Козырева Яна Анатольевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747910084377047800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1641826544721598000,
                  "title": "1ИСб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1671012457577976000,
                "title": "301а"
              },
              "lecturers": [
                {
                  "id": 1396414847681304300,
                  "lastName": "Ершов",
                  "firstName": "Евгений",
                  "middleName": "Валентинович",
                  "shortName": "Ершов Е. В.",
                  "fio": "Ершов Евгений Валентинович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685288943317800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1667368851928520000,
                "title": "Охрана труда (пг1)"
              },
              "groups": [
                {
                  "id": 1641742799740081700,
                  "title": "3ТБб-02-1оп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "онлайн"
              },
              "lecturers": [
                {
                  "id": 1421225803000059600,
                  "lastName": "Егоренкова",
                  "firstName": "Светлана",
                  "middleName": "Владимировна",
                  "shortName": "Егоренкова С. В.",
                  "fio": "Егоренкова Светлана Владимировна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685238547706600,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696552890722686200,
                "title": "Основы проектной деятельности"
              },
              "groups": [
                {
                  "id": 1705969217183807000,
                  "title": "3СТб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254075765000,
                "title": "519"
              },
              "lecturers": [
                {
                  "id": 1472041884927924000,
                  "lastName": "Котик",
                  "firstName": "Екатерина",
                  "middleName": "Михайловна",
                  "shortName": "Котик Е. М.",
                  "fio": "Котик Екатерина Михайловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685210635662000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1665206419934156000,
                "title": "Дизайн-мышление. Методология работы с клиентом (пг6)"
              },
              "groups": [
                {
                  "id": 1671818050910819800,
                  "title": "2Дб-03-1оп-20"
                },
                {
                  "id": 1671817830092248600,
                  "title": "2РТПб-01-1оп-20"
                },
                {
                  "id": 1671816872111117800,
                  "title": "2ЖУРб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1471774257598959900,
                "title": "201"
              },
              "lecturers": [
                {
                  "id": 1466623234877167400,
                  "lastName": "Крылова",
                  "firstName": "Наталья",
                  "middleName": "Павловна",
                  "shortName": "Крылова Н. П.",
                  "fio": "Крылова Наталья Павловна"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685224593257200,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1726915690901665000,
                "title": "Специальная психология и специальная педагогика"
              },
              "groups": [
                {
                  "id": 1739582424530941400,
                  "title": "4СДОб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490437243336135000,
                "title": "104"
              },
              "lecturers": [
                {
                  "id": 1424937474384205600,
                  "lastName": "Пепик",
                  "firstName": "Лариса",
                  "middleName": "Александровна",
                  "shortName": "Пепик Л. А.",
                  "fio": "Пепик Лариса Александровна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685308307370800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696821962114241800,
                "title": "Физико-химические основы подготовки топлива, воды и очистки промышленных стоков (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217204778500,
                  "title": "3ТТб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490435838350201000,
                "title": "28"
              },
              "lecturers": [
                {
                  "id": 1421062443614869200,
                  "lastName": "Антонова",
                  "firstName": "Юлия",
                  "middleName": "Валерьевна",
                  "shortName": "Антонова Ю. В.",
                  "fio": "Антонова Юлия Валерьевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685283713020700,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1631607623427036400,
                "title": "Большой практикум по ботанике и зоологии (пг1)"
              },
              "groups": [
                {
                  "id": 1641736941696194000,
                  "title": "9Бб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520895803600,
                "title": "901"
              },
              "lecturers": [
                {
                  "id": 1539181737125353200,
                  "lastName": "Трошин",
                  "firstName": "Дмитрий",
                  "middleName": "Сергеевич",
                  "shortName": "Трошин Д. С.",
                  "fio": "Трошин Дмитрий Сергеевич"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685253661881000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1602598952632325400,
                "title": "Меры предупреждения, средства и методы борьбы с наркоманией"
              },
              "groups": [
                {
                  "id": 1624632741121234400,
                  "title": "9ПДОпб-17-1оп-18"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490438777526555000,
                "title": "302"
              },
              "lecturers": [
                {
                  "id": 1425490090668332800,
                  "lastName": "Воробьева",
                  "firstName": "Ольга",
                  "middleName": "Сергеевна",
                  "shortName": "Воробьева О. С.",
                  "fio": "Воробьева Ольга Сергеевна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685327704978200,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1631794411180397800,
                "title": "Спортивная физиология"
              },
              "groups": [
                {
                  "id": 1641735286599718400,
                  "title": "9ФКб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490438777520263400,
                "title": "301"
              },
              "lecturers": [
                {
                  "id": 1431205958015522600,
                  "lastName": "Воробьев",
                  "firstName": "Владислав",
                  "middleName": "Федорович",
                  "shortName": "Воробьев В. Ф.",
                  "fio": "Воробьев Владислав Федорович"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685261140325000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696371490959660300,
                "title": "Количественные методы социологического исследования"
              },
              "groups": [
                {
                  "id": 1705969217197438500,
                  "title": "2Сб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345253992927500,
                "title": "502"
              },
              "lecturers": [
                {
                  "id": 1487089376426989300,
                  "lastName": "Аула",
                  "firstName": "Екатерина",
                  "middleName": "Романовна",
                  "shortName": "Аула Е. Р.",
                  "fio": "Аула Екатерина Романовна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748205006462251800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 0,
                "title": "Вакцинация от гриппа"
              },
              "groups": [
                {
                  "id": 1705969217227847200,
                  "title": "1ПМб-03-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1491992159538123000,
                "title": "103"
              },
              "lecturers": [
                {
                  "id": 1747850345543759600,
                  "lastName": "Пукело",
                  "firstName": "Елена",
                  "middleName": "Вячеславовна",
                  "shortName": "Пукело Е. В.",
                  "fio": "Пукело Елена Вячеславовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685217759687400,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696206468770960600,
                "title": "Общий психологический практикум (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217207924200,
                  "title": "4ВППб-03-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292937757000,
                "title": "608"
              },
              "lecturers": [
                {
                  "id": 1424932151988590300,
                  "lastName": "Кудака",
                  "firstName": "Марина",
                  "middleName": "Александровна",
                  "shortName": "Кудака М. А.",
                  "fio": "Кудака Марина Александровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685267118257000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696374706711565600,
                "title": "Деловые коммуникации на русском языке"
              },
              "groups": [
                {
                  "id": 1705969217176467000,
                  "title": "3ХТб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048733897000,
                "title": "812"
              },
              "lecturers": [
                {
                  "id": 1542458392440739600,
                  "lastName": "Неклюдова",
                  "firstName": "Евгения",
                  "middleName": "Александровна",
                  "shortName": "Неклюдова Е. А.",
                  "fio": "Неклюдова Евгения Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685276794516200,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1724381112242664700,
                "title": "Введение в цифровую культуру (пг2)"
              },
              "groups": [
                {
                  "id": 1739582424568690200,
                  "title": "2Тб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292973408500,
                "title": "616"
              },
              "lecturers": [
                {
                  "id": 1666101788188612400,
                  "lastName": "Терентьева",
                  "firstName": "Алла",
                  "middleName": "Федоровна",
                  "shortName": "Терентьева А. Ф.",
                  "fio": "Терентьева Алла Федоровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747293038685582000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696205978097161500,
                "title": "Структуры и алгоритмы обработки данных (пг1)"
              },
              "groups": [
                {
                  "id": 1705969217175418400,
                  "title": "1ПИб-01-2оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378724364500,
                "title": "228"
              },
              "lecturers": [
                {
                  "id": 1424939460407072500,
                  "lastName": "Пышницкий",
                  "firstName": "Константин",
                  "middleName": "Михайлович",
                  "shortName": "Пышницкий К. М.",
                  "fio": "Пышницкий Константин Михайлович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685246826214100,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696562638011503900,
                "title": "Профилактика применения допинга в спорте"
              },
              "groups": [
                {
                  "id": 1705969217214215700,
                  "title": "9АФКб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490438777542283500,
                "title": "306"
              },
              "lecturers": [
                {
                  "id": 1442610529975670500,
                  "lastName": "Козырева",
                  "firstName": "Дарья",
                  "middleName": "Андреевна",
                  "shortName": "Козырева Д. А.",
                  "fio": "Козырева Дарья Андреевна"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749098218200626000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1699721155761837300,
                "title": "Режиссура театрализованных представлений и праздников"
              },
              "groups": [
                {
                  "id": 1671817775651231200,
                  "title": "2РТПб-01-1зп-20"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1479484308403001000,
                  "lastName": "Хорошавин",
                  "firstName": "Олег",
                  "middleName": "Николаевич",
                  "shortName": "Хорошавин О. Н.",
                  "fio": "Хорошавин Олег Николаевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685301531472600,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696925071320716500,
                "title": "Материаловедение и технология конструкционных материалов (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217168078300,
                  "title": "3ТБб-02-1оп-21"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490372835492761900,
                "title": "17"
              },
              "lecturers": [
                {
                  "id": 1424936877166696200,
                  "lastName": "Окунева",
                  "firstName": "Татьяна",
                  "middleName": "Александровна",
                  "shortName": "Окунева Т. А.",
                  "fio": "Окунева Татьяна Александровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685294128526000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696842091338306800,
                "title": "Физическая химия"
              },
              "groups": [
                {
                  "id": 1705969217203730000,
                  "title": "3МТб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490364153894801700,
                "title": "421"
              },
              "lecturers": [
                {
                  "id": 1421234853330818800,
                  "lastName": "Калько",
                  "firstName": "Оксана",
                  "middleName": "Александровна",
                  "shortName": "Калько О. А.",
                  "fio": "Калько Оксана Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685211459842800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1665206418672719000,
                "title": "Системное мышление в проекте (пг3)"
              },
              "groups": [
                {
                  "id": 1671816734752904700,
                  "title": "2СОб-00-1оп-20"
                },
                {
                  "id": 1671817437751809500,
                  "title": "2Лб-02-1оп-20"
                },
                {
                  "id": 1671816269488199200,
                  "title": "2Сб-00-1оп-20"
                },
                {
                  "id": 1671817028908881400,
                  "title": "2Тб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347924011356400,
                "title": "719"
              },
              "lecturers": [
                {
                  "id": 1472590680489465600,
                  "lastName": "Ловкова",
                  "firstName": "Екатерина",
                  "middleName": "Александровна",
                  "shortName": "Ловкова Е. А.",
                  "fio": "Ловкова Екатерина Александровна"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685242585772800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1631701234767369500,
                "title": "Ценообразование и сметное дело в строительстве"
              },
              "groups": [
                {
                  "id": 1641852232647317000,
                  "title": "3СТб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490356052340773000,
                "title": "301"
              },
              "lecturers": [
                {
                  "id": 1421220130654787300,
                  "lastName": "Гендлина",
                  "firstName": "Юлия",
                  "middleName": "Борисовна",
                  "shortName": "Гендлина Ю. Б.",
                  "fio": "Гендлина Юлия Борисовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685259759350500,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1631614279389025500,
                "title": "Профессиональные творческие студии"
              },
              "groups": [
                {
                  "id": 1641734195482990000,
                  "title": "2ЖУРб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776422908200,
                "title": "407"
              },
              "lecturers": [
                {
                  "id": 1425477852516587300,
                  "lastName": "Дворянова",
                  "firstName": "Мария",
                  "middleName": "Валерьевна",
                  "shortName": "Дворянова М. В.",
                  "fio": "Дворянова Мария Валерьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685304822952700,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696834043297305900,
                "title": "Иностранный язык (англ)"
              },
              "groups": [
                {
                  "id": 1705969217216312800,
                  "title": "3ЭЭб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520911532300,
                "title": "905"
              },
              "lecturers": [
                {
                  "id": 1704794965414901500,
                  "lastName": "Першина",
                  "firstName": "Елена",
                  "middleName": "Юрьевна",
                  "shortName": "Першина Е. Ю.",
                  "fio": "Першина Елена Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685306979873500,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1610854891195995400,
                "title": "Бережливое производство"
              },
              "groups": [
                {
                  "id": 1641737111948236300,
                  "title": "7Эб-05-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436425404911900,
                "title": "37"
              },
              "lecturers": [
                {
                  "id": 1424940005267085000,
                  "lastName": "Румянцев",
                  "firstName": "Вадим",
                  "middleName": "Владимирович",
                  "shortName": "Румянцев В. В.",
                  "fio": "Румянцев Вадим Владимирович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685215830307600,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1726375036660348200,
                "title": "Археология"
              },
              "groups": [
                {
                  "id": 1739582424591758800,
                  "title": "2Иб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923984093400,
                "title": "713"
              },
              "lecturers": [
                {
                  "id": 1424931000228517600,
                  "lastName": "Косорукова",
                  "firstName": "Наталья",
                  "middleName": "Валентиновна",
                  "shortName": "Косорукова Н. В.",
                  "fio": "Косорукова Наталья Валентиновна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685210437481200,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1665206419934156000,
                "title": "Дизайн-мышление. Методология работы с клиентом (пг3)"
              },
              "groups": [
                {
                  "id": 1671817586681058800,
                  "title": "2Иб-00-1оп-20"
                },
                {
                  "id": 1671816734752904700,
                  "title": "2СОб-00-1оп-20"
                },
                {
                  "id": 1671817437751809500,
                  "title": "2Лб-02-1оп-20"
                },
                {
                  "id": 1671816269488199200,
                  "title": "2Сб-00-1оп-20"
                },
                {
                  "id": 1671817028908881400,
                  "title": "2Тб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490437674469691600,
                "title": "202"
              },
              "lecturers": [
                {
                  "id": 1478026529608832800,
                  "lastName": "Ковшикова",
                  "firstName": "Галина",
                  "middleName": "Александровна",
                  "shortName": "Ковшикова Г. А.",
                  "fio": "Ковшикова Галина Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685263044539100,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1695925758777628000,
                "title": "Уголовное право"
              },
              "groups": [
                {
                  "id": 1705969217223652900,
                  "title": "2Юб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776448074000,
                "title": "415"
              },
              "lecturers": [
                {
                  "id": 1613312225126127400,
                  "lastName": "Петрова",
                  "firstName": "Валентина",
                  "middleName": "Владимировна",
                  "shortName": "Петрова В. В.",
                  "fio": "Петрова Валентина Владимировна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747912184138953500,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1641826730461107700,
                  "title": "1ПИб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1671012499597562000,
                "title": "301б"
              },
              "lecturers": [
                {
                  "id": 1396414847681304300,
                  "lastName": "Ершов",
                  "firstName": "Евгений",
                  "middleName": "Валентинович",
                  "shortName": "Ершов Е. В.",
                  "fio": "Ершов Евгений Валентинович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748839759401055000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1631859901515961600,
                "title": "Технологии интерактивного дизайна и инфографика"
              },
              "groups": [
                {
                  "id": 1641734658765887000,
                  "title": "2Дб-03-1зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1643564843915024100,
                  "lastName": "Шигорина",
                  "firstName": "Виктория",
                  "middleName": "Николаевна",
                  "shortName": "Шигорина В. Н.",
                  "fio": "Шигорина Виктория Николаевна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1748192434894795500,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 0,
                "title": "Вакцинация от гриппа"
              },
              "groups": [
                {
                  "id": 1705969217226798600,
                  "title": "1ПМб-02-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1491992159538123000,
                "title": "103"
              },
              "lecturers": [
                {
                  "id": 1747850345543759600,
                  "lastName": "Пукело",
                  "firstName": "Елена",
                  "middleName": "Вячеславовна",
                  "shortName": "Пукело Е. В.",
                  "fio": "Пукело Елена Вячеславовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749178361932804900,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696461450549138700,
                "title": "Сценарное мастерство"
              },
              "groups": [
                {
                  "id": 1705969217248818700,
                  "title": "2РТПб-01-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1421224373890586400,
                  "lastName": "Дергачев",
                  "firstName": "Евгений",
                  "middleName": "Иванович",
                  "shortName": "Дергачев Е. И.",
                  "fio": "Дергачев Евгений Иванович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685211016295200,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1666017470364783900,
                "title": "Теория решения изобретательских задач (пг1)"
              },
              "groups": [
                {
                  "id": 1671823357212890600,
                  "title": "3ТБб-02-1оп-20"
                },
                {
                  "id": 1671823433121404400,
                  "title": "3МТб-01-1оп-20"
                },
                {
                  "id": 1671822128479999500,
                  "title": "3ТТб-01-1оп-20"
                },
                {
                  "id": 1671823827303143000,
                  "title": "3НТТС-01-1оп-20"
                },
                {
                  "id": 1671823795820697000,
                  "title": "3ЭТМпб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490435408634319000,
                "title": "24"
              },
              "lecturers": [
                {
                  "id": 1430463259006211800,
                  "lastName": "Болобанова",
                  "firstName": "Наталия",
                  "middleName": "Леонидовна",
                  "shortName": "Болобанова Н. Л.",
                  "fio": "Болобанова Наталия Леонидовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685212085842700,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1666584871503402200,
                "title": "Физическая культура и спорт (элективная дисциплина)"
              },
              "groups": [
                {
                  "id": 1671815449735599600,
                  "title": "7Эб-05-1оп-20"
                },
                {
                  "id": 1671815301225780700,
                  "title": "7Эб-04-1оп-20"
                },
                {
                  "id": 1671815510729168400,
                  "title": "7УПпб-01-1оп-20"
                },
                {
                  "id": 1671815577865295400,
                  "title": "7ЭБ-01-1оп-20"
                },
                {
                  "id": 1671825067435103700,
                  "title": "9Бб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1492901605554525200,
                "title": "Спортивный корпус (ул.Труда,д.3)"
              },
              "auditory": {
                "id": 1493343626573386000,
                "title": "1/4"
              },
              "lecturers": [
                {
                  "id": 1421217061928966000,
                  "lastName": "Василенкова",
                  "firstName": "Татьяна",
                  "middleName": "Александровна",
                  "shortName": "Василенкова Т. А.",
                  "fio": "Василенкова Татьяна Александровна"
                },
                {
                  "id": 1513203073464407800,
                  "lastName": "Прядехина",
                  "firstName": "Мария",
                  "middleName": "Сергеевна",
                  "shortName": "Прядехина М. С.",
                  "fio": "Прядехина Мария Сергеевна"
                },
                {
                  "id": 1644364336262551300,
                  "lastName": "Гаврикова",
                  "firstName": "Ольга",
                  "middleName": "Юрьевна",
                  "shortName": "Гаврикова О. Ю.",
                  "fio": "Гаврикова Ольга Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685312050787000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1727283714860119300,
                "title": "Прикладная математика"
              },
              "groups": [
                {
                  "id": 1739582424515212800,
                  "title": "3ХТб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624670069000,
                "title": "331"
              },
              "lecturers": [
                {
                  "id": 1704067497327458000,
                  "lastName": "Лаптева",
                  "firstName": "Екатерина",
                  "middleName": "Сергеевна",
                  "shortName": "Лаптева Е. С.",
                  "fio": "Лаптева Екатерина Сергеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685323862995700,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1727260022014866700,
                "title": "Информатика и информационно-коммуникационные технологии"
              },
              "groups": [
                {
                  "id": 1739582424539330000,
                  "title": "1ПДОб-15-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292984942800,
                "title": "619"
              },
              "lecturers": [
                {
                  "id": 1425474998634551000,
                  "lastName": "Смирнова",
                  "firstName": "Елена",
                  "middleName": "Анатольевна",
                  "shortName": "Смирнова Е. А.",
                  "fio": "Смирнова Елена Анатольевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685298105774800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1697106568682050800,
                "title": "Деловые коммуникации на русском языке"
              },
              "groups": [
                {
                  "id": 1705969217172272600,
                  "title": "3НТТС-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048724459800,
                "title": "810"
              },
              "lecturers": [
                {
                  "id": 1505925647773472500,
                  "lastName": "Дивеева",
                  "firstName": "Алина",
                  "middleName": "Альбертовна",
                  "shortName": "Дивеева А. А.",
                  "fio": "Дивеева Алина Альбертовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749114675966899000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1665834630669931800,
                "title": "Актуальные тенденции коммуникативного дизайна"
              },
              "groups": [
                {
                  "id": 1671817906535536000,
                  "title": "2Дб-03-1зп-20"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1421219906975700700,
                  "lastName": "Галунова",
                  "firstName": "Светлана",
                  "middleName": "Николаевна",
                  "shortName": "Галунова С. Н.",
                  "fio": "Галунова Светлана Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1748454574832612000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1727268397373060400,
                "title": "Программа личностного и профессионального развития"
              },
              "groups": [
                {
                  "id": 1739582424517310000,
                  "title": "3ТТб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624626028800,
                "title": "319"
              },
              "lecturers": [
                {
                  "id": 1747840152777914000,
                  "lastName": "Елизарова",
                  "firstName": "Людмила",
                  "middleName": "Геннадьевна",
                  "shortName": "Елизарова Л. Г.",
                  "fio": "Елизарова Людмила Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749181254397195000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1695839342339036400,
                "title": "Психология медиакоммуникаций"
              },
              "groups": [
                {
                  "id": 1705969217241478700,
                  "title": "2ЖУРб-00-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1634137917545781000,
                  "lastName": "Максимова",
                  "firstName": "Татьяна",
                  "middleName": "Николаевна",
                  "shortName": "Максимова Т. Н.",
                  "fio": "Максимова Татьяна Николаевна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1747827802681242400,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1711411474964804900,
                "title": "Исследование социально-экономических процессов в регионе"
              },
              "groups": [
                {
                  "id": 1671816461186766300,
                  "title": "2См-02-1зп-20"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1424483394675283700,
                  "lastName": "Ковалева",
                  "firstName": "Галина",
                  "middleName": "Александровна",
                  "shortName": "Ковалева Г. А.",
                  "fio": "Ковалева Галина Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685211176727300,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1665206423591589000,
                "title": "Экономика продукта проекта. Модели монетизации (пг4)"
              },
              "groups": [
                {
                  "id": 1671817586681058800,
                  "title": "2Иб-00-1оп-20"
                },
                {
                  "id": 1671823357212890600,
                  "title": "3ТБб-02-1оп-20"
                },
                {
                  "id": 1671823827303143000,
                  "title": "3НТТС-01-1оп-20"
                },
                {
                  "id": 1671817437751809500,
                  "title": "2Лб-02-1оп-20"
                },
                {
                  "id": 1671816269488199200,
                  "title": "2Сб-00-1оп-20"
                },
                {
                  "id": 1671817830092248600,
                  "title": "2РТПб-01-1оп-20"
                },
                {
                  "id": 1671817216591402500,
                  "title": "2ПДОб-13-1оп-20"
                },
                {
                  "id": 1671823795820697000,
                  "title": "3ЭТМпб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490437674475983000,
                "title": "203"
              },
              "lecturers": [
                {
                  "id": 1552944620540794600,
                  "lastName": "Варзунова",
                  "firstName": "Вера",
                  "middleName": "Васильевна",
                  "shortName": "Варзунова В. В.",
                  "fio": "Варзунова Вера Васильевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685340034134800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1668478955216180500,
                "title": "Страхование"
              },
              "groups": [
                {
                  "id": 1641737034549696000,
                  "title": "7Эб-04-1зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1443889749481756400,
                  "lastName": "Кошелева",
                  "firstName": "Алена",
                  "middleName": "Владимировна",
                  "shortName": "Кошелева А. В.",
                  "fio": "Кошелева Алена Владимировна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685283134206700,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1601166744076948700,
                "title": "Поэтика"
              },
              "groups": [
                {
                  "id": 1609298376906512000,
                  "title": "2ПДОпб-13-1оп-18"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923942150400,
                "title": "702"
              },
              "lecturers": [
                {
                  "id": 1425475486812739300,
                  "lastName": "Соловьева",
                  "firstName": "Елена",
                  "middleName": "Евгеньевна",
                  "shortName": "Соловьева Е. Е.",
                  "fio": "Соловьева Елена Евгеньевна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685236925559600,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1725994618050180400,
                "title": "Иностранный язык (англ пг2)"
              },
              "groups": [
                {
                  "id": 1739582424507872800,
                  "title": "3СТб-01-2оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624613446000,
                "title": "315"
              },
              "lecturers": [
                {
                  "id": 1424938073381148400,
                  "lastName": "Поклад",
                  "firstName": "Наталия",
                  "middleName": "Игоревна",
                  "shortName": "Поклад Н. И.",
                  "fio": "Поклад Наталия Игоревна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685244429169400,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696559251810424000,
                "title": "Физиология человека"
              },
              "groups": [
                {
                  "id": 1705969217199535600,
                  "title": "9ФКб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490438777561158000,
                "title": "311"
              },
              "lecturers": [
                {
                  "id": 1471422084897838800,
                  "lastName": "Долгих",
                  "firstName": "Алиса",
                  "middleName": "Леонидовна",
                  "shortName": "Долгих А. Л.",
                  "fio": "Долгих Алиса Леонидовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747577404360881000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 0,
                "title": "Проектирования"
              },
              "groups": [
                {
                  "id": 1671822039042758100,
                  "title": "3СТб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490352157760688400,
                "title": "113"
              },
              "lecturers": [
                {
                  "id": 1472422754815842000,
                  "lastName": "Петровская",
                  "firstName": "Алена",
                  "middleName": "Анатольевна",
                  "shortName": "Петровская А. А.",
                  "fio": "Петровская Алена Анатольевна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685344393065200,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1666027086200968400,
                "title": "Иностранный язык в профессиональной сфере (англ пг1)"
              },
              "groups": [
                {
                  "id": 1671820835577403000,
                  "title": "1ПИб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520918872300,
                "title": "907"
              },
              "lecturers": [
                {
                  "id": 1421062942202271500,
                  "lastName": "Арюхина",
                  "firstName": "Елена",
                  "middleName": "Геннадьевна",
                  "shortName": "Арюхина Е. Г.",
                  "fio": "Арюхина Елена Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685230554411800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1726282349481424100,
                "title": "Практический курс английского языка (пг2)"
              },
              "groups": [
                {
                  "id": 1739582424555058700,
                  "title": "2ПДОб-21-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048787374300,
                "title": "823"
              },
              "lecturers": [
                {
                  "id": 1478386891657058000,
                  "lastName": "Башнина",
                  "firstName": "Александра",
                  "middleName": "Викторовна",
                  "shortName": "Башнина А. В.",
                  "fio": "Башнина Александра Викторовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685224118252300,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696291666947741000,
                "title": "Теоретическая механика"
              },
              "groups": [
                {
                  "id": 1705969217213167000,
                  "title": "4ПДОб-20-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776413471000,
                "title": "404"
              },
              "lecturers": [
                {
                  "id": 1425476574468118300,
                  "lastName": "Тихонова",
                  "firstName": "Людмила",
                  "middleName": "Павловна",
                  "shortName": "Тихонова Л. П.",
                  "fio": "Тихонова Людмила Павловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685233762005800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696473008827274500,
                "title": "Методика начального языкового образования (пг1)"
              },
              "groups": [
                {
                  "id": 1705969217212118500,
                  "title": "4ПДОб-19-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048795763000,
                "title": "825"
              },
              "lecturers": [
                {
                  "id": 1425479116566566700,
                  "lastName": "Чистякова",
                  "firstName": "Наталия",
                  "middleName": "Николаевна",
                  "shortName": "Чистякова Н. Н.",
                  "fio": "Чистякова Наталия Николаевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685221519881000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1722476065400419600,
                "title": "Основы производства материалов"
              },
              "groups": [
                {
                  "id": 1739582424569738800,
                  "title": "4ПДОб-20-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624634417400,
                "title": "321"
              },
              "lecturers": [
                {
                  "id": 1424935547273484000,
                  "lastName": "Мироненко",
                  "firstName": "Светлана",
                  "middleName": "Николаевна",
                  "shortName": "Мироненко С. Н.",
                  "fio": "Мироненко Светлана Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685222591525600,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1695736862542402800,
                "title": "Физическая культура и спорт (элективная дисциплина)"
              },
              "groups": [
                {
                  "id": 1705969217243575800,
                  "title": "2ПДОб-21-1оп-21"
                }
              ],
              "build": {
                "id": 1492901605554525200,
                "title": "Спортивный корпус (ул.Труда,д.3)"
              },
              "auditory": {
                "id": 1493343626573386000,
                "title": "1/4"
              },
              "lecturers": [
                {
                  "id": 1644364336262551300,
                  "lastName": "Гаврикова",
                  "firstName": "Ольга",
                  "middleName": "Юрьевна",
                  "shortName": "Гаврикова О. Ю.",
                  "fio": "Гаврикова Ольга Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685317037814500,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1727369702375552300,
                "title": "Безопасность жизнедеятельности (пг1)"
              },
              "groups": [
                {
                  "id": 1739582424522552800,
                  "title": "1АПб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903827149000,
                "title": "55"
              },
              "lecturers": [
                {
                  "id": 1733621848817399600,
                  "lastName": "Горохова",
                  "firstName": "Татьяна",
                  "middleName": "Юрьевна",
                  "shortName": "Горохова Т. Ю.",
                  "fio": "Горохова Татьяна Юрьевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685238676681500,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696552648983975200,
                "title": "Теоретическая механика"
              },
              "groups": [
                {
                  "id": 1705969217191147000,
                  "title": "3СТб-04-1оп-21"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903835537700,
                "title": "57"
              },
              "lecturers": [
                {
                  "id": 1424483270625597200,
                  "lastName": "Клинов",
                  "firstName": "Александр",
                  "middleName": "Владимирович",
                  "shortName": "Клинов А. В.",
                  "fio": "Клинов Александр Владимирович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747577405857198800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 0,
                "title": "Ознакомительная практика"
              },
              "groups": [
                {
                  "id": 1739582424505775600,
                  "title": "1ПИб-02-3оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378649915600,
                "title": "219"
              },
              "lecturers": [
                {
                  "id": 1421220781385324300,
                  "lastName": "Гонтарева",
                  "firstName": "Ирина",
                  "middleName": "Борисовна",
                  "shortName": "Гонтарева И. Б.",
                  "fio": "Гонтарева Ирина Борисовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685344975025000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1665386300261275000,
                "title": "Графические системы и языки"
              },
              "groups": [
                {
                  "id": 1671820801044649500,
                  "title": "1ИСб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488369326572441900,
                "title": "218а"
              },
              "lecturers": [
                {
                  "id": 1472314025600620300,
                  "lastName": "Табунов",
                  "firstName": "Павел",
                  "middleName": "Александрович",
                  "shortName": "Табунов П. А.",
                  "fio": "Табунов Павел Александрович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685295666787000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1667372565336692000,
                "title": "Проектирование предприятий по техническому сервису автомобилей"
              },
              "groups": [
                {
                  "id": 1641742924249044500,
                  "title": "3ЭТМпб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903822954800,
                "title": "54"
              },
              "lecturers": [
                {
                  "id": 1424936495844693800,
                  "lastName": "Николаев",
                  "firstName": "Василий",
                  "middleName": "Васильевич",
                  "shortName": "Николаев В. В.",
                  "fio": "Николаев Василий Васильевич"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685321450222300,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1727277659983836400,
                "title": "Иностранный язык (англ)"
              },
              "groups": [
                {
                  "id": 1739582424573933000,
                  "title": "3МТб-03-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048808345900,
                "title": "828"
              },
              "lecturers": [
                {
                  "id": 1429371784578209500,
                  "lastName": "Исаева",
                  "firstName": "Мария",
                  "middleName": "Геннадьевна",
                  "shortName": "Исаева М. Г.",
                  "fio": "Исаева Мария Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685210846425900,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1666652154101765400,
                "title": "Лидерство и управление командой (пг5)"
              },
              "groups": [
                {
                  "id": 1671823357212890600,
                  "title": "3ТБб-02-1оп-20"
                },
                {
                  "id": 1671823433121404400,
                  "title": "3МТб-01-1оп-20"
                },
                {
                  "id": 1671822128479999500,
                  "title": "3ТТб-01-1оп-20"
                },
                {
                  "id": 1671823827303143000,
                  "title": "3НТТС-01-1оп-20"
                },
                {
                  "id": 1671823795820697000,
                  "title": "3ЭТМпб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048777937200,
                "title": "821"
              },
              "lecturers": [
                {
                  "id": 1431202970135959300,
                  "lastName": "Балюшина",
                  "firstName": "Юлия",
                  "middleName": "Львовна",
                  "shortName": "Балюшина Ю. Л.",
                  "fio": "Балюшина Юлия Львовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685312805761800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1724815207709930800,
                "title": "Игровая культура и праздник"
              },
              "groups": [
                {
                  "id": 1739582424526747100,
                  "title": "2РТПб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488365888710119700,
                "title": "201"
              },
              "lecturers": [
                {
                  "id": 1421218168724002600,
                  "lastName": "Владимирова",
                  "firstName": "Ольга",
                  "middleName": "Александровна",
                  "shortName": "Владимирова О. А.",
                  "fio": "Владимирова Ольга Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685318193345300,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1695734762655716600,
                "title": "Современный русский язык"
              },
              "groups": [
                {
                  "id": 1705969217240430000,
                  "title": "2ЖУРб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624637563100,
                "title": "322"
              },
              "lecturers": [
                {
                  "id": 1396217058267502300,
                  "lastName": "Иванова",
                  "firstName": "Елена",
                  "middleName": "Михайловна",
                  "shortName": "Иванова Е. М.",
                  "fio": "Иванова Елена Михайловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685308621943600,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1696457657440802000,
                "title": "История и теория праздничной культуры"
              },
              "groups": [
                {
                  "id": 1705969217182758400,
                  "title": "2РТПб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1471886253797414000,
                "title": "Учебно-лабораторный корпус № 3 (ул.М.Горького, 14)"
              },
              "auditory": {
                "id": 1490442947335819500,
                "title": "101"
              },
              "lecturers": [
                {
                  "id": 1424936606865823500,
                  "lastName": "Новиков",
                  "firstName": "Алексей",
                  "middleName": "Евгеньевич",
                  "shortName": "Новиков А. Е.",
                  "fio": "Новиков Алексей Евгеньевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685230239839000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1726282327231690000,
                "title": "Немецкий язык (пг1)"
              },
              "groups": [
                {
                  "id": 1739582424555058700,
                  "title": "2ПДОб-21-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776483725600,
                "title": "424"
              },
              "lecturers": [
                {
                  "id": 1424935322677942000,
                  "lastName": "Межецкая",
                  "firstName": "Галина",
                  "middleName": "Николаевна",
                  "shortName": "Межецкая Г. Н.",
                  "fio": "Межецкая Галина Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685242036319000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1630503591206720800,
                "title": "Технология карьеры"
              },
              "groups": [
                {
                  "id": 1641733818512578000,
                  "title": "4ПДОб-19-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048783180000,
                "title": "822"
              },
              "lecturers": [
                {
                  "id": 1448967915303868200,
                  "lastName": "Рогожникова",
                  "firstName": "Светлана",
                  "middleName": "Мугумаевна",
                  "shortName": "Рогожникова С. М.",
                  "fio": "Рогожникова Светлана Мугумаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685220659000000,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1666035557273179400,
                "title": "Психологическая коррекция и реабилитация"
              },
              "groups": [
                {
                  "id": 1671820629673776600,
                  "title": "4ПСД-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292923076900,
                "title": "604"
              },
              "lecturers": [
                {
                  "id": 1425476194401261300,
                  "lastName": "Табунов",
                  "firstName": "Иван",
                  "middleName": "Александрович",
                  "shortName": "Табунов И. А.",
                  "fio": "Табунов Иван Александрович"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685277558928100,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1724286638049064200,
                "title": "Устное народное творчество"
              },
              "groups": [
                {
                  "id": 1739582424554010000,
                  "title": "2ПДОб-13-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048685662500,
                "title": "802"
              },
              "lecturers": [
                {
                  "id": 1425476950857619200,
                  "lastName": "Трубицына",
                  "firstName": "Мария",
                  "middleName": "Юрьевна",
                  "shortName": "Трубицына М. Ю.",
                  "fio": "Трубицына Мария Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685246385812200,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1722931211552028000,
                "title": "Практикум по фонетике (английский язык) (пг1)"
              },
              "groups": [
                {
                  "id": 1739582424538281500,
                  "title": "2Лб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254013899000,
                "title": "506"
              },
              "lecturers": [
                {
                  "id": 1424935794245638000,
                  "lastName": "Моисеенко",
                  "firstName": "Анна",
                  "middleName": "Валерьевна",
                  "shortName": "Моисеенко А. В.",
                  "fio": "Моисеенко Анна Валерьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685338716074800,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1584140473417602300,
                "title": "Инновационный менеджмент"
              },
              "groups": [
                {
                  "id": 1609396466053289500,
                  "title": "7ГМУб-00-1зп-18"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1425477168074332000,
                  "lastName": "Тюлю",
                  "firstName": "Галина",
                  "middleName": "Михайловна",
                  "shortName": "Тюлю Г. М.",
                  "fio": "Тюлю Галина Михайловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685301136159500,
              "dateEvent": "23.11.2022",
              "startTime": "08:30",
              "endTime": "10:00",
              "discipline": {
                "id": 1726901588739356000,
                "title": "Безопасность жизнедеятельности (пг1)"
              },
              "groups": [
                {
                  "id": 1739582424503678500,
                  "title": "1ПИб-02-1оп-22"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903818760400,
                "title": "53"
              },
              "lecturers": [
                {
                  "id": 1424931426906675000,
                  "lastName": "Кочнев",
                  "firstName": "Александр",
                  "middleName": "Олегович",
                  "shortName": "Кочнев А. О.",
                  "fio": "Кочнев Александр Олегович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747577411529995000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Технологическая практика 1"
              },
              "groups": [
                {
                  "id": 1705969217164932600,
                  "title": "1ИСб-00-2оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378592244000,
                "title": "212"
              },
              "lecturers": [
                {
                  "id": 1421218013576697600,
                  "lastName": "Виноградова",
                  "firstName": "Людмила",
                  "middleName": "Николаевна",
                  "shortName": "Виноградова Л. Н.",
                  "fio": "Виноградова Людмила Николаевна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685325415936800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696291514885346600,
                "title": "Деловые коммуникации на русском языке"
              },
              "groups": [
                {
                  "id": 1705969217194292700,
                  "title": "1АПпб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254052696300,
                "title": "514"
              },
              "lecturers": [
                {
                  "id": 1467259902987605800,
                  "lastName": "Сальникова",
                  "firstName": "Ольга",
                  "middleName": "Сергеевна",
                  "shortName": "Сальникова О. С.",
                  "fio": "Сальникова Ольга Сергеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685341471732500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1631522011450709200,
                "title": "Иностранный язык в профессиональной сфере (англ)"
              },
              "groups": [
                {
                  "id": 1671816872111117800,
                  "title": "2ЖУРб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048759062800,
                "title": "817"
              },
              "lecturers": [
                {
                  "id": 1421231715873986300,
                  "lastName": "Зайцева",
                  "firstName": "Татьяна",
                  "middleName": "Александровна",
                  "shortName": "Зайцева Т. А.",
                  "fio": "Зайцева Татьяна Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685215833453300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1726375036660348200,
                "title": "Археология"
              },
              "groups": [
                {
                  "id": 1739582424591758800,
                  "title": "2Иб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520904192300,
                "title": "903"
              },
              "lecturers": [
                {
                  "id": 1424931000228517600,
                  "lastName": "Косорукова",
                  "firstName": "Наталья",
                  "middleName": "Валентиновна",
                  "shortName": "Косорукова Н. В.",
                  "fio": "Косорукова Наталья Валентиновна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747913182058247000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1671820870725670400,
                  "title": "1ПИб-01-2оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1671012553029849300,
                "title": "301в"
              },
              "lecturers": [
                {
                  "id": 1396414847681304300,
                  "lastName": "Ершов",
                  "firstName": "Евгений",
                  "middleName": "Валентинович",
                  "shortName": "Ершов Е. В.",
                  "fio": "Ершов Евгений Валентинович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685285728383700,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1728093643399361800,
                "title": "Менеджмент и организация производства"
              },
              "groups": [
                {
                  "id": 1641742539920774700,
                  "title": "3МТб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436480212930800,
                "title": "40"
              },
              "lecturers": [
                {
                  "id": 1421224411620448000,
                  "lastName": "Деткова",
                  "firstName": "Татьяна",
                  "middleName": "Викторовна",
                  "shortName": "Деткова Т. В.",
                  "fio": "Деткова Татьяна Викторовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685238503666400,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696552888270067000,
                "title": "Иностранный язык (англ пг1)"
              },
              "groups": [
                {
                  "id": 1705969217183807000,
                  "title": "3СТб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624613446000,
                "title": "315"
              },
              "lecturers": [
                {
                  "id": 1478386891657058000,
                  "lastName": "Башнина",
                  "firstName": "Александра",
                  "middleName": "Викторовна",
                  "shortName": "Башнина А. В.",
                  "fio": "Башнина Александра Викторовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749098240495448800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1699721155761837300,
                "title": "Режиссура театрализованных представлений и праздников"
              },
              "groups": [
                {
                  "id": 1671817775651231200,
                  "title": "2РТПб-01-1зп-20"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1479484308403001000,
                  "lastName": "Хорошавин",
                  "firstName": "Олег",
                  "middleName": "Николаевич",
                  "shortName": "Хорошавин О. Н.",
                  "fio": "Хорошавин Олег Николаевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685322257625900,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727372759189550300,
                "title": "Алгебра и геометрия"
              },
              "groups": [
                {
                  "id": 1739582424524650000,
                  "title": "1УТСб-02-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776429199600,
                "title": "409"
              },
              "lecturers": [
                {
                  "id": 1704067497327458000,
                  "lastName": "Лаптева",
                  "firstName": "Екатерина",
                  "middleName": "Сергеевна",
                  "shortName": "Лаптева Е. С.",
                  "fio": "Лаптева Екатерина Сергеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685221283951400,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1602604374937310500,
                "title": "Методологические основы психологии"
              },
              "groups": [
                {
                  "id": 1609302467033437700,
                  "title": "4ПСД-01-1оп-18"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292951388400,
                "title": "612"
              },
              "lecturers": [
                {
                  "id": 1425475133716305700,
                  "lastName": "Смирнова",
                  "firstName": "Ольга",
                  "middleName": "Валериевна",
                  "shortName": "Смирнова О. В.",
                  "fio": "Смирнова Ольга Валериевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685297523815200,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696842072032974000,
                "title": "Прикладные информационные технологии"
              },
              "groups": [
                {
                  "id": 1705969217206875600,
                  "title": "3ТМб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490435777622970600,
                "title": "27б"
              },
              "lecturers": [
                {
                  "id": 1424935238807590700,
                  "lastName": "Мащенко",
                  "firstName": "Марина",
                  "middleName": "Александровна",
                  "shortName": "Мащенко М. А.",
                  "fio": "Мащенко Марина Александровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685320071345000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727369724120921300,
                "title": "Физика технических объектов (пг2)"
              },
              "groups": [
                {
                  "id": 1739582424522552800,
                  "title": "1АПб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624649097500,
                "title": "325"
              },
              "lecturers": [
                {
                  "id": 1425494008685139700,
                  "lastName": "Козырева",
                  "firstName": "Яна",
                  "middleName": "Анатольевна",
                  "shortName": "Козырева Я. А.",
                  "fio": "Козырева Яна Анатольевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685238459626200,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696552888270067000,
                "title": "Иностранный язык (англ пг2)"
              },
              "groups": [
                {
                  "id": 1705969217183807000,
                  "title": "3СТб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923946344700,
                "title": "703"
              },
              "lecturers": [
                {
                  "id": 1424938073381148400,
                  "lastName": "Поклад",
                  "firstName": "Наталия",
                  "middleName": "Игоревна",
                  "shortName": "Поклад Н. И.",
                  "fio": "Поклад Наталия Игоревна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685288945415000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1667368851928520000,
                "title": "Охрана труда (пг1)"
              },
              "groups": [
                {
                  "id": 1641742799740081700,
                  "title": "3ТБб-02-1оп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "онлайн"
              },
              "lecturers": [
                {
                  "id": 1421225803000059600,
                  "lastName": "Егоренкова",
                  "firstName": "Светлана",
                  "middleName": "Владимировна",
                  "shortName": "Егоренкова С. В.",
                  "fio": "Егоренкова Светлана Владимировна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685309343363800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696457661747303700,
                "title": "Хореография и пластика в театрализованных представлениях"
              },
              "groups": [
                {
                  "id": 1705969217182758400,
                  "title": "2РТПб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1471886253797414000,
                "title": "Учебно-лабораторный корпус № 3 (ул.М.Горького, 14)"
              },
              "auditory": {
                "id": 1491982414359040300,
                "title": "306"
              },
              "lecturers": [
                {
                  "id": 1672099246548981500,
                  "lastName": "Горшков",
                  "firstName": "Евгений",
                  "middleName": "Владимирович",
                  "shortName": "Горшков Е. В.",
                  "fio": "Горшков Евгений Владимирович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685224608985900,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1726915690901665000,
                "title": "Специальная психология и специальная педагогика"
              },
              "groups": [
                {
                  "id": 1739582424530941400,
                  "title": "4СДОб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490437243336135000,
                "title": "104"
              },
              "lecturers": [
                {
                  "id": 1424937474384205600,
                  "lastName": "Пепик",
                  "firstName": "Лариса",
                  "middleName": "Александровна",
                  "shortName": "Пепик Л. А.",
                  "fio": "Пепик Лариса Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685319086732000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727272721829459200,
                "title": "Прикладная математика"
              },
              "groups": [
                {
                  "id": 1739582424523601400,
                  "title": "3ТБб-02-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254079959300,
                "title": "520"
              },
              "lecturers": [
                {
                  "id": 1504047283669309200,
                  "lastName": "Чуев",
                  "firstName": "Антон",
                  "middleName": "Андреевич",
                  "shortName": "Чуев А. А.",
                  "fio": "Чуев Антон Андреевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685308329390800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696821962114241800,
                "title": "Физико-химические основы подготовки топлива, воды и очистки промышленных стоков (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217204778500,
                  "title": "3ТТб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490435838350201000,
                "title": "28"
              },
              "lecturers": [
                {
                  "id": 1421062443614869200,
                  "lastName": "Антонова",
                  "firstName": "Юлия",
                  "middleName": "Валерьевна",
                  "shortName": "Антонова Ю. В.",
                  "fio": "Антонова Юлия Валерьевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685231000056600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696458006925940000,
                "title": "Иностранный язык (англ)"
              },
              "groups": [
                {
                  "id": 1705969217226798600,
                  "title": "1ПМб-02-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048748577000,
                "title": "815"
              },
              "lecturers": [
                {
                  "id": 1704794965414901500,
                  "lastName": "Першина",
                  "firstName": "Елена",
                  "middleName": "Юрьевна",
                  "shortName": "Першина Е. Ю.",
                  "fio": "Першина Елена Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747911124668248800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1641825764392310300,
                  "title": "1ПМб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1671012604089209000,
                "title": "301г"
              },
              "lecturers": [
                {
                  "id": 1448877800173868800,
                  "lastName": "Венедиктов",
                  "firstName": "Максим",
                  "middleName": "Ильич",
                  "shortName": "Венедиктов М. И.",
                  "fio": "Венедиктов Максим Ильич"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748204671806075600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Вакцинация от гриппа"
              },
              "groups": [
                {
                  "id": 1671823055054182000,
                  "title": "3ХТпб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1491992159538123000,
                "title": "103"
              },
              "lecturers": [
                {
                  "id": 1747850345543759600,
                  "lastName": "Пукело",
                  "firstName": "Елена",
                  "middleName": "Вячеславовна",
                  "shortName": "Пукело Е. В.",
                  "fio": "Пукело Елена Вячеславовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685236486206200,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1725994625777137000,
                "title": "Прикладные информационные технологии"
              },
              "groups": [
                {
                  "id": 1739582424507872800,
                  "title": "3СТб-01-2оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292984942800,
                "title": "619"
              },
              "lecturers": [
                {
                  "id": 1425474998634551000,
                  "lastName": "Смирнова",
                  "firstName": "Елена",
                  "middleName": "Анатольевна",
                  "shortName": "Смирнова Е. А.",
                  "fio": "Смирнова Елена Анатольевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685283722457900,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1631607623427036400,
                "title": "Большой практикум по ботанике и зоологии (пг1)"
              },
              "groups": [
                {
                  "id": 1641736941696194000,
                  "title": "9Бб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520895803600,
                "title": "901"
              },
              "lecturers": [
                {
                  "id": 1539181737125353200,
                  "lastName": "Трошин",
                  "firstName": "Дмитрий",
                  "middleName": "Сергеевич",
                  "shortName": "Трошин Д. С.",
                  "fio": "Трошин Дмитрий Сергеевич"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747737189698892500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696390858755020000,
                "title": "Информационные и коммуникационные технологии в инклюзивном образовании"
              },
              "groups": [
                {
                  "id": 1705969217246721500,
                  "title": "4СДОм-03-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "онлайн"
              },
              "lecturers": [
                {
                  "id": 1421215484534069000,
                  "lastName": "Борисова",
                  "firstName": "Наталья",
                  "middleName": "Альбертовна",
                  "shortName": "Борисова Н. А.",
                  "fio": "Борисова Наталья Альбертовна"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685237531636500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1726358783491175700,
                "title": "Математическая логика"
              },
              "groups": [
                {
                  "id": 1739582424574981600,
                  "title": "1ПМб-02-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624670069000,
                "title": "331"
              },
              "lecturers": [
                {
                  "id": 1424937863291606800,
                  "lastName": "Плотникова",
                  "firstName": "Надежда",
                  "middleName": "Валентиновна",
                  "shortName": "Плотникова Н. В.",
                  "fio": "Плотникова Надежда Валентиновна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685276807099100,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1724381112242664700,
                "title": "Введение в цифровую культуру (пг2)"
              },
              "groups": [
                {
                  "id": 1739582424568690200,
                  "title": "2Тб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292973408500,
                "title": "616"
              },
              "lecturers": [
                {
                  "id": 1666101788188612400,
                  "lastName": "Терентьева",
                  "firstName": "Алла",
                  "middleName": "Федоровна",
                  "shortName": "Терентьева А. Ф.",
                  "fio": "Терентьева Алла Федоровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748923431866200800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1665390776797894000,
                "title": "Проектирование в профессиональной сфере"
              },
              "groups": [
                {
                  "id": 1643726844876297700,
                  "title": "2Тб-00-1зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1511087872294262500,
                  "lastName": "Граф",
                  "firstName": "Софья",
                  "middleName": "Владимировна",
                  "shortName": "Граф С. В.",
                  "fio": "Граф Софья Владимировна"
                }
              ],
              "abbrlessontype": "икр",
              "lessontype": "Иная конт.раб.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685267165442800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696374712299427000,
                "title": "Технология проектной деятельности"
              },
              "groups": [
                {
                  "id": 1705969217176467000,
                  "title": "3ХТб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048733897000,
                "title": "812"
              },
              "lecturers": [
                {
                  "id": 1472041884927924000,
                  "lastName": "Котик",
                  "firstName": "Екатерина",
                  "middleName": "Михайловна",
                  "shortName": "Котик Е. М.",
                  "fio": "Котик Екатерина Михайловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685272518423300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1632221808672380200,
                "title": "Практикум по устной речи (пг1)"
              },
              "groups": [
                {
                  "id": 1641732085136758300,
                  "title": "2Лб-02-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923956830500,
                "title": "706"
              },
              "lecturers": [
                {
                  "id": 1425479757823219500,
                  "lastName": "Швец",
                  "firstName": "Варвара",
                  "middleName": "Михайловна",
                  "shortName": "Швец В. М.",
                  "fio": "Швец Варвара Михайловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685290769937200,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727277899334940000,
                "title": "Иностранный язык (англ пг2)"
              },
              "groups": [
                {
                  "id": 1739582424511018500,
                  "title": "1ИТСб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520911532300,
                "title": "905"
              },
              "lecturers": [
                {
                  "id": 1729906009590069000,
                  "lastName": "Чуева",
                  "firstName": "Мария",
                  "middleName": "Викторовна",
                  "shortName": "Чуева М. В.",
                  "fio": "Чуева Мария Викторовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685290729042700,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727277899334940000,
                "title": "Иностранный язык (англ пг1)"
              },
              "groups": [
                {
                  "id": 1739582424511018500,
                  "title": "1ИТСб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520946135300,
                "title": "914"
              },
              "lecturers": [
                {
                  "id": 1577151136250468000,
                  "lastName": "Шмакова",
                  "firstName": "Вероника",
                  "middleName": "Николаевна",
                  "shortName": "Шмакова В. Н.",
                  "fio": "Шмакова Вероника Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685254249083600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1602599097741612300,
                "title": "Теория и методика физического воспитания школьников с отклонениями в  состоянии здоровья"
              },
              "groups": [
                {
                  "id": 1624632741121234400,
                  "title": "9ПДОпб-17-1оп-18"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490438777526555000,
                "title": "302"
              },
              "lecturers": [
                {
                  "id": 1425490090668332800,
                  "lastName": "Воробьева",
                  "firstName": "Ольга",
                  "middleName": "Сергеевна",
                  "shortName": "Воробьева О. С.",
                  "fio": "Воробьева Ольга Сергеевна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685328320492300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1602435185869067500,
                "title": "Контроль и ревизия"
              },
              "groups": [
                {
                  "id": 1609302546088728000,
                  "title": "7ЭБ-01-1оп-18"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1710344616300902100,
                  "lastName": "Малкова",
                  "firstName": "Ирина",
                  "middleName": "Алфеевна",
                  "shortName": "Малкова И. А.",
                  "fio": "Малкова Ирина Алфеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685224152855300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696291666947741000,
                "title": "Теоретическая механика"
              },
              "groups": [
                {
                  "id": 1705969217213167000,
                  "title": "4ПДОб-20-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776413471000,
                "title": "404"
              },
              "lecturers": [
                {
                  "id": 1425476574468118300,
                  "lastName": "Тихонова",
                  "firstName": "Людмила",
                  "middleName": "Павловна",
                  "shortName": "Тихонова Л. П.",
                  "fio": "Тихонова Людмила Павловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685281166029600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1634755372448224500,
                "title": "Скульптурно-пластическое моделирование"
              },
              "groups": [
                {
                  "id": 1641743792550712800,
                  "title": "3ДАСб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490353917950693600,
                "title": "201"
              },
              "lecturers": [
                {
                  "id": 1424931792252573400,
                  "lastName": "Краузе",
                  "firstName": "Елена",
                  "middleName": "Сергеевна",
                  "shortName": "Краузе Е. С.",
                  "fio": "Краузе Елена Сергеевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749017717775397600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1665382187625616600,
                "title": "Дизайн сетевых изданий"
              },
              "groups": [
                {
                  "id": 1671816807348967000,
                  "title": "2ЖУРб-00-1зп-20"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1538002374808835800,
                  "lastName": "Филинова",
                  "firstName": "Анастасия",
                  "middleName": "Павловна",
                  "shortName": "Филинова А. П.",
                  "fio": "Филинова Анастасия Павловна"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746922532621906700,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1726910917442925800,
                "title": "Иностранный язык (англ пг2)"
              },
              "groups": [
                {
                  "id": 1739582424548767200,
                  "title": "4ВППб-03-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048772694300,
                "title": "820"
              },
              "lecturers": [
                {
                  "id": 1421061661793458000,
                  "lastName": "Андреева",
                  "firstName": "Татьяна",
                  "middleName": "Анатольевна",
                  "shortName": "Андреева Т. А.",
                  "fio": "Андреева Татьяна Анатольевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685301584950000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696925071320716500,
                "title": "Материаловедение и технология конструкционных материалов (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217168078300,
                  "title": "3ТБб-02-1оп-21"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490372835492761900,
                "title": "17"
              },
              "lecturers": [
                {
                  "id": 1424936877166696200,
                  "lastName": "Окунева",
                  "firstName": "Татьяна",
                  "middleName": "Александровна",
                  "shortName": "Окунева Т. А.",
                  "fio": "Окунева Татьяна Александровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685272593920800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727264209181209900,
                "title": "Архитектурно-дизайнерское проектирование.Уровень 1"
              },
              "groups": [
                {
                  "id": 1739582424576030200,
                  "title": "3ДАСб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490353917954888000,
                "title": "202"
              },
              "lecturers": [
                {
                  "id": 1421225095710381800,
                  "lastName": "Дорофеюк",
                  "firstName": "Наталья",
                  "middleName": "Венеровна",
                  "shortName": "Дорофеюк Н. В.",
                  "fio": "Дорофеюк Наталья Венеровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685217787999000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696206468770960600,
                "title": "Общий психологический практикум (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217207924200,
                  "title": "4ВППб-03-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292937757000,
                "title": "608"
              },
              "lecturers": [
                {
                  "id": 1424932151988590300,
                  "lastName": "Кудака",
                  "firstName": "Марина",
                  "middleName": "Александровна",
                  "shortName": "Кудака М. А.",
                  "fio": "Кудака Марина Александровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685230677095200,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696479536065025300,
                "title": "Методы обработки экспериментальных данных"
              },
              "groups": [
                {
                  "id": 1705969217227847200,
                  "title": "1ПМб-03-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776407179500,
                "title": "402"
              },
              "lecturers": [
                {
                  "id": 1424937390007392000,
                  "lastName": "Парыгина",
                  "firstName": "Светлана",
                  "middleName": "Александровна",
                  "shortName": "Парыгина С. А.",
                  "fio": "Парыгина Светлана Александровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685246771688200,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696562632828392700,
                "title": "Физиология человека"
              },
              "groups": [
                {
                  "id": 1705969217214215700,
                  "title": "9АФКб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490438777542283500,
                "title": "306"
              },
              "lecturers": [
                {
                  "id": 1431205958015522600,
                  "lastName": "Воробьев",
                  "firstName": "Владислав",
                  "middleName": "Федорович",
                  "shortName": "Воробьев В. Ф.",
                  "fio": "Воробьев Владислав Федорович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748454196579791600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1724374916460836000,
                "title": "Программа личностного и профессионального развития"
              },
              "groups": [
                {
                  "id": 1739582424589661700,
                  "title": "2СОб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254033822000,
                "title": "510"
              },
              "lecturers": [
                {
                  "id": 1421235333943531300,
                  "lastName": "Каракина",
                  "firstName": "Татьяна",
                  "middleName": "Геннадьевна",
                  "shortName": "Каракина Т. Г.",
                  "fio": "Каракина Татьяна Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685304879575800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696834044273530000,
                "title": "Деловые коммуникации на русском языке"
              },
              "groups": [
                {
                  "id": 1705969217216312800,
                  "title": "3ЭЭб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254075765000,
                "title": "519"
              },
              "lecturers": [
                {
                  "id": 1542458392440739600,
                  "lastName": "Неклюдова",
                  "firstName": "Евгения",
                  "middleName": "Александровна",
                  "shortName": "Неклюдова Е. А.",
                  "fio": "Неклюдова Евгения Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747666773500359400,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1666027127941633300,
                "title": "Базы данных (пг1)"
              },
              "groups": [
                {
                  "id": 1671820835577403000,
                  "title": "1ПИб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378709684500,
                "title": "227"
              },
              "lecturers": [
                {
                  "id": 1425474223841744600,
                  "lastName": "Селяничев",
                  "firstName": "Олег",
                  "middleName": "Леонидович",
                  "shortName": "Селяничев О. Л.",
                  "fio": "Селяничев Олег Леонидович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747912202442896100,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1641826730461107700,
                  "title": "1ПИб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1671012499597562000,
                "title": "301б"
              },
              "lecturers": [
                {
                  "id": 1396414847681304300,
                  "lastName": "Ершов",
                  "firstName": "Евгений",
                  "middleName": "Валентинович",
                  "shortName": "Ершов Е. В.",
                  "fio": "Ершов Евгений Валентинович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685306986165000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1610854891195995400,
                "title": "Бережливое производство"
              },
              "groups": [
                {
                  "id": 1641737111948236300,
                  "title": "7Эб-05-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436425404911900,
                "title": "37"
              },
              "lecturers": [
                {
                  "id": 1424940005267085000,
                  "lastName": "Румянцев",
                  "firstName": "Вадим",
                  "middleName": "Владимирович",
                  "shortName": "Румянцев В. В.",
                  "fio": "Румянцев Вадим Владимирович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685296260281000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727277908101035300,
                "title": "Математический анализ"
              },
              "groups": [
                {
                  "id": 1739582424512067000,
                  "title": "1ИТСб-00-2оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292955582700,
                "title": "613"
              },
              "lecturers": [
                {
                  "id": 1424936078741084000,
                  "lastName": "Мухин",
                  "firstName": "Владимир",
                  "middleName": "Васильевич",
                  "shortName": "Мухин В. В.",
                  "fio": "Мухин Владимир Васильевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685263063413500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1695925758777628000,
                "title": "Уголовное право"
              },
              "groups": [
                {
                  "id": 1705969217223652900,
                  "title": "2Юб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776448074000,
                "title": "415"
              },
              "lecturers": [
                {
                  "id": 1613312225126127400,
                  "lastName": "Петрова",
                  "firstName": "Валентина",
                  "middleName": "Владимировна",
                  "shortName": "Петрова В. В.",
                  "fio": "Петрова Валентина Владимировна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685210453209900,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1665206419934156000,
                "title": "Дизайн-мышление. Методология работы с клиентом (пг3)"
              },
              "groups": [
                {
                  "id": 1671817586681058800,
                  "title": "2Иб-00-1оп-20"
                },
                {
                  "id": 1671816734752904700,
                  "title": "2СОб-00-1оп-20"
                },
                {
                  "id": 1671817437751809500,
                  "title": "2Лб-02-1оп-20"
                },
                {
                  "id": 1671816269488199200,
                  "title": "2Сб-00-1оп-20"
                },
                {
                  "id": 1671817028908881400,
                  "title": "2Тб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490437674469691600,
                "title": "202"
              },
              "lecturers": [
                {
                  "id": 1478026529608832800,
                  "lastName": "Ковшикова",
                  "firstName": "Галина",
                  "middleName": "Александровна",
                  "shortName": "Ковшикова Г. А.",
                  "fio": "Ковшикова Галина Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685233000739600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696470489958978800,
                "title": "Математический анализ"
              },
              "groups": [
                {
                  "id": 1705969217230993000,
                  "title": "1ПДОб-15-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776432345300,
                "title": "410"
              },
              "lecturers": [
                {
                  "id": 1421238082544342800,
                  "lastName": "Кашинцева",
                  "firstName": "Ольга",
                  "middleName": "Альбертовна",
                  "shortName": "Кашинцева О. А.",
                  "fio": "Кашинцева Ольга Альбертовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685278099993300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1724286603376850200,
                "title": "Иностранный язык (англ пг1)"
              },
              "groups": [
                {
                  "id": 1739582424554010000,
                  "title": "2ПДОб-13-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048817783000,
                "title": "830"
              },
              "lecturers": [
                {
                  "id": 1424935579290703600,
                  "lastName": "Миронова",
                  "firstName": "Эльвира",
                  "middleName": "Геннадьевна",
                  "shortName": "Миронова Э. Г.",
                  "fio": "Миронова Эльвира Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685294147400400,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696842091338306800,
                "title": "Физическая химия"
              },
              "groups": [
                {
                  "id": 1705969217203730000,
                  "title": "3МТб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490364153894801700,
                "title": "421"
              },
              "lecturers": [
                {
                  "id": 1421234853330818800,
                  "lastName": "Калько",
                  "firstName": "Оксана",
                  "middleName": "Александровна",
                  "shortName": "Калько О. А.",
                  "fio": "Калько Оксана Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748454588381262600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727268397373060400,
                "title": "Программа личностного и профессионального развития"
              },
              "groups": [
                {
                  "id": 1739582424517310000,
                  "title": "3ТТб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624626028800,
                "title": "319"
              },
              "lecturers": [
                {
                  "id": 1747840152777914000,
                  "lastName": "Елизарова",
                  "firstName": "Людмила",
                  "middleName": "Геннадьевна",
                  "shortName": "Елизарова Л. Г.",
                  "fio": "Елизарова Людмила Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685282365600500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727986236662871300,
                "title": "Общее языкознание"
              },
              "groups": [
                {
                  "id": 1609298376906512000,
                  "title": "2ПДОпб-13-1оп-18"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923942150400,
                "title": "702"
              },
              "lecturers": [
                {
                  "id": 1424933661150549800,
                  "lastName": "Лаврова",
                  "firstName": "Светлана",
                  "middleName": "Юрьевна",
                  "shortName": "Лаврова С. Ю.",
                  "fio": "Лаврова Светлана Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685259790807800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1631614279389025500,
                "title": "Профессиональные творческие студии"
              },
              "groups": [
                {
                  "id": 1641734195482990000,
                  "title": "2ЖУРб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776422908200,
                "title": "407"
              },
              "lecturers": [
                {
                  "id": 1425477852516587300,
                  "lastName": "Дворянова",
                  "firstName": "Мария",
                  "middleName": "Валерьевна",
                  "shortName": "Дворянова М. В.",
                  "fio": "Дворянова Мария Валерьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685242610938600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1631701234767369500,
                "title": "Ценообразование и сметное дело в строительстве"
              },
              "groups": [
                {
                  "id": 1641852232647317000,
                  "title": "3СТб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490356052340773000,
                "title": "301"
              },
              "lecturers": [
                {
                  "id": 1421220130654787300,
                  "lastName": "Гендлина",
                  "firstName": "Юлия",
                  "middleName": "Борисовна",
                  "shortName": "Гендлина Ю. Б.",
                  "fio": "Гендлина Юлия Борисовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747911578506621700,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1641826461326251500,
                  "title": "1РФб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776462754000,
                "title": "418"
              },
              "lecturers": [
                {
                  "id": 1424937070449661700,
                  "lastName": "Осипова",
                  "firstName": "Надежда",
                  "middleName": "Александровна",
                  "shortName": "Осипова Н. А.",
                  "fio": "Осипова Надежда Александровна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747910123474252500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1641826544721598000,
                  "title": "1ИСб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1671012457577976000,
                "title": "301а"
              },
              "lecturers": [
                {
                  "id": 1396414847681304300,
                  "lastName": "Ершов",
                  "firstName": "Евгений",
                  "middleName": "Валентинович",
                  "shortName": "Ершов Е. В.",
                  "fio": "Ершов Евгений Валентинович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685250776200000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1728549747024590000,
                "title": "Биомеханика двигательной деятельности"
              },
              "groups": [
                {
                  "id": 1671825251655227000,
                  "title": "9ФКб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490438777561158000,
                "title": "311"
              },
              "lecturers": [
                {
                  "id": 1573443231403743000,
                  "lastName": "Федоров",
                  "firstName": "Антон",
                  "middleName": "Михайлович",
                  "shortName": "Федоров А. М.",
                  "fio": "Федоров Антон Михайлович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685211035169500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1666017470364783900,
                "title": "Теория решения изобретательских задач (пг1)"
              },
              "groups": [
                {
                  "id": 1671823357212890600,
                  "title": "3ТБб-02-1оп-20"
                },
                {
                  "id": 1671823433121404400,
                  "title": "3МТб-01-1оп-20"
                },
                {
                  "id": 1671822128479999500,
                  "title": "3ТТб-01-1оп-20"
                },
                {
                  "id": 1671823827303143000,
                  "title": "3НТТС-01-1оп-20"
                },
                {
                  "id": 1671823795820697000,
                  "title": "3ЭТМпб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490435408634319000,
                "title": "24"
              },
              "lecturers": [
                {
                  "id": 1430463259006211800,
                  "lastName": "Болобанова",
                  "firstName": "Наталия",
                  "middleName": "Леонидовна",
                  "shortName": "Болобанова Н. Л.",
                  "fio": "Болобанова Наталия Леонидовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685303348654800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1695917333968590000,
                "title": "Метрология и электроизмерения (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217165981200,
                  "title": "1ИБб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292969214200,
                "title": "615"
              },
              "lecturers": [
                {
                  "id": 1500589804791797500,
                  "lastName": "Каверин",
                  "firstName": "Олег",
                  "middleName": "Борисович",
                  "shortName": "Каверин О. Б.",
                  "fio": "Каверин Олег Борисович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749099820499202800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1632155836554941700,
                "title": "Практический курс первого иностранного языка (пг1)"
              },
              "groups": [
                {
                  "id": 1641737109227181600,
                  "title": "2ИЯб-09-1зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "онлайн"
              },
              "lecturers": [
                {
                  "id": 1421225556298438400,
                  "lastName": "Дунаевская",
                  "firstName": "Татьяна",
                  "middleName": "Алексеевна",
                  "shortName": "Дунаевская Т. А.",
                  "fio": "Дунаевская Татьяна Алексеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685246436143900,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1722931211552028000,
                "title": "Практикум по фонетике (английский язык)"
              },
              "groups": [
                {
                  "id": 1739582424538281500,
                  "title": "2Лб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292948242700,
                "title": "611"
              },
              "lecturers": [
                {
                  "id": 1424935794245638000,
                  "lastName": "Моисеенко",
                  "firstName": "Анна",
                  "middleName": "Валерьевна",
                  "shortName": "Моисеенко А. В.",
                  "fio": "Моисеенко Анна Валерьевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747293054080775000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696205978097161500,
                "title": "Структуры и алгоритмы обработки данных (пг1)"
              },
              "groups": [
                {
                  "id": 1705969217175418400,
                  "title": "1ПИб-01-2оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378724364500,
                "title": "228"
              },
              "lecturers": [
                {
                  "id": 1424939460407072500,
                  "lastName": "Пышницкий",
                  "firstName": "Константин",
                  "middleName": "Михайлович",
                  "shortName": "Пышницкий К. М.",
                  "fio": "Пышницкий Константин Михайлович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747030893800584000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696298838117062000,
                "title": "Психолого-педагогическая диагностика образовательной среды"
              },
              "groups": [
                {
                  "id": 1705969217250915800,
                  "title": "4ППОм-01-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "онлайн"
              },
              "lecturers": [
                {
                  "id": 1421062733269309200,
                  "lastName": "Арсенова",
                  "firstName": "Марина",
                  "middleName": "Алексеевна",
                  "shortName": "Арсенова М. А.",
                  "fio": "Арсенова Марина Алексеевна"
                }
              ],
              "abbrlessontype": "э",
              "lessontype": "Экз.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685212186506000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696200585705952500,
                "title": "Физическая культура и спорт (элективная дисциплина)"
              },
              "groups": [
                {
                  "id": 1705969217196390000,
                  "title": "7УПб-01-1оп-21"
                },
                {
                  "id": 1705969217195341300,
                  "title": "7Эб-05-1оп-21"
                },
                {
                  "id": 1705969217181709800,
                  "title": "9Бб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1492901605554525200,
                "title": "Спортивный корпус (ул.Труда,д.3)"
              },
              "auditory": {
                "id": 1493343626573386000,
                "title": "1/4"
              },
              "lecturers": [
                {
                  "id": 1644364336262551300,
                  "lastName": "Гаврикова",
                  "firstName": "Ольга",
                  "middleName": "Юрьевна",
                  "shortName": "Гаврикова О. Ю.",
                  "fio": "Гаврикова Ольга Юрьевна"
                },
                {
                  "id": 1421063152344242000,
                  "lastName": "Ашихмин",
                  "firstName": "Александр",
                  "middleName": "Николаевич",
                  "shortName": "Ашихмин А. Н.",
                  "fio": "Ашихмин Александр Николаевич"
                },
                {
                  "id": 1539005141793904400,
                  "lastName": "Алёшичева",
                  "firstName": "Александра",
                  "middleName": "Александровна",
                  "shortName": "Алёшичева А. А.",
                  "fio": "Алёшичева Александра Александровна"
                },
                {
                  "id": 1476843891371022000,
                  "lastName": "Осминкин",
                  "firstName": "Всеволод",
                  "middleName": "Ильич",
                  "shortName": "Осминкин В. И.",
                  "fio": "Осминкин Всеволод Ильич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685233638273800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696473012107220200,
                "title": "Методика начального литературного образования"
              },
              "groups": [
                {
                  "id": 1705969217212118500,
                  "title": "4ПДОб-19-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048795763000,
                "title": "825"
              },
              "lecturers": [
                {
                  "id": 1425479116566566700,
                  "lastName": "Чистякова",
                  "firstName": "Наталия",
                  "middleName": "Николаевна",
                  "shortName": "Чистякова Н. Н.",
                  "fio": "Чистякова Наталия Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685271205606100,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696208247189411000,
                "title": "Технология проектной деятельности"
              },
              "groups": [
                {
                  "id": 1705969217245673000,
                  "title": "2Дб-03-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292923076900,
                "title": "604"
              },
              "lecturers": [
                {
                  "id": 1472590680489465600,
                  "lastName": "Ловкова",
                  "firstName": "Екатерина",
                  "middleName": "Александровна",
                  "shortName": "Ловкова Е. А.",
                  "fio": "Ловкова Екатерина Александровна"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747577405506974500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Ознакомительная практика"
              },
              "groups": [
                {
                  "id": 1739582424509970000,
                  "title": "1ИСб-01-2оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378649915600,
                "title": "219"
              },
              "lecturers": [
                {
                  "id": 1421220781385324300,
                  "lastName": "Гонтарева",
                  "firstName": "Ирина",
                  "middleName": "Борисовна",
                  "shortName": "Гонтарева И. Б.",
                  "fio": "Гонтарева Ирина Борисовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685211192456000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1665206423591589000,
                "title": "Экономика продукта проекта. Модели монетизации (пг4)"
              },
              "groups": [
                {
                  "id": 1671817586681058800,
                  "title": "2Иб-00-1оп-20"
                },
                {
                  "id": 1671823357212890600,
                  "title": "3ТБб-02-1оп-20"
                },
                {
                  "id": 1671823827303143000,
                  "title": "3НТТС-01-1оп-20"
                },
                {
                  "id": 1671817437751809500,
                  "title": "2Лб-02-1оп-20"
                },
                {
                  "id": 1671816269488199200,
                  "title": "2Сб-00-1оп-20"
                },
                {
                  "id": 1671817830092248600,
                  "title": "2РТПб-01-1оп-20"
                },
                {
                  "id": 1671817216591402500,
                  "title": "2ПДОб-13-1оп-20"
                },
                {
                  "id": 1671823795820697000,
                  "title": "3ЭТМпб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490437674475983000,
                "title": "203"
              },
              "lecturers": [
                {
                  "id": 1552944620540794600,
                  "lastName": "Варзунова",
                  "firstName": "Вера",
                  "middleName": "Васильевна",
                  "shortName": "Варзунова В. В.",
                  "fio": "Варзунова Вера Васильевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685260577239800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1631700425777354000,
                "title": "Организация работы рекламного отдела и отдела по связям с общественностью"
              },
              "groups": [
                {
                  "id": 1641734136298215000,
                  "title": "2СОб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1471886253797414000,
                "title": "Учебно-лабораторный корпус № 3 (ул.М.Горького, 14)"
              },
              "auditory": {
                "id": 1491700663191605500,
                "title": "110"
              },
              "lecturers": [
                {
                  "id": 1425481467636488000,
                  "lastName": "Яковлева",
                  "firstName": "Надежда",
                  "middleName": "Ивановна",
                  "shortName": "Яковлева Н. И.",
                  "fio": "Яковлева Надежда Ивановна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685340036232000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1668478955216180500,
                "title": "Страхование"
              },
              "groups": [
                {
                  "id": 1641737034549696000,
                  "title": "7Эб-04-1зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1443889749481756400,
                  "lastName": "Кошелева",
                  "firstName": "Алена",
                  "middleName": "Владимировна",
                  "shortName": "Кошелева А. В.",
                  "fio": "Кошелева Алена Владимировна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685317487653600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727274974124569900,
                "title": "Химия"
              },
              "groups": [
                {
                  "id": 1739582424544573000,
                  "title": "3НТТС-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490364153823498500,
                "title": "402"
              },
              "lecturers": [
                {
                  "id": 1424933017158162200,
                  "lastName": "Кузнецова",
                  "firstName": "Юлия",
                  "middleName": "Сергеевна",
                  "shortName": "Кузнецова Ю. С.",
                  "fio": "Кузнецова Юлия Сергеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685311005356800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1665387619861665000,
                "title": "Иностранный язык в профессиональной сфере"
              },
              "groups": [
                {
                  "id": 1671820582751049200,
                  "title": "1ИТСб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346293012205800,
                "title": "623"
              },
              "lecturers": [
                {
                  "id": 1421217415231969000,
                  "lastName": "Вересова",
                  "firstName": "Маргарита",
                  "middleName": "Валентиновна",
                  "shortName": "Вересова М. В.",
                  "fio": "Вересова Маргарита Валентиновна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685298134086400,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1697106568682050800,
                "title": "Деловые коммуникации на русском языке"
              },
              "groups": [
                {
                  "id": 1705969217172272600,
                  "title": "3НТТС-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048724459800,
                "title": "810"
              },
              "lecturers": [
                {
                  "id": 1505925647773472500,
                  "lastName": "Дивеева",
                  "firstName": "Алина",
                  "middleName": "Альбертовна",
                  "shortName": "Дивеева А. А.",
                  "fio": "Дивеева Алина Альбертовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685283102749400,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1695736827428738300,
                "title": "Краеведение"
              },
              "groups": [
                {
                  "id": 1705969217177515500,
                  "title": "2Тб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254047453400,
                "title": "513"
              },
              "lecturers": [
                {
                  "id": 1421219443391862500,
                  "lastName": "Всеволодов",
                  "firstName": "Антон",
                  "middleName": "Владимирович",
                  "shortName": "Всеволодов А. В.",
                  "fio": "Всеволодов Антон Владимирович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685244541367000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696559272375096600,
                "title": "Спортивные и подвижные игры"
              },
              "groups": [
                {
                  "id": 1705969217199535600,
                  "title": "9ФКб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1490442417495610400,
                "title": "Спортивный комплекс \"Университетский\" (ул. Труда, 3)"
              },
              "auditory": {
                "id": 1671133117620949200,
                "title": "1"
              },
              "lecturers": [
                {
                  "id": 1425480254933178000,
                  "lastName": "Шкляр",
                  "firstName": "Ольга",
                  "middleName": "Брониславовна",
                  "shortName": "Шкляр О. Б.",
                  "fio": "Шкляр Ольга Брониславовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685312186053400,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727283716580832500,
                "title": "Физика"
              },
              "groups": [
                {
                  "id": 1739582424515212800,
                  "title": "3ХТб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254099882200,
                "title": "524"
              },
              "lecturers": [
                {
                  "id": 1505396873083492000,
                  "lastName": "Смирнов",
                  "firstName": "Валентин",
                  "middleName": "Владимирович",
                  "shortName": "Смирнов В. В.",
                  "fio": "Смирнов Валентин Владимирович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685230576431900,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1726282349481424100,
                "title": "Практический курс английского языка (пг1)"
              },
              "groups": [
                {
                  "id": 1739582424555058700,
                  "title": "2ПДОб-21-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254019142000,
                "title": "507"
              },
              "lecturers": [
                {
                  "id": 1421062942202271500,
                  "lastName": "Арюхина",
                  "firstName": "Елена",
                  "middleName": "Геннадьевна",
                  "shortName": "Арюхина Е. Г.",
                  "fio": "Арюхина Елена Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685261701313300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696371483952027000,
                "title": "Прикладные компьютерные программы в обработке социологических данных"
              },
              "groups": [
                {
                  "id": 1705969217197438500,
                  "title": "2Сб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254003413200,
                "title": "504"
              },
              "lecturers": [
                {
                  "id": 1421218736003618600,
                  "lastName": "Воробьева",
                  "firstName": "Ирина",
                  "middleName": "Николаевна",
                  "shortName": "Воробьева И. Н.",
                  "fio": "Воробьева Ирина Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685340059300600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696205977494230300,
                "title": "Теория автоматов и формальных языков (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217175418400,
                  "title": "1ПИб-01-2оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378633138400,
                "title": "217"
              },
              "lecturers": [
                {
                  "id": 1447872296193628000,
                  "lastName": "Ганичева",
                  "firstName": "Оксана",
                  "middleName": "Георгиевна",
                  "shortName": "Ганичева О. Г.",
                  "fio": "Ганичева Оксана Георгиевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747921788619060000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "проектное обучение"
              },
              "groups": [
                {
                  "id": 1671822913191286300,
                  "title": "3ЭЭб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1492619572869599500,
                "title": "31"
              },
              "lecturers": [
                {
                  "id": 1425474675677337300,
                  "lastName": "Сидорова",
                  "firstName": "Инна",
                  "middleName": "Владимировна",
                  "shortName": "Сидорова И. В.",
                  "fio": "Сидорова Инна Владимировна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685238708138800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696552648983975200,
                "title": "Теоретическая механика"
              },
              "groups": [
                {
                  "id": 1705969217191147000,
                  "title": "3СТб-04-1оп-21"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903835537700,
                "title": "57"
              },
              "lecturers": [
                {
                  "id": 1424483270625597200,
                  "lastName": "Клинов",
                  "firstName": "Александр",
                  "middleName": "Владимирович",
                  "shortName": "Клинов А. В.",
                  "fio": "Клинов Александр Владимирович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747916497881002800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "проектное обучение"
              },
              "groups": [
                {
                  "id": 1671820552772261400,
                  "title": "4ПСб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292930417000,
                "title": "606"
              },
              "lecturers": [
                {
                  "id": 1425476194401261300,
                  "lastName": "Табунов",
                  "firstName": "Иван",
                  "middleName": "Александрович",
                  "shortName": "Табунов И. А.",
                  "fio": "Табунов Иван Александрович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748839772911956700,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1631859901515961600,
                "title": "Технологии интерактивного дизайна и инфографика"
              },
              "groups": [
                {
                  "id": 1641734658765887000,
                  "title": "2Дб-03-1зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1643564843915024100,
                  "lastName": "Шигорина",
                  "firstName": "Виктория",
                  "middleName": "Николаевна",
                  "shortName": "Шигорина В. Н.",
                  "fio": "Шигорина Виктория Николаевна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685317040960300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727369702375552300,
                "title": "Безопасность жизнедеятельности (пг1)"
              },
              "groups": [
                {
                  "id": 1739582424522552800,
                  "title": "1АПб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903827149000,
                "title": "55"
              },
              "lecturers": [
                {
                  "id": 1733621848817399600,
                  "lastName": "Горохова",
                  "firstName": "Татьяна",
                  "middleName": "Юрьевна",
                  "shortName": "Горохова Т. Ю.",
                  "fio": "Горохова Татьяна Юрьевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749178445364851500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696461450549138700,
                "title": "Сценарное мастерство"
              },
              "groups": [
                {
                  "id": 1705969217248818700,
                  "title": "2РТПб-01-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1421224373890586400,
                  "lastName": "Дергачев",
                  "firstName": "Евгений",
                  "middleName": "Иванович",
                  "shortName": "Дергачев Е. И.",
                  "fio": "Дергачев Евгений Иванович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685303092802300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1695917322109195500,
                "title": "Теория информации (пг1)"
              },
              "groups": [
                {
                  "id": 1705969217165981200,
                  "title": "1ИБб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346293021643000,
                "title": "625"
              },
              "lecturers": [
                {
                  "id": 1425475779845691100,
                  "lastName": "Стародубцев",
                  "firstName": "Денис",
                  "middleName": "Евгеньевич",
                  "shortName": "Стародубцев Д. Е.",
                  "fio": "Стародубцев Денис Евгеньевич"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685344978170600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1665386300261275000,
                "title": "Графические системы и языки"
              },
              "groups": [
                {
                  "id": 1671820801044649500,
                  "title": "1ИСб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488369326572441900,
                "title": "218а"
              },
              "lecturers": [
                {
                  "id": 1472314025600620300,
                  "lastName": "Табунов",
                  "firstName": "Павел",
                  "middleName": "Александрович",
                  "shortName": "Табунов П. А.",
                  "fio": "Табунов Павел Александрович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749181325194949400,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1695839342339036400,
                "title": "Психология медиакоммуникаций"
              },
              "groups": [
                {
                  "id": 1705969217241478700,
                  "title": "2ЖУРб-00-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1634137917545781000,
                  "lastName": "Максимова",
                  "firstName": "Татьяна",
                  "middleName": "Николаевна",
                  "shortName": "Максимова Т. Н.",
                  "fio": "Максимова Татьяна Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685280631255800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696468906860877000,
                "title": "История русской литературы"
              },
              "groups": [
                {
                  "id": 1705969217225750000,
                  "title": "2ПДОб-13-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048685662500,
                "title": "802"
              },
              "lecturers": [
                {
                  "id": 1425476950857619200,
                  "lastName": "Трубицына",
                  "firstName": "Мария",
                  "middleName": "Юрьевна",
                  "shortName": "Трубицына М. Ю.",
                  "fio": "Трубицына Мария Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747929180828201700,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "проектное обучение"
              },
              "groups": [
                {
                  "id": 1641743302326752800,
                  "title": "3ЭЭб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1492619572869599500,
                "title": "31"
              },
              "lecturers": [
                {
                  "id": 1425474675677337300,
                  "lastName": "Сидорова",
                  "firstName": "Инна",
                  "middleName": "Владимировна",
                  "shortName": "Сидорова И. В.",
                  "fio": "Сидорова Инна Владимировна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685295673078500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1667372565336692000,
                "title": "Проектирование предприятий по техническому сервису автомобилей"
              },
              "groups": [
                {
                  "id": 1641742924249044500,
                  "title": "3ЭТМпб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903822954800,
                "title": "54"
              },
              "lecturers": [
                {
                  "id": 1424936495844693800,
                  "lastName": "Николаев",
                  "firstName": "Василий",
                  "middleName": "Васильевич",
                  "shortName": "Николаев В. В.",
                  "fio": "Николаев Василий Васильевич"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685330027574000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1729344507440133400,
                "title": "Юридические основы предпринимательства"
              },
              "groups": [
                {
                  "id": 1641829272027928000,
                  "title": "1УТСб-02-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624631271700,
                "title": "320"
              },
              "lecturers": [
                {
                  "id": 1424933743597983500,
                  "lastName": "Ларичев",
                  "firstName": "Андрей",
                  "middleName": "Витальевич",
                  "shortName": "Ларичев А. В.",
                  "fio": "Ларичев Андрей Витальевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685264530371300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696381667098236200,
                "title": "Социальная психология"
              },
              "groups": [
                {
                  "id": 1705969217229944300,
                  "title": "2СРб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254028579000,
                "title": "509"
              },
              "lecturers": [
                {
                  "id": 1513183652125611800,
                  "lastName": "Смирнова",
                  "firstName": "Елена",
                  "middleName": "Алексеевна",
                  "shortName": "Смирнова Е. А.",
                  "fio": "Смирнова Елена Алексеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685321456513800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1727277659983836400,
                "title": "Иностранный язык (англ)"
              },
              "groups": [
                {
                  "id": 1739582424573933000,
                  "title": "3МТб-03-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048808345900,
                "title": "828"
              },
              "lecturers": [
                {
                  "id": 1429371784578209500,
                  "lastName": "Исаева",
                  "firstName": "Мария",
                  "middleName": "Геннадьевна",
                  "shortName": "Исаева М. Г.",
                  "fio": "Исаева Мария Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685269880206000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1682591904265409800,
                "title": "Социология глобализации"
              },
              "groups": [
                {
                  "id": 1641733989795370500,
                  "title": "2Сб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923984093400,
                "title": "713"
              },
              "lecturers": [
                {
                  "id": 1487089376426989300,
                  "lastName": "Аула",
                  "firstName": "Екатерина",
                  "middleName": "Романовна",
                  "shortName": "Аула Е. Р.",
                  "fio": "Аула Екатерина Романовна"
                }
              ],
              "abbrlessontype": "икр",
              "lessontype": "Иная конт.раб.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685221538755300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1722476065400419600,
                "title": "Основы производства материалов"
              },
              "groups": [
                {
                  "id": 1739582424569738800,
                  "title": "4ПДОб-20-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624634417400,
                "title": "321"
              },
              "lecturers": [
                {
                  "id": 1424935547273484000,
                  "lastName": "Мироненко",
                  "firstName": "Светлана",
                  "middleName": "Николаевна",
                  "shortName": "Мироненко С. Н.",
                  "fio": "Мироненко Светлана Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685258045977300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1723180314593719600,
                "title": "Социология науки и образования"
              },
              "groups": [
                {
                  "id": 1739582424535135700,
                  "title": "2Сб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345253992927500,
                "title": "502"
              },
              "lecturers": [
                {
                  "id": 1425475707191957200,
                  "lastName": "Спирина",
                  "firstName": "Дарья",
                  "middleName": "Васильевна",
                  "shortName": "Спирина Д. В.",
                  "fio": "Спирина Дарья Васильевна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685312830927600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1724815207709930800,
                "title": "Игровая культура и праздник"
              },
              "groups": [
                {
                  "id": 1739582424526747100,
                  "title": "2РТПб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488365888710119700,
                "title": "201"
              },
              "lecturers": [
                {
                  "id": 1421218168724002600,
                  "lastName": "Владимирова",
                  "firstName": "Ольга",
                  "middleName": "Александровна",
                  "shortName": "Владимирова О. А.",
                  "fio": "Владимирова Ольга Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748192944634852000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Вакцинация от гриппа"
              },
              "groups": [
                {
                  "id": 1671815577865295400,
                  "title": "7ЭБ-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1491992159538123000,
                "title": "103"
              },
              "lecturers": [
                {
                  "id": 1747850345543759600,
                  "lastName": "Пукело",
                  "firstName": "Елена",
                  "middleName": "Вячеславовна",
                  "shortName": "Пукело Е. В.",
                  "fio": "Пукело Елена Вячеславовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747911468566573800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1641826461326251500,
                  "title": "1РФб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776451219700,
                "title": "416"
              },
              "lecturers": [
                {
                  "id": 1492790427106940700,
                  "lastName": "Федоров",
                  "firstName": "Дмитрий",
                  "middleName": "Сергеевич",
                  "shortName": "Федоров Д. С.",
                  "fio": "Федоров Дмитрий Сергеевич"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749114690793763600,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1665834630669931800,
                "title": "Актуальные тенденции коммуникативного дизайна"
              },
              "groups": [
                {
                  "id": 1671817906535536000,
                  "title": "2Дб-03-1зп-20"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1421219906975700700,
                  "lastName": "Галунова",
                  "firstName": "Светлана",
                  "middleName": "Николаевна",
                  "shortName": "Галунова С. Н.",
                  "fio": "Галунова Светлана Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685242039464700,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1630503591206720800,
                "title": "Технология карьеры"
              },
              "groups": [
                {
                  "id": 1641733818512578000,
                  "title": "4ПДОб-19-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048783180000,
                "title": "822"
              },
              "lecturers": [
                {
                  "id": 1448967915303868200,
                  "lastName": "Рогожникова",
                  "firstName": "Светлана",
                  "middleName": "Мугумаевна",
                  "shortName": "Рогожникова С. М.",
                  "fio": "Рогожникова Светлана Мугумаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685302140695300,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1726901590867965200,
                "title": "Введение в цифровую культуру (пг1)"
              },
              "groups": [
                {
                  "id": 1739582424505775600,
                  "title": "1ПИб-02-3оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378640478500,
                "title": "218"
              },
              "lecturers": [
                {
                  "id": 1425490815175628500,
                  "lastName": "Журавлева",
                  "firstName": "Юлия",
                  "middleName": "Михайловна",
                  "shortName": "Журавлева Ю. М.",
                  "fio": "Журавлева Юлия Михайловна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685294620308200,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696361001347192000,
                "title": "Физическая культура и спорт (элективная дисциплина)"
              },
              "groups": [
                {
                  "id": 1705969217222604300,
                  "title": "7ЭБ-01-1оп-21"
                }
              ],
              "build": {
                "id": 1492901605554525200,
                "title": "Спортивный корпус (ул.Труда,д.3)"
              },
              "auditory": {
                "id": 1493343626573386000,
                "title": "1/4"
              },
              "lecturers": [
                {
                  "id": 1421061061842311000,
                  "lastName": "Алешина",
                  "firstName": "Елена",
                  "middleName": "Ивановна",
                  "shortName": "Алешина Е. И.",
                  "fio": "Алешина Елена Ивановна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685318271988500,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1695734762047542500,
                "title": "Стилистика и литературное редактирование"
              },
              "groups": [
                {
                  "id": 1705969217240430000,
                  "title": "2ЖУРб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624637563100,
                "title": "322"
              },
              "lecturers": [
                {
                  "id": 1396217058267502300,
                  "lastName": "Иванова",
                  "firstName": "Елена",
                  "middleName": "Михайловна",
                  "shortName": "Иванова Е. М.",
                  "fio": "Иванова Елена Михайловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685210868446000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1666652154101765400,
                "title": "Лидерство и управление командой (пг5)"
              },
              "groups": [
                {
                  "id": 1671823357212890600,
                  "title": "3ТБб-02-1оп-20"
                },
                {
                  "id": 1671823433121404400,
                  "title": "3МТб-01-1оп-20"
                },
                {
                  "id": 1671822128479999500,
                  "title": "3ТТб-01-1оп-20"
                },
                {
                  "id": 1671823827303143000,
                  "title": "3НТТС-01-1оп-20"
                },
                {
                  "id": 1671823795820697000,
                  "title": "3ЭТМпб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048777937200,
                "title": "821"
              },
              "lecturers": [
                {
                  "id": 1431202970135959300,
                  "lastName": "Балюшина",
                  "firstName": "Юлия",
                  "middleName": "Львовна",
                  "shortName": "Балюшина Ю. Л.",
                  "fio": "Балюшина Юлия Львовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685230292267800,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1726282327231690000,
                "title": "Немецкий язык (пг2)"
              },
              "groups": [
                {
                  "id": 1739582424555058700,
                  "title": "2ПДОб-21-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776483725600,
                "title": "424"
              },
              "lecturers": [
                {
                  "id": 1424935322677942000,
                  "lastName": "Межецкая",
                  "firstName": "Галина",
                  "middleName": "Николаевна",
                  "shortName": "Межецкая Г. Н.",
                  "fio": "Межецкая Галина Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747747985538544400,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1671818050910819800,
                  "title": "2Дб-03-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1492089330440606000,
                "title": "302"
              },
              "lecturers": [
                {
                  "id": 1425477744641185500,
                  "lastName": "Филиппова",
                  "firstName": "Вера",
                  "middleName": "Ивановна",
                  "shortName": "Филиппова В. И.",
                  "fio": "Филиппова Вера Ивановна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685252825117400,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1631794609322464500,
                "title": "Новые физкультурно-спортивные виды"
              },
              "groups": [
                {
                  "id": 1641735286599718400,
                  "title": "9ФКб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1490442417495610400,
                "title": "Спортивный комплекс \"Университетский\" (ул. Труда, 3)"
              },
              "auditory": {
                "id": 1671133117620949200,
                "title": "1"
              },
              "lecturers": [
                {
                  "id": 1478211816264832800,
                  "lastName": "Подоляка",
                  "firstName": "Олег",
                  "middleName": "Борисович",
                  "shortName": "Подоляка О. Б.",
                  "fio": "Подоляка Олег Борисович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685301139305200,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1726901588739356000,
                "title": "Безопасность жизнедеятельности (пг1)"
              },
              "groups": [
                {
                  "id": 1739582424503678500,
                  "title": "1ПИб-02-1оп-22"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903818760400,
                "title": "53"
              },
              "lecturers": [
                {
                  "id": 1424931426906675000,
                  "lastName": "Кочнев",
                  "firstName": "Александр",
                  "middleName": "Олегович",
                  "shortName": "Кочнев А. О.",
                  "fio": "Кочнев Александр Олегович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685338718172000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1584140473417602300,
                "title": "Инновационный менеджмент"
              },
              "groups": [
                {
                  "id": 1609396466053289500,
                  "title": "7ГМУб-00-1зп-18"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1425477168074332000,
                  "lastName": "Тюлю",
                  "firstName": "Галина",
                  "middleName": "Михайловна",
                  "shortName": "Тюлю Г. М.",
                  "fio": "Тюлю Галина Михайловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685343026770700,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1695725069311939800,
                "title": "Философия"
              },
              "groups": [
                {
                  "id": 1705969217244624400,
                  "title": "2Лб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292933562600,
                "title": "607"
              },
              "lecturers": [
                {
                  "id": 1425475155715430100,
                  "lastName": "Смирнова",
                  "firstName": "Ольга",
                  "middleName": "Вениаминовна",
                  "shortName": "Смирнова О. В.",
                  "fio": "Смирнова Ольга Вениаминовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685231335601000,
              "dateEvent": "23.11.2022",
              "startTime": "10:10",
              "endTime": "11:40",
              "discipline": {
                "id": 1696360508113819000,
                "title": "Источниковедение"
              },
              "groups": [
                {
                  "id": 1705969217224701400,
                  "title": "2ПДОб-14-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520914678000,
                "title": "906"
              },
              "lecturers": [
                {
                  "id": 1421225821027178200,
                  "lastName": "Егоров",
                  "firstName": "Андрей",
                  "middleName": "Николаевич",
                  "shortName": "Егоров А. Н.",
                  "fio": "Егоров Андрей Николаевич"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747917144046039800,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "проектное обучение"
              },
              "groups": [
                {
                  "id": 1671820629673776600,
                  "title": "4ПСД-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292930417000,
                "title": "606"
              },
              "lecturers": [
                {
                  "id": 1425476194401261300,
                  "lastName": "Табунов",
                  "firstName": "Иван",
                  "middleName": "Александрович",
                  "shortName": "Табунов И. А.",
                  "fio": "Табунов Иван Александрович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747826824010658600,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "проектное обучение"
              },
              "groups": [
                {
                  "id": 1641733818512578000,
                  "title": "4ПДОб-19-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048799957200,
                "title": "826"
              },
              "lecturers": [
                {
                  "id": 1424933758956476200,
                  "lastName": "Лашкова",
                  "firstName": "Галина",
                  "middleName": "Николаевна",
                  "shortName": "Лашкова Г. Н.",
                  "fio": "Лашкова Галина Николаевна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748192905806082800,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Вакцинация от гриппа"
              },
              "groups": [
                {
                  "id": 1705969217206875600,
                  "title": "3ТМб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1491992159538123000,
                "title": "103"
              },
              "lecturers": [
                {
                  "id": 1747850345543759600,
                  "lastName": "Пукело",
                  "firstName": "Елена",
                  "middleName": "Вячеславовна",
                  "shortName": "Пукело Е. В.",
                  "fio": "Пукело Елена Вячеславовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685244833919700,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696559267657553200,
                "title": "Профессионально-спортивное совершенствование"
              },
              "groups": [
                {
                  "id": 1705969217199535600,
                  "title": "9ФКб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1490442417495610400,
                "title": "Спортивный комплекс \"Университетский\" (ул. Труда, 3)"
              },
              "auditory": {
                "id": 1671133117620949200,
                "title": "1"
              },
              "lecturers": [
                {
                  "id": 1449774890546632400,
                  "lastName": "Мясникова",
                  "firstName": "Татьяна",
                  "middleName": "Борисовна",
                  "shortName": "Мясникова Т. Б.",
                  "fio": "Мясникова Татьяна Борисовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685210478375700,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1665206419934156000,
                "title": "Дизайн-мышление. Методология работы с клиентом (пг4)"
              },
              "groups": [
                {
                  "id": 1671815449735599600,
                  "title": "7Эб-05-1оп-20"
                },
                {
                  "id": 1671815510729168400,
                  "title": "7УПпб-01-1оп-20"
                },
                {
                  "id": 1671815577865295400,
                  "title": "7ЭБ-01-1оп-20"
                },
                {
                  "id": 1671825067435103700,
                  "title": "9Бб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490437674469691600,
                "title": "202"
              },
              "lecturers": [
                {
                  "id": 1478026529608832800,
                  "lastName": "Ковшикова",
                  "firstName": "Галина",
                  "middleName": "Александровна",
                  "shortName": "Ковшикова Г. А.",
                  "fio": "Ковшикова Галина Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685233013322500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696470520024798500,
                "title": "Организация добровольческой (волонтерской) деятельности и взаимодействие с социально-ориентированным НКО"
              },
              "groups": [
                {
                  "id": 1705969217230993000,
                  "title": "1ПДОб-15-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048724459800,
                "title": "810"
              },
              "lecturers": [
                {
                  "id": 1424938360835676000,
                  "lastName": "Попова",
                  "firstName": "Светлана",
                  "middleName": "Игоревна",
                  "shortName": "Попова С. И.",
                  "fio": "Попова Светлана Игоревна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747822824316072700,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1671817216591402500,
                  "title": "2ПДОб-13-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254075765000,
                "title": "519"
              },
              "lecturers": [
                {
                  "id": 1424935724681009000,
                  "lastName": "Мельникова",
                  "firstName": "Наталия",
                  "middleName": "Георгиевна",
                  "shortName": "Мельникова Н. Г.",
                  "fio": "Мельникова Наталия Георгиевна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747822185447027500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1671817216591402500,
                  "title": "2ПДОб-13-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923964170500,
                "title": "708"
              },
              "lecturers": [
                {
                  "id": 1421218829281793800,
                  "lastName": "Воробьева",
                  "firstName": "Татьяна",
                  "middleName": "Алексеевна",
                  "shortName": "Воробьева Т. А.",
                  "fio": "Воробьева Татьяна Алексеевна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685284627379000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1695736821655278800,
                "title": "Политология"
              },
              "groups": [
                {
                  "id": 1705969217177515500,
                  "title": "2Тб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254047453400,
                "title": "513"
              },
              "lecturers": [
                {
                  "id": 1424934984009914000,
                  "lastName": "Марков",
                  "firstName": "Евгений",
                  "middleName": "Алфеевич",
                  "shortName": "Марков Е. А.",
                  "fio": "Марков Евгений Алфеевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747666785662792400,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1666027127941633300,
                "title": "Базы данных (пг1)"
              },
              "groups": [
                {
                  "id": 1671820835577403000,
                  "title": "1ПИб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378709684500,
                "title": "227"
              },
              "lecturers": [
                {
                  "id": 1425474223841744600,
                  "lastName": "Селяничев",
                  "firstName": "Олег",
                  "middleName": "Леонидович",
                  "shortName": "Селяничев О. Л.",
                  "fio": "Селяничев Олег Леонидович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685284738528000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1695736826375968000,
                "title": "Межличностные коммуникации"
              },
              "groups": [
                {
                  "id": 1709866160850073000,
                  "title": "2Тб-00-2оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776444928300,
                "title": "414"
              },
              "lecturers": [
                {
                  "id": 1424936606865823500,
                  "lastName": "Новиков",
                  "firstName": "Алексей",
                  "middleName": "Евгеньевич",
                  "shortName": "Новиков А. Е.",
                  "fio": "Новиков Алексей Евгеньевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685319105606400,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727272721829459200,
                "title": "Прикладная математика"
              },
              "groups": [
                {
                  "id": 1739582424523601400,
                  "title": "3ТБб-02-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254079959300,
                "title": "520"
              },
              "lecturers": [
                {
                  "id": 1504047283669309200,
                  "lastName": "Чуев",
                  "firstName": "Антон",
                  "middleName": "Андреевич",
                  "shortName": "Чуев А. А.",
                  "fio": "Чуев Антон Андреевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685231028368100,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696458019660895500,
                "title": "Нечеткая логика"
              },
              "groups": [
                {
                  "id": 1705969217226798600,
                  "title": "1ПМб-02-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624670069000,
                "title": "331"
              },
              "lecturers": [
                {
                  "id": 1424937863291606800,
                  "lastName": "Плотникова",
                  "firstName": "Надежда",
                  "middleName": "Валентиновна",
                  "shortName": "Плотникова Н. В.",
                  "fio": "Плотникова Надежда Валентиновна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685325488288500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696291534768444700,
                "title": "Информатика и информационные технологии"
              },
              "groups": [
                {
                  "id": 1705969217194292700,
                  "title": "1АПпб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624649097500,
                "title": "325"
              },
              "lecturers": [
                {
                  "id": 1449506849968625400,
                  "lastName": "Чижов",
                  "firstName": "Антон",
                  "middleName": "Сергеевич",
                  "shortName": "Чижов А. С.",
                  "fio": "Чижов Антон Сергеевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747910758476149500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1671820989144503800,
                  "title": "1ПМб-02-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1671012604089209000,
                "title": "301г"
              },
              "lecturers": [
                {
                  "id": 1448877800173868800,
                  "lastName": "Венедиктов",
                  "firstName": "Максим",
                  "middleName": "Ильич",
                  "shortName": "Венедиктов М. И.",
                  "fio": "Венедиктов Максим Ильич"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685237457187600,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727259975602795800,
                "title": "Иностранный язык (англ пг2)"
              },
              "groups": [
                {
                  "id": 1739582424539330000,
                  "title": "1ПДОб-15-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520918872300,
                "title": "907"
              },
              "lecturers": [
                {
                  "id": 1729906009590069000,
                  "lastName": "Чуева",
                  "firstName": "Мария",
                  "middleName": "Викторовна",
                  "shortName": "Чуева М. В.",
                  "fio": "Чуева Мария Викторовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685237444604700,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727259975602795800,
                "title": "Иностранный язык (англ пг1)"
              },
              "groups": [
                {
                  "id": 1739582424539330000,
                  "title": "1ПДОб-15-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520911532300,
                "title": "905"
              },
              "lecturers": [
                {
                  "id": 1421062942202271500,
                  "lastName": "Арюхина",
                  "firstName": "Елена",
                  "middleName": "Геннадьевна",
                  "shortName": "Арюхина Е. Г.",
                  "fio": "Арюхина Елена Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685296604214000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727277909018539300,
                "title": "Алгебра и геометрия"
              },
              "groups": [
                {
                  "id": 1739582424512067000,
                  "title": "1ИТСб-00-2оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776429199600,
                "title": "409"
              },
              "lecturers": [
                {
                  "id": 1704067497327458000,
                  "lastName": "Лаптева",
                  "firstName": "Екатерина",
                  "middleName": "Сергеевна",
                  "shortName": "Лаптева Е. С.",
                  "fio": "Лаптева Екатерина Сергеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685257951605500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1723180311807653000,
                "title": "Правоведение"
              },
              "groups": [
                {
                  "id": 1739582424535135700,
                  "title": "2Сб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048808345900,
                "title": "828"
              },
              "lecturers": [
                {
                  "id": 1407096877962237700,
                  "lastName": "Сидоренкова",
                  "firstName": "Кристина",
                  "middleName": "Александровна",
                  "shortName": "Сидоренкова К. А.",
                  "fio": "Сидоренкова Кристина Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685279437976300,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727275587089593600,
                "title": "Иностранный язык (англ пг1)"
              },
              "groups": [
                {
                  "id": 1739582424525698600,
                  "title": "1ИБб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520941941000,
                "title": "913"
              },
              "lecturers": [
                {
                  "id": 1421061661793458000,
                  "lastName": "Андреева",
                  "firstName": "Татьяна",
                  "middleName": "Анатольевна",
                  "shortName": "Андреева Т. А.",
                  "fio": "Андреева Татьяна Анатольевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747577405932696300,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Ознакомительная практика"
              },
              "groups": [
                {
                  "id": 1739582424503678500,
                  "title": "1ПИб-02-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378649915600,
                "title": "219"
              },
              "lecturers": [
                {
                  "id": 1421220781385324300,
                  "lastName": "Гонтарева",
                  "firstName": "Ирина",
                  "middleName": "Борисовна",
                  "shortName": "Гонтарева И. Б.",
                  "fio": "Гонтарева Ирина Борисовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749096170474304300,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1699721152515446000,
                "title": "Музыка в театрализованных представлениях"
              },
              "groups": [
                {
                  "id": 1671817775651231200,
                  "title": "2РТПб-01-1зп-20"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1421218168724002600,
                  "lastName": "Владимирова",
                  "firstName": "Ольга",
                  "middleName": "Александровна",
                  "shortName": "Владимирова О. А.",
                  "fio": "Владимирова Ольга Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685283738186500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1631607623427036400,
                "title": "Большой практикум по ботанике и зоологии (пг2)"
              },
              "groups": [
                {
                  "id": 1641736941696194000,
                  "title": "9Бб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520895803600,
                "title": "901"
              },
              "lecturers": [
                {
                  "id": 1539181737125353200,
                  "lastName": "Трошин",
                  "firstName": "Дмитрий",
                  "middleName": "Сергеевич",
                  "shortName": "Трошин Д. С.",
                  "fio": "Трошин Дмитрий Сергеевич"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685338446590700,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696201889223284000,
                "title": "Деловые коммуникации на русском языке"
              },
              "groups": [
                {
                  "id": 1705969217163884000,
                  "title": "1ИСб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378744287500,
                "title": "229"
              },
              "lecturers": [
                {
                  "id": 1467259902987605800,
                  "lastName": "Сальникова",
                  "firstName": "Ольга",
                  "middleName": "Сергеевна",
                  "shortName": "Сальникова О. С.",
                  "fio": "Сальникова Ольга Сергеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685287984919300,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1667368850460513500,
                "title": "Расчет и проектирование систем безопасности труда"
              },
              "groups": [
                {
                  "id": 1641742799740081700,
                  "title": "3ТБб-02-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903822954800,
                "title": "54"
              },
              "lecturers": [
                {
                  "id": 1421226191729203000,
                  "lastName": "Ермилов",
                  "firstName": "Владимир",
                  "middleName": "Витальевич",
                  "shortName": "Ермилов В. В.",
                  "fio": "Ермилов Владимир Витальевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748828800134542000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696547104430757000,
                "title": "Практическая грамматика первого иностранного языка (пг1)"
              },
              "groups": [
                {
                  "id": 1705969217198487000,
                  "title": "2ИЯб-09-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1425475991588837000,
                  "lastName": "Суворова",
                  "firstName": "Наталья",
                  "middleName": "Леонидовна",
                  "shortName": "Суворова Н. Л.",
                  "fio": "Суворова Наталья Леонидовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1747292890542764800,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696205978097161500,
                "title": "Структуры и алгоритмы обработки данных (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217174369800,
                  "title": "1ПИб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378724364500,
                "title": "228"
              },
              "lecturers": [
                {
                  "id": 1424939460407072500,
                  "lastName": "Пышницкий",
                  "firstName": "Константин",
                  "middleName": "Михайлович",
                  "shortName": "Пышницкий К. М.",
                  "fio": "Пышницкий Константин Михайлович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685312201782000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727283716580832500,
                "title": "Физика"
              },
              "groups": [
                {
                  "id": 1739582424515212800,
                  "title": "3ХТб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254099882200,
                "title": "524"
              },
              "lecturers": [
                {
                  "id": 1505396873083492000,
                  "lastName": "Смирнов",
                  "firstName": "Валентин",
                  "middleName": "Владимирович",
                  "shortName": "Смирнов В. В.",
                  "fio": "Смирнов Валентин Владимирович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685258524128000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1631703562548417800,
                "title": "Конструирование и проектирование графического продукта"
              },
              "groups": [
                {
                  "id": 1641734575543555600,
                  "title": "2Дб-03-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624637563100,
                "title": "322"
              },
              "lecturers": [
                {
                  "id": 1425477744641185500,
                  "lastName": "Филиппова",
                  "firstName": "Вера",
                  "middleName": "Ивановна",
                  "shortName": "Филиппова В. И.",
                  "fio": "Филиппова Вера Ивановна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685328325735200,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1602435185869067500,
                "title": "Контроль и ревизия"
              },
              "groups": [
                {
                  "id": 1609302546088728000,
                  "title": "7ЭБ-01-1оп-18"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1710344616300902100,
                  "lastName": "Малкова",
                  "firstName": "Ирина",
                  "middleName": "Алфеевна",
                  "shortName": "Малкова И. А.",
                  "fio": "Малкова Ирина Алфеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685281172321000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1634755372448224500,
                "title": "Скульптурно-пластическое моделирование"
              },
              "groups": [
                {
                  "id": 1641743792550712800,
                  "title": "3ДАСб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490353917950693600,
                "title": "201"
              },
              "lecturers": [
                {
                  "id": 1424931792252573400,
                  "lastName": "Краузе",
                  "firstName": "Елена",
                  "middleName": "Сергеевна",
                  "shortName": "Краузе Е. С.",
                  "fio": "Краузе Елена Сергеевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685230695969500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696479536065025300,
                "title": "Методы обработки экспериментальных данных"
              },
              "groups": [
                {
                  "id": 1705969217227847200,
                  "title": "1ПМб-03-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776407179500,
                "title": "402"
              },
              "lecturers": [
                {
                  "id": 1424937390007392000,
                  "lastName": "Парыгина",
                  "firstName": "Светлана",
                  "middleName": "Александровна",
                  "shortName": "Парыгина С. А.",
                  "fio": "Парыгина Светлана Александровна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685226384225000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696475986041771300,
                "title": "Философия"
              },
              "groups": [
                {
                  "id": 1705969217243575800,
                  "title": "2ПДОб-21-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488365888719556900,
                "title": "203"
              },
              "lecturers": [
                {
                  "id": 1425475155715430100,
                  "lastName": "Смирнова",
                  "firstName": "Ольга",
                  "middleName": "Вениаминовна",
                  "shortName": "Смирнова О. В.",
                  "fio": "Смирнова Ольга Вениаминовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685272549880600,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1632221808672380200,
                "title": "Практикум по устной речи (пг1)"
              },
              "groups": [
                {
                  "id": 1641732085136758300,
                  "title": "2Лб-02-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923956830500,
                "title": "706"
              },
              "lecturers": [
                {
                  "id": 1425479757823219500,
                  "lastName": "Швец",
                  "firstName": "Варвара",
                  "middleName": "Михайловна",
                  "shortName": "Швец В. М.",
                  "fio": "Швец Варвара Михайловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685336983827200,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1665307170144523500,
                "title": "Дизайн-мышление. Методология работы с клиентом"
              },
              "groups": [
                {
                  "id": 1641737307430065700,
                  "title": "7Мпб-00-1зп-19"
                },
                {
                  "id": 1646196032871077400,
                  "title": "7Мпб-00-2зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1466623234877167400,
                  "lastName": "Крылова",
                  "firstName": "Наталья",
                  "middleName": "Павловна",
                  "shortName": "Крылова Н. П.",
                  "fio": "Крылова Наталья Павловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685261928854300,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696371461149693200,
                "title": "Иностранный язык (англ пг1)"
              },
              "groups": [
                {
                  "id": 1705969217197438500,
                  "title": "2Сб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048817783000,
                "title": "830"
              },
              "lecturers": [
                {
                  "id": 1424935579290703600,
                  "lastName": "Миронова",
                  "firstName": "Эльвира",
                  "middleName": "Геннадьевна",
                  "shortName": "Миронова Э. Г.",
                  "fio": "Миронова Эльвира Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685299485700900,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1667015266942326000,
                "title": "Дигностика оборудования"
              },
              "groups": [
                {
                  "id": 1671822913191286300,
                  "title": "3ЭЭб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436480239145200,
                "title": "45"
              },
              "lecturers": [
                {
                  "id": 1429938891028174600,
                  "lastName": "Кожевников",
                  "firstName": "Александр",
                  "middleName": "Вячеславович",
                  "shortName": "Кожевников А. В.",
                  "fio": "Кожевников Александр Вячеславович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685272656835300,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727264184536528100,
                "title": "Введение в профессиональную деятельность"
              },
              "groups": [
                {
                  "id": 1739582424576030200,
                  "title": "3ДАСб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490353917954888000,
                "title": "202"
              },
              "lecturers": [
                {
                  "id": 1421064315681642200,
                  "lastName": "Белановская",
                  "firstName": "Елена",
                  "middleName": "Вячеславовна",
                  "shortName": "Белановская Е. В.",
                  "fio": "Белановская Елена Вячеславовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685246863963000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696562645082051800,
                "title": "Теория и методика обучения спортивным и подвижным играм"
              },
              "groups": [
                {
                  "id": 1705969217214215700,
                  "title": "9АФКб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1490442417495610400,
                "title": "Спортивный комплекс \"Университетский\" (ул. Труда, 3)"
              },
              "auditory": {
                "id": 1671133117620949200,
                "title": "1"
              },
              "lecturers": [
                {
                  "id": 1573443231403743000,
                  "lastName": "Федоров",
                  "firstName": "Антон",
                  "middleName": "Михайлович",
                  "shortName": "Федоров А. М.",
                  "fio": "Федоров Антон Михайлович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685290864309000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727277908101035300,
                "title": "Математический анализ"
              },
              "groups": [
                {
                  "id": 1739582424511018500,
                  "title": "1ИТСб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292955582700,
                "title": "613"
              },
              "lecturers": [
                {
                  "id": 1424936078741084000,
                  "lastName": "Мухин",
                  "firstName": "Владимир",
                  "middleName": "Васильевич",
                  "shortName": "Мухин В. В.",
                  "fio": "Мухин Владимир Васильевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685261897397000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696371461149693200,
                "title": "Иностранный язык (англ пг2)"
              },
              "groups": [
                {
                  "id": 1705969217197438500,
                  "title": "2Сб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048748577000,
                "title": "815"
              },
              "lecturers": [
                {
                  "id": 1425479079341070000,
                  "lastName": "Чистякова",
                  "firstName": "Вера",
                  "middleName": "Васильевна",
                  "shortName": "Чистякова В. В.",
                  "fio": "Чистякова Вера Васильевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747916575858357000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1671824675933525500,
                  "title": "1УТСб-02-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379290380669200,
                "title": "327б"
              },
              "lecturers": [
                {
                  "id": 1484647455986292500,
                  "lastName": "Питерцев",
                  "firstName": "Михаил",
                  "middleName": "Эдуардович",
                  "shortName": "Питерцев М. Э.",
                  "fio": "Питерцев Михаил Эдуардович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748923448054117000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1665390776797894000,
                "title": "Проектирование в профессиональной сфере"
              },
              "groups": [
                {
                  "id": 1643726844876297700,
                  "title": "2Тб-00-1зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1511087872294262500,
                  "lastName": "Граф",
                  "firstName": "Софья",
                  "middleName": "Владимировна",
                  "shortName": "Граф С. В.",
                  "fio": "Граф Софья Владимировна"
                }
              ],
              "abbrlessontype": "икр",
              "lessontype": "Иная конт.раб.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685279077266200,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1667102012518438100,
                "title": "Проектирование в профессиональной сфере"
              },
              "groups": [
                {
                  "id": 1671817216591402500,
                  "title": "2ПДОб-13-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923949490400,
                "title": "704"
              },
              "lecturers": [
                {
                  "id": 1425475486812739300,
                  "lastName": "Соловьева",
                  "firstName": "Елена",
                  "middleName": "Евгеньевна",
                  "shortName": "Соловьева Е. Е.",
                  "fio": "Соловьева Елена Евгеньевна"
                }
              ],
              "abbrlessontype": "икр",
              "lessontype": "Иная конт.раб.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685282375037700,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727986236662871300,
                "title": "Общее языкознание"
              },
              "groups": [
                {
                  "id": 1609298376906512000,
                  "title": "2ПДОпб-13-1оп-18"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923942150400,
                "title": "702"
              },
              "lecturers": [
                {
                  "id": 1424933661150549800,
                  "lastName": "Лаврова",
                  "firstName": "Светлана",
                  "middleName": "Юрьевна",
                  "shortName": "Лаврова С. Ю.",
                  "fio": "Лаврова Светлана Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685228695286500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1726282353663145200,
                "title": "Практическая фонетика немецкого языка (пг2)"
              },
              "groups": [
                {
                  "id": 1739582424555058700,
                  "title": "2ПДОб-21-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776483725600,
                "title": "424"
              },
              "lecturers": [
                {
                  "id": 1424935322677942000,
                  "lastName": "Межецкая",
                  "firstName": "Галина",
                  "middleName": "Николаевна",
                  "shortName": "Межецкая Г. Н.",
                  "fio": "Межецкая Галина Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747577411583472400,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Технологическая практика 1"
              },
              "groups": [
                {
                  "id": 1705969217174369800,
                  "title": "1ПИб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378664595700,
                "title": "221"
              },
              "lecturers": [
                {
                  "id": 1434372935049549600,
                  "lastName": "Юдина",
                  "firstName": "Ольга",
                  "middleName": "Вадимовна",
                  "shortName": "Юдина О. В.",
                  "fio": "Юдина Ольга Вадимовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685266269959000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1666673892806104300,
                "title": "Социальная статистика (пг1)"
              },
              "groups": [
                {
                  "id": 1671816269488199200,
                  "title": "2Сб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254003413200,
                "title": "504"
              },
              "lecturers": [
                {
                  "id": 1421218736003618600,
                  "lastName": "Воробьева",
                  "firstName": "Ирина",
                  "middleName": "Николаевна",
                  "shortName": "Воробьева И. Н.",
                  "fio": "Воробьева Ирина Николаевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747911328318485200,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1671820166426531300,
                  "title": "1РФб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776451219700,
                "title": "416"
              },
              "lecturers": [
                {
                  "id": 1492790427106940700,
                  "lastName": "Федоров",
                  "firstName": "Дмитрий",
                  "middleName": "Сергеевич",
                  "shortName": "Федоров Д. С.",
                  "fio": "Федоров Дмитрий Сергеевич"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685342030623500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1666554997406438700,
                "title": "Иностранный язык в профессиональной сфере (нем)"
              },
              "groups": [
                {
                  "id": 1671823055054182000,
                  "title": "3ХТпб-01-1оп-20"
                },
                {
                  "id": 1671823433121404400,
                  "title": "3МТб-01-1оп-20"
                },
                {
                  "id": 1671822128479999500,
                  "title": "3ТТб-01-1оп-20"
                },
                {
                  "id": 1671823827303143000,
                  "title": "3НТТС-01-1оп-20"
                },
                {
                  "id": 1671821906014115300,
                  "title": "3ДАСб-00-1оп-20"
                },
                {
                  "id": 1671823795820697000,
                  "title": "3ЭТМпб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048763257000,
                "title": "818"
              },
              "lecturers": [
                {
                  "id": 1425476791373404000,
                  "lastName": "Торохова",
                  "firstName": "Галина",
                  "middleName": "Захаровна",
                  "shortName": "Торохова Г. З.",
                  "fio": "Торохова Галина Захаровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685303398986500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1695917333968590000,
                "title": "Метрология и электроизмерения (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217165981200,
                  "title": "1ИБб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292969214200,
                "title": "615"
              },
              "lecturers": [
                {
                  "id": 1500589804791797500,
                  "lastName": "Каверин",
                  "firstName": "Олег",
                  "middleName": "Борисович",
                  "shortName": "Каверин О. Б.",
                  "fio": "Каверин Олег Борисович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685307693953800,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1630503591206720800,
                "title": "Технология карьеры"
              },
              "groups": [
                {
                  "id": 1641737111948236300,
                  "title": "7Эб-05-1оп-19"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490437674499051800,
                "title": "208"
              },
              "lecturers": [
                {
                  "id": 1448967915303868200,
                  "lastName": "Рогожникова",
                  "firstName": "Светлана",
                  "middleName": "Мугумаевна",
                  "shortName": "Рогожникова С. М.",
                  "fio": "Рогожникова Светлана Мугумаевна"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685246480184000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1722931211552028000,
                "title": "Практикум по фонетике (английский язык) (пг2)"
              },
              "groups": [
                {
                  "id": 1739582424538281500,
                  "title": "2Лб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254013899000,
                "title": "506"
              },
              "lecturers": [
                {
                  "id": 1424935794245638000,
                  "lastName": "Моисеенко",
                  "firstName": "Анна",
                  "middleName": "Валерьевна",
                  "shortName": "Моисеенко А. В.",
                  "fio": "Моисеенко Анна Валерьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747910394078163700,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1671820801044649500,
                  "title": "1ИСб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1671012457577976000,
                "title": "301а"
              },
              "lecturers": [
                {
                  "id": 1396414847681304300,
                  "lastName": "Ершов",
                  "firstName": "Евгений",
                  "middleName": "Валентинович",
                  "shortName": "Ершов Е. В.",
                  "fio": "Ершов Евгений Валентинович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747827691912819500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "проектное обучение"
              },
              "groups": [
                {
                  "id": 1671817437751809500,
                  "title": "2Лб-02-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292951388400,
                "title": "612"
              },
              "lecturers": [
                {
                  "id": 1405290680295626500,
                  "lastName": "Кострубина",
                  "firstName": "Светлана",
                  "middleName": "Александровна",
                  "shortName": "Кострубина С. А.",
                  "fio": "Кострубина Светлана Александровна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685304430785300,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1699721786194040000,
                "title": "Психология творчества"
              },
              "groups": [
                {
                  "id": 1671817830092248600,
                  "title": "2РТПб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923959976200,
                "title": "707"
              },
              "lecturers": [
                {
                  "id": 1424937542791206700,
                  "lastName": "Перченко",
                  "firstName": "Елена",
                  "middleName": "Леонидовна",
                  "shortName": "Перченко Е. Л.",
                  "fio": "Перченко Елена Леонидовна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749181393086051000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1728072639099827500,
                "title": "Математические и статистические методы в маркетинговых и социологических исследованиях"
              },
              "groups": [
                {
                  "id": 1705969217241478700,
                  "title": "2ЖУРб-00-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1634137917545781000,
                  "lastName": "Максимова",
                  "firstName": "Татьяна",
                  "middleName": "Николаевна",
                  "shortName": "Максимова Т. Н.",
                  "fio": "Максимова Татьяна Николаевна"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685263715627800,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1666114611701618000,
                "title": "Гражданский процесс"
              },
              "groups": [
                {
                  "id": 1671816591728187000,
                  "title": "2Юб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776448074000,
                "title": "415"
              },
              "lecturers": [
                {
                  "id": 1672371536484374300,
                  "lastName": "Хмелев",
                  "firstName": "Алексей",
                  "middleName": "Евгеньевич",
                  "shortName": "Хмелев А. Е.",
                  "fio": "Хмелев Алексей Евгеньевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685290631525000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1666745495594210600,
                "title": "Технология централизованного производства электроэнергии и теплоты"
              },
              "groups": [
                {
                  "id": 1641743148954687000,
                  "title": "3ТТб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490435838350201000,
                "title": "28"
              },
              "lecturers": [
                {
                  "id": 1424934248273418000,
                  "lastName": "Лукин",
                  "firstName": "Сергей",
                  "middleName": "Владимирович",
                  "shortName": "Лукин С. В.",
                  "fio": "Лукин Сергей Владимирович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685311036814000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1665387624132515000,
                "title": "Экономика"
              },
              "groups": [
                {
                  "id": 1671820582751049200,
                  "title": "1ИТСб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346293012205800,
                "title": "623"
              },
              "lecturers": [
                {
                  "id": 1676257388726851300,
                  "lastName": "Сахарова",
                  "firstName": "Наталия",
                  "middleName": "Васильевна",
                  "shortName": "Сахарова Н. В.",
                  "fio": "Сахарова Наталия Васильевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685212265149200,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1726281988696831200,
                "title": "Физическая культура и спорт (элективная дисциплина)"
              },
              "groups": [
                {
                  "id": 1739582424564496000,
                  "title": "7УПб-01-1оп-22"
                },
                {
                  "id": 1739582424566593000,
                  "title": "7ЭБ-01-1оп-22"
                },
                {
                  "id": 1739582424560301600,
                  "title": "7Эб-06-1оп-22"
                },
                {
                  "id": 1739582424562398700,
                  "title": "7Эб-07-1оп-22"
                },
                {
                  "id": 1739582424520455700,
                  "title": "9Бб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1492901605554525200,
                "title": "Спортивный корпус (ул.Труда,д.3)"
              },
              "auditory": {
                "id": 1493343626573386000,
                "title": "1/4"
              },
              "lecturers": [
                {
                  "id": 1513203073464407800,
                  "lastName": "Прядехина",
                  "firstName": "Мария",
                  "middleName": "Сергеевна",
                  "shortName": "Прядехина М. С.",
                  "fio": "Прядехина Мария Сергеевна"
                },
                {
                  "id": 1421214386228303600,
                  "lastName": "Берцева",
                  "firstName": "Татьяна",
                  "middleName": "Станиславовна",
                  "shortName": "Берцева Т. С.",
                  "fio": "Берцева Татьяна Станиславовна"
                },
                {
                  "id": 1571703015355717400,
                  "lastName": "Легких",
                  "firstName": "Артём",
                  "middleName": "Леонидович",
                  "shortName": "Легких А. Л.",
                  "fio": "Легких Артём Леонидович"
                },
                {
                  "id": 1644364336262551300,
                  "lastName": "Гаврикова",
                  "firstName": "Ольга",
                  "middleName": "Юрьевна",
                  "shortName": "Гаврикова О. Ю.",
                  "fio": "Гаврикова Ольга Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748199700953953000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Вакцинация от гриппа"
              },
              "groups": [
                {
                  "id": 1705969217196390000,
                  "title": "7УПб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1491992159538123000,
                "title": "103"
              },
              "lecturers": [
                {
                  "id": 1747850345543759600,
                  "lastName": "Пукело",
                  "firstName": "Елена",
                  "middleName": "Вячеславовна",
                  "shortName": "Пукело Е. В.",
                  "fio": "Пукело Елена Вячеславовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685254101234400,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1602599078029432000,
                "title": "Организация мероприятий ВФСК ГТО"
              },
              "groups": [
                {
                  "id": 1624632741121234400,
                  "title": "9ПДОпб-17-1оп-18"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490438777526555000,
                "title": "302"
              },
              "lecturers": [
                {
                  "id": 1425480254933178000,
                  "lastName": "Шкляр",
                  "firstName": "Ольга",
                  "middleName": "Брониславовна",
                  "shortName": "Шкляр О. Б.",
                  "fio": "Шкляр Ольга Брониславовна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685334625579800,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1695734751216801000,
                "title": "Иностранный язык (англ)"
              },
              "groups": [
                {
                  "id": 1705969217240430000,
                  "title": "2ЖУРб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048772694300,
                "title": "820"
              },
              "lecturers": [
                {
                  "id": 1478386891657058000,
                  "lastName": "Башнина",
                  "firstName": "Александра",
                  "middleName": "Викторовна",
                  "shortName": "Башнина А. В.",
                  "fio": "Башнина Александра Викторовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685317544276700,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727274974124569900,
                "title": "Химия"
              },
              "groups": [
                {
                  "id": 1739582424544573000,
                  "title": "3НТТС-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490364153823498500,
                "title": "402"
              },
              "lecturers": [
                {
                  "id": 1424933017158162200,
                  "lastName": "Кузнецова",
                  "firstName": "Юлия",
                  "middleName": "Сергеевна",
                  "shortName": "Кузнецова Ю. С.",
                  "fio": "Кузнецова Юлия Сергеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749099835637494500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1632155836554941700,
                "title": "Практический курс первого иностранного языка (пг1)"
              },
              "groups": [
                {
                  "id": 1641737109227181600,
                  "title": "2ИЯб-09-1зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "онлайн"
              },
              "lecturers": [
                {
                  "id": 1421225556298438400,
                  "lastName": "Дунаевская",
                  "firstName": "Татьяна",
                  "middleName": "Алексеевна",
                  "shortName": "Дунаевская Т. А.",
                  "fio": "Дунаевская Татьяна Алексеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685260618134300,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1631700425777354000,
                "title": "Организация работы рекламного отдела и отдела по связям с общественностью"
              },
              "groups": [
                {
                  "id": 1641734136298215000,
                  "title": "2СОб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1471886253797414000,
                "title": "Учебно-лабораторный корпус № 3 (ул.М.Горького, 14)"
              },
              "auditory": {
                "id": 1491700663191605500,
                "title": "110"
              },
              "lecturers": [
                {
                  "id": 1425481467636488000,
                  "lastName": "Яковлева",
                  "firstName": "Надежда",
                  "middleName": "Ивановна",
                  "shortName": "Яковлева Н. И.",
                  "fio": "Яковлева Надежда Ивановна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685340062446300,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696205977494230300,
                "title": "Теория автоматов и формальных языков (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217175418400,
                  "title": "1ПИб-01-2оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378633138400,
                "title": "217"
              },
              "lecturers": [
                {
                  "id": 1447872296193628000,
                  "lastName": "Ганичева",
                  "firstName": "Оксана",
                  "middleName": "Георгиевна",
                  "shortName": "Ганичева О. Г.",
                  "fio": "Ганичева Оксана Георгиевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685335775867600,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1666744570004641000,
                "title": "Экономический анализ деятельности организаций"
              },
              "groups": [
                {
                  "id": 1671815746081003000,
                  "title": "7Мпб-00-1зп-20"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1443889749481756400,
                  "lastName": "Кошелева",
                  "firstName": "Алена",
                  "middleName": "Владимировна",
                  "shortName": "Кошелева А. В.",
                  "fio": "Кошелева Алена Владимировна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685233765151500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696473008827274500,
                "title": "Методика начального языкового образования (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217212118500,
                  "title": "4ПДОб-19-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048795763000,
                "title": "825"
              },
              "lecturers": [
                {
                  "id": 1425479116566566700,
                  "lastName": "Чистякова",
                  "firstName": "Наталия",
                  "middleName": "Николаевна",
                  "shortName": "Чистякова Н. Н.",
                  "fio": "Чистякова Наталия Николаевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685291762938600,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1728532229283247400,
                "title": "Исследование и проектирование сетей и автоматики"
              },
              "groups": [
                {
                  "id": 1641743302326752800,
                  "title": "3ЭЭб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436122605523200,
                "title": "32"
              },
              "lecturers": [
                {
                  "id": 1425474675677337300,
                  "lastName": "Сидорова",
                  "firstName": "Инна",
                  "middleName": "Владимировна",
                  "shortName": "Сидорова И. В.",
                  "fio": "Сидорова Инна Владимировна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685303108531000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1695917322109195500,
                "title": "Теория информации (пг1)"
              },
              "groups": [
                {
                  "id": 1705969217165981200,
                  "title": "1ИБб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346293021643000,
                "title": "625"
              },
              "lecturers": [
                {
                  "id": 1425475779845691100,
                  "lastName": "Стародубцев",
                  "firstName": "Денис",
                  "middleName": "Евгеньевич",
                  "shortName": "Стародубцев Д. Е.",
                  "fio": "Стародубцев Денис Евгеньевич"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685279485162200,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727275587089593600,
                "title": "Иностранный язык (англ пг2)"
              },
              "groups": [
                {
                  "id": 1739582424525698600,
                  "title": "1ИБб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520946135300,
                "title": "914"
              },
              "lecturers": [
                {
                  "id": 1577151136250468000,
                  "lastName": "Шмакова",
                  "firstName": "Вероника",
                  "middleName": "Николаевна",
                  "shortName": "Шмакова В. Н.",
                  "fio": "Шмакова Вероника Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685321374724900,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1727277659049555200,
                "title": "История (история России, всеобщая история)"
              },
              "groups": [
                {
                  "id": 1739582424573933000,
                  "title": "3МТб-03-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292923076900,
                "title": "604"
              },
              "lecturers": [
                {
                  "id": 1424937585071888100,
                  "lastName": "Петелин",
                  "firstName": "Борис",
                  "middleName": "Валентинович",
                  "shortName": "Петелин Б. В.",
                  "fio": "Петелин Борис Валентинович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748823196772987600,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696547110751573200,
                "title": "Практическая грамматика второго иностранного языка (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217198487000,
                  "title": "2ИЯб-09-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1424937429677119200,
                  "lastName": "Пахолкова",
                  "firstName": "Татьяна",
                  "middleName": "Васильевна",
                  "shortName": "Пахолкова Т. В.",
                  "fio": "Пахолкова Татьяна Васильевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685210774074000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1666035582596289800,
                "title": "Лидерство и управление командой (пг7)"
              },
              "groups": [
                {
                  "id": 1671825251655227000,
                  "title": "9ФКб-01-1оп-20"
                },
                {
                  "id": 1671815301225780700,
                  "title": "7Эб-04-1оп-20"
                },
                {
                  "id": 1671815510729168400,
                  "title": "7УПпб-01-1оп-20"
                },
                {
                  "id": 1671815577865295400,
                  "title": "7ЭБ-01-1оп-20"
                },
                {
                  "id": 1671825067435103700,
                  "title": "9Бб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048777937200,
                "title": "821"
              },
              "lecturers": [
                {
                  "id": 1431202970135959300,
                  "lastName": "Балюшина",
                  "firstName": "Юлия",
                  "middleName": "Львовна",
                  "shortName": "Балюшина Ю. Л.",
                  "fio": "Балюшина Юлия Львовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685338528379600,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1584140442410161400,
                "title": "Принятие и исполнение государственных решений"
              },
              "groups": [
                {
                  "id": 1609396466053289500,
                  "title": "7ГМУб-00-1зп-18"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1425477939742381800,
                  "lastName": "Хавроничев",
                  "firstName": "Владимир",
                  "middleName": "Иванович",
                  "shortName": "Хавроничев В. И.",
                  "fio": "Хавроничев Владимир Иванович"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685344981316400,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1665386300261275000,
                "title": "Графические системы и языки"
              },
              "groups": [
                {
                  "id": 1676611732890457600,
                  "title": "1ИСб-00-2оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488369326572441900,
                "title": "218а"
              },
              "lecturers": [
                {
                  "id": 1472314025600620300,
                  "lastName": "Табунов",
                  "firstName": "Павел",
                  "middleName": "Александрович",
                  "shortName": "Табунов П. А.",
                  "fio": "Табунов Павел Александрович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685236500886300,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1725994625777137000,
                "title": "Прикладные информационные технологии"
              },
              "groups": [
                {
                  "id": 1739582424507872800,
                  "title": "3СТб-01-2оп-22"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1425474998634551000,
                  "lastName": "Смирнова",
                  "firstName": "Елена",
                  "middleName": "Анатольевна",
                  "shortName": "Смирнова Е. А.",
                  "fio": "Смирнова Елена Анатольевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685269895934700,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1682591908274115800,
                "title": "Социальный портрет Вологодской области"
              },
              "groups": [
                {
                  "id": 1641733989795370500,
                  "title": "2Сб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345253992927500,
                "title": "502"
              },
              "lecturers": [
                {
                  "id": 1513183652125611800,
                  "lastName": "Смирнова",
                  "firstName": "Елена",
                  "middleName": "Алексеевна",
                  "shortName": "Смирнова Е. А.",
                  "fio": "Смирнова Елена Алексеевна"
                }
              ],
              "abbrlessontype": "икр",
              "lessontype": "Иная конт.раб.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685330037011200,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1729344507440133400,
                "title": "Юридические основы предпринимательства"
              },
              "groups": [
                {
                  "id": 1641829272027928000,
                  "title": "1УТСб-02-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624631271700,
                "title": "320"
              },
              "lecturers": [
                {
                  "id": 1424933743597983500,
                  "lastName": "Ларичев",
                  "firstName": "Андрей",
                  "middleName": "Витальевич",
                  "shortName": "Ларичев А. В.",
                  "fio": "Ларичев Андрей Витальевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747913026602660600,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1671820870725670400,
                  "title": "1ПИб-01-2оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1671012553029849300,
                "title": "301в"
              },
              "lecturers": [
                {
                  "id": 1396414847681304300,
                  "lastName": "Ершов",
                  "firstName": "Евгений",
                  "middleName": "Валентинович",
                  "shortName": "Ершов Е. В.",
                  "fio": "Ершов Евгений Валентинович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685233378227000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1631061073160312000,
                "title": "Вспомогательные исторические дисциплины"
              },
              "groups": [
                {
                  "id": 1671817586681058800,
                  "title": "2Иб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347923984093400,
                "title": "713"
              },
              "lecturers": [
                {
                  "id": 1439708146481239800,
                  "lastName": "Лукинцева",
                  "firstName": "Валерия",
                  "middleName": "Алексеевна",
                  "shortName": "Лукинцева В. А.",
                  "fio": "Лукинцева Валерия Алексеевна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685264502059800,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696381655208433000,
                "title": "Методика и методология социологического исследования"
              },
              "groups": [
                {
                  "id": 1705969217229944300,
                  "title": "2СРб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254028579000,
                "title": "509"
              },
              "lecturers": [
                {
                  "id": 1424483394675283700,
                  "lastName": "Ковалева",
                  "firstName": "Галина",
                  "middleName": "Александровна",
                  "shortName": "Ковалева Г. А.",
                  "fio": "Ковалева Галина Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747841885843354400,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1671816734752904700,
                  "title": "2СОб-00-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1492080565002703000,
                "title": "318"
              },
              "lecturers": [
                {
                  "id": 1396215387764299500,
                  "lastName": "Чернов",
                  "firstName": "Александр",
                  "middleName": "Валентинович",
                  "shortName": "Чернов А. В.",
                  "fio": "Чернов Александр Валентинович"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685281767912200,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696468889245848800,
                "title": "Педагогика"
              },
              "groups": [
                {
                  "id": 1705969217225750000,
                  "title": "2ПДОб-13-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048783180000,
                "title": "822"
              },
              "lecturers": [
                {
                  "id": 1424930953840564000,
                  "lastName": "Косаренкова",
                  "firstName": "Маргарита",
                  "middleName": "Михайловна",
                  "shortName": "Косаренкова М. М.",
                  "fio": "Косаренкова Маргарита Михайловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685334388601600,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1724374956520633600,
                "title": "Основы теории журналистики"
              },
              "groups": [
                {
                  "id": 1739582424589661700,
                  "title": "2СОб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776422908200,
                "title": "407"
              },
              "lecturers": [
                {
                  "id": 1425477852516587300,
                  "lastName": "Дворянова",
                  "firstName": "Мария",
                  "middleName": "Валерьевна",
                  "shortName": "Дворянова М. В.",
                  "fio": "Дворянова Мария Валерьевна"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685232381031200,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1725994622391285000,
                "title": "Введение в инженерную деятельность и специальность"
              },
              "groups": [
                {
                  "id": 1739582424506824200,
                  "title": "3СТб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490356052387959000,
                "title": "311"
              },
              "lecturers": [
                {
                  "id": 1421218888423577300,
                  "lastName": "Ворожбянов",
                  "firstName": "Василий",
                  "middleName": "Николаевич",
                  "shortName": "Ворожбянов В. Н.",
                  "fio": "Ворожбянов Василий Николаевич"
                }
              ],
              "abbrlessontype": "з",
              "lessontype": "Зач.",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685302143841000,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1726901590867965200,
                "title": "Введение в цифровую культуру (пг1)"
              },
              "groups": [
                {
                  "id": 1739582424505775600,
                  "title": "1ПИб-02-3оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378640478500,
                "title": "218"
              },
              "lecturers": [
                {
                  "id": 1425490815175628500,
                  "lastName": "Журавлева",
                  "firstName": "Юлия",
                  "middleName": "Михайловна",
                  "shortName": "Журавлева Ю. М.",
                  "fio": "Журавлева Юлия Михайловна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685248572093200,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1695725076263998700,
                "title": "Технология проектной деятельности"
              },
              "groups": [
                {
                  "id": 1705969217244624400,
                  "title": "2Лб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292933562600,
                "title": "607"
              },
              "lecturers": [
                {
                  "id": 1472590680489465600,
                  "lastName": "Ловкова",
                  "firstName": "Екатерина",
                  "middleName": "Александровна",
                  "shortName": "Ловкова Е. А.",
                  "fio": "Ловкова Екатерина Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749187341270774500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696461448744539400,
                "title": "Хореография и пластика в театрализованных представлениях"
              },
              "groups": [
                {
                  "id": 1705969217248818700,
                  "title": "2РТПб-01-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1672099246548981500,
                  "lastName": "Горшков",
                  "firstName": "Евгений",
                  "middleName": "Владимирович",
                  "shortName": "Горшков Е. В.",
                  "fio": "Горшков Евгений Владимирович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685231373349600,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1696360508113819000,
                "title": "Источниковедение"
              },
              "groups": [
                {
                  "id": 1705969217224701400,
                  "title": "2ПДОб-14-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520914678000,
                "title": "906"
              },
              "lecturers": [
                {
                  "id": 1421225821027178200,
                  "lastName": "Егоров",
                  "firstName": "Андрей",
                  "middleName": "Николаевич",
                  "shortName": "Егоров А. Н.",
                  "fio": "Егоров Андрей Николаевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685252837700400,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1631794609322464500,
                "title": "Новые физкультурно-спортивные виды"
              },
              "groups": [
                {
                  "id": 1641735286599718400,
                  "title": "9ФКб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1490442417495610400,
                "title": "Спортивный комплекс \"Университетский\" (ул. Труда, 3)"
              },
              "auditory": {
                "id": 1671133117620949200,
                "title": "1"
              },
              "lecturers": [
                {
                  "id": 1478211816264832800,
                  "lastName": "Подоляка",
                  "firstName": "Олег",
                  "middleName": "Борисович",
                  "shortName": "Подоляка О. Б.",
                  "fio": "Подоляка Олег Борисович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685228129055500,
              "dateEvent": "23.11.2022",
              "startTime": "11:50",
              "endTime": "13:20",
              "discipline": {
                "id": 1726095767161927000,
                "title": "Этнология"
              },
              "groups": [
                {
                  "id": 1739582424552961500,
                  "title": "2ПДОб-14-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520904192300,
                "title": "903"
              },
              "lecturers": [
                {
                  "id": 1421060837093676800,
                  "lastName": "Алексеева",
                  "firstName": "Надежда",
                  "middleName": "Викторовна",
                  "shortName": "Алексеева Н. В.",
                  "fio": "Алексеева Надежда Викторовна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685318950417200,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1724374932483077400,
                "title": "Межличностные коммуникации в сфере PR и рекламы"
              },
              "groups": [
                {
                  "id": 1739582424589661700,
                  "title": "2СОб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776422908200,
                "title": "407"
              },
              "lecturers": [
                {
                  "id": 1448967915303868200,
                  "lastName": "Рогожникова",
                  "firstName": "Светлана",
                  "middleName": "Мугумаевна",
                  "shortName": "Рогожникова С. М.",
                  "fio": "Рогожникова Светлана Мугумаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685273852212000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1632221946019059000,
                "title": "Аналитическое чтение (пг1)"
              },
              "groups": [
                {
                  "id": 1641732085136758300,
                  "title": "2Лб-02-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254013899000,
                "title": "506"
              },
              "lecturers": [
                {
                  "id": 1405290680295626500,
                  "lastName": "Кострубина",
                  "firstName": "Светлана",
                  "middleName": "Александровна",
                  "shortName": "Кострубина С. А.",
                  "fio": "Кострубина Светлана Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685320046179000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1727369724120921300,
                "title": "Физика технических объектов (пг1)"
              },
              "groups": [
                {
                  "id": 1739582424522552800,
                  "title": "1АПб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254056890600,
                "title": "515"
              },
              "lecturers": [
                {
                  "id": 1425494008685139700,
                  "lastName": "Козырева",
                  "firstName": "Яна",
                  "middleName": "Анатольевна",
                  "shortName": "Козырева Я. А.",
                  "fio": "Козырева Яна Анатольевна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685237347087000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1727259975602795800,
                "title": "Иностранный язык (англ пг2)"
              },
              "groups": [
                {
                  "id": 1739582424539330000,
                  "title": "1ПДОб-15-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520918872300,
                "title": "907"
              },
              "lecturers": [
                {
                  "id": 1729906009590069000,
                  "lastName": "Чуева",
                  "firstName": "Мария",
                  "middleName": "Викторовна",
                  "shortName": "Чуева М. В.",
                  "fio": "Чуева Мария Викторовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685210494104300,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1665206419934156000,
                "title": "Дизайн-мышление. Методология работы с клиентом (пг4)"
              },
              "groups": [
                {
                  "id": 1671815449735599600,
                  "title": "7Эб-05-1оп-20"
                },
                {
                  "id": 1671815510729168400,
                  "title": "7УПпб-01-1оп-20"
                },
                {
                  "id": 1671815577865295400,
                  "title": "7ЭБ-01-1оп-20"
                },
                {
                  "id": 1671825067435103700,
                  "title": "9Бб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490437674469691600,
                "title": "202"
              },
              "lecturers": [
                {
                  "id": 1478026529608832800,
                  "lastName": "Ковшикова",
                  "firstName": "Галина",
                  "middleName": "Александровна",
                  "shortName": "Ковшикова Г. А.",
                  "fio": "Ковшикова Галина Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685336098829000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1667308108430447900,
                "title": "Экономика государственного и муниципального сектора"
              },
              "groups": [
                {
                  "id": 1641738451705403000,
                  "title": "7ГМУб-00-1зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1421218855851661000,
                  "lastName": "Воробьева",
                  "firstName": "Татьяна",
                  "middleName": "Борисовна",
                  "shortName": "Воробьева Т. Б.",
                  "fio": "Воробьева Татьяна Борисовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1748828817623741200,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696547104430757000,
                "title": "Практическая грамматика первого иностранного языка (пг1)"
              },
              "groups": [
                {
                  "id": 1705969217198487000,
                  "title": "2ИЯб-09-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1425475991588837000,
                  "lastName": "Суворова",
                  "firstName": "Наталья",
                  "middleName": "Леонидовна",
                  "shortName": "Суворова Н. Л.",
                  "fio": "Суворова Наталья Леонидовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685233019614000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696470520024798500,
                "title": "Организация добровольческой (волонтерской) деятельности и взаимодействие с социально-ориентированным НКО"
              },
              "groups": [
                {
                  "id": 1705969217230993000,
                  "title": "1ПДОб-15-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490349048724459800,
                "title": "810"
              },
              "lecturers": [
                {
                  "id": 1424938360835676000,
                  "lastName": "Попова",
                  "firstName": "Светлана",
                  "middleName": "Игоревна",
                  "shortName": "Попова С. И.",
                  "fio": "Попова Светлана Игоревна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748926255527228200,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1668504262360962300,
                "title": "Второй иностранный язык (нем)"
              },
              "groups": [
                {
                  "id": 1643726844876297700,
                  "title": "2Тб-00-1зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1634137917545781000,
                  "lastName": "Максимова",
                  "firstName": "Татьяна",
                  "middleName": "Николаевна",
                  "shortName": "Максимова Т. Н.",
                  "fio": "Максимова Татьяна Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685222287438600,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1602604408601843000,
                "title": "Психология стресса и стрессоустойчивого поведения"
              },
              "groups": [
                {
                  "id": 1609302467033437700,
                  "title": "4ПСД-01-1оп-18"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347924011356400,
                "title": "719"
              },
              "lecturers": [
                {
                  "id": 1425473976827647700,
                  "lastName": "Сборцева",
                  "firstName": "Татьяна",
                  "middleName": "Васильевна",
                  "shortName": "Сборцева Т. В.",
                  "fio": "Сборцева Татьяна Васильевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749187354851931000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696461448744539400,
                "title": "Хореография и пластика в театрализованных представлениях"
              },
              "groups": [
                {
                  "id": 1705969217248818700,
                  "title": "2РТПб-01-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1672099246548981500,
                  "lastName": "Горшков",
                  "firstName": "Евгений",
                  "middleName": "Владимирович",
                  "shortName": "Горшков Е. В.",
                  "fio": "Горшков Евгений Владимирович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685296481530600,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1727277921333015800,
                "title": "Программирование"
              },
              "groups": [
                {
                  "id": 1739582424512067000,
                  "title": "1ИТСб-00-2оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346293021643000,
                "title": "625"
              },
              "lecturers": [
                {
                  "id": 1424934271309584100,
                  "lastName": "Лукичев",
                  "firstName": "Алексей",
                  "middleName": "Андреевич",
                  "shortName": "Лукичев А. А.",
                  "fio": "Лукичев Алексей Андреевич"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685339444835000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696201888502912300,
                "title": "Иностранный язык (англ пг1)"
              },
              "groups": [
                {
                  "id": 1705969217164932600,
                  "title": "1ИСб-00-2оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624613446000,
                "title": "315"
              },
              "lecturers": [
                {
                  "id": 1704794965414901500,
                  "lastName": "Першина",
                  "firstName": "Елена",
                  "middleName": "Юрьевна",
                  "shortName": "Першина Е. Ю.",
                  "fio": "Першина Елена Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685302878892800,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1695917317777528000,
                "title": "Дискретная математика"
              },
              "groups": [
                {
                  "id": 1705969217165981200,
                  "title": "1ИБб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292955582700,
                "title": "613"
              },
              "lecturers": [
                {
                  "id": 1425475779845691100,
                  "lastName": "Стародубцев",
                  "firstName": "Денис",
                  "middleName": "Евгеньевич",
                  "shortName": "Стародубцев Д. Е.",
                  "fio": "Стародубцев Денис Евгеньевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748200579715167000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 0,
                "title": "Вакцинация от гриппа"
              },
              "groups": [
                {
                  "id": 1739582424562398700,
                  "title": "7Эб-07-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1491992159538123000,
                "title": "103"
              },
              "lecturers": [
                {
                  "id": 1747850345543759600,
                  "lastName": "Пукело",
                  "firstName": "Елена",
                  "middleName": "Вячеславовна",
                  "shortName": "Пукело Е. В.",
                  "fio": "Пукело Елена Вячеславовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685276030104300,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1724381133989082400,
                "title": "География"
              },
              "groups": [
                {
                  "id": 1739582424568690200,
                  "title": "2Тб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347924065882400,
                "title": "726"
              },
              "lecturers": [
                {
                  "id": 1424937280741578500,
                  "lastName": "Пакляшова",
                  "firstName": "Наталья",
                  "middleName": "Анатольевна",
                  "shortName": "Пакляшова Н. А.",
                  "fio": "Пакляшова Наталья Анатольевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685321126212400,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1727372742359905500,
                "title": "Безопасность жизнедеятельности"
              },
              "groups": [
                {
                  "id": 1739582424524650000,
                  "title": "1УТСб-02-1оп-22"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903814566100,
                "title": "52"
              },
              "lecturers": [
                {
                  "id": 1733621848817399600,
                  "lastName": "Горохова",
                  "firstName": "Татьяна",
                  "middleName": "Юрьевна",
                  "shortName": "Горохова Т. Ю.",
                  "fio": "Горохова Татьяна Юрьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685242761933600,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696187574862747000,
                "title": "Методы математической физики"
              },
              "groups": [
                {
                  "id": 1705969217190098400,
                  "title": "1РФб-02-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254090445000,
                "title": "522"
              },
              "lecturers": [
                {
                  "id": 1424934639091324700,
                  "lastName": "Максимова",
                  "firstName": "Ольга",
                  "middleName": "Геннадьевна",
                  "shortName": "Максимова О. Г.",
                  "fio": "Максимова Ольга Геннадьевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1749197417231545000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1631586072307701000,
                "title": "Иностранный язык в профессиональной сфере (англ)"
              },
              "groups": [
                {
                  "id": 1671816936575473200,
                  "title": "2Тб-00-1зп-20"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "онлайн"
              },
              "lecturers": [
                {
                  "id": 1421231715873986300,
                  "lastName": "Зайцева",
                  "firstName": "Татьяна",
                  "middleName": "Александровна",
                  "shortName": "Зайцева Т. А.",
                  "fio": "Зайцева Татьяна Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1747666718030689000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1666027127941633300,
                "title": "Базы данных (пг2)"
              },
              "groups": [
                {
                  "id": 1671820870725670400,
                  "title": "1ПИб-01-2оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378709684500,
                "title": "227"
              },
              "lecturers": [
                {
                  "id": 1425474223841744600,
                  "lastName": "Селяничев",
                  "firstName": "Олег",
                  "middleName": "Леонидович",
                  "shortName": "Селяничев О. Л.",
                  "fio": "Селяничев Олег Леонидович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685245970576100,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1631701237003982000,
                "title": "Ресурсо- и энергосбережение в строительстве"
              },
              "groups": [
                {
                  "id": 1641852232647317000,
                  "title": "3СТб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669119576937500,
                "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
              },
              "auditory": {
                "id": 1490352157750202600,
                "title": "111"
              },
              "lecturers": [
                {
                  "id": 1425492433159853800,
                  "lastName": "Поварова",
                  "firstName": "Ольга",
                  "middleName": "Александровна",
                  "shortName": "Поварова О. А.",
                  "fio": "Поварова Ольга Александровна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748823209438737200,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696547110751573200,
                "title": "Практическая грамматика второго иностранного языка (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217198487000,
                  "title": "2ИЯб-09-1зп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1424937429677119200,
                  "lastName": "Пахолкова",
                  "firstName": "Татьяна",
                  "middleName": "Васильевна",
                  "shortName": "Пахолкова Т. В.",
                  "fio": "Пахолкова Татьяна Васильевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685336260309800,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1695734760260769000,
                "title": "Основы теории коммуникации"
              },
              "groups": [
                {
                  "id": 1705969217240430000,
                  "title": "2ЖУРб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345254047453400,
                "title": "513"
              },
              "lecturers": [
                {
                  "id": 1424935724681009000,
                  "lastName": "Мельникова",
                  "firstName": "Наталия",
                  "middleName": "Георгиевна",
                  "shortName": "Мельникова Н. Г.",
                  "fio": "Мельникова Наталия Георгиевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1748192108884128500,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 0,
                "title": "Вакцинация от гриппа"
              },
              "groups": [
                {
                  "id": 1739582424515212800,
                  "title": "3ХТб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1491992159538123000,
                "title": "103"
              },
              "lecturers": [
                {
                  "id": 1747850345543759600,
                  "lastName": "Пукело",
                  "firstName": "Елена",
                  "middleName": "Вячеславовна",
                  "shortName": "Пукело Е. В.",
                  "fio": "Пукело Елена Вячеславовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685287956607700,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1667368850460513500,
                "title": "Расчет и проектирование систем безопасности труда"
              },
              "groups": [
                {
                  "id": 1641742799740081700,
                  "title": "3ТБб-02-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903822954800,
                "title": "54"
              },
              "lecturers": [
                {
                  "id": 1421226191729203000,
                  "lastName": "Ермилов",
                  "firstName": "Владимир",
                  "middleName": "Витальевич",
                  "shortName": "Ермилов В. В.",
                  "fio": "Ермилов Владимир Витальевич"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685324474315500,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696291513968891100,
                "title": "Иностранный язык (англ пг1)"
              },
              "groups": [
                {
                  "id": 1705969217194292700,
                  "title": "1АПпб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520941941000,
                "title": "913"
              },
              "lecturers": [
                {
                  "id": 1424938073381148400,
                  "lastName": "Поклад",
                  "firstName": "Наталия",
                  "middleName": "Игоревна",
                  "shortName": "Поклад Н. И.",
                  "fio": "Поклад Наталия Игоревна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685330875872000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1602709411734754600,
                "title": "Локальные, встраиваемые, распределенные и интегрированные системы управления"
              },
              "groups": [
                {
                  "id": 1641829272027928000,
                  "title": "1УТСб-02-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624631271700,
                "title": "320"
              },
              "lecturers": [
                {
                  "id": 1424934544312637200,
                  "lastName": "Макарова",
                  "firstName": "Наталья",
                  "middleName": "Леонидовна",
                  "shortName": "Макарова Н. Л.",
                  "fio": "Макарова Наталья Леонидовна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747916843574489900,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 0,
                "title": "проектное обучение"
              },
              "groups": [
                {
                  "id": 1671820629673776600,
                  "title": "4ПСД-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346292930417000,
                "title": "606"
              },
              "lecturers": [
                {
                  "id": 1424935679983359700,
                  "lastName": "Михаленко",
                  "firstName": "Татьяна",
                  "middleName": "Николаевна",
                  "shortName": "Михаленко Т. Н.",
                  "fio": "Михаленко Татьяна Николаевна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685231100719900,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696458019660895500,
                "title": "Нечеткая логика"
              },
              "groups": [
                {
                  "id": 1705969217226798600,
                  "title": "1ПМб-02-1оп-21"
                },
                {
                  "id": 1705969217227847200,
                  "title": "1ПМб-03-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624670069000,
                "title": "331"
              },
              "lecturers": [
                {
                  "id": 1424937863291606800,
                  "lastName": "Плотникова",
                  "firstName": "Надежда",
                  "middleName": "Валентиновна",
                  "shortName": "Плотникова Н. В.",
                  "fio": "Плотникова Надежда Валентиновна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685216056800000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1726375037169956000,
                "title": "Этнология"
              },
              "groups": [
                {
                  "id": 1739582424591758800,
                  "title": "2Иб-00-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490350520914678000,
                "title": "906"
              },
              "lecturers": [
                {
                  "id": 1421060837093676800,
                  "lastName": "Алексеева",
                  "firstName": "Надежда",
                  "middleName": "Викторовна",
                  "shortName": "Алексеева Н. В.",
                  "fio": "Алексеева Надежда Викторовна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685296140743400,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696361019421496600,
                "title": "Бухгалтерский учет"
              },
              "groups": [
                {
                  "id": 1705969217222604300,
                  "title": "7ЭБ-01-1оп-21"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1710344616300902100,
                  "lastName": "Малкова",
                  "firstName": "Ирина",
                  "middleName": "Алфеевна",
                  "shortName": "Малкова И. А.",
                  "fio": "Малкова Ирина Алфеевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685291821659000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1728532229283247400,
                "title": "Исследование и проектирование сетей и автоматики"
              },
              "groups": [
                {
                  "id": 1641743302326752800,
                  "title": "3ЭЭб-01-1оп-19"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436122605523200,
                "title": "32"
              },
              "lecturers": [
                {
                  "id": 1425474675677337300,
                  "lastName": "Сидорова",
                  "firstName": "Инна",
                  "middleName": "Владимировна",
                  "shortName": "Сидорова И. В.",
                  "fio": "Сидорова Инна Владимировна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685315443979000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1727369705719461000,
                "title": "Введение в цифровую культуру (пг2)"
              },
              "groups": [
                {
                  "id": 1739582424522552800,
                  "title": "1АПб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488379776407179500,
                "title": "402"
              },
              "lecturers": [
                {
                  "id": 1508558570549942000,
                  "lastName": "Лягинов",
                  "firstName": "Никита",
                  "middleName": "Михайлович",
                  "shortName": "Лягинов Н. М.",
                  "fio": "Лягинов Никита Михайлович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685261850211000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696371471984629000,
                "title": "История социологии"
              },
              "groups": [
                {
                  "id": 1705969217197438500,
                  "title": "2Сб-00-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490345253992927500,
                "title": "502"
              },
              "lecturers": [
                {
                  "id": 1421223582630942500,
                  "lastName": "Гужавина",
                  "firstName": "Татьяна",
                  "middleName": "Анатольевна",
                  "shortName": "Гужавина Т. А.",
                  "fio": "Гужавина Татьяна Анатольевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685315494310700,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1724815203087807700,
                "title": "История мировой культуры"
              },
              "groups": [
                {
                  "id": 1739582424526747100,
                  "title": "2РТПб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488365888710119700,
                "title": "201"
              },
              "lecturers": [
                {
                  "id": 1421219906975700700,
                  "lastName": "Галунова",
                  "firstName": "Светлана",
                  "middleName": "Николаевна",
                  "shortName": "Галунова С. Н.",
                  "fio": "Галунова Светлана Николаевна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685224247227100,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696291654096393500,
                "title": "Педагогические технологии"
              },
              "groups": [
                {
                  "id": 1705969217213167000,
                  "title": "4ПДОб-20-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488372624626028800,
                "title": "319"
              },
              "lecturers": [
                {
                  "id": 1424937201736619800,
                  "lastName": "Павлова",
                  "firstName": "Любовь",
                  "middleName": "Владимировна",
                  "shortName": "Павлова Л. В.",
                  "fio": "Павлова Любовь Владимировна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685226387370800,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696475986041771300,
                "title": "Философия"
              },
              "groups": [
                {
                  "id": 1705969217243575800,
                  "title": "2ПДОб-21-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488365888719556900,
                "title": "203"
              },
              "lecturers": [
                {
                  "id": 1425475155715430100,
                  "lastName": "Смирнова",
                  "firstName": "Ольга",
                  "middleName": "Вениаминовна",
                  "shortName": "Смирнова О. В.",
                  "fio": "Смирнова Ольга Вениаминовна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685336985924400,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1665307170144523500,
                "title": "Дизайн-мышление. Методология работы с клиентом"
              },
              "groups": [
                {
                  "id": 1641737307430065700,
                  "title": "7Мпб-00-1зп-19"
                },
                {
                  "id": 1646196032871077400,
                  "title": "7Мпб-00-2зп-19"
                }
              ],
              "build": null,
              "auditory": {
                "id": 0,
                "title": "Онлайн"
              },
              "lecturers": [
                {
                  "id": 1466623234877167400,
                  "lastName": "Крылова",
                  "firstName": "Наталья",
                  "middleName": "Павловна",
                  "shortName": "Крылова Н. П.",
                  "fio": "Крылова Наталья Павловна"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": "-",
              "online": 1
            },
            {
              "id": 1746685287673492200,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1727275610798945500,
                "title": "Основы информационной безопасности (пг2)"
              },
              "groups": [
                {
                  "id": 1739582424525698600,
                  "title": "1ИБб-01-1оп-22"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490346293025837300,
                "title": "626"
              },
              "lecturers": [
                {
                  "id": 1421232718095587000,
                  "lastName": "Зуев",
                  "firstName": "Андрей",
                  "middleName": "Николаевич",
                  "shortName": "Зуев А. Н.",
                  "fio": "Зуев Андрей Николаевич"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685309157766000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1633762709140936000,
                "title": "Техническая механика (дополнительные главы)"
              },
              "groups": [
                {
                  "id": 1671823357212890600,
                  "title": "3ТБб-02-1оп-20"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436903835537700,
                "title": "57"
              },
              "lecturers": [
                {
                  "id": 1424483270625597200,
                  "lastName": "Клинов",
                  "firstName": "Александр",
                  "middleName": "Владимирович",
                  "shortName": "Клинов А. В.",
                  "fio": "Клинов Александр Владимирович"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685299511915300,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1667015266942326000,
                "title": "Дигностика оборудования"
              },
              "groups": [
                {
                  "id": 1671822913191286300,
                  "title": "3ЭЭб-01-1оп-20"
                }
              ],
              "build": {
                "id": 1484669348207400000,
                "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
              },
              "auditory": {
                "id": 1490436480239145200,
                "title": "45"
              },
              "lecturers": [
                {
                  "id": 1429938891028174600,
                  "lastName": "Кожевников",
                  "firstName": "Александр",
                  "middleName": "Вячеславович",
                  "shortName": "Кожевников А. В.",
                  "fio": "Кожевников Александр Вячеславович"
                }
              ],
              "abbrlessontype": "п",
              "lessontype": "Практ.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685279050003200,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696480272901477600,
                "title": "Систематика высших растений (пг1)"
              },
              "groups": [
                {
                  "id": 1705969217181709800,
                  "title": "9Бб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1490347924020793600,
                "title": "721"
              },
              "lecturers": [
                {
                  "id": 1424940018116335400,
                  "lastName": "Румянцева",
                  "firstName": "Анжелла",
                  "middleName": "Владимировна",
                  "shortName": "Румянцева А. В.",
                  "fio": "Румянцева Анжелла Владимировна"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747577411621221000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 0,
                "title": "Технологическая практика 1"
              },
              "groups": [
                {
                  "id": 1705969217175418400,
                  "title": "1ПИб-01-2оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378649915600,
                "title": "219"
              },
              "lecturers": [
                {
                  "id": 1434372935049549600,
                  "lastName": "Юдина",
                  "firstName": "Ольга",
                  "middleName": "Вадимовна",
                  "shortName": "Юдина О. В.",
                  "fio": "Юдина Ольга Вадимовна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747824553156801300,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 0,
                "title": "Проектное обучение"
              },
              "groups": [
                {
                  "id": 1641734195482990000,
                  "title": "2ЖУРб-00-1оп-19"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1492089330440606000,
                "title": "302"
              },
              "lecturers": [
                {
                  "id": 1425477852516587300,
                  "lastName": "Дворянова",
                  "firstName": "Мария",
                  "middleName": "Валерьевна",
                  "shortName": "Дворянова М. В.",
                  "fio": "Дворянова Мария Валерьевна"
                }
              ],
              "abbrlessontype": null,
              "lessontype": null,
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1747292909709685500,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696205978097161500,
                "title": "Структуры и алгоритмы обработки данных (пг2)"
              },
              "groups": [
                {
                  "id": 1705969217174369800,
                  "title": "1ПИб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1484668639063839700,
                "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
              },
              "auditory": {
                "id": 1488366378724364500,
                "title": "228"
              },
              "lecturers": [
                {
                  "id": 1424939460407072500,
                  "lastName": "Пышницкий",
                  "firstName": "Константин",
                  "middleName": "Михайлович",
                  "shortName": "Пышницкий К. М.",
                  "fio": "Пышницкий Константин Михайлович"
                }
              ],
              "abbrlessontype": "лб",
              "lessontype": "Лаб.зан-я",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            },
            {
              "id": 1746685311291618000,
              "dateEvent": "23.11.2022",
              "startTime": "13:30",
              "endTime": "15:00",
              "discipline": {
                "id": 1696299790819661000,
                "title": "Организационная психология"
              },
              "groups": [
                {
                  "id": 1705969217196390000,
                  "title": "7УПб-01-1оп-21"
                }
              ],
              "build": {
                "id": 1471771374063195100,
                "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
              },
              "auditory": {
                "id": 1490437674499051800,
                "title": "208"
              },
              "lecturers": [
                {
                  "id": 1425480368287389400,
                  "lastName": "Шрейдер",
                  "firstName": "Наталья",
                  "middleName": "Вадимовна",
                  "shortName": "Шрейдер Н. В.",
                  "fio": "Шрейдер Наталья Вадимовна"
                }
              ],
              "abbrlessontype": "л",
              "lessontype": "Лекции",
              "week": 13,
              "weekday": 3,
              "weekType": "неч.",
              "onlineEvent": null,
              "online": 0
            }
          ]`,
      ),
   headers: headers,
   ok: true,
   redirected: false,
   status: 200,
   statusText: "Ok",
   type: "default",
   url: "testURL",
   clone: () => {
      return mockResponse
   },
   body: null,
   bodyUsed: true,
   arrayBuffer: () =>
      new Promise<ArrayBuffer>((resolve) => {
         resolve(new ArrayBuffer(8))
      }),
   blob: () =>
      new Promise<Blob>((resolve) => {
         resolve(new Blob())
      }),
   formData: () =>
      new Promise<FormData>((resolve) => {
         let f: FormData = new FormData()
         resolve(f)
      }),
   json: () =>
      Promise.resolve([
         {
            id: 1748454181244367600,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1724374916460836000,
               title: "Программа личностного и профессионального развития",
            },
            groups: [
               {
                  id: 1739582424589661700,
                  title: "2СОб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254033822000,
               title: "510",
            },
            lecturers: [
               {
                  id: 1421235333943531300,
                  lastName: "Каракина",
                  firstName: "Татьяна",
                  middleName: "Геннадьевна",
                  shortName: "Каракина Т. Г.",
                  fio: "Каракина Татьяна Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685236272296700,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1726358777855079700,
               title: "Математический анализ",
            },
            groups: [
               {
                  id: 1739582424574981600,
                  title: "1ПМб-02-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776432345300,
               title: "410",
            },
            lecturers: [
               {
                  id: 1421238082544342800,
                  lastName: "Кашинцева",
                  firstName: "Ольга",
                  middleName: "Альбертовна",
                  shortName: "Кашинцева О. А.",
                  fio: "Кашинцева Ольга Альбертовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749022214345061000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1665382176272684300,
               title: "Политология",
            },
            groups: [
               {
                  id: 1671816807348967000,
                  title: "2ЖУРб-00-1зп-20",
               },
               {
                  id: 1671816936575473200,
                  title: "2Тб-00-1зп-20",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1424934984009914000,
                  lastName: "Марков",
                  firstName: "Евгений",
                  middleName: "Алфеевич",
                  shortName: "Марков Е. А.",
                  fio: "Марков Евгений Алфеевич",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1747577411470226200,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 0,
               title: "Технологическая практика 1",
            },
            groups: [
               {
                  id: 1705969217163884000,
                  title: "1ИСб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378592244000,
               title: "212",
            },
            lecturers: [
               {
                  id: 1421218013576697600,
                  lastName: "Виноградова",
                  firstName: "Людмила",
                  middleName: "Николаевна",
                  shortName: "Виноградова Л. Н.",
                  fio: "Виноградова Людмила Николаевна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685282513449700,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1695736805997942000,
               title: "Иностранный язык (англ пг1)",
            },
            groups: [
               {
                  id: 1705969217177515500,
                  title: "2Тб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048817783000,
               title: "830",
            },
            lecturers: [
               {
                  id: 1424935579290703600,
                  lastName: "Миронова",
                  firstName: "Эльвира",
                  middleName: "Геннадьевна",
                  shortName: "Миронова Э. Г.",
                  fio: "Миронова Эльвира Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685251367596800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1631794558423537000,
               title: "Спортивные и подвижные игры",
            },
            groups: [
               {
                  id: 1671825251655227000,
                  title: "9ФКб-01-1оп-20",
               },
            ],
            build: {
               id: 1490442417495610400,
               title: 'Спортивный комплекс "Университетский" (ул. Труда, 3)',
            },
            auditory: {
               id: 1671133117620949200,
               title: "1",
            },
            lecturers: [
               {
                  id: 1425480254933178000,
                  lastName: "Шкляр",
                  firstName: "Ольга",
                  middleName: "Брониславовна",
                  shortName: "Шкляр О. Б.",
                  fio: "Шкляр Ольга Брониславовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685297504940800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696842072032974000,
               title: "Прикладные информационные технологии",
            },
            groups: [
               {
                  id: 1705969217206875600,
                  title: "3ТМб-01-1оп-21",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490435777622970600,
               title: "27б",
            },
            lecturers: [
               {
                  id: 1424935238807590700,
                  lastName: "Мащенко",
                  firstName: "Марина",
                  middleName: "Александровна",
                  shortName: "Мащенко М. А.",
                  fio: "Мащенко Марина Александровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685221296534300,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1602604374937310500,
               title: "Методологические основы психологии",
            },
            groups: [
               {
                  id: 1609302467033437700,
                  title: "4ПСД-01-1оп-18",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292951388400,
               title: "612",
            },
            lecturers: [
               {
                  id: 1425475133716305700,
                  lastName: "Смирнова",
                  firstName: "Ольга",
                  middleName: "Валериевна",
                  shortName: "Смирнова О. В.",
                  fio: "Смирнова Ольга Валериевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685269603382000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1682591902915892500,
               title: "Социология общественного мнения",
            },
            groups: [
               {
                  id: 1641733989795370500,
                  title: "2Сб-00-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254003413200,
               title: "504",
            },
            lecturers: [
               {
                  id: 1424935477039863600,
                  lastName: "Мехова",
                  firstName: "Альбина",
                  middleName: "Анатольевна",
                  shortName: "Мехова А. А.",
                  fio: "Мехова Альбина Анатольевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685285710558000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1728093643399361800,
               title: "Менеджмент и организация производства",
            },
            groups: [
               {
                  id: 1641742539920774700,
                  title: "3МТб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436480212930800,
               title: "40",
            },
            lecturers: [
               {
                  id: 1421224411620448000,
                  lastName: "Деткова",
                  firstName: "Татьяна",
                  middleName: "Викторовна",
                  shortName: "Деткова Т. В.",
                  fio: "Деткова Татьяна Викторовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685320068199200,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1727369724120921300,
               title: "Физика технических объектов (пг2)",
            },
            groups: [
               {
                  id: 1739582424522552800,
                  title: "1АПб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624649097500,
               title: "325",
            },
            lecturers: [
               {
                  id: 1425494008685139700,
                  lastName: "Козырева",
                  firstName: "Яна",
                  middleName: "Анатольевна",
                  shortName: "Козырева Я. А.",
                  fio: "Козырева Яна Анатольевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747910084377047800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1641826544721598000,
                  title: "1ИСб-00-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1671012457577976000,
               title: "301а",
            },
            lecturers: [
               {
                  id: 1396414847681304300,
                  lastName: "Ершов",
                  firstName: "Евгений",
                  middleName: "Валентинович",
                  shortName: "Ершов Е. В.",
                  fio: "Ершов Евгений Валентинович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685288943317800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1667368851928520000,
               title: "Охрана труда (пг1)",
            },
            groups: [
               {
                  id: 1641742799740081700,
                  title: "3ТБб-02-1оп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "онлайн",
            },
            lecturers: [
               {
                  id: 1421225803000059600,
                  lastName: "Егоренкова",
                  firstName: "Светлана",
                  middleName: "Владимировна",
                  shortName: "Егоренкова С. В.",
                  fio: "Егоренкова Светлана Владимировна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685238547706600,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696552890722686200,
               title: "Основы проектной деятельности",
            },
            groups: [
               {
                  id: 1705969217183807000,
                  title: "3СТб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254075765000,
               title: "519",
            },
            lecturers: [
               {
                  id: 1472041884927924000,
                  lastName: "Котик",
                  firstName: "Екатерина",
                  middleName: "Михайловна",
                  shortName: "Котик Е. М.",
                  fio: "Котик Екатерина Михайловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685210635662000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1665206419934156000,
               title: "Дизайн-мышление. Методология работы с клиентом (пг6)",
            },
            groups: [
               {
                  id: 1671818050910819800,
                  title: "2Дб-03-1оп-20",
               },
               {
                  id: 1671817830092248600,
                  title: "2РТПб-01-1оп-20",
               },
               {
                  id: 1671816872111117800,
                  title: "2ЖУРб-00-1оп-20",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1471774257598959900,
               title: "201",
            },
            lecturers: [
               {
                  id: 1466623234877167400,
                  lastName: "Крылова",
                  firstName: "Наталья",
                  middleName: "Павловна",
                  shortName: "Крылова Н. П.",
                  fio: "Крылова Наталья Павловна",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685224593257200,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1726915690901665000,
               title: "Специальная психология и специальная педагогика",
            },
            groups: [
               {
                  id: 1739582424530941400,
                  title: "4СДОб-01-1оп-22",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490437243336135000,
               title: "104",
            },
            lecturers: [
               {
                  id: 1424937474384205600,
                  lastName: "Пепик",
                  firstName: "Лариса",
                  middleName: "Александровна",
                  shortName: "Пепик Л. А.",
                  fio: "Пепик Лариса Александровна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685308307370800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696821962114241800,
               title: "Физико-химические основы подготовки топлива, воды и очистки промышленных стоков (пг2)",
            },
            groups: [
               {
                  id: 1705969217204778500,
                  title: "3ТТб-01-1оп-21",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490435838350201000,
               title: "28",
            },
            lecturers: [
               {
                  id: 1421062443614869200,
                  lastName: "Антонова",
                  firstName: "Юлия",
                  middleName: "Валерьевна",
                  shortName: "Антонова Ю. В.",
                  fio: "Антонова Юлия Валерьевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685283713020700,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1631607623427036400,
               title: "Большой практикум по ботанике и зоологии (пг1)",
            },
            groups: [
               {
                  id: 1641736941696194000,
                  title: "9Бб-01-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520895803600,
               title: "901",
            },
            lecturers: [
               {
                  id: 1539181737125353200,
                  lastName: "Трошин",
                  firstName: "Дмитрий",
                  middleName: "Сергеевич",
                  shortName: "Трошин Д. С.",
                  fio: "Трошин Дмитрий Сергеевич",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685253661881000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1602598952632325400,
               title: "Меры предупреждения, средства и методы борьбы с наркоманией",
            },
            groups: [
               {
                  id: 1624632741121234400,
                  title: "9ПДОпб-17-1оп-18",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490438777526555000,
               title: "302",
            },
            lecturers: [
               {
                  id: 1425490090668332800,
                  lastName: "Воробьева",
                  firstName: "Ольга",
                  middleName: "Сергеевна",
                  shortName: "Воробьева О. С.",
                  fio: "Воробьева Ольга Сергеевна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685327704978200,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1631794411180397800,
               title: "Спортивная физиология",
            },
            groups: [
               {
                  id: 1641735286599718400,
                  title: "9ФКб-01-1оп-19",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490438777520263400,
               title: "301",
            },
            lecturers: [
               {
                  id: 1431205958015522600,
                  lastName: "Воробьев",
                  firstName: "Владислав",
                  middleName: "Федорович",
                  shortName: "Воробьев В. Ф.",
                  fio: "Воробьев Владислав Федорович",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685261140325000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696371490959660300,
               title: "Количественные методы социологического исследования",
            },
            groups: [
               {
                  id: 1705969217197438500,
                  title: "2Сб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345253992927500,
               title: "502",
            },
            lecturers: [
               {
                  id: 1487089376426989300,
                  lastName: "Аула",
                  firstName: "Екатерина",
                  middleName: "Романовна",
                  shortName: "Аула Е. Р.",
                  fio: "Аула Екатерина Романовна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748205006462251800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 0,
               title: "Вакцинация от гриппа",
            },
            groups: [
               {
                  id: 1705969217227847200,
                  title: "1ПМб-03-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1491992159538123000,
               title: "103",
            },
            lecturers: [
               {
                  id: 1747850345543759600,
                  lastName: "Пукело",
                  firstName: "Елена",
                  middleName: "Вячеславовна",
                  shortName: "Пукело Е. В.",
                  fio: "Пукело Елена Вячеславовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685217759687400,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696206468770960600,
               title: "Общий психологический практикум (пг2)",
            },
            groups: [
               {
                  id: 1705969217207924200,
                  title: "4ВППб-03-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292937757000,
               title: "608",
            },
            lecturers: [
               {
                  id: 1424932151988590300,
                  lastName: "Кудака",
                  firstName: "Марина",
                  middleName: "Александровна",
                  shortName: "Кудака М. А.",
                  fio: "Кудака Марина Александровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685267118257000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696374706711565600,
               title: "Деловые коммуникации на русском языке",
            },
            groups: [
               {
                  id: 1705969217176467000,
                  title: "3ХТб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048733897000,
               title: "812",
            },
            lecturers: [
               {
                  id: 1542458392440739600,
                  lastName: "Неклюдова",
                  firstName: "Евгения",
                  middleName: "Александровна",
                  shortName: "Неклюдова Е. А.",
                  fio: "Неклюдова Евгения Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685276794516200,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1724381112242664700,
               title: "Введение в цифровую культуру (пг2)",
            },
            groups: [
               {
                  id: 1739582424568690200,
                  title: "2Тб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292973408500,
               title: "616",
            },
            lecturers: [
               {
                  id: 1666101788188612400,
                  lastName: "Терентьева",
                  firstName: "Алла",
                  middleName: "Федоровна",
                  shortName: "Терентьева А. Ф.",
                  fio: "Терентьева Алла Федоровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747293038685582000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696205978097161500,
               title: "Структуры и алгоритмы обработки данных (пг1)",
            },
            groups: [
               {
                  id: 1705969217175418400,
                  title: "1ПИб-01-2оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378724364500,
               title: "228",
            },
            lecturers: [
               {
                  id: 1424939460407072500,
                  lastName: "Пышницкий",
                  firstName: "Константин",
                  middleName: "Михайлович",
                  shortName: "Пышницкий К. М.",
                  fio: "Пышницкий Константин Михайлович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685246826214100,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696562638011503900,
               title: "Профилактика применения допинга в спорте",
            },
            groups: [
               {
                  id: 1705969217214215700,
                  title: "9АФКб-01-1оп-21",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490438777542283500,
               title: "306",
            },
            lecturers: [
               {
                  id: 1442610529975670500,
                  lastName: "Козырева",
                  firstName: "Дарья",
                  middleName: "Андреевна",
                  shortName: "Козырева Д. А.",
                  fio: "Козырева Дарья Андреевна",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749098218200626000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1699721155761837300,
               title: "Режиссура театрализованных представлений и праздников",
            },
            groups: [
               {
                  id: 1671817775651231200,
                  title: "2РТПб-01-1зп-20",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1479484308403001000,
                  lastName: "Хорошавин",
                  firstName: "Олег",
                  middleName: "Николаевич",
                  shortName: "Хорошавин О. Н.",
                  fio: "Хорошавин Олег Николаевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685301531472600,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696925071320716500,
               title: "Материаловедение и технология конструкционных материалов (пг2)",
            },
            groups: [
               {
                  id: 1705969217168078300,
                  title: "3ТБб-02-1оп-21",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490372835492761900,
               title: "17",
            },
            lecturers: [
               {
                  id: 1424936877166696200,
                  lastName: "Окунева",
                  firstName: "Татьяна",
                  middleName: "Александровна",
                  shortName: "Окунева Т. А.",
                  fio: "Окунева Татьяна Александровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685294128526000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696842091338306800,
               title: "Физическая химия",
            },
            groups: [
               {
                  id: 1705969217203730000,
                  title: "3МТб-01-1оп-21",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490364153894801700,
               title: "421",
            },
            lecturers: [
               {
                  id: 1421234853330818800,
                  lastName: "Калько",
                  firstName: "Оксана",
                  middleName: "Александровна",
                  shortName: "Калько О. А.",
                  fio: "Калько Оксана Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685211459842800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1665206418672719000,
               title: "Системное мышление в проекте (пг3)",
            },
            groups: [
               {
                  id: 1671816734752904700,
                  title: "2СОб-00-1оп-20",
               },
               {
                  id: 1671817437751809500,
                  title: "2Лб-02-1оп-20",
               },
               {
                  id: 1671816269488199200,
                  title: "2Сб-00-1оп-20",
               },
               {
                  id: 1671817028908881400,
                  title: "2Тб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347924011356400,
               title: "719",
            },
            lecturers: [
               {
                  id: 1472590680489465600,
                  lastName: "Ловкова",
                  firstName: "Екатерина",
                  middleName: "Александровна",
                  shortName: "Ловкова Е. А.",
                  fio: "Ловкова Екатерина Александровна",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685242585772800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1631701234767369500,
               title: "Ценообразование и сметное дело в строительстве",
            },
            groups: [
               {
                  id: 1641852232647317000,
                  title: "3СТб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490356052340773000,
               title: "301",
            },
            lecturers: [
               {
                  id: 1421220130654787300,
                  lastName: "Гендлина",
                  firstName: "Юлия",
                  middleName: "Борисовна",
                  shortName: "Гендлина Ю. Б.",
                  fio: "Гендлина Юлия Борисовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685259759350500,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1631614279389025500,
               title: "Профессиональные творческие студии",
            },
            groups: [
               {
                  id: 1641734195482990000,
                  title: "2ЖУРб-00-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776422908200,
               title: "407",
            },
            lecturers: [
               {
                  id: 1425477852516587300,
                  lastName: "Дворянова",
                  firstName: "Мария",
                  middleName: "Валерьевна",
                  shortName: "Дворянова М. В.",
                  fio: "Дворянова Мария Валерьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685304822952700,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696834043297305900,
               title: "Иностранный язык (англ)",
            },
            groups: [
               {
                  id: 1705969217216312800,
                  title: "3ЭЭб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520911532300,
               title: "905",
            },
            lecturers: [
               {
                  id: 1704794965414901500,
                  lastName: "Першина",
                  firstName: "Елена",
                  middleName: "Юрьевна",
                  shortName: "Першина Е. Ю.",
                  fio: "Першина Елена Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685306979873500,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1610854891195995400,
               title: "Бережливое производство",
            },
            groups: [
               {
                  id: 1641737111948236300,
                  title: "7Эб-05-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436425404911900,
               title: "37",
            },
            lecturers: [
               {
                  id: 1424940005267085000,
                  lastName: "Румянцев",
                  firstName: "Вадим",
                  middleName: "Владимирович",
                  shortName: "Румянцев В. В.",
                  fio: "Румянцев Вадим Владимирович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685215830307600,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1726375036660348200,
               title: "Археология",
            },
            groups: [
               {
                  id: 1739582424591758800,
                  title: "2Иб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923984093400,
               title: "713",
            },
            lecturers: [
               {
                  id: 1424931000228517600,
                  lastName: "Косорукова",
                  firstName: "Наталья",
                  middleName: "Валентиновна",
                  shortName: "Косорукова Н. В.",
                  fio: "Косорукова Наталья Валентиновна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685210437481200,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1665206419934156000,
               title: "Дизайн-мышление. Методология работы с клиентом (пг3)",
            },
            groups: [
               {
                  id: 1671817586681058800,
                  title: "2Иб-00-1оп-20",
               },
               {
                  id: 1671816734752904700,
                  title: "2СОб-00-1оп-20",
               },
               {
                  id: 1671817437751809500,
                  title: "2Лб-02-1оп-20",
               },
               {
                  id: 1671816269488199200,
                  title: "2Сб-00-1оп-20",
               },
               {
                  id: 1671817028908881400,
                  title: "2Тб-00-1оп-20",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490437674469691600,
               title: "202",
            },
            lecturers: [
               {
                  id: 1478026529608832800,
                  lastName: "Ковшикова",
                  firstName: "Галина",
                  middleName: "Александровна",
                  shortName: "Ковшикова Г. А.",
                  fio: "Ковшикова Галина Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685263044539100,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1695925758777628000,
               title: "Уголовное право",
            },
            groups: [
               {
                  id: 1705969217223652900,
                  title: "2Юб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776448074000,
               title: "415",
            },
            lecturers: [
               {
                  id: 1613312225126127400,
                  lastName: "Петрова",
                  firstName: "Валентина",
                  middleName: "Владимировна",
                  shortName: "Петрова В. В.",
                  fio: "Петрова Валентина Владимировна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747912184138953500,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1641826730461107700,
                  title: "1ПИб-01-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1671012499597562000,
               title: "301б",
            },
            lecturers: [
               {
                  id: 1396414847681304300,
                  lastName: "Ершов",
                  firstName: "Евгений",
                  middleName: "Валентинович",
                  shortName: "Ершов Е. В.",
                  fio: "Ершов Евгений Валентинович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748839759401055000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1631859901515961600,
               title: "Технологии интерактивного дизайна и инфографика",
            },
            groups: [
               {
                  id: 1641734658765887000,
                  title: "2Дб-03-1зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1643564843915024100,
                  lastName: "Шигорина",
                  firstName: "Виктория",
                  middleName: "Николаевна",
                  shortName: "Шигорина В. Н.",
                  fio: "Шигорина Виктория Николаевна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1748192434894795500,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 0,
               title: "Вакцинация от гриппа",
            },
            groups: [
               {
                  id: 1705969217226798600,
                  title: "1ПМб-02-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1491992159538123000,
               title: "103",
            },
            lecturers: [
               {
                  id: 1747850345543759600,
                  lastName: "Пукело",
                  firstName: "Елена",
                  middleName: "Вячеславовна",
                  shortName: "Пукело Е. В.",
                  fio: "Пукело Елена Вячеславовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749178361932804900,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696461450549138700,
               title: "Сценарное мастерство",
            },
            groups: [
               {
                  id: 1705969217248818700,
                  title: "2РТПб-01-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1421224373890586400,
                  lastName: "Дергачев",
                  firstName: "Евгений",
                  middleName: "Иванович",
                  shortName: "Дергачев Е. И.",
                  fio: "Дергачев Евгений Иванович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685211016295200,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1666017470364783900,
               title: "Теория решения изобретательских задач (пг1)",
            },
            groups: [
               {
                  id: 1671823357212890600,
                  title: "3ТБб-02-1оп-20",
               },
               {
                  id: 1671823433121404400,
                  title: "3МТб-01-1оп-20",
               },
               {
                  id: 1671822128479999500,
                  title: "3ТТб-01-1оп-20",
               },
               {
                  id: 1671823827303143000,
                  title: "3НТТС-01-1оп-20",
               },
               {
                  id: 1671823795820697000,
                  title: "3ЭТМпб-01-1оп-20",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490435408634319000,
               title: "24",
            },
            lecturers: [
               {
                  id: 1430463259006211800,
                  lastName: "Болобанова",
                  firstName: "Наталия",
                  middleName: "Леонидовна",
                  shortName: "Болобанова Н. Л.",
                  fio: "Болобанова Наталия Леонидовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685212085842700,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1666584871503402200,
               title: "Физическая культура и спорт (элективная дисциплина)",
            },
            groups: [
               {
                  id: 1671815449735599600,
                  title: "7Эб-05-1оп-20",
               },
               {
                  id: 1671815301225780700,
                  title: "7Эб-04-1оп-20",
               },
               {
                  id: 1671815510729168400,
                  title: "7УПпб-01-1оп-20",
               },
               {
                  id: 1671815577865295400,
                  title: "7ЭБ-01-1оп-20",
               },
               {
                  id: 1671825067435103700,
                  title: "9Бб-01-1оп-20",
               },
            ],
            build: {
               id: 1492901605554525200,
               title: "Спортивный корпус (ул.Труда,д.3)",
            },
            auditory: {
               id: 1493343626573386000,
               title: "1/4",
            },
            lecturers: [
               {
                  id: 1421217061928966000,
                  lastName: "Василенкова",
                  firstName: "Татьяна",
                  middleName: "Александровна",
                  shortName: "Василенкова Т. А.",
                  fio: "Василенкова Татьяна Александровна",
               },
               {
                  id: 1513203073464407800,
                  lastName: "Прядехина",
                  firstName: "Мария",
                  middleName: "Сергеевна",
                  shortName: "Прядехина М. С.",
                  fio: "Прядехина Мария Сергеевна",
               },
               {
                  id: 1644364336262551300,
                  lastName: "Гаврикова",
                  firstName: "Ольга",
                  middleName: "Юрьевна",
                  shortName: "Гаврикова О. Ю.",
                  fio: "Гаврикова Ольга Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685312050787000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1727283714860119300,
               title: "Прикладная математика",
            },
            groups: [
               {
                  id: 1739582424515212800,
                  title: "3ХТб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624670069000,
               title: "331",
            },
            lecturers: [
               {
                  id: 1704067497327458000,
                  lastName: "Лаптева",
                  firstName: "Екатерина",
                  middleName: "Сергеевна",
                  shortName: "Лаптева Е. С.",
                  fio: "Лаптева Екатерина Сергеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685323862995700,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1727260022014866700,
               title: "Информатика и информационно-коммуникационные технологии",
            },
            groups: [
               {
                  id: 1739582424539330000,
                  title: "1ПДОб-15-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292984942800,
               title: "619",
            },
            lecturers: [
               {
                  id: 1425474998634551000,
                  lastName: "Смирнова",
                  firstName: "Елена",
                  middleName: "Анатольевна",
                  shortName: "Смирнова Е. А.",
                  fio: "Смирнова Елена Анатольевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685298105774800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1697106568682050800,
               title: "Деловые коммуникации на русском языке",
            },
            groups: [
               {
                  id: 1705969217172272600,
                  title: "3НТТС-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048724459800,
               title: "810",
            },
            lecturers: [
               {
                  id: 1505925647773472500,
                  lastName: "Дивеева",
                  firstName: "Алина",
                  middleName: "Альбертовна",
                  shortName: "Дивеева А. А.",
                  fio: "Дивеева Алина Альбертовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749114675966899000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1665834630669931800,
               title: "Актуальные тенденции коммуникативного дизайна",
            },
            groups: [
               {
                  id: 1671817906535536000,
                  title: "2Дб-03-1зп-20",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1421219906975700700,
                  lastName: "Галунова",
                  firstName: "Светлана",
                  middleName: "Николаевна",
                  shortName: "Галунова С. Н.",
                  fio: "Галунова Светлана Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1748454574832612000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1727268397373060400,
               title: "Программа личностного и профессионального развития",
            },
            groups: [
               {
                  id: 1739582424517310000,
                  title: "3ТТб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624626028800,
               title: "319",
            },
            lecturers: [
               {
                  id: 1747840152777914000,
                  lastName: "Елизарова",
                  firstName: "Людмила",
                  middleName: "Геннадьевна",
                  shortName: "Елизарова Л. Г.",
                  fio: "Елизарова Людмила Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749181254397195000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1695839342339036400,
               title: "Психология медиакоммуникаций",
            },
            groups: [
               {
                  id: 1705969217241478700,
                  title: "2ЖУРб-00-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1634137917545781000,
                  lastName: "Максимова",
                  firstName: "Татьяна",
                  middleName: "Николаевна",
                  shortName: "Максимова Т. Н.",
                  fio: "Максимова Татьяна Николаевна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1747827802681242400,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1711411474964804900,
               title: "Исследование социально-экономических процессов в регионе",
            },
            groups: [
               {
                  id: 1671816461186766300,
                  title: "2См-02-1зп-20",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1424483394675283700,
                  lastName: "Ковалева",
                  firstName: "Галина",
                  middleName: "Александровна",
                  shortName: "Ковалева Г. А.",
                  fio: "Ковалева Галина Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685211176727300,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1665206423591589000,
               title: "Экономика продукта проекта. Модели монетизации (пг4)",
            },
            groups: [
               {
                  id: 1671817586681058800,
                  title: "2Иб-00-1оп-20",
               },
               {
                  id: 1671823357212890600,
                  title: "3ТБб-02-1оп-20",
               },
               {
                  id: 1671823827303143000,
                  title: "3НТТС-01-1оп-20",
               },
               {
                  id: 1671817437751809500,
                  title: "2Лб-02-1оп-20",
               },
               {
                  id: 1671816269488199200,
                  title: "2Сб-00-1оп-20",
               },
               {
                  id: 1671817830092248600,
                  title: "2РТПб-01-1оп-20",
               },
               {
                  id: 1671817216591402500,
                  title: "2ПДОб-13-1оп-20",
               },
               {
                  id: 1671823795820697000,
                  title: "3ЭТМпб-01-1оп-20",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490437674475983000,
               title: "203",
            },
            lecturers: [
               {
                  id: 1552944620540794600,
                  lastName: "Варзунова",
                  firstName: "Вера",
                  middleName: "Васильевна",
                  shortName: "Варзунова В. В.",
                  fio: "Варзунова Вера Васильевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685340034134800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1668478955216180500,
               title: "Страхование",
            },
            groups: [
               {
                  id: 1641737034549696000,
                  title: "7Эб-04-1зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1443889749481756400,
                  lastName: "Кошелева",
                  firstName: "Алена",
                  middleName: "Владимировна",
                  shortName: "Кошелева А. В.",
                  fio: "Кошелева Алена Владимировна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685283134206700,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1601166744076948700,
               title: "Поэтика",
            },
            groups: [
               {
                  id: 1609298376906512000,
                  title: "2ПДОпб-13-1оп-18",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923942150400,
               title: "702",
            },
            lecturers: [
               {
                  id: 1425475486812739300,
                  lastName: "Соловьева",
                  firstName: "Елена",
                  middleName: "Евгеньевна",
                  shortName: "Соловьева Е. Е.",
                  fio: "Соловьева Елена Евгеньевна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685236925559600,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1725994618050180400,
               title: "Иностранный язык (англ пг2)",
            },
            groups: [
               {
                  id: 1739582424507872800,
                  title: "3СТб-01-2оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624613446000,
               title: "315",
            },
            lecturers: [
               {
                  id: 1424938073381148400,
                  lastName: "Поклад",
                  firstName: "Наталия",
                  middleName: "Игоревна",
                  shortName: "Поклад Н. И.",
                  fio: "Поклад Наталия Игоревна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685244429169400,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696559251810424000,
               title: "Физиология человека",
            },
            groups: [
               {
                  id: 1705969217199535600,
                  title: "9ФКб-01-1оп-21",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490438777561158000,
               title: "311",
            },
            lecturers: [
               {
                  id: 1471422084897838800,
                  lastName: "Долгих",
                  firstName: "Алиса",
                  middleName: "Леонидовна",
                  shortName: "Долгих А. Л.",
                  fio: "Долгих Алиса Леонидовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747577404360881000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 0,
               title: "Проектирования",
            },
            groups: [
               {
                  id: 1671822039042758100,
                  title: "3СТб-01-1оп-20",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490352157760688400,
               title: "113",
            },
            lecturers: [
               {
                  id: 1472422754815842000,
                  lastName: "Петровская",
                  firstName: "Алена",
                  middleName: "Анатольевна",
                  shortName: "Петровская А. А.",
                  fio: "Петровская Алена Анатольевна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685344393065200,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1666027086200968400,
               title: "Иностранный язык в профессиональной сфере (англ пг1)",
            },
            groups: [
               {
                  id: 1671820835577403000,
                  title: "1ПИб-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520918872300,
               title: "907",
            },
            lecturers: [
               {
                  id: 1421062942202271500,
                  lastName: "Арюхина",
                  firstName: "Елена",
                  middleName: "Геннадьевна",
                  shortName: "Арюхина Е. Г.",
                  fio: "Арюхина Елена Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685230554411800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1726282349481424100,
               title: "Практический курс английского языка (пг2)",
            },
            groups: [
               {
                  id: 1739582424555058700,
                  title: "2ПДОб-21-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048787374300,
               title: "823",
            },
            lecturers: [
               {
                  id: 1478386891657058000,
                  lastName: "Башнина",
                  firstName: "Александра",
                  middleName: "Викторовна",
                  shortName: "Башнина А. В.",
                  fio: "Башнина Александра Викторовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685224118252300,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696291666947741000,
               title: "Теоретическая механика",
            },
            groups: [
               {
                  id: 1705969217213167000,
                  title: "4ПДОб-20-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776413471000,
               title: "404",
            },
            lecturers: [
               {
                  id: 1425476574468118300,
                  lastName: "Тихонова",
                  firstName: "Людмила",
                  middleName: "Павловна",
                  shortName: "Тихонова Л. П.",
                  fio: "Тихонова Людмила Павловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685233762005800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696473008827274500,
               title: "Методика начального языкового образования (пг1)",
            },
            groups: [
               {
                  id: 1705969217212118500,
                  title: "4ПДОб-19-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048795763000,
               title: "825",
            },
            lecturers: [
               {
                  id: 1425479116566566700,
                  lastName: "Чистякова",
                  firstName: "Наталия",
                  middleName: "Николаевна",
                  shortName: "Чистякова Н. Н.",
                  fio: "Чистякова Наталия Николаевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685221519881000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1722476065400419600,
               title: "Основы производства материалов",
            },
            groups: [
               {
                  id: 1739582424569738800,
                  title: "4ПДОб-20-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624634417400,
               title: "321",
            },
            lecturers: [
               {
                  id: 1424935547273484000,
                  lastName: "Мироненко",
                  firstName: "Светлана",
                  middleName: "Николаевна",
                  shortName: "Мироненко С. Н.",
                  fio: "Мироненко Светлана Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685222591525600,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1695736862542402800,
               title: "Физическая культура и спорт (элективная дисциплина)",
            },
            groups: [
               {
                  id: 1705969217243575800,
                  title: "2ПДОб-21-1оп-21",
               },
            ],
            build: {
               id: 1492901605554525200,
               title: "Спортивный корпус (ул.Труда,д.3)",
            },
            auditory: {
               id: 1493343626573386000,
               title: "1/4",
            },
            lecturers: [
               {
                  id: 1644364336262551300,
                  lastName: "Гаврикова",
                  firstName: "Ольга",
                  middleName: "Юрьевна",
                  shortName: "Гаврикова О. Ю.",
                  fio: "Гаврикова Ольга Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685317037814500,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1727369702375552300,
               title: "Безопасность жизнедеятельности (пг1)",
            },
            groups: [
               {
                  id: 1739582424522552800,
                  title: "1АПб-01-1оп-22",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903827149000,
               title: "55",
            },
            lecturers: [
               {
                  id: 1733621848817399600,
                  lastName: "Горохова",
                  firstName: "Татьяна",
                  middleName: "Юрьевна",
                  shortName: "Горохова Т. Ю.",
                  fio: "Горохова Татьяна Юрьевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685238676681500,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696552648983975200,
               title: "Теоретическая механика",
            },
            groups: [
               {
                  id: 1705969217191147000,
                  title: "3СТб-04-1оп-21",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903835537700,
               title: "57",
            },
            lecturers: [
               {
                  id: 1424483270625597200,
                  lastName: "Клинов",
                  firstName: "Александр",
                  middleName: "Владимирович",
                  shortName: "Клинов А. В.",
                  fio: "Клинов Александр Владимирович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747577405857198800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 0,
               title: "Ознакомительная практика",
            },
            groups: [
               {
                  id: 1739582424505775600,
                  title: "1ПИб-02-3оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378649915600,
               title: "219",
            },
            lecturers: [
               {
                  id: 1421220781385324300,
                  lastName: "Гонтарева",
                  firstName: "Ирина",
                  middleName: "Борисовна",
                  shortName: "Гонтарева И. Б.",
                  fio: "Гонтарева Ирина Борисовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685344975025000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1665386300261275000,
               title: "Графические системы и языки",
            },
            groups: [
               {
                  id: 1671820801044649500,
                  title: "1ИСб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488369326572441900,
               title: "218а",
            },
            lecturers: [
               {
                  id: 1472314025600620300,
                  lastName: "Табунов",
                  firstName: "Павел",
                  middleName: "Александрович",
                  shortName: "Табунов П. А.",
                  fio: "Табунов Павел Александрович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685295666787000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1667372565336692000,
               title: "Проектирование предприятий по техническому сервису автомобилей",
            },
            groups: [
               {
                  id: 1641742924249044500,
                  title: "3ЭТМпб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903822954800,
               title: "54",
            },
            lecturers: [
               {
                  id: 1424936495844693800,
                  lastName: "Николаев",
                  firstName: "Василий",
                  middleName: "Васильевич",
                  shortName: "Николаев В. В.",
                  fio: "Николаев Василий Васильевич",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685321450222300,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1727277659983836400,
               title: "Иностранный язык (англ)",
            },
            groups: [
               {
                  id: 1739582424573933000,
                  title: "3МТб-03-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048808345900,
               title: "828",
            },
            lecturers: [
               {
                  id: 1429371784578209500,
                  lastName: "Исаева",
                  firstName: "Мария",
                  middleName: "Геннадьевна",
                  shortName: "Исаева М. Г.",
                  fio: "Исаева Мария Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685210846425900,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1666652154101765400,
               title: "Лидерство и управление командой (пг5)",
            },
            groups: [
               {
                  id: 1671823357212890600,
                  title: "3ТБб-02-1оп-20",
               },
               {
                  id: 1671823433121404400,
                  title: "3МТб-01-1оп-20",
               },
               {
                  id: 1671822128479999500,
                  title: "3ТТб-01-1оп-20",
               },
               {
                  id: 1671823827303143000,
                  title: "3НТТС-01-1оп-20",
               },
               {
                  id: 1671823795820697000,
                  title: "3ЭТМпб-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048777937200,
               title: "821",
            },
            lecturers: [
               {
                  id: 1431202970135959300,
                  lastName: "Балюшина",
                  firstName: "Юлия",
                  middleName: "Львовна",
                  shortName: "Балюшина Ю. Л.",
                  fio: "Балюшина Юлия Львовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685312805761800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1724815207709930800,
               title: "Игровая культура и праздник",
            },
            groups: [
               {
                  id: 1739582424526747100,
                  title: "2РТПб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488365888710119700,
               title: "201",
            },
            lecturers: [
               {
                  id: 1421218168724002600,
                  lastName: "Владимирова",
                  firstName: "Ольга",
                  middleName: "Александровна",
                  shortName: "Владимирова О. А.",
                  fio: "Владимирова Ольга Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685318193345300,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1695734762655716600,
               title: "Современный русский язык",
            },
            groups: [
               {
                  id: 1705969217240430000,
                  title: "2ЖУРб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624637563100,
               title: "322",
            },
            lecturers: [
               {
                  id: 1396217058267502300,
                  lastName: "Иванова",
                  firstName: "Елена",
                  middleName: "Михайловна",
                  shortName: "Иванова Е. М.",
                  fio: "Иванова Елена Михайловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685308621943600,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1696457657440802000,
               title: "История и теория праздничной культуры",
            },
            groups: [
               {
                  id: 1705969217182758400,
                  title: "2РТПб-01-1оп-21",
               },
            ],
            build: {
               id: 1471886253797414000,
               title: "Учебно-лабораторный корпус № 3 (ул.М.Горького, 14)",
            },
            auditory: {
               id: 1490442947335819500,
               title: "101",
            },
            lecturers: [
               {
                  id: 1424936606865823500,
                  lastName: "Новиков",
                  firstName: "Алексей",
                  middleName: "Евгеньевич",
                  shortName: "Новиков А. Е.",
                  fio: "Новиков Алексей Евгеньевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685230239839000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1726282327231690000,
               title: "Немецкий язык (пг1)",
            },
            groups: [
               {
                  id: 1739582424555058700,
                  title: "2ПДОб-21-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776483725600,
               title: "424",
            },
            lecturers: [
               {
                  id: 1424935322677942000,
                  lastName: "Межецкая",
                  firstName: "Галина",
                  middleName: "Николаевна",
                  shortName: "Межецкая Г. Н.",
                  fio: "Межецкая Галина Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685242036319000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1630503591206720800,
               title: "Технология карьеры",
            },
            groups: [
               {
                  id: 1641733818512578000,
                  title: "4ПДОб-19-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048783180000,
               title: "822",
            },
            lecturers: [
               {
                  id: 1448967915303868200,
                  lastName: "Рогожникова",
                  firstName: "Светлана",
                  middleName: "Мугумаевна",
                  shortName: "Рогожникова С. М.",
                  fio: "Рогожникова Светлана Мугумаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685220659000000,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1666035557273179400,
               title: "Психологическая коррекция и реабилитация",
            },
            groups: [
               {
                  id: 1671820629673776600,
                  title: "4ПСД-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292923076900,
               title: "604",
            },
            lecturers: [
               {
                  id: 1425476194401261300,
                  lastName: "Табунов",
                  firstName: "Иван",
                  middleName: "Александрович",
                  shortName: "Табунов И. А.",
                  fio: "Табунов Иван Александрович",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685277558928100,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1724286638049064200,
               title: "Устное народное творчество",
            },
            groups: [
               {
                  id: 1739582424554010000,
                  title: "2ПДОб-13-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048685662500,
               title: "802",
            },
            lecturers: [
               {
                  id: 1425476950857619200,
                  lastName: "Трубицына",
                  firstName: "Мария",
                  middleName: "Юрьевна",
                  shortName: "Трубицына М. Ю.",
                  fio: "Трубицына Мария Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685246385812200,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1722931211552028000,
               title: "Практикум по фонетике (английский язык) (пг1)",
            },
            groups: [
               {
                  id: 1739582424538281500,
                  title: "2Лб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254013899000,
               title: "506",
            },
            lecturers: [
               {
                  id: 1424935794245638000,
                  lastName: "Моисеенко",
                  firstName: "Анна",
                  middleName: "Валерьевна",
                  shortName: "Моисеенко А. В.",
                  fio: "Моисеенко Анна Валерьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685338716074800,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1584140473417602300,
               title: "Инновационный менеджмент",
            },
            groups: [
               {
                  id: 1609396466053289500,
                  title: "7ГМУб-00-1зп-18",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1425477168074332000,
                  lastName: "Тюлю",
                  firstName: "Галина",
                  middleName: "Михайловна",
                  shortName: "Тюлю Г. М.",
                  fio: "Тюлю Галина Михайловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685301136159500,
            dateEvent: "23.11.2022",
            startTime: "08:30",
            endTime: "10:00",
            discipline: {
               id: 1726901588739356000,
               title: "Безопасность жизнедеятельности (пг1)",
            },
            groups: [
               {
                  id: 1739582424503678500,
                  title: "1ПИб-02-1оп-22",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903818760400,
               title: "53",
            },
            lecturers: [
               {
                  id: 1424931426906675000,
                  lastName: "Кочнев",
                  firstName: "Александр",
                  middleName: "Олегович",
                  shortName: "Кочнев А. О.",
                  fio: "Кочнев Александр Олегович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747577411529995000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Технологическая практика 1",
            },
            groups: [
               {
                  id: 1705969217164932600,
                  title: "1ИСб-00-2оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378592244000,
               title: "212",
            },
            lecturers: [
               {
                  id: 1421218013576697600,
                  lastName: "Виноградова",
                  firstName: "Людмила",
                  middleName: "Николаевна",
                  shortName: "Виноградова Л. Н.",
                  fio: "Виноградова Людмила Николаевна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685325415936800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696291514885346600,
               title: "Деловые коммуникации на русском языке",
            },
            groups: [
               {
                  id: 1705969217194292700,
                  title: "1АПпб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254052696300,
               title: "514",
            },
            lecturers: [
               {
                  id: 1467259902987605800,
                  lastName: "Сальникова",
                  firstName: "Ольга",
                  middleName: "Сергеевна",
                  shortName: "Сальникова О. С.",
                  fio: "Сальникова Ольга Сергеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685341471732500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1631522011450709200,
               title: "Иностранный язык в профессиональной сфере (англ)",
            },
            groups: [
               {
                  id: 1671816872111117800,
                  title: "2ЖУРб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048759062800,
               title: "817",
            },
            lecturers: [
               {
                  id: 1421231715873986300,
                  lastName: "Зайцева",
                  firstName: "Татьяна",
                  middleName: "Александровна",
                  shortName: "Зайцева Т. А.",
                  fio: "Зайцева Татьяна Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685215833453300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1726375036660348200,
               title: "Археология",
            },
            groups: [
               {
                  id: 1739582424591758800,
                  title: "2Иб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520904192300,
               title: "903",
            },
            lecturers: [
               {
                  id: 1424931000228517600,
                  lastName: "Косорукова",
                  firstName: "Наталья",
                  middleName: "Валентиновна",
                  shortName: "Косорукова Н. В.",
                  fio: "Косорукова Наталья Валентиновна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747913182058247000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1671820870725670400,
                  title: "1ПИб-01-2оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1671012553029849300,
               title: "301в",
            },
            lecturers: [
               {
                  id: 1396414847681304300,
                  lastName: "Ершов",
                  firstName: "Евгений",
                  middleName: "Валентинович",
                  shortName: "Ершов Е. В.",
                  fio: "Ершов Евгений Валентинович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685285728383700,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1728093643399361800,
               title: "Менеджмент и организация производства",
            },
            groups: [
               {
                  id: 1641742539920774700,
                  title: "3МТб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436480212930800,
               title: "40",
            },
            lecturers: [
               {
                  id: 1421224411620448000,
                  lastName: "Деткова",
                  firstName: "Татьяна",
                  middleName: "Викторовна",
                  shortName: "Деткова Т. В.",
                  fio: "Деткова Татьяна Викторовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685238503666400,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696552888270067000,
               title: "Иностранный язык (англ пг1)",
            },
            groups: [
               {
                  id: 1705969217183807000,
                  title: "3СТб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624613446000,
               title: "315",
            },
            lecturers: [
               {
                  id: 1478386891657058000,
                  lastName: "Башнина",
                  firstName: "Александра",
                  middleName: "Викторовна",
                  shortName: "Башнина А. В.",
                  fio: "Башнина Александра Викторовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749098240495448800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1699721155761837300,
               title: "Режиссура театрализованных представлений и праздников",
            },
            groups: [
               {
                  id: 1671817775651231200,
                  title: "2РТПб-01-1зп-20",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1479484308403001000,
                  lastName: "Хорошавин",
                  firstName: "Олег",
                  middleName: "Николаевич",
                  shortName: "Хорошавин О. Н.",
                  fio: "Хорошавин Олег Николаевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685322257625900,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727372759189550300,
               title: "Алгебра и геометрия",
            },
            groups: [
               {
                  id: 1739582424524650000,
                  title: "1УТСб-02-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776429199600,
               title: "409",
            },
            lecturers: [
               {
                  id: 1704067497327458000,
                  lastName: "Лаптева",
                  firstName: "Екатерина",
                  middleName: "Сергеевна",
                  shortName: "Лаптева Е. С.",
                  fio: "Лаптева Екатерина Сергеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685221283951400,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1602604374937310500,
               title: "Методологические основы психологии",
            },
            groups: [
               {
                  id: 1609302467033437700,
                  title: "4ПСД-01-1оп-18",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292951388400,
               title: "612",
            },
            lecturers: [
               {
                  id: 1425475133716305700,
                  lastName: "Смирнова",
                  firstName: "Ольга",
                  middleName: "Валериевна",
                  shortName: "Смирнова О. В.",
                  fio: "Смирнова Ольга Валериевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685297523815200,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696842072032974000,
               title: "Прикладные информационные технологии",
            },
            groups: [
               {
                  id: 1705969217206875600,
                  title: "3ТМб-01-1оп-21",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490435777622970600,
               title: "27б",
            },
            lecturers: [
               {
                  id: 1424935238807590700,
                  lastName: "Мащенко",
                  firstName: "Марина",
                  middleName: "Александровна",
                  shortName: "Мащенко М. А.",
                  fio: "Мащенко Марина Александровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685320071345000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727369724120921300,
               title: "Физика технических объектов (пг2)",
            },
            groups: [
               {
                  id: 1739582424522552800,
                  title: "1АПб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624649097500,
               title: "325",
            },
            lecturers: [
               {
                  id: 1425494008685139700,
                  lastName: "Козырева",
                  firstName: "Яна",
                  middleName: "Анатольевна",
                  shortName: "Козырева Я. А.",
                  fio: "Козырева Яна Анатольевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685238459626200,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696552888270067000,
               title: "Иностранный язык (англ пг2)",
            },
            groups: [
               {
                  id: 1705969217183807000,
                  title: "3СТб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923946344700,
               title: "703",
            },
            lecturers: [
               {
                  id: 1424938073381148400,
                  lastName: "Поклад",
                  firstName: "Наталия",
                  middleName: "Игоревна",
                  shortName: "Поклад Н. И.",
                  fio: "Поклад Наталия Игоревна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685288945415000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1667368851928520000,
               title: "Охрана труда (пг1)",
            },
            groups: [
               {
                  id: 1641742799740081700,
                  title: "3ТБб-02-1оп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "онлайн",
            },
            lecturers: [
               {
                  id: 1421225803000059600,
                  lastName: "Егоренкова",
                  firstName: "Светлана",
                  middleName: "Владимировна",
                  shortName: "Егоренкова С. В.",
                  fio: "Егоренкова Светлана Владимировна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685309343363800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696457661747303700,
               title: "Хореография и пластика в театрализованных представлениях",
            },
            groups: [
               {
                  id: 1705969217182758400,
                  title: "2РТПб-01-1оп-21",
               },
            ],
            build: {
               id: 1471886253797414000,
               title: "Учебно-лабораторный корпус № 3 (ул.М.Горького, 14)",
            },
            auditory: {
               id: 1491982414359040300,
               title: "306",
            },
            lecturers: [
               {
                  id: 1672099246548981500,
                  lastName: "Горшков",
                  firstName: "Евгений",
                  middleName: "Владимирович",
                  shortName: "Горшков Е. В.",
                  fio: "Горшков Евгений Владимирович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685224608985900,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1726915690901665000,
               title: "Специальная психология и специальная педагогика",
            },
            groups: [
               {
                  id: 1739582424530941400,
                  title: "4СДОб-01-1оп-22",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490437243336135000,
               title: "104",
            },
            lecturers: [
               {
                  id: 1424937474384205600,
                  lastName: "Пепик",
                  firstName: "Лариса",
                  middleName: "Александровна",
                  shortName: "Пепик Л. А.",
                  fio: "Пепик Лариса Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685319086732000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727272721829459200,
               title: "Прикладная математика",
            },
            groups: [
               {
                  id: 1739582424523601400,
                  title: "3ТБб-02-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254079959300,
               title: "520",
            },
            lecturers: [
               {
                  id: 1504047283669309200,
                  lastName: "Чуев",
                  firstName: "Антон",
                  middleName: "Андреевич",
                  shortName: "Чуев А. А.",
                  fio: "Чуев Антон Андреевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685308329390800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696821962114241800,
               title: "Физико-химические основы подготовки топлива, воды и очистки промышленных стоков (пг2)",
            },
            groups: [
               {
                  id: 1705969217204778500,
                  title: "3ТТб-01-1оп-21",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490435838350201000,
               title: "28",
            },
            lecturers: [
               {
                  id: 1421062443614869200,
                  lastName: "Антонова",
                  firstName: "Юлия",
                  middleName: "Валерьевна",
                  shortName: "Антонова Ю. В.",
                  fio: "Антонова Юлия Валерьевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685231000056600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696458006925940000,
               title: "Иностранный язык (англ)",
            },
            groups: [
               {
                  id: 1705969217226798600,
                  title: "1ПМб-02-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048748577000,
               title: "815",
            },
            lecturers: [
               {
                  id: 1704794965414901500,
                  lastName: "Першина",
                  firstName: "Елена",
                  middleName: "Юрьевна",
                  shortName: "Першина Е. Ю.",
                  fio: "Першина Елена Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747911124668248800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1641825764392310300,
                  title: "1ПМб-01-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1671012604089209000,
               title: "301г",
            },
            lecturers: [
               {
                  id: 1448877800173868800,
                  lastName: "Венедиктов",
                  firstName: "Максим",
                  middleName: "Ильич",
                  shortName: "Венедиктов М. И.",
                  fio: "Венедиктов Максим Ильич",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748204671806075600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Вакцинация от гриппа",
            },
            groups: [
               {
                  id: 1671823055054182000,
                  title: "3ХТпб-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1491992159538123000,
               title: "103",
            },
            lecturers: [
               {
                  id: 1747850345543759600,
                  lastName: "Пукело",
                  firstName: "Елена",
                  middleName: "Вячеславовна",
                  shortName: "Пукело Е. В.",
                  fio: "Пукело Елена Вячеславовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685236486206200,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1725994625777137000,
               title: "Прикладные информационные технологии",
            },
            groups: [
               {
                  id: 1739582424507872800,
                  title: "3СТб-01-2оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292984942800,
               title: "619",
            },
            lecturers: [
               {
                  id: 1425474998634551000,
                  lastName: "Смирнова",
                  firstName: "Елена",
                  middleName: "Анатольевна",
                  shortName: "Смирнова Е. А.",
                  fio: "Смирнова Елена Анатольевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685283722457900,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1631607623427036400,
               title: "Большой практикум по ботанике и зоологии (пг1)",
            },
            groups: [
               {
                  id: 1641736941696194000,
                  title: "9Бб-01-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520895803600,
               title: "901",
            },
            lecturers: [
               {
                  id: 1539181737125353200,
                  lastName: "Трошин",
                  firstName: "Дмитрий",
                  middleName: "Сергеевич",
                  shortName: "Трошин Д. С.",
                  fio: "Трошин Дмитрий Сергеевич",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747737189698892500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696390858755020000,
               title: "Информационные и коммуникационные технологии в инклюзивном образовании",
            },
            groups: [
               {
                  id: 1705969217246721500,
                  title: "4СДОм-03-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "онлайн",
            },
            lecturers: [
               {
                  id: 1421215484534069000,
                  lastName: "Борисова",
                  firstName: "Наталья",
                  middleName: "Альбертовна",
                  shortName: "Борисова Н. А.",
                  fio: "Борисова Наталья Альбертовна",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685237531636500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1726358783491175700,
               title: "Математическая логика",
            },
            groups: [
               {
                  id: 1739582424574981600,
                  title: "1ПМб-02-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624670069000,
               title: "331",
            },
            lecturers: [
               {
                  id: 1424937863291606800,
                  lastName: "Плотникова",
                  firstName: "Надежда",
                  middleName: "Валентиновна",
                  shortName: "Плотникова Н. В.",
                  fio: "Плотникова Надежда Валентиновна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685276807099100,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1724381112242664700,
               title: "Введение в цифровую культуру (пг2)",
            },
            groups: [
               {
                  id: 1739582424568690200,
                  title: "2Тб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292973408500,
               title: "616",
            },
            lecturers: [
               {
                  id: 1666101788188612400,
                  lastName: "Терентьева",
                  firstName: "Алла",
                  middleName: "Федоровна",
                  shortName: "Терентьева А. Ф.",
                  fio: "Терентьева Алла Федоровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748923431866200800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1665390776797894000,
               title: "Проектирование в профессиональной сфере",
            },
            groups: [
               {
                  id: 1643726844876297700,
                  title: "2Тб-00-1зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1511087872294262500,
                  lastName: "Граф",
                  firstName: "Софья",
                  middleName: "Владимировна",
                  shortName: "Граф С. В.",
                  fio: "Граф Софья Владимировна",
               },
            ],
            abbrlessontype: "икр",
            lessontype: "Иная конт.раб.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685267165442800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696374712299427000,
               title: "Технология проектной деятельности",
            },
            groups: [
               {
                  id: 1705969217176467000,
                  title: "3ХТб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048733897000,
               title: "812",
            },
            lecturers: [
               {
                  id: 1472041884927924000,
                  lastName: "Котик",
                  firstName: "Екатерина",
                  middleName: "Михайловна",
                  shortName: "Котик Е. М.",
                  fio: "Котик Екатерина Михайловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685272518423300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1632221808672380200,
               title: "Практикум по устной речи (пг1)",
            },
            groups: [
               {
                  id: 1641732085136758300,
                  title: "2Лб-02-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923956830500,
               title: "706",
            },
            lecturers: [
               {
                  id: 1425479757823219500,
                  lastName: "Швец",
                  firstName: "Варвара",
                  middleName: "Михайловна",
                  shortName: "Швец В. М.",
                  fio: "Швец Варвара Михайловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685290769937200,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727277899334940000,
               title: "Иностранный язык (англ пг2)",
            },
            groups: [
               {
                  id: 1739582424511018500,
                  title: "1ИТСб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520911532300,
               title: "905",
            },
            lecturers: [
               {
                  id: 1729906009590069000,
                  lastName: "Чуева",
                  firstName: "Мария",
                  middleName: "Викторовна",
                  shortName: "Чуева М. В.",
                  fio: "Чуева Мария Викторовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685290729042700,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727277899334940000,
               title: "Иностранный язык (англ пг1)",
            },
            groups: [
               {
                  id: 1739582424511018500,
                  title: "1ИТСб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520946135300,
               title: "914",
            },
            lecturers: [
               {
                  id: 1577151136250468000,
                  lastName: "Шмакова",
                  firstName: "Вероника",
                  middleName: "Николаевна",
                  shortName: "Шмакова В. Н.",
                  fio: "Шмакова Вероника Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685254249083600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1602599097741612300,
               title: "Теория и методика физического воспитания школьников с отклонениями в  состоянии здоровья",
            },
            groups: [
               {
                  id: 1624632741121234400,
                  title: "9ПДОпб-17-1оп-18",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490438777526555000,
               title: "302",
            },
            lecturers: [
               {
                  id: 1425490090668332800,
                  lastName: "Воробьева",
                  firstName: "Ольга",
                  middleName: "Сергеевна",
                  shortName: "Воробьева О. С.",
                  fio: "Воробьева Ольга Сергеевна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685328320492300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1602435185869067500,
               title: "Контроль и ревизия",
            },
            groups: [
               {
                  id: 1609302546088728000,
                  title: "7ЭБ-01-1оп-18",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1710344616300902100,
                  lastName: "Малкова",
                  firstName: "Ирина",
                  middleName: "Алфеевна",
                  shortName: "Малкова И. А.",
                  fio: "Малкова Ирина Алфеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685224152855300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696291666947741000,
               title: "Теоретическая механика",
            },
            groups: [
               {
                  id: 1705969217213167000,
                  title: "4ПДОб-20-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776413471000,
               title: "404",
            },
            lecturers: [
               {
                  id: 1425476574468118300,
                  lastName: "Тихонова",
                  firstName: "Людмила",
                  middleName: "Павловна",
                  shortName: "Тихонова Л. П.",
                  fio: "Тихонова Людмила Павловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685281166029600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1634755372448224500,
               title: "Скульптурно-пластическое моделирование",
            },
            groups: [
               {
                  id: 1641743792550712800,
                  title: "3ДАСб-00-1оп-19",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490353917950693600,
               title: "201",
            },
            lecturers: [
               {
                  id: 1424931792252573400,
                  lastName: "Краузе",
                  firstName: "Елена",
                  middleName: "Сергеевна",
                  shortName: "Краузе Е. С.",
                  fio: "Краузе Елена Сергеевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749017717775397600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1665382187625616600,
               title: "Дизайн сетевых изданий",
            },
            groups: [
               {
                  id: 1671816807348967000,
                  title: "2ЖУРб-00-1зп-20",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1538002374808835800,
                  lastName: "Филинова",
                  firstName: "Анастасия",
                  middleName: "Павловна",
                  shortName: "Филинова А. П.",
                  fio: "Филинова Анастасия Павловна",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746922532621906700,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1726910917442925800,
               title: "Иностранный язык (англ пг2)",
            },
            groups: [
               {
                  id: 1739582424548767200,
                  title: "4ВППб-03-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048772694300,
               title: "820",
            },
            lecturers: [
               {
                  id: 1421061661793458000,
                  lastName: "Андреева",
                  firstName: "Татьяна",
                  middleName: "Анатольевна",
                  shortName: "Андреева Т. А.",
                  fio: "Андреева Татьяна Анатольевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685301584950000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696925071320716500,
               title: "Материаловедение и технология конструкционных материалов (пг2)",
            },
            groups: [
               {
                  id: 1705969217168078300,
                  title: "3ТБб-02-1оп-21",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490372835492761900,
               title: "17",
            },
            lecturers: [
               {
                  id: 1424936877166696200,
                  lastName: "Окунева",
                  firstName: "Татьяна",
                  middleName: "Александровна",
                  shortName: "Окунева Т. А.",
                  fio: "Окунева Татьяна Александровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685272593920800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727264209181209900,
               title: "Архитектурно-дизайнерское проектирование.Уровень 1",
            },
            groups: [
               {
                  id: 1739582424576030200,
                  title: "3ДАСб-00-1оп-22",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490353917954888000,
               title: "202",
            },
            lecturers: [
               {
                  id: 1421225095710381800,
                  lastName: "Дорофеюк",
                  firstName: "Наталья",
                  middleName: "Венеровна",
                  shortName: "Дорофеюк Н. В.",
                  fio: "Дорофеюк Наталья Венеровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685217787999000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696206468770960600,
               title: "Общий психологический практикум (пг2)",
            },
            groups: [
               {
                  id: 1705969217207924200,
                  title: "4ВППб-03-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292937757000,
               title: "608",
            },
            lecturers: [
               {
                  id: 1424932151988590300,
                  lastName: "Кудака",
                  firstName: "Марина",
                  middleName: "Александровна",
                  shortName: "Кудака М. А.",
                  fio: "Кудака Марина Александровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685230677095200,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696479536065025300,
               title: "Методы обработки экспериментальных данных",
            },
            groups: [
               {
                  id: 1705969217227847200,
                  title: "1ПМб-03-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776407179500,
               title: "402",
            },
            lecturers: [
               {
                  id: 1424937390007392000,
                  lastName: "Парыгина",
                  firstName: "Светлана",
                  middleName: "Александровна",
                  shortName: "Парыгина С. А.",
                  fio: "Парыгина Светлана Александровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685246771688200,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696562632828392700,
               title: "Физиология человека",
            },
            groups: [
               {
                  id: 1705969217214215700,
                  title: "9АФКб-01-1оп-21",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490438777542283500,
               title: "306",
            },
            lecturers: [
               {
                  id: 1431205958015522600,
                  lastName: "Воробьев",
                  firstName: "Владислав",
                  middleName: "Федорович",
                  shortName: "Воробьев В. Ф.",
                  fio: "Воробьев Владислав Федорович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748454196579791600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1724374916460836000,
               title: "Программа личностного и профессионального развития",
            },
            groups: [
               {
                  id: 1739582424589661700,
                  title: "2СОб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254033822000,
               title: "510",
            },
            lecturers: [
               {
                  id: 1421235333943531300,
                  lastName: "Каракина",
                  firstName: "Татьяна",
                  middleName: "Геннадьевна",
                  shortName: "Каракина Т. Г.",
                  fio: "Каракина Татьяна Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685304879575800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696834044273530000,
               title: "Деловые коммуникации на русском языке",
            },
            groups: [
               {
                  id: 1705969217216312800,
                  title: "3ЭЭб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254075765000,
               title: "519",
            },
            lecturers: [
               {
                  id: 1542458392440739600,
                  lastName: "Неклюдова",
                  firstName: "Евгения",
                  middleName: "Александровна",
                  shortName: "Неклюдова Е. А.",
                  fio: "Неклюдова Евгения Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747666773500359400,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1666027127941633300,
               title: "Базы данных (пг1)",
            },
            groups: [
               {
                  id: 1671820835577403000,
                  title: "1ПИб-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378709684500,
               title: "227",
            },
            lecturers: [
               {
                  id: 1425474223841744600,
                  lastName: "Селяничев",
                  firstName: "Олег",
                  middleName: "Леонидович",
                  shortName: "Селяничев О. Л.",
                  fio: "Селяничев Олег Леонидович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747912202442896100,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1641826730461107700,
                  title: "1ПИб-01-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1671012499597562000,
               title: "301б",
            },
            lecturers: [
               {
                  id: 1396414847681304300,
                  lastName: "Ершов",
                  firstName: "Евгений",
                  middleName: "Валентинович",
                  shortName: "Ершов Е. В.",
                  fio: "Ершов Евгений Валентинович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685306986165000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1610854891195995400,
               title: "Бережливое производство",
            },
            groups: [
               {
                  id: 1641737111948236300,
                  title: "7Эб-05-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436425404911900,
               title: "37",
            },
            lecturers: [
               {
                  id: 1424940005267085000,
                  lastName: "Румянцев",
                  firstName: "Вадим",
                  middleName: "Владимирович",
                  shortName: "Румянцев В. В.",
                  fio: "Румянцев Вадим Владимирович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685296260281000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727277908101035300,
               title: "Математический анализ",
            },
            groups: [
               {
                  id: 1739582424512067000,
                  title: "1ИТСб-00-2оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292955582700,
               title: "613",
            },
            lecturers: [
               {
                  id: 1424936078741084000,
                  lastName: "Мухин",
                  firstName: "Владимир",
                  middleName: "Васильевич",
                  shortName: "Мухин В. В.",
                  fio: "Мухин Владимир Васильевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685263063413500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1695925758777628000,
               title: "Уголовное право",
            },
            groups: [
               {
                  id: 1705969217223652900,
                  title: "2Юб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776448074000,
               title: "415",
            },
            lecturers: [
               {
                  id: 1613312225126127400,
                  lastName: "Петрова",
                  firstName: "Валентина",
                  middleName: "Владимировна",
                  shortName: "Петрова В. В.",
                  fio: "Петрова Валентина Владимировна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685210453209900,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1665206419934156000,
               title: "Дизайн-мышление. Методология работы с клиентом (пг3)",
            },
            groups: [
               {
                  id: 1671817586681058800,
                  title: "2Иб-00-1оп-20",
               },
               {
                  id: 1671816734752904700,
                  title: "2СОб-00-1оп-20",
               },
               {
                  id: 1671817437751809500,
                  title: "2Лб-02-1оп-20",
               },
               {
                  id: 1671816269488199200,
                  title: "2Сб-00-1оп-20",
               },
               {
                  id: 1671817028908881400,
                  title: "2Тб-00-1оп-20",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490437674469691600,
               title: "202",
            },
            lecturers: [
               {
                  id: 1478026529608832800,
                  lastName: "Ковшикова",
                  firstName: "Галина",
                  middleName: "Александровна",
                  shortName: "Ковшикова Г. А.",
                  fio: "Ковшикова Галина Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685233000739600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696470489958978800,
               title: "Математический анализ",
            },
            groups: [
               {
                  id: 1705969217230993000,
                  title: "1ПДОб-15-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776432345300,
               title: "410",
            },
            lecturers: [
               {
                  id: 1421238082544342800,
                  lastName: "Кашинцева",
                  firstName: "Ольга",
                  middleName: "Альбертовна",
                  shortName: "Кашинцева О. А.",
                  fio: "Кашинцева Ольга Альбертовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685278099993300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1724286603376850200,
               title: "Иностранный язык (англ пг1)",
            },
            groups: [
               {
                  id: 1739582424554010000,
                  title: "2ПДОб-13-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048817783000,
               title: "830",
            },
            lecturers: [
               {
                  id: 1424935579290703600,
                  lastName: "Миронова",
                  firstName: "Эльвира",
                  middleName: "Геннадьевна",
                  shortName: "Миронова Э. Г.",
                  fio: "Миронова Эльвира Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685294147400400,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696842091338306800,
               title: "Физическая химия",
            },
            groups: [
               {
                  id: 1705969217203730000,
                  title: "3МТб-01-1оп-21",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490364153894801700,
               title: "421",
            },
            lecturers: [
               {
                  id: 1421234853330818800,
                  lastName: "Калько",
                  firstName: "Оксана",
                  middleName: "Александровна",
                  shortName: "Калько О. А.",
                  fio: "Калько Оксана Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748454588381262600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727268397373060400,
               title: "Программа личностного и профессионального развития",
            },
            groups: [
               {
                  id: 1739582424517310000,
                  title: "3ТТб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624626028800,
               title: "319",
            },
            lecturers: [
               {
                  id: 1747840152777914000,
                  lastName: "Елизарова",
                  firstName: "Людмила",
                  middleName: "Геннадьевна",
                  shortName: "Елизарова Л. Г.",
                  fio: "Елизарова Людмила Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685282365600500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727986236662871300,
               title: "Общее языкознание",
            },
            groups: [
               {
                  id: 1609298376906512000,
                  title: "2ПДОпб-13-1оп-18",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923942150400,
               title: "702",
            },
            lecturers: [
               {
                  id: 1424933661150549800,
                  lastName: "Лаврова",
                  firstName: "Светлана",
                  middleName: "Юрьевна",
                  shortName: "Лаврова С. Ю.",
                  fio: "Лаврова Светлана Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685259790807800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1631614279389025500,
               title: "Профессиональные творческие студии",
            },
            groups: [
               {
                  id: 1641734195482990000,
                  title: "2ЖУРб-00-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776422908200,
               title: "407",
            },
            lecturers: [
               {
                  id: 1425477852516587300,
                  lastName: "Дворянова",
                  firstName: "Мария",
                  middleName: "Валерьевна",
                  shortName: "Дворянова М. В.",
                  fio: "Дворянова Мария Валерьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685242610938600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1631701234767369500,
               title: "Ценообразование и сметное дело в строительстве",
            },
            groups: [
               {
                  id: 1641852232647317000,
                  title: "3СТб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490356052340773000,
               title: "301",
            },
            lecturers: [
               {
                  id: 1421220130654787300,
                  lastName: "Гендлина",
                  firstName: "Юлия",
                  middleName: "Борисовна",
                  shortName: "Гендлина Ю. Б.",
                  fio: "Гендлина Юлия Борисовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747911578506621700,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1641826461326251500,
                  title: "1РФб-01-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776462754000,
               title: "418",
            },
            lecturers: [
               {
                  id: 1424937070449661700,
                  lastName: "Осипова",
                  firstName: "Надежда",
                  middleName: "Александровна",
                  shortName: "Осипова Н. А.",
                  fio: "Осипова Надежда Александровна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747910123474252500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1641826544721598000,
                  title: "1ИСб-00-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1671012457577976000,
               title: "301а",
            },
            lecturers: [
               {
                  id: 1396414847681304300,
                  lastName: "Ершов",
                  firstName: "Евгений",
                  middleName: "Валентинович",
                  shortName: "Ершов Е. В.",
                  fio: "Ершов Евгений Валентинович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685250776200000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1728549747024590000,
               title: "Биомеханика двигательной деятельности",
            },
            groups: [
               {
                  id: 1671825251655227000,
                  title: "9ФКб-01-1оп-20",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490438777561158000,
               title: "311",
            },
            lecturers: [
               {
                  id: 1573443231403743000,
                  lastName: "Федоров",
                  firstName: "Антон",
                  middleName: "Михайлович",
                  shortName: "Федоров А. М.",
                  fio: "Федоров Антон Михайлович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685211035169500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1666017470364783900,
               title: "Теория решения изобретательских задач (пг1)",
            },
            groups: [
               {
                  id: 1671823357212890600,
                  title: "3ТБб-02-1оп-20",
               },
               {
                  id: 1671823433121404400,
                  title: "3МТб-01-1оп-20",
               },
               {
                  id: 1671822128479999500,
                  title: "3ТТб-01-1оп-20",
               },
               {
                  id: 1671823827303143000,
                  title: "3НТТС-01-1оп-20",
               },
               {
                  id: 1671823795820697000,
                  title: "3ЭТМпб-01-1оп-20",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490435408634319000,
               title: "24",
            },
            lecturers: [
               {
                  id: 1430463259006211800,
                  lastName: "Болобанова",
                  firstName: "Наталия",
                  middleName: "Леонидовна",
                  shortName: "Болобанова Н. Л.",
                  fio: "Болобанова Наталия Леонидовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685303348654800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1695917333968590000,
               title: "Метрология и электроизмерения (пг2)",
            },
            groups: [
               {
                  id: 1705969217165981200,
                  title: "1ИБб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292969214200,
               title: "615",
            },
            lecturers: [
               {
                  id: 1500589804791797500,
                  lastName: "Каверин",
                  firstName: "Олег",
                  middleName: "Борисович",
                  shortName: "Каверин О. Б.",
                  fio: "Каверин Олег Борисович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749099820499202800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1632155836554941700,
               title: "Практический курс первого иностранного языка (пг1)",
            },
            groups: [
               {
                  id: 1641737109227181600,
                  title: "2ИЯб-09-1зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "онлайн",
            },
            lecturers: [
               {
                  id: 1421225556298438400,
                  lastName: "Дунаевская",
                  firstName: "Татьяна",
                  middleName: "Алексеевна",
                  shortName: "Дунаевская Т. А.",
                  fio: "Дунаевская Татьяна Алексеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685246436143900,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1722931211552028000,
               title: "Практикум по фонетике (английский язык)",
            },
            groups: [
               {
                  id: 1739582424538281500,
                  title: "2Лб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292948242700,
               title: "611",
            },
            lecturers: [
               {
                  id: 1424935794245638000,
                  lastName: "Моисеенко",
                  firstName: "Анна",
                  middleName: "Валерьевна",
                  shortName: "Моисеенко А. В.",
                  fio: "Моисеенко Анна Валерьевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747293054080775000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696205978097161500,
               title: "Структуры и алгоритмы обработки данных (пг1)",
            },
            groups: [
               {
                  id: 1705969217175418400,
                  title: "1ПИб-01-2оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378724364500,
               title: "228",
            },
            lecturers: [
               {
                  id: 1424939460407072500,
                  lastName: "Пышницкий",
                  firstName: "Константин",
                  middleName: "Михайлович",
                  shortName: "Пышницкий К. М.",
                  fio: "Пышницкий Константин Михайлович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747030893800584000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696298838117062000,
               title: "Психолого-педагогическая диагностика образовательной среды",
            },
            groups: [
               {
                  id: 1705969217250915800,
                  title: "4ППОм-01-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "онлайн",
            },
            lecturers: [
               {
                  id: 1421062733269309200,
                  lastName: "Арсенова",
                  firstName: "Марина",
                  middleName: "Алексеевна",
                  shortName: "Арсенова М. А.",
                  fio: "Арсенова Марина Алексеевна",
               },
            ],
            abbrlessontype: "э",
            lessontype: "Экз.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685212186506000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696200585705952500,
               title: "Физическая культура и спорт (элективная дисциплина)",
            },
            groups: [
               {
                  id: 1705969217196390000,
                  title: "7УПб-01-1оп-21",
               },
               {
                  id: 1705969217195341300,
                  title: "7Эб-05-1оп-21",
               },
               {
                  id: 1705969217181709800,
                  title: "9Бб-01-1оп-21",
               },
            ],
            build: {
               id: 1492901605554525200,
               title: "Спортивный корпус (ул.Труда,д.3)",
            },
            auditory: {
               id: 1493343626573386000,
               title: "1/4",
            },
            lecturers: [
               {
                  id: 1644364336262551300,
                  lastName: "Гаврикова",
                  firstName: "Ольга",
                  middleName: "Юрьевна",
                  shortName: "Гаврикова О. Ю.",
                  fio: "Гаврикова Ольга Юрьевна",
               },
               {
                  id: 1421063152344242000,
                  lastName: "Ашихмин",
                  firstName: "Александр",
                  middleName: "Николаевич",
                  shortName: "Ашихмин А. Н.",
                  fio: "Ашихмин Александр Николаевич",
               },
               {
                  id: 1539005141793904400,
                  lastName: "Алёшичева",
                  firstName: "Александра",
                  middleName: "Александровна",
                  shortName: "Алёшичева А. А.",
                  fio: "Алёшичева Александра Александровна",
               },
               {
                  id: 1476843891371022000,
                  lastName: "Осминкин",
                  firstName: "Всеволод",
                  middleName: "Ильич",
                  shortName: "Осминкин В. И.",
                  fio: "Осминкин Всеволод Ильич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685233638273800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696473012107220200,
               title: "Методика начального литературного образования",
            },
            groups: [
               {
                  id: 1705969217212118500,
                  title: "4ПДОб-19-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048795763000,
               title: "825",
            },
            lecturers: [
               {
                  id: 1425479116566566700,
                  lastName: "Чистякова",
                  firstName: "Наталия",
                  middleName: "Николаевна",
                  shortName: "Чистякова Н. Н.",
                  fio: "Чистякова Наталия Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685271205606100,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696208247189411000,
               title: "Технология проектной деятельности",
            },
            groups: [
               {
                  id: 1705969217245673000,
                  title: "2Дб-03-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292923076900,
               title: "604",
            },
            lecturers: [
               {
                  id: 1472590680489465600,
                  lastName: "Ловкова",
                  firstName: "Екатерина",
                  middleName: "Александровна",
                  shortName: "Ловкова Е. А.",
                  fio: "Ловкова Екатерина Александровна",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747577405506974500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Ознакомительная практика",
            },
            groups: [
               {
                  id: 1739582424509970000,
                  title: "1ИСб-01-2оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378649915600,
               title: "219",
            },
            lecturers: [
               {
                  id: 1421220781385324300,
                  lastName: "Гонтарева",
                  firstName: "Ирина",
                  middleName: "Борисовна",
                  shortName: "Гонтарева И. Б.",
                  fio: "Гонтарева Ирина Борисовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685211192456000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1665206423591589000,
               title: "Экономика продукта проекта. Модели монетизации (пг4)",
            },
            groups: [
               {
                  id: 1671817586681058800,
                  title: "2Иб-00-1оп-20",
               },
               {
                  id: 1671823357212890600,
                  title: "3ТБб-02-1оп-20",
               },
               {
                  id: 1671823827303143000,
                  title: "3НТТС-01-1оп-20",
               },
               {
                  id: 1671817437751809500,
                  title: "2Лб-02-1оп-20",
               },
               {
                  id: 1671816269488199200,
                  title: "2Сб-00-1оп-20",
               },
               {
                  id: 1671817830092248600,
                  title: "2РТПб-01-1оп-20",
               },
               {
                  id: 1671817216591402500,
                  title: "2ПДОб-13-1оп-20",
               },
               {
                  id: 1671823795820697000,
                  title: "3ЭТМпб-01-1оп-20",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490437674475983000,
               title: "203",
            },
            lecturers: [
               {
                  id: 1552944620540794600,
                  lastName: "Варзунова",
                  firstName: "Вера",
                  middleName: "Васильевна",
                  shortName: "Варзунова В. В.",
                  fio: "Варзунова Вера Васильевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685260577239800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1631700425777354000,
               title: "Организация работы рекламного отдела и отдела по связям с общественностью",
            },
            groups: [
               {
                  id: 1641734136298215000,
                  title: "2СОб-00-1оп-19",
               },
            ],
            build: {
               id: 1471886253797414000,
               title: "Учебно-лабораторный корпус № 3 (ул.М.Горького, 14)",
            },
            auditory: {
               id: 1491700663191605500,
               title: "110",
            },
            lecturers: [
               {
                  id: 1425481467636488000,
                  lastName: "Яковлева",
                  firstName: "Надежда",
                  middleName: "Ивановна",
                  shortName: "Яковлева Н. И.",
                  fio: "Яковлева Надежда Ивановна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685340036232000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1668478955216180500,
               title: "Страхование",
            },
            groups: [
               {
                  id: 1641737034549696000,
                  title: "7Эб-04-1зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1443889749481756400,
                  lastName: "Кошелева",
                  firstName: "Алена",
                  middleName: "Владимировна",
                  shortName: "Кошелева А. В.",
                  fio: "Кошелева Алена Владимировна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685317487653600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727274974124569900,
               title: "Химия",
            },
            groups: [
               {
                  id: 1739582424544573000,
                  title: "3НТТС-01-1оп-22",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490364153823498500,
               title: "402",
            },
            lecturers: [
               {
                  id: 1424933017158162200,
                  lastName: "Кузнецова",
                  firstName: "Юлия",
                  middleName: "Сергеевна",
                  shortName: "Кузнецова Ю. С.",
                  fio: "Кузнецова Юлия Сергеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685311005356800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1665387619861665000,
               title: "Иностранный язык в профессиональной сфере",
            },
            groups: [
               {
                  id: 1671820582751049200,
                  title: "1ИТСб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346293012205800,
               title: "623",
            },
            lecturers: [
               {
                  id: 1421217415231969000,
                  lastName: "Вересова",
                  firstName: "Маргарита",
                  middleName: "Валентиновна",
                  shortName: "Вересова М. В.",
                  fio: "Вересова Маргарита Валентиновна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685298134086400,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1697106568682050800,
               title: "Деловые коммуникации на русском языке",
            },
            groups: [
               {
                  id: 1705969217172272600,
                  title: "3НТТС-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048724459800,
               title: "810",
            },
            lecturers: [
               {
                  id: 1505925647773472500,
                  lastName: "Дивеева",
                  firstName: "Алина",
                  middleName: "Альбертовна",
                  shortName: "Дивеева А. А.",
                  fio: "Дивеева Алина Альбертовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685283102749400,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1695736827428738300,
               title: "Краеведение",
            },
            groups: [
               {
                  id: 1705969217177515500,
                  title: "2Тб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254047453400,
               title: "513",
            },
            lecturers: [
               {
                  id: 1421219443391862500,
                  lastName: "Всеволодов",
                  firstName: "Антон",
                  middleName: "Владимирович",
                  shortName: "Всеволодов А. В.",
                  fio: "Всеволодов Антон Владимирович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685244541367000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696559272375096600,
               title: "Спортивные и подвижные игры",
            },
            groups: [
               {
                  id: 1705969217199535600,
                  title: "9ФКб-01-1оп-21",
               },
            ],
            build: {
               id: 1490442417495610400,
               title: 'Спортивный комплекс "Университетский" (ул. Труда, 3)',
            },
            auditory: {
               id: 1671133117620949200,
               title: "1",
            },
            lecturers: [
               {
                  id: 1425480254933178000,
                  lastName: "Шкляр",
                  firstName: "Ольга",
                  middleName: "Брониславовна",
                  shortName: "Шкляр О. Б.",
                  fio: "Шкляр Ольга Брониславовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685312186053400,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727283716580832500,
               title: "Физика",
            },
            groups: [
               {
                  id: 1739582424515212800,
                  title: "3ХТб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254099882200,
               title: "524",
            },
            lecturers: [
               {
                  id: 1505396873083492000,
                  lastName: "Смирнов",
                  firstName: "Валентин",
                  middleName: "Владимирович",
                  shortName: "Смирнов В. В.",
                  fio: "Смирнов Валентин Владимирович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685230576431900,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1726282349481424100,
               title: "Практический курс английского языка (пг1)",
            },
            groups: [
               {
                  id: 1739582424555058700,
                  title: "2ПДОб-21-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254019142000,
               title: "507",
            },
            lecturers: [
               {
                  id: 1421062942202271500,
                  lastName: "Арюхина",
                  firstName: "Елена",
                  middleName: "Геннадьевна",
                  shortName: "Арюхина Е. Г.",
                  fio: "Арюхина Елена Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685261701313300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696371483952027000,
               title: "Прикладные компьютерные программы в обработке социологических данных",
            },
            groups: [
               {
                  id: 1705969217197438500,
                  title: "2Сб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254003413200,
               title: "504",
            },
            lecturers: [
               {
                  id: 1421218736003618600,
                  lastName: "Воробьева",
                  firstName: "Ирина",
                  middleName: "Николаевна",
                  shortName: "Воробьева И. Н.",
                  fio: "Воробьева Ирина Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685340059300600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696205977494230300,
               title: "Теория автоматов и формальных языков (пг2)",
            },
            groups: [
               {
                  id: 1705969217175418400,
                  title: "1ПИб-01-2оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378633138400,
               title: "217",
            },
            lecturers: [
               {
                  id: 1447872296193628000,
                  lastName: "Ганичева",
                  firstName: "Оксана",
                  middleName: "Георгиевна",
                  shortName: "Ганичева О. Г.",
                  fio: "Ганичева Оксана Георгиевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747921788619060000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "проектное обучение",
            },
            groups: [
               {
                  id: 1671822913191286300,
                  title: "3ЭЭб-01-1оп-20",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1492619572869599500,
               title: "31",
            },
            lecturers: [
               {
                  id: 1425474675677337300,
                  lastName: "Сидорова",
                  firstName: "Инна",
                  middleName: "Владимировна",
                  shortName: "Сидорова И. В.",
                  fio: "Сидорова Инна Владимировна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685238708138800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696552648983975200,
               title: "Теоретическая механика",
            },
            groups: [
               {
                  id: 1705969217191147000,
                  title: "3СТб-04-1оп-21",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903835537700,
               title: "57",
            },
            lecturers: [
               {
                  id: 1424483270625597200,
                  lastName: "Клинов",
                  firstName: "Александр",
                  middleName: "Владимирович",
                  shortName: "Клинов А. В.",
                  fio: "Клинов Александр Владимирович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747916497881002800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "проектное обучение",
            },
            groups: [
               {
                  id: 1671820552772261400,
                  title: "4ПСб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292930417000,
               title: "606",
            },
            lecturers: [
               {
                  id: 1425476194401261300,
                  lastName: "Табунов",
                  firstName: "Иван",
                  middleName: "Александрович",
                  shortName: "Табунов И. А.",
                  fio: "Табунов Иван Александрович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748839772911956700,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1631859901515961600,
               title: "Технологии интерактивного дизайна и инфографика",
            },
            groups: [
               {
                  id: 1641734658765887000,
                  title: "2Дб-03-1зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1643564843915024100,
                  lastName: "Шигорина",
                  firstName: "Виктория",
                  middleName: "Николаевна",
                  shortName: "Шигорина В. Н.",
                  fio: "Шигорина Виктория Николаевна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685317040960300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727369702375552300,
               title: "Безопасность жизнедеятельности (пг1)",
            },
            groups: [
               {
                  id: 1739582424522552800,
                  title: "1АПб-01-1оп-22",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903827149000,
               title: "55",
            },
            lecturers: [
               {
                  id: 1733621848817399600,
                  lastName: "Горохова",
                  firstName: "Татьяна",
                  middleName: "Юрьевна",
                  shortName: "Горохова Т. Ю.",
                  fio: "Горохова Татьяна Юрьевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749178445364851500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696461450549138700,
               title: "Сценарное мастерство",
            },
            groups: [
               {
                  id: 1705969217248818700,
                  title: "2РТПб-01-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1421224373890586400,
                  lastName: "Дергачев",
                  firstName: "Евгений",
                  middleName: "Иванович",
                  shortName: "Дергачев Е. И.",
                  fio: "Дергачев Евгений Иванович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685303092802300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1695917322109195500,
               title: "Теория информации (пг1)",
            },
            groups: [
               {
                  id: 1705969217165981200,
                  title: "1ИБб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346293021643000,
               title: "625",
            },
            lecturers: [
               {
                  id: 1425475779845691100,
                  lastName: "Стародубцев",
                  firstName: "Денис",
                  middleName: "Евгеньевич",
                  shortName: "Стародубцев Д. Е.",
                  fio: "Стародубцев Денис Евгеньевич",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685344978170600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1665386300261275000,
               title: "Графические системы и языки",
            },
            groups: [
               {
                  id: 1671820801044649500,
                  title: "1ИСб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488369326572441900,
               title: "218а",
            },
            lecturers: [
               {
                  id: 1472314025600620300,
                  lastName: "Табунов",
                  firstName: "Павел",
                  middleName: "Александрович",
                  shortName: "Табунов П. А.",
                  fio: "Табунов Павел Александрович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749181325194949400,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1695839342339036400,
               title: "Психология медиакоммуникаций",
            },
            groups: [
               {
                  id: 1705969217241478700,
                  title: "2ЖУРб-00-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1634137917545781000,
                  lastName: "Максимова",
                  firstName: "Татьяна",
                  middleName: "Николаевна",
                  shortName: "Максимова Т. Н.",
                  fio: "Максимова Татьяна Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685280631255800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696468906860877000,
               title: "История русской литературы",
            },
            groups: [
               {
                  id: 1705969217225750000,
                  title: "2ПДОб-13-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048685662500,
               title: "802",
            },
            lecturers: [
               {
                  id: 1425476950857619200,
                  lastName: "Трубицына",
                  firstName: "Мария",
                  middleName: "Юрьевна",
                  shortName: "Трубицына М. Ю.",
                  fio: "Трубицына Мария Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747929180828201700,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "проектное обучение",
            },
            groups: [
               {
                  id: 1641743302326752800,
                  title: "3ЭЭб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1492619572869599500,
               title: "31",
            },
            lecturers: [
               {
                  id: 1425474675677337300,
                  lastName: "Сидорова",
                  firstName: "Инна",
                  middleName: "Владимировна",
                  shortName: "Сидорова И. В.",
                  fio: "Сидорова Инна Владимировна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685295673078500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1667372565336692000,
               title: "Проектирование предприятий по техническому сервису автомобилей",
            },
            groups: [
               {
                  id: 1641742924249044500,
                  title: "3ЭТМпб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903822954800,
               title: "54",
            },
            lecturers: [
               {
                  id: 1424936495844693800,
                  lastName: "Николаев",
                  firstName: "Василий",
                  middleName: "Васильевич",
                  shortName: "Николаев В. В.",
                  fio: "Николаев Василий Васильевич",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685330027574000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1729344507440133400,
               title: "Юридические основы предпринимательства",
            },
            groups: [
               {
                  id: 1641829272027928000,
                  title: "1УТСб-02-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624631271700,
               title: "320",
            },
            lecturers: [
               {
                  id: 1424933743597983500,
                  lastName: "Ларичев",
                  firstName: "Андрей",
                  middleName: "Витальевич",
                  shortName: "Ларичев А. В.",
                  fio: "Ларичев Андрей Витальевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685264530371300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696381667098236200,
               title: "Социальная психология",
            },
            groups: [
               {
                  id: 1705969217229944300,
                  title: "2СРб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254028579000,
               title: "509",
            },
            lecturers: [
               {
                  id: 1513183652125611800,
                  lastName: "Смирнова",
                  firstName: "Елена",
                  middleName: "Алексеевна",
                  shortName: "Смирнова Е. А.",
                  fio: "Смирнова Елена Алексеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685321456513800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1727277659983836400,
               title: "Иностранный язык (англ)",
            },
            groups: [
               {
                  id: 1739582424573933000,
                  title: "3МТб-03-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048808345900,
               title: "828",
            },
            lecturers: [
               {
                  id: 1429371784578209500,
                  lastName: "Исаева",
                  firstName: "Мария",
                  middleName: "Геннадьевна",
                  shortName: "Исаева М. Г.",
                  fio: "Исаева Мария Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685269880206000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1682591904265409800,
               title: "Социология глобализации",
            },
            groups: [
               {
                  id: 1641733989795370500,
                  title: "2Сб-00-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923984093400,
               title: "713",
            },
            lecturers: [
               {
                  id: 1487089376426989300,
                  lastName: "Аула",
                  firstName: "Екатерина",
                  middleName: "Романовна",
                  shortName: "Аула Е. Р.",
                  fio: "Аула Екатерина Романовна",
               },
            ],
            abbrlessontype: "икр",
            lessontype: "Иная конт.раб.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685221538755300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1722476065400419600,
               title: "Основы производства материалов",
            },
            groups: [
               {
                  id: 1739582424569738800,
                  title: "4ПДОб-20-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624634417400,
               title: "321",
            },
            lecturers: [
               {
                  id: 1424935547273484000,
                  lastName: "Мироненко",
                  firstName: "Светлана",
                  middleName: "Николаевна",
                  shortName: "Мироненко С. Н.",
                  fio: "Мироненко Светлана Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685258045977300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1723180314593719600,
               title: "Социология науки и образования",
            },
            groups: [
               {
                  id: 1739582424535135700,
                  title: "2Сб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345253992927500,
               title: "502",
            },
            lecturers: [
               {
                  id: 1425475707191957200,
                  lastName: "Спирина",
                  firstName: "Дарья",
                  middleName: "Васильевна",
                  shortName: "Спирина Д. В.",
                  fio: "Спирина Дарья Васильевна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685312830927600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1724815207709930800,
               title: "Игровая культура и праздник",
            },
            groups: [
               {
                  id: 1739582424526747100,
                  title: "2РТПб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488365888710119700,
               title: "201",
            },
            lecturers: [
               {
                  id: 1421218168724002600,
                  lastName: "Владимирова",
                  firstName: "Ольга",
                  middleName: "Александровна",
                  shortName: "Владимирова О. А.",
                  fio: "Владимирова Ольга Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748192944634852000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Вакцинация от гриппа",
            },
            groups: [
               {
                  id: 1671815577865295400,
                  title: "7ЭБ-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1491992159538123000,
               title: "103",
            },
            lecturers: [
               {
                  id: 1747850345543759600,
                  lastName: "Пукело",
                  firstName: "Елена",
                  middleName: "Вячеславовна",
                  shortName: "Пукело Е. В.",
                  fio: "Пукело Елена Вячеславовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747911468566573800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1641826461326251500,
                  title: "1РФб-01-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776451219700,
               title: "416",
            },
            lecturers: [
               {
                  id: 1492790427106940700,
                  lastName: "Федоров",
                  firstName: "Дмитрий",
                  middleName: "Сергеевич",
                  shortName: "Федоров Д. С.",
                  fio: "Федоров Дмитрий Сергеевич",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749114690793763600,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1665834630669931800,
               title: "Актуальные тенденции коммуникативного дизайна",
            },
            groups: [
               {
                  id: 1671817906535536000,
                  title: "2Дб-03-1зп-20",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1421219906975700700,
                  lastName: "Галунова",
                  firstName: "Светлана",
                  middleName: "Николаевна",
                  shortName: "Галунова С. Н.",
                  fio: "Галунова Светлана Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685242039464700,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1630503591206720800,
               title: "Технология карьеры",
            },
            groups: [
               {
                  id: 1641733818512578000,
                  title: "4ПДОб-19-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048783180000,
               title: "822",
            },
            lecturers: [
               {
                  id: 1448967915303868200,
                  lastName: "Рогожникова",
                  firstName: "Светлана",
                  middleName: "Мугумаевна",
                  shortName: "Рогожникова С. М.",
                  fio: "Рогожникова Светлана Мугумаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685302140695300,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1726901590867965200,
               title: "Введение в цифровую культуру (пг1)",
            },
            groups: [
               {
                  id: 1739582424505775600,
                  title: "1ПИб-02-3оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378640478500,
               title: "218",
            },
            lecturers: [
               {
                  id: 1425490815175628500,
                  lastName: "Журавлева",
                  firstName: "Юлия",
                  middleName: "Михайловна",
                  shortName: "Журавлева Ю. М.",
                  fio: "Журавлева Юлия Михайловна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685294620308200,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696361001347192000,
               title: "Физическая культура и спорт (элективная дисциплина)",
            },
            groups: [
               {
                  id: 1705969217222604300,
                  title: "7ЭБ-01-1оп-21",
               },
            ],
            build: {
               id: 1492901605554525200,
               title: "Спортивный корпус (ул.Труда,д.3)",
            },
            auditory: {
               id: 1493343626573386000,
               title: "1/4",
            },
            lecturers: [
               {
                  id: 1421061061842311000,
                  lastName: "Алешина",
                  firstName: "Елена",
                  middleName: "Ивановна",
                  shortName: "Алешина Е. И.",
                  fio: "Алешина Елена Ивановна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685318271988500,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1695734762047542500,
               title: "Стилистика и литературное редактирование",
            },
            groups: [
               {
                  id: 1705969217240430000,
                  title: "2ЖУРб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624637563100,
               title: "322",
            },
            lecturers: [
               {
                  id: 1396217058267502300,
                  lastName: "Иванова",
                  firstName: "Елена",
                  middleName: "Михайловна",
                  shortName: "Иванова Е. М.",
                  fio: "Иванова Елена Михайловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685210868446000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1666652154101765400,
               title: "Лидерство и управление командой (пг5)",
            },
            groups: [
               {
                  id: 1671823357212890600,
                  title: "3ТБб-02-1оп-20",
               },
               {
                  id: 1671823433121404400,
                  title: "3МТб-01-1оп-20",
               },
               {
                  id: 1671822128479999500,
                  title: "3ТТб-01-1оп-20",
               },
               {
                  id: 1671823827303143000,
                  title: "3НТТС-01-1оп-20",
               },
               {
                  id: 1671823795820697000,
                  title: "3ЭТМпб-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048777937200,
               title: "821",
            },
            lecturers: [
               {
                  id: 1431202970135959300,
                  lastName: "Балюшина",
                  firstName: "Юлия",
                  middleName: "Львовна",
                  shortName: "Балюшина Ю. Л.",
                  fio: "Балюшина Юлия Львовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685230292267800,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1726282327231690000,
               title: "Немецкий язык (пг2)",
            },
            groups: [
               {
                  id: 1739582424555058700,
                  title: "2ПДОб-21-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776483725600,
               title: "424",
            },
            lecturers: [
               {
                  id: 1424935322677942000,
                  lastName: "Межецкая",
                  firstName: "Галина",
                  middleName: "Николаевна",
                  shortName: "Межецкая Г. Н.",
                  fio: "Межецкая Галина Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747747985538544400,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1671818050910819800,
                  title: "2Дб-03-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1492089330440606000,
               title: "302",
            },
            lecturers: [
               {
                  id: 1425477744641185500,
                  lastName: "Филиппова",
                  firstName: "Вера",
                  middleName: "Ивановна",
                  shortName: "Филиппова В. И.",
                  fio: "Филиппова Вера Ивановна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685252825117400,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1631794609322464500,
               title: "Новые физкультурно-спортивные виды",
            },
            groups: [
               {
                  id: 1641735286599718400,
                  title: "9ФКб-01-1оп-19",
               },
            ],
            build: {
               id: 1490442417495610400,
               title: 'Спортивный комплекс "Университетский" (ул. Труда, 3)',
            },
            auditory: {
               id: 1671133117620949200,
               title: "1",
            },
            lecturers: [
               {
                  id: 1478211816264832800,
                  lastName: "Подоляка",
                  firstName: "Олег",
                  middleName: "Борисович",
                  shortName: "Подоляка О. Б.",
                  fio: "Подоляка Олег Борисович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685301139305200,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1726901588739356000,
               title: "Безопасность жизнедеятельности (пг1)",
            },
            groups: [
               {
                  id: 1739582424503678500,
                  title: "1ПИб-02-1оп-22",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903818760400,
               title: "53",
            },
            lecturers: [
               {
                  id: 1424931426906675000,
                  lastName: "Кочнев",
                  firstName: "Александр",
                  middleName: "Олегович",
                  shortName: "Кочнев А. О.",
                  fio: "Кочнев Александр Олегович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685338718172000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1584140473417602300,
               title: "Инновационный менеджмент",
            },
            groups: [
               {
                  id: 1609396466053289500,
                  title: "7ГМУб-00-1зп-18",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1425477168074332000,
                  lastName: "Тюлю",
                  firstName: "Галина",
                  middleName: "Михайловна",
                  shortName: "Тюлю Г. М.",
                  fio: "Тюлю Галина Михайловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685343026770700,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1695725069311939800,
               title: "Философия",
            },
            groups: [
               {
                  id: 1705969217244624400,
                  title: "2Лб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292933562600,
               title: "607",
            },
            lecturers: [
               {
                  id: 1425475155715430100,
                  lastName: "Смирнова",
                  firstName: "Ольга",
                  middleName: "Вениаминовна",
                  shortName: "Смирнова О. В.",
                  fio: "Смирнова Ольга Вениаминовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685231335601000,
            dateEvent: "23.11.2022",
            startTime: "10:10",
            endTime: "11:40",
            discipline: {
               id: 1696360508113819000,
               title: "Источниковедение",
            },
            groups: [
               {
                  id: 1705969217224701400,
                  title: "2ПДОб-14-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520914678000,
               title: "906",
            },
            lecturers: [
               {
                  id: 1421225821027178200,
                  lastName: "Егоров",
                  firstName: "Андрей",
                  middleName: "Николаевич",
                  shortName: "Егоров А. Н.",
                  fio: "Егоров Андрей Николаевич",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747917144046039800,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "проектное обучение",
            },
            groups: [
               {
                  id: 1671820629673776600,
                  title: "4ПСД-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292930417000,
               title: "606",
            },
            lecturers: [
               {
                  id: 1425476194401261300,
                  lastName: "Табунов",
                  firstName: "Иван",
                  middleName: "Александрович",
                  shortName: "Табунов И. А.",
                  fio: "Табунов Иван Александрович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747826824010658600,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "проектное обучение",
            },
            groups: [
               {
                  id: 1641733818512578000,
                  title: "4ПДОб-19-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048799957200,
               title: "826",
            },
            lecturers: [
               {
                  id: 1424933758956476200,
                  lastName: "Лашкова",
                  firstName: "Галина",
                  middleName: "Николаевна",
                  shortName: "Лашкова Г. Н.",
                  fio: "Лашкова Галина Николаевна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748192905806082800,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Вакцинация от гриппа",
            },
            groups: [
               {
                  id: 1705969217206875600,
                  title: "3ТМб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1491992159538123000,
               title: "103",
            },
            lecturers: [
               {
                  id: 1747850345543759600,
                  lastName: "Пукело",
                  firstName: "Елена",
                  middleName: "Вячеславовна",
                  shortName: "Пукело Е. В.",
                  fio: "Пукело Елена Вячеславовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685244833919700,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696559267657553200,
               title: "Профессионально-спортивное совершенствование",
            },
            groups: [
               {
                  id: 1705969217199535600,
                  title: "9ФКб-01-1оп-21",
               },
            ],
            build: {
               id: 1490442417495610400,
               title: 'Спортивный комплекс "Университетский" (ул. Труда, 3)',
            },
            auditory: {
               id: 1671133117620949200,
               title: "1",
            },
            lecturers: [
               {
                  id: 1449774890546632400,
                  lastName: "Мясникова",
                  firstName: "Татьяна",
                  middleName: "Борисовна",
                  shortName: "Мясникова Т. Б.",
                  fio: "Мясникова Татьяна Борисовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685210478375700,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1665206419934156000,
               title: "Дизайн-мышление. Методология работы с клиентом (пг4)",
            },
            groups: [
               {
                  id: 1671815449735599600,
                  title: "7Эб-05-1оп-20",
               },
               {
                  id: 1671815510729168400,
                  title: "7УПпб-01-1оп-20",
               },
               {
                  id: 1671815577865295400,
                  title: "7ЭБ-01-1оп-20",
               },
               {
                  id: 1671825067435103700,
                  title: "9Бб-01-1оп-20",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490437674469691600,
               title: "202",
            },
            lecturers: [
               {
                  id: 1478026529608832800,
                  lastName: "Ковшикова",
                  firstName: "Галина",
                  middleName: "Александровна",
                  shortName: "Ковшикова Г. А.",
                  fio: "Ковшикова Галина Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685233013322500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696470520024798500,
               title: "Организация добровольческой (волонтерской) деятельности и взаимодействие с социально-ориентированным НКО",
            },
            groups: [
               {
                  id: 1705969217230993000,
                  title: "1ПДОб-15-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048724459800,
               title: "810",
            },
            lecturers: [
               {
                  id: 1424938360835676000,
                  lastName: "Попова",
                  firstName: "Светлана",
                  middleName: "Игоревна",
                  shortName: "Попова С. И.",
                  fio: "Попова Светлана Игоревна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747822824316072700,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1671817216591402500,
                  title: "2ПДОб-13-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254075765000,
               title: "519",
            },
            lecturers: [
               {
                  id: 1424935724681009000,
                  lastName: "Мельникова",
                  firstName: "Наталия",
                  middleName: "Георгиевна",
                  shortName: "Мельникова Н. Г.",
                  fio: "Мельникова Наталия Георгиевна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747822185447027500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1671817216591402500,
                  title: "2ПДОб-13-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923964170500,
               title: "708",
            },
            lecturers: [
               {
                  id: 1421218829281793800,
                  lastName: "Воробьева",
                  firstName: "Татьяна",
                  middleName: "Алексеевна",
                  shortName: "Воробьева Т. А.",
                  fio: "Воробьева Татьяна Алексеевна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685284627379000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1695736821655278800,
               title: "Политология",
            },
            groups: [
               {
                  id: 1705969217177515500,
                  title: "2Тб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254047453400,
               title: "513",
            },
            lecturers: [
               {
                  id: 1424934984009914000,
                  lastName: "Марков",
                  firstName: "Евгений",
                  middleName: "Алфеевич",
                  shortName: "Марков Е. А.",
                  fio: "Марков Евгений Алфеевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747666785662792400,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1666027127941633300,
               title: "Базы данных (пг1)",
            },
            groups: [
               {
                  id: 1671820835577403000,
                  title: "1ПИб-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378709684500,
               title: "227",
            },
            lecturers: [
               {
                  id: 1425474223841744600,
                  lastName: "Селяничев",
                  firstName: "Олег",
                  middleName: "Леонидович",
                  shortName: "Селяничев О. Л.",
                  fio: "Селяничев Олег Леонидович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685284738528000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1695736826375968000,
               title: "Межличностные коммуникации",
            },
            groups: [
               {
                  id: 1709866160850073000,
                  title: "2Тб-00-2оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776444928300,
               title: "414",
            },
            lecturers: [
               {
                  id: 1424936606865823500,
                  lastName: "Новиков",
                  firstName: "Алексей",
                  middleName: "Евгеньевич",
                  shortName: "Новиков А. Е.",
                  fio: "Новиков Алексей Евгеньевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685319105606400,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727272721829459200,
               title: "Прикладная математика",
            },
            groups: [
               {
                  id: 1739582424523601400,
                  title: "3ТБб-02-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254079959300,
               title: "520",
            },
            lecturers: [
               {
                  id: 1504047283669309200,
                  lastName: "Чуев",
                  firstName: "Антон",
                  middleName: "Андреевич",
                  shortName: "Чуев А. А.",
                  fio: "Чуев Антон Андреевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685231028368100,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696458019660895500,
               title: "Нечеткая логика",
            },
            groups: [
               {
                  id: 1705969217226798600,
                  title: "1ПМб-02-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624670069000,
               title: "331",
            },
            lecturers: [
               {
                  id: 1424937863291606800,
                  lastName: "Плотникова",
                  firstName: "Надежда",
                  middleName: "Валентиновна",
                  shortName: "Плотникова Н. В.",
                  fio: "Плотникова Надежда Валентиновна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685325488288500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696291534768444700,
               title: "Информатика и информационные технологии",
            },
            groups: [
               {
                  id: 1705969217194292700,
                  title: "1АПпб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624649097500,
               title: "325",
            },
            lecturers: [
               {
                  id: 1449506849968625400,
                  lastName: "Чижов",
                  firstName: "Антон",
                  middleName: "Сергеевич",
                  shortName: "Чижов А. С.",
                  fio: "Чижов Антон Сергеевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747910758476149500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1671820989144503800,
                  title: "1ПМб-02-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1671012604089209000,
               title: "301г",
            },
            lecturers: [
               {
                  id: 1448877800173868800,
                  lastName: "Венедиктов",
                  firstName: "Максим",
                  middleName: "Ильич",
                  shortName: "Венедиктов М. И.",
                  fio: "Венедиктов Максим Ильич",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685237457187600,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727259975602795800,
               title: "Иностранный язык (англ пг2)",
            },
            groups: [
               {
                  id: 1739582424539330000,
                  title: "1ПДОб-15-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520918872300,
               title: "907",
            },
            lecturers: [
               {
                  id: 1729906009590069000,
                  lastName: "Чуева",
                  firstName: "Мария",
                  middleName: "Викторовна",
                  shortName: "Чуева М. В.",
                  fio: "Чуева Мария Викторовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685237444604700,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727259975602795800,
               title: "Иностранный язык (англ пг1)",
            },
            groups: [
               {
                  id: 1739582424539330000,
                  title: "1ПДОб-15-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520911532300,
               title: "905",
            },
            lecturers: [
               {
                  id: 1421062942202271500,
                  lastName: "Арюхина",
                  firstName: "Елена",
                  middleName: "Геннадьевна",
                  shortName: "Арюхина Е. Г.",
                  fio: "Арюхина Елена Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685296604214000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727277909018539300,
               title: "Алгебра и геометрия",
            },
            groups: [
               {
                  id: 1739582424512067000,
                  title: "1ИТСб-00-2оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776429199600,
               title: "409",
            },
            lecturers: [
               {
                  id: 1704067497327458000,
                  lastName: "Лаптева",
                  firstName: "Екатерина",
                  middleName: "Сергеевна",
                  shortName: "Лаптева Е. С.",
                  fio: "Лаптева Екатерина Сергеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685257951605500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1723180311807653000,
               title: "Правоведение",
            },
            groups: [
               {
                  id: 1739582424535135700,
                  title: "2Сб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048808345900,
               title: "828",
            },
            lecturers: [
               {
                  id: 1407096877962237700,
                  lastName: "Сидоренкова",
                  firstName: "Кристина",
                  middleName: "Александровна",
                  shortName: "Сидоренкова К. А.",
                  fio: "Сидоренкова Кристина Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685279437976300,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727275587089593600,
               title: "Иностранный язык (англ пг1)",
            },
            groups: [
               {
                  id: 1739582424525698600,
                  title: "1ИБб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520941941000,
               title: "913",
            },
            lecturers: [
               {
                  id: 1421061661793458000,
                  lastName: "Андреева",
                  firstName: "Татьяна",
                  middleName: "Анатольевна",
                  shortName: "Андреева Т. А.",
                  fio: "Андреева Татьяна Анатольевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747577405932696300,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Ознакомительная практика",
            },
            groups: [
               {
                  id: 1739582424503678500,
                  title: "1ПИб-02-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378649915600,
               title: "219",
            },
            lecturers: [
               {
                  id: 1421220781385324300,
                  lastName: "Гонтарева",
                  firstName: "Ирина",
                  middleName: "Борисовна",
                  shortName: "Гонтарева И. Б.",
                  fio: "Гонтарева Ирина Борисовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749096170474304300,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1699721152515446000,
               title: "Музыка в театрализованных представлениях",
            },
            groups: [
               {
                  id: 1671817775651231200,
                  title: "2РТПб-01-1зп-20",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1421218168724002600,
                  lastName: "Владимирова",
                  firstName: "Ольга",
                  middleName: "Александровна",
                  shortName: "Владимирова О. А.",
                  fio: "Владимирова Ольга Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685283738186500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1631607623427036400,
               title: "Большой практикум по ботанике и зоологии (пг2)",
            },
            groups: [
               {
                  id: 1641736941696194000,
                  title: "9Бб-01-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520895803600,
               title: "901",
            },
            lecturers: [
               {
                  id: 1539181737125353200,
                  lastName: "Трошин",
                  firstName: "Дмитрий",
                  middleName: "Сергеевич",
                  shortName: "Трошин Д. С.",
                  fio: "Трошин Дмитрий Сергеевич",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685338446590700,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696201889223284000,
               title: "Деловые коммуникации на русском языке",
            },
            groups: [
               {
                  id: 1705969217163884000,
                  title: "1ИСб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378744287500,
               title: "229",
            },
            lecturers: [
               {
                  id: 1467259902987605800,
                  lastName: "Сальникова",
                  firstName: "Ольга",
                  middleName: "Сергеевна",
                  shortName: "Сальникова О. С.",
                  fio: "Сальникова Ольга Сергеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685287984919300,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1667368850460513500,
               title: "Расчет и проектирование систем безопасности труда",
            },
            groups: [
               {
                  id: 1641742799740081700,
                  title: "3ТБб-02-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903822954800,
               title: "54",
            },
            lecturers: [
               {
                  id: 1421226191729203000,
                  lastName: "Ермилов",
                  firstName: "Владимир",
                  middleName: "Витальевич",
                  shortName: "Ермилов В. В.",
                  fio: "Ермилов Владимир Витальевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748828800134542000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696547104430757000,
               title: "Практическая грамматика первого иностранного языка (пг1)",
            },
            groups: [
               {
                  id: 1705969217198487000,
                  title: "2ИЯб-09-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1425475991588837000,
                  lastName: "Суворова",
                  firstName: "Наталья",
                  middleName: "Леонидовна",
                  shortName: "Суворова Н. Л.",
                  fio: "Суворова Наталья Леонидовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1747292890542764800,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696205978097161500,
               title: "Структуры и алгоритмы обработки данных (пг2)",
            },
            groups: [
               {
                  id: 1705969217174369800,
                  title: "1ПИб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378724364500,
               title: "228",
            },
            lecturers: [
               {
                  id: 1424939460407072500,
                  lastName: "Пышницкий",
                  firstName: "Константин",
                  middleName: "Михайлович",
                  shortName: "Пышницкий К. М.",
                  fio: "Пышницкий Константин Михайлович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685312201782000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727283716580832500,
               title: "Физика",
            },
            groups: [
               {
                  id: 1739582424515212800,
                  title: "3ХТб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254099882200,
               title: "524",
            },
            lecturers: [
               {
                  id: 1505396873083492000,
                  lastName: "Смирнов",
                  firstName: "Валентин",
                  middleName: "Владимирович",
                  shortName: "Смирнов В. В.",
                  fio: "Смирнов Валентин Владимирович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685258524128000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1631703562548417800,
               title: "Конструирование и проектирование графического продукта",
            },
            groups: [
               {
                  id: 1641734575543555600,
                  title: "2Дб-03-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624637563100,
               title: "322",
            },
            lecturers: [
               {
                  id: 1425477744641185500,
                  lastName: "Филиппова",
                  firstName: "Вера",
                  middleName: "Ивановна",
                  shortName: "Филиппова В. И.",
                  fio: "Филиппова Вера Ивановна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685328325735200,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1602435185869067500,
               title: "Контроль и ревизия",
            },
            groups: [
               {
                  id: 1609302546088728000,
                  title: "7ЭБ-01-1оп-18",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1710344616300902100,
                  lastName: "Малкова",
                  firstName: "Ирина",
                  middleName: "Алфеевна",
                  shortName: "Малкова И. А.",
                  fio: "Малкова Ирина Алфеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685281172321000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1634755372448224500,
               title: "Скульптурно-пластическое моделирование",
            },
            groups: [
               {
                  id: 1641743792550712800,
                  title: "3ДАСб-00-1оп-19",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490353917950693600,
               title: "201",
            },
            lecturers: [
               {
                  id: 1424931792252573400,
                  lastName: "Краузе",
                  firstName: "Елена",
                  middleName: "Сергеевна",
                  shortName: "Краузе Е. С.",
                  fio: "Краузе Елена Сергеевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685230695969500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696479536065025300,
               title: "Методы обработки экспериментальных данных",
            },
            groups: [
               {
                  id: 1705969217227847200,
                  title: "1ПМб-03-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776407179500,
               title: "402",
            },
            lecturers: [
               {
                  id: 1424937390007392000,
                  lastName: "Парыгина",
                  firstName: "Светлана",
                  middleName: "Александровна",
                  shortName: "Парыгина С. А.",
                  fio: "Парыгина Светлана Александровна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685226384225000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696475986041771300,
               title: "Философия",
            },
            groups: [
               {
                  id: 1705969217243575800,
                  title: "2ПДОб-21-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488365888719556900,
               title: "203",
            },
            lecturers: [
               {
                  id: 1425475155715430100,
                  lastName: "Смирнова",
                  firstName: "Ольга",
                  middleName: "Вениаминовна",
                  shortName: "Смирнова О. В.",
                  fio: "Смирнова Ольга Вениаминовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685272549880600,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1632221808672380200,
               title: "Практикум по устной речи (пг1)",
            },
            groups: [
               {
                  id: 1641732085136758300,
                  title: "2Лб-02-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923956830500,
               title: "706",
            },
            lecturers: [
               {
                  id: 1425479757823219500,
                  lastName: "Швец",
                  firstName: "Варвара",
                  middleName: "Михайловна",
                  shortName: "Швец В. М.",
                  fio: "Швец Варвара Михайловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685336983827200,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1665307170144523500,
               title: "Дизайн-мышление. Методология работы с клиентом",
            },
            groups: [
               {
                  id: 1641737307430065700,
                  title: "7Мпб-00-1зп-19",
               },
               {
                  id: 1646196032871077400,
                  title: "7Мпб-00-2зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1466623234877167400,
                  lastName: "Крылова",
                  firstName: "Наталья",
                  middleName: "Павловна",
                  shortName: "Крылова Н. П.",
                  fio: "Крылова Наталья Павловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685261928854300,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696371461149693200,
               title: "Иностранный язык (англ пг1)",
            },
            groups: [
               {
                  id: 1705969217197438500,
                  title: "2Сб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048817783000,
               title: "830",
            },
            lecturers: [
               {
                  id: 1424935579290703600,
                  lastName: "Миронова",
                  firstName: "Эльвира",
                  middleName: "Геннадьевна",
                  shortName: "Миронова Э. Г.",
                  fio: "Миронова Эльвира Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685299485700900,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1667015266942326000,
               title: "Дигностика оборудования",
            },
            groups: [
               {
                  id: 1671822913191286300,
                  title: "3ЭЭб-01-1оп-20",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436480239145200,
               title: "45",
            },
            lecturers: [
               {
                  id: 1429938891028174600,
                  lastName: "Кожевников",
                  firstName: "Александр",
                  middleName: "Вячеславович",
                  shortName: "Кожевников А. В.",
                  fio: "Кожевников Александр Вячеславович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685272656835300,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727264184536528100,
               title: "Введение в профессиональную деятельность",
            },
            groups: [
               {
                  id: 1739582424576030200,
                  title: "3ДАСб-00-1оп-22",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490353917954888000,
               title: "202",
            },
            lecturers: [
               {
                  id: 1421064315681642200,
                  lastName: "Белановская",
                  firstName: "Елена",
                  middleName: "Вячеславовна",
                  shortName: "Белановская Е. В.",
                  fio: "Белановская Елена Вячеславовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685246863963000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696562645082051800,
               title: "Теория и методика обучения спортивным и подвижным играм",
            },
            groups: [
               {
                  id: 1705969217214215700,
                  title: "9АФКб-01-1оп-21",
               },
            ],
            build: {
               id: 1490442417495610400,
               title: 'Спортивный комплекс "Университетский" (ул. Труда, 3)',
            },
            auditory: {
               id: 1671133117620949200,
               title: "1",
            },
            lecturers: [
               {
                  id: 1573443231403743000,
                  lastName: "Федоров",
                  firstName: "Антон",
                  middleName: "Михайлович",
                  shortName: "Федоров А. М.",
                  fio: "Федоров Антон Михайлович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685290864309000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727277908101035300,
               title: "Математический анализ",
            },
            groups: [
               {
                  id: 1739582424511018500,
                  title: "1ИТСб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292955582700,
               title: "613",
            },
            lecturers: [
               {
                  id: 1424936078741084000,
                  lastName: "Мухин",
                  firstName: "Владимир",
                  middleName: "Васильевич",
                  shortName: "Мухин В. В.",
                  fio: "Мухин Владимир Васильевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685261897397000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696371461149693200,
               title: "Иностранный язык (англ пг2)",
            },
            groups: [
               {
                  id: 1705969217197438500,
                  title: "2Сб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048748577000,
               title: "815",
            },
            lecturers: [
               {
                  id: 1425479079341070000,
                  lastName: "Чистякова",
                  firstName: "Вера",
                  middleName: "Васильевна",
                  shortName: "Чистякова В. В.",
                  fio: "Чистякова Вера Васильевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747916575858357000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1671824675933525500,
                  title: "1УТСб-02-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379290380669200,
               title: "327б",
            },
            lecturers: [
               {
                  id: 1484647455986292500,
                  lastName: "Питерцев",
                  firstName: "Михаил",
                  middleName: "Эдуардович",
                  shortName: "Питерцев М. Э.",
                  fio: "Питерцев Михаил Эдуардович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748923448054117000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1665390776797894000,
               title: "Проектирование в профессиональной сфере",
            },
            groups: [
               {
                  id: 1643726844876297700,
                  title: "2Тб-00-1зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1511087872294262500,
                  lastName: "Граф",
                  firstName: "Софья",
                  middleName: "Владимировна",
                  shortName: "Граф С. В.",
                  fio: "Граф Софья Владимировна",
               },
            ],
            abbrlessontype: "икр",
            lessontype: "Иная конт.раб.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685279077266200,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1667102012518438100,
               title: "Проектирование в профессиональной сфере",
            },
            groups: [
               {
                  id: 1671817216591402500,
                  title: "2ПДОб-13-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923949490400,
               title: "704",
            },
            lecturers: [
               {
                  id: 1425475486812739300,
                  lastName: "Соловьева",
                  firstName: "Елена",
                  middleName: "Евгеньевна",
                  shortName: "Соловьева Е. Е.",
                  fio: "Соловьева Елена Евгеньевна",
               },
            ],
            abbrlessontype: "икр",
            lessontype: "Иная конт.раб.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685282375037700,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727986236662871300,
               title: "Общее языкознание",
            },
            groups: [
               {
                  id: 1609298376906512000,
                  title: "2ПДОпб-13-1оп-18",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923942150400,
               title: "702",
            },
            lecturers: [
               {
                  id: 1424933661150549800,
                  lastName: "Лаврова",
                  firstName: "Светлана",
                  middleName: "Юрьевна",
                  shortName: "Лаврова С. Ю.",
                  fio: "Лаврова Светлана Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685228695286500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1726282353663145200,
               title: "Практическая фонетика немецкого языка (пг2)",
            },
            groups: [
               {
                  id: 1739582424555058700,
                  title: "2ПДОб-21-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776483725600,
               title: "424",
            },
            lecturers: [
               {
                  id: 1424935322677942000,
                  lastName: "Межецкая",
                  firstName: "Галина",
                  middleName: "Николаевна",
                  shortName: "Межецкая Г. Н.",
                  fio: "Межецкая Галина Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747577411583472400,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Технологическая практика 1",
            },
            groups: [
               {
                  id: 1705969217174369800,
                  title: "1ПИб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378664595700,
               title: "221",
            },
            lecturers: [
               {
                  id: 1434372935049549600,
                  lastName: "Юдина",
                  firstName: "Ольга",
                  middleName: "Вадимовна",
                  shortName: "Юдина О. В.",
                  fio: "Юдина Ольга Вадимовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685266269959000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1666673892806104300,
               title: "Социальная статистика (пг1)",
            },
            groups: [
               {
                  id: 1671816269488199200,
                  title: "2Сб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254003413200,
               title: "504",
            },
            lecturers: [
               {
                  id: 1421218736003618600,
                  lastName: "Воробьева",
                  firstName: "Ирина",
                  middleName: "Николаевна",
                  shortName: "Воробьева И. Н.",
                  fio: "Воробьева Ирина Николаевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747911328318485200,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1671820166426531300,
                  title: "1РФб-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776451219700,
               title: "416",
            },
            lecturers: [
               {
                  id: 1492790427106940700,
                  lastName: "Федоров",
                  firstName: "Дмитрий",
                  middleName: "Сергеевич",
                  shortName: "Федоров Д. С.",
                  fio: "Федоров Дмитрий Сергеевич",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685342030623500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1666554997406438700,
               title: "Иностранный язык в профессиональной сфере (нем)",
            },
            groups: [
               {
                  id: 1671823055054182000,
                  title: "3ХТпб-01-1оп-20",
               },
               {
                  id: 1671823433121404400,
                  title: "3МТб-01-1оп-20",
               },
               {
                  id: 1671822128479999500,
                  title: "3ТТб-01-1оп-20",
               },
               {
                  id: 1671823827303143000,
                  title: "3НТТС-01-1оп-20",
               },
               {
                  id: 1671821906014115300,
                  title: "3ДАСб-00-1оп-20",
               },
               {
                  id: 1671823795820697000,
                  title: "3ЭТМпб-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048763257000,
               title: "818",
            },
            lecturers: [
               {
                  id: 1425476791373404000,
                  lastName: "Торохова",
                  firstName: "Галина",
                  middleName: "Захаровна",
                  shortName: "Торохова Г. З.",
                  fio: "Торохова Галина Захаровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685303398986500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1695917333968590000,
               title: "Метрология и электроизмерения (пг2)",
            },
            groups: [
               {
                  id: 1705969217165981200,
                  title: "1ИБб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292969214200,
               title: "615",
            },
            lecturers: [
               {
                  id: 1500589804791797500,
                  lastName: "Каверин",
                  firstName: "Олег",
                  middleName: "Борисович",
                  shortName: "Каверин О. Б.",
                  fio: "Каверин Олег Борисович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685307693953800,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1630503591206720800,
               title: "Технология карьеры",
            },
            groups: [
               {
                  id: 1641737111948236300,
                  title: "7Эб-05-1оп-19",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490437674499051800,
               title: "208",
            },
            lecturers: [
               {
                  id: 1448967915303868200,
                  lastName: "Рогожникова",
                  firstName: "Светлана",
                  middleName: "Мугумаевна",
                  shortName: "Рогожникова С. М.",
                  fio: "Рогожникова Светлана Мугумаевна",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685246480184000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1722931211552028000,
               title: "Практикум по фонетике (английский язык) (пг2)",
            },
            groups: [
               {
                  id: 1739582424538281500,
                  title: "2Лб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254013899000,
               title: "506",
            },
            lecturers: [
               {
                  id: 1424935794245638000,
                  lastName: "Моисеенко",
                  firstName: "Анна",
                  middleName: "Валерьевна",
                  shortName: "Моисеенко А. В.",
                  fio: "Моисеенко Анна Валерьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747910394078163700,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1671820801044649500,
                  title: "1ИСб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1671012457577976000,
               title: "301а",
            },
            lecturers: [
               {
                  id: 1396414847681304300,
                  lastName: "Ершов",
                  firstName: "Евгений",
                  middleName: "Валентинович",
                  shortName: "Ершов Е. В.",
                  fio: "Ершов Евгений Валентинович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747827691912819500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "проектное обучение",
            },
            groups: [
               {
                  id: 1671817437751809500,
                  title: "2Лб-02-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292951388400,
               title: "612",
            },
            lecturers: [
               {
                  id: 1405290680295626500,
                  lastName: "Кострубина",
                  firstName: "Светлана",
                  middleName: "Александровна",
                  shortName: "Кострубина С. А.",
                  fio: "Кострубина Светлана Александровна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685304430785300,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1699721786194040000,
               title: "Психология творчества",
            },
            groups: [
               {
                  id: 1671817830092248600,
                  title: "2РТПб-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923959976200,
               title: "707",
            },
            lecturers: [
               {
                  id: 1424937542791206700,
                  lastName: "Перченко",
                  firstName: "Елена",
                  middleName: "Леонидовна",
                  shortName: "Перченко Е. Л.",
                  fio: "Перченко Елена Леонидовна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749181393086051000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1728072639099827500,
               title: "Математические и статистические методы в маркетинговых и социологических исследованиях",
            },
            groups: [
               {
                  id: 1705969217241478700,
                  title: "2ЖУРб-00-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1634137917545781000,
                  lastName: "Максимова",
                  firstName: "Татьяна",
                  middleName: "Николаевна",
                  shortName: "Максимова Т. Н.",
                  fio: "Максимова Татьяна Николаевна",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685263715627800,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1666114611701618000,
               title: "Гражданский процесс",
            },
            groups: [
               {
                  id: 1671816591728187000,
                  title: "2Юб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776448074000,
               title: "415",
            },
            lecturers: [
               {
                  id: 1672371536484374300,
                  lastName: "Хмелев",
                  firstName: "Алексей",
                  middleName: "Евгеньевич",
                  shortName: "Хмелев А. Е.",
                  fio: "Хмелев Алексей Евгеньевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685290631525000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1666745495594210600,
               title: "Технология централизованного производства электроэнергии и теплоты",
            },
            groups: [
               {
                  id: 1641743148954687000,
                  title: "3ТТб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490435838350201000,
               title: "28",
            },
            lecturers: [
               {
                  id: 1424934248273418000,
                  lastName: "Лукин",
                  firstName: "Сергей",
                  middleName: "Владимирович",
                  shortName: "Лукин С. В.",
                  fio: "Лукин Сергей Владимирович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685311036814000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1665387624132515000,
               title: "Экономика",
            },
            groups: [
               {
                  id: 1671820582751049200,
                  title: "1ИТСб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346293012205800,
               title: "623",
            },
            lecturers: [
               {
                  id: 1676257388726851300,
                  lastName: "Сахарова",
                  firstName: "Наталия",
                  middleName: "Васильевна",
                  shortName: "Сахарова Н. В.",
                  fio: "Сахарова Наталия Васильевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685212265149200,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1726281988696831200,
               title: "Физическая культура и спорт (элективная дисциплина)",
            },
            groups: [
               {
                  id: 1739582424564496000,
                  title: "7УПб-01-1оп-22",
               },
               {
                  id: 1739582424566593000,
                  title: "7ЭБ-01-1оп-22",
               },
               {
                  id: 1739582424560301600,
                  title: "7Эб-06-1оп-22",
               },
               {
                  id: 1739582424562398700,
                  title: "7Эб-07-1оп-22",
               },
               {
                  id: 1739582424520455700,
                  title: "9Бб-01-1оп-22",
               },
            ],
            build: {
               id: 1492901605554525200,
               title: "Спортивный корпус (ул.Труда,д.3)",
            },
            auditory: {
               id: 1493343626573386000,
               title: "1/4",
            },
            lecturers: [
               {
                  id: 1513203073464407800,
                  lastName: "Прядехина",
                  firstName: "Мария",
                  middleName: "Сергеевна",
                  shortName: "Прядехина М. С.",
                  fio: "Прядехина Мария Сергеевна",
               },
               {
                  id: 1421214386228303600,
                  lastName: "Берцева",
                  firstName: "Татьяна",
                  middleName: "Станиславовна",
                  shortName: "Берцева Т. С.",
                  fio: "Берцева Татьяна Станиславовна",
               },
               {
                  id: 1571703015355717400,
                  lastName: "Легких",
                  firstName: "Артём",
                  middleName: "Леонидович",
                  shortName: "Легких А. Л.",
                  fio: "Легких Артём Леонидович",
               },
               {
                  id: 1644364336262551300,
                  lastName: "Гаврикова",
                  firstName: "Ольга",
                  middleName: "Юрьевна",
                  shortName: "Гаврикова О. Ю.",
                  fio: "Гаврикова Ольга Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748199700953953000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Вакцинация от гриппа",
            },
            groups: [
               {
                  id: 1705969217196390000,
                  title: "7УПб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1491992159538123000,
               title: "103",
            },
            lecturers: [
               {
                  id: 1747850345543759600,
                  lastName: "Пукело",
                  firstName: "Елена",
                  middleName: "Вячеславовна",
                  shortName: "Пукело Е. В.",
                  fio: "Пукело Елена Вячеславовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685254101234400,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1602599078029432000,
               title: "Организация мероприятий ВФСК ГТО",
            },
            groups: [
               {
                  id: 1624632741121234400,
                  title: "9ПДОпб-17-1оп-18",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490438777526555000,
               title: "302",
            },
            lecturers: [
               {
                  id: 1425480254933178000,
                  lastName: "Шкляр",
                  firstName: "Ольга",
                  middleName: "Брониславовна",
                  shortName: "Шкляр О. Б.",
                  fio: "Шкляр Ольга Брониславовна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685334625579800,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1695734751216801000,
               title: "Иностранный язык (англ)",
            },
            groups: [
               {
                  id: 1705969217240430000,
                  title: "2ЖУРб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048772694300,
               title: "820",
            },
            lecturers: [
               {
                  id: 1478386891657058000,
                  lastName: "Башнина",
                  firstName: "Александра",
                  middleName: "Викторовна",
                  shortName: "Башнина А. В.",
                  fio: "Башнина Александра Викторовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685317544276700,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727274974124569900,
               title: "Химия",
            },
            groups: [
               {
                  id: 1739582424544573000,
                  title: "3НТТС-01-1оп-22",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490364153823498500,
               title: "402",
            },
            lecturers: [
               {
                  id: 1424933017158162200,
                  lastName: "Кузнецова",
                  firstName: "Юлия",
                  middleName: "Сергеевна",
                  shortName: "Кузнецова Ю. С.",
                  fio: "Кузнецова Юлия Сергеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749099835637494500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1632155836554941700,
               title: "Практический курс первого иностранного языка (пг1)",
            },
            groups: [
               {
                  id: 1641737109227181600,
                  title: "2ИЯб-09-1зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "онлайн",
            },
            lecturers: [
               {
                  id: 1421225556298438400,
                  lastName: "Дунаевская",
                  firstName: "Татьяна",
                  middleName: "Алексеевна",
                  shortName: "Дунаевская Т. А.",
                  fio: "Дунаевская Татьяна Алексеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685260618134300,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1631700425777354000,
               title: "Организация работы рекламного отдела и отдела по связям с общественностью",
            },
            groups: [
               {
                  id: 1641734136298215000,
                  title: "2СОб-00-1оп-19",
               },
            ],
            build: {
               id: 1471886253797414000,
               title: "Учебно-лабораторный корпус № 3 (ул.М.Горького, 14)",
            },
            auditory: {
               id: 1491700663191605500,
               title: "110",
            },
            lecturers: [
               {
                  id: 1425481467636488000,
                  lastName: "Яковлева",
                  firstName: "Надежда",
                  middleName: "Ивановна",
                  shortName: "Яковлева Н. И.",
                  fio: "Яковлева Надежда Ивановна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685340062446300,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696205977494230300,
               title: "Теория автоматов и формальных языков (пг2)",
            },
            groups: [
               {
                  id: 1705969217175418400,
                  title: "1ПИб-01-2оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378633138400,
               title: "217",
            },
            lecturers: [
               {
                  id: 1447872296193628000,
                  lastName: "Ганичева",
                  firstName: "Оксана",
                  middleName: "Георгиевна",
                  shortName: "Ганичева О. Г.",
                  fio: "Ганичева Оксана Георгиевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685335775867600,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1666744570004641000,
               title: "Экономический анализ деятельности организаций",
            },
            groups: [
               {
                  id: 1671815746081003000,
                  title: "7Мпб-00-1зп-20",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1443889749481756400,
                  lastName: "Кошелева",
                  firstName: "Алена",
                  middleName: "Владимировна",
                  shortName: "Кошелева А. В.",
                  fio: "Кошелева Алена Владимировна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685233765151500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696473008827274500,
               title: "Методика начального языкового образования (пг2)",
            },
            groups: [
               {
                  id: 1705969217212118500,
                  title: "4ПДОб-19-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048795763000,
               title: "825",
            },
            lecturers: [
               {
                  id: 1425479116566566700,
                  lastName: "Чистякова",
                  firstName: "Наталия",
                  middleName: "Николаевна",
                  shortName: "Чистякова Н. Н.",
                  fio: "Чистякова Наталия Николаевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685291762938600,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1728532229283247400,
               title: "Исследование и проектирование сетей и автоматики",
            },
            groups: [
               {
                  id: 1641743302326752800,
                  title: "3ЭЭб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436122605523200,
               title: "32",
            },
            lecturers: [
               {
                  id: 1425474675677337300,
                  lastName: "Сидорова",
                  firstName: "Инна",
                  middleName: "Владимировна",
                  shortName: "Сидорова И. В.",
                  fio: "Сидорова Инна Владимировна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685303108531000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1695917322109195500,
               title: "Теория информации (пг1)",
            },
            groups: [
               {
                  id: 1705969217165981200,
                  title: "1ИБб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346293021643000,
               title: "625",
            },
            lecturers: [
               {
                  id: 1425475779845691100,
                  lastName: "Стародубцев",
                  firstName: "Денис",
                  middleName: "Евгеньевич",
                  shortName: "Стародубцев Д. Е.",
                  fio: "Стародубцев Денис Евгеньевич",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685279485162200,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727275587089593600,
               title: "Иностранный язык (англ пг2)",
            },
            groups: [
               {
                  id: 1739582424525698600,
                  title: "1ИБб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520946135300,
               title: "914",
            },
            lecturers: [
               {
                  id: 1577151136250468000,
                  lastName: "Шмакова",
                  firstName: "Вероника",
                  middleName: "Николаевна",
                  shortName: "Шмакова В. Н.",
                  fio: "Шмакова Вероника Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685321374724900,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1727277659049555200,
               title: "История (история России, всеобщая история)",
            },
            groups: [
               {
                  id: 1739582424573933000,
                  title: "3МТб-03-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292923076900,
               title: "604",
            },
            lecturers: [
               {
                  id: 1424937585071888100,
                  lastName: "Петелин",
                  firstName: "Борис",
                  middleName: "Валентинович",
                  shortName: "Петелин Б. В.",
                  fio: "Петелин Борис Валентинович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748823196772987600,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696547110751573200,
               title: "Практическая грамматика второго иностранного языка (пг2)",
            },
            groups: [
               {
                  id: 1705969217198487000,
                  title: "2ИЯб-09-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1424937429677119200,
                  lastName: "Пахолкова",
                  firstName: "Татьяна",
                  middleName: "Васильевна",
                  shortName: "Пахолкова Т. В.",
                  fio: "Пахолкова Татьяна Васильевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685210774074000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1666035582596289800,
               title: "Лидерство и управление командой (пг7)",
            },
            groups: [
               {
                  id: 1671825251655227000,
                  title: "9ФКб-01-1оп-20",
               },
               {
                  id: 1671815301225780700,
                  title: "7Эб-04-1оп-20",
               },
               {
                  id: 1671815510729168400,
                  title: "7УПпб-01-1оп-20",
               },
               {
                  id: 1671815577865295400,
                  title: "7ЭБ-01-1оп-20",
               },
               {
                  id: 1671825067435103700,
                  title: "9Бб-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048777937200,
               title: "821",
            },
            lecturers: [
               {
                  id: 1431202970135959300,
                  lastName: "Балюшина",
                  firstName: "Юлия",
                  middleName: "Львовна",
                  shortName: "Балюшина Ю. Л.",
                  fio: "Балюшина Юлия Львовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685338528379600,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1584140442410161400,
               title: "Принятие и исполнение государственных решений",
            },
            groups: [
               {
                  id: 1609396466053289500,
                  title: "7ГМУб-00-1зп-18",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1425477939742381800,
                  lastName: "Хавроничев",
                  firstName: "Владимир",
                  middleName: "Иванович",
                  shortName: "Хавроничев В. И.",
                  fio: "Хавроничев Владимир Иванович",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685344981316400,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1665386300261275000,
               title: "Графические системы и языки",
            },
            groups: [
               {
                  id: 1676611732890457600,
                  title: "1ИСб-00-2оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488369326572441900,
               title: "218а",
            },
            lecturers: [
               {
                  id: 1472314025600620300,
                  lastName: "Табунов",
                  firstName: "Павел",
                  middleName: "Александрович",
                  shortName: "Табунов П. А.",
                  fio: "Табунов Павел Александрович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685236500886300,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1725994625777137000,
               title: "Прикладные информационные технологии",
            },
            groups: [
               {
                  id: 1739582424507872800,
                  title: "3СТб-01-2оп-22",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1425474998634551000,
                  lastName: "Смирнова",
                  firstName: "Елена",
                  middleName: "Анатольевна",
                  shortName: "Смирнова Е. А.",
                  fio: "Смирнова Елена Анатольевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685269895934700,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1682591908274115800,
               title: "Социальный портрет Вологодской области",
            },
            groups: [
               {
                  id: 1641733989795370500,
                  title: "2Сб-00-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345253992927500,
               title: "502",
            },
            lecturers: [
               {
                  id: 1513183652125611800,
                  lastName: "Смирнова",
                  firstName: "Елена",
                  middleName: "Алексеевна",
                  shortName: "Смирнова Е. А.",
                  fio: "Смирнова Елена Алексеевна",
               },
            ],
            abbrlessontype: "икр",
            lessontype: "Иная конт.раб.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685330037011200,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1729344507440133400,
               title: "Юридические основы предпринимательства",
            },
            groups: [
               {
                  id: 1641829272027928000,
                  title: "1УТСб-02-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624631271700,
               title: "320",
            },
            lecturers: [
               {
                  id: 1424933743597983500,
                  lastName: "Ларичев",
                  firstName: "Андрей",
                  middleName: "Витальевич",
                  shortName: "Ларичев А. В.",
                  fio: "Ларичев Андрей Витальевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747913026602660600,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1671820870725670400,
                  title: "1ПИб-01-2оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1671012553029849300,
               title: "301в",
            },
            lecturers: [
               {
                  id: 1396414847681304300,
                  lastName: "Ершов",
                  firstName: "Евгений",
                  middleName: "Валентинович",
                  shortName: "Ершов Е. В.",
                  fio: "Ершов Евгений Валентинович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685233378227000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1631061073160312000,
               title: "Вспомогательные исторические дисциплины",
            },
            groups: [
               {
                  id: 1671817586681058800,
                  title: "2Иб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347923984093400,
               title: "713",
            },
            lecturers: [
               {
                  id: 1439708146481239800,
                  lastName: "Лукинцева",
                  firstName: "Валерия",
                  middleName: "Алексеевна",
                  shortName: "Лукинцева В. А.",
                  fio: "Лукинцева Валерия Алексеевна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685264502059800,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696381655208433000,
               title: "Методика и методология социологического исследования",
            },
            groups: [
               {
                  id: 1705969217229944300,
                  title: "2СРб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254028579000,
               title: "509",
            },
            lecturers: [
               {
                  id: 1424483394675283700,
                  lastName: "Ковалева",
                  firstName: "Галина",
                  middleName: "Александровна",
                  shortName: "Ковалева Г. А.",
                  fio: "Ковалева Галина Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747841885843354400,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1671816734752904700,
                  title: "2СОб-00-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1492080565002703000,
               title: "318",
            },
            lecturers: [
               {
                  id: 1396215387764299500,
                  lastName: "Чернов",
                  firstName: "Александр",
                  middleName: "Валентинович",
                  shortName: "Чернов А. В.",
                  fio: "Чернов Александр Валентинович",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685281767912200,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696468889245848800,
               title: "Педагогика",
            },
            groups: [
               {
                  id: 1705969217225750000,
                  title: "2ПДОб-13-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048783180000,
               title: "822",
            },
            lecturers: [
               {
                  id: 1424930953840564000,
                  lastName: "Косаренкова",
                  firstName: "Маргарита",
                  middleName: "Михайловна",
                  shortName: "Косаренкова М. М.",
                  fio: "Косаренкова Маргарита Михайловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685334388601600,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1724374956520633600,
               title: "Основы теории журналистики",
            },
            groups: [
               {
                  id: 1739582424589661700,
                  title: "2СОб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776422908200,
               title: "407",
            },
            lecturers: [
               {
                  id: 1425477852516587300,
                  lastName: "Дворянова",
                  firstName: "Мария",
                  middleName: "Валерьевна",
                  shortName: "Дворянова М. В.",
                  fio: "Дворянова Мария Валерьевна",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685232381031200,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1725994622391285000,
               title: "Введение в инженерную деятельность и специальность",
            },
            groups: [
               {
                  id: 1739582424506824200,
                  title: "3СТб-01-1оп-22",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490356052387959000,
               title: "311",
            },
            lecturers: [
               {
                  id: 1421218888423577300,
                  lastName: "Ворожбянов",
                  firstName: "Василий",
                  middleName: "Николаевич",
                  shortName: "Ворожбянов В. Н.",
                  fio: "Ворожбянов Василий Николаевич",
               },
            ],
            abbrlessontype: "з",
            lessontype: "Зач.",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685302143841000,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1726901590867965200,
               title: "Введение в цифровую культуру (пг1)",
            },
            groups: [
               {
                  id: 1739582424505775600,
                  title: "1ПИб-02-3оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378640478500,
               title: "218",
            },
            lecturers: [
               {
                  id: 1425490815175628500,
                  lastName: "Журавлева",
                  firstName: "Юлия",
                  middleName: "Михайловна",
                  shortName: "Журавлева Ю. М.",
                  fio: "Журавлева Юлия Михайловна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685248572093200,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1695725076263998700,
               title: "Технология проектной деятельности",
            },
            groups: [
               {
                  id: 1705969217244624400,
                  title: "2Лб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292933562600,
               title: "607",
            },
            lecturers: [
               {
                  id: 1472590680489465600,
                  lastName: "Ловкова",
                  firstName: "Екатерина",
                  middleName: "Александровна",
                  shortName: "Ловкова Е. А.",
                  fio: "Ловкова Екатерина Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749187341270774500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696461448744539400,
               title: "Хореография и пластика в театрализованных представлениях",
            },
            groups: [
               {
                  id: 1705969217248818700,
                  title: "2РТПб-01-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1672099246548981500,
                  lastName: "Горшков",
                  firstName: "Евгений",
                  middleName: "Владимирович",
                  shortName: "Горшков Е. В.",
                  fio: "Горшков Евгений Владимирович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685231373349600,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1696360508113819000,
               title: "Источниковедение",
            },
            groups: [
               {
                  id: 1705969217224701400,
                  title: "2ПДОб-14-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520914678000,
               title: "906",
            },
            lecturers: [
               {
                  id: 1421225821027178200,
                  lastName: "Егоров",
                  firstName: "Андрей",
                  middleName: "Николаевич",
                  shortName: "Егоров А. Н.",
                  fio: "Егоров Андрей Николаевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685252837700400,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1631794609322464500,
               title: "Новые физкультурно-спортивные виды",
            },
            groups: [
               {
                  id: 1641735286599718400,
                  title: "9ФКб-01-1оп-19",
               },
            ],
            build: {
               id: 1490442417495610400,
               title: 'Спортивный комплекс "Университетский" (ул. Труда, 3)',
            },
            auditory: {
               id: 1671133117620949200,
               title: "1",
            },
            lecturers: [
               {
                  id: 1478211816264832800,
                  lastName: "Подоляка",
                  firstName: "Олег",
                  middleName: "Борисович",
                  shortName: "Подоляка О. Б.",
                  fio: "Подоляка Олег Борисович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685228129055500,
            dateEvent: "23.11.2022",
            startTime: "11:50",
            endTime: "13:20",
            discipline: {
               id: 1726095767161927000,
               title: "Этнология",
            },
            groups: [
               {
                  id: 1739582424552961500,
                  title: "2ПДОб-14-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520904192300,
               title: "903",
            },
            lecturers: [
               {
                  id: 1421060837093676800,
                  lastName: "Алексеева",
                  firstName: "Надежда",
                  middleName: "Викторовна",
                  shortName: "Алексеева Н. В.",
                  fio: "Алексеева Надежда Викторовна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685318950417200,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1724374932483077400,
               title: "Межличностные коммуникации в сфере PR и рекламы",
            },
            groups: [
               {
                  id: 1739582424589661700,
                  title: "2СОб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776422908200,
               title: "407",
            },
            lecturers: [
               {
                  id: 1448967915303868200,
                  lastName: "Рогожникова",
                  firstName: "Светлана",
                  middleName: "Мугумаевна",
                  shortName: "Рогожникова С. М.",
                  fio: "Рогожникова Светлана Мугумаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685273852212000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1632221946019059000,
               title: "Аналитическое чтение (пг1)",
            },
            groups: [
               {
                  id: 1641732085136758300,
                  title: "2Лб-02-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254013899000,
               title: "506",
            },
            lecturers: [
               {
                  id: 1405290680295626500,
                  lastName: "Кострубина",
                  firstName: "Светлана",
                  middleName: "Александровна",
                  shortName: "Кострубина С. А.",
                  fio: "Кострубина Светлана Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685320046179000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1727369724120921300,
               title: "Физика технических объектов (пг1)",
            },
            groups: [
               {
                  id: 1739582424522552800,
                  title: "1АПб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254056890600,
               title: "515",
            },
            lecturers: [
               {
                  id: 1425494008685139700,
                  lastName: "Козырева",
                  firstName: "Яна",
                  middleName: "Анатольевна",
                  shortName: "Козырева Я. А.",
                  fio: "Козырева Яна Анатольевна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685237347087000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1727259975602795800,
               title: "Иностранный язык (англ пг2)",
            },
            groups: [
               {
                  id: 1739582424539330000,
                  title: "1ПДОб-15-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520918872300,
               title: "907",
            },
            lecturers: [
               {
                  id: 1729906009590069000,
                  lastName: "Чуева",
                  firstName: "Мария",
                  middleName: "Викторовна",
                  shortName: "Чуева М. В.",
                  fio: "Чуева Мария Викторовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685210494104300,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1665206419934156000,
               title: "Дизайн-мышление. Методология работы с клиентом (пг4)",
            },
            groups: [
               {
                  id: 1671815449735599600,
                  title: "7Эб-05-1оп-20",
               },
               {
                  id: 1671815510729168400,
                  title: "7УПпб-01-1оп-20",
               },
               {
                  id: 1671815577865295400,
                  title: "7ЭБ-01-1оп-20",
               },
               {
                  id: 1671825067435103700,
                  title: "9Бб-01-1оп-20",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490437674469691600,
               title: "202",
            },
            lecturers: [
               {
                  id: 1478026529608832800,
                  lastName: "Ковшикова",
                  firstName: "Галина",
                  middleName: "Александровна",
                  shortName: "Ковшикова Г. А.",
                  fio: "Ковшикова Галина Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685336098829000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1667308108430447900,
               title: "Экономика государственного и муниципального сектора",
            },
            groups: [
               {
                  id: 1641738451705403000,
                  title: "7ГМУб-00-1зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1421218855851661000,
                  lastName: "Воробьева",
                  firstName: "Татьяна",
                  middleName: "Борисовна",
                  shortName: "Воробьева Т. Б.",
                  fio: "Воробьева Татьяна Борисовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1748828817623741200,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696547104430757000,
               title: "Практическая грамматика первого иностранного языка (пг1)",
            },
            groups: [
               {
                  id: 1705969217198487000,
                  title: "2ИЯб-09-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1425475991588837000,
                  lastName: "Суворова",
                  firstName: "Наталья",
                  middleName: "Леонидовна",
                  shortName: "Суворова Н. Л.",
                  fio: "Суворова Наталья Леонидовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685233019614000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696470520024798500,
               title: "Организация добровольческой (волонтерской) деятельности и взаимодействие с социально-ориентированным НКО",
            },
            groups: [
               {
                  id: 1705969217230993000,
                  title: "1ПДОб-15-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490349048724459800,
               title: "810",
            },
            lecturers: [
               {
                  id: 1424938360835676000,
                  lastName: "Попова",
                  firstName: "Светлана",
                  middleName: "Игоревна",
                  shortName: "Попова С. И.",
                  fio: "Попова Светлана Игоревна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748926255527228200,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1668504262360962300,
               title: "Второй иностранный язык (нем)",
            },
            groups: [
               {
                  id: 1643726844876297700,
                  title: "2Тб-00-1зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1634137917545781000,
                  lastName: "Максимова",
                  firstName: "Татьяна",
                  middleName: "Николаевна",
                  shortName: "Максимова Т. Н.",
                  fio: "Максимова Татьяна Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685222287438600,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1602604408601843000,
               title: "Психология стресса и стрессоустойчивого поведения",
            },
            groups: [
               {
                  id: 1609302467033437700,
                  title: "4ПСД-01-1оп-18",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347924011356400,
               title: "719",
            },
            lecturers: [
               {
                  id: 1425473976827647700,
                  lastName: "Сборцева",
                  firstName: "Татьяна",
                  middleName: "Васильевна",
                  shortName: "Сборцева Т. В.",
                  fio: "Сборцева Татьяна Васильевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749187354851931000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696461448744539400,
               title: "Хореография и пластика в театрализованных представлениях",
            },
            groups: [
               {
                  id: 1705969217248818700,
                  title: "2РТПб-01-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1672099246548981500,
                  lastName: "Горшков",
                  firstName: "Евгений",
                  middleName: "Владимирович",
                  shortName: "Горшков Е. В.",
                  fio: "Горшков Евгений Владимирович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685296481530600,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1727277921333015800,
               title: "Программирование",
            },
            groups: [
               {
                  id: 1739582424512067000,
                  title: "1ИТСб-00-2оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346293021643000,
               title: "625",
            },
            lecturers: [
               {
                  id: 1424934271309584100,
                  lastName: "Лукичев",
                  firstName: "Алексей",
                  middleName: "Андреевич",
                  shortName: "Лукичев А. А.",
                  fio: "Лукичев Алексей Андреевич",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685339444835000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696201888502912300,
               title: "Иностранный язык (англ пг1)",
            },
            groups: [
               {
                  id: 1705969217164932600,
                  title: "1ИСб-00-2оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624613446000,
               title: "315",
            },
            lecturers: [
               {
                  id: 1704794965414901500,
                  lastName: "Першина",
                  firstName: "Елена",
                  middleName: "Юрьевна",
                  shortName: "Першина Е. Ю.",
                  fio: "Першина Елена Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685302878892800,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1695917317777528000,
               title: "Дискретная математика",
            },
            groups: [
               {
                  id: 1705969217165981200,
                  title: "1ИБб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292955582700,
               title: "613",
            },
            lecturers: [
               {
                  id: 1425475779845691100,
                  lastName: "Стародубцев",
                  firstName: "Денис",
                  middleName: "Евгеньевич",
                  shortName: "Стародубцев Д. Е.",
                  fio: "Стародубцев Денис Евгеньевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748200579715167000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 0,
               title: "Вакцинация от гриппа",
            },
            groups: [
               {
                  id: 1739582424562398700,
                  title: "7Эб-07-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1491992159538123000,
               title: "103",
            },
            lecturers: [
               {
                  id: 1747850345543759600,
                  lastName: "Пукело",
                  firstName: "Елена",
                  middleName: "Вячеславовна",
                  shortName: "Пукело Е. В.",
                  fio: "Пукело Елена Вячеславовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685276030104300,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1724381133989082400,
               title: "География",
            },
            groups: [
               {
                  id: 1739582424568690200,
                  title: "2Тб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347924065882400,
               title: "726",
            },
            lecturers: [
               {
                  id: 1424937280741578500,
                  lastName: "Пакляшова",
                  firstName: "Наталья",
                  middleName: "Анатольевна",
                  shortName: "Пакляшова Н. А.",
                  fio: "Пакляшова Наталья Анатольевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685321126212400,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1727372742359905500,
               title: "Безопасность жизнедеятельности",
            },
            groups: [
               {
                  id: 1739582424524650000,
                  title: "1УТСб-02-1оп-22",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903814566100,
               title: "52",
            },
            lecturers: [
               {
                  id: 1733621848817399600,
                  lastName: "Горохова",
                  firstName: "Татьяна",
                  middleName: "Юрьевна",
                  shortName: "Горохова Т. Ю.",
                  fio: "Горохова Татьяна Юрьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685242761933600,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696187574862747000,
               title: "Методы математической физики",
            },
            groups: [
               {
                  id: 1705969217190098400,
                  title: "1РФб-02-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254090445000,
               title: "522",
            },
            lecturers: [
               {
                  id: 1424934639091324700,
                  lastName: "Максимова",
                  firstName: "Ольга",
                  middleName: "Геннадьевна",
                  shortName: "Максимова О. Г.",
                  fio: "Максимова Ольга Геннадьевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1749197417231545000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1631586072307701000,
               title: "Иностранный язык в профессиональной сфере (англ)",
            },
            groups: [
               {
                  id: 1671816936575473200,
                  title: "2Тб-00-1зп-20",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "онлайн",
            },
            lecturers: [
               {
                  id: 1421231715873986300,
                  lastName: "Зайцева",
                  firstName: "Татьяна",
                  middleName: "Александровна",
                  shortName: "Зайцева Т. А.",
                  fio: "Зайцева Татьяна Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1747666718030689000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1666027127941633300,
               title: "Базы данных (пг2)",
            },
            groups: [
               {
                  id: 1671820870725670400,
                  title: "1ПИб-01-2оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378709684500,
               title: "227",
            },
            lecturers: [
               {
                  id: 1425474223841744600,
                  lastName: "Селяничев",
                  firstName: "Олег",
                  middleName: "Леонидович",
                  shortName: "Селяничев О. Л.",
                  fio: "Селяничев Олег Леонидович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685245970576100,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1631701237003982000,
               title: "Ресурсо- и энергосбережение в строительстве",
            },
            groups: [
               {
                  id: 1641852232647317000,
                  title: "3СТб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669119576937500,
               title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
            },
            auditory: {
               id: 1490352157750202600,
               title: "111",
            },
            lecturers: [
               {
                  id: 1425492433159853800,
                  lastName: "Поварова",
                  firstName: "Ольга",
                  middleName: "Александровна",
                  shortName: "Поварова О. А.",
                  fio: "Поварова Ольга Александровна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748823209438737200,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696547110751573200,
               title: "Практическая грамматика второго иностранного языка (пг2)",
            },
            groups: [
               {
                  id: 1705969217198487000,
                  title: "2ИЯб-09-1зп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1424937429677119200,
                  lastName: "Пахолкова",
                  firstName: "Татьяна",
                  middleName: "Васильевна",
                  shortName: "Пахолкова Т. В.",
                  fio: "Пахолкова Татьяна Васильевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685336260309800,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1695734760260769000,
               title: "Основы теории коммуникации",
            },
            groups: [
               {
                  id: 1705969217240430000,
                  title: "2ЖУРб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345254047453400,
               title: "513",
            },
            lecturers: [
               {
                  id: 1424935724681009000,
                  lastName: "Мельникова",
                  firstName: "Наталия",
                  middleName: "Георгиевна",
                  shortName: "Мельникова Н. Г.",
                  fio: "Мельникова Наталия Георгиевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1748192108884128500,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 0,
               title: "Вакцинация от гриппа",
            },
            groups: [
               {
                  id: 1739582424515212800,
                  title: "3ХТб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1491992159538123000,
               title: "103",
            },
            lecturers: [
               {
                  id: 1747850345543759600,
                  lastName: "Пукело",
                  firstName: "Елена",
                  middleName: "Вячеславовна",
                  shortName: "Пукело Е. В.",
                  fio: "Пукело Елена Вячеславовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685287956607700,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1667368850460513500,
               title: "Расчет и проектирование систем безопасности труда",
            },
            groups: [
               {
                  id: 1641742799740081700,
                  title: "3ТБб-02-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903822954800,
               title: "54",
            },
            lecturers: [
               {
                  id: 1421226191729203000,
                  lastName: "Ермилов",
                  firstName: "Владимир",
                  middleName: "Витальевич",
                  shortName: "Ермилов В. В.",
                  fio: "Ермилов Владимир Витальевич",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685324474315500,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696291513968891100,
               title: "Иностранный язык (англ пг1)",
            },
            groups: [
               {
                  id: 1705969217194292700,
                  title: "1АПпб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520941941000,
               title: "913",
            },
            lecturers: [
               {
                  id: 1424938073381148400,
                  lastName: "Поклад",
                  firstName: "Наталия",
                  middleName: "Игоревна",
                  shortName: "Поклад Н. И.",
                  fio: "Поклад Наталия Игоревна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685330875872000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1602709411734754600,
               title: "Локальные, встраиваемые, распределенные и интегрированные системы управления",
            },
            groups: [
               {
                  id: 1641829272027928000,
                  title: "1УТСб-02-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624631271700,
               title: "320",
            },
            lecturers: [
               {
                  id: 1424934544312637200,
                  lastName: "Макарова",
                  firstName: "Наталья",
                  middleName: "Леонидовна",
                  shortName: "Макарова Н. Л.",
                  fio: "Макарова Наталья Леонидовна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747916843574489900,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 0,
               title: "проектное обучение",
            },
            groups: [
               {
                  id: 1671820629673776600,
                  title: "4ПСД-01-1оп-20",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346292930417000,
               title: "606",
            },
            lecturers: [
               {
                  id: 1424935679983359700,
                  lastName: "Михаленко",
                  firstName: "Татьяна",
                  middleName: "Николаевна",
                  shortName: "Михаленко Т. Н.",
                  fio: "Михаленко Татьяна Николаевна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685231100719900,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696458019660895500,
               title: "Нечеткая логика",
            },
            groups: [
               {
                  id: 1705969217226798600,
                  title: "1ПМб-02-1оп-21",
               },
               {
                  id: 1705969217227847200,
                  title: "1ПМб-03-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624670069000,
               title: "331",
            },
            lecturers: [
               {
                  id: 1424937863291606800,
                  lastName: "Плотникова",
                  firstName: "Надежда",
                  middleName: "Валентиновна",
                  shortName: "Плотникова Н. В.",
                  fio: "Плотникова Надежда Валентиновна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685216056800000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1726375037169956000,
               title: "Этнология",
            },
            groups: [
               {
                  id: 1739582424591758800,
                  title: "2Иб-00-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490350520914678000,
               title: "906",
            },
            lecturers: [
               {
                  id: 1421060837093676800,
                  lastName: "Алексеева",
                  firstName: "Надежда",
                  middleName: "Викторовна",
                  shortName: "Алексеева Н. В.",
                  fio: "Алексеева Надежда Викторовна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685296140743400,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696361019421496600,
               title: "Бухгалтерский учет",
            },
            groups: [
               {
                  id: 1705969217222604300,
                  title: "7ЭБ-01-1оп-21",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1710344616300902100,
                  lastName: "Малкова",
                  firstName: "Ирина",
                  middleName: "Алфеевна",
                  shortName: "Малкова И. А.",
                  fio: "Малкова Ирина Алфеевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685291821659000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1728532229283247400,
               title: "Исследование и проектирование сетей и автоматики",
            },
            groups: [
               {
                  id: 1641743302326752800,
                  title: "3ЭЭб-01-1оп-19",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436122605523200,
               title: "32",
            },
            lecturers: [
               {
                  id: 1425474675677337300,
                  lastName: "Сидорова",
                  firstName: "Инна",
                  middleName: "Владимировна",
                  shortName: "Сидорова И. В.",
                  fio: "Сидорова Инна Владимировна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685315443979000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1727369705719461000,
               title: "Введение в цифровую культуру (пг2)",
            },
            groups: [
               {
                  id: 1739582424522552800,
                  title: "1АПб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488379776407179500,
               title: "402",
            },
            lecturers: [
               {
                  id: 1508558570549942000,
                  lastName: "Лягинов",
                  firstName: "Никита",
                  middleName: "Михайлович",
                  shortName: "Лягинов Н. М.",
                  fio: "Лягинов Никита Михайлович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685261850211000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696371471984629000,
               title: "История социологии",
            },
            groups: [
               {
                  id: 1705969217197438500,
                  title: "2Сб-00-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490345253992927500,
               title: "502",
            },
            lecturers: [
               {
                  id: 1421223582630942500,
                  lastName: "Гужавина",
                  firstName: "Татьяна",
                  middleName: "Анатольевна",
                  shortName: "Гужавина Т. А.",
                  fio: "Гужавина Татьяна Анатольевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685315494310700,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1724815203087807700,
               title: "История мировой культуры",
            },
            groups: [
               {
                  id: 1739582424526747100,
                  title: "2РТПб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488365888710119700,
               title: "201",
            },
            lecturers: [
               {
                  id: 1421219906975700700,
                  lastName: "Галунова",
                  firstName: "Светлана",
                  middleName: "Николаевна",
                  shortName: "Галунова С. Н.",
                  fio: "Галунова Светлана Николаевна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685224247227100,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696291654096393500,
               title: "Педагогические технологии",
            },
            groups: [
               {
                  id: 1705969217213167000,
                  title: "4ПДОб-20-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488372624626028800,
               title: "319",
            },
            lecturers: [
               {
                  id: 1424937201736619800,
                  lastName: "Павлова",
                  firstName: "Любовь",
                  middleName: "Владимировна",
                  shortName: "Павлова Л. В.",
                  fio: "Павлова Любовь Владимировна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685226387370800,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696475986041771300,
               title: "Философия",
            },
            groups: [
               {
                  id: 1705969217243575800,
                  title: "2ПДОб-21-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488365888719556900,
               title: "203",
            },
            lecturers: [
               {
                  id: 1425475155715430100,
                  lastName: "Смирнова",
                  firstName: "Ольга",
                  middleName: "Вениаминовна",
                  shortName: "Смирнова О. В.",
                  fio: "Смирнова Ольга Вениаминовна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685336985924400,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1665307170144523500,
               title: "Дизайн-мышление. Методология работы с клиентом",
            },
            groups: [
               {
                  id: 1641737307430065700,
                  title: "7Мпб-00-1зп-19",
               },
               {
                  id: 1646196032871077400,
                  title: "7Мпб-00-2зп-19",
               },
            ],
            build: null,
            auditory: {
               id: 0,
               title: "Онлайн",
            },
            lecturers: [
               {
                  id: 1466623234877167400,
                  lastName: "Крылова",
                  firstName: "Наталья",
                  middleName: "Павловна",
                  shortName: "Крылова Н. П.",
                  fio: "Крылова Наталья Павловна",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: "-",
            online: 1,
         },
         {
            id: 1746685287673492200,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1727275610798945500,
               title: "Основы информационной безопасности (пг2)",
            },
            groups: [
               {
                  id: 1739582424525698600,
                  title: "1ИБб-01-1оп-22",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490346293025837300,
               title: "626",
            },
            lecturers: [
               {
                  id: 1421232718095587000,
                  lastName: "Зуев",
                  firstName: "Андрей",
                  middleName: "Николаевич",
                  shortName: "Зуев А. Н.",
                  fio: "Зуев Андрей Николаевич",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685309157766000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1633762709140936000,
               title: "Техническая механика (дополнительные главы)",
            },
            groups: [
               {
                  id: 1671823357212890600,
                  title: "3ТБб-02-1оп-20",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436903835537700,
               title: "57",
            },
            lecturers: [
               {
                  id: 1424483270625597200,
                  lastName: "Клинов",
                  firstName: "Александр",
                  middleName: "Владимирович",
                  shortName: "Клинов А. В.",
                  fio: "Клинов Александр Владимирович",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685299511915300,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1667015266942326000,
               title: "Дигностика оборудования",
            },
            groups: [
               {
                  id: 1671822913191286300,
                  title: "3ЭЭб-01-1оп-20",
               },
            ],
            build: {
               id: 1484669348207400000,
               title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
            },
            auditory: {
               id: 1490436480239145200,
               title: "45",
            },
            lecturers: [
               {
                  id: 1429938891028174600,
                  lastName: "Кожевников",
                  firstName: "Александр",
                  middleName: "Вячеславович",
                  shortName: "Кожевников А. В.",
                  fio: "Кожевников Александр Вячеславович",
               },
            ],
            abbrlessontype: "п",
            lessontype: "Практ.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685279050003200,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696480272901477600,
               title: "Систематика высших растений (пг1)",
            },
            groups: [
               {
                  id: 1705969217181709800,
                  title: "9Бб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1490347924020793600,
               title: "721",
            },
            lecturers: [
               {
                  id: 1424940018116335400,
                  lastName: "Румянцева",
                  firstName: "Анжелла",
                  middleName: "Владимировна",
                  shortName: "Румянцева А. В.",
                  fio: "Румянцева Анжелла Владимировна",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747577411621221000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 0,
               title: "Технологическая практика 1",
            },
            groups: [
               {
                  id: 1705969217175418400,
                  title: "1ПИб-01-2оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378649915600,
               title: "219",
            },
            lecturers: [
               {
                  id: 1434372935049549600,
                  lastName: "Юдина",
                  firstName: "Ольга",
                  middleName: "Вадимовна",
                  shortName: "Юдина О. В.",
                  fio: "Юдина Ольга Вадимовна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747824553156801300,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 0,
               title: "Проектное обучение",
            },
            groups: [
               {
                  id: 1641734195482990000,
                  title: "2ЖУРб-00-1оп-19",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1492089330440606000,
               title: "302",
            },
            lecturers: [
               {
                  id: 1425477852516587300,
                  lastName: "Дворянова",
                  firstName: "Мария",
                  middleName: "Валерьевна",
                  shortName: "Дворянова М. В.",
                  fio: "Дворянова Мария Валерьевна",
               },
            ],
            abbrlessontype: null,
            lessontype: null,
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1747292909709685500,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696205978097161500,
               title: "Структуры и алгоритмы обработки данных (пг2)",
            },
            groups: [
               {
                  id: 1705969217174369800,
                  title: "1ПИб-01-1оп-21",
               },
            ],
            build: {
               id: 1484668639063839700,
               title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
            },
            auditory: {
               id: 1488366378724364500,
               title: "228",
            },
            lecturers: [
               {
                  id: 1424939460407072500,
                  lastName: "Пышницкий",
                  firstName: "Константин",
                  middleName: "Михайлович",
                  shortName: "Пышницкий К. М.",
                  fio: "Пышницкий Константин Михайлович",
               },
            ],
            abbrlessontype: "лб",
            lessontype: "Лаб.зан-я",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
         {
            id: 1746685311291618000,
            dateEvent: "23.11.2022",
            startTime: "13:30",
            endTime: "15:00",
            discipline: {
               id: 1696299790819661000,
               title: "Организационная психология",
            },
            groups: [
               {
                  id: 1705969217196390000,
                  title: "7УПб-01-1оп-21",
               },
            ],
            build: {
               id: 1471771374063195100,
               title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
            },
            auditory: {
               id: 1490437674499051800,
               title: "208",
            },
            lecturers: [
               {
                  id: 1425480368287389400,
                  lastName: "Шрейдер",
                  firstName: "Наталья",
                  middleName: "Вадимовна",
                  shortName: "Шрейдер Н. В.",
                  fio: "Шрейдер Наталья Вадимовна",
               },
            ],
            abbrlessontype: "л",
            lessontype: "Лекции",
            week: 13,
            weekday: 3,
            weekType: "неч.",
            onlineEvent: null,
            online: 0,
         },
      ]),
}

const mockErrResponse: Response = {
   text: () =>
      Promise.resolve(
         `{
            "code": 403,
            "status": "FORBIDDEN",
            "description": "Token is not valid"
          }`,
      ),
   headers: headers,
   ok: true,
   redirected: false,
   status: 200,
   statusText: "Ok",
   type: "default",
   url: "testURL",
   clone: () => {
      return mockErrResponse
   },
   body: null,
   bodyUsed: true,
   arrayBuffer: () =>
      new Promise<ArrayBuffer>((resolve) => {
         resolve(new ArrayBuffer(8))
      }),
   blob: () =>
      new Promise<Blob>((resolve) => {
         resolve(new Blob())
      }),
   formData: () =>
      new Promise<FormData>((resolve) => {
         let f: FormData = new FormData()
         resolve(f)
      }),
   json: () =>
      Promise.resolve({
         code: 403,
         status: "FORBIDDEN",
         description: "Token is not valid",
      }),
}

const mockUndResponse: Response = {
   text: () =>
      Promise.resolve(`<!DOCTYPE HTML>

    <html>
    
        <head>
    
            <meta charset="utf-8">
    
            <link href="/img/favicon.ico" rel="shortcut icon"/>
    
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
            <meta name="description" content="">
    
            <meta name="author" content="">
    
    
    
            <title>Авторизация</title>
    
    
    
            <link rel="stylesheet" type="text/css" href="/css/style.css"/>
    
            <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"/>
    
    
    
        </head>
    
    
    
        <body><noscript><meta HTTP-EQUIV="refresh" content="0;url='http://api.chsu.ru/login?PageSpeed=noscript'" /><style><!--table,div,span,font,p{display:none} --></style><div style="display:block">Please click <a href="http://api.chsu.ru/login?PageSpeed=noscript">here</a> if you are not redirected within a few seconds.</div></noscript>
    
    
    
            <div class="container-flex">
    
                <div class="auth-container">
    
                    <div class="header">
    
                        <h1>Пожалуйста авторизуйтесь</h1>
    
                    </div>
    
                    <div class="inner">
    
                        <div class="form">
    
                            
    
                            <form action="perform_login" method="POST">
    
                                <div class="form-group">
    
                                    <input type="text" class="form-control" name="username" placeholder="Login"/>
    
                                </div>
    
                                <div class="form-group">
    
                                    <input type="password" class="form-control" name="password" placeholder="Password"/>
    
                                </div>
    
                                <button class="btn btn-lg btn-primary btn-sm" type="submit">Войти</button>
    
                            </form>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </body>
    
    </html>`),
   headers: headers,
   ok: true,
   redirected: false,
   status: 200,
   statusText: "Ok",
   type: "default",
   url: "testURL",
   clone: () => {
      return mockErrResponse
   },
   body: null,
   bodyUsed: true,
   arrayBuffer: () =>
      new Promise<ArrayBuffer>((resolve) => {
         resolve(new ArrayBuffer(8))
      }),
   blob: () =>
      new Promise<Blob>((resolve) => {
         resolve(new Blob())
      }),
   formData: () =>
      new Promise<FormData>((resolve) => {
         let f: FormData = new FormData()
         resolve(f)
      }),
   json: () =>
      Promise.resolve(
         JSON.parse(`<!DOCTYPE HTML>

    <html>
    
        <head>
    
            <meta charset="utf-8">
    
            <link href="/img/favicon.ico" rel="shortcut icon"/>
    
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
            <meta name="description" content="">
    
            <meta name="author" content="">
    
    
    
            <title>Авторизация</title>
    
    
    
            <link rel="stylesheet" type="text/css" href="/css/style.css"/>
    
            <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"/>
    
    
    
        </head>
    
    
    
        <body><noscript><meta HTTP-EQUIV="refresh" content="0;url='http://api.chsu.ru/login?PageSpeed=noscript'" /><style><!--table,div,span,font,p{display:none} --></style><div style="display:block">Please click <a href="http://api.chsu.ru/login?PageSpeed=noscript">here</a> if you are not redirected within a few seconds.</div></noscript>
    
    
    
            <div class="container-flex">
    
                <div class="auth-container">
    
                    <div class="header">
    
                        <h1>Пожалуйста авторизуйтесь</h1>
    
                    </div>
    
                    <div class="inner">
    
                        <div class="form">
    
                            
    
                            <form action="perform_login" method="POST">
    
                                <div class="form-group">
    
                                    <input type="text" class="form-control" name="username" placeholder="Login"/>
    
                                </div>
    
                                <div class="form-group">
    
                                    <input type="password" class="form-control" name="password" placeholder="Password"/>
    
                                </div>
    
                                <button class="btn btn-lg btn-primary btn-sm" type="submit">Войти</button>
    
                            </form>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </body>
    
    </html>`),
      ),
}
const semafore: { [key: string]: { wait: Promise<void>; fetch: Promise<Response>; end: boolean; onEnd?: () => void } } =
   {}

function configureSemafore() {
   semafore.normalConn = {
      wait: new Promise((resolve) => {
         resolve()
      }),
      fetch: Promise.resolve(mockResponse),
      end: false,
   }
   semafore.ErrCon = {
      wait: new Promise((resolve) => {
         if (semafore.normalConn) {
            semafore.normalConn.onEnd = () => {
               resolve()
            }
         } else {
            resolve()
         }
      }),
      fetch: Promise.resolve(mockErrResponse),
      end: false,
   }
   semafore.UndCon = {
      wait: new Promise((resolve) => {
         if (semafore.ErrCon) {
            semafore.ErrCon.onEnd = () => {
               resolve()
            }
         } else {
            resolve()
         }
      }),
      fetch: Promise.resolve(mockUndResponse),
      end: false,
   }
   semafore.Filter = {
      wait: new Promise((resolve) => {
         if (semafore.UndCon) {
            semafore.UndCon.onEnd = () => {
               resolve()
            }
         } else {
            resolve()
         }
      }),
      fetch: Promise.resolve(mockResponse),
      end: false,
   }
   semafore.FilterM = {
      wait: new Promise((resolve) => {
         if (semafore.Filter) {
            semafore.Filter.onEnd = () => {
               resolve()
            }
         } else {
            resolve()
         }
      }),
      fetch: Promise.resolve(mockResponse),
      end: false,
   }
}

describe("Raspisanie", () => {
   configureSemafore()
   const ds = new Date()
   const de = new Date()
   de.setMonth(de.getMonth() + 1)
   RaspisanieSettings.URLS = URLS

   test("normal load", async () => {
      try {
         await semafore.normalConn.wait
         global.fetch = jest.fn(() => semafore.normalConn.fetch.then())
         await Raspisanie.Load(ds, de)
         semafore.normalConn.end = true
         if (semafore.normalConn.onEnd) semafore.normalConn.onEnd()
         expect(Raspisanie.TimeTable.length).toBe(336)
      } catch (er) {
         semafore.normalConn.end = true
         if (semafore.normalConn.onEnd) semafore.normalConn.onEnd()
         throw er
      }
   })

   test("error connection", async () => {
      await semafore.ErrCon.wait
      global.fetch = jest.fn(() => semafore.ErrCon.fetch)
      try {
         await Raspisanie.Load(ds, de)
         semafore.ErrCon.end = true
         if (semafore.ErrCon.onEnd) semafore.ErrCon.onEnd()
         throw new Error("test be are incorrect!")
      } catch (er) {
         const err = er as any
         semafore.ErrCon.end = true
         if (semafore.ErrCon.onEnd) semafore.ErrCon.onEnd()
         expect(err.message).toBe("Unauthorized (Token is not valid)")
         expect(err["cause"]).toStrictEqual({ code: 403, description: "Token is not valid", status: "FORBIDDEN" })
      }
   })

   test("error udefinded", async () => {
      await semafore.UndCon.wait
      global.fetch = jest.fn(() => semafore.UndCon.fetch)
      try {
         await Raspisanie.Load(ds, de)
         semafore.UndCon.end = true
         if (semafore.UndCon.onEnd) semafore.UndCon.onEnd()
         throw new Error("test be are incorrect!")
      } catch (er) {
         const err = er as any
         semafore.UndCon.end = true
         if (semafore.UndCon.onEnd) semafore.UndCon.onEnd()
         expect(err.message).toBe("Unauthorized or connection lost!")
      }
   })

   test("Filetr uno", async () => {
      try {
         await semafore.Filter.wait
         global.fetch = jest.fn(() => semafore.Filter.fetch.then())
         await Raspisanie.Load(ds, de)
         Raspisanie.FilterByAuditory(1490345254033822000)
         semafore.Filter.end = true
         if (semafore.Filter.onEnd) semafore.Filter.onEnd()
         expect(Raspisanie.TimeTable.length).toBeLessThan(336)
         expect(Raspisanie.TimeTable.length).toBe(2)
      } catch (er) {
         semafore.Filter.end = true
         if (semafore.Filter.onEnd) semafore.Filter.onEnd()
         throw er
      }
   })

   test("Filetr Many", async () => {
      try {
         await semafore.FilterM.wait
         global.fetch = jest.fn(() => semafore.FilterM.fetch.then())
         await Raspisanie.Load(ds, de)
         Raspisanie.FilterByAuditory([
            1490345254033822000, 1488379776432345300, 0, 1488366378592244000, 1490349048817783000, 1671133117620949200,
            1490435777622970600, 1490346292951388400, 1490345254003413200, 1490436480212930800, 1488372624649097500,
            1671012457577976000, 1490345254075765000, 1471774257598959900, 1490437243336135000, 1490435838350201000,
            1490350520895803600, 1490438777526555000,
         ])
         semafore.FilterM.end = true
         if (semafore.FilterM.onEnd) semafore.FilterM.onEnd()
         expect(Raspisanie.TimeTable.length).toBeLessThan(336)
         expect(Raspisanie.TimeTable.length).toBeGreaterThan(2)
         expect(Raspisanie.TimeTable.length).toBe(90)
      } catch (er) {
         semafore.FilterM.end = true
         if (semafore.FilterM.onEnd) semafore.FilterM.onEnd()
         throw er
      }
   })
})

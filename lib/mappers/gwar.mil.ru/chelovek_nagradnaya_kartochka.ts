import { Person } from "@prisma/client";

import { FileFormat } from "@/types";

export const config = {
  format: FileFormat.JSON,
  title: "Наградная карточка",
};

export const parse = (data: string): Person[] => {
  return [];
};

// {
//   "_index": "gwar_2023_08_16",
//   "_type": "chelovek_nagradnaya_kartochka",
//   "_id": "45009215",
//   "_score": 1,
//   "_source": {
//     "box_id": 32,
//     "event_place": null,
//     "birth_date": null,
//     "birth_place_gubernia": null,
//     "document_author": null,
//     "military_unit_id": null,
//     "__type": "chelovek_nagradnaya_kartochka",
//     "prikaz_date": "1915-11-14",
//     "rank": "санитар",
//     "documents_pages": {
//       "documents_id": [
//         45009215
//       ],
//       "pages_id": [
//         45018430
//       ]
//     },
//     "id": 45009215,
//     "birth_place_volost": null,
//     "deal_id": null,
//     "award_name": "Георгиевская медаль IV-й степени (За храбрость)",
//     "inventory_id": null,
//     "document_date": null,
//     "award_num": "420445",
//     "birth_place": null,
//     "archive": "Российский Государственный Военно-исторический архив",
//     "shkaf_id": 1,
//     "data_priziva": null,
//     "birth_place_id": null,
//     "inventory_num": null,
//     "updated": "2018-10-15T00:00:00Z",
//     "prikaz_num": "2372",
//     "birth_place_np_type": null,
//     "deal": null,
//     "person_type": "Списки награжденных",
//     "fund_id": 2,
//     "box": "3710-Х",
//     "doc_type": "Наградная карточка",
//     "inventory": null,
//     "shkaf_name": "без номера",
//     "document_name": null,
//     "operations": null,
//     "birth_place_uezd": null,
//     "award_name_short": "Георгиевская медаль IV-й степени",
//     "document_num": null,
//     "award_delivery_date": null,
//     "fund_num": null,
//     "operation_id": null,
//     "deal_num": null,
//     "first_name": "Василий",
//     "shkaf": "без номера",
//     "birth_place_location": null,
//     "archive_short": "РГВИА",
//     "prikaz_author": "Западный фронт",
//     "last_name": "Ермолаев",
//     "middle_name": null,
//     "event_date_from": null,
//     "award_id": 4,
//     "operation_name": null,
//     "event_date_to": null,
//     "fund": "Картотека бюро учета потерь в Первой мировой войне (офицеров и солдат)",
//     "military_unit_name": "Лазарет для тяжелораненых Е.И.В. В.К. Марии Павловны",
//     "archive_id": 1
//   }
// }
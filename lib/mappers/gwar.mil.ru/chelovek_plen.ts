import { Person } from "@prisma/client";

import { FileFormat } from "@/types";

export const config = {
  format: FileFormat.JSON,
  title: "Плен",
};

export const parse = (data: string): Person[] => {
  return [];
};

// {
//   "_index": "gwar_2023_08_16",
//   "_type": "chelovek_plen",
//   "_id": "32440114",
//   "_score": 1,
//   "_source": {
//     "box_id": 7015,
//     "camp_location": "Германия, Вел. Герц. Баден",
//     "event_place": null,
//     "birth_date": null,
//     "birth_place_gubernia": null,
//     "document_author": null,
//     "military_unit_id": 1528,
//     "__type": "chelovek_plen",
//     "prikaz_date": null,
//     "rank": null,
//     "documents_pages": {
//       "documents_id": [
//         33060801
//       ],
//       "pages_id": [
//         101157158,
//         101157159
//       ]
//     },
//     "id": 32440114,
//     "birth_place_volost": null,
//     "deal_id": null,
//     "award_name": null,
//     "inventory_id": null,
//     "document_date": null,
//     "award_num": null,
//     "birth_place": null,
//     "archive": "Российский Государственный Военно-исторический архив",
//     "shkaf_id": 3,
//     "data_priziva": null,
//     "birth_place_id": null,
//     "inventory_num": null,
//     "updated": "2018-11-02T00:00:00Z",
//     "prikaz_num": null,
//     "birth_place_np_type": null,
//     "deal": null,
//     "person_type": "Списки пленных",
//     "fund_id": null,
//     "box": "5409-М",
//     "doc_type": "Карточки военнопленных",
//     "inventory": null,
//     "shkaf_name": "без номера",
//     "document_name": null,
//     "operations": null,
//     "camp_name": "Раштат",
//     "birth_place_uezd": null,
//     "award_name_short": null,
//     "document_num": null,
//     "award_delivery_date": null,
//     "fund_num": null,
//     "camp_id": 254,
//     "operation_id": null,
//     "first_name": "Никита",
//     "shkaf": "без номера",
//     "birth_place_location": null,
//     "archive_short": "РГВИА",
//     "prikaz_author": null,
//     "last_name": "Осипчук",
//     "middle_name": null,
//     "event_date_from": null,
//     "award_id": null,
//     "operation_name": null,
//     "event_date_to": null,
//     "fund": "Картотека бюро учета потерь в Первой мировой войне (пленные)",
//     "military_unit_name": "20-й пехотный Галицкий полк",
//     "archive_id": 1
//   }
// }
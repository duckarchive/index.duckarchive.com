import { Person } from "@prisma/client";

import { FileFormat } from "@/types";

export const config = {
  format: FileFormat.JSON,
  title: "Захоронение",
};

export const parse = (data: string): Person[] => {
  return [];
};

// {
//   "_index": "gwar_2023_08_16",
//   "_type": "chelovek_zahoronenie",
//   "_id": "118457572",
//   "_score": 1,
//   "_source": {
//     "box_id": null,
//     "event_place": null,
//     "birth_date": "1880-01-01",
//     "birth_place_gubernia": null,
//     "document_author": null,
//     "military_unit_id": null,
//     "lazaret_id": null,
//     "__type": "chelovek_zahoronenie",
//     "rank": "пехотинец",
//     "documents_pages": {
//       "documents_id": [
//         118456391
//       ],
//       "pages_id": [
//         118462014
//       ]
//     },
//     "id": 118457572,
//     "birth_place_volost": null,
//     "deal_id": null,
//     "inventory_id": null,
//     "document_date": null,
//     "zahoronenie_volost": null,
//     "birth_place": null,
//     "archive": null,
//     "zahoronenie_uezd": null,
//     "shkaf_id": null,
//     "zahoronenie_mesto": "Чешская республика, Краловоградецкий край, Яромерж р-н, н.п. Йозефов, кладбище, участок С13-1275",
//     "data_priziva": null,
//     "birth_place_id": null,
//     "inventory_num": null,
//     "updated": "2024-11-18T00:00:00Z",
//     "zahoronenie_gubernia": null,
//     "vibitie_date_from": "1918-04-24",
//     "vibitie_mesto": null,
//     "birth_place_np_type": null,
//     "deal": null,
//     "person_type": "Паспорта захоронений",
//     "box": null,
//     "fund_id": null,
//     "doc_type": "Паспорта захоронений",
//     "inventory": null,
//     "shkaf_name": null,
//     "document_name": null,
//     "operations": null,
//     "birth_place_uezd": null,
//     "document_num": null,
//     "fund_num": null,
//     "first_name": "Михаил",
//     "shkaf": null,
//     "birth_place_location": null,
//     "archive_short": "РГВИА",
//     "last_name": "Ермолаев",
//     "middle_name": "Васильевич",
//     "zahoronenie_location": null,
//     "event_date_from": null,
//     "zahoronenie_np_type": null,
//     "event_date_to": null,
//     "vibitie_date_to": "1918-04-24",
//     "fund": null,
//     "military_unit_name": null,
//     "vibitie_prichina": null,
//     "archive_id": null,
//     "burial_id": 118456391,
//     "burial_name": "Чешская республика, Краловоградецкий край, Яромерж р-н, н.п. Йозефов"
//   }
// }
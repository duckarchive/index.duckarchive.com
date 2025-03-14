import { Person } from "@prisma/client";

import { FileFormat } from "@/types";

export const config = {
  format: FileFormat.JSON,
  title: "Донесение",
};

export const parse = (data: string): Person[] => {
  return [];
};

// {
//   "_index": "gwar_2023_08_16",
//   "_type": "chelovek_donesenie",
//   "_id": "15770576",
//   "_score": 1,
//   "_source": {
//     "box_id": null,
//     "event_place": "Ковенские передовые позиции",
//     "birth_date": null,
//     "birth_place_gubernia": null,
//     "document_author": "490-я пешая Владимирская дружина",
//     "military_unit_id": null,
//     "lazaret_id": null,
//     "__type": "chelovek_donesenie",
//     "rank": "прапорщик",
//     "documents_pages": {
//       "documents_id": [
//         10045102
//       ],
//       "pages_id": [
//         10339156
//       ]
//     },
//     "id": 15770576,
//     "birth_place_volost": null,
//     "deal_id": 10001836,
//     "inventory_id": 1,
//     "document_date": "1915-10-19",
//     "zahoronenie_volost": null,
//     "birth_place": null,
//     "archive": "Российский Государственный Военно-исторический архив",
//     "zahoronenie_uezd": null,
//     "shkaf_id": null,
//     "zahoronenie_mesto": null,
//     "data_priziva": null,
//     "birth_place_id": null,
//     "inventory_num": "1",
//     "updated": "2018-11-26T00:00:00Z",
//     "zahoronenie_gubernia": null,
//     "vibitie_date_from": null,
//     "vibitie_mesto": null,
//     "birth_place_np_type": null,
//     "deal": "Именные списки потерь генералов, штаб и обер-офицеров 490 пешей Владимирской дружины",
//     "person_type": "Списки потерь",
//     "fund_id": 1,
//     "doc_type": "Именные списки потерь",
//     "inventory": "Именные списки потерь солдат и офицеров 1 мировой войны 1914-1918 гг. (по полкам и бригадам)",
//     "shkaf_name": null,
//     "document_name": "Именной список потерь генералов, штаб и обер-офицеров 490 пешей Владимирской дружины",
//     "operations": null,
//     "birth_place_uezd": null,
//     "document_num": "268377",
//     "fund_num": "16196",
//     "deal_num": "1584",
//     "first_name": "Ксенофонт",
//     "shkaf": null,
//     "birth_place_location": null,
//     "archive_short": "РГВИА",
//     "last_name": "Воскресенский",
//     "middle_name": "Евгеньевич",
//     "zahoronenie_location": null,
//     "event_date_from": "1915-08-01",
//     "zahoronenie_np_type": null,
//     "event_date_to": "1915-08-01",
//     "vibitie_date_to": null,
//     "fund": "Особое делопроизводство по сбору и регистрации сведений о выбывших за смертью или за ранами, а также пропавших без вести воинских чинах, действующих против неприятельских армий (1914 - 1918)",
//     "military_unit_name": "490-я пешая Владимирская дружина",
//     "vibitie_prichina": "пропал без вести",
//     "archive_id": 1
//   }
// }
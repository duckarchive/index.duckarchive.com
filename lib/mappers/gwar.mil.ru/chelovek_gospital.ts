import { FileFormat, Mapper } from "@/types";

export const config = {
  format: FileFormat.JSON,
  title: "Госпиталь",
};

// INPUT
// {
//   "_index": "gwar_2023_08_16",
//   "_type": "chelovek_gospital",
//   "_id": "23826076",
//   "_score": 1,
//   "_source": {
//     "box_id": 6445,
//     "event_place": null,
//     "birth_date": null,
//     "birth_place_gubernia": null,
//     "document_author": null,
//     "military_unit_id": 804,
//     "lazaret_id": null,
//     "__type": "chelovek_gospital",
//     "rank": "рядовой",
//     "documents_pages": {
//       "documents_id": [
//         23857238
//       ],
//       "pages_id": [
//         24349033
//       ]
//     },
//     "id": 23826076,
//     "birth_place_volost": null,
//     "deal_id": null,
//     "inventory_id": null,
//     "document_date": null,
//     "zahoronenie_volost": null,
//     "birth_place": null,
//     "archive": "Российский Государственный Военно-исторический архив",
//     "zahoronenie_uezd": null,
//     "shkaf_id": 1,
//     "zahoronenie_mesto": null,
//     "data_priziva": null,
//     "birth_place_id": null,
//     "inventory_num": null,
//     "updated": "2018-11-02T00:00:00Z",
//     "zahoronenie_gubernia": null,
//     "vibitie_date_from": "1917-02-13",
//     "vibitie_mesto": null,
//     "birth_place_np_type": null,
//     "deal": null,
//     "person_type": "Списки потерь",
//     "box": "1713-К",
//     "fund_id": 2,
//     "doc_type": "Карточка на прибывших (нижние чины)",
//     "inventory": null,
//     "shkaf_name": "без номера",
//     "document_name": null,
//     "operations": null,
//     "birth_place_uezd": null,
//     "document_num": null,
//     "fund_num": null,
//     "first_name": "Гаврил",
//     "shkaf": "без номера",
//     "birth_place_location": null,
//     "archive_short": "РГВИА",
//     "last_name": "Купряцкий",
//     "middle_name": "Ефимович",
//     "zahoronenie_location": null,
//     "event_date_from": "1917-04-04",
//     "zahoronenie_np_type": null,
//     "event_date_to": "1917-04-04",
//     "vibitie_date_to": "1917-02-13",
//     "fund": "Картотека бюро учета потерь в Первой мировой войне (офицеров и солдат)",
//     "military_unit_name": "405-й пехотный Льговский полк",
//     "vibitie_prichina": "ранен/контужен",
//     "archive_id": 1
//   }
// }

export const parse: Mapper["parse"] = (content) =>
  content.map(({ _source }) => ({
    first_name: _source.first_name,
    last_name: _source.last_name,
    middle_name: _source.middle_name,
    birth_date: _source.birth_date || "",
    birth_place: [
      _source.birth_place_gubernia,
      _source.birth_place_uezd,
      _source.birth_place_volost,
      _source.birth_place_np_type,
      _source.birth_place,
    ]
      .filter(Boolean)
      .join(", "),
    record_date: _source.event_date_from || "",
    record_date_normalized: _source.event_date_from
      ? new Date(_source.event_date_from)
      : null,
    record_place: _source.vibitie_mesto,
    record_type: _source.doc_type,
    archive: _source.archive_short,
    fund: _source.fund_num,
    description: _source.inventory_num || _source.box,
    case: _source.document_num,
    page: _source.documents_pages.pages_id.join(", "),
    note: null,
    author_id: "",
    resource_id: "gwar.mil.ru",
  }));

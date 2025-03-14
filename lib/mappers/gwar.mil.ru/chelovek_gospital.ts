import { s } from "@/lib/parse";
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
//     "documents_pages": {
//       "documents_id": [
//         23857238
//       ],
//       "pages_id": [
//         24349033
//       ]
//     },
//     "__type": "chelovek_gospital",
//     "archive_id": 1
//     "archive_short": "РГВИА",
//     "archive": "Российский Государственный Военно-исторический архив",
//     "birth_date": null,
//     "birth_place_gubernia": null,
//     "birth_place_id": null,
//     "birth_place_location": null,
//     "birth_place_np_type": null,
//     "birth_place_uezd": null,
//     "birth_place_volost": null,
//     "birth_place": null,
//     "box_id": 6445,
//     "box": "1713-К",
//     "data_priziva": null,
//     "deal_id": null,
//     "deal": null,
//     "doc_type": "Карточка на прибывших (нижние чины)",
//     "document_author": null,
//     "document_date": null,
//     "document_name": null,
//     "document_num": null,
//     "event_date_from": "1917-04-04",
//     "event_date_to": "1917-04-04",
//     "event_place": null,
//     "first_name": "Гаврил",
//     "fund_id": 2,
//     "fund_num": null,
//     "fund": "Картотека бюро учета потерь в Первой мировой войне (офицеров и солдат)",
//     "id": 23826076,
//     "inventory_id": null,
//     "inventory_num": null,
//     "inventory": null,
//     "last_name": "Купряцкий",
//     "lazaret_id": null,
//     "middle_name": "Ефимович",
//     "military_unit_id": 804,
//     "military_unit_name": "405-й пехотный Льговский полк",
//     "operations": null,
//     "person_type": "Списки потерь",
//     "rank": "рядовой",
//     "shkaf_id": 1,
//     "shkaf_name": "без номера",
//     "shkaf": "без номера",
//     "updated": "2018-11-02T00:00:00Z",
//     "vibitie_date_from": "1917-02-13",
//     "vibitie_date_to": "1917-02-13",
//     "vibitie_mesto": null,
//     "vibitie_prichina": "ранен/контужен",
//     "zahoronenie_gubernia": null,
//     "zahoronenie_location": null,
//     "zahoronenie_mesto": null,
//     "zahoronenie_np_type": null,
//     "zahoronenie_uezd": null,
//     "zahoronenie_volost": null,
//   }
// }
interface ContentItem {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: {
    documents_pages: {
      documents_id: number[];
      pages_id: number[];
    };
    __type: string;
    archive_id: number;
    archive_short: string;
    archive: string;
    birth_date: string | null;
    birth_place_gubernia: string | null;
    birth_place_id: string | null;
    birth_place_location: string | null;
    birth_place_np_type: string | null;
    birth_place_uezd: string | null;
    birth_place_volost: string | null;
    birth_place: string | null;
    box_id: number;
    box: string;
    data_priziva: string | null;
    deal_id: string | null;
    deal: string | null;
    doc_type: string;
    document_author: string | null;
    document_date: string | null;
    document_name: string | null;
    document_num: string | null;
    event_date_from: string;
    event_date_to: string;
    event_place: string | null;
    first_name: string;
    fund_id: number;
    fund_num: string | null;
    fund: string;
    id: number;
    inventory_id: string | null;
    inventory_num: string | null;
    inventory: string | null;
    last_name: string;
    lazaret_id: string | null;
    middle_name: string;
    military_unit_id: number;
    military_unit_name: string;
    operations: string | null;
    person_type: string;
    rank: string;
    shkaf_id: number;
    shkaf_name: string;
    shkaf: string;
    updated: string;
    vibitie_date_from: string;
    vibitie_date_to: string;
    vibitie_mesto: string | null;
    vibitie_prichina: string;
    zahoronenie_gubernia: string | null;
    zahoronenie_location: string | null;
    zahoronenie_mesto: string | null;
    zahoronenie_np_type: string | null;
    zahoronenie_uezd: string | null;
    zahoronenie_volost: string | null;
  };
}

export const parse: Mapper["parse"] = (content) =>
  content.map((item) => {
    const {
      _source: {
        archive_short,
        birth_date,
        birth_place_gubernia,
        birth_place_np_type,
        birth_place_uezd,
        birth_place_volost,
        birth_place,
        box,
        doc_type,
        document_num,
        documents_pages,
        event_date_from,
        first_name,
        fund_num,
        inventory_num,
        last_name,
        middle_name,
        vibitie_mesto,
        ...rest
      },
    } = item as ContentItem;

    const notes = Object.fromEntries(
      Object.entries(rest).filter(
        ([key]) =>
          !key.endsWith("_id") &&
          !key.startsWith("__") &&
          key !== "id" &&
          key !== "updated"
      )
    );

    return {
      first_name,
      last_name,
      middle_name,
      birth_date: s(birth_date),
      birth_place: s([
        birth_place_gubernia,
        birth_place_uezd,
        birth_place_volost,
        birth_place_np_type,
        birth_place,
      ]),
      record_date: s(event_date_from),
      record_date_normalized: event_date_from
        ? new Date(event_date_from)
        : null,
      record_place: vibitie_mesto,
      record_type: doc_type,
      archive: archive_short,
      fund: s(fund_num),
      description: s(inventory_num || box),
      case: s(document_num),
      page: s(documents_pages.pages_id),
      note: s(notes),
      author_id: "",
      resource_id: "gwar.mil.ru",
    };
  });

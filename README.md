# index.duckarchive.com

1. [List of Family Search records related to Ukraine](https://www.familysearch.org/search/collection/list?ec=region%3AUkraine%2CplaceId%3A1927132%2Cregion%3AContinental+Europe&fcs=placeId%3A1927132&count=100):
```
const token = document.cookie.split("fssessionid=")[1].split(";")[0];
fetch("https://www.familysearch.org/search/webservice/collectionListData", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "authorization": `Bearer ${token}`
  },
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
```
2. Get records by collectionId:
```
const token = document.cookie.split("fssessionid=")[1].split(";")[0];
const getIndexByCollectionId = async (collectionId, offset = 0) => {
    const url = new URL("https://www.familysearch.org/service/search/hr/v2/personas");
    url.searchParams.append("count", "100");
    url.searchParams.append("f.collectionId", collectionId);
    url.searchParams.append("offset", offset);
    url.searchParams.append("q.anyDate.from", 1786); // get fromDate from collection.startYear
    url.searchParams.append("q.anyDate.to", 1937); // get toDate from collection.endYear
    
    const res = await fetch(url, {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "authorization": `Bearer ${token}`
      },
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "include"
    });
    
    const data = await res.json();
    console.log("progress:", offset, data.results);

    if (data.links?.next) {
        const entries = await getIndexByCollectionId(collectionId, offset + 100);
        return [...data.entries, ...entries];
    } else {
        return data.entries;
    }
};

// collection.collectionId
getIndexByCollectionId("4426190").then(items => console.log(items));
```

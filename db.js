const dbManager = (tier) => {
  const dataBase = {};
  let id = 0;

  const createEntry = () => {
    dataBase[id] = {};
    return id++;
  };

  const newEntry = () => {
    const newId = createEntry();
    return { addField: edit(newId).field };
  };

  const edit = (id) => ({ field: addField(id) });
  const addField = (id) => (field, value) => (dataBase[id][field] = value);
  const getAll = () => dataBase;
  const getById = (id) => dataBase[id];
  const remove = (id) => delete dataBase[id];

  const getByField = (field, value) => {
    const results = Object.keys(dataBase)
      .filter((id) => dataBase[id][field] === value)
      .map((id) => ({
        id,
        entry: dataBase[id],
        addField: editEntry(id).addField,
        remove: remove.bind(null, id),
      }));

    let i = 0;

    const next = () => {
      if (++i < results.length) return { current: results[i], next };
      return { current: results[i] };
    };

    if (results.length > 1) return { current: results[i], next, all: results };
    return { current: results[i] };
  };

  const basic = { newEntry, getAll, remove };
  const some = { ...basic, edit, getById };
  const all = { ...some, getByField };

  const access = {
    bronze: {
      features: basic,
    },
    silver: {
      features: some,
    },
    gold: {
      features: all,
    },
  };

  const get = () => {
    if (tier === "bronze") return "bronze";
    if (tier === "silver") return "silver";
    if (tier === "gold") return "gold";
  };

  const membership = access[get()];

  return membership.features;
};


export const createStructure = (items) => {
  const cityEntities = new Map();
  const parentsId = {};

  return items.reduce((accumulator, item) => {
    let currentId = 0;

    item.groups.forEach((cityEntity, index) => {
      if(index > 0) {
        cityEntities.set(currentId, Object.assign({}, {
            id: currentId,
            type: cityEntity.type,
            name: cityEntity.name,
            childrenId: []
          })
        );
        cityEntities.get(currentId - 1).childrenId = [...cityEntities.get(currentId - 1).childrenId, currentId];
      } else {
        cityEntities.set(currentId, Object.assign({}, {
          id: currentId,
          type: cityEntity.type,
          name: cityEntity.name,
          childrenId: []
        }));
      }

      currentId++;
      return accumulator[cityEntity.name] = 1;

      // return accumulator[cityEntity.name] = newPoint[cityEntity[nextPointIndex].name];

    });
    console.log(cityEntities);
    return accumulator;
  }, {});
};

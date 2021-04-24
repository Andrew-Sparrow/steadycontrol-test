export const createStructure = (items) => {
  const cityEntities = new Map();

  return items.reduce((accumulator, item) => {
    let currentId = 0;

    item.groups.forEach((cityEntity, index) => {
      if(index > 0) {
        const currentItem = Object.assign({}, {
          id: currentId,
          type: cityEntity.type,
          name: cityEntity.name,
          children: []
        });
        if(index === item.groups.length - 1) {
          // if last item
          currentItem.children.push(item.name);
        }
        cityEntities.set(currentId, currentItem);
        cityEntities.get(currentId - 1).children = [...cityEntities.get(currentId - 1).children, currentItem];
      } else {
        // if(cityEntities.) {
        // }
        cityEntities.set(currentId, Object.assign({}, {
          id: currentId,
          type: cityEntity.type,
          name: cityEntity.name,
          children: []
        }));
        accumulator.push(cityEntities.get(currentId));
      }

      currentId++;
    });
    console.log(cityEntities);
    return accumulator;
  }, []);
};

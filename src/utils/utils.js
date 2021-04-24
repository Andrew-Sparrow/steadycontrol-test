export const createStructure = (items) => {
  const cityEntities = {};
  let currentParent = null;

  return items.reduce((accumulator, item) => {
    let currentId = 0;

    item.groups.forEach((cityEntity, index) => {
      if(index === 0) {
        if(Object.keys(cityEntities).includes(cityEntity.name)) {
          return;
        } else {
          cityEntities[cityEntity.name] = Object.assign({}, {
            id: currentId,
            type: cityEntity.type,
            name: cityEntity.name,
            children: []
          });
          accumulator.push(cityEntities[cityEntity.name]);
          currentId++;
        }
        currentParent = cityEntities[cityEntity.name];
      } else {
        if(currentParent.children.some((element) => element.name === cityEntity.name)) {
          return;
        } else {
          const currentElement = Object.assign({}, {
            id: currentId,
            type: cityEntity.type,
            name: cityEntity.name,
            children: []
          });
          currentParent.children.push();
          currentParent = currentElement;
        }
      }
    });
    console.log(cityEntities);
    return accumulator;
  }, []);
};

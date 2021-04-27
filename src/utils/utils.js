const createCityElement = (id, cityEntity) => {
  return Object.assign({}, {
    id: id,
    type: cityEntity.type,
    name: cityEntity.name,
    children: [],
  });
};

export const createStructure = (items) => {
  let currentParent = null;
  let currentId = 0;

  return items.reduce((accumulator, item) => {

    item.groups.forEach((cityEntity, index, list) => {
      if(index === 0) {
        let currentGrandParent = accumulator.find((element) => element.name === cityEntity.name);
        if(currentGrandParent && currentGrandParent.name === cityEntity.name) {
          currentParent = currentGrandParent;
          return;
        } else {
          let grandParent = createCityElement(currentId, cityEntity);
          accumulator.push(grandParent);
          ++currentId;
          currentParent = grandParent;
        }
      } else {
        let currentChild = currentParent.children.find((element) => element.name === cityEntity.name);
        if(currentChild && currentChild.name === cityEntity.name) {
          currentParent = currentChild;
          return;
        } else {
          const currentElement = createCityElement(currentId, cityEntity);

          currentParent.children.push(currentElement);
          ++currentId;
          currentParent = currentElement;
          if(index === list.length - 1) {
            currentParent.children.push(item.name);
          }
        }
      }
    });
    return accumulator;
  }, []);
};

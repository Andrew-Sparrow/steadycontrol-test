const createCityElement = (id, cityEntity) => {
  return Object.assign({}, {
    id: id.toString().concat('-cityItem'),
    type: cityEntity.type,
    name: cityEntity.name,
    children: [],
  });
};

const createCitizen = (citizen) => {
  return Object.assign({}, {
    id: (citizen.id).toString().concat('-citizen'),
    type: 'citizen',
    name: citizen.name,
  });
};

export const createStructure = (items) => {
  let currentParent = null;
  let currentId = 0;

  const idList = [];
  let structure;

  structure = items.reduce((accumulator, item) => {

    item.groups.forEach((cityEntity, index, list) => {
      if(index === 0) {
        let currentGrandParent = accumulator.find((element) => element.name === cityEntity.name);
        if(currentGrandParent && currentGrandParent.name === cityEntity.name) {
          currentParent = currentGrandParent;
          return;
        } else {
          let grandParent = createCityElement(currentId, cityEntity);
          accumulator.push(grandParent);
          idList.push(grandParent.id);
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
          idList.push(currentElement.id);

          ++currentId;
          currentParent = currentElement;
          if(index === list.length - 1) {
            const newCitizen = createCitizen(item);
            currentParent.children.push(newCitizen);
          }
        }
      }
    });
    return accumulator;
  }, []);

  console.log(structure);

  return {
    structure,
    idList
  };
};

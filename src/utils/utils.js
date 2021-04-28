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
  let currentGrandParent;
  let currentChild;

  const idList = [];
  let structure;

  structure = items.reduce((accumulator, item) => {

    item.groups.forEach((cityEntity, index, list) => {
      if(index === 0) {
        currentGrandParent = accumulator.find((element) => element.name === cityEntity.name);
        if(currentGrandParent) {
          currentParent = currentGrandParent;
        } else {
          let grandParent = createCityElement(currentId, cityEntity);
          accumulator.push(grandParent);
          idList.push(grandParent.id);
          ++currentId;
          currentParent = grandParent;
          currentGrandParent = grandParent;
        }
      } else {
        currentChild = currentParent.children.find((element) => element.name === cityEntity.name);

        if(currentChild) {
          currentParent = currentChild;
        } else {
          const currentElement = createCityElement(currentId, cityEntity);
          currentParent = currentElement;

          currentElement.children.push(currentElement);
          idList.push(currentElement.id);

          ++currentId;
          // if(index === list.length - 1) {
          //   const newCitizen = createCitizen(item);
          //   currentElement.children.push(newCitizen);
          // }
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

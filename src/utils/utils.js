import nanoid from "nanoid";

const createCityElement = (id, cityEntity) => {
  return Object.assign({}, {
    id: nanoid(),
    keyID: nanoid(),
    type: cityEntity.type,
    name: cityEntity.name,
    children: [],
  });
};

const addNewCitizen = (citizen, indexItem, currentParentItem, items) => {
  const newCitizen = Object.assign({}, {
    keyID: nanoid(),
    nodeID: nanoid(),
    tooltipID: nanoid(),
    type: 'citizen',
    name: citizen.name,
  });

  if(indexItem === items.length - 1) {
    currentParentItem.children.push(newCitizen);
  }
};

export const getStructure = (items) => {
  let currentParent = null;
  let currentId = 0;

  const idList = [];
  let structure;

  structure = items.reduce((accumulator, item) => {

    item.groups.forEach((cityEntity, index, list) => {
      if(index === 0) {
        let currentGrandParent = accumulator.find((element) => element.name === cityEntity.name);
        if(currentGrandParent) {
          currentParent = currentGrandParent;
        } else {
          let grandParent = createCityElement(currentId, cityEntity);
          accumulator.push(grandParent);
          idList.push(grandParent.id);
          ++currentId;
          currentParent = grandParent;
        }
      } else {
        let currentChild = currentParent.children.find((element) => element.name === cityEntity.name);
        if(currentChild) {
          currentParent = currentChild;

          addNewCitizen(item, index, currentParent, list);
        } else {
          const currentElement = createCityElement(currentId, cityEntity);

          currentParent.children.push(currentElement);
          idList.push(currentElement.id);

          ++currentId;
          currentParent = currentElement;

          addNewCitizen(item, index, currentParent, list);
        }
      }
    });
    return accumulator;
  }, []);

  return {
    structure,
    idList
  };
};

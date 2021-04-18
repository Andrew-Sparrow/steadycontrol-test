// export const createStructure = (items) => {
//   return items.reduce((accumulator, item) => {
//     item.groups.forEach((point, index) => {
//       let nextPointIndex = index + 1;
//
//       if(index < item.groups.length - 1) {
//         let newPoint = {};
//         return accumulator[point.name] = newPoint;
//         // return accumulator[point.name] = newPoint[point[nextPointIndex].name];
//       } else {
//         return accumulator;
//       }
//     });
//     return accumulator;
//   }, {});
// };


export const createStructure = (items) => {
  const cityEntities = new Map();

  return items.reduce((accumulator, item) => {
    item.groups.forEach((cityEntity, index) => {
      let nextPointIndex = index + 1;

      if (index < item.groups.length - 1) {
          // cityEntities.set(cityEntity.name, Object.assign({}, {[item.groups[nextPointIndex].name]: {}}));
        // cityEntities.set(cityEntity.name, Object.assign({}, {[item.groups[nextPointIndex].name]: {}}));
        // console.log(cityEntities);
        console.log(item.groups[nextPointIndex].name);
        return accumulator[cityEntity.name] = Object.assign({}, {[item.groups[nextPointIndex].name]: {}});
      } else {
        // cityEntities.set(cityEntity.name, Object.assign({}, {[item.groups[index].name]: []}));
        return accumulator[cityEntity.name] = Object.assign({}, {[item.groups[index].name]: []});
      }
      // return accumulator[cityEntity.name] = newPoint[cityEntity[nextPointIndex].name];

    });
    return accumulator;
  }, {});
};

// const getPointStructure = (items) => {
//   return items.reduce((accumulator, item, index) => {
//     let newPoint = {};
//     newPoint[items[index + 1].name] = {};
//     accumulator[item.name] = newPoint;
//     return accumulator[item.name] = ;
//   }, {});
// };

const drivers = {

  1: {
    id: 1,
    name: "Fierce Bob",
    schedule: {
      //week
      1: {
        //day
        2: {
          //hour
          2: {
            hours: 2,
            task: "Pickup: Eaton Centre"
          },
          4:{
            hours: 1,
            task: "Dropoff: Ripley's Aquarium"
          }
        },
        3: {
          12: {
            hours: 2,
            task: "Pickup: Toronto Zoo"
          }
        },
        4: {
          14: {
            hours: 4,
            task: "Dropoff: Loblaws HQ"
          }
        }
      }
    }
  },

  2: {
    id: 2,
    name: "Tough Nancy",
    schedule: {
      1: {
        1: {
          12: {
            hours: 1,
            task: "Pickup: Toronto Zoo"
          }
        }
      }
    }
  },

  3: {
    id: 3,
    name: "Silly Jones",
    schedule: {
      1: {
        5: {
          13: {
            hours: 3,
            task: "Other: Family Event"
          }
        }
      }
    }
  }

}

export default drivers;

// const drivers = {

//   1: {
//     id: 1,
//     name: "Fierce Bob",
//     schedule: {
//       //week
//       1: {
//         //day
//         2: {
//           //hour
//           2: {
//             hours: 2,
//             task: "Pickup: Eaton Centre"
//           },
//           4:{
//             hours: 1,
//             task: "Dropoff: Ripley's Aquarium"
//           }
//         },
//         3: {
//           12: {
//             hours: 2,
//             task: "Pickup: Toronto Zoo"
//           }
//         },
//         4: {
//           14: {
//             hours: 4,
//             task: "Dropoff: Loblaws HQ"
//           }
//         }
//       }
//     }
//   },

//   2: {
//     id: 2,
//     name: "Tough Nancy",
//     schedule: {
//       1: {
//         1: {
//           12: {
//             hours: 1,
//             task: "Pickup: Toronto Zoo"
//           }
//         }
//       }
//     }
//   },

//   3: {
//     id: 3,
//     name: "Silly Jones",
//     schedule: {
//       1: {
//         5: {
//           13: {
//             hours: 3,
//             task: "Other: Family Event"
//           }
//         }
//       }
//     }
//   }

// }

// export default drivers;
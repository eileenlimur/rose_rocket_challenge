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
      },
      2: {
        4: {
          3: {
            hours: 2,
            task: "Pickup: Loblaws HQ"
          },
          6:{
            hours: 1,
            task: "Dropoff: Lee Estate"
          }
        },
        5: {
          14: {
            hours: 4,
            task: "Other: Personal Errands"
          }
        },
        4: {
          20: {
            hours: 4,
            task: "Dropoff: Toronto Zoo"
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
          11: {
            hours: 1,
            task: "Pickup: Toronto Zoo"
          }
        }
      },
      2: {
        3: {
          13: {
            hours: 3,
            task: "Dropoff: Ripley's Aquarium"
          }
        },
        4: {
          8: {
            hours: 6,
            task: "Pickup: Lee Estate"
          }
        }
      },
      3: {
        4: {
          6: {
            hours: 4,
            task: "Other: Doctor's Appointment"
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
      },
      2: {
        3: {
          9: {
            hours: 4,
            task: "Pickup: Lee Estate"
          }
        },
        4: {
          12: {
            hours: 3,
            task: "Dropoff: Lee Estate"
          },
          18: {
            hours: 3,
            task: "Other: Doctor's Appointment"
          }
        }
      }
    }
  }

}

export default drivers;
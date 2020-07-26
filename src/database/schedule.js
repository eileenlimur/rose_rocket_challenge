const drivers = {

  1: {
    id: 1,
    name: "Fierce Bob",
    schedule: {
      1: {
        Tuesday: {
          2: {
            hours: 2,
            task: "Pickup: Eaton Centre"
          },
          4:{
            hours: 1,
            task: "Dropoff: Ripley's Aquarium"
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
        Monday: {
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
        Friday: {
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
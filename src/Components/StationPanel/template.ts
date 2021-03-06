export type TLine = {
  id: string,
  name: string,
  station1: string,
  station2: string,
  color: string,
  status: "EDIT" | null,
}

export const LINE_TEMPLATE: TLine[] = [
  {
    id: "1",
    name: "A",
    station1: "Pza. de Mayo",
    station2: "San Pedrito",
    color: "#4e9eff",
    status: null,
  },
  {
    id: "2",
    name: "B",
    station1: "L.N. Alem",
    station2: "J.M. Rosas",
    color: "#e53d00",
    status: null,
  },
  {
    id: "3",
    name: "C",
    station1: "Constitucion",
    station2: "Retiro",
    color: "#146faf",
    status: null,
  },
  {
    id: "4",
    name: "D",
    station1: "Catedral",
    station2: "Cong. de Tucuman",
    color: "#13a047",
    status: null,
  },
  {
    id: "5",
    name: "E",
    station1: "Retiro",
    station2: "Pza. de los Virreyes",
    color: "#54428e",
    status: null,
  },
  {
    id: "6",
    name: "H",
    station1: "Hospitales",
    station2: "Fac. de Derecho",
    color: "#f3de2c",
    status: null,
  },
  {
    id: "7",
    name: "PM",
    station1: "Pza. de los Virreyes",
    station2: "Gral. Savio",
    color: "#ffbc42",
    status: null,
  }
]
import Table from "../../components/Table";
import { Layout } from "../../layout";

const TOURIST_PRICES = [
  {
    id: 1,
    activity: "Try dive (including speed boat, instructor, full equipment)",
    price: 75,
  },
  {
    id: 2,
    activity: "Snorkeling (including speed boat, instructor, full equipment)",
    price: 60,
  },
  { id: 3, activity: "Passenger", price: 17 },
];

const CERTIFIED_DIVER_PRICES = [
  {
    id: 1,
    activity: "1 boat dive (including speed boat, tanks, weights, guide)",
    price: 65,
  },
  {
    id: 2,
    activity:
      "1 day/2 boat dives (including speed boat, tanks, weights, guide)",
    price: 90,
  },
  {
    id: 3,
    activity: "Night dive (including speed boat, tanks, weights, guide)",
    price: 50,
  },
  {
    id: 4,
    activity: "Wreck diving to Mopang",
    price: 35,
    additionalCost: true,
  },
  {
    id: 5,
    activity: "Wreck diving to Rodina",
    price: 35,
    additionalCost: true,
  },
  { id: 6, activity: "1 day full equipment rental", price: 50 },
];

const PADI_COURSES = [
  { id: 1, course: "PADI Bubblemaker for children 8-12 years", price: "150+" },
  {
    id: 2,
    course: "PADI Sealteam for children in a swimming pool",
    price: 250,
  },
  {
    id: 3,
    course: "PADI Scuba Diver (2/3 days)",
    price: 280,
    additionalFee: 60,
  },
];

const PricesPage = () => (
  <Layout>
    <div className="container mx-auto space-y-14 my-10 px-4 lg:px-8">
      <Table
        title="Prices for Tourists"
        data={TOURIST_PRICES}
        columns={[
          { header: "Activity", key: "activity" },
          {
            header: "Price",
            key: "price",
            render: (item) => `${item.price} EUR`,
          },
        ]}
      />
      <Table
        title="Prices for Certified Divers"
        data={CERTIFIED_DIVER_PRICES}
        columns={[
          { header: "Activity", key: "activity" },
          {
            header: "Price",
            key: "price",
            render: (item) =>
              item.additionalCost ? `+${item.price} EUR` : `${item.price} EUR`,
          },
        ]}
      />
      <Table
        title="PADI Courses"
        data={PADI_COURSES}
        columns={[
          { header: "Course", key: "course" },
          {
            header: "Price",
            key: "price",
            render: (item) =>
              typeof item.price === "number"
                ? `${item.price}${item.additionalFee ? ` + ${item.additionalFee}*` : ""} EUR`
                : item.price,
          },
        ]}
      />
    </div>
  </Layout>
);

export default PricesPage;

import Card from "../module/Card";

function HomePage({ customers }) {
  return (
    <div>
      {customers.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </div>
  );
}

export default HomePage;

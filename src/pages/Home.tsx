
import Button from "../components/ui/Button";
import Card from "../components/common/Card";
import Table from "../components/common/Table";

const products = [
  { Name: "Laptop", Price: 25000, Category: "Electronics" },
  { Name: "Headphones", Price: 1500, Category: "Accessories" },
  { Name: "Keyboard", Price: 900, Category: "Accessories" },
  { Name: "Monitor", Price: 6000, Category: "Electronics" },
];

function Home() {
  return (
    <main className="container">
      <header className="hero">
        <span className="eyebrow">REACT ASSIGNMENT 02</span>
        <h1>Reusable Components</h1>
        <p>
          Build once, reuse everywhere. Explore buttons, cards,
          and tables powered by React props.
        </p>

        <div className="button-group">
          <Button
            text="Primary Button"
            onClick={() => alert("Primary button clicked!")}
            variant="primary"
          />

          <Button
            text="Danger Button"
            onClick={() => alert("Danger button clicked!")}
            variant="danger"
          />

          <Button
            text="Disabled Button"
            onClick={() => alert("This will not run")}
            variant="secondary"
            disabled
          />
        </div>
      </header>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">01 / COMPONENTS</span>
          <h2>Reusable Cards</h2>
          <p>Same component, different content and props.</p>
        </div>

        <div className="card-grid">
          <Card
            title="Web Development"
            description="Build responsive websites using modern frontend technologies."
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          />

          <Card
            title="UI Design"
            description="Create clean and user-friendly digital experiences."
            image="https://images.unsplash.com/photo-1559028012-481c04fa702d"
          >
            <Button
              text="Explore Design"
              onClick={() => alert("Exploring UI Design!")}
              variant="secondary"
            />
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">02 / DATA</span>
          <h2>Product Inventory</h2>
          <p>A reusable table displaying meaningful product data.</p>
        </div>

        <div className="table-wrapper">
          <Table
            columns={["Name", "Price", "Category"]}
            data={products}
            striped
          />
        </div>
      </section>

      <footer className="footer">
        Built with React & TypeScript · Assignment 02
      </footer>
    </main>
  );
}

export default Home;

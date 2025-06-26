import Layout from "@/components/Layout";
import CardPersonagens from "@/components/CardPersonagens";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
        Personagens Marvel
      </h1>

      <CardPersonagens />


    </Layout>
  );
}

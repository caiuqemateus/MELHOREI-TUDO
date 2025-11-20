import { Pet } from "@/Models/Pet";
import ProductCard from "../ProductCard";


type PetProps = {
  pets: Pet[];
};

export default function ProductList({ pets }: PetProps) {
  return (
    <section className="pet">
      
      {pets.map((pet) => (
        <ProductCard
          key={pet.id}
          nome={pet.nome}
          img={pet.imagem || pet.foto || ''}
          desc={pet.descricao || ''}
          tipo={pet.especie as "gato" | "cachorro" | "passaro" | "coelho" | "hamster" | "fazenda" | "teste"}
        />
      ))}
    </section>
  );
}
